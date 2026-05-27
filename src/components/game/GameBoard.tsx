import { GameCard as GameCardComponent } from '../GameCard'
import { Button } from '../ui/Button'
import { PlayerBoard } from './PlayerBoard'
import { GameLog } from './GameLog'
import { TurnTimer } from './TurnTimer'
import type { GameState, GameCard } from '../../types/game'
import { formatWealth } from '../../types/game'
import { TURN_TIME_LIMIT_MS } from '../../lib/gameEngine'

export type UIPhase = 'playing' | 'decision' | 'targeting'

interface GameBoardProps {
  gameState: GameState
  myPlayerId: string
  isMultiplayer: boolean
  uiPhase: UIPhase
  onlinePlayers?: Set<string>
  onDrawCard: () => void
  onPlayCard: (card: GameCard) => void
  onTargetSelect: (targetIndex: number) => void
  onDecision: (type: 'spend' | 'save' | 'invest') => void
  onTimeout: () => void
  onCancelTargeting: () => void
}

export function GameBoard({
  gameState,
  myPlayerId,
  isMultiplayer,
  uiPhase,
  onlinePlayers = new Set(),
  onDrawCard,
  onPlayCard,
  onTargetSelect,
  onDecision,
  onTimeout,
  onCancelTargeting,
}: GameBoardProps) {
  const myPlayerIndex = gameState.players.findIndex(p => p.id === myPlayerId)
  const isMyTurn = gameState.players[gameState.currentPlayerIndex]?.id === myPlayerId
  const myPlayer = myPlayerIndex >= 0 ? gameState.players[myPlayerIndex] : null
  const currentPlayer = gameState.players[gameState.currentPlayerIndex]

  return (
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', padding: '16px 20px', gap: 14, maxWidth: 1100, margin: '0 auto', width: '100%' }}>
      {/* Players */}
      <div className="players-container">
        {gameState.players.map((player, i) => (
          <div key={player.id}>
            <PlayerBoard
              player={player}
              isCurrent={i === gameState.currentPlayerIndex}
              isMe={player.id === myPlayerId}
              isTarget={uiPhase === 'targeting' && player.id !== myPlayerId}
              isOffline={isMultiplayer && !onlinePlayers.has(player.id)}
              wealthGoal={gameState.wealthGoal}
              seatIndex={i}
              onClick={() => onTargetSelect(i)}
            />
          </div>
        ))}
      </div>

      {/* Game log */}
      <GameLog log={gameState.log} />

      {/* Action panel */}
      <div className="glass-panel" style={{
        borderRadius: 16, padding: '24px', minHeight: 200, boxShadow: 'none'
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
          <h2 style={{ margin: 0, fontSize: 23, color: '#f1f5f9', fontWeight: 700 }}>
            {isMyTurn ? <span style={{ color: '#60a5fa' }}>Your Turn</span> : <span>{currentPlayer?.name}'s Turn</span>}
          </h2>
          <div style={{ fontSize: 15, color: '#475569', fontWeight: 700 }}>TURN {gameState.turn}</div>
        </div>
        
        <TurnTimer 
          turnStartTime={gameState.turnStartTime} 
          timeLimit={TURN_TIME_LIMIT_MS} 
          active={gameState.phase !== 'game_over' && (isMyTurn || (!isMultiplayer && gameState.players[0].id === myPlayerId))} 
          onTimeout={onTimeout} 
        />

        {/* Not my turn */}
        {!isMyTurn && uiPhase === 'playing' && (
          <div style={{ textAlign: 'center', padding: '36px 0' }}>
            <div style={{ fontSize: 40, marginBottom: 12 }}>⏳</div>
            <div style={{ fontSize: 19, fontWeight: 600, color: '#94a3b8', marginBottom: 4 }}>
              Waiting for {currentPlayer?.name}...
            </div>
            <div style={{ fontSize: 16, color: '#475569' }}>Their turn to play</div>
            {/* Show my hand while waiting */}
            {myPlayer && myPlayer.hand.length > 0 && (
              <div style={{ marginTop: 20, borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: 16 }}>
                <p style={{ fontSize: 15, color: '#475569', marginBottom: 10 }}>
                  Your hand ({myPlayer.hand.length} cards):
                </p>
                <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', justifyContent: 'center' }}>
                  {myPlayer.hand.map(card => (
                    <GameCardComponent key={card.id} card={card} compact disabled />
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* Draw phase */}
        {isMyTurn && gameState.phase === 'draw' && (
          <div style={{ textAlign: 'center', padding: '28px 0' }}>
            <div style={{ fontSize: 16, color: '#94a3b8', marginBottom: 18 }}>
              Your turn! Draw a card to start.
            </div>
            <Button size="lg" variant="gold" onClick={onDrawCard}>
              Draw a Card ({gameState.deck.length} left in deck)
            </Button>
            {myPlayer && myPlayer.hand.length > 0 && (
              <div style={{ marginTop: 20, borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: 16 }}>
                <p style={{ fontSize: 15, color: '#475569', marginBottom: 10 }}>Your current hand:</p>
                <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', justifyContent: 'center' }}>
                  {myPlayer.hand.map(card => (
                    <GameCardComponent key={card.id} card={card} compact disabled />
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* Play phase — show full hand, pick one to play */}
        {isMyTurn && gameState.phase === 'play' && uiPhase === 'playing' && (
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 14 }}>
              <p style={{ fontSize: 16, color: '#94a3b8' }}>
                {gameState.drawnCard ? `Drew "${gameState.drawnCard.name}" — pick a card to play:` : 'Pick a card to play:'}
              </p>
            </div>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', justifyContent: 'center' }}>
              {myPlayer?.hand.map(card => (
                <GameCardComponent key={card.id} card={card} onClick={() => onPlayCard(card)} />
              ))}
            </div>
          </div>
        )}

        {/* Decision card */}
        {uiPhase === 'decision' && gameState.pendingDecision && (
          <div>
            <div style={{ marginBottom: 16 }}>
              <h3 style={{ fontSize: 21, fontWeight: 800, color: '#f1f5f9', fontFamily: 'Space Grotesk, sans-serif', marginBottom: 4 }}>
                {gameState.pendingDecision.card.name}
              </h3>
              <p style={{ fontSize: 16, color: '#475569' }}>{gameState.pendingDecision.card.flavor}</p>
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
                    onClick={() => onDecision(opt.type)}
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
                    <div style={{ fontSize: 13, fontWeight: 800, color: c.border, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 5 }}>
                      {opt.type}
                    </div>
                    <div style={{ fontSize: 18, fontWeight: 700, marginBottom: 4 }}>{opt.label}</div>
                    <div style={{ fontSize: 15, color: '#94a3b8', marginBottom: 8 }}>{opt.description}</div>
                    <div style={{ fontSize: 19, fontWeight: 800, color: val >= 0 ? '#10b981' : '#ef4444', fontFamily: 'Space Grotesk, sans-serif' }}>
                      {val >= 0 ? '+' : ''}{formatWealth(Math.abs(val))}
                      {opt.effect.type === 'wealth_next_turn' && <span style={{ fontSize: 13, color: '#475569', fontWeight: 400, marginLeft: 4 }}>next turn</span>}
                      {opt.effect.type === 'wealth_end_game' && <span style={{ fontSize: 13, color: '#475569', fontWeight: 400, marginLeft: 4 }}>at end</span>}
                    </div>
                  </button>
                )
              })}
            </div>
          </div>
        )}

        {/* Action card targeting phase (Select opponent) */}
        {uiPhase === 'targeting' && gameState.playedCard && (
          <div style={{ textAlign: 'center', padding: '12px 0' }}>
            <div style={{ fontSize: 22, marginBottom: 12 }}>🎯</div>
            <div style={{ fontSize: 18, color: '#f1f5f9', fontWeight: 700, marginBottom: 8 }}>
              Select a target for {gameState.playedCard.name}
            </div>
            <div style={{ fontSize: 15, color: '#94a3b8', marginBottom: 20 }}>
              Click on an opponent's panel above to target them.
            </div>
            <Button variant="secondary" onClick={onCancelTargeting}>Cancel</Button>
          </div>
        )}
      </div>
    </div>
  )
}
