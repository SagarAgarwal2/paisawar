import { motion } from 'framer-motion'
import type { PlayerState } from '../../types/game'
import { formatWealth } from '../../types/game'

interface PlayerBoardProps {
  player: PlayerState
  isCurrent: boolean
  isMe: boolean
  isTarget: boolean
  isOffline?: boolean
  wealthGoal: number
  onClick?: () => void
}

export function PlayerBoard({ player, isCurrent, isMe, isTarget, isOffline, wealthGoal, onClick }: PlayerBoardProps) {
  const wealthPct = Math.min(100, (player.wealth / wealthGoal) * 100)

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={isTarget ? { scale: 1.02, backgroundColor: 'rgba(239,68,68,0.08)' } : {}}
      whileTap={isTarget ? { scale: 0.95 } : {}}
      onClick={isTarget ? onClick : undefined}
      style={{
        background: isCurrent ? 'rgba(37,99,235,0.1)' : '#131b2e',
        border: `2px solid ${isCurrent ? '#2563eb' : isTarget ? 'rgba(239,68,68,0.7)' : 'rgba(255,255,255,0.07)'}`,
        borderRadius: 12, padding: '14px 15px',
        cursor: isTarget ? 'pointer' : 'default',
        position: 'relative',
      }}
    >
      {isCurrent && !isOffline && (
        <div style={{
          position: 'absolute', top: -9, right: 10,
          fontSize: 10, fontWeight: 800, color: '#60a5fa',
          background: '#0a0e1a', padding: '2px 8px', borderRadius: 4,
          border: '1px solid #2563eb', letterSpacing: '0.05em',
        }}>
          PLAYING
        </div>
      )}
      {isOffline && (
        <div style={{
          position: 'absolute', top: -9, right: 10,
          fontSize: 10, fontWeight: 800, color: '#94a3b8',
          background: '#0a0e1a', padding: '2px 8px', borderRadius: 4,
          border: '1px solid #475569', letterSpacing: '0.05em',
        }}>
          OFFLINE
        </div>
      )}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 6, opacity: isOffline ? 0.5 : 1 }}>
        <div>
          <div style={{ fontSize: 13, fontWeight: 700, color: isMe ? '#60a5fa' : '#e2e8f0', fontFamily: 'Space Grotesk, sans-serif' }}>
            {player.name}{isMe ? ' (You)' : player.isBot ? ' 🤖' : ''}
          </div>
          <div style={{ fontSize: 10, color: '#475569', marginTop: 1 }}>{player.hand.length} cards in hand</div>
        </div>
        {player.skippedTurns > 0 && (
          <span style={{ fontSize: 10, color: '#f59e0b', background: 'rgba(245,158,11,0.12)', padding: '2px 6px', borderRadius: 4, fontWeight: 700 }}>
            SKIP×{player.skippedTurns}
          </span>
        )}
      </div>
      <div style={{ fontSize: 19, fontWeight: 800, color: '#10b981', fontFamily: 'Space Grotesk, sans-serif', marginBottom: 8 }}>
        {formatWealth(player.wealth)}
      </div>
      <div style={{ height: 5, background: 'rgba(255,255,255,0.06)', borderRadius: 3, overflow: 'hidden' }}>
        <div style={{
          height: '100%', width: `${wealthPct}%`,
          background: isMe ? '#2563eb' : '#059669',
          borderRadius: 3, transition: 'width 0.5s ease',
        }} />
      </div>
      <div style={{ fontSize: 10, color: '#475569', marginTop: 3 }}>{wealthPct.toFixed(1)}% to goal</div>
      {isTarget && (
        <div style={{ marginTop: 8, fontSize: 11, fontWeight: 700, color: '#ef4444', textAlign: 'center' }}>
          ⚡ Click to attack
        </div>
      )}
    </motion.div>
  )
}
