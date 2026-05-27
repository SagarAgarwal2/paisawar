import { useState, useEffect, useCallback, useRef } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'
import { Button } from '../components/ui/Button'
import { ForfeitModal } from '../components/ForfeitModal'
import type { GameState, PlayerState, GameCard as GameCardType } from '../types/game'
import { formatWealth } from '../types/game'
import {
  initGame, startDrawPhase, processDecision, processAction,
  advanceTurn, doBotTurn, calculateRPChange, forceSkipTurn
} from '../lib/gameEngine'
import { saveGameResult } from '../lib/auth'
import { playSound } from '../lib/audio'
import Confetti from 'react-confetti'
import { GameBoard, UIPhase } from '../components/game/GameBoard'

type GamePhaseUI = 'setup' | UIPhase | 'result'

function GameClock({ startTime, timeLimit }: { startTime: number; timeLimit: number }) {
  const [now, setNow] = useState(Date.now())

  useEffect(() => {
    const interval = setInterval(() => setNow(Date.now()), 1000)
    return () => clearInterval(interval)
  }, [])

  const elapsed = now - startTime
  const remaining = Math.max(0, timeLimit - elapsed)
  const minutesLeft = Math.floor(remaining / 60000)
  const secondsLeft = Math.floor((remaining % 60000) / 1000)

  return (
    <div style={{ fontSize: 16, color: minutesLeft < 5 ? '#ef4444' : '#64748b', fontWeight: minutesLeft < 5 ? 700 : 400 }}>
      ⏱ {minutesLeft}:{secondsLeft.toString().padStart(2, '0')}
    </div>
  )
}

