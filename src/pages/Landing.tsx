import { Link } from 'react-router-dom'
import { Button } from '../components/ui/Button'
import { formatWealth } from '../types/game'

const FEATURE_CARDS = [
  { icon: '🎴', title: 'Real Indian Money Decisions', desc: 'Every card puts you in a situation you might face in real life. SIPs, EMIs, Tax Raids, IPOs — your choices decide your fate.' },
  { icon: '⚔️', title: 'Attack & Defend', desc: 'Play Action cards to attack rivals with Tax Raids, Market Crashes, and UPI Frauds. Counter with Defense cards.' },
  { icon: '👑', title: 'Mogul Rank Ladder', desc: 'Climb from Rookie to DAANK Legend through 8 rank tiers. RP gained, RP lost — the ladder never lies.' },
  { icon: '🏦', title: 'DAANK Economy', desc: 'Earn DAANK Coins, trade cards, join Guilds, and invest in the in-game stock market that mirrors player behavior.' },
  { icon: '📅', title: 'Prestige Seasons', desc: '30-day seasons with unique themes — IPO Boom, Crypto Cycle, Election Economy. New rules every month.' },
  { icon: '⚡', title: 'Daily Contracts', desc: '3 contracts reset every midnight. Miss them and they\'re gone. Build your streak, earn rare cards.' },
]

const PREVIEW_CARDS = [
  { name: 'Diwali Bonus', type: 'decision', color: '#059669', icon: '🟢', tier: 'COMMON' },
  { name: 'Market Crash', type: 'action', color: '#dc2626', icon: '🔴', tier: 'RARE' },
  { name: 'Emergency Fund', type: 'defense', color: '#2563eb', icon: '🔵', tier: 'COMMON' },
  { name: 'The Black Swan', type: 'action', color: '#d97706', icon: '⚡', tier: 'LEGENDARY' },
]

