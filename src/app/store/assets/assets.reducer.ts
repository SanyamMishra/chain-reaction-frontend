import { createReducer, on } from '@ngrx/store';

import { Assets } from 'src/app/models/assets.model';
import * as AssetsActions from 'src/app/store/assets/assets.actions';

export const initialState: Assets = {
  images: []
};

export const userProfileReducer = createReducer<UserProfile>(
  initialState,
  on(AssetsActions.loadAssetDone, (state, { userProfile }) => ({ ...userProfile })),
  on(UserProfileActions.updateNameDone, (state, { name }) => ({ ...state, name })),
  on(UserProfileActions.updateAvatarIdDone, (state, { avatarId }) => ({ ...state, avatarId })),
  on(UserProfileActions.enableMusicDone, (state) => ({ ...state, musicEnabled: true })),
  on(UserProfileActions.disableMusicDone, (state) => ({ ...state, musicEnabled: false })),
  on(UserProfileActions.enableSoundEffectsDone, (state) => ({ ...state, soundEffectsEnabled: true })),
  on(UserProfileActions.disableSoundEffectsDone, (state) => ({ ...state, soundEffectsEnabled: false })),
  on(UserProfileActions.enableVibrationDone, (state) => ({ ...state, vibrationEnabled: true })),
  on(UserProfileActions.disableVibrationDone, (state) => ({ ...state, vibrationEnabled: false })),
);