export function Game() {
  const [params] = useSearchParams()
  const mode = params.get('mode') ?? 'ranked'
  const navigate = useNavigate()
  const { profile, refreshProfile } = useAuth()

  const [gameState, setGameState] = useState<GameState | null>(null)
  const gameStateRef = useRef<GameState | null>(null)
  const [uiPhase, setUiPhase] = useState<GamePhaseUI>('setup')

  // Keep ref in sync
  useEffect(() => {
    gameStateRef.current = gameState
  }, [gameState])
  const [botCount, setBotCount] = useState(2)
  const [animating, setAnimating] = useState(false)
  const [notification, setNotification] = useState<string | null>(null)
  const [showForfeitModal, setShowForfeitModal] = useState(false)
  const botTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const humanPlayerIndex = 0

  const notify = (msg: string) => {
    setNotification(msg)
    setTimeout(() => setNotification(null), 3000)
  }

  const startGame = useCallback(() => {
    const humanName = profile?.username ?? 'You'
    const state = initGame({ id: profile?.id ?? 'human', name: humanName }, botCount)
    setGameState(state)
    setUiPhase('playing')
  }, [profile, botCount])

  const handleGameOver = useCallback((finalState: GameState) => {
    setGameState(finalState)
    setUiPhase('result')
    if (profile?.id && profile?.username) {
      const humanPlayer = finalState.players[humanPlayerIndex]
      const isWinner = finalState.winner?.id === humanPlayer.id
      const placement = [...finalState.players]
        .sort((a, b) => b.wealth - a.wealth)
        .findIndex(p => p.id === humanPlayer.id) + 1
      if (isWinner) playSound('win')
      else playSound('lose')
      saveGameResult(
        profile.id, profile.username, isWinner, humanPlayer.wealth,
        placement, finalState.players.length, profile.win_streak ?? 0,
        { investChoices: humanPlayer.investChoices, emiDamageTaken: humanPlayer.emiDamageTaken }
      ).then(() => { refreshProfile() })
    }
  }, [profile, humanPlayerIndex, refreshProfile])

  const handleForfeit = () => {
    setShowForfeitModal(false)
    if (!gameState) {
      navigate('/dashboard')
      return
    }
    // Record a loss automatically
    const forfeitState = { ...gameState, phase: 'game_over' as const }
    setGameState(forfeitState)
    setUiPhase('result')
    if (profile?.id && profile?.username) {
      const humanPlayer = forfeitState.players[humanPlayerIndex]
      playSound('lose')
      saveGameResult(profile.id, profile.username, false, humanPlayer.wealth).then(() => {
        refreshProfile()
        navigate('/dashboard')
      })
    } else {
      navigate('/dashboard')
    }
  }

  // Bot turn handler
  useEffect(() => {
    if (!gameState || uiPhase !== 'playing' || gameState.phase === 'game_over') return
    const currentPlayer = gameState.players[gameState.currentPlayerIndex]
    if (!currentPlayer.isBot) return

    setAnimating(true)
    botTimerRef.current = setTimeout(() => {
      const { state: newState } = doBotTurn(gameState)
      setAnimating(false)
      if (newState.phase === 'game_over') {
        handleGameOver(newState)
      } else {
        setGameState(newState)
      }
    }, 2500)

    return () => { if (botTimerRef.current) clearTimeout(botTimerRef.current) }
  }, [gameState, uiPhase, handleGameOver])

  const handleTimeout = useCallback(() => {
    const gs = gameStateRef.current
    if (!gs || gs.phase === 'game_over' || gs.currentPlayerIndex !== humanPlayerIndex) return
    const newState = forceSkipTurn(gs)
    if (newState.phase === 'game_over') { handleGameOver(newState) } else { setGameState(newState); setUiPhase('playing') }
    playSound('lose')
    notify('Time ran out! Turn skipped.')
  }, [humanPlayerIndex, handleGameOver])

  const handleDrawCard = () => {
    if (!gameState || animating) return
    const currentPlayer = gameState.players[gameState.currentPlayerIndex]
    if (currentPlayer.isBot || gameState.currentPlayerIndex !== humanPlayerIndex) return

    const { state: newState } = startDrawPhase(gameState, humanPlayerIndex)
    setGameState({ ...newState, phase: 'play' })
    playSound('draw')
  }


  const handlePlayCard = (card: GameCardType) => {
    if (!gameState || animating) return
    if (gameState.phase !== 'play') return
    if (gameState.currentPlayerIndex !== humanPlayerIndex) return

    if (card.type === 'decision') {
      setGameState({ ...gameState, pendingDecision: { card, playerIndex: humanPlayerIndex } })
      setUiPhase('decision')
    } else if (card.type === 'action') {
      const needsTarget = card.effect?.target === 'target'
      if (needsTarget) {
        setGameState({ ...gameState, pendingTarget: { card, playerIndex: humanPlayerIndex, effect: card.effect! } })
        setUiPhase('targeting')
      } else {
        const newState = processAction(gameState, humanPlayerIndex, card, humanPlayerIndex)
        const finalState = newState.phase !== 'game_over' ? advanceTurn(newState) : newState
        if (finalState.phase === 'game_over') { handleGameOver(finalState) } else { setGameState(finalState) }
        playSound('play')
        notify(`Played ${card.name}!`)
      }
    } else if (card.type === 'defense') {
      const discard = [...gameState.discardPile, card]
      const hand = gameState.players[humanPlayerIndex].hand.filter(c => c.id !== card.id)
      const updatedPlayers = gameState.players.map((p, i) => i === humanPlayerIndex ? { ...p, hand } : p)
      const newState = advanceTurn({ ...gameState, players: updatedPlayers, discardPile: discard })
      if (newState.phase === 'game_over') { handleGameOver(newState) } else { setGameState(newState) }
      playSound('play')
      notify('Discarded defense card to end turn.')
    }
  }

  const handleDecision = (choice: 'spend' | 'save' | 'invest') => {
    if (!gameState?.pendingDecision) return
    const { card } = gameState.pendingDecision
    const newState = processDecision(gameState, humanPlayerIndex, choice, card)
    const finalState = newState.phase !== 'game_over' ? advanceTurn(newState) : newState
    const withClear = { ...finalState, pendingDecision: null }
    if (finalState.phase === 'game_over') { handleGameOver(withClear) } else { setGameState(withClear); setUiPhase('playing') }
    playSound('play')
    notify(`${choice.charAt(0).toUpperCase() + choice.slice(1)} choice made!`)
  }

  const handleTargetSelect = (targetIndex: number) => {
    if (!gameState?.pendingTarget) return
    const { card } = gameState.pendingTarget
    const newState = processAction(gameState, humanPlayerIndex, card, targetIndex)
    const finalState = newState.phase !== 'game_over' ? advanceTurn(newState) : newState
    const withClear = { ...finalState, pendingTarget: null }
    if (finalState.phase === 'game_over') { handleGameOver(withClear) } else { setGameState(withClear); setUiPhase('playing') }
    playSound('attack')
    notify(`${card.name} hit ${gameState.players[targetIndex].name}!`)
  }



  if (uiPhase === 'setup') {
    return <SetupScreen mode={mode} botCount={botCount} setBotCount={setBotCount} onStart={startGame} onBack={() => navigate('/dashboard')} />
  }

  if (uiPhase === 'result' && gameState) {
    const humanPlayer = gameState.players[humanPlayerIndex]
    const isWinner = gameState.winner?.id === humanPlayer.id
    const placement = [...gameState.players]
      .sort((a, b) => b.wealth - a.wealth)
      .findIndex(p => p.id === humanPlayer.id) + 1
    const rpChange = mode === 'ranked' ? calculateRPChange(placement, gameState.players.length, profile?.win_streak ?? 0) : 0
    // Near-miss: player was within 20% of the goal but didn't win
    const wealthGap = gameState.wealthGoal - humanPlayer.wealth
    const nearMiss = !isWinner && wealthGap > 0 && wealthGap < gameState.wealthGoal * 0.2

    return (
      <ResultScreen
        isWinner={isWinner}
        placement={placement}
        finalWealth={humanPlayer.wealth}
        rpChange={rpChange}
        nearMiss={nearMiss}
        wealthGap={wealthGap}
        players={gameState.players}
        mode={mode}
        onPlayAgain={() => { setGameState(null); setUiPhase('setup') }}
        onDashboard={() => navigate('/dashboard')}
      />
    )
  }

  if (!gameState) return null

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
          ← End Game
        </button>
        <div style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 800, fontSize: 20, color: '#f59e0b', position: 'absolute', left: '50%', transform: 'translateX(-50%)' }}>
          PAISA WAR
        </div>
        <div style={{ display: 'flex', gap: 20, alignItems: 'center' }}>
          {mode === 'ranked' && (
            <span style={{ padding: '3px 10px', borderRadius: 5, background: 'rgba(37,99,235,0.15)', color: '#60a5fa', fontSize: 14, fontWeight: 700 }}>
              RANKED
            </span>
          )}
          <GameClock startTime={gameState.startTime} timeLimit={gameState.timeLimit} />
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
        myPlayerId={profile?.id ?? 'human'}
        isMultiplayer={false}
        uiPhase={uiPhase as UIPhase}
        onDrawCard={handleDrawCard}
        onPlayCard={handlePlayCard}
        onTargetSelect={handleTargetSelect}
        onDecision={handleDecision}
        onTimeout={handleTimeout}
        onCancelTargeting={() => {
          setGameState({ ...gameState, pendingTarget: null })
          setUiPhase('playing')
        }}
      />
    </div>
  )
}

