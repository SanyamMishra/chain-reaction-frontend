import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { UserProfile } from './models/user-profile.model';
import { AppState } from './store/app.state';
import * as UserProfileActions from './store/userProfile.actions';
import * as UserProfileSelectors from './store/userProfile.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  userProfileForm: FormGroup;

  name$ = this.store.select(UserProfileSelectors.selectName);
  avatarId$ = this.store.select(UserProfileSelectors.selectAvatarId);
  musicEnabled$ = this.store.select(UserProfileSelectors.selectMusicEnabled);
  soundEffectsEnabled$ = this.store.select(UserProfileSelectors.selectSoundEffectsEnabled);
  vibrationEnabled$ = this.store.select(UserProfileSelectors.selectVibrationEnabled);

  constructor(private store: Store<AppState>) {
    this.userProfileForm = new FormGroup({
      name: new FormControl(null, Validators.required),
      avatarId: new FormControl(null, Validators.required),
      musicEnabled: new FormControl(true, Validators.required),
      soundEffectsEnabled: new FormControl(true, Validators.required),
      vibrationEnabled: new FormControl(true, Validators.required),
    });
  }

  ngOnInit() { }

  onSubmit() {
    const userProfileFormData: UserProfile = this.userProfileForm.value;
    if (this.userProfileForm.valid) {
      this.store.dispatch(UserProfileActions.updateName({ name: userProfileFormData.name }));
      this.store.dispatch(UserProfileActions.updateAvatarId({ avatarId: userProfileFormData.avatarId }));

      if (userProfileFormData.musicEnabled) {
        this.store.dispatch(UserProfileActions.enableMusic());
      } else {
        this.store.dispatch(UserProfileActions.disableMusic());
      }

      if (userProfileFormData.soundEffectsEnabled) {
        this.store.dispatch(UserProfileActions.enableSoundEffects());
      } else {
        this.store.dispatch(UserProfileActions.disableSoundEffects());
      }

      if (userProfileFormData.vibrationEnabled) {
        this.store.dispatch(UserProfileActions.enableVibration());
      } else {
        this.store.dispatch(UserProfileActions.disableVibration());
      }
    }
  }
}
