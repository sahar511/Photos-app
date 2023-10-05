import { createFeatureSelector, createSelector } from '@ngrx/store';
import { PostsState } from '../postsState.model';


 
export const selectPosts = createFeatureSelector<PostsState>('postsState');
 
export const selectPostLoading = createSelector(
  selectPosts,
  (state: PostsState) => state.loading
)

export const selectPostsData = createSelector(
  selectPosts,
  (state: PostsState) => state.posts
);


export const selectSelectedId = createSelector(
  selectPosts,
  (state: PostsState) => state.id
)

export const selectSelectedPost = createSelector(
  selectPosts,
  (state: PostsState) => state.post
)

export const selectPostComments = createSelector(
  selectPosts,
  (state: PostsState) => state.comments
)
