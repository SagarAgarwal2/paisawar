import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'
import { Button } from '../components/ui/Button'
import { Card } from '../components/ui/Card'
import { RankBadge } from '../components/RankBadge'
import { SEASONS } from '../data/mockData'
import { formatWealth } from '../types/game'
import { supabase } from '../lib/supabase'
import { TutorialModal } from '../components/TutorialModal'

type Tab = 'home' | 'leaderboard' | 'contracts' | 'profile'


interface LeaderboardEntry {
  id: string
  user_id: string
  username: string
  wins: number
  losses: number
  total_games: number
  highest_net_worth: number
}

export function Dashboard() {
  const { profile, logout } = useAuth()
  const navigate = useNavigate()
  const [tab, setTab] = useState<Tab>('home')
  const [leaderboard, setLeaderboard] = useState<LeaderboardEntry[]>([])
  const [leaderboardLoading, setLeaderboardLoading] = useState(false)
  const [showTutorial, setShowTutorial] = useState(false)
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)

  useEffect(() => {
    if (localStorage.getItem('justRegistered') === 'true') {
      setShowTutorial(true)
      localStorage.removeItem('justRegistered')
      localStorage.setItem('hasSeenTutorial', 'true')
    }
  }, [])

  const handleLogout = async () => {
    await logout()
    navigate('/')
  }

  useEffect(() => {
    if (tab === 'leaderboard') fetchLeaderboard()
  }, [tab])

  const fetchLeaderboard = async () => {
    setLeaderboardLoading(true)
    const { data } = await supabase
      .from('leaderboard')
      .select('*')
      .order('wins', { ascending: false })
      .limit(50)
    setLeaderboard(data ?? [])
    setLeaderboardLoading(false)
  }

  const rp = profile?.rank_points ?? 0
  const coins = profile?.daanik_coins ?? 100
  const currentSeason = SEASONS[0]


  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {showTutorial && (
        <TutorialModal onClose={() => {
          setShowTutorial(false)
          localStorage.setItem('hasSeenTutorial', 'true')
        }} />
      )}
      {/* Top Nav */}
      <nav style={{
        position: 'sticky', top: 0, zIndex: 40,
        background: 'rgba(10,14,26,0.95)', backdropFilter: 'blur(12px)',
        borderBottom: '1px solid rgba(255,255,255,0.06)',
        padding: '0 20px',
        height: 60,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <button 
            className="desktop-only"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)} 
            style={{ background: 'transparent', border: 'none', color: '#94a3b8', cursor: 'pointer', fontSize: 20, display: 'flex', alignItems: 'center', padding: 4 }}
          >
            ☰
          </button>
          <div style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 800, fontSize: 18, color: '#f59e0b' }}>PAISA WAR</div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, background: '#1a2235', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 8, padding: '5px 12px' }}>
            <span style={{ fontSize: 14 }}>🪙</span>
            <span style={{ fontSize: 14, fontWeight: 700, color: '#f59e0b' }}>{coins.toLocaleString()} DC</span>
          </div>
          <button onClick={handleLogout} style={{ background: 'none', border: 'none', color: '#64748b', cursor: 'pointer', fontSize: 13, fontFamily: 'inherit' }}>Sign Out</button>
        </div>
      </nav>

      <div style={{ display: 'flex', flex: 1 }}>
        {/* Sidebar (Desktop) */}
        {isSidebarOpen && (
        <aside className="glass-panel desktop-flex" style={{
          width: 220, flexShrink: 0,
          borderTop: 'none', borderLeft: 'none', borderBottom: 'none',
          padding: '24px 16px',
          flexDirection: 'column', gap: 6,
          position: 'sticky', top: 60, height: 'calc(100vh - 60px)',
          overflowY: 'auto',
          borderRadius: 0,
        }}>
          {([
            { id: 'home', label: 'Home', icon: '🏠' },
            { id: 'leaderboard', label: 'Leaderboard', icon: '🏆' },
            { id: 'contracts', label: 'Contracts', icon: '📋' },
            { id: 'profile', label: 'Profile', icon: '👤' },
          ] as const).map(item => (
            <button
              key={item.id}
              onClick={() => setTab(item.id)}
              style={{
                display: 'flex', alignItems: 'center', gap: 10,
                padding: '12px 16px', borderRadius: 12, border: 'none',
                background: tab === item.id ? 'rgba(37,99,235,0.15)' : 'transparent',
                color: tab === item.id ? '#60a5fa' : '#64748b',
                cursor: 'pointer', fontSize: 13, fontWeight: 600, fontFamily: 'inherit',
                textAlign: 'left', width: '100%',
                transition: 'all 0.15s',
              }}
            >
              <span style={{ fontSize: 16 }}>{item.icon}</span>
              {item.label}
            </button>
          ))}

          <div style={{ marginTop: 'auto', padding: '12px 0', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
            <button
              onClick={() => setShowTutorial(true)}
              style={{
                display: 'flex', alignItems: 'center', gap: 10,
                padding: '12px 16px', borderRadius: 12,
                background: 'rgba(245,158,11,0.1)', border: '1px solid rgba(245,158,11,0.2)',
                color: '#f59e0b',
                cursor: 'pointer', fontSize: 13, fontWeight: 700, fontFamily: 'inherit',
                textAlign: 'left', width: '100%', marginBottom: 16,
                transition: 'all 0.15s',
              }}
            >
              <span style={{ fontSize: 16 }}>📖</span>
              How to Play
            </button>
            {profile && <RankBadge rp={rp} showProgress size="sm" />}
          </div>
        </aside>
        )}

        <main style={{ flex: 1, padding: '24px', overflowY: 'auto', animation: 'fadeIn 0.3s ease', paddingBottom: '90px' }}>
          {tab === 'home' && <HomeTab navigate={navigate} profile={profile} currentSeason={currentSeason} />}
          {tab === 'leaderboard' && <LeaderboardTab leaderboard={leaderboard} loading={leaderboardLoading} profile={profile} onRefresh={fetchLeaderboard} />}
          {tab === 'contracts' && <ContractsTab />}
          {tab === 'profile' && <ProfileTab profile={profile} />}
        </main>
      </div>

      {/* Bottom Nav (Mobile) */}
      <nav className="glass-panel mobile-flex" style={{
        position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 50,
        padding: '8px 16px',
        justifyContent: 'space-around', alignItems: 'center',
        borderLeft: 'none', borderRight: 'none', borderBottom: 'none',
        borderRadius: 0,
        display: 'none', // Hidden by default, shown by .mobile-flex
      }}>
        {([
          { id: 'home', label: 'Home', icon: '🏠' },
          { id: 'leaderboard', label: 'Leaderboard', icon: '🏆' },
          { id: 'contracts', label: 'Contracts', icon: '📋' },
          { id: 'profile', label: 'Profile', icon: '👤' },
        ] as const).map(item => (
          <button
            key={item.id}
            onClick={() => setTab(item.id)}
            style={{
              display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4,
              padding: '8px', border: 'none', background: 'transparent',
              color: tab === item.id ? '#60a5fa' : '#64748b',
              cursor: 'pointer', fontSize: 10, fontWeight: 600, fontFamily: 'inherit',
              transition: 'all 0.15s',
            }}
          >
            <span style={{ fontSize: 20, marginBottom: 2 }}>{item.icon}</span>
            {item.label}
          </button>
        ))}
      </nav>
    </div>
  )
}

