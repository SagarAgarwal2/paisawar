import { supabase } from './supabase'
import type { Profile } from '../types/database'
import { calculateRPChange } from './gameEngine'

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

export interface GameStats {
  investChoices: number;
  emiDamageTaken: boolean;
}

export async function saveGameResult(
  userId: string,
  username: string,
  won: boolean,
  finalWealth: number,
  placement: number = 1,
  totalPlayers: number = 2,
  winStreak: number = 0,
  stats: GameStats = { investChoices: 0, emiDamageTaken: false }
): Promise<void> {
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
  let awardedDc = 0;
  const { data: profile } = await supabase
    .from('profiles')
    .select('games_played, games_won, win_streak, max_win_streak, rank_points, total_xp, daanik_coins')
    .eq('id', userId)
    .maybeSingle()

  if (profile) {
    const newStreak = won ? profile.win_streak + 1 : 0
    // Use the proper placement-based RP formula
    const rpGain = calculateRPChange(placement, totalPlayers, winStreak)
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

    // Process Contracts
    try {
      const { data: activeContracts } = await supabase
        .from('daily_contracts')
        .select('*')
        .gte('contract_date', new Date().toISOString().split('T')[0])

      if (activeContracts && activeContracts.length > 0) {
        for (const contract of activeContracts) {
          // Calculate progress increment for this game
          let increment = 0;
          if (contract.requirement_type === 'wins' && won) increment = 1;
          if (contract.requirement_type === 'weekly_wins' && won) increment = 1;
          if (contract.requirement_type === 'invest_choices') increment = stats.investChoices;
          if (contract.requirement_type === 'no_emi_win' && won && !stats.emiDamageTaken) increment = 1;

          if (increment > 0) {
            // Check existing progress
            const { data: pContract } = await supabase
              .from('player_contracts')
              .select('*')
              .eq('player_id', userId)
              .eq('contract_id', contract.id)
              .maybeSingle();

            const currentProgress = pContract ? pContract.progress : 0;
            const newProgress = currentProgress + increment;
            const isNewlyCompleted = !pContract?.completed && newProgress >= contract.requirement_value;

            // Upsert progress
            await supabase.from('player_contracts').upsert({
              player_id: userId,
              contract_id: contract.id,
              progress: newProgress,
              completed: isNewlyCompleted || (pContract?.completed ?? false),
              completed_at: isNewlyCompleted ? new Date().toISOString() : pContract?.completed_at,
            });

            if (isNewlyCompleted) {
              awardedDc += contract.reward_dc;
            }
          }
        }

        // Award DC if any contracts were completed
        if (awardedDc > 0) {
          await supabase
            .from('profiles')
            .update({ daanik_coins: (profile.daanik_coins || 0) + awardedDc })
            .eq('id', userId);
        }
      }
    } catch (e) {
      console.error('Failed to process contracts', e);
    }
  }
}
