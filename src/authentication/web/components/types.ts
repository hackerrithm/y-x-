import { RouteComponentProps } from "react-router-dom";

export interface IDefaultProps extends RouteComponentProps<{}> {
        navigate: any;
        history: any;
        classes: any;
        theme: any;
}

// these are all the required props
export interface IProps extends IDefaultProps {
        id: string;
        isLoggedIn: any;
        loginHasError: any;
        login: (a: any, b: any) => Promise<any>;
        signup: (a: any, b: any, c: any, d: any) => Promise<any>;
}

export interface IState {
        firstname?: string;
        firstnameError?: string;
        lastname?: string;
        lastnameError?: string;
        username?: string;
        usernameError?: string;
        password?: string;
        passwordError?: string;
        credentialsError?: string;
}

// Container

export type StateProps = Pick<
        IProps,
        "history" | "navigate" | "theme" | "classes" | "isLoggedIn" | "loginHasError"
        >;
export type OwnProps = Pick<IProps, "id">;
export type DispatchProps = Pick<IProps, "login" | "signup">;
