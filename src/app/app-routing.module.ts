import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppLoaderComponent } from './components/app-loader/app-loader.component';
import { AvatarSelectionComponent } from './pages/avatar-selection/avatar-selection.component';
import { HomeComponent } from './pages/home/home.component';
import { UserProfileSettingsComponent } from './pages/user-profile-settings/user-profile-settings.component';
import { CanDeactivateGuard } from './guards/can-deactivate.guard';
import { HomeGuard } from './guards/home.guard';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
    canActivate: [HomeGuard],
    canDeactivate: [CanDeactivateGuard],
    data: { animation: 'HomePage' }
  },
  {
    path: 'profile/select-avatar',
    component: AvatarSelectionComponent,
    data: { animation: 'ProfileSelectAvatarPage' }
  },
  {
    path: 'profile',
    component: UserProfileSettingsComponent,
    canDeactivate: [CanDeactivateGuard],
    data: { animation: 'ProfilePage' }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
