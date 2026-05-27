import { useState, useEffect, useRef, useCallback } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'
import { Button } from '../components/ui/Button'
import type { GameState, GameCard as GameCardType } from '../types/game'
import { formatWealth } from '../types/game'
import {
  processDecision, processAction, advanceTurn, startDrawPhase, forceSkipTurn
} from '../lib/gameEngine'
import { pushGameState } from '../lib/multiplayerEngine'
import { saveGameResult } from '../lib/auth'
import Confetti from 'react-confetti'
import { supabase } from '../lib/supabase'
import { ForfeitModal } from '../components/ForfeitModal'
import { playSound } from '../lib/audio'
import { GameBoard, UIPhase } from '../components/game/GameBoard'

type PagePhase = UIPhase | 'loading' | 'result'

export function MultiplayerGame() {
  const { roomId } = useParams<{ roomId: string }>()
  const navigate = useNavigate()
  const { profile, refreshProfile } = useAuth()

  const [gameState, setGameState] = useState<GameState | null>(null)
  const [uiPhase, setUiPhase] = useState<PagePhase>('loading')
  const [notification, setNotification] = useState<string | null>(null)
  const [showForfeitModal, setShowForfeitModal] = useState(false)
  const [onlinePlayers, setOnlinePlayers] = useState<Set<string>>(new Set())

  // Use refs to avoid stale closures in async callbacks and subscriptions
  const gameStateRef = useRef<GameState | null>(null)
  const uiPhaseRef = useRef<PagePhase>('loading')
  const resultSavedRef = useRef(false)
  const profileRef = useRef(profile)
  profileRef.current = profile

  const myPlayerId = profile?.id ?? ''

  // Derive these from gameState on every render
  const myPlayerIndex = gameState?.players.findIndex(p => p.id === myPlayerId) ?? -1
  const myPlayer = myPlayerIndex >= 0 ? gameState?.players[myPlayerIndex] ?? null : null

  function setPhase(phase: PagePhase) {
    uiPhaseRef.current = phase
    setUiPhase(phase)
  }

  function notify(msg: string) {
    setNotification(msg)
    setTimeout(() => setNotification(null), 3000)
  }

  async function saveResult(state: GameState) {
    if (resultSavedRef.current) return
    const p = profileRef.current
    if (!p) return
    resultSavedRef.current = true
    const isWinner = state.winner?.id === p.id
    const myFinalPlayer = state.players.find(pl => pl.id === p.id)
    const myWealth = myFinalPlayer?.wealth ?? 0
    const placement = [...state.players]
      .sort((a, b) => b.wealth - a.wealth)
      .findIndex(pl => pl.id === p.id) + 1
    await saveGameResult(p.id, p.username, isWinner, myWealth, placement, state.players.length, p.win_streak ?? 0, {
      investChoices: myFinalPlayer?.investChoices ?? 0,
      emiDamageTaken: myFinalPlayer?.emiDamageTaken ?? false
    })
    await refreshProfile()
  }

  function applyRemoteState(gs: GameState) {
    setGameState(gs)
    gameStateRef.current = gs
    if (gs.phase === 'game_over') {
      setPhase('result')
      saveResult(gs)
      if (gs.winner?.id === myPlayerId) playSound('win')
      else playSound('lose')
    } else {
      // Only reset to 'playing' if not mid-local-interaction
      const cur = uiPhaseRef.current
      if (cur !== 'decision' && cur !== 'targeting' && cur !== 'result') {
        setPhase('playing')
      }
    }
  }

  // Helper to determine if we should accept remote state over local optimistic state
  const shouldApplyRemoteState = useCallback((remoteState: GameState) => {
    const localState = gameStateRef.current
    if (!localState) return true
    
    // Always accept if the remote state advanced to a newer turn
    if (remoteState.turn > localState.turn) return true
    
    // If it's NOT our turn, we must accept phase/log changes from the active player
    const isMyTurnLocally = localState.players[localState.currentPlayerIndex]?.id === myPlayerId
    if (!isMyTurnLocally) {
      if (remoteState.phase !== localState.phase || 
          remoteState.currentPlayerIndex !== localState.currentPlayerIndex ||
          JSON.stringify(remoteState.log[0]) !== JSON.stringify(localState.log[0])) {
        return true
      }
    }
    
    return false
  }, [myPlayerId])

  // Single effect: subscribe first, then do initial fetch.
  // This way we never miss an update that arrives between fetch and subscribe.
  useEffect(() => {
    if (!roomId) return

    // Use a unique channel name for the game view so it doesn't clash with the lobby channel
    const channel = supabase
      .channel(`game-${roomId}`)
      .on('presence', { event: 'sync' }, () => {
        const state = channel.presenceState()
        const onlineIds = new Set<string>()
        Object.values(state).forEach(presences => {
          presences.forEach((p: any) => {
            if (p.player_id) onlineIds.add(p.player_id)
          })
        })
        setOnlinePlayers(onlineIds)
      })
      .on(
        'postgres_changes',
        { event: 'UPDATE', schema: 'public', table: 'multiplayer_rooms', filter: `id=eq.${roomId}` },
        (payload) => {
          const updated = payload.new as { game_state: GameState | null }
          if (updated.game_state && shouldApplyRemoteState(updated.game_state)) {
            applyRemoteState(updated.game_state)
          }
        },
      )
      .subscribe(async (status) => {
        if (status === 'SUBSCRIBED') {
          if (myPlayerId) await channel.track({ player_id: myPlayerId })
          
          // Initial fetch after subscription is live — no missed updates
          const { data } = await supabase
            .from('multiplayer_rooms')
            .select('game_state, status')
            .eq('id', roomId)
            .single()
          if (data?.game_state) {
            applyRemoteState(data.game_state as GameState)
          }
        }
      })

    return () => { channel.unsubscribe() }
  }, [roomId, shouldApplyRemoteState]) // eslint-disable-line react-hooks/exhaustive-deps

  const handleTimeout = useCallback(async () => {
    const gs = gameStateRef.current
    if (!gs || gs.phase === 'game_over') return
    
    const isHost = gs.players[0].id === myPlayerId
    const isMe = gs.players[gs.currentPlayerIndex].id === myPlayerId
    
    if (!isHost && !isMe) return

    const newState = forceSkipTurn(gs)
    setGameState(newState)
    gameStateRef.current = newState
    setPhase(newState.phase === 'game_over' ? 'result' : 'playing')
    await pushState(newState)
    playSound('lose')
    notify(`Time ran out for ${gs.players[gs.currentPlayerIndex].name}!`)
  }, [myPlayerId])

  async function pushState(state: GameState) {
    if (!roomId) return
    await pushGameState(roomId, state)
  }

  // --- Game action handlers ---

  async function handleDrawCard() {
    const gs = gameStateRef.current
    if (!gs || gs.players[gs.currentPlayerIndex]?.id !== myPlayerId) return
    if (gs.phase !== 'draw') return

    const { state: drawn } = startDrawPhase(gs, myPlayerIndex)
    const updated = { ...drawn, phase: 'play' as const }
    setGameState(updated)
    gameStateRef.current = updated
    playSound('draw')
    // Don't push yet — player needs to pick a card
  }

  async function handlePlayCard(card: GameCardType) {
    const gs = gameStateRef.current
    if (!gs || gs.players[gs.currentPlayerIndex]?.id !== myPlayerId) return
    if (gs.phase !== 'play') return

    if (card.type === 'decision') {
      const updated = { ...gs, pendingDecision: { card, playerIndex: myPlayerIndex } }
      setGameState(updated)
      gameStateRef.current = updated
      setPhase('decision')
      // Don't push — decision hasn't been made yet
    } else if (card.type === 'action') {
      if (card.effect?.target === 'target') {
        const updated = { ...gs, pendingTarget: { card, playerIndex: myPlayerIndex, effect: card.effect } }
        setGameState(updated)
        gameStateRef.current = updated
        setPhase('targeting')
        // Don't push — target not picked yet
      } else {
        // AoE or self action — apply immediately
        const next = processAction(gs, myPlayerIndex, card, myPlayerIndex)
        const final = next.phase !== 'game_over' ? advanceTurn(next) : next
        setGameState(final)
        gameStateRef.current = final
        setPhase(final.phase === 'game_over' ? 'result' : 'playing')
        await pushState(final)
        playSound('play')
        if (final.phase === 'game_over') saveResult(final)
        notify(`Played ${card.name}!`)
      }
    } else if (card.type === 'defense') {
      // Playing defense as regular turn action — discard it and end turn
      const discard = [...gs.discardPile, card]
      const hand = gs.players[myPlayerIndex].hand.filter(c => c.id !== card.id)
      const players = gs.players.map((p, i) => i === myPlayerIndex ? { ...p, hand } : p)
      const next = advanceTurn({ ...gs, players, discardPile: discard })
      setGameState(next)
      gameStateRef.current = next
      setPhase(next.phase === 'game_over' ? 'result' : 'playing')
      await pushState(next)
      playSound('defend')
      if (next.phase === 'game_over') saveResult(next)
      notify('Discarded defense card.')
    }
  }

  async function handleDecision(choice: 'spend' | 'save' | 'invest') {
    const gs = gameStateRef.current
    if (!gs?.pendingDecision) return
    const { card } = gs.pendingDecision
    const next = processDecision(gs, myPlayerIndex, choice, card)
    const final = next.phase !== 'game_over' ? advanceTurn(next) : next
    const cleared = { ...final, pendingDecision: null }
    setGameState(cleared)
    gameStateRef.current = cleared
    setPhase(final.phase === 'game_over' ? 'result' : 'playing')
    await pushState(cleared)
    playSound('play')
    if (final.phase === 'game_over') saveResult(final)
    notify(`${choice.charAt(0).toUpperCase() + choice.slice(1)}!`)
  }

  async function handleTargetSelect(targetIndex: number) {
    const gs = gameStateRef.current
    if (!gs?.pendingTarget) return
    const { card } = gs.pendingTarget
    const next = processAction(gs, myPlayerIndex, card, targetIndex)
    const final = next.phase !== 'game_over' ? advanceTurn(next) : next
    const cleared = { ...final, pendingTarget: null }
    setGameState(cleared)
    gameStateRef.current = cleared
    setPhase(final.phase === 'game_over' ? 'result' : 'playing')
    await pushState(cleared)
    playSound('attack')
    if (final.phase === 'game_over') saveResult(final)
    notify(`${card.name} hit ${gs.players[targetIndex].name}!`)
  }



  const handleForfeit = async () => {
    setShowForfeitModal(false)
    const gs = gameStateRef.current
    if (!gs || !roomId || !myPlayerId) {
      navigate('/dashboard')
      return
    }

    // Set wealth to 0 to guarantee last place and end the game
    const updatedPlayers = gs.players.map(p => {
      if (p.id === myPlayerId) {
        return { ...p, wealth: 0 }
      }
      return p
    })
    
    const forfeitState = { 
      ...gs, 
      players: updatedPlayers, 
      phase: 'game_over' as const,
      log: [`${myPlayer?.name} forfeited the match.`, ...gs.log]
    }
    
    setGameState(forfeitState)
    gameStateRef.current = forfeitState
    
    await pushState(forfeitState)
    // The player who forfeited is instantly navigated out to Dashboard.
    // The remaining players will receive the updated game_over state and the ResultScreen.
    navigate('/dashboard')
  }

  // ---- Render ----

  if (uiPhase === 'loading' || !gameState) {
    return (
      <div style={{ minHeight: '100vh', background: '#0a0e1a', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: 16 }}>
        <div style={{
          width: 44, height: 44, borderRadius: '50%',
          border: '3px solid rgba(255,255,255,0.08)',
          borderTopColor: '#f59e0b',
          animation: 'spin 0.8s linear infinite',
        }} />
        <div style={{ color: '#64748b', fontSize: 18 }}>Loading game...</div>
        <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
      </div>
    )
  }

  if (uiPhase === 'result') {
    const sorted = [...gameState.players].sort((a, b) => b.wealth - a.wealth)
    const myFinalPlayer = gameState.players.find(p => p.id === myPlayerId)
    const isWinner = gameState.winner?.id === myPlayerId
    const placement = sorted.findIndex(p => p.id === myPlayerId) + 1
    const ordinal = placement === 1 ? 'st' : placement === 2 ? 'nd' : placement === 3 ? 'rd' : 'th'

    return (
      <div style={{ minHeight: '100vh', background: '#0a0e1a', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 24 }}>
        {isWinner && <Confetti width={window.innerWidth} height={window.innerHeight} recycle={false} numberOfPieces={500} colors={['#f59e0b', '#10b981', '#3b82f6', '#ec4899', '#f1f5f9']} />}
        <div style={{ width: '100%', maxWidth: 520, textAlign: 'center', zIndex: 10 }}>
          <div style={{ fontSize: 80, marginBottom: 16 }}>
            {isWinner ? '🏆' : placement === 2 ? '🥈' : placement === 3 ? '🥉' : '💪'}
          </div>
          <h1 style={{ fontSize: 40, fontWeight: 800, fontFamily: 'Space Grotesk, sans-serif', color: isWinner ? '#f59e0b' : '#f1f5f9', marginBottom: 8 }}>
            {isWinner ? 'Victory!' : `${placement}${ordinal} Place`}
          </h1>
          <p style={{ color: '#94a3b8', marginBottom: 28, fontSize: 20 }}>
            Final wealth: {formatWealth(myFinalPlayer?.wealth ?? 0)}
          </p>

          <div style={{ background: '#1a2235', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 16, padding: 20, marginBottom: 24 }}>
            <h3 style={{ fontSize: 16, fontWeight: 700, color: '#475569', marginBottom: 14, textTransform: 'uppercase', letterSpacing: '0.08em' }}>
              Final Rankings
            </h3>
            {sorted.map((p, i) => (
              <div key={p.id} style={{
                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                padding: '10px 0',
                borderBottom: i < sorted.length - 1 ? '1px solid rgba(255,255,255,0.05)' : 'none',
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <span style={{ fontSize: 25, width: 28 }}>
                    {i === 0 ? '🥇' : i === 1 ? '🥈' : i === 2 ? '🥉' : `#${i + 1}`}
                  </span>
                  <span style={{
                    fontSize: 18,
                    fontWeight: p.id === myPlayerId ? 700 : 500,
                    color: p.id === myPlayerId ? '#60a5fa' : '#f1f5f9',
                  }}>
                    {p.name}{p.id === myPlayerId ? ' (you)' : ''}
                  </span>
                </div>
                <span style={{ fontSize: 18, fontWeight: 700, color: '#10b981', fontFamily: 'Space Grotesk, sans-serif' }}>
                  {formatWealth(p.wealth)}
                </span>
              </div>
            ))}
          </div>

          <div style={{ display: 'flex', gap: 12, justifyContent: 'center' }}>
            <Button variant="gold" size="lg" onClick={() => navigate('/multiplayer')}>Play Again</Button>
            <Button variant="secondary" onClick={() => navigate('/dashboard')}>Dashboard</Button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Header */}
      <div className="glass-panel" style={{
        position: 'sticky', top: 0, zIndex: 40,
        padding: '0 20px', height: 60,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        borderRadius: 0, borderTop: 'none', borderLeft: 'none', borderRight: 'none',
      }}>
        <button onClick={() => setShowForfeitModal(true)} style={{ background: 'none', border: 'none', color: '#64748b', cursor: 'pointer', fontSize: 16, fontFamily: 'inherit', display: 'flex', alignItems: 'center', gap: 6 }}>
          ← Leave Match
        </button>
        <div style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 800, fontSize: 20, color: '#f59e0b', position: 'absolute', left: '50%', transform: 'translateX(-50%)' }}>
          PAISA WAR
        </div>
        <div style={{ display: 'flex', gap: 20, alignItems: 'center' }}>
          <span style={{ padding: '3px 10px', borderRadius: 5, background: 'rgba(16,185,129,0.15)', color: '#34d399', fontSize: 14, fontWeight: 700 }}>
            🌐 ONLINE
          </span>
        </div>
      </div>

      {showForfeitModal && (
        <ForfeitModal 
          onCancel={() => setShowForfeitModal(false)}
          onConfirm={handleForfeit}
        />
      )}

      {notification && (
        <div style={{
          position: 'fixed', top: 68, right: 20,
          background: '#1e293b', border: '1px solid rgba(255,255,255,0.12)',
          borderRadius: 10, padding: '11px 18px',
          fontSize: 18, color: '#f1f5f9', zIndex: 200,
          boxShadow: '0 8px 24px rgba(0,0,0,0.5)',
        }}>
          {notification}
        </div>
      )}

      <GameBoard
        gameState={gameState}
        myPlayerId={myPlayerId}
        isMultiplayer={true}
        uiPhase={uiPhase as UIPhase}
        onlinePlayers={onlinePlayers}
        onDrawCard={handleDrawCard}
        onPlayCard={handlePlayCard}
        onTargetSelect={handleTargetSelect}
        onDecision={handleDecision}
        onTimeout={handleTimeout}
        onCancelTargeting={() => {
          setPhase('playing')
        }}
      />
    </div>
  )
}
