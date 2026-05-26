import { useState, useEffect, useRef, useCallback } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'
import { GameCard } from '../components/GameCard'
import { Button } from '../components/ui/Button'
import type { GameState, GameCard as GameCardType } from '../types/game'
import { formatWealth } from '../types/game'
import {
  processDecision, processAction, processDefense, advanceTurn, startDrawPhase, forceSkipTurn,
} from '../lib/gameEngine'
import { pushGameState } from '../lib/multiplayerEngine'
import { saveGameResult } from '../lib/auth'
import Confetti from 'react-confetti'
import { supabase } from '../lib/supabase'
import { PlayerBoard } from '../components/game/PlayerBoard'
import { GameLog } from '../components/game/GameLog'
import { TurnTimer } from '../components/game/TurnTimer'
import { playSound } from '../lib/audio'

type UIPhase = 'loading' | 'playing' | 'decision' | 'targeting' | 'result'

export function MultiplayerGame() {
  const { roomId } = useParams<{ roomId: string }>()
  const navigate = useNavigate()
  const { profile, refreshProfile } = useAuth()

  const [gameState, setGameState] = useState<GameState | null>(null)
  const [uiPhase, setUiPhase] = useState<UIPhase>('loading')
  const [notification, setNotification] = useState<string | null>(null)
  const [onlinePlayers, setOnlinePlayers] = useState<Set<string>>(new Set())

  // Use refs to avoid stale closures in async callbacks and subscriptions
  const gameStateRef = useRef<GameState | null>(null)
  const uiPhaseRef = useRef<UIPhase>('loading')
  const resultSavedRef = useRef(false)
  const profileRef = useRef(profile)
  profileRef.current = profile

  const myPlayerId = profile?.id ?? ''

  // Derive these from gameState on every render
  const myPlayerIndex = gameState?.players.findIndex(p => p.id === myPlayerId) ?? -1
  const isMyTurn = gameState
    ? gameState.players[gameState.currentPlayerIndex]?.id === myPlayerId
    : false
  const myPlayer = myPlayerIndex >= 0 ? gameState?.players[myPlayerIndex] ?? null : null
  const currentPlayer = gameState?.players[gameState.currentPlayerIndex]
  const defenseCards = myPlayer?.hand.filter(c => c.type === 'defense') ?? []

  function setPhase(phase: UIPhase) {
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
    const myWealth = state.players.find(pl => pl.id === p.id)?.wealth ?? 0
    await saveGameResult(p.id, p.username, isWinner, myWealth)
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

    // Fallback polling every 3s just in case realtime is disabled/dropped
    const pollId = setInterval(async () => {
      const { data } = await supabase
        .from('multiplayer_rooms')
        .select('game_state')
        .eq('id', roomId)
        .maybeSingle()
      
      if (data?.game_state) {
        const remoteState = data.game_state as GameState
        if (shouldApplyRemoteState(remoteState)) {
           applyRemoteState(remoteState)
        }
      }
    }, 3000)

    return () => { 
      channel.unsubscribe()
      clearInterval(pollId) 
    }
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

  async function handleDefend(defenseCard: GameCardType) {
    const gs = gameStateRef.current
    if (!gs?.pendingTarget) return
    const next = processDefense(gs, myPlayerIndex, defenseCard, gs.pendingTarget.card)
    const final = advanceTurn({ ...next, pendingTarget: null })
    setGameState(final)
    gameStateRef.current = final
    setPhase(final.phase === 'game_over' ? 'result' : 'playing')
    await pushState(final)
    playSound('defend')
    if (final.phase === 'game_over') saveResult(final)
    notify('Blocked the attack!')
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
        <div style={{ color: '#64748b', fontSize: 14 }}>Loading game...</div>
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
          <div style={{ fontSize: 64, marginBottom: 16 }}>
            {isWinner ? '🏆' : placement === 2 ? '🥈' : placement === 3 ? '🥉' : '💪'}
          </div>
          <h1 style={{ fontSize: 32, fontWeight: 800, fontFamily: 'Space Grotesk, sans-serif', color: isWinner ? '#f59e0b' : '#f1f5f9', marginBottom: 8 }}>
            {isWinner ? 'Victory!' : `${placement}${ordinal} Place`}
          </h1>
          <p style={{ color: '#94a3b8', marginBottom: 28, fontSize: 16 }}>
            Final wealth: {formatWealth(myFinalPlayer?.wealth ?? 0)}
          </p>

          <div style={{ background: '#1a2235', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 16, padding: 20, marginBottom: 24 }}>
            <h3 style={{ fontSize: 13, fontWeight: 700, color: '#475569', marginBottom: 14, textTransform: 'uppercase', letterSpacing: '0.08em' }}>
              Final Rankings
            </h3>
            {sorted.map((p, i) => (
              <div key={p.id} style={{
                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                padding: '10px 0',
                borderBottom: i < sorted.length - 1 ? '1px solid rgba(255,255,255,0.05)' : 'none',
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <span style={{ fontSize: 20, width: 28 }}>
                    {i === 0 ? '🥇' : i === 1 ? '🥈' : i === 2 ? '🥉' : `#${i + 1}`}
                  </span>
                  <span style={{
                    fontSize: 14,
                    fontWeight: p.id === myPlayerId ? 700 : 500,
                    color: p.id === myPlayerId ? '#60a5fa' : '#f1f5f9',
                  }}>
                    {p.name}{p.id === myPlayerId ? ' (you)' : ''}
                  </span>
                </div>
                <span style={{ fontSize: 14, fontWeight: 700, color: '#10b981', fontFamily: 'Space Grotesk, sans-serif' }}>
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
    <div style={{ minHeight: '100vh', background: '#0a0e1a', display: 'flex', flexDirection: 'column' }}>
      {/* Header */}
      <div style={{
        position: 'sticky', top: 0, zIndex: 40,
        background: 'rgba(10,14,26,0.96)', backdropFilter: 'blur(12px)',
        borderBottom: '1px solid rgba(255,255,255,0.06)',
        padding: '0 20px', height: 56,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      }}>
        <div style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 800, fontSize: 16, color: '#f59e0b' }}>
          PAISA WAR
        </div>
        <div style={{ display: 'flex', gap: 20, alignItems: 'center' }}>
          <span style={{ padding: '3px 10px', borderRadius: 5, background: 'rgba(16,185,129,0.15)', color: '#34d399', fontSize: 11, fontWeight: 700 }}>
            🌐 ONLINE
          </span>
        </div>
      </div>

      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', padding: '16px 20px', gap: 14, maxWidth: 1100, margin: '0 auto', width: '100%' }}>

        {/* Toast notification */}
        {notification && (
          <div style={{
            position: 'fixed', top: 68, right: 20,
            background: '#1e293b', border: '1px solid rgba(255,255,255,0.12)',
            borderRadius: 10, padding: '11px 18px',
            fontSize: 14, color: '#f1f5f9', zIndex: 200,
            boxShadow: '0 8px 24px rgba(0,0,0,0.5)',
          }}>
            {notification}
          </div>
        )}

        {/* Player cards grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(175px, 1fr))', gap: 12 }}>
          {gameState.players.map((player, i) => (
            <PlayerBoard
              key={player.id}
              player={player}
              isCurrent={i === gameState.currentPlayerIndex}
              isMe={player.id === myPlayerId}
              isTarget={uiPhase === 'targeting' && player.id !== myPlayerId}
              isOffline={!onlinePlayers.has(player.id)}
              wealthGoal={gameState.wealthGoal}
              onClick={() => handleTargetSelect(i)}
            />
          ))}
        </div>

        {/* Game log */}
        <GameLog log={gameState.log} />

        {/* Action panel */}
        <div style={{
          background: '#131b2e', border: '1px solid rgba(255,255,255,0.07)',
          borderRadius: 16, padding: '24px', minHeight: 200,
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
            <h2 style={{ margin: 0, fontSize: 18, color: '#f1f5f9', fontWeight: 700 }}>
              {isMyTurn ? <span style={{ color: '#60a5fa' }}>Your Turn</span> : <span>{currentPlayer?.name}'s Turn</span>}
            </h2>
            <div style={{ fontSize: 12, color: '#475569', fontWeight: 700 }}>TURN {gameState.turn}</div>
          </div>
          
          <TurnTimer 
            turnStartTime={gameState.turnStartTime} 
            timeLimit={gameState.timeLimit} 
            active={gameState.phase !== 'game_over' && (isMyTurn || gameState.players[0].id === myPlayerId)} 
            onTimeout={handleTimeout} 
          />

          {/* Not my turn */}
          {!isMyTurn && uiPhase === 'playing' && (
            <div style={{ textAlign: 'center', padding: '36px 0' }}>
              <div style={{ fontSize: 32, marginBottom: 12 }}>⏳</div>
              <div style={{ fontSize: 15, fontWeight: 600, color: '#94a3b8', marginBottom: 4 }}>
                Waiting for {currentPlayer?.name}...
              </div>
              <div style={{ fontSize: 13, color: '#475569' }}>Their turn to play</div>
              {/* Show my hand while waiting */}
              {myPlayer && myPlayer.hand.length > 0 && (
                <div style={{ marginTop: 20, borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: 16 }}>
                  <p style={{ fontSize: 12, color: '#475569', marginBottom: 10 }}>
                    Your hand ({myPlayer.hand.length} cards):
                  </p>
                  <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', justifyContent: 'center' }}>
                    {myPlayer.hand.map(card => (
                      <GameCard key={card.id} card={card} compact disabled />
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Draw phase */}
          {isMyTurn && gameState.phase === 'draw' && (
            <div style={{ textAlign: 'center', padding: '28px 0' }}>
              <div style={{ fontSize: 13, color: '#94a3b8', marginBottom: 18 }}>
                Your turn! Draw a card to start.
              </div>
              <Button size="lg" variant="gold" onClick={handleDrawCard}>
                Draw a Card ({gameState.deck.length} left in deck)
              </Button>
              {myPlayer && myPlayer.hand.length > 0 && (
                <div style={{ marginTop: 20, borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: 16 }}>
                  <p style={{ fontSize: 12, color: '#475569', marginBottom: 10 }}>Your current hand:</p>
                  <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', justifyContent: 'center' }}>
                    {myPlayer.hand.map(card => (
                      <GameCard key={card.id} card={card} compact disabled />
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Play phase — show full hand, pick one to play */}
          {isMyTurn && gameState.phase === 'play' && (
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 14 }}>
                <p style={{ fontSize: 13, color: '#94a3b8' }}>
                  {gameState.drawnCard ? `Drew "${gameState.drawnCard.name}" — pick a card to play:` : 'Pick a card to play:'}
                </p>
              </div>
              <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', justifyContent: 'center' }}>
                {myPlayer?.hand.map(card => (
                  <GameCard key={card.id} card={card} onClick={() => handlePlayCard(card)} />
                ))}
              </div>
            </div>
          )}

          {/* Decision card */}
          {uiPhase === 'decision' && gameState.pendingDecision && (
            <div>
              <div style={{ marginBottom: 16 }}>
                <h3 style={{ fontSize: 17, fontWeight: 800, color: '#f1f5f9', fontFamily: 'Space Grotesk, sans-serif', marginBottom: 4 }}>
                  {gameState.pendingDecision.card.name}
                </h3>
                <p style={{ fontSize: 13, color: '#475569' }}>{gameState.pendingDecision.card.flavor}</p>
              </div>
              <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                {gameState.pendingDecision.card.options?.map(opt => {
                  const palette: Record<string, { bg: string; border: string }> = {
                    spend: { bg: '#dc2626', border: '#ef4444' },
                    save:  { bg: '#1d4ed8', border: '#3b82f6' },
                    invest:{ bg: '#059669', border: '#10b981' },
                  }
                  const c = palette[opt.type] ?? palette.save
                  const val = opt.effect.value ?? 0
                  return (
                    <button
                      key={opt.type}
                      onClick={() => handleDecision(opt.type)}
                      style={{
                        flex: '1 1 180px', padding: '16px 18px', borderRadius: 12,
                        background: `${c.bg}1a`, border: `2px solid ${c.border}55`,
                        color: '#f1f5f9', cursor: 'pointer', textAlign: 'left',
                        transition: 'all 0.15s', fontFamily: 'inherit',
                      }}
                      onMouseEnter={e => {
                        (e.currentTarget as HTMLButtonElement).style.background = `${c.bg}33`
                        ;(e.currentTarget as HTMLButtonElement).style.borderColor = c.border
                      }}
                      onMouseLeave={e => {
                        (e.currentTarget as HTMLButtonElement).style.background = `${c.bg}1a`
                        ;(e.currentTarget as HTMLButtonElement).style.borderColor = `${c.border}55`
                      }}
                    >
                      <div style={{ fontSize: 10, fontWeight: 800, color: c.border, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 5 }}>
                        {opt.type}
                      </div>
                      <div style={{ fontSize: 14, fontWeight: 700, marginBottom: 4 }}>{opt.label}</div>
                      <div style={{ fontSize: 12, color: '#94a3b8', marginBottom: 8 }}>{opt.description}</div>
                      <div style={{ fontSize: 15, fontWeight: 800, color: val >= 0 ? '#10b981' : '#ef4444', fontFamily: 'Space Grotesk, sans-serif' }}>
                        {val >= 0 ? '+' : ''}{formatWealth(Math.abs(val))}
                        {opt.effect.type === 'wealth_next_turn' && <span style={{ fontSize: 10, color: '#475569', fontWeight: 400, marginLeft: 4 }}>next turn</span>}
                        {opt.effect.type === 'wealth_end_game' && <span style={{ fontSize: 10, color: '#475569', fontWeight: 400, marginLeft: 4 }}>at end</span>}
                      </div>
                    </button>
                  )
                })}
              </div>
            </div>
          )}

          {/* Targeting */}
          {uiPhase === 'targeting' && gameState.pendingTarget && (
            <div style={{ textAlign: 'center', padding: '20px 0' }}>
              <div style={{ fontSize: 28, marginBottom: 10 }}>⚡</div>
              <h3 style={{ fontSize: 17, fontWeight: 800, color: '#ef4444', marginBottom: 6, fontFamily: 'Space Grotesk, sans-serif' }}>
                {gameState.pendingTarget.card.name}
              </h3>
              <p style={{ fontSize: 13, color: '#94a3b8', marginBottom: 20 }}>
                Click on an opponent above to attack them
              </p>
              {defenseCards.length > 0 && (
                <div style={{ marginBottom: 16 }}>
                  <p style={{ fontSize: 12, color: '#475569', marginBottom: 8 }}>Or defend yourself:</p>
                  <div style={{ display: 'flex', gap: 8, justifyContent: 'center', flexWrap: 'wrap' }}>
                    {defenseCards.map(dc => (
                      <GameCard key={dc.id} card={dc} compact onClick={() => handleDefend(dc)} />
                    ))}
                  </div>
                </div>
              )}
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setPhase('playing')}
              >
                Cancel
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
