import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import { selectIsAppLoaderScreenVisible } from 'src/app/store/view-state/view-state.selectors';

@Component({
  selector: 'app-loader',
  templateUrl: './app-loader.component.html',
  styleUrls: ['./app-loader.component.scss']
})
export class AppLoaderComponent implements OnInit {
  isAppLoaderScreenVisible$ = this.store.select(selectIsAppLoaderScreenVisible);

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
  }
}
