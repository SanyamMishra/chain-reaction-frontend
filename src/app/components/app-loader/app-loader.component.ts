import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { AppState } from 'src/app/store/app.state';
import { selectUserProfile } from 'src/app/store/user-profile/user-profile.selectors';

@Component({
  selector: 'app-loader',
  templateUrl: './app-loader.component.html',
  styleUrls: ['./app-loader.component.scss']
})
export class AppLoaderComponent implements OnInit, OnDestroy {
  private subscriptions: Subscription[] = [];

  constructor(
    private store: Store<AppState>,
    private router: Router
  ) { }

  ngOnInit() {
    this.subscriptions.push(
      this.store.select(selectUserProfile)
        .subscribe(() => this.router.navigate(['home']))
    );
  }

  ngOnDestroy() {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }
}
