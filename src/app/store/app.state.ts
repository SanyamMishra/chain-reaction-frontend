import { UserProfile } from '../models/user-profile.model';
import { HeaderNavigation } from '../models/header-navigation.model';
import { Game } from '../models/game.model';

export interface AppState {
  userProfile: UserProfile;
  headerNavigation: HeaderNavigation | null;
  game: Game;
}
