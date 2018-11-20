import { connect } from "react-redux";
import authenticate from "../../core/lib/adapter/redux/actions";
import Login from "./Login";
import * as React from "react";
import { IProps, IState } from "./types";
import { withRouter } from "react-router-dom";
import { log } from "util";
class LoginContainer extends React.Component<IProps, IState> {
        public username: string = "";
        public password: string = "";

        public constructor(props: IProps) {
                super(props);

                this.state = {
                        username: undefined,
                        usernameError: undefined,
                        password: undefined,
                        passwordError: undefined,
                        credentialsError: undefined
                };
                this.login = this.login.bind(this);
        }

        public componentDidUpdate() {
                if (this.props.isLoggedIn) {
                        this.props.history.push("/home");
                        window.location.reload();
                } else if (this.props.loginHasError) {
                        this.props.history.push("/");
                }
        }

        public login = async () => {
                await this.props.login(
                        this.state.username as string,
                        this.state.password as string
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
                } else {
                        this.password = event.currentTarget.value;
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
                        <Login
                                authenticate={this.login}
                                classes={this.props.classes}
                                onChange={this.onChange}
                                username={this.username}
                                password={this.password}
                        />
                );
        }
}

const mapDispatchToProps = (dispatch: any) => {
        return {
                login: (username: any, password: any) =>
                        dispatch(authenticate.login(username, password))
        };
};

const mapStateToProps = (state: any) => {
        return {
                username: state.authenticationReducer.username,
                password: state.authenticationReducer.password,
                isLoggedIn: state.authenticationReducer.isLoggedIn,
                hasError: state.authenticationReducer.hasError,
                isLoginLoading: state.authenticationReducer.isLoading
        };
};

export default connect(
        mapStateToProps,
        mapDispatchToProps
)(withRouter(LoginContainer));
