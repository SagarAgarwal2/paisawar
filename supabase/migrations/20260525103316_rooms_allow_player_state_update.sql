/*
  # Allow room players to update game state

  In our multiplayer model, whichever player's turn it is pushes the new game_state.
  The host-only UPDATE policy is too restrictive — any authenticated player who is
  a member of the room needs to be able to push state updates.

  We drop the host-only policy and replace it with one that allows any player
  who is a member of the room to update it.
*/

DROP POLICY IF EXISTS "Host can update room" ON multiplayer_rooms;

CREATE POLICY "Room members can update room"
  ON multiplayer_rooms FOR UPDATE
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM room_players
      WHERE room_players.room_id = multiplayer_rooms.id
        AND room_players.player_id = auth.uid()
    )
  );
