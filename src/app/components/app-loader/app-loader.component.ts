import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import { loadUserProfile } from 'src/app/store/user-profile/user-profile.actions';

@Component({
  selector: 'app-loader',
  templateUrl: './app-loader.component.html',
  styleUrls: ['./app-loader.component.scss']
})
export class AppLoaderComponent implements OnInit {
  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.dispatch(loadUserProfile());
  }
}
