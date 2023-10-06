import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AuthService } from '../../Auth/auth.service';
import { authApiAction } from '../../Auth/store/auth.actions';
import { selectUsersData } from '../../Auth/store/auth.selectors';
import { User } from '../user.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit, OnDestroy {
  value: string = '';
  users$ = this.store.select(selectUsersData);
  loadingUsersSubscription?: Subscription
  constructor(private store: Store, private authService: AuthService) {}

  ngOnInit(): void {
    this.store.dispatch(authApiAction.usersLoadStart())
  }

  ngOnDestroy(): void {
      this.loadingUsersSubscription?.unsubscribe()
  }
}
