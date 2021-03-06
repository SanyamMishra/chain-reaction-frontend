import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';

import { SharedModule } from './shared.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppLoaderComponent } from './components/app-loader/app-loader.component';
import { HeaderComponent } from './components/header/header.component';
import { LogoComponent } from './components/logo/logo.component';
import { HomeComponent } from './pages/home/home.component';
import { UserProfileSettingsComponent } from './pages/user-profile-settings/user-profile-settings.component';
import { AvatarSelectionComponent } from './pages/avatar-selection/avatar-selection.component';
import { UserProfileEffects } from './store/user-profile/user-profile.effects';
import { userProfileReducer } from './store/user-profile/user-profile.reducer';
import { HeaderNavigationEffects } from './store/header-navigation/header-navigation.effects';
import { headerNavigationReducer } from './store/header-navigation/header-navigation.reducer';
import { gameReducer } from './store/game/game.reducer';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { TopSheetComponent } from './components/top-sheet/top-sheet.component';
import { ButtonComponent } from './components/button/button.component';

@NgModule({
  declarations: [
    AppComponent,
    LogoComponent,
    UserProfileSettingsComponent,
    AvatarSelectionComponent,
    AppLoaderComponent,
    HeaderComponent,
    HomeComponent,
    TopSheetComponent,
    ButtonComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    StoreModule.forRoot({
      userProfile: userProfileReducer,
      headerNavigation: headerNavigationReducer,
      game: gameReducer
    }),
    StoreDevtoolsModule.instrument(),
    EffectsModule.forRoot([
      UserProfileEffects,
      HeaderNavigationEffects
    ]),
    SharedModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
