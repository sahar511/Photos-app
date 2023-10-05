import { createReducer, on } from "@ngrx/store";

import { User } from "../user.model"
import { UserApiAction } from "./user.actions";
import { UserState } from "../userState.model";

export const initialState: UserState = {
    selectedUser: undefined
}


export const userReducer = createReducer(
    initialState,
    on(UserApiAction.selectedUser, (state, { user }) => ({...state, selectedUser: user, loading: false})),
    on(UserApiAction.userLoadStart, (state) => ({...state, loading: true})),
)