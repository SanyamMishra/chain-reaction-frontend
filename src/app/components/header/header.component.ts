import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { HeaderNavigationButtonType } from 'src/app/models/header-navigation.model';
import { AppState } from 'src/app/store/app.state';
import { navigateHeader } from 'src/app/store/header-navigation/header-navigation.actions';
import { selectHeaderNavigation } from 'src/app/store/header-navigation/header-navigation.selectors';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  headerNavigationButtonType: HeaderNavigationButtonType | null = null;
  isHeaderNavigationButtonEnabled = true;

  private subscriptions: Subscription[] = [];

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.subscriptions.push(
      this.store.select(selectHeaderNavigation)
        .subscribe((headerNavigation) => {
          if (headerNavigation) {
            this.headerNavigationButtonType = headerNavigation.headerButtonType;
            this.isHeaderNavigationButtonEnabled = headerNavigation.isbuttonEnabled;
          } else {
            this.headerNavigationButtonType = null;
            this.isHeaderNavigationButtonEnabled = false;
          }
        })
    );
  }

  isNavigateBackwardButtonVisible() {
    return this.isHeaderNavigationButtonEnabled &&
      this.headerNavigationButtonType === HeaderNavigationButtonType.NAVIGATE_BACKWARD;
  }

  isNavigateForwardButtonVisible() {
    return this.isHeaderNavigationButtonEnabled &&
      this.headerNavigationButtonType === HeaderNavigationButtonType.NAVIGATE_FORWARD;
  }

  onClickNavigateButton() {
    this.store.dispatch(navigateHeader());
  }

  ngOnDestroy() {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }
}
