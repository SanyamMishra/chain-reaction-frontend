import { Injectable } from '@angular/core';
import { UserProfile } from '../models/user-profile.model';

@Injectable({
  providedIn: 'root'
})
export class UserProfileService {
  private getUserProfile(): UserProfile {
    let userProfileData = localStorage.getItem('userProfile');
    if (!userProfileData) {
      userProfileData = '{}';
    }

    return JSON.parse(userProfileData);
  }

  updateName(name: string) {
    const userProfile = this.getUserProfile();

    localStorage.setItem('userProfile', JSON.stringify({
      ...userProfile,
      name
    }));
  }

  updateAvatar(avatarId: string) {
    const userProfile = this.getUserProfile();

    localStorage.setItem('userProfile', JSON.stringify({
      ...userProfile,
      avatarId
    }));
  }

  enableMusic() {
    const userProfile = this.getUserProfile();

    localStorage.setItem('userProfile', JSON.stringify({
      ...userProfile,
      musicEnabled: true
    }));
  }

  disableMusic() {
    const userProfile = this.getUserProfile();

    localStorage.setItem('userProfile', JSON.stringify({
      ...userProfile,
      musicEnabled: false
    }));
  }

  enableSoundEffects() {
    const userProfile = this.getUserProfile();

    localStorage.setItem('userProfile', JSON.stringify({
      ...userProfile,
      soundEffectsEnabled: true
    }));
  }

  disableSoundEffects() {
    const userProfile = this.getUserProfile();

    localStorage.setItem('userProfile', JSON.stringify({
      ...userProfile,
      soundEffectsEnabled: false
    }));
  }

  enableVibration() {
    const userProfile = this.getUserProfile();

    localStorage.setItem('userProfile', JSON.stringify({
      ...userProfile,
      vibrationEnabled: true
    }));
  }

  disableVibration() {
    const userProfile = this.getUserProfile();

    localStorage.setItem('userProfile', JSON.stringify({
      ...userProfile,
      vibrationEnabled: false
    }));
  }
}
