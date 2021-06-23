import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import { selectIsAvatarSelectionScreenVisible } from '../../store/view-state/view-state.selectors';
import { addBackButtonAction, goBack, hideAvatarSelectionScreen } from '../../store/view-state/view-state.actions';
import { updateAvatarId } from 'src/app/store/user-profile/user-profile.actions';
import { Subscription } from 'rxjs';
import { initialState } from 'src/app/store/view-state/view-state.reducer';

@Component({
  selector: 'app-avatar-selection',
  templateUrl: './avatar-selection.component.html',
  styleUrls: ['./avatar-selection.component.scss']
})
export class AvatarSelectionComponent implements OnInit, OnDestroy {
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

  isAvatarSelectionScreenVisible = initialState.isAvatarSelectionScreenVisible;
  private subscriptions: Subscription[] = [];

  constructor(private store: Store<AppState>) {
    this.subscriptions.push(
      this.store.select(selectIsAvatarSelectionScreenVisible)
        .subscribe(isAvatarSelectionScreenVisible => {
          this.isAvatarSelectionScreenVisible = isAvatarSelectionScreenVisible;
          if (isAvatarSelectionScreenVisible) {
            this.store.dispatch(addBackButtonAction({ action: hideAvatarSelectionScreen }));
          }
        })
    );
  }

  ngOnInit(): void {
  }

  close(): void {
    this.store.dispatch(goBack());
  }

  onAvatarSelection(avatarId: string) {
    this.store.dispatch(updateAvatarId({ avatarId }));
    this.close();
  }

  ngOnDestroy() {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }
}
