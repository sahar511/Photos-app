import { createActionGroup, emptyProps, props } from "@ngrx/store";
import { User } from "src/app/User/user.model";

export const authApiAction = createActionGroup({
    source: 'authApi',
    events: {
        'Users': props<{ users: User[] }>(),
        'Token':  props<{ token: string | null }>(),
        'Users Load Start': emptyProps(),
        'Login Start': props<{ username: string, password: string }>(),
        'Login Success': props<{ user: User }>(),
    }
})