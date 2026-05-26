CREATE TABLE IF NOT EXISTS daily_contracts (
  id text PRIMARY KEY,
  title text NOT NULL,
  description text NOT NULL,
  difficulty text NOT NULL CHECK (difficulty IN ('easy', 'medium', 'hard')),
  reward_dc integer NOT NULL DEFAULT 0,
  reward_card_tier text,
  requirement_type text NOT NULL,
  requirement_value integer NOT NULL,
  contract_date date NOT NULL DEFAULT CURRENT_DATE,
  is_weekly boolean NOT NULL DEFAULT false,
  created_at timestamptz NOT NULL DEFAULT now()
);

CREATE TABLE IF NOT EXISTS player_contracts (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  player_id uuid REFERENCES auth.users ON DELETE CASCADE NOT NULL,
  contract_id text REFERENCES daily_contracts(id) ON DELETE CASCADE NOT NULL,
  progress integer NOT NULL DEFAULT 0,
  completed boolean NOT NULL DEFAULT false,
  completed_at timestamptz,
  created_at timestamptz NOT NULL DEFAULT now(),
  UNIQUE(player_id, contract_id)
);

ALTER TABLE daily_contracts ENABLE ROW LEVEL SECURITY;
ALTER TABLE player_contracts ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can read daily_contracts"
  ON daily_contracts FOR SELECT
  USING (true);

CREATE POLICY "Users can read own contracts"
  ON player_contracts FOR SELECT
  USING (auth.uid() = player_id);

CREATE POLICY "Users can insert own contracts"
  ON player_contracts FOR INSERT
  WITH CHECK (auth.uid() = player_id);

CREATE POLICY "Users can update own contracts"
  ON player_contracts FOR UPDATE
  USING (auth.uid() = player_id)
  WITH CHECK (auth.uid() = player_id);

-- Seed Initial Contracts
INSERT INTO daily_contracts (id, title, description, difficulty, reward_dc, reward_card_tier, requirement_type, requirement_value, contract_date, is_weekly)
VALUES
  ('1', 'First Win', 'Win 1 game at any level', 'easy', 15, null, 'wins', 1, CURRENT_DATE, false),
  ('2', 'Investor Mindset', 'Make 5 INVEST choices in one game', 'medium', 40, 'common', 'invest_choices', 5, CURRENT_DATE, false),
  ('3', 'Unbreakable', 'Win a game without taking EMI damage', 'hard', 100, 'rare', 'no_emi_win', 1, CURRENT_DATE, false),
  ('w1', 'Weekly Champion', 'Win 5 games this week', 'hard', 500, 'epic', 'weekly_wins', 5, CURRENT_DATE, true)
ON CONFLICT (id) DO NOTHING;
