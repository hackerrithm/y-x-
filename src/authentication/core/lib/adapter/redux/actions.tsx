import * as ActionTypes from "./types";
import { userService } from "../../service/authentication";

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

const login = (username: string, password: string): any => {
    return (dispatch: any) => {
        dispatch(loginIsLoading(true));

        if (!username || !password) {
            dispatch(loginHasError(true));
            dispatch(loginIsLoading(false));

            return;
        }

        userService
            .login(username, password)
            .then((res: any) => {
                dispatch(isLoggedIn(true));
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
