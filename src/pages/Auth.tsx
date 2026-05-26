import { useState, useEffect } from 'react'
import { useNavigate, useSearchParams, Link } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'
import { Button } from '../components/ui/Button'
import { Input } from '../components/ui/Input'

export function Auth() {
  const [params] = useSearchParams()
  const [mode, setMode] = useState<'login' | 'register'>(params.get('mode') === 'register' ? 'register' : 'login')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [username, setUsername] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const { login, register, user } = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    if (user) navigate('/dashboard')
  }, [user, navigate])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setLoading(true)
    try {
      if (mode === 'login') {
        await login(email, password)
      } else {
        if (username.length < 3) { setError('Username must be at least 3 characters'); setLoading(false); return }
        await register(email, password, username)
        localStorage.setItem('justRegistered', 'true')
      }
      navigate('/dashboard')
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div style={{
      minHeight: '100vh', background: '#0a0e1a',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      padding: 24, position: 'relative', overflow: 'hidden',
    }}>
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 60% 50% at 50% 0%, rgba(37,99,235,0.1) 0%, transparent 70%)', pointerEvents: 'none' }} />

      <div style={{ width: '100%', maxWidth: 400, position: 'relative', animation: 'slideUp 0.4s ease forwards' }}>
        <div style={{ textAlign: 'center', marginBottom: 32 }}>
          <Link to="/" style={{ textDecoration: 'none' }}>
            <div style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 800, fontSize: 28, color: '#f59e0b', letterSpacing: '-0.02em', marginBottom: 8 }}>
              PAISA WAR
            </div>
          </Link>
          <h1 style={{ fontSize: 22, fontWeight: 700, color: '#f1f5f9', marginBottom: 6 }}>
            {mode === 'login' ? 'Welcome back' : 'Join the game'}
          </h1>
          <p style={{ fontSize: 14, color: '#64748b' }}>
            {mode === 'login' ? 'Sign in to your account' : 'Create your account to start playing'}
          </p>
        </div>

        <div style={{ background: '#1a2235', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 20, padding: 32 }}>
          {/* Mode Toggle */}
          <div style={{ display: 'flex', background: '#0f1524', borderRadius: 10, padding: 4, marginBottom: 24 }}>
            {(['login', 'register'] as const).map(m => (
              <button
                key={m}
                onClick={() => { setMode(m); setError('') }}
                style={{
                  flex: 1, padding: '8px 16px', borderRadius: 7, border: 'none', cursor: 'pointer',
                  background: mode === m ? '#2563eb' : 'transparent',
                  color: mode === m ? '#fff' : '#64748b',
                  fontSize: 14, fontWeight: 600, transition: 'all 0.2s', fontFamily: 'inherit',
                }}
              >
                {m === 'login' ? 'Sign In' : 'Register'}
              </button>
            ))}
          </div>

          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {mode === 'register' && (
              <Input
                label="Username"
                id="username"
                type="text"
                placeholder="your_mogul_name"
                value={username}
                onChange={e => setUsername(e.target.value)}
                required
              />
            )}
            <Input
              label="Email"
              id="email"
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
            />
            <Input
              label="Password"
              id="password"
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
              minLength={6}
            />

            {error && (
              <div style={{ background: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.3)', borderRadius: 8, padding: '10px 14px', fontSize: 13, color: '#f87171' }}>
                {error}
              </div>
            )}

            <Button type="submit" size="lg" loading={loading} style={{ width: '100%', marginTop: 4 }}>
              {mode === 'login' ? 'Sign In' : 'Create Account'}
            </Button>
          </form>
        </div>

        <p style={{ textAlign: 'center', marginTop: 20, fontSize: 13, color: '#64748b' }}>
          {mode === 'login' ? "Don't have an account? " : 'Already have an account? '}
          <button
            onClick={() => { setMode(mode === 'login' ? 'register' : 'login'); setError('') }}
            style={{ color: '#60a5fa', background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'inherit', fontSize: 13, fontWeight: 600 }}
          >
            {mode === 'login' ? 'Register' : 'Sign In'}
          </button>
        </p>
      </div>
    </div>
  )
}
