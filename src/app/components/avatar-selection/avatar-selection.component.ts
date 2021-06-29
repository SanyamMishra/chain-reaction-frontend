import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import { navigateHeader, updateHeaderNavigation } from '../../store/header-navigation/header-navigation.actions';
import { updateAvatarId } from 'src/app/store/user-profile/user-profile.actions';
import { ActivatedRoute } from '@angular/router';
import { HeaderNavigationButtonType } from 'src/app/models/header-navigation.model';
import { NavigationService } from 'src/app/services/navigation.service';

@Component({
  selector: 'app-avatar-selection',
  templateUrl: './avatar-selection.component.html',
  styleUrls: ['./avatar-selection.component.scss']
})
export class AvatarSelectionComponent implements OnInit {
  avatarIds = [
    'Memoji-01',
    'Memoji-02',
    'Memoji-03',
    'Memoji-04',
    'Memoji-05',
    'Memoji-06',
    'Memoji-07',
    'Memoji-08',
    'Memoji-09',
    'Memoji-10',
    'Memoji-11',
    'Memoji-12',
    'Memoji-13',
    'Memoji-14',
    'Memoji-15',
    'Memoji-16',
    'Memoji-17',
    'Memoji-18',
    'Memoji-19',
    'Memoji-20',
    'Memoji-21',
    'Memoji-22',
    'Memoji-23',
    'Memoji-24',
    'Memoji-25',
    'Memoji-26',
  ];

  constructor(
    private store: Store<AppState>,
    private activatedRoute: ActivatedRoute,
    private navigationService: NavigationService
  ) { }

  ngOnInit(): void {
    this.store.dispatch(
      updateHeaderNavigation({
        headerNavigation: {
          callback: this.onGoBack.bind(this),
          headerButtonType: HeaderNavigationButtonType.NAVIGATE_BACKWARD,
          isbuttonEnabled: true
        }
      })
    );
  }

  onAvatarSelection(avatarId: string) {
    this.store.dispatch(updateAvatarId({ avatarId }));
    this.store.dispatch(navigateHeader());
  }

  onGoBack() {
    this.navigationService.navigateBack(this.activatedRoute)
  }
}
