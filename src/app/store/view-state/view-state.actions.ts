import { Action, createAction, props } from '@ngrx/store';
import { TypedAction } from '@ngrx/store/src/models';

export const showAvatarSelectionScreen = createAction('[View] Show Avatar Selection Screen');
export const hideAvatarSelectionScreen = createAction('[View] Hide Avatar Selection Screen');

export const showAppLoaderScreen = createAction('[View] Show App Loader Screen');
export const hideAppLoaderScreen = createAction('[View] Hide App Loader Screen');

export const showUserProfileSettingsScreen = createAction('[View] Show User Profile Settings Screen');
export const hideUserProfileSettingsScreen = createAction('[View] Hide User Profile Settings Screen');

export const addBackButtonAction = createAction(
  '[View] Add Back Button Action',
  props<{ action: () => TypedAction<string> }>()
);
export const goBack = createAction('[View] Go Back');
export const goBackDone = createAction('[View] Go Back Done');
