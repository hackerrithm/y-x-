import * as ActionTypes from "./types";

const initialState = {
    isLoggedIn: false,
    hasError: false,
    isLoading: false,
    username: "",
    password: "",
    firstname: "",
    lastname: ""
};

export default function (state = initialState, action: any) {
    const { type, payload } = action;

    switch (type) {
        case ActionTypes.IS_LOGGED_IN:
            return Object.assign({}, state, {
                isLoggedIn: action.isLoggedIn
            });
        case ActionTypes.LOGIN_HAS_ERROR:
            return Object.assign({}, state, {
                hasError: action.hasError
            });
        case ActionTypes.LOGIN_IS_LOADING:
            return Object.assign({}, state, {
                isLoading: action.isLoading
            });
        case ActionTypes.LOGIN:
            return Object.assign({}, state, {
                isLoggedIn: false,
                username: payload.username,
                password: payload.password
            });
        case ActionTypes.SIGNUP:
            return Object.assign({}, state, {
                isLoggedIn: false,
                username: payload.username,
                password: payload.password,
                firstname: payload.firstname,
                lastname: payload.lastname
            });
        case ActionTypes.LOGOUT:
            return Object.assign({}, state, {
                isLoggedIn: false,
                firstname: "",
                lastname: "",
                username: "",
                password: ""
            });
        default:
            return state;
    }
}
