import { getRankForRP } from '../types/game'

interface RankBadgeProps {
  rp: number
  showProgress?: boolean
  size?: 'sm' | 'md' | 'lg'
}

export function RankBadge({ rp, showProgress, size = 'md' }: RankBadgeProps) {
  const rank = getRankForRP(rp)
  const nextRank = rank.maxRP === Infinity ? null : { minRP: rank.maxRP + 1 }
  const progress = rank.maxRP === Infinity ? 100 : ((rp - rank.minRP) / (rank.maxRP - rank.minRP)) * 100

  const fontSize = size === 'sm' ? 12 : size === 'lg' ? 16 : 14
  const emojiSize = size === 'sm' ? 14 : size === 'lg' ? 22 : 18

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
        <span style={{ fontSize: emojiSize }}>{rank.emoji}</span>
        <span style={{ fontSize, fontWeight: 700, color: rank.color, fontFamily: 'Space Grotesk, sans-serif' }}>
          {rank.name}
        </span>
        <span style={{ fontSize: fontSize - 2, color: '#64748b' }}>{rp.toLocaleString()} RP</span>
      </div>
      {showProgress && (
        <div style={{ height: 4, background: 'rgba(255,255,255,0.08)', borderRadius: 2, overflow: 'hidden' }}>
          <div style={{
            height: '100%', borderRadius: 2, background: rank.color,
            width: `${Math.min(100, progress)}%`,
            transition: 'width 0.5s ease',
          }} />
        </div>
      )}
      {showProgress && nextRank && (
        <div style={{ fontSize: 11, color: '#64748b' }}>{rank.maxRP - rp} RP to next rank</div>
      )}
    </div>
  )
}
