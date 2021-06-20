import { UserProfile } from '../models/user-profile.model';
import { ViewState } from '../models/view-state.model';

export interface AppState {
  userProfile: UserProfile;
  viewState: ViewState;
}
