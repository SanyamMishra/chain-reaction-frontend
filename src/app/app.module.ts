import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { userProfileReducer } from './store/userProfile.reducer';
import { EffectsModule } from '@ngrx/effects';
import { UserProfileEffects } from './store/userProfile.effects';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    StoreModule.forRoot({
      userProfile: userProfileReducer
    }),
    StoreDevtoolsModule.instrument(),
    EffectsModule.forRoot([UserProfileEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
