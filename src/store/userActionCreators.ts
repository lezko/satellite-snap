import {AppDispatch} from 'store/index';
import {logInError, logInSuccess, startLogIn} from 'store/userSlice';
import axios from 'axios';
import {ApiUrl} from 'api/ApiUrl';

// todo proper exception handling
export function logIn(login: string, password: string) {
    return async function (dispatch: AppDispatch) {
        try {
            dispatch(startLogIn());
            const response = await axios.post(ApiUrl.login(), JSON.stringify({login, password}));
            response.data.id = +response.data.id;
            dispatch(logInSuccess(response.data));
        } catch (e: unknown) {
            if (axios.isAxiosError(e)) {
                dispatch(logInError(e.response?.data.message || 'Server is not responding'));
            } else {
                dispatch(logInError(String(e)));
            }
        }
    };
}

export function verifyUser() {
    return async function (dispatch: AppDispatch) {
        try {
            const response = await axios.get(ApiUrl.me);
            dispatch(logInSuccess(response.data));
        } catch (e: unknown) {
            console.error(e);
            dispatch(logInError(''));
            // todo display message in case of server error
        }
    };
}