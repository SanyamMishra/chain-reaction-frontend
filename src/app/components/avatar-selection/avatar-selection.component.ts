import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import { selectIsAvatarSelectionScreenVisible } from '../../store/view-state/view-state.selectors';
import { hideAvatarSelectionScreen } from '../../store/view-state/view-state.actions';
import { updateAvatarId } from 'src/app/store/user-profile/user-profile.actions';

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

  isAvatarSelectionScreenVisible$ = this.store.select(selectIsAvatarSelectionScreenVisible);

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
  }

  close(): void {
    this.store.dispatch(hideAvatarSelectionScreen());
  }

  onAvatarSelection(avatarId: string) {
    this.store.dispatch(updateAvatarId({ avatarId }));
    this.close();
  }
}
