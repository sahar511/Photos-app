import { Component, Input } from '@angular/core';
import { Post } from '../posts.model';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css']
})
export class PostsListComponent {
  @Input() items: Post[] | null = []
}
