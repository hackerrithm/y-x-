import * as React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import {
        TextField,
        Button,
        Grid,
        FormControl,
        FormControlLabel,
        Checkbox,
        Paper,
        Avatar,
        Typography
} from "@material-ui/core";
import LockIcon from "@material-ui/icons/LockOutlined";
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
                                        <Grid item={true} sm={2} />
                                        <Grid item={true} xs={12} sm={8}>
                                                <Paper className={classes.paper}>
                                                        <Avatar className={classes.avatar}>
                                                                <LockIcon />
                                                        </Avatar>
                                                        <Typography component="h1" variant="h5">
                                                                Sign up
              </Typography>
                                                        <form
                                                                className={classes.form}
                                                                noValidate={true}
                                                                autoComplete="off"
                                                                action="/auth/signup"
                                                                method="POST"
                                                        >
                                                                <FormControl margin="normal" required={true} fullWidth={true}>
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
                                                                </FormControl>
                                                                <FormControl margin="normal" required={true} fullWidth={true}>
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
                                                                </FormControl>
                                                                <FormControl margin="normal" required={true} fullWidth={true}>
                                                                        <TextField
                                                                                id="username"
                                                                                label="Username"
                                                                                className={classes.textField}
                                                                                margin="normal"
                                                                                aria-describedby="username-error-text"
                                                                                name="username"
                                                                                onChange={this.props.onChange}
                                                                                value={this.props.username}
                                                                        />
                                                                </FormControl>
                                                                <FormControl margin="normal" required={true} fullWidth={true}>
                                                                        <TextField
                                                                                id="password"
                                                                                label="Password"
                                                                                className={classes.textField}
                                                                                margin="normal"
                                                                                aria-describedby="password-error-text"
                                                                                name="password"
                                                                                type="password"
                                                                                onChange={this.props.onChange}
                                                                                value={this.props.password}
                                                                        />
                                                                </FormControl>
                                                                <FormControlLabel
                                                                        control={<Checkbox value="remember" color="primary" />}
                                                                        label="Remember me"
                                                                />
                                                                <Button
                                                                        fullWidth={true}
                                                                        color="primary"
                                                                        className={classes.submit}
                                                                        variant="contained"
                                                                        disabled={
                                                                                this.props.firstname === "" ||
                                                                                this.props.lastname === "" ||
                                                                                this.props.username === "" ||
                                                                                this.props.password === ""
                                                                        }
                                                                        onClick={this.props.authenticate}
                                                                >
                                                                        Sign up
                </Button>
                                                        </form>
                                                </Paper>
                                        </Grid>
                                        <Grid item={true} sm={2} />
                                </Grid>
                        </div>
                );
        }
}

export default withStyles(styles, { withTheme: true })(SignUp);
