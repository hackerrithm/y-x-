import * as React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import { TextField, Button, Grid } from "@material-ui/core";
import { styles } from "../ui/Login";

interface IPassedProps {
    username: any;
    password: any;
    firstname: any;
    lastname: any;
    authenticate: any;
    classes: any;
    onChange: any;
}

class SignUp extends React.Component<IPassedProps, {}> {
    constructor(props: IPassedProps) {
        super(props);
    }

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
                            action="/auth/signup"
                            method="POST"
                        >
                            <TextField
                                id="firstname"
                                label="Firstname"
                                className={classes.textField}
                                margin="normal"
                                // onKeyDown={this.onKeyDown}
                                // error={this.state.usernameError !== undefined}
                                aria-describedby="firstname-error-text"
                                name="firstname"
                                onChange={this.props.onChange}
                                value={this.props.firstname}
                            />
                            <TextField
                                id="lastname"
                                label="Lastname"
                                className={classes.textField}
                                margin="normal"
                                // onKeyDown={this.onKeyDown}
                                // error={this.state.usernameError !== undefined}
                                aria-describedby="lastname-error-text"
                                name="lastname"
                                onChange={this.props.onChange}
                                value={this.props.lastname}
                            />
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
                                    this.props.firstname === "" ||
                                    this.props.lastname === "" ||
                                    this.props.username === "" ||
                                    this.props.password === ""
                                }
                                onClick={this.props.authenticate}
                            >
                                SignUp
              </Button>
                        </form>
                    </Grid>
                    <Grid item={true} sm={4} />
                </Grid>
            </div>
        );
    }
}

export default withStyles(styles, { withTheme: true })(SignUp);
