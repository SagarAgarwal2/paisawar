import { useState, useEffect, useRef, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'
import { Button } from '../components/ui/Button'
import { Card } from '../components/ui/Card'
import {
  createRoom, joinRoom, leaveRoom, setReady, startGame,
  subscribeToRoom, getRoomPlayers, broadcastPlayersChanged, getRoom,
  type Room, type RoomPlayer,
} from '../lib/multiplayerEngine'
import type { RealtimeChannel } from '@supabase/supabase-js'

type LobbyView = 'menu' | 'waiting'

export function Lobby() {
  const { profile } = useAuth()
  const navigate = useNavigate()

  const [view, setView] = useState<LobbyView>('menu')
  const [joinCode, setJoinCode] = useState('')
  const [maxPlayers, setMaxPlayers] = useState(2)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const [room, setRoom] = useState<Room | null>(null)
  const [roomPlayers, setRoomPlayers] = useState<RoomPlayer[]>([])
  const channelRef = useRef<RealtimeChannel | null>(null)
  const pollRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const isHost = room?.host_id === profile?.id
  const myPlayer = roomPlayers.find(p => p.player_id === profile?.id)
  // Host doesn't need to click Ready — their intent to start is enough.
  // All non-host players must be ready, and there must be at least 2 players total.
  const nonHostPlayers = roomPlayers.filter(p => p.player_id !== room?.host_id)
  const allReady = roomPlayers.length >= 2 && nonHostPlayers.length > 0 && nonHostPlayers.every(p => p.is_ready)
  const canStart = isHost && allReady

  const startPolling = useCallback((roomId: string) => {
    if (pollRef.current) clearInterval(pollRef.current)
    pollRef.current = setInterval(async () => {
      const players = await getRoomPlayers(roomId)
      setRoomPlayers(players)
      // Also poll the room state to catch status changes (e.g. game start)
      const r = await getRoom(roomId)
      if (r) setRoom(r)
    }, 3000)
  }, [])

  const stopPolling = useCallback(() => {
    if (pollRef.current) { clearInterval(pollRef.current); pollRef.current = null }
  }, [])

  useEffect(() => {
    return () => {
      channelRef.current?.unsubscribe()
      stopPolling()
    }
  }, [stopPolling])

  // Watch for game start — redirect non-host players too
  useEffect(() => {
    if (room?.status === 'in_progress' && room.game_state) {
      stopPolling()
      navigate(`/multiplayer/${room.id}`)
    }
  }, [room?.status, room?.id, navigate, stopPolling]) // eslint-disable-line

  const enterRoom = useCallback((newRoom: Room) => {
    setRoom(newRoom)
    setView('waiting')

    // Subscribe to realtime
    if (channelRef.current) channelRef.current.unsubscribe()
    channelRef.current = subscribeToRoom(
      newRoom.id,
      (updatedRoom) => setRoom(updatedRoom as Room),
      (players) => setRoomPlayers(players),
    )

    // Also poll as fallback
    startPolling(newRoom.id)
  }, [startPolling])

  const handleCreate = async () => {
    if (!profile) {
      setError('Profile not found. If you just signed up, your username might have been taken. Try signing out and signing up again with a different username.')
      return
    }
    setLoading(true)
    setError('')
    try {
      const newRoom = await createRoom(profile.id, profile.username, maxPlayers)
      const players = await getRoomPlayers(newRoom.id)
      setRoomPlayers(players)
      enterRoom(newRoom)
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Failed to create room')
    } finally {
      setLoading(false)
    }
  }

  const handleJoin = async () => {
    if (!profile) {
      setError('Profile not found. If you just signed up, your username might have been taken. Try signing out and signing up again with a different username.')
      return
    }
    if (!joinCode.trim()) return
    setLoading(true)
    setError('')
    try {
      const joinedRoom = await joinRoom(joinCode.trim(), profile.id, profile.username)
      const players = await getRoomPlayers(joinedRoom.id)
      setRoomPlayers(players)
      enterRoom(joinedRoom)
      // After subscribing in enterRoom, broadcast so host sees the new player immediately
      setTimeout(() => broadcastPlayersChanged(joinedRoom.id), 500)
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Failed to join room')
    } finally {
      setLoading(false)
    }
  }

  const handleToggleReady = async () => {
    if (!room || !profile) return
    try {
      await setReady(room.id, profile.id, !myPlayer?.is_ready)
      // Broadcast change so everyone updates immediately
      await broadcastPlayersChanged(room.id)
      // Also update local state immediately for responsiveness
      const players = await getRoomPlayers(room.id)
      setRoomPlayers(players)
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Failed to update ready status')
    }
  }

  const handleStartGame = async () => {
    if (!room || !profile || !canStart) return
    setLoading(true)
    setError('')
    try {
      await startGame(room.id, roomPlayers)
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Failed to start game')
      setLoading(false)
    }
  }

  const handleLeave = async () => {
    if (!room || !profile) return
    await leaveRoom(room.id, profile.id)
    await broadcastPlayersChanged(room.id)
    channelRef.current?.unsubscribe()
    stopPolling()
    setRoom(null)
    setRoomPlayers([])
    setView('menu')
  }

  if (view === 'waiting' && room) {
    return (
      <WaitingRoom
        room={room}
        roomPlayers={roomPlayers}
        nonHostPlayers={nonHostPlayers}
        isHost={isHost}
        myPlayer={myPlayer}
        canStart={canStart}
        allReady={allReady}
        loading={loading}
        error={error}
        onToggleReady={handleToggleReady}
        onStart={handleStartGame}
        onLeave={handleLeave}
      />
    )
  }

  return (
    <div style={{ minHeight: '100vh', background: '#0a0e1a', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 24 }}>
      <div style={{ width: '100%', maxWidth: 480, animation: 'slideUp 0.4s ease' }}>
        <button
          onClick={() => navigate('/dashboard')}
          style={{ background: 'none', border: 'none', color: '#64748b', cursor: 'pointer', fontSize: 16, fontFamily: 'inherit', marginBottom: 28, display: 'flex', alignItems: 'center', gap: 6 }}
        >
          ← Back to Dashboard
        </button>

        <div style={{ textAlign: 'center', marginBottom: 36 }}>
          <div style={{ fontSize: 50, marginBottom: 12 }}>🌐</div>
          <h1 style={{ fontSize: 35, fontWeight: 800, color: '#f1f5f9', fontFamily: 'Space Grotesk, sans-serif', marginBottom: 8 }}>
            Play Online
          </h1>
          <p style={{ color: '#64748b', fontSize: 18 }}>
            Create a room or join a friend's game with a code.
          </p>
        </div>

        {error && (
          <div style={{ background: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.3)', borderRadius: 10, padding: '12px 16px', fontSize: 16, color: '#f87171', marginBottom: 20 }}>
            {error}
          </div>
        )}

        {/* Create Room */}
        <Card style={{ padding: 24, marginBottom: 16 }}>
          <h2 style={{ fontSize: 21, fontWeight: 700, color: '#f1f5f9', fontFamily: 'Space Grotesk, sans-serif', marginBottom: 16 }}>
            Create a Room
          </h2>
          <div style={{ marginBottom: 16 }}>
            <div style={{ fontSize: 16, color: '#64748b', marginBottom: 8, fontWeight: 500 }}>Max Players</div>
            <div style={{ display: 'flex', gap: 8 }}>
              {[2, 3, 4, 5, 6].map(n => (
                <button
                  key={n}
                  onClick={() => setMaxPlayers(n)}
                  style={{
                    width: 44, height: 44, borderRadius: 8,
                    border: `2px solid ${maxPlayers === n ? '#2563eb' : 'rgba(255,255,255,0.1)'}`,
                    background: maxPlayers === n ? 'rgba(37,99,235,0.2)' : 'transparent',
                    color: maxPlayers === n ? '#60a5fa' : '#94a3b8',
                    fontWeight: 700, fontSize: 19, cursor: 'pointer',
                    transition: 'all 0.15s', fontFamily: 'inherit',
                  }}
                >
                  {n}
                </button>
              ))}
            </div>
          </div>
          <Button variant="gold" size="lg" loading={loading} onClick={handleCreate} style={{ width: '100%' }}>
            Create Room
          </Button>
        </Card>

        {/* Join Room */}
        <Card style={{ padding: 24 }}>
          <h2 style={{ fontSize: 21, fontWeight: 700, color: '#f1f5f9', fontFamily: 'Space Grotesk, sans-serif', marginBottom: 16 }}>
            Join a Room
          </h2>
          <div style={{ display: 'flex', gap: 10 }}>
            <input
              value={joinCode}
              onChange={e => setJoinCode(e.target.value.toUpperCase())}
              placeholder="Enter room code..."
              maxLength={6}
              onKeyDown={e => e.key === 'Enter' && handleJoin()}
              style={{
                flex: 1, padding: '10px 14px', background: '#0f1524',
                border: '1px solid rgba(255,255,255,0.1)', borderRadius: 10,
                color: '#f1f5f9', fontSize: 20, fontWeight: 700,
                letterSpacing: '0.15em', fontFamily: 'Space Grotesk, sans-serif',
                outline: 'none',
              }}
              onFocus={e => { e.target.style.borderColor = '#2563eb' }}
              onBlur={e => { e.target.style.borderColor = 'rgba(255,255,255,0.1)' }}
            />
            <Button onClick={handleJoin} loading={loading} disabled={joinCode.length < 4}>
              Join
            </Button>
          </div>
        </Card>
      </div>
    </div>
  )
}

function WaitingRoom({
  room, roomPlayers, nonHostPlayers, isHost, myPlayer, canStart, allReady, loading, error,
  onToggleReady, onStart, onLeave,
}: {
  room: Room
  roomPlayers: RoomPlayer[]
  nonHostPlayers: RoomPlayer[]
  isHost: boolean
  myPlayer: RoomPlayer | undefined
  canStart: boolean
  allReady: boolean
  loading: boolean
  error: string
  onToggleReady: () => void
  onStart: () => void
  onLeave: () => void
}) {
  const [copied, setCopied] = useState(false)

  const copyCode = () => {
    navigator.clipboard.writeText(room.code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div style={{ minHeight: '100vh', background: '#0a0e1a', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 24 }}>
      <div style={{ width: '100%', maxWidth: 520, animation: 'slideUp 0.4s ease' }}>

        {/* Room Code */}
        <div style={{ textAlign: 'center', marginBottom: 28 }}>
          <div style={{ fontSize: 15, color: '#64748b', marginBottom: 8, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
            Share this code to invite players
          </div>
          <div
            onClick={copyCode}
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 14,
              background: '#1a2235', border: '2px solid rgba(245,158,11,0.5)',
              borderRadius: 16, padding: '16px 32px', cursor: 'pointer',
              transition: 'all 0.2s', userSelect: 'none',
            }}
            onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.borderColor = '#f59e0b' }}
            onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(245,158,11,0.5)' }}
          >
            <span style={{ fontSize: 45, fontWeight: 800, letterSpacing: '0.25em', color: '#f59e0b', fontFamily: 'Space Grotesk, sans-serif' }}>
              {room.code}
            </span>
            <span style={{ fontSize: 15, color: copied ? '#10b981' : '#64748b', fontWeight: 600, whiteSpace: 'nowrap' }}>
              {copied ? '✓ Copied!' : 'Click to copy'}
            </span>
          </div>
        </div>

        {error && (
          <div style={{ background: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.3)', borderRadius: 10, padding: '12px 16px', fontSize: 16, color: '#f87171', marginBottom: 16 }}>
            {error}
          </div>
        )}

        {/* Players List */}
        <Card style={{ padding: 20, marginBottom: 14 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 14 }}>
            <h2 style={{ fontSize: 19, fontWeight: 700, color: '#f1f5f9', fontFamily: 'Space Grotesk, sans-serif' }}>
              Players ({roomPlayers.length}/{room.max_players})
            </h2>
            <div style={{ fontSize: 15, color: '#64748b' }}>
              {allReady
                ? <span style={{ color: '#10b981', fontWeight: 700 }}>All ready!</span>
                : nonHostPlayers.length === 0
                  ? <span>Waiting for players...</span>
                  : <span>{nonHostPlayers.filter(p => p.is_ready).length}/{nonHostPlayers.length} ready</span>
              }
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {roomPlayers.map(p => (
              <div
                key={p.id}
                style={{
                  display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                  padding: '12px 14px', borderRadius: 10,
                  background: p.player_id === room.host_id ? 'rgba(245,158,11,0.07)' : 'rgba(255,255,255,0.03)',
                  border: `1px solid ${p.player_id === room.host_id ? 'rgba(245,158,11,0.25)' : 'rgba(255,255,255,0.07)'}`,
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <div style={{
                    width: 38, height: 38, borderRadius: '50%',
                    background: `hsl(${p.seat_order * 55 + 200}, 55%, 38%)`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: 19, fontWeight: 700, color: '#fff', flexShrink: 0,
                  }}>
                    {p.username[0]?.toUpperCase()}
                  </div>
                  <div>
                    <div style={{ fontSize: 18, fontWeight: 600, color: '#f1f5f9' }}>{p.username}</div>
                    <div style={{ fontSize: 14, color: '#64748b' }}>
                      {p.player_id === room.host_id ? '👑 Host' : `Player ${p.seat_order + 1}`}
                    </div>
                  </div>
                </div>
                <div style={{
                  fontSize: 15, fontWeight: 700, padding: '5px 12px', borderRadius: 6,
                  background: p.is_ready ? 'rgba(16,185,129,0.15)' : 'rgba(100,116,139,0.12)',
                  color: p.is_ready ? '#10b981' : '#64748b',
                  border: `1px solid ${p.is_ready ? 'rgba(16,185,129,0.3)' : 'rgba(100,116,139,0.2)'}`,
                }}>
                  {p.is_ready ? '✓ Ready' : 'Not Ready'}
                </div>
              </div>
            ))}

            {Array.from({ length: Math.max(0, room.max_players - roomPlayers.length) }).map((_, i) => (
              <div
                key={`empty-${i}`}
                style={{
                  display: 'flex', alignItems: 'center', gap: 10,
                  padding: '12px 14px', borderRadius: 10,
                  border: '1px dashed rgba(255,255,255,0.07)',
                }}
              >
                <div style={{ width: 38, height: 38, borderRadius: '50%', background: 'rgba(255,255,255,0.04)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 23, color: '#334155' }}>
                  +
                </div>
                <div style={{ fontSize: 16, color: '#334155' }}>Waiting for player...</div>
              </div>
            ))}
          </div>
        </Card>

        {roomPlayers.length < 2 && (
          <div style={{ fontSize: 16, color: '#475569', textAlign: 'center', marginBottom: 14 }}>
            Need at least 2 players to start
          </div>
        )}

        {/* Actions */}
        <div style={{ display: 'flex', gap: 10 }}>
          {isHost ? (
            <Button
              variant="gold"
              size="lg"
              onClick={onStart}
              disabled={!canStart}
              loading={loading}
              style={{ flex: 1 }}
            >
              {loading ? 'Starting...' : canStart ? 'Start Game!' : nonHostPlayers.length === 0 ? 'Waiting for players...' : `Waiting for ${nonHostPlayers.filter(p => !p.is_ready).length} to ready up...`}
            </Button>
          ) : (
            <Button
              variant={myPlayer?.is_ready ? 'secondary' : 'primary'}
              size="lg"
              onClick={onToggleReady}
              style={{ flex: 1 }}
            >
              {myPlayer?.is_ready ? 'Cancel Ready' : 'Ready Up!'}
            </Button>
          )}
          <Button variant="ghost" size="lg" onClick={onLeave}>
            Leave
          </Button>
        </div>

        {isHost && nonHostPlayers.length > 0 && !allReady && (
          <p style={{ fontSize: 15, color: '#475569', textAlign: 'center', marginTop: 12 }}>
            All other players must click "Ready Up!" before you can start
          </p>
        )}
      </div>
    </div>
  )
}
