import * as React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import { TextField, Button } from "@material-ui/core";
import { RouteComponentProps } from "react-router-dom";
import { connect } from "react-redux";
import authenticate from "../../core/lib/adapter/redux/actions";
import {withRouter} from "react-router-dom";

const styles: any = (theme: any) => ({
    container: {
        display: "flex",
        flexWrap: "wrap"
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 200
    },
    menu: {
        width: 200
    },
    rightIcon: {
        marginLeft: theme.spacing.unit
    }
});

interface IProps extends RouteComponentProps<{}> {
    name: any;
    classes: any;
    theme: any;
    isLoggedIn: any;
    loginHasError: any;
    login: (a: string, b: string) => Promise<any>;
    navigate: any;
}

interface IState {
    username?: string;
    usernameError?: string;
    password?: string;
    passwordError?: string;
    credentialsError?: string;
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        login: (username: string, password: string) =>
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

class Login extends React.Component<IProps, IState> {
    public constructor(props: IProps) {
        super(props);

        this.state = {
            username: "",
            usernameError: undefined,
            password: "",
            passwordError: undefined,
            credentialsError: undefined
        };
        this.login = this.login.bind(this);
    }

    public componentDidUpdate() {
        if (this.props.isLoggedIn) {
            this.props.history.push("/home");
        }
        if (this.props.loginHasError) {
            this.props.history.push("/");
        }
    }

    public login = async (): Promise<any> => {
        await this.props.login(
            this.state.username as string,
            this.state.password as string
        );
    };

    public onChange = (event: any): any => {
        this.validate();
        this.setState({
            [event.currentTarget.name]: event.currentTarget.value
        } as any);
    };

    public validate = (): any => {
        if (!this.state.username || this.state.username.length < 3) {
            this.setState({
                usernameError: "Username is too short"
            });
        } else {
            this.setState({
                usernameError: undefined
            });
        }

        if (!this.state.password || this.state.password.length < 3) {
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
        const { classes } = this.props;
        return (
            <div>
                <form
                    className={classes.container}
                    noValidate={true}
                    autoComplete="off"
                    action="/auth/login"
                    method="POST"
                >
                    <TextField
                        id="username"
                        label="Username"
                        className={classes.textField}
                        margin="normal"
                        error={this.state.usernameError !== undefined}
                        aria-describedby="username-error-text"
                        name="username"
                        onChange={this.onChange}
                        value={this.state.username}
                    />
                    <TextField
                        id="password"
                        label="Password"
                        className={classes.textField}
                        margin="normal"
                        error={this.state.passwordError !== undefined}
                        aria-describedby="password-error-text"
                        name="password"
                        type="password"
                        onChange={this.onChange}
                        value={this.state.password}
                    />
                    <Button
                        variant="contained"
                        color="primary"
                        className={classes.button}
                        onClick={this.login}
                    >
                        Login
          </Button>
                </form>
            </div>
        );
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withStyles(styles, { withTheme: true })(withRouter (Login)));
