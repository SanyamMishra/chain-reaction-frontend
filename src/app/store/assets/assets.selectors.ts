import { createSelector } from "@ngrx/store";
import { AppState } from "../app.state";

export const selectName = createSelector(
  (state: AppState) => state.userProfile,
  state => state.name
);

export const selectAvatarId = createSelector(
  (state: AppState) => state.userProfile,
  state => state.avatarId
);

export const selectMusicEnabled = createSelector(
  (state: AppState) => state.userProfile,
  state => state.musicEnabled
);

export const selectSoundEffectsEnabled = createSelector(
  (state: AppState) => state.userProfile,
  state => state.soundEffectsEnabled
);

export const selectVibrationEnabled = createSelector(
  (state: AppState) => state.userProfile,
  state => state.vibrationEnabled
);

export const selectUserProfile = createSelector(
  (state: AppState) => state.userProfile,
  state => state
);
