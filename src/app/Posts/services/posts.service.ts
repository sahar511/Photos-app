import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, finalize } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { map } from 'rxjs/operators';
import { Post } from '../posts.model';
import { Comment } from '../comment.model';
import { Store } from '@ngrx/store';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http: HttpClient, private store: Store) { }
  getPosts(): Observable<Array<Post>> {
    return this.http
      .get<Post[]>(
        'https://jsonplaceholder.typicode.com/photos'
      )
      .pipe(map((posts: Post[]) => posts || []))
  }

  getPost(id: number): Observable<Post> {
    return this.http
      .get<Post>(
        `https://jsonplaceholder.typicode.com/photos/${id}`
      ).pipe(
        catchError(error => {
          console.error('Error:', error);
          throw error;
        })
      );
  }

  getPostComments(): Observable<Array<Comment>> {
    return this.http
      .get<Comment[]>(
        'https://jsonplaceholder.typicode.com/comments'
      )
  }
}
