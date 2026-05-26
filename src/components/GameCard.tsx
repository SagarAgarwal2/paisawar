import { motion } from 'framer-motion'
import type { GameCard as GameCardType } from '../types/game'

interface GameCardProps {
  card: GameCardType
  onClick?: () => void
  selected?: boolean
  disabled?: boolean
  compact?: boolean
  faceDown?: boolean
}

const TYPE_COLORS = {
  decision: { bg: 'rgba(16, 185, 129, 0.1)', border: 'rgba(16, 185, 129, 0.4)', label: '#34d399', badge: '#059669' },
  action: { bg: 'rgba(239, 68, 68, 0.1)', border: 'rgba(239, 68, 68, 0.4)', label: '#f87171', badge: '#dc2626' },
  defense: { bg: 'rgba(59, 130, 246, 0.1)', border: 'rgba(59, 130, 246, 0.4)', label: '#60a5fa', badge: '#2563eb' },
}

// Per-tier visual configuration
const TIER_CONFIG: Record<string, {
  color: string
  glow: string
  borderColor: string
  shimmer: boolean
  frameLabel: string
  frameColor: string
}> = {
  common:    { color: '#64748b', glow: 'none', borderColor: 'rgba(255,255,255,0.15)', shimmer: false, frameLabel: 'COMMON', frameColor: '#475569' },
  rare:      { color: '#3b82f6', glow: '0 0 14px rgba(59,130,246,0.35)', borderColor: 'rgba(59,130,246,0.5)', shimmer: false, frameLabel: 'RARE', frameColor: '#2563eb' },
  epic:      { color: '#a855f7', glow: '0 0 20px rgba(168,85,247,0.45)', borderColor: 'rgba(168,85,247,0.6)', shimmer: true, frameLabel: 'EPIC', frameColor: '#7c3aed' },
  legendary: { color: '#f59e0b', glow: '0 0 30px rgba(245,158,11,0.55)', borderColor: 'rgba(245,158,11,0.7)', shimmer: true, frameLabel: 'LEGENDARY', frameColor: '#d97706' },
}

const TYPE_ICONS = { decision: '🟢', action: '🔴', defense: '🔵' }

