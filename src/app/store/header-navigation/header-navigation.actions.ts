import { createAction, props } from '@ngrx/store';
import { HeaderNavigation } from 'src/app/models/header-navigation.model';

export const updateHeaderNavigation = createAction(
  '[Header Navigation] Update Header Navigation',
  props<{ headerNavigation: HeaderNavigation | null }>()
);

export const navigateHeader = createAction('[Header Navigation] Navigate Header');
export const enableHeaderNavigation = createAction('[Header Navigation] Enable Header Navigation');
export const disableHeaderNavigation = createAction('[Header Navigation] Disable Header Navigation');
