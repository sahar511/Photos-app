import { User } from "../User/user.model";

export interface AuthState { 
    token: string | null,
    users: User[],
    user: User | null,
    error: string | null,
    loading: boolean,
    }