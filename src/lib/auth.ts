import { supabase } from './supabase'
import type { Profile } from '../types/database'

export async function signUp(email: string, password: string, username: string): Promise<void> {
  const { data, error } = await supabase.auth.signUp({ email, password })
  if (error) throw error
  if (!data.user) throw new Error('No user returned')

  const { error: profileError } = await supabase
    .from('profiles')
    .insert({ id: data.user.id, username })

  if (profileError) throw profileError

  // Also create a leaderboard entry
  await supabase
    .from('leaderboard')
    .insert({ user_id: data.user.id, username })
}

export async function signIn(email: string, password: string): Promise<void> {
  const { error } = await supabase.auth.signInWithPassword({ email, password })
  if (error) throw error
}

export async function signOut(): Promise<void> {
  const { error } = await supabase.auth.signOut()
  if (error) throw error
}

export async function getProfile(userId: string): Promise<Profile | null> {
  const { data } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', userId)
    .maybeSingle()
  return data
}

export async function updateProfile(userId: string, updates: Partial<Profile>): Promise<void> {
  const { error } = await supabase
    .from('profiles')
    .update({ ...updates, updated_at: new Date().toISOString() })
    .eq('id', userId)
  if (error) throw error
}

export async function saveGameResult(userId: string, username: string, won: boolean, finalWealth: number): Promise<void> {
  // Upsert leaderboard entry
  const { data: existing } = await supabase
    .from('leaderboard')
    .select('id, wins, losses, total_games, highest_net_worth')
    .eq('user_id', userId)
    .maybeSingle()

  if (existing) {
    await supabase
      .from('leaderboard')
      .update({
        wins: existing.wins + (won ? 1 : 0),
        losses: existing.losses + (won ? 0 : 1),
        total_games: existing.total_games + 1,
        highest_net_worth: Math.max(existing.highest_net_worth, finalWealth),
        updated_at: new Date().toISOString(),
      })
      .eq('user_id', userId)
  } else {
    await supabase
      .from('leaderboard')
      .insert({
        user_id: userId,
        username,
        wins: won ? 1 : 0,
        losses: won ? 0 : 1,
        total_games: 1,
        highest_net_worth: finalWealth,
      })
  }

  // Update profile stats
  const { data: profile } = await supabase
    .from('profiles')
    .select('games_played, games_won, win_streak, max_win_streak, rank_points, total_xp')
    .eq('id', userId)
    .maybeSingle()

  if (profile) {
    const newStreak = won ? profile.win_streak + 1 : 0
    const rpGain = won ? 30 : -15
    await supabase
      .from('profiles')
      .update({
        games_played: profile.games_played + 1,
        games_won: profile.games_won + (won ? 1 : 0),
        win_streak: newStreak,
        max_win_streak: Math.max(profile.max_win_streak, newStreak),
        rank_points: Math.max(0, profile.rank_points + rpGain),
        total_xp: profile.total_xp + (won ? 100 : 25),
        updated_at: new Date().toISOString(),
      })
      .eq('id', userId)
  }
}
