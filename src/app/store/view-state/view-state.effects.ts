import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { of } from "rxjs";
import { exhaustMap } from 'rxjs/operators';
import { AppState } from "../app.state";
import * as ViewStateActions from './view-state.actions';
import { selectBackButtonAction } from "./view-state.selectors";

@Injectable()
export class ViewStateEffects {
  goBack$ = createEffect(() => this.actions$.pipe(
    ofType(ViewStateActions.goBack),
    exhaustMap(() => this.store.select(selectBackButtonAction)),
    exhaustMap(action => {
      this.store.dispatch(action!());
      return of(ViewStateActions.goBackDone());
    }),
  ));

  constructor(
    private actions$: Actions,
    private store: Store<AppState>
  ) { }
}
