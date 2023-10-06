import { User } from "../User/user.model";

export interface AuthState { 
    token: string | null,
    users: User[],
    error: string | null,
    loading: boolean,
    selectedUser: User | null,
    }