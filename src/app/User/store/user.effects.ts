import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, exhaustMap, catchError } from 'rxjs/operators';
import { UserService } from '../user.service';
import { UserApiAction } from './user.actions';


@Injectable()
export class userEffects {
loadUser$ = createEffect(() => this.actions$.pipe(
    ofType(UserApiAction.userLoadStart),
    exhaustMap(({ id }) => this.postsService.getUser(id)
      .pipe(
        map(user => UserApiAction.selectedUser({ user })),
        catchError(() => EMPTY)
      ))
    )
  );

   
  constructor(
    private actions$: Actions,
    private postsService: UserService,
  ) {}
}