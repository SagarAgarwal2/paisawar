import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
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
  
  const [prevWealth, setPrevWealth] = useState(player.wealth)
  const [floatingText, setFloatingText] = useState<{ id: number; diff: number }[]>([])
  const [isShaking, setIsShaking] = useState(false)

  useEffect(() => {
    if (player.wealth !== prevWealth) {
      const diff = player.wealth - prevWealth
      setPrevWealth(player.wealth)
      
      if (diff !== 0) {
        setFloatingText(prev => [...prev, { id: Date.now(), diff }])
        if (diff < 0) {
          setIsShaking(true)
          setTimeout(() => setIsShaking(false), 500)
        }
      }
    }
  }, [player.wealth, prevWealth])

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1, x: isShaking ? [-6, 6, -6, 6, -3, 3, 0] : 0 }}
      transition={{ x: { duration: 0.4 } }}
      whileHover={isTarget ? { scale: 1.02, backgroundColor: 'rgba(239,68,68,0.08)' } : {}}
      whileTap={isTarget ? { scale: 0.95 } : {}}
      onClick={isTarget ? onClick : undefined}
      className="glass-panel"
      style={{
        background: isCurrent ? 'rgba(59,130,246,0.1)' : undefined,
        border: `1px solid ${isCurrent ? 'rgba(59,130,246,0.5)' : isTarget ? 'rgba(239,68,68,0.7)' : 'rgba(255,255,255,0.08)'}`,
        borderRadius: 16, padding: '16px',
        cursor: isTarget ? 'pointer' : 'default',
        position: 'relative',
        boxShadow: isCurrent ? '0 0 20px rgba(59,130,246,0.2)' : undefined,
      }}
    >
      <AnimatePresence>
        {floatingText.map(ft => (
          <motion.div
            key={ft.id}
            initial={{ opacity: 1, y: 0, scale: 1 }}
            animate={{ opacity: 0, y: -40, scale: 1.2 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: 'easeOut' }}
            style={{
              position: 'absolute', top: 30, right: 20,
              fontSize: 23, fontWeight: 800, fontFamily: 'Space Grotesk, sans-serif',
              color: ft.diff > 0 ? '#10b981' : '#ef4444',
              pointerEvents: 'none', zIndex: 10,
              textShadow: '0 2px 4px rgba(0,0,0,0.5)'
            }}
            onAnimationComplete={() => setFloatingText(prev => prev.filter(item => item.id !== ft.id))}
          >
            {ft.diff > 0 ? '+' : ''}₹{Math.abs(ft.diff).toLocaleString()}
          </motion.div>
        ))}
      </AnimatePresence>

      {isCurrent && !isOffline && (
        <div className="glass-pill" style={{
          position: 'absolute', top: -12, right: 10,
          fontSize: 11, fontWeight: 700, color: '#60a5fa',
          padding: '4px 10px',
          letterSpacing: '0.1em',
        }}>
          PLAYING
        </div>
      )}
      {isOffline && (
        <div className="glass-pill" style={{
          position: 'absolute', top: -12, right: 10,
          fontSize: 11, fontWeight: 700, color: '#94a3b8',
          padding: '4px 10px',
          letterSpacing: '0.1em',
        }}>
          OFFLINE
        </div>
      )}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 6, opacity: isOffline ? 0.5 : 1 }}>
        <div>
          <div style={{ fontSize: 16, fontWeight: 700, color: isMe ? '#60a5fa' : '#e2e8f0', fontFamily: 'Space Grotesk, sans-serif' }}>
            {player.name}{isMe ? ' (You)' : player.isBot ? ' 🤖' : ''}
          </div>
          <div style={{ fontSize: 13, color: '#475569', marginTop: 1 }}>{player.hand.length} cards in hand</div>
        </div>
        {player.skippedTurns > 0 && (
          <span style={{ fontSize: 13, color: '#f59e0b', background: 'rgba(245,158,11,0.12)', padding: '2px 6px', borderRadius: 4, fontWeight: 700 }}>
            SKIP×{player.skippedTurns}
          </span>
        )}
      </div>
      <div style={{ fontSize: 24, fontWeight: 800, color: '#10b981', fontFamily: 'Space Grotesk, sans-serif', marginBottom: 8 }}>
        {formatWealth(player.wealth)}
      </div>
      <div style={{ height: 5, background: 'rgba(255,255,255,0.06)', borderRadius: 3, overflow: 'hidden' }}>
        <div style={{
          height: '100%', width: `${wealthPct}%`,
          background: isMe ? '#2563eb' : '#059669',
          borderRadius: 3, transition: 'width 0.5s ease',
        }} />
      </div>
      <div style={{ fontSize: 13, color: '#475569', marginTop: 3 }}>{wealthPct.toFixed(1)}% to goal</div>
      {isTarget && (
        <div style={{ marginTop: 8, fontSize: 14, fontWeight: 700, color: '#ef4444', textAlign: 'center' }}>
          ⚡ Click to attack
        </div>
      )}
    </motion.div>
  )
}
