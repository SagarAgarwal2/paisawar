import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { playSound } from '../../lib/audio'

interface TurnTimerProps {
  turnStartTime: number
  timeLimit: number
  onTimeout: () => void
  active: boolean
}

export function TurnTimer({ turnStartTime, timeLimit, onTimeout, active }: TurnTimerProps) {
  const [timeLeft, setTimeLeft] = useState(timeLimit)
  
  useEffect(() => {
    if (!active) return

    const checkTime = () => {
      const elapsed = Date.now() - turnStartTime
      const remaining = Math.max(0, timeLimit - elapsed)
      setTimeLeft(remaining)
      
      // Play a ticking sound when time is running out (under 5 seconds)
      if (remaining > 0 && remaining <= 5000 && remaining % 1000 < 100) {
        playSound('play') // tick
      }

      if (remaining <= 0) {
        onTimeout()
      }
    }

    const timer = setInterval(checkTime, 100)
    checkTime()
    return () => clearInterval(timer)
  }, [turnStartTime, timeLimit, active, onTimeout])

  if (!active) return null

  const pct = Math.max(0, Math.min(100, (timeLeft / timeLimit) * 100))
  const isDanger = timeLeft <= 10000

  return (
    <div style={{
      width: '100%', height: 6, background: 'rgba(255,255,255,0.1)',
      borderRadius: 4, overflow: 'hidden', marginTop: 12, marginBottom: 4
    }}>
      <motion.div
        animate={{ width: `${pct}%`, backgroundColor: isDanger ? '#ef4444' : '#3b82f6' }}
        transition={{ duration: 0.1, ease: 'linear' }}
        style={{ height: '100%', borderRadius: 4 }}
      />
    </div>
  )
}
