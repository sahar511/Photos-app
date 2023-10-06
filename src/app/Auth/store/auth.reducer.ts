import { createReducer, on } from "@ngrx/store";

import { authApiAction } from "./auth.actions";
import { AuthState } from "src/app/Auth/authState.model";

export const initialState: AuthState = {
    token: localStorage.getItem('token'), 
    users: [],
    user: null,
    error: null,
    loading: false,
    selectedUser: null,
}


export const authReducer = createReducer(
    initialState,
    on(authApiAction.selectedUser, (state, { user }) => ({...state, selectedUser: user, loading: false})),
    on(authApiAction.userLoadStart, (state) => ({...state, loading: true})),
    on(authApiAction.users, (state, { users })=> ({...state, users})),
    on(authApiAction.usersLoadStart, (state)=> ({...state, loading: true})),
    on(authApiAction.loginStart, (state) => ({...state, loading: true })),
    on(authApiAction.loginSuccess, (state) => ({...state, error: null, loading: false })),
    on(authApiAction.token, (state, { token }) => ({...state, token})),
    on(authApiAction.error, (state, { error }) => ({...state, error}))
)