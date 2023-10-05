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
  

  login({ username , password }: { username: string, password: string}) {
    this.users$.subscribe((users) => {
      const user = users.find(item => item.username === username && item.email === password);
      if(user) {
        const token = 'vmdbzacvbjhsdKgbjhsdefabgsdhjfbafdjh'
        this.store.dispatch(authApiAction.token({ token }))
        localStorage.setItem('token', token);
        this.router.navigate(['/'])
      }
    return;
    })
  }

  logout(): void {
    localStorage.removeItem('token');
    this.store.dispatch(authApiAction.token({ token: null }))
  }

  
}
