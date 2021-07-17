import { Component } from '@angular/core';
import { Router, RouterStateSnapshot } from '@angular/router';
import { Store } from '@ngrx/store';
import { CanComponentDeactivate } from 'src/app/guards/can-deactivate.guard';
import { HeaderNavigationButtonType } from 'src/app/models/header-navigation.model';
import { AppState } from 'src/app/store/app.state';
import { updateHeaderNavigation } from 'src/app/store/header-navigation/header-navigation.actions';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements CanComponentDeactivate {
  isJoinRoomTopSheetVisible = false;
  isCreateRoomTopSheetVisible = false;
  roomColors = [
    '#0D1321',
    '#F0EBD8',
    '#136F63',
    '#C6D8FF',
    '#192BC2',
    '#7353BA',
    '#F95738',
    '#F4D35E'
  ];
  selectedColorIndex = 0;

  constructor(
    private store: Store<AppState>,
    private router: Router
  ) { }

  canDeactivate(nextState?: RouterStateSnapshot) {
    if (nextState?.url === '/') {
      return false;
    }

    return true;
  }

  ngOnInit(): void {
    this.store.dispatch(
      updateHeaderNavigation({
        headerNavigation: {
          callback: this.onOpenProfileSettings.bind(this),
          headerButtonType: HeaderNavigationButtonType.OPEN_PROFILE_SETTINGS,
          isbuttonEnabled: true
        }
      })
    );
  }

  onOpenProfileSettings() {
    this.router.navigate(['profile']);
  }

  onColorSelect(i: number) {
    this.selectedColorIndex = i;
  }
}
