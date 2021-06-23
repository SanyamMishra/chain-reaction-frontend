import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import { selectBackButtonAction } from 'src/app/store/view-state/view-state.selectors';
import { goBack } from '../store/view-state/view-state.actions';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  backButtonAction$ = this.store.select(selectBackButtonAction);

  constructor(private store: Store<AppState>) { }

  onClickBackButton() {
    this.store.dispatch(goBack());
  }
}
