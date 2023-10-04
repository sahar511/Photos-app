import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { PostsApiAction } from '../store/posts.actions';

@Component({
  selector: 'app-comment-form',
  templateUrl: './comment-form.component.html',
  styleUrls: ['./comment-form.component.css']
})
export class CommentFormComponent {
  value: string =''
  @Input() postId: number = 0
  constructor(private store: Store) {}
  onSubmit(){
    const comment = { 
      postId: this.postId,
       name: 'user',
       email: 'user',
       body: this.value
   }
    this.store.dispatch(PostsApiAction.postNewComment({ comment })) 
  }
}
