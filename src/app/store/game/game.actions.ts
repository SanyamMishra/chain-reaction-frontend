import { createAction, props } from '@ngrx/store';
import { PlayerColor, RoomCode } from 'src/app/models/game.model';

export const setPlayerColor = createAction(
  '[Game] Set Player Color',
  props<{ playerColor: PlayerColor }>()
);
export const resetPlayerColor = createAction('[Game] Reset Player Color');

export const setRoomCode = createAction(
  '[Game] Set Room Code',
  props<{ roomCode: RoomCode }>()
);
export const resetRoomCode = createAction('[Game] Reset Room Code');