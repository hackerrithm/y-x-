import {
    AppBar,
    Button,
    IconButton,
    Toolbar,
    Typography
} from "@material-ui/core";
import withStyles from "@material-ui/core/styles/withStyles";
import { default as MenuIcon } from "@material-ui/icons/Menu";
import { NavLink } from "react-router-dom";

import * as React from "react";
import { styles } from "../ui/Navbar";
import { connect } from "react-redux";

export interface IProps {
    classes: any;
    isLoggedIn: any;
}

export interface IState {
    isAuthenticated: boolean;
}

const mapStateToProps = (state: any) => {
    return {
        isLoggedIn: state.authenticationReducer.isLoggedIn,
    };
};

class Navbar extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);

        this.state = {
            isAuthenticated: false
        }

        this.logout = this.logout.bind(this);
    }

    public async componentDidMount() {
        await this.checkAuthenticationStatus();
    }

    public checkAuthenticationStatus() {
        if (
			localStorage.getItem("token") !== null ||
			localStorage.getItem("token") !== undefined
		) {
			this.setState({
				isAuthenticated: true
			});
        }
        // $(window).on('storage',() => {
        //     if(localStorage.getItem('access-token')) {
        //       this.setState({isAuthenticated: true})
        //     }
        //  });
    }

    public logout() {
		localStorage.setItem("token", "");
		localStorage.clear();
		this.setState({
			isAuthenticated: false
		});
	}

    public render() {
        const { classes } = this.props;
        return (
            <div className="navbar">
                <AppBar position="static">
                    <Toolbar>
                        <IconButton
                            className={classes.menuButton}
                            color="inherit"
                            aria-label="Menu"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography
                            variant="title"
                            color="inherit"
                            className={classes.flex}
                        >
                            <NavLink
                                style={{ textDecoration: "none", color: "blue" }}
                                activeClassName="active"
                                to="/"
                            >
                                Hexerent
              </NavLink>
                        </Typography>
                        {this.state.isAuthenticated && (
                            <NavLink
                                style={{ textDecoration: "none", color: "white" }}
                                to="/tools"
                            >
                                <Button
                                    style={{ textDecoration: "none", color: "blue" }}
                                    color="secondary"
                                >
                                    Tools
                </Button>
                            </NavLink>
                        )}
                        <NavLink
                            style={{ textDecoration: "none", color: "blue" }}
                            to="/about"
                        >
                            <Button color="inherit">About</Button>
                        </NavLink>
                        {!this.state.isAuthenticated && (
                            <NavLink
                                style={{ textDecoration: "none", color: "blue" }}
                                to="/login"
                            >
                                <Button
                                    style={{ textDecoration: "none", color: "blue" }}
                                    color="secondary"
                                >
                                    Login
                </Button>
                            </NavLink>
                        )}
                        {!this.state.isAuthenticated && (
                            <NavLink
                                style={{ textDecoration: "none", color: "blue" }}
                                to="/signup"
                            >
                                <Button
                                    style={{ textDecoration: "none", color: "blue" }}
                                    color="secondary"
                                >
                                    Sign Up
                </Button>
                            </NavLink>
                        )}
                        {this.state.isAuthenticated && (
                            <NavLink
                                style={{ textDecoration: "none", color: "blue" }}
                                to="/"
                            >
                                <Button
                                    style={{ textDecoration: "none", color: "blue" }}
                                    color="secondary"
                                    onClick={this.logout}
                                >
                                    Logout
                </Button>
                            </NavLink>
                        )}
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}

export default connect(
    mapStateToProps,
    null
)(withStyles(styles, { withTheme: true })(Navbar));
