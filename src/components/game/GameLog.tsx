interface GameLogProps {
  log: string[]
}

export function GameLog({ log }: GameLogProps) {
  return (
    <div style={{
      background: '#0c1220', border: '1px solid rgba(255,255,255,0.05)',
      borderRadius: 8, padding: '8px 14px', maxHeight: 80, overflowY: 'auto',
    }}>
      {log.slice(0, 5).map((entry, i) => (
        <div key={i} style={{
          fontSize: 12, color: i === 0 ? '#94a3b8' : '#475569',
          padding: '2px 0',
          borderBottom: i < Math.min(4, log.length - 1) ? '1px solid rgba(255,255,255,0.04)' : 'none',
        }}>
          {entry}
        </div>
      ))}
    </div>
  )
}
