import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AuthState } from 'src/app/Auth/authState.model';


 
export const selectAuth = createFeatureSelector<AuthState>('authState');
 

export const selectUsersData = createSelector(
  selectAuth,
  (state: AuthState) => state.users
);

export const selectToken = createSelector(
  selectAuth,
  (state: AuthState) => state.token
);


export const selectLoading = createSelector(
  selectAuth,
  (state: AuthState) => state.loading
);

export const selectError = createSelector(
  selectAuth,
  (state: AuthState) => state.error
);


export const selectSelectedUser = createSelector(
    selectAuth,
    (state: AuthState) => state.selectedUser
  )