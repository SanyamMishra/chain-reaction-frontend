import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppLoaderComponent } from './components/app-loader/app-loader.component';
import { AvatarSelectionComponent } from './components/avatar-selection/avatar-selection.component';
import { HomeComponent } from './components/home/home.component';
import { UserProfileSettingsComponent } from './components/user-profile-settings/user-profile-settings.component';
import { CanDeactivateGuard } from './guards/can-deactivate.guard';
import { HomeGuard } from './guards/home.guard';

const routes: Routes = [
  {
    path: '',
    component: AppLoaderComponent,
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [HomeGuard],
    canDeactivate: [CanDeactivateGuard]
  },
  {
    path: 'profile/select-avatar',
    component: AvatarSelectionComponent
  },
  {
    path: 'profile',
    component: UserProfileSettingsComponent,
    canDeactivate: [CanDeactivateGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
