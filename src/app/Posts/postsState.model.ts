import { Post } from "./posts.model"
import { Comment } from "./comment.model"

export interface PostsState {
    posts: Post[],
    id: number | undefined,
    post?: Post,
    comments: Comment[]
    loading: boolean,
}