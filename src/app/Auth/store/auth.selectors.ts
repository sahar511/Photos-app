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
