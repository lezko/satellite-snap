import {combineInitialStateWithSavedState, useAppSelector} from 'store/index';
import {AuthUser} from 'models/AuthUser';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {UserRole} from 'models/User';

export const userSliceName = 'user';

export interface UserState {
    user: AuthUser | null;
    loading: boolean;
    error: string;
}

export interface LoggedInUserState {
    user: AuthUser;
    loading: boolean;
    error: string;
}

const initialState = {
    user: {
        id: 1,
        login: '123',
        role: UserRole.Admin,
        token: '234'
    },
    // user: null,
    loading: false,
    error: '',
}

export const userSlice = createSlice({
    name: 'user',
    initialState: combineInitialStateWithSavedState<UserState>(initialState, userSliceName),
    reducers: {
        startLogIn(state) {
            state.loading = true;
        },
        logInSuccess(state, action: PayloadAction<AuthUser>) {
            state.loading = false;
            state.error = '';
            state.user = {...state.user, ...action.payload};
            // todo save user
        },
        logInError(state, action: PayloadAction<string>) {
            state.user = null;
            state.loading = false;
            state.error = action.payload;
            // todo remove user
        },
        logOut(state) {
            state.user = null;
            // todo remove
        },
    }
});

export const {startLogIn, logOut, logInSuccess, logInError} = userSlice.actions;
export default userSlice.reducer;

export function useUser(): UserState {
    return useAppSelector(state => state.user);
}

export function useLoggedInUser(): LoggedInUserState {
    const user = useUser();
    if (user.user === null) {
        throw new Error('User reached auth-only component with `user` being null')
    }
    return user as LoggedInUserState;
}