function HomeTab({ navigate, profile, currentSeason }: { navigate: (path: string) => void; profile: ReturnType<typeof useAuth>['profile']; currentSeason: typeof SEASONS[0] }) {
  const [seasonTimeLeft, setSeasonTimeLeft] = useState('Calculating...')

  useEffect(() => {
    const end = new Date()
    end.setDate(end.getDate() + 12)
    end.setHours(end.getHours() + 4)
    const endTime = end.getTime()

    const updateTimer = () => {
      const diff = endTime - Date.now()
      if (diff <= 0) {
        setSeasonTimeLeft('Ended')
        return
      }
      const d = Math.floor(diff / (1000 * 60 * 60 * 24))
      const h = Math.floor((diff / (1000 * 60 * 60)) % 24)
      setSeasonTimeLeft(`${d}d ${h}h`)
    }
    updateTimer()
    const interval = setInterval(updateTimer, 60000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24, maxWidth: 900, width: '100%', margin: '0 auto' }}>
      {/* Welcome */}
      <div style={{ background: 'linear-gradient(135deg, rgba(37,99,235,0.15), rgba(245,158,11,0.1))', border: '1px solid rgba(37,99,235,0.2)', borderRadius: 16, padding: '24px 28px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 16 }}>
          <div>
            <h1 style={{ fontSize: 24, fontWeight: 800, color: '#f1f5f9', fontFamily: 'Space Grotesk, sans-serif', marginBottom: 4 }}>
              Welcome, {profile?.username ?? 'Mogul'} 👋
            </h1>
            <p style={{ color: '#64748b', fontSize: 14 }}>Ready to build your empire?</p>
          </div>
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            <Button variant="gold" size="lg" onClick={() => navigate('/multiplayer')}>Play Online</Button>
            <Button variant="primary" onClick={() => navigate('/game')}>vs AI</Button>
            <Button variant="secondary" onClick={() => navigate('/game?mode=casual')}>Casual</Button>
          </div>
        </div>
      </div>

      {/* Stats Row */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: 16 }}>
        {[
          { label: 'Games Played', value: (profile?.games_played ?? 0).toString(), icon: '🎮', color: '#3b82f6' },
          { label: 'Games Won', value: (profile?.games_won ?? 0).toString(), icon: '🏆', color: '#10b981' },
          { label: 'Win Streak', value: `${profile?.win_streak ?? 0}🔥`, icon: '🔥', color: '#f59e0b' },
          { label: 'Total XP', value: (profile?.total_xp ?? 0).toLocaleString(), icon: '⭐', color: '#f59e0b' },
        ].map(stat => (
          <Card key={stat.label} style={{ padding: '16px 20px' }}>
            <div style={{ fontSize: 24, marginBottom: 6 }}>{stat.icon}</div>
            <div style={{ fontSize: 22, fontWeight: 800, color: stat.color, fontFamily: 'Space Grotesk, sans-serif' }}>{stat.value}</div>
            <div style={{ fontSize: 12, color: '#64748b', marginTop: 2 }}>{stat.label}</div>
          </Card>
        ))}
      </div>

      {/* Season Banner */}
      <Card glow="gold" style={{ padding: 20 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
          <div>
            <div style={{ fontSize: 12, color: '#f59e0b', fontWeight: 700, letterSpacing: '0.05em', marginBottom: 6 }}>ACTIVE SEASON</div>
            <h2 style={{ fontSize: 20, fontWeight: 800, color: '#f1f5f9', fontFamily: 'Space Grotesk, sans-serif', marginBottom: 4 }}>
              Season {currentSeason.number}: {currentSeason.name}
            </h2>
            <p style={{ color: '#94a3b8', fontSize: 13 }}>{currentSeason.theme}</p>
            <div style={{ marginTop: 8, padding: '4px 10px', borderRadius: 6, background: 'rgba(245,158,11,0.15)', border: '1px solid rgba(245,158,11,0.3)', display: 'inline-block', fontSize: 12, color: '#f59e0b', fontWeight: 600 }}>
              ⚡ {currentSeason.special_rule}
            </div>
          </div>
          <div style={{ textAlign: 'right' }}>
            <div style={{ fontSize: 13, color: '#64748b', marginBottom: 4 }}>Season ends in</div>
            <div style={{ fontSize: 28, fontWeight: 800, color: '#f59e0b', fontFamily: 'Space Grotesk, sans-serif' }}>{seasonTimeLeft}</div>
          </div>
        </div>
      </Card>

      {/* Quick Play Options */}
      <div>
        <h2 style={{ fontSize: 18, fontWeight: 700, color: '#f1f5f9', marginBottom: 16, fontFamily: 'Space Grotesk, sans-serif' }}>Game Modes</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 16 }}>
          {[
            { title: 'Play Online', desc: 'Create or join a room. Play against real players worldwide.', icon: '🌐', action: () => navigate('/multiplayer'), color: '#f59e0b' },
            { title: 'vs AI', desc: 'Practice against adaptive AI opponents.', icon: '🤖', action: () => navigate('/game?mode=ai'), color: '#059669' },
            { title: 'Ranked Match', desc: 'Earn/lose RP. Climb the Mogul ladder.', icon: '🏆', action: () => navigate('/game?mode=ranked'), color: '#2563eb' },
          ].map(m => (
            <Card key={m.title} hoverable onClick={m.action} style={{ padding: 20, cursor: 'pointer' }}>
              <div style={{ fontSize: 28, marginBottom: 12 }}>{m.icon}</div>
              <h3 style={{ fontSize: 15, fontWeight: 700, color: '#f1f5f9', marginBottom: 6, fontFamily: 'Space Grotesk, sans-serif' }}>{m.title}</h3>
              <p style={{ fontSize: 13, color: '#64748b', lineHeight: 1.5, marginBottom: 12 }}>{m.desc}</p>
              <div style={{ display: 'inline-block', padding: '4px 12px', borderRadius: 6, background: `${m.color}22`, color: m.color, fontSize: 12, fontWeight: 700 }}>
                Play Now
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

function LeaderboardTab({ leaderboard, loading, profile, onRefresh }: { leaderboard: LeaderboardEntry[]; loading: boolean; profile: ReturnType<typeof useAuth>['profile']; onRefresh: () => void }) {
  return (
    <div style={{ maxWidth: 700, width: '100%', margin: '0 auto' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
        <h2 style={{ fontSize: 22, fontWeight: 800, color: '#f1f5f9', fontFamily: 'Space Grotesk, sans-serif' }}>Leaderboard</h2>
        <button onClick={onRefresh} style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 8, padding: '6px 14px', color: '#94a3b8', cursor: 'pointer', fontSize: 13, fontFamily: 'inherit' }}>
          Refresh
        </button>
      </div>
      <Card>
        {loading ? (
          <div style={{ textAlign: 'center', padding: '40px 0', color: '#64748b' }}>
            <div style={{ width: 28, height: 28, border: '2px solid rgba(255,255,255,0.1)', borderTopColor: '#f59e0b', borderRadius: '50%', animation: 'spin 0.8s linear infinite', margin: '0 auto 12px' }} />
            Loading leaderboard...
          </div>
        ) : leaderboard.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '40px 0', color: '#64748b' }}>
            <div style={{ fontSize: 32, marginBottom: 12 }}>🏆</div>
            No entries yet. Be the first to play!
          </div>
        ) : (
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                {['Rank', 'Player', 'Wins', 'Games', 'Win %', 'Best Wealth'].map(h => (
                  <th key={h} style={{ padding: '10px 12px', textAlign: 'left', fontSize: 12, color: '#64748b', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {leaderboard.map((player, i) => {
                const isMe = player.username === profile?.username
                const winRate = player.total_games > 0 ? Math.round((player.wins / player.total_games) * 100) : 0
                return (
                  <tr key={player.id} style={{ borderBottom: '1px solid rgba(255,255,255,0.04)', background: isMe ? 'rgba(37,99,235,0.08)' : 'transparent' }}>
                    <td style={{ padding: '12px', fontSize: 14, fontWeight: 700, color: i < 3 ? (['#f59e0b', '#94a3b8', '#d97706'][i] ?? '#64748b') : '#64748b' }}>
                      {i === 0 ? '🥇' : i === 1 ? '🥈' : i === 2 ? '🥉' : `#${i + 1}`}
                    </td>
                    <td style={{ padding: '12px', fontSize: 14, color: '#f1f5f9', fontWeight: isMe ? 700 : 400 }}>
                      {player.username} {isMe && <span style={{ fontSize: 11, color: '#60a5fa', marginLeft: 6 }}>(you)</span>}
                    </td>
                    <td style={{ padding: '12px', fontSize: 14, fontWeight: 700, color: '#10b981' }}>{player.wins}</td>
                    <td style={{ padding: '12px', fontSize: 13, color: '#94a3b8' }}>{player.total_games}</td>
                    <td style={{ padding: '12px', fontSize: 13, color: winRate > 60 ? '#10b981' : '#94a3b8' }}>{winRate}%</td>
                    <td style={{ padding: '12px', fontSize: 13, color: '#f59e0b', fontWeight: 600 }}>{formatWealth(player.highest_net_worth)}</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        )}
      </Card>
    </div>
  )
}


function ContractsTab() {
  const { profile } = useAuth()
  const [contracts, setContracts] = useState<any[]>([])
  const [progressData, setProgressData] = useState<Record<string, { progress: number, completed: boolean }>>({})
  const [resetTime, setResetTime] = useState('Calculating...')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchContracts() {
      if (!profile) return
      try {
        const { data: activeContracts } = await supabase
          .from('daily_contracts')
          .select('*')
          .gte('contract_date', new Date().toISOString().split('T')[0])
        
        if (activeContracts) setContracts(activeContracts)

        const { data: pContracts } = await supabase
          .from('player_contracts')
          .select('*')
          .eq('player_id', profile.id)

        if (pContracts) {
          const pMap: Record<string, { progress: number, completed: boolean }> = {}
          for (const pc of pContracts) {
            pMap[pc.contract_id] = { progress: pc.progress, completed: pc.completed }
          }
          setProgressData(pMap)
        }
      } catch (err) {
        console.error('Error fetching contracts:', err)
      } finally {
        setLoading(false)
      }
    }
    fetchContracts()
  }, [profile])

  useEffect(() => {
    const updateTimer = () => {
      const now = new Date()
      const tomorrow = new Date(now)
      tomorrow.setHours(24, 0, 0, 0)
      const diff = tomorrow.getTime() - now.getTime()
      const h = Math.floor((diff / (1000 * 60 * 60)) % 24)
      const m = Math.floor((diff / 1000 / 60) % 60)
      setResetTime(`${h}h ${m}m`)
    }
    updateTimer()
    const interval = setInterval(updateTimer, 60000)
    return () => clearInterval(interval)
  }, [])

  const difficultyColors: Record<string, string> = { easy: '#10b981', medium: '#f59e0b', hard: '#ef4444' }

  return (
    <div style={{ maxWidth: 700 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
        <h2 style={{ fontSize: 22, fontWeight: 800, color: '#f1f5f9', fontFamily: 'Space Grotesk, sans-serif' }}>Daily Contracts</h2>
        <div style={{ fontSize: 13, color: '#64748b' }}>Resets in <span style={{ color: '#f59e0b', fontWeight: 700 }}>{resetTime}</span></div>
      </div>

      {loading ? (
        <div style={{ textAlign: 'center', color: '#64748b', padding: 40 }}>Loading active contracts...</div>
      ) : contracts.length === 0 ? (
        <Card style={{ padding: 24, textAlign: 'center', background: 'rgba(255,255,255,0.02)', borderColor: 'rgba(255,255,255,0.05)' }}>
          <div style={{ color: '#94a3b8' }}>No active contracts for today. Check back tomorrow!</div>
        </Card>
      ) : (
        <>
          {Object.keys(progressData).length === 0 && (
            <Card style={{ padding: 24, textAlign: 'center', marginBottom: 20, background: 'rgba(59,130,246,0.05)', borderColor: 'rgba(59,130,246,0.2)' }}>
              <div style={{ fontSize: 24, marginBottom: 8 }}>🎮</div>
              <h3 style={{ fontSize: 16, fontWeight: 700, color: '#60a5fa', marginBottom: 4 }}>Start Your Journey</h3>
              <p style={{ fontSize: 14, color: '#94a3b8' }}>Play a game to start earning contract progress and unlock rewards!</p>
            </Card>
          )}

          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {contracts.map(contract => {
              const progress = progressData[contract.id]?.progress ?? 0
              const completed = progressData[contract.id]?.completed ?? false
              const pct = Math.min(100, (progress / contract.requirement_value) * 100)
              const color = difficultyColors[contract.difficulty] || '#3b82f6'

              return (
                <Card key={contract.id} style={{ padding: 20, borderColor: completed ? 'rgba(16,185,129,0.3)' : contract.is_weekly ? 'rgba(245,158,11,0.2)' : 'rgba(255,255,255,0.08)', background: completed ? 'rgba(16,185,129,0.05)' : contract.is_weekly ? 'rgba(245,158,11,0.04)' : undefined }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 12 }}>
                    <div style={{ flex: 1 }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 }}>
                        <span style={{ fontSize: 11, fontWeight: 700, padding: '2px 8px', borderRadius: 4, background: `${color}22`, color, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                          {contract.difficulty}
                        </span>
                        {contract.is_weekly && <span style={{ fontSize: 11, fontWeight: 700, padding: '2px 8px', borderRadius: 4, background: 'rgba(245,158,11,0.2)', color: '#f59e0b' }}>WEEKLY</span>}
                        {completed && <span style={{ fontSize: 11, fontWeight: 700, color: '#10b981' }}>✓ COMPLETE</span>}
                      </div>
                      <div style={{ fontSize: 15, fontWeight: 700, color: '#f1f5f9', marginBottom: 4, fontFamily: 'Space Grotesk, sans-serif' }}>{contract.title}</div>
                      <div style={{ fontSize: 13, color: '#64748b', marginBottom: 10 }}>{contract.description}</div>

                      <div style={{ height: 4, background: 'rgba(255,255,255,0.06)', borderRadius: 2, overflow: 'hidden' }}>
                        <div style={{ height: '100%', width: `${pct}%`, background: completed ? '#10b981' : color, borderRadius: 2, transition: 'width 0.5s ease' }} />
                      </div>
                      <div style={{ fontSize: 11, color: '#64748b', marginTop: 4 }}>{Math.min(progress, contract.requirement_value)}/{contract.requirement_value}</div>
                    </div>

                    <div style={{ textAlign: 'right', flexShrink: 0 }}>
                      <div style={{ fontSize: 18, fontWeight: 800, color: '#f59e0b', fontFamily: 'Space Grotesk, sans-serif' }}>🪙 {contract.reward_dc}</div>
                      {contract.reward_card_tier && (
                        <div style={{ fontSize: 11, color: '#94a3b8', marginTop: 2 }}>+ 1 {contract.reward_card_tier} card</div>
                      )}
                    </div>
                  </div>
                </Card>
              )
            })}
          </div>
        </>
      )}
    </div>
  )
}

function ProfileTab({ profile }: { profile: ReturnType<typeof useAuth>['profile'] }) {
  const rp = profile?.rank_points ?? 0
  const winRate = profile && profile.games_played > 0 ? Math.round((profile.games_won / profile.games_played) * 100) : 0

  return (
    <div style={{ maxWidth: 600 }}>
      <Card style={{ padding: 28, marginBottom: 20 }}>
        <div style={{ display: 'flex', gap: 20, alignItems: 'center', marginBottom: 24 }}>
          <div style={{ width: 72, height: 72, borderRadius: '50%', background: 'linear-gradient(135deg, #1d4ed8, #0d9488)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 28, fontWeight: 700, color: '#fff', fontFamily: 'Space Grotesk, sans-serif' }}>
            {(profile?.username?.[0] ?? '?').toUpperCase()}
          </div>
          <div>
            <h2 style={{ fontSize: 22, fontWeight: 800, color: '#f1f5f9', fontFamily: 'Space Grotesk, sans-serif', marginBottom: 4 }}>
              {profile?.username ?? 'Unknown Player'}
            </h2>
            <RankBadge rp={rp} showProgress />
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
          {[
            { label: 'Games Played', value: (profile?.games_played ?? 0).toString() },
            { label: 'Games Won', value: (profile?.games_won ?? 0).toString() },
            { label: 'Win Rate', value: `${winRate}%` },
            { label: 'Best Streak', value: `${profile?.max_win_streak ?? 0}🔥` },
            { label: 'Total XP', value: (profile?.total_xp ?? 0).toLocaleString() },
            { label: 'DAANIK Coins', value: `🪙 ${(profile?.daanik_coins ?? 0).toLocaleString()}` },
          ].map(stat => (
            <div key={stat.label} style={{ padding: '14px 16px', background: '#0f1524', borderRadius: 10, border: '1px solid rgba(255,255,255,0.06)' }}>
              <div style={{ fontSize: 12, color: '#64748b', marginBottom: 4 }}>{stat.label}</div>
              <div style={{ fontSize: 18, fontWeight: 700, color: '#f1f5f9', fontFamily: 'Space Grotesk, sans-serif' }}>{stat.value}</div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  )
}
