import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Store } from '@ngrx/store';

import { PostsApiAction } from '../store/posts.actions';
import { selectPostLoading, selectPostsData } from '../store/posts.selectors';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = 'mini-instagram';
  posts$ = this.store.select(selectPostsData)
  items: MenuItem[] | undefined;
  constructor(private store: Store){}
  loading$ = this.store.select(selectPostLoading);

  ngOnInit() {
    this.items = [
        {
            label: 'Login',
            icon: 'pi pi-user',
        }
    ];

      this.store.dispatch(PostsApiAction.postListLoadStart())
    }
}
