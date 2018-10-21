import * as ActionTypes from "./types";
import { Authentication } from "../../service/authentication";

const isLoggedIn = (bool: any) => {
    return {
        type: ActionTypes.IS_LOGGED_IN,
        isLoggedIn: bool
    };
};

const loginHasError = (bool: any) => {
    return {
        type: ActionTypes.LOGIN_HAS_ERROR,
        hasError: bool
    };
};

const loginIsLoading = (bool: any) => {
    return {
        type: ActionTypes.LOGIN_IS_LOADING,
        isLoading: bool
    };
};

const login = (username: any, password: any): any => {
    return async (dispatch: any) => {
        dispatch(loginIsLoading(true));

        if (!username || !password) {
            dispatch(loginHasError(true));
            dispatch(loginIsLoading(false));

            return;
        }

        Authentication.login(username, password)
            .then((res: any) => {
                if (res.data !== null && res.data !== undefined && res.data != null) {
                    localStorage.setItem("token", res.data);
                    dispatch(isLoggedIn(true));
                }
                dispatch(isLoggedIn(false));
            })
            .catch((e: any) => {
                dispatch(loginHasError(true));
                Error("An error occurred while loading image. error code:" + e);
            });
    };
};

const logout = () => {
    localStorage.removeItem("token");
    return {
        type: ActionTypes.LOGOUT
    };
};

export default {
    login,
    isLoggedIn,
    loginHasError,
    loginIsLoading,
    logout
};
