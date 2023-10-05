import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient, private store: Store) { }
  
  getUser(id: number): Observable<User>  {
    return this.http.get<User>(`https://jsonplaceholder.typicode.com/users/${id}`)
  }
}
