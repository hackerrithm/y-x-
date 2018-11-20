import * as ActionTypes from "./types";
import { Authentication } from "../../service/authentication";
import { log } from "util";

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
                                        localStorage.setItem("user", JSON.stringify(res.data));
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

const signup = (
        username: any,
        password: any,
        firtsname: any,
        lastname: any
): any => {
        return async (dispatch: any) => {
                dispatch(loginIsLoading(true));

                if (!username || !password || !firtsname || !lastname) {
                        dispatch(loginHasError(true));
                        dispatch(loginIsLoading(false));

                        return;
                }

                Authentication.signup(username, password, firtsname, lastname)
                        .then((res: any) => {
                                if (res.data !== null && res.data !== undefined && res.data != null) {
                                        log("sign up called");
                                        localStorage.setItem("user", JSON.stringify(res.data));
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
        localStorage.removeItem("user");
        return {
                type: ActionTypes.LOGOUT
        };
};

export default {
        login,
        signup,
        isLoggedIn,
        loginHasError,
        loginIsLoading,
        logout
};
