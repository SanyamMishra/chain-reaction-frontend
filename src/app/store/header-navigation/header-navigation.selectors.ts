import { createSelector } from "@ngrx/store";
import { AppState } from "../app.state";

export const selectHeaderNavigation = createSelector(
  (state: AppState) => state.headerNavigation,
  state => state
);
