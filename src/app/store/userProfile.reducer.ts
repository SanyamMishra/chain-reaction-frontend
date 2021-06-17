import { Action, createReducer, on } from '@ngrx/store';

import { UserProfile } from '../models/user-profile.model';
import * as UserProfileActions from './userProfile.actions';

const initialState: UserProfile = {
  name: '',
  avatarId: '',
  musicEnabled: true,
  soundEffectsEnabled: true,
  vibrationEnabled: true
};

const _userProfileReducer = createReducer(
  initialState,
  on(UserProfileActions.updateName, (state, { name }) => ({ ...state, name })),
  on(UserProfileActions.updateAvatar, (state, { avatarId }) => ({ ...state, avatarId })),
  on(UserProfileActions.enableMusic, (state) => ({ ...state, musicEnabled: true })),
  on(UserProfileActions.disableMusic, (state) => ({ ...state, musicEnabled: false })),
  on(UserProfileActions.enableSoundEffects, (state) => ({ ...state, soundEffectsEnabled: true })),
  on(UserProfileActions.disableSoundEffects, (state) => ({ ...state, soundEffectsEnabled: false })),
  on(UserProfileActions.enableVibration, (state) => ({ ...state, vibrationEnabled: true })),
  on(UserProfileActions.disableVibration, (state) => ({ ...state, vibrationEnabled: false })),
);

export function userProfileReducer(state, action) {
  return _userProfileReducer(state, action);
}
