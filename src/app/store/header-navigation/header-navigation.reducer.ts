import { createReducer, on } from '@ngrx/store';
import { HeaderNavigation } from 'src/app/models/header-navigation.model';

import * as HeaderNavigationActions from './header-navigation.actions';

export const initialState: HeaderNavigation | null = null;

export const headerNavigationReducer = createReducer<HeaderNavigation | null>(
  initialState,
  on(HeaderNavigationActions.updateHeaderNavigation, (_, { headerNavigation }) => headerNavigation),
  on(HeaderNavigationActions.enableHeaderNavigation, (state) => {
    if (state) {
      return { ...state, isbuttonEnabled: true };
    }
    return state;
  }),
  on(HeaderNavigationActions.disableHeaderNavigation, (state) => {
    if (state) {
      return { ...state, isbuttonEnabled: false };
    }
    return state;
  }),
);
