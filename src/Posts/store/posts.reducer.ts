import { createReducer, on } from "@ngrx/store";

import { PostsApiAction } from "./posts.actions";
import { Post } from "../posts.model";
import { Comment } from "../comment.model";
import { PostsState } from "../postsState.model";

export const initialState: PostsState = {
    post: undefined,
    posts: [],
    id: undefined,
    comments: [],
    loading: false,
}


export const postsReducer = createReducer(
    initialState,
    on(PostsApiAction.postsList, (state, { posts })=> ({...state, posts, loading: false})),
    on(PostsApiAction.selectedPostId, (state, { id }) => ({...state, id })),
    on(PostsApiAction.postListLoadStart, (state) => ({...state, loading: true})),
    on(PostsApiAction.postLoadStart, (state) => ({...state, loading: true})),
    on(PostsApiAction.selectedPost, (state, { post }) => ({...state, post, loading: false})),
    on(PostsApiAction.postComments, (state, { comments }) => ({
        ...state,
         comments: comments.filter((item: Comment) => item.postId == state.id)
     })),
     on(PostsApiAction.postNewComment, (state, { comment }) => ({...state, comments: [ comment, ...state.comments ] })),
)