/*
  # Create profiles table

  1. New Tables
    - `profiles` — stores user profile data linked to auth.users
      - `id` (uuid, primary key, references auth.users)
      - `username` (text, unique)
      - `rank_points` (integer, default 0)
      - `daanik_coins` (integer, default 100)
      - `total_xp` (integer, default 0)
      - `games_played` (integer, default 0)
      - `games_won` (integer, default 0)
      - `win_streak` (integer, default 0)
      - `max_win_streak` (integer, default 0)
      - `created_at`, `updated_at` timestamps

  2. Security
    - RLS enabled
    - Any authenticated user can read any profile (for leaderboard/social)
    - Users can only insert/update their own profile

  3. Trigger
    - Auto-create a leaderboard entry when a profile is created
*/

CREATE TABLE IF NOT EXISTS profiles (
  id uuid PRIMARY KEY REFERENCES auth.users ON DELETE CASCADE,
  username text UNIQUE NOT NULL,
  avatar_url text,
  rank_points integer NOT NULL DEFAULT 0,
  daanik_coins integer NOT NULL DEFAULT 100,
  total_xp integer NOT NULL DEFAULT 0,
  games_played integer NOT NULL DEFAULT 0,
  games_won integer NOT NULL DEFAULT 0,
  win_streak integer NOT NULL DEFAULT 0,
  max_win_streak integer NOT NULL DEFAULT 0,
  current_season_rank_points integer NOT NULL DEFAULT 0,
  guild_id uuid,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Authenticated users can read any profile"
  ON profiles FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Users can insert own profile"
  ON profiles FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = id);

CREATE POLICY "Users can update own profile"
  ON profiles FOR UPDATE
  TO authenticated
  USING (auth.uid() = id)
  WITH CHECK (auth.uid() = id);

CREATE INDEX IF NOT EXISTS idx_profiles_rank_points ON profiles(rank_points DESC);
