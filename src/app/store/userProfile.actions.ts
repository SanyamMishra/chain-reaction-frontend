import { createAction, props } from '@ngrx/store';

export const updateName = createAction(
  '[User Profile] Update Name',
  props<{ name: string }>()
);

export const updateAvatar = createAction(
  '[User Profile] Update Avatar',
  props<{ avatarId: string }>()
);

export const enableMusic = createAction('[User Profile] Enable Music');
export const disableMusic = createAction('[User Profile] Disable Music');

export const enableSoundEffects = createAction('[User Profile] Enable Sound Effects');
export const disableSoundEffects = createAction('[User Profile] Disable Sound Effects');

export const enableVibration = createAction('[User Profile] Enable Vibration');
export const disableVibration = createAction('[User Profile] Disable Vibration');
