import { Component, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { UserProfile } from 'src/app/models/user-profile.model';
import { AppState } from 'src/app/store/app.state';
import * as UserProfileSelectors from '../../store/user-profile/user-profile.selectors';
import * as UserProfileActions from '../../store/user-profile/user-profile.actions';
import * as ViewStateActions from '../../store/view-state/view-state.actions';
import { Subscription } from 'rxjs';
import { selectIsUserProfileSettingsScreenVisible } from 'src/app/store/view-state/view-state.selectors';

@Component({
  selector: 'app-user-profile-settings',
  templateUrl: './user-profile-settings.component.html',
  styleUrls: ['./user-profile-settings.component.scss']
})
export class UserProfileSettingsComponent implements OnDestroy {
  name$ = this.store.select(UserProfileSelectors.selectName);
  avatarId$ = this.store.select(UserProfileSelectors.selectAvatarId);
  isUserProfileSettingsScreenVisible$ = this.store.select(selectIsUserProfileSettingsScreenVisible);
  private _musicEnabled = false;
  private _soundEffectsEnabled = false;
  private _vibrationEnabled = false;
  private subscriptions: Subscription[] = [];

  constructor(private store: Store<AppState>) {
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

  onEditAvatarClick() {
    this.store.dispatch(ViewStateActions.showAvatarSelectionScreen());
  }

  onNameUpdate(event: Event) {
    this.store.dispatch(UserProfileActions.updateName({
      name: (event.target as HTMLInputElement).value
    }));
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

  ngOnDestroy() {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }
}
