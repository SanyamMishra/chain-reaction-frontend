import { Action } from "@ngrx/store";
import { TypedAction } from "@ngrx/store/src/models";

export interface ViewState {
  isAvatarSelectionScreenVisible: boolean;
  isAppLoaderScreenVisible: boolean;
  isUserProfileSettingsScreenVisible: boolean;
  backButtonAction: (() => TypedAction<string>) | null;
}
