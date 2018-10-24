import * as React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import { TextField, Button, Grid } from "@material-ui/core";
import { styles } from "../ui/Login";

interface IPassedProps {
    username: any;
    password: any;
    authenticate: any;
    classes: any;
    onChange: any;
}

class Login extends React.Component<IPassedProps, {}> {
    constructor(props: IPassedProps) {
        super(props);
    }

    // private onKeyDown = (event: React.KeyboardEvent) => {
    //     if (event.key === "Enter") {
    //         if (this.props.username !== "" && this.props.password !== "") {
    //             () => {this.props.authenticate; }
    //         } else if (this.props.username === "") {
    //             this.props.username.focus();
    //         } else if (this.props.password === "") {
    //             this.props.password.focus();
    //         }
    //     }
    // };

    public render() {
        const { classes } = this.props;
        return (
            <div>
                <Grid container={true} alignItems={"center"}>
                    <Grid item={true} sm={4} />
                    <Grid item={true} xs={12} sm={4}>
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
                                // onKeyDown={this.onKeyDown}
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
                                // onKeyDown={this.onKeyDown}
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
                                disabled={
                                    this.props.username === "" || this.props.password === ""
                                }
                                onClick={this.props.authenticate}
                            >
                                Login
              </Button>
                        </form>
                    </Grid>
                    <Grid item={true} sm={4} />
                </Grid>
            </div>
        );
    }
}

export default withStyles(styles, { withTheme: true })(Login);
