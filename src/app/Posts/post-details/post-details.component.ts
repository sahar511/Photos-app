import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';

import { selectSelectedId, selectSelectedPost, selectPostComments, selectPostLoading } from '../store/posts.selectors';
import { PostsApiAction } from '../store/posts.actions';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit, OnDestroy {
  @Input() id: number = 0;
  private sub!: Subscription;

  post$ = this.store.select(selectSelectedPost);
  comments$ = this.store.select(selectPostComments);
  id$ = this.store.select(selectSelectedId);
  loading$ = this.store.select(selectPostLoading);

  constructor(private route: ActivatedRoute, private store: Store) {}
  ngOnInit(): void {
    this.sub = this.route.params.subscribe(({ id }) => {
      this.id = id
      this.store.dispatch(PostsApiAction.selectedPostId({ id }))
    })

    this.store.dispatch(PostsApiAction.postLoadStart({ id: this.id }))
    this.store.dispatch(PostsApiAction.postCommentsLoadStart())
  }
  

  ngOnDestroy(): void {
      this.sub.unsubscribe()
  }

}
