import { Action } from "@ngrx/store";

export interface ViewState {
  isAvatarSelectionScreenVisible: boolean;
  isAppLoaderScreenVisible: boolean;
  isUserProfileSettingsScreenVisible: boolean;
  backButtonMetaData: Action | null;
}
