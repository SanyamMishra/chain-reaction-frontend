export enum HeaderNavigationButtonType {
  NAVIGATE_BACKWARD,
  NAVIGATE_FORWARD,
  OPEN_PROFILE_SETTINGS
}

export interface HeaderNavigation {
  callback: () => void;
  headerButtonType: HeaderNavigationButtonType;
  isbuttonEnabled: boolean;
}
