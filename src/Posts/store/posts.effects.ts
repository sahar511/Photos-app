import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, exhaustMap, catchError } from 'rxjs/operators';
import { PostsService } from '../services/posts.service';
import { PostsApiAction } from './posts.actions';

@Injectable()
export class PostsEffects {
 
  loadPosts$ = createEffect(() => this.actions$.pipe(
    ofType(PostsApiAction.postListLoadStart),
    exhaustMap(() => this.postsService.getPosts()
      .pipe(
        map(posts => PostsApiAction.postsList({ posts })),
        catchError(() => EMPTY)
      ))
    )
  );


  loadPost$ = createEffect(() => this.actions$.pipe(
    ofType(PostsApiAction.postLoadStart),
    exhaustMap(({ id }) => this.postsService.getPost(id)
      .pipe(
        map(post => PostsApiAction.selectedPost({ post })),
        catchError(() => EMPTY)
      ))
    )
  );

  loadComments$ = createEffect(() => this.actions$.pipe(
    ofType(PostsApiAction.postCommentsLoadStart),
    exhaustMap(() => this.postsService.getPostComments()
      .pipe(
        map(comments => PostsApiAction.postComments({ comments })),
        catchError(() => EMPTY)
      ))
    )
  );
 
  constructor(
    private actions$: Actions,
    private postsService: PostsService
  ) {}
}