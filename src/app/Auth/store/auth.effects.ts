import { Injectable, OnDestroy } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {  catchError, exhaustMap, map, switchMap, tap, withLatestFrom } from 'rxjs/operators';

import { AuthService } from '../auth.service';
import { authApiAction } from './auth.actions';
import { EMPTY, Subscription, of } from 'rxjs';
import { Store } from '@ngrx/store';
import { selectUsersData } from './auth.selectors';
import { Router } from '@angular/router';




@Injectable()
export class AuthEffects{
  users$ = this.store.select(selectUsersData)
  loadUsers$ = createEffect(() => this.actions$.pipe(
    ofType(authApiAction.usersLoadStart),
    exhaustMap(() => this.authService.getUsers()
      .pipe(
        map(users => authApiAction.users({ users })),
        catchError(() => EMPTY)
      ))
    )
  );

  loadLogin$ = createEffect(() => this.actions$.pipe(
    ofType(authApiAction.loginStart),
    switchMap(({ username, password}) => {
     this.store.dispatch(authApiAction.usersLoadStart())
     console.log('ooooo', username, password)
     this.users$.pipe(  tap((value) => console.log('9-----9', value)   ))
     this.users$.subscribe(users => {
      const user = users.find(item => (item.username === username));
      console.log('user', user, username, password)
      console.log('users---', users)
      if(user) {
        const token = 'vmdbzacvbjhsdKgbjhsdefabgsdhjfbafdjh'
        this.store.dispatch(authApiAction.token({ token }))
        localStorage.setItem('token', token);
        this.router.navigate(['/'])
      } else {
        this.store.dispatch(authApiAction.error({ error: 'Your username or password is not valid' }))
      }
     })
     return of({ type: 'NO_OP' });
    })
  )
  );

  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private store: Store,
    private router: Router, 
  ) {}
}