function SetupScreen({ mode, botCount, setBotCount, onStart, onBack }: { mode: string; botCount: number; setBotCount: (n: number) => void; onStart: () => void; onBack: () => void }) {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 24 }}>
      <div style={{ width: '100%', maxWidth: 480, animation: 'slideUp 0.4s ease' }}>
        <button onClick={onBack} style={{ background: 'none', border: 'none', color: '#64748b', cursor: 'pointer', fontSize: 16, fontFamily: 'inherit', marginBottom: 24, display: 'flex', alignItems: 'center', gap: 6 }}>
          ← Back
        </button>
        <h1 style={{ fontSize: 35, fontWeight: 800, color: '#f1f5f9', fontFamily: 'Space Grotesk, sans-serif', marginBottom: 8 }}>New Game</h1>
        <div style={{ display: 'inline-block', padding: '4px 12px', borderRadius: 6, background: mode === 'ranked' ? 'rgba(37,99,235,0.2)' : 'rgba(16,185,129,0.15)', color: mode === 'ranked' ? '#60a5fa' : '#34d399', fontSize: 15, fontWeight: 700, textTransform: 'uppercase', marginBottom: 28 }}>
          {mode} mode
        </div>

        <div className="glass-panel" style={{ borderRadius: 16, padding: 28, marginBottom: 20 }}>
          <h3 style={{ fontSize: 19, fontWeight: 700, color: '#f1f5f9', marginBottom: 16 }}>AI Opponents</h3>
          <div style={{ display: 'flex', gap: 10 }}>
            {[1, 2, 3].map(n => (
              <button
                key={n}
                onClick={() => setBotCount(n)}
                style={{
                  width: 48, height: 48, borderRadius: 10, border: `2px solid ${botCount === n ? '#2563eb' : 'rgba(255,255,255,0.1)'}`,
                  background: botCount === n ? 'rgba(37,99,235,0.2)' : 'transparent',
                  color: botCount === n ? '#60a5fa' : '#94a3b8', fontWeight: 700, fontSize: 20,
                  cursor: 'pointer', transition: 'all 0.15s', fontFamily: 'inherit',
                }}
              >
                {n}
              </button>
            ))}
          </div>
          <p style={{ fontSize: 15, color: '#64748b', marginTop: 10 }}>Playing against {botCount} AI opponent{botCount > 1 ? 's' : ''} ({botCount + 1} players total)</p>
        </div>

        <div className="glass-panel" style={{ padding: '14px 16px', marginBottom: 24, fontSize: 16, color: '#64748b', borderRadius: 12, boxShadow: 'none' }}>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <div>🎯 Race to <span style={{ color: '#f59e0b', fontWeight: 700 }}>₹50 Lakhs</span></div>
            <div>⏱ <span style={{ color: '#f1f5f9', fontWeight: 600 }}>25 min</span> time limit</div>
          </div>
        </div>

        <Button size="lg" variant="gold" onClick={onStart} style={{ width: '100%' }}>
          Start Game
        </Button>
      </div>
    </div>
  )
}

