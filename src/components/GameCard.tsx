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

const TIER_BADGE: Record<string, string> = {
  common: '#64748b',
  rare: '#3b82f6',
  epic: '#8b5cf6',
  legendary: '#d97706',
}

const TYPE_ICONS = { decision: '🟢', action: '🔴', defense: '🔵' }

export function GameCard({ card, onClick, selected, disabled, compact, faceDown }: GameCardProps) {
  const colors = TYPE_COLORS[card.type] ?? TYPE_COLORS.decision

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

  const isLegendary = card.tier === 'legendary'

  return (
    <motion.div
      layoutId={card.id}
      initial={{ opacity: 0, y: 20, scale: 0.9 }}
      animate={{ 
        opacity: disabled ? 0.5 : 1, 
        y: selected ? -8 : 0, 
        scale: 1 
      }}
      whileHover={onClick && !disabled && !selected ? { y: -8, scale: 1.05, rotateY: 10, rotateX: -5, boxShadow: `0 12px 30px ${colors.border}66` } : {}}
      whileTap={onClick && !disabled ? { scale: 0.95 } : {}}
      onClick={!disabled ? onClick : undefined}
      className="glass-card"
      style={{
        width: compact ? 80 : 140,
        height: compact ? 110 : 200,
        background: isLegendary
          ? 'linear-gradient(135deg, rgba(245,158,11,0.15), rgba(0,0,0,0.5))'
          : `linear-gradient(135deg, ${colors.bg}, rgba(0,0,0,0.2))`,
        border: `1px solid ${selected ? '#f59e0b' : isLegendary ? 'rgba(245,158,11,0.6)' : colors.border}`,
        borderTop: `1px solid ${selected ? '#f59e0b' : isLegendary ? 'rgba(245,158,11,0.8)' : 'rgba(255,255,255,0.2)'}`,
        borderRadius: compact ? 12 : 16,
        cursor: onClick && !disabled ? 'pointer' : 'default',
        padding: compact ? '8px' : '12px',
        display: 'flex',
        flexDirection: 'column',
        gap: compact ? 4 : 6,
        boxShadow: selected
          ? '0 8px 32px rgba(245,158,11,0.4)'
          : isLegendary
          ? '0 0 24px rgba(217,119,6,0.3)'
          : '0 4px 16px rgba(0,0,0,0.3)',
        flexShrink: 0,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {isLegendary && (
        <div style={{
          position: 'absolute', top: 0, left: 0, right: 0,
          height: '2px',
          background: 'linear-gradient(90deg, transparent, #d97706, transparent)',
        }} />
      )}

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ fontSize: compact ? 10 : 11, color: colors.label, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
          {TYPE_ICONS[card.type]} {compact ? '' : card.type}
        </span>
        <span className="glass-pill" style={{
          fontSize: 9,
          fontWeight: 700,
          padding: '2px 6px',
          color: TIER_BADGE[card.tier] ?? '#64748b',
          textTransform: 'uppercase',
          letterSpacing: '0.05em',
        }}>
          {card.tier[0].toUpperCase()}
        </span>
      </div>

      <div style={{ fontSize: compact ? 11 : 13, fontWeight: 700, color: '#f1f5f9', lineHeight: 1.2, fontFamily: 'Space Grotesk, sans-serif' }}>
        {card.name}
      </div>

      {!compact && (
        <div style={{ fontSize: 10, color: '#64748b', lineHeight: 1.4, flexGrow: 1, overflow: 'hidden' }}>
          {card.flavor}
        </div>
      )}

      {!compact && card.type === 'decision' && card.options && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          {card.options.map(opt => (
            <div key={opt.type} style={{ fontSize: 9, padding: '2px 4px', borderRadius: 4, background: 'rgba(255,255,255,0.05)', color: opt.type === 'invest' ? '#34d399' : opt.type === 'save' ? '#60a5fa' : '#f87171' }}>
              {opt.type.toUpperCase()}: {opt.label}
            </div>
          ))}
        </div>
      )}
    </motion.div>
  )
}
