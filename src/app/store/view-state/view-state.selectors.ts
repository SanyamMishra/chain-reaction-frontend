import { createSelector } from "@ngrx/store";
import { AppState } from "../app.state";

export const selectIsAvatarSelectionScreenVisible = createSelector(
  (state: AppState) => state.viewState,
  state => state.isAvatarSelectionScreenVisible
);

export const selectIsAppLoaderScreenVisible = createSelector(
  (state: AppState) => state.viewState,
  state => state.isAppLoaderScreenVisible
);

export const selectIsUserProfileSettingsScreenVisible = createSelector(
  (state: AppState) => state.viewState,
  state => state.isUserProfileSettingsScreenVisible
);
