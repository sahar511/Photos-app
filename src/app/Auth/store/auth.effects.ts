import { Injectable, OnDestroy } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import {
  catchError,
  exhaustMap,
  find,
  map,
  switchMap,
  tap,
  withLatestFrom,
} from 'rxjs/operators';

import { AuthService } from '../auth.service';
import { authApiAction } from './auth.actions';
import { EMPTY, of } from 'rxjs';
import { Store } from '@ngrx/store';
import { selectUsersData } from './auth.selectors';
import { Router } from '@angular/router';
import { UserService } from 'src/app/User/user.service';

@Injectable()
export class AuthEffects {
  loadUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(authApiAction.userLoadStart),
      exhaustMap(({ id }) =>
        this.userService.getUser(id).pipe(
          map((user) => authApiAction.selectedUser({ user })),
          catchError(() => EMPTY)
        )
      )
    )
  );

  users$ = this.store.select(selectUsersData);
  loadUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(authApiAction.usersLoadStart),
      exhaustMap(() =>
        this.authService.getUsers().pipe(
          map((users) => authApiAction.users({ users })),
          catchError(() => EMPTY)
        )
      )
    )
  );

  loadLogin$ = createEffect(() =>
    this.actions$.pipe(
      ofType(authApiAction.loginStart),
      exhaustMap(({ username, password }) => {
        return this.authService.getUsers().pipe(
          map((users) => authApiAction.users({ users })),
          switchMap(({ users }) => {
            const foundUser = users.find(item => item.username === username && password === 'sahar');
            console.log(' we found user', foundUser)
            if(foundUser) {
              const token = 'vmdbzacvbjhsdKgbjhsdefabgsdhjfbafdjh'
              return of(authApiAction.loginSuccess({ token }))
            } else {
              return of({ type: 'Login Fail' });
            }
          }),
          catchError(() => EMPTY)
        );
      })
    )
  );

  loginSuccess$ = createEffect(()=> 
    this.actions$.pipe(
      ofType(authApiAction.loginSuccess),
      exhaustMap(({ token })=>{
          localStorage.setItem('token', token!)
          this.router.navigate(['/'])
          return of({ type: 'empty'});
      })
    )
  ) 

  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private store: Store,
    private router: Router,
    private userService: UserService
  ) {}
}
