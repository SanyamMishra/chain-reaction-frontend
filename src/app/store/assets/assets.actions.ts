import { createAction, props } from '@ngrx/store';


export const loadAsset = createAction(
  '[Assets] Load Asset',
  props<{ path: string }>()
);
// export const updateNameDone = createAction(
//   '[User Profile] Update Name Done',
//   props<{ name: string }>()
// );
