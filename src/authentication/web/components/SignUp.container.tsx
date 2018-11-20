import { connect } from "react-redux";
import authenticate from "../../core/lib/adapter/redux/actions";
import * as React from "react";
import { IProps, IState } from "./types";
import { withRouter } from "react-router-dom";
import { log } from "util";
import SignUp from "./SignUp";

class SignUpContainer extends React.Component<IProps, IState> {
        public firstname: string = "";
        public lastname: string = "";
        public username: string = "";
        public password: string = "";

        public constructor(props: IProps) {
                super(props);

                this.state = {
                        firstname: undefined,
                        firstnameError: undefined,
                        lastname: undefined,
                        lastnameError: undefined,
                        username: undefined,
                        usernameError: undefined,
                        password: undefined,
                        passwordError: undefined,
                        credentialsError: undefined
                };
                this.signup = this.signup.bind(this);
        }

        public componentDidUpdate() {
                if (this.props.isLoggedIn) {
                        this.props.history.push("/home");
                        window.location.reload();
                } else if (this.props.loginHasError) {
                        this.props.history.push("/");
                }
        }

        public signup = async () => {
                await this.props.signup(
                        this.state.username as string,
                        this.state.password as string,
                        this.state.firstname as string,
                        this.state.lastname as string
                );
        };

        public onChange = (event?: any): any => {
                this.validate();
                this.setState({
                        [event.currentTarget.name]: event.currentTarget.value
                } as any);
                log(event.currentTarget.name + " changed here");
                if (event.currentTarget.name === "username") {
                        this.username = event.currentTarget.value;
                } else if (event.currentTarget.name === "password") {
                        this.password = event.currentTarget.value;
                } else if (event.currentTarget.name === "firstname") {
                        this.firstname = event.currentTarget.value;
                } else if (event.currentTarget.name === "lastname") {
                        this.lastname = event.currentTarget.value;
                }
        };

        public validate = (): void => {
                if (
                        !this.state.username ||
                        this.state.username.length < 3 ||
                        !localStorage.getItem("user")
                ) {
                        this.setState({
                                usernameError: "Username is too short"
                        });
                } else {
                        this.setState({
                                usernameError: undefined
                        });
                }

                if (
                        !this.state.password ||
                        this.state.password.length < 3 ||
                        !localStorage.getItem("user")
                ) {
                        this.setState({
                                passwordError: "Password is too short"
                        });
                } else {
                        this.setState({
                                passwordError: undefined
                        });
                }
        };

        public render() {
                return (
                        <SignUp
                                authenticate={this.signup}
                                classes={this.props.classes}
                                onChange={this.onChange}
                                firstname={this.firstname}
                                lastname={this.lastname}
                                username={this.username}
                                password={this.password}
                        />
                );
        }
}

const mapDispatchToProps = (dispatch: any) => {
        return {
                signup: (username: any, password: any, firstname: any, lastname: any) =>
                        dispatch(authenticate.signup(username, password, firstname, lastname))
        };
};

const mapStateToProps = (state: any) => {
        return {
                username: state.authenticationReducer.username,
                password: state.authenticationReducer.password,
                firstname: state.authenticationReducer.firstname,
                lastname: state.authenticationReducer.lastname,
                isLoggedIn: state.authenticationReducer.isLoggedIn,
                hasError: state.authenticationReducer.hasError,
                isLoginLoading: state.authenticationReducer.isLoading
        };
};

export default connect(
        mapStateToProps,
        mapDispatchToProps
)(withRouter(SignUpContainer));
