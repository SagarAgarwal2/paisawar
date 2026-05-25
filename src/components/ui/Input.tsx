import type { InputHTMLAttributes } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
}

export function Input({ label, error, id, style, ...props }: InputProps) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
      {label && (
        <label htmlFor={id} style={{ fontSize: '13px', fontWeight: 500, color: '#94a3b8' }}>
          {label}
        </label>
      )}
      <input
        id={id}
        style={{
          background: '#1a2235',
          border: `1px solid ${error ? '#ef4444' : 'rgba(255,255,255,0.1)'}`,
          borderRadius: '10px',
          padding: '10px 14px',
          color: '#f1f5f9',
          fontSize: '14px',
          outline: 'none',
          width: '100%',
          transition: 'border-color 0.2s',
          ...style,
        }}
        onFocus={(e) => { e.target.style.borderColor = '#2563eb'; }}
        onBlur={(e) => { e.target.style.borderColor = error ? '#ef4444' : 'rgba(255,255,255,0.1)'; }}
        {...props}
      />
      {error && <span style={{ fontSize: '12px', color: '#ef4444' }}>{error}</span>}
    </div>
  )
}
