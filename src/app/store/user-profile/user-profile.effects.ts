import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { exhaustMap, tap } from 'rxjs/operators';
import { UserProfileService } from "../../services/user-profile.service";
import * as ViewStateActions from "../view-state/view-state.actions";
import * as UserProfileActions from "./user-profile.actions";

@Injectable()
export class UserProfileEffects {
  loadUserProfile$ = createEffect(() => this.actions$.pipe(
    ofType(UserProfileActions.loadUserProfile),
    exhaustMap(() => {
      const userProfile = this.userProfileService.loadUserProfile();
      return of(UserProfileActions.loadUserProfileDone({ userProfile }));
    })
  ));

  loadUserProfileDone$ = createEffect(() => this.actions$.pipe(
    ofType(UserProfileActions.loadUserProfileDone),
    tap(({ userProfile }) => {
      if (!userProfile.name) {
        this.router.navigate(['/', 'profile']);
      } else {
        this.router.navigate(['/', 'home']);
      }
    })
  ), { dispatch: false });

  updateName$ = createEffect(() => this.actions$.pipe(
    ofType(UserProfileActions.updateName),
    exhaustMap((action) => {
      this.userProfileService.updateName(action.name);
      return of(UserProfileActions.updateNameDone({ name: action.name }));
    })
  ));

  updateAvatarId$ = createEffect(() => this.actions$.pipe(
    ofType(UserProfileActions.updateAvatarId),
    exhaustMap((action) => {
      this.userProfileService.updateAvatar(action.avatarId);
      return of(UserProfileActions.updateAvatarIdDone({ avatarId: action.avatarId }));
    })
  ));

  enableMusic$ = createEffect(() => this.actions$.pipe(
    ofType(UserProfileActions.enableMusic),
    exhaustMap(() => {
      this.userProfileService.enableMusic();
      return of(UserProfileActions.enableMusicDone());
    })
  ));

  disableMusic$ = createEffect(() => this.actions$.pipe(
    ofType(UserProfileActions.disableMusic),
    exhaustMap(() => {
      this.userProfileService.disableMusic();
      return of(UserProfileActions.disableMusicDone());
    })
  ));

  enableSoundEffects$ = createEffect(() => this.actions$.pipe(
    ofType(UserProfileActions.enableSoundEffects),
    exhaustMap(() => {
      this.userProfileService.enableSoundEffects();
      return of(UserProfileActions.enableSoundEffectsDone());
    })
  ));

  disableSoundEffects$ = createEffect(() => this.actions$.pipe(
    ofType(UserProfileActions.disableSoundEffects),
    exhaustMap(() => {
      this.userProfileService.disableSoundEffects();
      return of(UserProfileActions.disableSoundEffectsDone());
    })
  ));

  enableVibration$ = createEffect(() => this.actions$.pipe(
    ofType(UserProfileActions.enableVibration),
    exhaustMap(() => {
      this.userProfileService.enableVibration();
      return of(UserProfileActions.enableVibrationDone());
    })
  ));

  disableVibration$ = createEffect(() => this.actions$.pipe(
    ofType(UserProfileActions.disableVibration),
    exhaustMap(() => {
      this.userProfileService.disableVibration();
      return of(UserProfileActions.disableVibrationDone());
    })
  ));

  constructor(
    private actions$: Actions,
    private userProfileService: UserProfileService,
    private router: Router
  ) { }
}
