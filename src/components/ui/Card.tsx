import type { ReactNode, CSSProperties } from 'react'

interface CardProps {
  children: ReactNode
  style?: CSSProperties
  className?: string
  onClick?: () => void
  hoverable?: boolean
  glow?: 'blue' | 'gold' | 'green' | 'red'
}

export function Card({ children, style, className, onClick, hoverable, glow }: CardProps) {
  const glowColors = {
    blue: '0 0 20px rgba(37,99,235,0.25)',
    gold: '0 0 20px rgba(245,158,11,0.3)',
    green: '0 0 20px rgba(5,150,105,0.25)',
    red: '0 0 20px rgba(220,38,38,0.25)',
  }

  return (
    <div
      onClick={onClick}
      className={`glass-panel ${className ?? ''}`}
      style={{
        borderRadius: '20px',
        padding: '24px',
        cursor: onClick ? 'pointer' : 'default',
        transition: 'all 0.3s ease',
        boxShadow: glow ? glowColors[glow] : '0 8px 32px rgba(0, 0, 0, 0.2)',
        ...style,
      }}
      onMouseEnter={hoverable && onClick ? (e) => {
        const el = e.currentTarget as HTMLDivElement
        el.style.borderColor = 'rgba(255,255,255,0.16)'
        el.style.transform = 'translateY(-2px)'
      } : undefined}
      onMouseLeave={hoverable && onClick ? (e) => {
        const el = e.currentTarget as HTMLDivElement
        el.style.borderColor = 'rgba(255,255,255,0.08)'
        el.style.transform = 'translateY(0)'
      } : undefined}
    >
      {children}
    </div>
  )
}
