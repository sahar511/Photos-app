import { createActionGroup, props, emptyProps } from "@ngrx/store";
import { Post } from "../posts.model";
import { Comment } from "../comment.model";

export const PostsApiAction = createActionGroup({
    source: 'postsApi',
    events: {
        'Selected Post Id': props<{ id: number }>(),
        'Selected Post': props<{ post: Post }>(),
        'Posts List': props<{ posts: Post[] }>(),
        'Post Comments': props<{ comments: Comment[] }>(),
        'Post Comments Load Start': emptyProps(),
        'Post New Comment': props<{ comment: Comment}>(),
        'post List Load Start': emptyProps(),
        'post Load Start': props<{ id: number}>()
    }
})