export function Landing() {
  return (
    <div style={{ minHeight: '100vh', background: '#0a0e1a', overflowX: 'hidden' }}>
      {/* Navbar */}
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0,
        zIndex: 50,
        padding: '0 24px',
        height: 64,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        background: 'rgba(10,14,26,0.85)',
        backdropFilter: 'blur(12px)',
        borderBottom: '1px solid rgba(255,255,255,0.06)',
      }}>
        <div style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 800, fontSize: 20, color: '#f59e0b', letterSpacing: '-0.02em' }}>
          PAISA WAR
        </div>
        <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
          <Link to="/auth" style={{ color: '#94a3b8', textDecoration: 'none', fontSize: 14, fontWeight: 500 }}>Sign In</Link>
          <Link to="/auth?mode=register">
            <Button size="sm">Play Now</Button>
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section style={{
        minHeight: '100vh',
        display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
        padding: '120px 24px 80px',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', inset: 0,
          background: 'radial-gradient(ellipse 80% 60% at 50% 20%, rgba(37,99,235,0.12) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />
        <div style={{
          position: 'absolute', inset: 0,
          background: 'radial-gradient(ellipse 60% 40% at 80% 80%, rgba(245,158,11,0.08) 0%, transparent 60%)',
          pointerEvents: 'none',
        }} />

        <div style={{ animation: 'fadeIn 0.6s ease forwards', position: 'relative' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '6px 16px', borderRadius: 999, border: '1px solid rgba(245,158,11,0.3)', background: 'rgba(245,158,11,0.08)', marginBottom: 24 }}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#f59e0b', display: 'inline-block', animation: 'pulse 2s infinite' }} />
            <span style={{ fontSize: 12, color: '#f59e0b', fontWeight: 600, letterSpacing: '0.05em' }}>THE MONEY DECISION GAME</span>
          </div>

          <h1 style={{ fontSize: 'clamp(48px, 8vw, 88px)', fontWeight: 800, fontFamily: 'Space Grotesk, sans-serif', lineHeight: 1.05, letterSpacing: '-0.03em', marginBottom: 24 }}>
            <span style={{ color: '#f1f5f9' }}>Earn.</span>{' '}
            <span style={{ color: '#f59e0b' }}>Attack.</span>{' '}
            <span style={{ color: '#f1f5f9' }}>Dominate.</span>
          </h1>

          <p style={{ fontSize: 'clamp(16px, 2.5vw, 20px)', color: '#94a3b8', maxWidth: 560, margin: '0 auto 40px', lineHeight: 1.6 }}>
            A fast-paced financial card game with real Indian money decisions. Race to {formatWealth(5000000)} through SIPs, Market Crashes, Tax Raids, and more.
          </p>

          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/auth?mode=register">
              <Button size="lg" variant="gold">Start Playing Free</Button>
            </Link>
            <Link to="/auth">
              <Button size="lg" variant="secondary">Sign In</Button>
            </Link>
          </div>
        </div>

        {/* Floating Cards Preview */}
        <div style={{ marginTop: 64, display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap', position: 'relative' }}>
          {PREVIEW_CARDS.map((card, i) => (
            <div key={card.name} style={{
              width: 120, height: 168,
              background: `linear-gradient(135deg, ${card.color}22, #0f1524)`,
              border: `2px solid ${card.color}55`,
              borderRadius: 12,
              padding: 12,
              display: 'flex', flexDirection: 'column', gap: 8,
              animation: `floatCard ${2 + i * 0.3}s ease-in-out infinite`,
              animationDelay: `${i * 0.2}s`,
              boxShadow: `0 8px 24px ${card.color}22`,
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: 11, color: card.color, fontWeight: 700 }}>{card.icon} {card.type.toUpperCase()}</span>
                <span style={{ fontSize: 8, fontWeight: 700, padding: '1px 4px', borderRadius: 3, background: card.color, color: '#fff' }}>{card.tier[0]}</span>
              </div>
              <div style={{ fontSize: 13, fontWeight: 700, color: '#f1f5f9', fontFamily: 'Space Grotesk, sans-serif', lineHeight: 1.2 }}>
                {card.name}
              </div>
              <div style={{ flex: 1, borderRadius: 6, background: 'rgba(255,255,255,0.03)', border: `1px solid ${card.color}22` }} />
            </div>
          ))}
        </div>
      </section>

      {/* Stats Bar */}
      <section style={{ padding: '32px 24px', background: '#0f1524', borderTop: '1px solid rgba(255,255,255,0.06)', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24, textAlign: 'center' }}>
          {[
            { label: 'Cards', value: '108' },
            { label: 'Player Goal', value: '₹50L' },
            { label: 'Rank Tiers', value: '8' },
            { label: 'Game Time', value: '20-30 min' },
          ].map(stat => (
            <div key={stat.label}>
              <div style={{ fontSize: 28, fontWeight: 800, color: '#f59e0b', fontFamily: 'Space Grotesk, sans-serif' }}>{stat.value}</div>
              <div style={{ fontSize: 13, color: '#64748b', marginTop: 4 }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section style={{ padding: '80px 24px', maxWidth: 1100, margin: '0 auto' }}>
        <h2 style={{ textAlign: 'center', fontSize: 36, fontFamily: 'Space Grotesk, sans-serif', color: '#f1f5f9', marginBottom: 8 }}>Why Paisa War?</h2>
        <p style={{ textAlign: 'center', color: '#64748b', marginBottom: 56 }}>Everything you love about competitive card games, built around Indian financial life.</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 20 }}>
          {FEATURE_CARDS.map(f => (
            <div key={f.title} style={{
              background: '#1a2235', border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: 16, padding: '24px',
              transition: 'all 0.2s',
            }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(255,255,255,0.16)'; (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-2px)' }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(255,255,255,0.08)'; (e.currentTarget as HTMLDivElement).style.transform = 'none' }}
            >
              <div style={{ fontSize: 32, marginBottom: 12 }}>{f.icon}</div>
              <h3 style={{ fontSize: 16, fontWeight: 700, color: '#f1f5f9', marginBottom: 8, fontFamily: 'Space Grotesk, sans-serif' }}>{f.title}</h3>
              <p style={{ fontSize: 14, color: '#64748b', lineHeight: 1.6 }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '80px 24px', textAlign: 'center', background: 'linear-gradient(135deg, rgba(37,99,235,0.08), rgba(245,158,11,0.08))' }}>
        <h2 style={{ fontSize: 40, fontFamily: 'Space Grotesk, sans-serif', fontWeight: 800, color: '#f1f5f9', marginBottom: 16 }}>Ready to build your empire?</h2>
        <p style={{ color: '#94a3b8', fontSize: 18, marginBottom: 40 }}>Join thousands of players racing to ₹50 Lakhs.</p>
        <Link to="/auth?mode=register">
          <Button size="lg" variant="gold">Play Now — It's Free</Button>
        </Link>
      </section>

      {/* Footer */}
      <footer style={{ padding: '32px 24px', borderTop: '1px solid rgba(255,255,255,0.06)', textAlign: 'center', color: '#64748b', fontSize: 14 }}>
        <div style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700, color: '#f59e0b', marginBottom: 8 }}>PAISA WAR</div>
        <div>The Money Decision Game — For entertainment & financial literacy purposes.</div>
      </footer>
    </div>
  )
}
