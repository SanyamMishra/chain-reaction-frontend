import { Component } from '@angular/core';
import { Router, RouterStateSnapshot } from '@angular/router';
import { Store } from '@ngrx/store';
import { CanComponentDeactivate } from 'src/app/guards/can-deactivate.guard';
import { HeaderNavigationButtonType } from 'src/app/models/header-navigation.model';
import { AppState } from 'src/app/store/app.state';
import { updateHeaderNavigation } from 'src/app/store/header-navigation/header-navigation.actions';
import { PlayerColor } from 'src/app/models/game.model';
import * as GameSelectors from 'src/app/store/game/game.selectors';
import * as GameActions from 'src/app/store/game/game.actions';
import { initialState as gameInitialState } from 'src/app/store/game/game.reducer';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements CanComponentDeactivate {
  isJoinRoomTopSheetVisible = false;
  isCreateRoomTopSheetVisible = false;
  playerColor$ = this.store.select(GameSelectors.selectPlayerColor);
  roomCode = gameInitialState.roomCode;
  subscriptions: Subscription[] = [];

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

  ngOnDestroy() {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }

  onOpenProfileSettings() {
    this.router.navigate(['profile']);
  }

  getPlayerColors() {
    const colors = [];
    
    for(let playerColor of Object.values(PlayerColor)) {
      colors.push(playerColor);
    }

    return colors;
  }

  onColorSelect(playerColor: PlayerColor) {
    this.store.dispatch(GameActions.setPlayerColor({playerColor}));
  }

  resetPlayerColor() {
    this.store.dispatch(GameActions.resetPlayerColor());
  }

  onCloseCreateRoomTopSheet(isProceeding = false) {
    this.isCreateRoomTopSheetVisible = false;
    !isProceeding && this.resetPlayerColor();
  }

  onCloseJoinRoomTopSheet(isProceeding = false) {
    this.isJoinRoomTopSheetVisible = false;

    if(!isProceeding) {
      this.roomCode = gameInitialState.roomCode;
      this.resetPlayerColor();
    }
  }

  onProceed() {
    this.store.dispatch(GameActions.setRoomCode({roomCode: this.roomCode}));
    this.onCloseCreateRoomTopSheet(true);
    this.onCloseJoinRoomTopSheet(true);
  }
}
