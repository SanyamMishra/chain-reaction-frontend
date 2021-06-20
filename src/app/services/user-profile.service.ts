import { Injectable } from '@angular/core';
import { UserProfile } from '../models/user-profile.model';
import { initialState } from '../store/user-profile/user-profile.reducer';
@Injectable({
  providedIn: 'root'
})
export class UserProfileService {
  loadUserProfile(): UserProfile {
    let userProfileData = localStorage.getItem('userProfile');

    let userProfile = initialState;

    if (userProfileData) {
      userProfile = JSON.parse(userProfileData);
    }

    return userProfile;
  }

  updateName(name: string) {
    const userProfile = this.loadUserProfile();

    localStorage.setItem('userProfile', JSON.stringify({
      ...userProfile,
      name
    }));
  }

  updateAvatar(avatarId: string) {
    const userProfile = this.loadUserProfile();

    localStorage.setItem('userProfile', JSON.stringify({
      ...userProfile,
      avatarId
    }));
  }

  enableMusic() {
    const userProfile = this.loadUserProfile();

    localStorage.setItem('userProfile', JSON.stringify({
      ...userProfile,
      musicEnabled: true
    }));
  }

  disableMusic() {
    const userProfile = this.loadUserProfile();

    localStorage.setItem('userProfile', JSON.stringify({
      ...userProfile,
      musicEnabled: false
    }));
  }

  enableSoundEffects() {
    const userProfile = this.loadUserProfile();

    localStorage.setItem('userProfile', JSON.stringify({
      ...userProfile,
      soundEffectsEnabled: true
    }));
  }

  disableSoundEffects() {
    const userProfile = this.loadUserProfile();

    localStorage.setItem('userProfile', JSON.stringify({
      ...userProfile,
      soundEffectsEnabled: false
    }));
  }

  enableVibration() {
    const userProfile = this.loadUserProfile();

    localStorage.setItem('userProfile', JSON.stringify({
      ...userProfile,
      vibrationEnabled: true
    }));
  }

  disableVibration() {
    const userProfile = this.loadUserProfile();

    localStorage.setItem('userProfile', JSON.stringify({
      ...userProfile,
      vibrationEnabled: false
    }));
  }
}
