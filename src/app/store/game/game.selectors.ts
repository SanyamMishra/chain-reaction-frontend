import { createSelector } from "@ngrx/store";
import { AppState } from "../app.state";

export const selectPlayerColor = createSelector(
  (state: AppState) => state.game,
  state => state.playerColor
);

export const selectRoomCode = createSelector(
  (state: AppState) => state.game,
  state => state.roomCode
);