import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { userProfileReducer } from './store/user-profile/user-profile.reducer';
import { UserProfileEffects } from './store/user-profile/user-profile.effects';
import { ViewStateEffects } from './store/view-state/view-state.effects';
import { SharedModule } from './shared.module';
import { LogoComponent } from './components/logo/logo.component';
import { UserProfileSettingsComponent } from './components/user-profile-settings/user-profile-settings.component';
import { AvatarSelectionComponent } from './components/avatar-selection/avatar-selection.component';
import { viewStateReducer } from './store/view-state/view-state.reducer';
import { AppLoaderComponent } from './components/app-loader/app-loader.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    LogoComponent,
    UserProfileSettingsComponent,
    AvatarSelectionComponent,
    AppLoaderComponent,
    HeaderComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    StoreModule.forRoot({
      userProfile: userProfileReducer,
      viewState: viewStateReducer
    }),
    StoreDevtoolsModule.instrument(),
    EffectsModule.forRoot([
      UserProfileEffects,
      ViewStateEffects
    ]),
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
