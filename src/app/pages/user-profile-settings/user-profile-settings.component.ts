import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import * as UserProfileSelectors from '../../store/user-profile/user-profile.selectors';
import * as UserProfileActions from '../../store/user-profile/user-profile.actions';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router, RouterStateSnapshot } from '@angular/router';
import * as HeaderNavigationActions from 'src/app/store/header-navigation/header-navigation.actions';
import { HeaderNavigationButtonType } from 'src/app/models/header-navigation.model';
import { take } from 'rxjs/operators';
import { UserProfileService } from 'src/app/services/user-profile.service';
import { initialState } from 'src/app/store/user-profile/user-profile.reducer';
import { CanComponentDeactivate } from 'src/app/guards/can-deactivate.guard';
import { NavigationService } from 'src/app/services/navigation.service';

@Component({
  selector: 'app-user-profile-settings',
  templateUrl: './user-profile-settings.component.html',
  styleUrls: ['./user-profile-settings.component.scss']
})
export class UserProfileSettingsComponent implements OnInit, OnDestroy, CanComponentDeactivate {
  avatarId$ = this.store.select(UserProfileSelectors.selectAvatarId);
  private _musicEnabled = initialState.musicEnabled;
  private _soundEffectsEnabled = initialState.soundEffectsEnabled;
  private _vibrationEnabled = initialState.vibrationEnabled;
  private subscriptions: Subscription[] = [];

  constructor(
    private store: Store<AppState>,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private userProfileService: UserProfileService,
    private navigationService: NavigationService
  ) { }

  ngOnInit() {
    this.subscriptions.push(
      this.store.select(UserProfileSelectors.selectName)
        .pipe(
          take(1)
        )
        .subscribe(name => {
          if (this.name === null) {
            this.name = name;
          }
          this.store.dispatch(
            HeaderNavigationActions.updateHeaderNavigation({
              headerNavigation: {
                callback: this.navigate.bind(this),
                headerButtonType: name ? HeaderNavigationButtonType.NAVIGATE_BACKWARD : HeaderNavigationButtonType.NAVIGATE_FORWARD,
                isbuttonEnabled: !!this.name
              }
            })
          );
        })
    );

    this.subscriptions.push(
      this.store.select(UserProfileSelectors.selectMusicEnabled)
        .subscribe(musicEnabled => this._musicEnabled = musicEnabled)
    );

    this.subscriptions.push(
      this.store.select(UserProfileSelectors.selectSoundEffectsEnabled)
        .subscribe(soundEffectsEnabled => this._soundEffectsEnabled = soundEffectsEnabled)
    );

    this.subscriptions.push(
      this.store.select(UserProfileSelectors.selectVibrationEnabled)
        .subscribe(vibrationEnabled => this._vibrationEnabled = vibrationEnabled)
    );
  }

  ngOnDestroy() {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }

  canDeactivate(nextState?: RouterStateSnapshot) {
    if (nextState?.url === '/profile/select-avatar') {
      return true;
    }

    const result = !!this.name;

    if (result) {
      this.userProfileService.temporaryName = null;
      this.store.dispatch(HeaderNavigationActions.updateHeaderNavigation({ headerNavigation: null }));
    }

    return result;
  }

  navigate() {
    this.store.dispatch(UserProfileActions.updateName({
      name: this.name as string
    }));

    this.navigationService.navigateBack(this.activatedRoute);
  }

  onEditAvatarClick() {
    this.router.navigate(['select-avatar'], { relativeTo: this.activatedRoute });
  }

  get name() {
    return this.userProfileService.temporaryName;
  }

  set name(name) {
    this.userProfileService.temporaryName = name;

    if (name) {
      this.store.dispatch(HeaderNavigationActions.enableHeaderNavigation());
    } else {
      this.store.dispatch(HeaderNavigationActions.disableHeaderNavigation());
    }
  }

  get musicEnabled() {
    return this._musicEnabled;
  }

  set musicEnabled(enabled: boolean) {
    if (enabled) {
      this.store.dispatch(UserProfileActions.enableMusic());
    } else {
      this.store.dispatch(UserProfileActions.disableMusic());
    }
  }

  get soundEffectsEnabled() {
    return this._soundEffectsEnabled;
  }

  set soundEffectsEnabled(enabled: boolean) {
    if (enabled) {
      this.store.dispatch(UserProfileActions.enableSoundEffects());
    } else {
      this.store.dispatch(UserProfileActions.disableSoundEffects());
    }
  }

  get vibrationEnabled() {
    return this._vibrationEnabled;
  }

  set vibrationEnabled(enabled: boolean) {
    if (enabled) {
      this.store.dispatch(UserProfileActions.enableVibration());
    } else {
      this.store.dispatch(UserProfileActions.disableVibration());
    }
  }
}
