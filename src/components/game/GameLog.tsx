interface GameLogProps {
  log: string[]
}

export function GameLog({ log }: GameLogProps) {
  return (
    <div className="glass-panel" style={{
      borderRadius: 12, padding: '12px 16px', maxHeight: 90, overflowY: 'auto', boxShadow: 'none'
    }}>
      {log.slice(0, 5).map((entry, i) => (
        <div key={i} style={{
          fontSize: 15, color: i === 0 ? '#94a3b8' : '#475569',
          padding: '2px 0',
          borderBottom: i < Math.min(4, log.length - 1) ? '1px solid rgba(255,255,255,0.04)' : 'none',
        }}>
          {entry}
        </div>
      ))}
    </div>
  )
}