function ResultScreen({ isWinner, placement, finalWealth, rpChange, players, mode, onPlayAgain, onDashboard, nearMiss, wealthGap }: { isWinner: boolean; placement: number; finalWealth: number; rpChange: number; players: PlayerState[]; mode: string; onPlayAgain: () => void; onDashboard: () => void; nearMiss?: boolean; wealthGap?: number }) {
  const sorted = [...players].sort((a, b) => b.wealth - a.wealth)

  return (
    <div style={{ minHeight: '100vh', background: '#0a0e1a', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 24 }}>
      {isWinner && <Confetti width={window.innerWidth} height={window.innerHeight} recycle={false} numberOfPieces={500} colors={['#f59e0b', '#10b981', '#3b82f6', '#ec4899', '#f1f5f9']} />}
      <div style={{ width: '100%', maxWidth: 500, textAlign: 'center', animation: 'slideUp 0.4s ease', zIndex: 10 }}>
        <div style={{ fontSize: 80, marginBottom: 16 }}>
          {isWinner ? '🏆' : placement === 2 ? '🥈' : placement === 3 ? '🥉' : '💪'}
        </div>
        <h1 style={{ fontSize: 40, fontWeight: 800, fontFamily: 'Space Grotesk, sans-serif', color: isWinner ? '#f59e0b' : nearMiss ? '#f97316' : '#f1f5f9', marginBottom: 8 }}>
          {isWinner ? 'Victory!' : nearMiss ? 'So Close! 😤' : `${placement === 2 ? '2nd' : placement === 3 ? '3rd' : `${placement}th`} Place`}
        </h1>
        {nearMiss && wealthGap !== undefined && (
          <p style={{ color: '#f97316', fontSize: 18, fontWeight: 600, marginBottom: 8 }}>
            You were just {formatWealth(wealthGap)} away from winning!
          </p>
        )}
        <p style={{ color: '#94a3b8', marginBottom: 28, fontSize: 20 }}>Final wealth: {formatWealth(finalWealth)}</p>

        {mode === 'ranked' && (
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '10px 24px', borderRadius: 12, background: rpChange > 0 ? 'rgba(16,185,129,0.1)' : 'rgba(239,68,68,0.1)', border: `1px solid ${rpChange > 0 ? 'rgba(16,185,129,0.3)' : 'rgba(239,68,68,0.3)'}`, marginBottom: 28 }}>
            <span style={{ fontSize: 20, fontWeight: 800, color: rpChange > 0 ? '#10b981' : '#ef4444', fontFamily: 'Space Grotesk, sans-serif' }}>
              {rpChange > 0 ? '+' : ''}{rpChange} RP
            </span>
          </div>
        )}

        {/* Final Rankings */}
        <div style={{ background: '#1a2235', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 16, padding: 20, marginBottom: 24 }}>
          <h3 style={{ fontSize: 18, fontWeight: 700, color: '#64748b', marginBottom: 12, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Final Rankings</h3>
          {sorted.map((p, i) => (
            <div key={p.id} style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 0', borderBottom: i < sorted.length - 1 ? '1px solid rgba(255,255,255,0.04)' : 'none' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <span style={{ fontSize: 23 }}>{i === 0 ? '🥇' : i === 1 ? '🥈' : i === 2 ? '🥉' : `#${i + 1}`}</span>
                <span style={{ fontSize: 18, fontWeight: p.id === 'human' || !p.isBot ? 700 : 400, color: !p.isBot ? '#60a5fa' : '#f1f5f9' }}>
                  {p.name}
                </span>
              </div>
              <span style={{ fontSize: 18, fontWeight: 700, color: '#10b981', fontFamily: 'Space Grotesk, sans-serif' }}>{formatWealth(p.wealth)}</span>
            </div>
          ))}
        </div>

        <div style={{ display: 'flex', gap: 12, justifyContent: 'center' }}>
          <Button variant="gold" size="lg" onClick={onPlayAgain}>Play Again</Button>
          <Button variant="secondary" onClick={onDashboard}>Dashboard</Button>
        </div>
      </div>
    </div>
  )
}
