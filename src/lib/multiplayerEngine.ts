import { supabase } from './supabase'
import type { GameState, PlayerState } from '../types/game'
import { createGameDeck } from '../data/cards'

const STARTING_WEALTH = 500000
const WEALTH_GOAL = 5000000      // ₹50 Lakhs — matches single-player
const TIME_LIMIT_MS = 25 * 60 * 1000

function generateRoomCode(): string {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789'
  let code = ''
  for (let i = 0; i < 6; i++) code += chars[Math.floor(Math.random() * chars.length)]
  return code
}

export interface RoomPlayer {
  id: string
  room_id: string
  player_id: string
  username: string
  seat_order: number
  is_ready: boolean
  joined_at: string
}

export interface Room {
  id: string
  code: string
  host_id: string
  host_username: string
  status: 'waiting' | 'in_progress' | 'completed'
  max_players: number
  game_state: GameState | null
  current_player_id: string | null
  winner_id: string | null
  created_at: string
  updated_at: string
}

export async function createRoom(hostId: string, hostUsername: string, maxPlayers: number): Promise<Room> {
  let code = generateRoomCode()
  let tries = 0
  while (tries < 10) {
    const { data } = await supabase.from('multiplayer_rooms').select('id').eq('code', code).maybeSingle()
    if (!data) break
    code = generateRoomCode()
    tries++
  }

  const { data, error } = await supabase
    .from('multiplayer_rooms')
    .insert({ host_id: hostId, host_username: hostUsername, code, max_players: maxPlayers, status: 'waiting' })
    .select()
    .single()
  if (error) throw error

  const { error: playerError } = await supabase.from('room_players').insert({
    room_id: data.id, player_id: hostId, username: hostUsername, seat_order: 0, is_ready: false,
  })
  if (playerError) throw playerError

  return data
}

export async function joinRoom(code: string, playerId: string, username: string): Promise<Room> {
  const { data: room, error } = await supabase
    .from('multiplayer_rooms')
    .select('*')
    .eq('code', code.toUpperCase())
    .maybeSingle()

  if (error) throw error
  if (!room) throw new Error('Room not found. Check the code and try again.')
  if (room.status !== 'waiting') throw new Error('This game has already started.')

  const { data: existingPlayers } = await supabase
    .from('room_players')
    .select('*')
    .eq('room_id', room.id)

  const players = existingPlayers ?? []
  if (players.length >= room.max_players) throw new Error('Room is full.')

  const alreadyIn = players.find((p: RoomPlayer) => p.player_id === playerId)
  if (!alreadyIn) {
    const { error: insertError } = await supabase.from('room_players').insert({
      room_id: room.id, player_id: playerId, username, seat_order: players.length, is_ready: false,
    })
    if (insertError) throw insertError
  }

  return room
}

export async function setReady(roomId: string, playerId: string, ready: boolean): Promise<void> {
  const { error } = await supabase
    .from('room_players')
    .update({ is_ready: ready })
    .eq('room_id', roomId)
    .eq('player_id', playerId)
  if (error) throw error
}

export async function leaveRoom(roomId: string, playerId: string): Promise<void> {
  await supabase
    .from('room_players')
    .delete()
    .eq('room_id', roomId)
    .eq('player_id', playerId)
}

export async function getRoomPlayers(roomId: string): Promise<RoomPlayer[]> {
  const { data } = await supabase
    .from('room_players')
    .select('*')
    .eq('room_id', roomId)
    .order('seat_order', { ascending: true })
  return data ?? []
}

export async function getRoom(roomId: string): Promise<Room | null> {
  const { data } = await supabase
    .from('multiplayer_rooms')
    .select('*')
    .eq('id', roomId)
    .maybeSingle()
  return data
}

