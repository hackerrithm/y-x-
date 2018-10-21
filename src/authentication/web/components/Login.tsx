import * as React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import { TextField, Button } from "@material-ui/core";

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

interface IPassedProps {
    username: any;
    password: any;
    authenticate: any;
    classes: any;
    onChange: any;
}

class Login extends React.Component<IPassedProps, {}> {
    constructor(props: IPassedProps) {
        super(props)
    }
    
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
                        // error={this.state.usernameError !== undefined}
                        aria-describedby="username-error-text"
                        name="username"
                        onChange={this.props.onChange}
                        value={this.props.username}
                    />
                    <TextField
                        id="password"
                        label="Password"
                        className={classes.textField}
                        margin="normal"
                        // error={this.state.passwordError !== undefined}
                        aria-describedby="password-error-text"
                        name="password"
                        type="password"
                        onChange={this.props.onChange}
                        value={this.props.password}
                    />
                    <Button
                        variant="contained"
                        color="primary"
                        className={classes.button}
                        onClick={this.props.authenticate}
                    >
                        Login
          </Button>
                </form>
            </div>
        );
    }
}

export default (withStyles(styles, { withTheme: true })(Login));
