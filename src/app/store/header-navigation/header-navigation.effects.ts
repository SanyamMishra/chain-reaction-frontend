import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { exhaustMap, map, take, tap } from 'rxjs/operators';
import { AppState } from "../app.state";
import * as HeaderNavigationActions from "./header-navigation.actions";
import { selectHeaderNavigation } from "./header-navigation.selectors";

@Injectable()
export class HeaderNavigationEffects {
  goBack$ = createEffect(() => this.actions$.pipe(
    ofType(HeaderNavigationActions.navigateHeader),
    exhaustMap(() => this.store.select(selectHeaderNavigation)
      .pipe(
        take(1),
        tap((headerNavigation) => {
          headerNavigation?.callback();
        }),
        map(() => HeaderNavigationActions.updateHeaderNavigation({ headerNavigation: null }))
      )
    )
  ));

  constructor(
    private actions$: Actions,
    private store: Store<AppState>
  ) { }
}
