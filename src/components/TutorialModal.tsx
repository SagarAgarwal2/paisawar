import { useState } from 'react'
import { Button } from './ui/Button'

interface TutorialModalProps {
  onClose: () => void
}

export function TutorialModal({ onClose }: TutorialModalProps) {
  const [step, setStep] = useState(1)

  const handleNext = () => setStep((s) => s + 1)
  const handlePrev = () => setStep((s) => s - 1)

  return (
    <div style={{
      position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
      background: 'rgba(0,0,0,0.8)', backdropFilter: 'blur(10px)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      zIndex: 1000, padding: 24, animation: 'fadeIn 0.3s ease'
    }}>
      <div className="glass-panel" style={{
        maxWidth: 550, width: '100%', borderRadius: 24, padding: 0,
        overflow: 'hidden', display: 'flex', flexDirection: 'column'
      }}>
        {/* Header */}
        <div style={{ padding: '24px 32px', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
          <h2 style={{ fontSize: 30, fontWeight: 800, color: '#f1f5f9', fontFamily: 'Space Grotesk, sans-serif' }}>
            {step === 1 && "Welcome to Paisa War! 🎯"}
            {step === 2 && "The Cards 🃏"}
            {step === 3 && "How to Play ⚔️"}
          </h2>
        </div>

        {/* Content */}
        <div style={{ padding: '32px', flex: 1, minHeight: 280, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          
          {step === 1 && (
            <div style={{ animation: 'slideUp 0.3s ease' }}>
              <p style={{ fontSize: 20, color: '#94a3b8', lineHeight: 1.6, marginBottom: 20 }}>
                Paisa War is a turn-based financial strategy game. 
              </p>
              <div className="glass-panel" style={{ padding: 20, borderRadius: 16, background: 'rgba(245,158,11,0.1)', borderColor: 'rgba(245,158,11,0.2)' }}>
                <h3 style={{ fontSize: 20, fontWeight: 700, color: '#f59e0b', marginBottom: 8 }}>The Goal</h3>
                <p style={{ fontSize: 18, color: '#f1f5f9', lineHeight: 1.5 }}>
                  Race against your opponents to reach a Net Worth of <strong style={{ color: '#f59e0b' }}>₹50 Lakhs</strong> before the 25-minute timer runs out! The first player to hit the goal wins the match.
                </p>
              </div>
            </div>
          )}

          {step === 2 && (
            <div style={{ animation: 'slideUp 0.3s ease' }}>
              <p style={{ fontSize: 19, color: '#94a3b8', marginBottom: 24 }}>There are three types of cards you will draw:</p>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
                  <div style={{ width: 60, height: 80, borderRadius: 8, background: 'linear-gradient(135deg, rgba(16,185,129,0.2), rgba(5,150,105,0.1))', border: '1px solid rgba(16,185,129,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 30 }}>🟩</div>
                  <div>
                    <h4 style={{ color: '#10b981', fontSize: 19, fontWeight: 700, marginBottom: 4 }}>Decision Cards</h4>
                    <p style={{ color: '#94a3b8', fontSize: 16, lineHeight: 1.4 }}>Gives you a scenario where you must choose to Spend, Save, or Invest. Investing yields high wealth but carries risks!</p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
                  <div style={{ width: 60, height: 80, borderRadius: 8, background: 'linear-gradient(135deg, rgba(239,68,68,0.2), rgba(220,38,38,0.1))', border: '1px solid rgba(239,68,68,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 30 }}>🟥</div>
                  <div>
                    <h4 style={{ color: '#ef4444', fontSize: 19, fontWeight: 700, marginBottom: 4 }}>Action Cards</h4>
                    <p style={{ color: '#94a3b8', fontSize: 16, lineHeight: 1.4 }}>Used to attack your opponents! (e.g., Tax Raids, Market Crashes) to drastically reduce their net worth.</p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
                  <div style={{ width: 60, height: 80, borderRadius: 8, background: 'linear-gradient(135deg, rgba(59,130,246,0.2), rgba(37,99,235,0.1))', border: '1px solid rgba(59,130,246,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 30 }}>🟦</div>
                  <div>
                    <h4 style={{ color: '#3b82f6', fontSize: 19, fontWeight: 700, marginBottom: 4 }}>Defense Cards</h4>
                    <p style={{ color: '#94a3b8', fontSize: 16, lineHeight: 1.4 }}>Keep these in your hand. When an opponent attacks you, you can play a defense card to block the attack.</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {step === 3 && (
            <div style={{ animation: 'slideUp 0.3s ease' }}>
              <div style={{ marginBottom: 24 }}>
                <h3 style={{ fontSize: 20, fontWeight: 700, color: '#f1f5f9', marginBottom: 8 }}>Your Turn</h3>
                <ol style={{ paddingLeft: 20, color: '#94a3b8', fontSize: 18, lineHeight: 1.6 }}>
                  <li><strong>Draw:</strong> Start your turn by drawing 1 card from the deck.</li>
                  <li><strong>Play:</strong> Play 1 card from your hand (either a Decision or an Action).</li>
                </ol>
              </div>

              <div className="glass-panel" style={{ padding: 20, borderRadius: 16, background: 'rgba(37,99,235,0.1)', borderColor: 'rgba(37,99,235,0.2)' }}>
                <h3 style={{ fontSize: 19, fontWeight: 700, color: '#60a5fa', marginBottom: 8 }}>Winning & Rewards</h3>
                <p style={{ fontSize: 18, color: '#94a3b8', lineHeight: 1.5 }}>
                  Winning matches earns you <strong>Rank Points (RP)</strong> and <strong>DAANIK Coins</strong>. Climb the leaderboard to become a Paisa Mogul!
                </p>
              </div>
            </div>
          )}

        </div>

        {/* Footer */}
        <div style={{ padding: '20px 32px', borderTop: '1px solid rgba(255,255,255,0.08)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'rgba(0,0,0,0.2)' }}>
          <div style={{ display: 'flex', gap: 6 }}>
            {[1, 2, 3].map(i => (
              <div key={i} style={{ width: 8, height: 8, borderRadius: '50%', background: step === i ? '#3b82f6' : 'rgba(255,255,255,0.2)', transition: 'all 0.3s' }} />
            ))}
          </div>

          <div style={{ display: 'flex', gap: 12 }}>
            {step > 1 && (
              <Button variant="secondary" onClick={handlePrev} style={{ padding: '8px 20px' }}>
                Back
              </Button>
            )}
            {step < 3 ? (
              <Button variant="gold" onClick={handleNext} style={{ padding: '8px 24px' }}>
                Next
              </Button>
            ) : (
              <Button variant="primary" onClick={onClose} style={{ padding: '8px 24px' }}>
                Start Playing!
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
