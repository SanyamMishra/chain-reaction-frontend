import { createAction, props } from '@ngrx/store';
import { UserProfile } from 'src/app/models/user-profile.model';

export const loadUserProfile = createAction('[User Profile] Load User Profile');
export const loadUserProfileDone = createAction(
  '[User Profile] Load User Profile Done',
  props<{ userProfile: UserProfile }>()
);

export const updateName = createAction(
  '[User Profile] Update Name',
  props<{ name: string }>()
);
export const updateNameDone = createAction(
  '[User Profile] Update Name Done',
  props<{ name: string }>()
);

export const updateAvatarId = createAction(
  '[User Profile] Update Avatar',
  props<{ avatarId: string }>()
);
export const updateAvatarIdDone = createAction(
  '[User Profile] Update Avatar Done',
  props<{ avatarId: string }>()
);

export const enableMusic = createAction('[User Profile] Enable Music');
export const enableMusicDone = createAction('[User Profile] Enable Music Done');

export const disableMusic = createAction('[User Profile] Disable Music');
export const disableMusicDone = createAction('[User Profile] Disable Music Done');

export const enableSoundEffects = createAction('[User Profile] Enable Sound Effects');
export const enableSoundEffectsDone = createAction('[User Profile] Enable Sound Effects Done');

export const disableSoundEffects = createAction('[User Profile] Disable Sound Effects');
export const disableSoundEffectsDone = createAction('[User Profile] Disable Sound Effects Done');

export const enableVibration = createAction('[User Profile] Enable Vibration');
export const enableVibrationDone = createAction('[User Profile] Enable Vibration Done');

export const disableVibration = createAction('[User Profile] Disable Vibration');
export const disableVibrationDone = createAction('[User Profile] Disable Vibration Done');
