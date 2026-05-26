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
  decision: { bg: '#0a2a1a', border: '#059669', label: '#34d399', badge: '#059669' },
  action: { bg: '#2a0a0a', border: '#dc2626', label: '#f87171', badge: '#dc2626' },
  defense: { bg: '#0a1a2a', border: '#2563eb', label: '#60a5fa', badge: '#2563eb' },
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
        style={{
          width: compact ? 64 : 120,
          height: compact ? 90 : 168,
          background: 'linear-gradient(135deg, #1a2235 0%, #0f1524 100%)',
          border: '1px solid rgba(255,255,255,0.1)',
          borderRadius: compact ? 8 : 12,
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
      style={{
        width: compact ? 80 : 140,
        height: compact ? 110 : 200,
        background: isLegendary
          ? 'linear-gradient(135deg, #1a1200, #2a1a00)'
          : `linear-gradient(135deg, ${colors.bg}, #0f1524)`,
        border: `2px solid ${selected ? '#f59e0b' : isLegendary ? '#d97706' : colors.border}`,
        borderRadius: compact ? 8 : 12,
        cursor: onClick && !disabled ? 'pointer' : 'default',
        padding: compact ? '6px' : '10px',
        display: 'flex',
        flexDirection: 'column',
        gap: compact ? 4 : 6,
        boxShadow: selected
          ? '0 8px 24px rgba(245,158,11,0.4)'
          : isLegendary
          ? '0 0 20px rgba(217,119,6,0.3)'
          : 'none',
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
        <span style={{
          fontSize: 9,
          fontWeight: 700,
          padding: '1px 4px',
          borderRadius: 4,
          background: TIER_BADGE[card.tier] ?? '#64748b',
          color: '#fff',
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
