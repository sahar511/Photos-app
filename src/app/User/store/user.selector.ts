import { createFeatureSelector, createSelector } from '@ngrx/store';

import { UserState } from '../userState.model';


 
export const selectUser = createFeatureSelector<UserState>('userState');

export const selectSelectedUser = createSelector(
    selectUser,
    (state: UserState) => state.selectedUser
  )