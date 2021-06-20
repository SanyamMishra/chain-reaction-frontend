import { createAction, props } from '@ngrx/store';

export const showAvatarSelectionScreen = createAction('[View] Show Avatar Selection Screen');
export const hideAvatarSelectionScreen = createAction('[View] Hide Avatar Selection Screen');

export const showAppLoaderScreen = createAction('[View] Show App Loader Screen');
export const hideAppLoaderScreen = createAction('[View] Hide App Loader Screen');

export const showUserProfileSettingsScreen = createAction('[View] Show User Profile Settings Screen');
export const hideUserProfileSettingsScreen = createAction('[View] Hide User Profile Settings Screen');