import * as React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import {
        TextField,
        Button,
        Grid,
        Paper,
        Avatar,
        Typography,
        FormControl,
        // InputLabel,
        // Input,
        FormControlLabel,
        Checkbox
} from "@material-ui/core";
import LockIcon from "@material-ui/icons/LockOutlined";
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
                                                <Paper className={classes.paper}>
                                                        <Avatar className={classes.avatar}>
                                                                <LockIcon />
                                                        </Avatar>
                                                        <Typography component="h1" variant="h5">
                                                                Sign in
              </Typography>
                                                        <form
                                                                className={classes.form}
                                                                noValidate={true}
                                                                autoComplete="off"
                                                                action="/auth/login"
                                                                method="POST"
                                                        >
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
                                                                                this.props.username === "" || this.props.password === ""
                                                                        }
                                                                        onClick={this.props.authenticate}
                                                                >
                                                                        Sign in
                </Button>
                                                        </form>
                                                </Paper>
                                        </Grid>
                                        <Grid item={true} sm={4} />
                                </Grid>
                        </div>
                );
        }
}

export default withStyles(styles, { withTheme: true })(Login);
