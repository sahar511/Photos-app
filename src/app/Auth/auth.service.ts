import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { User } from '../User/user.model';
import { Store } from '@ngrx/store';
import { selectUsersData } from './store/auth.selectors';
import { Router } from '@angular/router';
import { authApiAction } from './store/auth.actions';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  users$ = this.store.select(selectUsersData)

  constructor(private http : HttpClient, private store: Store, private router: Router ) { }

  getUsers(): Observable<User[]> {
    return this.http
      .get<User[]>(
        `https://jsonplaceholder.typicode.com/users`
      )
  }


  logout(): void {
    localStorage.removeItem('token');
    this.store.dispatch(authApiAction.token({ token: null }))
  }

  
}
