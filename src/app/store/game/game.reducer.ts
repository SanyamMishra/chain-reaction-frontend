import { createReducer, on } from '@ngrx/store';

import { Game, PlayerColor } from '../../models/game.model';
import * as GameActions from './game.actions';

export const initialState: Game = {
  playerColor: PlayerColor.BLACK,
  roomCode: null
};

export const gameReducer = createReducer<Game>(
  initialState,
  on(GameActions.setPlayerColor, (state, { playerColor }) => ({ ...state, playerColor })),
  on(GameActions.resetPlayerColor, (state) => ({ ...state, playerColor: initialState.playerColor })),
  on(GameActions.setRoomCode, (state, { roomCode }) => ({ ...state, roomCode })),
  on(GameActions.resetRoomCode, (state) => ({ ...state, roomCode: null })),
);