export function buildInitialGameState(players: RoomPlayer[]): GameState {
  const deck = createGameDeck()
  const sorted = [...players].sort((a, b) => a.seat_order - b.seat_order)

  const playerStates: PlayerState[] = sorted.map(p => ({
    id: p.player_id,
    name: p.username,
    isBot: false,
    wealth: STARTING_WEALTH,
    hand: [],
    skippedTurns: 0,
    pendingGains: [],
    wealthFloor: 0,
    doubleInvestActive: false,
  }))

  const remaining = [...deck]
  for (let i = 0; i < 3; i++) {
    for (let p = 0; p < playerStates.length; p++) {
      const card = remaining.shift()
      if (card) playerStates[p].hand.push(card)
    }
  }

  return {
    id: crypto.randomUUID(),
    players: playerStates,
    deck: remaining,
    discardPile: [],
    currentPlayerIndex: 0,
    turn: 1,
    phase: 'draw',
    drawnCard: null,
    playedCard: null,
    pendingDecision: null,
    pendingTarget: null,
    winner: null,
    log: ['Game started! First to ₹50 Lakhs wins.'],
    wealthGoal: WEALTH_GOAL,
    timeLimit: TIME_LIMIT_MS,
    startTime: Date.now(),
    turnStartTime: Date.now(),
  }
}

export async function startGame(roomId: string, players: RoomPlayer[]): Promise<void> {
  const gameState = buildInitialGameState(players)
  const currentPlayerId = players.find(p => p.seat_order === 0)?.player_id ?? null

  const { error } = await supabase
    .from('multiplayer_rooms')
    .update({
      status: 'in_progress',
      game_state: gameState,
      current_player_id: currentPlayerId,
      updated_at: new Date().toISOString(),
    })
    .eq('id', roomId)

  if (error) throw error
}

export async function pushGameState(roomId: string, gameState: GameState): Promise<void> {
  const currentPlayer = gameState.players[gameState.currentPlayerIndex]
  const { error } = await supabase
    .from('multiplayer_rooms')
    .update({
      game_state: gameState,
      current_player_id: currentPlayer.id,
      winner_id: gameState.winner?.id ?? null,
      status: gameState.phase === 'game_over' ? 'completed' : 'in_progress',
      updated_at: new Date().toISOString(),
    })
    .eq('id', roomId)

  if (error) throw error
}

// Single unified subscription. Uses a named broadcast channel on the room so that
// postgres_changes for room_players (which can't reliably filter by room_id on
// non-PK columns) are supplemented by broadcast events the clients emit themselves.
export function subscribeToRoom(
  roomId: string,
  onRoomUpdate: (room: Room) => void,
  onPlayersUpdate: (players: RoomPlayer[]) => void,
) {
  const channelName = `room-${roomId}`

  const channel = supabase
    .channel(channelName, { config: { broadcast: { self: true } } })
    // Listen for room row updates (game_state, status)
    .on(
      'postgres_changes',
      { event: 'UPDATE', schema: 'public', table: 'multiplayer_rooms', filter: `id=eq.${roomId}` },
      (payload) => {
        onRoomUpdate(payload.new as Room)
      },
    )
    // Broadcast events: when a player joins/leaves/readies, they broadcast to the channel
    // so everyone gets a fresh player list fetch
    .on('broadcast', { event: 'players_changed' }, () => {
      getRoomPlayers(roomId).then(onPlayersUpdate)
    })
    .subscribe((status) => {
      // Once subscribed, fetch current state immediately
      if (status === 'SUBSCRIBED') {
        getRoomPlayers(roomId).then(onPlayersUpdate)
        getRoom(roomId).then(room => { if (room) onRoomUpdate(room) })
      }
    })

  return channel
}

// Call this after any room_players mutation so all subscribers get a fresh list
export async function broadcastPlayersChanged(roomId: string): Promise<void> {
  await supabase
    .channel(`room-${roomId}`, { config: { broadcast: { self: true } } })
    .send({ type: 'broadcast', event: 'players_changed', payload: {} })
}
