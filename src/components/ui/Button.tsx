import type { ButtonHTMLAttributes, ReactNode } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'danger' | 'gold'
  size?: 'sm' | 'md' | 'lg'
  children: ReactNode
  loading?: boolean
}

export function Button({ variant = 'primary', size = 'md', children, loading, className = '', disabled, ...props }: ButtonProps) {
  const variantStyle = {
    primary: { background: '#2563eb', color: '#fff' },
    secondary: { background: '#1f2a3d', color: '#f1f5f9', border: '1px solid rgba(255,255,255,0.1)' },
    ghost: { background: 'transparent', color: '#94a3b8' },
    danger: { background: '#dc2626', color: '#fff' },
    gold: { background: '#f59e0b', color: '#000' },
  }

  const sizeStyle = {
    sm: { padding: '6px 12px', fontSize: '16px' },
    md: { padding: '10px 20px', fontSize: '18px' },
    lg: { padding: '14px 28px', fontSize: '20px' },
  }

  return (
    <button
      {...props}
      disabled={disabled || loading}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '8px',
        fontWeight: 600,
        borderRadius: '10px',
        border: 'none',
        cursor: disabled || loading ? 'not-allowed' : 'pointer',
        opacity: disabled || loading ? 0.6 : 1,
        transition: 'all 0.2s',
        fontFamily: 'inherit',
        ...variantStyle[variant],
        ...sizeStyle[size],
      }}
    >
      {loading && (
        <span style={{ width: 16, height: 16, border: '2px solid currentColor', borderTopColor: 'transparent', borderRadius: '50%', display: 'inline-block', animation: 'spin 0.8s linear infinite' }} />
      )}
      {children}
    </button>
  )
}
