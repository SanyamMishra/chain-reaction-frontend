export enum HeaderNavigationButtonType {
  NAVIGATE_BACKWARD,
  NAVIGATE_FORWARD
}

export interface HeaderNavigation {
  callback: () => void;
  headerButtonType: HeaderNavigationButtonType;
  isbuttonEnabled: boolean;
}
