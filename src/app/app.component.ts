import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Store } from '@ngrx/store';
import { slideAnimation } from './animations';
import { AppState } from './store/app.state';
import { loadUserProfile } from './store/user-profile/user-profile.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    slideAnimation
  ]
})
export class AppComponent {
  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.dispatch(loadUserProfile());
  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
  }
}
