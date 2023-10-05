import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {  catchError, exhaustMap, map, tap } from 'rxjs/operators';

import { AuthService } from '../auth.service';
import { authApiAction } from './auth.actions';
import { EMPTY } from 'rxjs';




@Injectable()
export class AuthEffects {
  loadUsers$ = createEffect(() => this.actions$.pipe(
    ofType(authApiAction.usersLoadStart),
    exhaustMap(() => this.authService.getUsers()
      .pipe(
        map(users => authApiAction.users({ users })),
        catchError(() => EMPTY)
      ))
    )
  );


  constructor(
    private actions$: Actions,
    private authService: AuthService,
  ) {}
}
