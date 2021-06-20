import { createReducer, on } from '@ngrx/store';
import { ViewState } from 'src/app/models/view-state.model';

import * as ViewActions from './view-state.actions';

export const initialState: ViewState = {
  isAvatarSelectionScreenVisible: false,
  isAppLoaderScreenVisible: true,
  isUserProfileSettingsScreenVisible: false
};

export const viewStateReducer = createReducer<ViewState>(
  initialState,
  on(ViewActions.showAvatarSelectionScreen, (state) => ({ ...state, isAvatarSelectionScreenVisible: true })),
  on(ViewActions.hideAvatarSelectionScreen, (state) => ({ ...state, isAvatarSelectionScreenVisible: false })),
  on(ViewActions.showAppLoaderScreen, (state) => ({ ...state, isAppLoaderScreenVisible: true })),
  on(ViewActions.hideAppLoaderScreen, (state) => ({ ...state, isAppLoaderScreenVisible: false })),
  on(ViewActions.showUserProfileSettingsScreen, (state) => ({ ...state, isUserProfileSettingsScreenVisible: true })),
  on(ViewActions.hideUserProfileSettingsScreen, (state) => ({ ...state, isUserProfileSettingsScreenVisible: false }))
);
