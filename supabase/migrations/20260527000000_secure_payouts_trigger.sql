/*
  # Secure Payouts Trigger

  When a multiplayer room finishes (status changes to 'completed'), 
  we automatically calculate and distribute XP and DAANIK coins to the players.
  This prevents clients from spoofing the API to give themselves infinite wealth.
*/

CREATE OR REPLACE FUNCTION handle_room_completion()
RETURNS TRIGGER AS $$
DECLARE
  player_record RECORD;
  is_winner BOOLEAN;
  xp_gained INTEGER;
  coins_gained INTEGER;
  game_state JSONB;
BEGIN
  -- Only trigger when a room is newly completed
  IF NEW.status = 'completed' AND OLD.status != 'completed' THEN
    game_state := NEW.game_state;
    
    FOR player_record IN SELECT player_id FROM room_players WHERE room_id = NEW.id LOOP
      is_winner := (NEW.winner_id = player_record.player_id);
      
      -- Basic XP scaling
      IF is_winner THEN
        xp_gained := 150;
        coins_gained := 20;
      ELSE
        xp_gained := 50;
        coins_gained := 5;
      END IF;

      -- Update the profile securely
      UPDATE profiles
      SET 
        total_xp = total_xp + xp_gained,
        daanik_coins = daanik_coins + coins_gained,
        games_played = games_played + 1,
        games_won = games_won + (CASE WHEN is_winner THEN 1 ELSE 0 END),
        win_streak = (CASE WHEN is_winner THEN win_streak + 1 ELSE 0 END),
        max_win_streak = GREATEST(max_win_streak, CASE WHEN is_winner THEN win_streak + 1 ELSE 0 END)
      WHERE id = player_record.player_id;

      -- Also update the leaderboard view entry
      UPDATE leaderboard
      SET 
        total_games = total_games + 1,
        wins = wins + (CASE WHEN is_winner THEN 1 ELSE 0 END),
        losses = losses + (CASE WHEN NOT is_winner THEN 1 ELSE 0 END)
      WHERE user_id = player_record.player_id;

    END LOOP;
  END IF;

  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

DROP TRIGGER IF EXISTS on_room_completed ON multiplayer_rooms;

CREATE TRIGGER on_room_completed
  AFTER UPDATE OF status ON multiplayer_rooms
  FOR EACH ROW
  EXECUTE FUNCTION handle_room_completion();
