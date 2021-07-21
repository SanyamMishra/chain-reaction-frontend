import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Action } from "@ngrx/store";
import { Observable, of } from "rxjs";
import { exhaustMap, tap } from 'rxjs/operators';
import * as AssetsActions from "src/app/store/assets/assets.actions";

@Injectable()
export class UserProfileEffects {
  updateName$ = createEffect(() => this.actions$.pipe(
    ofType(AssetsActions.loadAsset),
    exhaustMap((action) => {
      return new Observable<Action>(subscriber => {
        let image = new Image();
        image.onload = () => {
          subscriber.next()
        }
        image.src = action.path;
      });
    })
  ));

  constructor(
    private actions$: Actions
  ) { }
}
