/*
  # Multiplayer Rooms

  1. New Tables
    - `multiplayer_rooms` — Lobby rooms players create and join
      - `id` (uuid, primary key)
      - `code` (text, unique 6-char room code)
      - `host_id` (uuid, references profiles)
      - `host_username` (text)
      - `status` (text): 'waiting' | 'in_progress' | 'completed'
      - `max_players` (int, default 4)
      - `game_state` (jsonb) — full serialized GameState, updated on every action
      - `current_player_id` (uuid) — whose turn it is
      - `winner_id` (uuid, nullable)
      - `created_at`, `updated_at`

    - `room_players` — Players in each room
      - `id` (uuid, primary key)
      - `room_id` (uuid, references multiplayer_rooms)
      - `player_id` (uuid, references profiles)
      - `username` (text)
      - `seat_order` (int) — turn order
      - `is_ready` (bool)
      - `joined_at`

  2. Security
    - RLS enabled on both tables
    - Any authenticated user can read rooms (to join by code)
    - Only host can update room game_state
    - Players can update their own ready status

  3. Notes
    - game_state is the full serialized GameState JSON — host writes it, all players read it
    - Supabase Realtime on game_state column drives all clients
*/

CREATE TABLE IF NOT EXISTS multiplayer_rooms (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  code text UNIQUE NOT NULL,
  host_id uuid NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
  host_username text NOT NULL DEFAULT '',
  status text NOT NULL DEFAULT 'waiting',
  max_players integer NOT NULL DEFAULT 4,
  game_state jsonb,
  current_player_id uuid,
  winner_id uuid,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE multiplayer_rooms ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Authenticated users can read rooms"
  ON multiplayer_rooms FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Host can insert room"
  ON multiplayer_rooms FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = host_id);

CREATE POLICY "Host can update room"
  ON multiplayer_rooms FOR UPDATE
  TO authenticated
  USING (auth.uid() = host_id);

-- Room players
CREATE TABLE IF NOT EXISTS room_players (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  room_id uuid NOT NULL REFERENCES multiplayer_rooms(id) ON DELETE CASCADE,
  player_id uuid NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
  username text NOT NULL DEFAULT '',
  seat_order integer NOT NULL DEFAULT 0,
  is_ready boolean NOT NULL DEFAULT false,
  joined_at timestamptz NOT NULL DEFAULT now(),
  UNIQUE(room_id, player_id)
);

ALTER TABLE room_players ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Authenticated users can read room players"
  ON room_players FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Players can insert own seat"
  ON room_players FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = player_id);

CREATE POLICY "Players can update own seat"
  ON room_players FOR UPDATE
  TO authenticated
  USING (auth.uid() = player_id)
  WITH CHECK (auth.uid() = player_id);

CREATE POLICY "Players can delete own seat"
  ON room_players FOR DELETE
  TO authenticated
  USING (auth.uid() = player_id);

CREATE INDEX IF NOT EXISTS idx_rooms_code ON multiplayer_rooms(code);
CREATE INDEX IF NOT EXISTS idx_room_players_room ON room_players(room_id);
