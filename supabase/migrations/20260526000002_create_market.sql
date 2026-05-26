CREATE TABLE IF NOT EXISTS user_stocks (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id uuid REFERENCES auth.users ON DELETE CASCADE NOT NULL,
  ticker text NOT NULL,
  shares integer DEFAULT 0 NOT NULL,
  avg_buy_price numeric DEFAULT 0 NOT NULL,
  created_at timestamptz DEFAULT now() NOT NULL,
  updated_at timestamptz DEFAULT now() NOT NULL,
  UNIQUE(user_id, ticker)
);

ALTER TABLE user_stocks ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can read own stocks"
  ON user_stocks FOR SELECT
  USING (auth.uid() = user_id);

-- We will use a database function to handle transactions safely

CREATE OR REPLACE FUNCTION buy_stock(p_ticker text, p_shares integer, p_total_cost integer)
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
  v_user_id uuid;
  v_current_coins integer;
  v_current_shares integer;
  v_avg_price numeric;
BEGIN
  v_user_id := auth.uid();
  IF v_user_id IS NULL THEN
    RAISE EXCEPTION 'Not authenticated';
  END IF;

  IF p_shares <= 0 THEN
    RAISE EXCEPTION 'Shares must be positive';
  END IF;

  -- Check if user has enough coins
  SELECT daanik_coins INTO v_current_coins FROM profiles WHERE id = v_user_id;
  IF v_current_coins < p_total_cost THEN
    RAISE EXCEPTION 'Not enough DAANIK coins';
  END IF;

  -- Deduct coins
  UPDATE profiles SET daanik_coins = daanik_coins - p_total_cost WHERE id = v_user_id;

  -- Upsert stock holding
  INSERT INTO user_stocks (user_id, ticker, shares, avg_buy_price)
  VALUES (v_user_id, p_ticker, p_shares, p_total_cost::numeric / p_shares)
  ON CONFLICT (user_id, ticker) DO UPDATE
  SET 
    avg_buy_price = ((user_stocks.shares * user_stocks.avg_buy_price) + p_total_cost) / (user_stocks.shares + p_shares),
    shares = user_stocks.shares + p_shares,
    updated_at = now();
END;
$$;


CREATE OR REPLACE FUNCTION sell_stock(p_ticker text, p_shares integer, p_total_revenue integer)
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
  v_user_id uuid;
  v_current_shares integer;
BEGIN
  v_user_id := auth.uid();
  IF v_user_id IS NULL THEN
    RAISE EXCEPTION 'Not authenticated';
  END IF;

  IF p_shares <= 0 THEN
    RAISE EXCEPTION 'Shares must be positive';
  END IF;

  -- Check if user has enough shares
  SELECT shares INTO v_current_shares FROM user_stocks WHERE user_id = v_user_id AND ticker = p_ticker;
  IF v_current_shares IS NULL OR v_current_shares < p_shares THEN
    RAISE EXCEPTION 'Not enough shares';
  END IF;

  -- Add coins
  UPDATE profiles SET daanik_coins = daanik_coins + p_total_revenue WHERE id = v_user_id;

  -- Deduct shares
  IF v_current_shares = p_shares THEN
    DELETE FROM user_stocks WHERE user_id = v_user_id AND ticker = p_ticker;
  ELSE
    UPDATE user_stocks SET shares = shares - p_shares, updated_at = now() WHERE user_id = v_user_id AND ticker = p_ticker;
  END IF;
END;
$$;
