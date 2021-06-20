import { createReducer, on } from '@ngrx/store';

import { UserProfile } from '../../models/user-profile.model';
import * as UserProfileActions from './user-profile.actions';

export const initialState: UserProfile = {
  name: '',
  avatarId: 'Memoji-01',
  musicEnabled: true,
  soundEffectsEnabled: true,
  vibrationEnabled: true
};

export const userProfileReducer = createReducer<UserProfile>(
  initialState,
  on(UserProfileActions.loadUserProfileDone, (state, { userProfile }) => ({ ...userProfile })),
  on(UserProfileActions.updateNameDone, (state, { name }) => ({ ...state, name })),
  on(UserProfileActions.updateAvatarIdDone, (state, { avatarId }) => ({ ...state, avatarId })),
  on(UserProfileActions.enableMusicDone, (state) => ({ ...state, musicEnabled: true })),
  on(UserProfileActions.disableMusicDone, (state) => ({ ...state, musicEnabled: false })),
  on(UserProfileActions.enableSoundEffectsDone, (state) => ({ ...state, soundEffectsEnabled: true })),
  on(UserProfileActions.disableSoundEffectsDone, (state) => ({ ...state, soundEffectsEnabled: false })),
  on(UserProfileActions.enableVibrationDone, (state) => ({ ...state, vibrationEnabled: true })),
  on(UserProfileActions.disableVibrationDone, (state) => ({ ...state, vibrationEnabled: false })),
);
