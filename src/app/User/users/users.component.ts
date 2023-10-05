import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AuthService } from '../../Auth/auth.service';
import { authApiAction } from '../../Auth/store/auth.actions';
import { selectUsersData } from '../../Auth/store/auth.selectors';
import { User } from '../user.model';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  value: string = '';
  suggestions: User[] = [];
  users$ = this.store.select(selectUsersData);
  constructor(private store: Store, private authService: AuthService) {}

  handleChange() {
    this.users$.subscribe((users) => {
      this.suggestions = users.filter((item) =>this.value && item.name.toLowerCase().includes(this.value));
    });
  }

  ngOnInit(): void {
    this.users$.subscribe((users) => {
      if (!users || users.length === 0) {
        this.authService
          .getUsers()
          .subscribe((users) =>
            this.store.dispatch(authApiAction.users({ users }))
          );
      }
      return;
    });
  }
}