export function GameCard({ card, onClick, selected, disabled, compact, faceDown }: GameCardProps) {
  const colors = TYPE_COLORS[card.type] ?? TYPE_COLORS.decision
  const tier = TIER_CONFIG[card.tier] ?? TIER_CONFIG.common
  const isLegendary = card.tier === 'legendary'
  const isEpic = card.tier === 'epic'

  if (faceDown) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        className="glass-card"
        style={{
          width: compact ? 64 : 120,
          height: compact ? 90 : 168,
          borderRadius: compact ? 12 : 16,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: compact ? 18 : 28,
        }}
      >
        💰
      </motion.div>
    )
  }

  // Build card background based on tier
  const cardBg = isLegendary
    ? 'linear-gradient(135deg, rgba(245,158,11,0.15), rgba(120,53,15,0.1), rgba(0,0,0,0.5))'
    : isEpic
    ? 'linear-gradient(135deg, rgba(168,85,247,0.12), rgba(0,0,0,0.4))'
    : `linear-gradient(135deg, ${colors.bg}, rgba(0,0,0,0.2))`

  const cardBorder = selected
    ? '#f59e0b'
    : tier.borderColor

  const cardShadow = selected
    ? '0 8px 32px rgba(245,158,11,0.4)'
    : tier.glow !== 'none'
    ? tier.glow
    : '0 4px 16px rgba(0,0,0,0.3)'

  return (
    <motion.div
      layoutId={card.id}
      initial={{ opacity: 0, y: 20, scale: 0.9 }}
      animate={{
        opacity: disabled ? 0.5 : 1,
        y: selected ? -8 : 0,
        scale: 1,
      }}
      whileHover={onClick && !disabled && !selected ? { y: -8, scale: 1.05, rotateY: 10, rotateX: -5 } : {}}
      whileTap={onClick && !disabled ? { scale: 0.95 } : {}}
      onClick={!disabled ? onClick : undefined}
      className="glass-card"
      style={{
        width: compact ? 80 : 140,
        height: compact ? 110 : 200,
        background: cardBg,
        border: `${(isLegendary || isEpic) ? 2 : 1}px solid ${cardBorder}`,
        borderRadius: compact ? 12 : 16,
        cursor: onClick && !disabled ? 'pointer' : 'default',
        padding: compact ? '8px' : '12px',
        display: 'flex',
        flexDirection: 'column',
        gap: compact ? 4 : 6,
        boxShadow: cardShadow,
        flexShrink: 0,
        position: 'relative',
        overflow: 'hidden',
        transition: 'box-shadow 0.3s ease',
      }}
    >
      {/* Top shimmer bar for epic/legendary */}
      {tier.shimmer && (
        <div style={{
          position: 'absolute', top: 0, left: 0, right: 0,
          height: isLegendary ? 3 : 2,
          background: isLegendary
            ? 'linear-gradient(90deg, transparent, #f59e0b, #fbbf24, #f59e0b, transparent)'
            : 'linear-gradient(90deg, transparent, #a855f7, #c084fc, #a855f7, transparent)',
          animation: 'shimmer 2.5s linear infinite',
        }} />
      )}

      {/* Legendary corner accent */}
      {isLegendary && (
        <>
          <div style={{ position: 'absolute', top: 0, left: 0, width: 20, height: 20, borderTop: '2px solid #f59e0b', borderLeft: '2px solid #f59e0b', borderRadius: '16px 0 0 0', zIndex: 1 }} />
          <div style={{ position: 'absolute', top: 0, right: 0, width: 20, height: 20, borderTop: '2px solid #f59e0b', borderRight: '2px solid #f59e0b', borderRadius: '0 16px 0 0', zIndex: 1 }} />
          <div style={{ position: 'absolute', bottom: 0, left: 0, width: 20, height: 20, borderBottom: '2px solid #f59e0b', borderLeft: '2px solid #f59e0b', borderRadius: '0 0 0 16px', zIndex: 1 }} />
          <div style={{ position: 'absolute', bottom: 0, right: 0, width: 20, height: 20, borderBottom: '2px solid #f59e0b', borderRight: '2px solid #f59e0b', borderRadius: '0 0 16px 0', zIndex: 1 }} />
        </>
      )}

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ fontSize: compact ? 10 : 11, color: colors.label, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
          {TYPE_ICONS[card.type]} {compact ? '' : card.type}
        </span>
        <span style={{
          fontSize: 8,
          fontWeight: 800,
          padding: '2px 6px',
          borderRadius: 4,
          background: `${tier.color}22`,
          color: tier.color,
          border: `1px solid ${tier.color}55`,
          textTransform: 'uppercase',
          letterSpacing: '0.05em',
        }}>
          {compact ? card.tier[0].toUpperCase() : tier.frameLabel}
        </span>
      </div>

      <div style={{ fontSize: compact ? 11 : 13, fontWeight: 700, color: isLegendary ? '#fde68a' : isEpic ? '#e9d5ff' : '#f1f5f9', lineHeight: 1.2, fontFamily: 'Space Grotesk, sans-serif' }}>
        {card.name}
      </div>

      {!compact && (
        <div style={{ fontSize: 10, color: '#64748b', lineHeight: 1.4, flexGrow: 1, overflow: 'hidden' }}>
          {card.flavor}
        </div>
      )}

      {/* Show invest risk warning on risky invest options */}
      {!compact && card.type === 'decision' && card.options && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          {card.options.map(opt => (
            <div key={opt.type} style={{ fontSize: 9, padding: '2px 4px', borderRadius: 4, background: 'rgba(255,255,255,0.05)', color: opt.type === 'invest' ? '#34d399' : opt.type === 'save' ? '#60a5fa' : '#f87171', display: 'flex', justifyContent: 'space-between' }}>
              <span>{opt.type.toUpperCase()}: {opt.label}</span>
              {opt.type === 'invest' && opt.investRisk && (
                <span style={{ color: '#f97316', fontSize: 8 }}>⚠️ {opt.investRisk}% fail</span>
              )}
            </div>
          ))}
        </div>
      )}
    </motion.div>
  )
}
