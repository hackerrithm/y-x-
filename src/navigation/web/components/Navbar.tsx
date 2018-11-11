import {
    AppBar,
    Button,
    IconButton,
    Toolbar,
    Typography,
    Menu,
    MenuItem
} from "@material-ui/core";
import withStyles from "@material-ui/core/styles/withStyles";
import { default as MenuIcon } from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";
import AccountCircle from "@material-ui/icons/AccountCircle";
import { NavLink } from "react-router-dom";

import * as React from "react";
import { styles } from "../ui/Navbar";
import { connect } from "react-redux";
import * as classNames from "classnames";

export interface IProps {
    readonly classes: any;
    readonly isLoggedIn: any;
}

export interface IState {
    isAuthenticated: boolean;
    open: boolean;
    anchorEl: any;
}

const mapStateToProps = (state: any) => {
    return {
        isLoggedIn: state.authenticationReducer.isLoggedIn
    };
};

class Navbar extends React.Component<IProps, IState> {
    public constructor(props: IProps) {
        super(props);

        this.state = {
            isAuthenticated: false,
            open: true,
            anchorEl: null
        };

        this.logout = this.logout.bind(this);
    }

    public async componentDidMount() {
        await this.checkAuthenticationStatus();
    }

    public checkAuthenticationStatus() {
        if (
            localStorage.getItem("user") !== null &&
            localStorage.getItem("user") !== undefined &&
            localStorage.getItem("user")
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
        localStorage.setItem("user", "");
        localStorage.clear();
        this.setState({
            isAuthenticated: false
        });
    }

    public handleDrawerOpen = () => {
        this.setState({ open: true });
    };

    public handleDrawerClose = () => {
        this.setState({ open: false });
    };

    public handleMenu = (event: any) => {
        this.setState({ anchorEl: event.currentTarget });
    };

    public handleClose = () => {
        this.setState({ anchorEl: null });
    };

    public render() {
        const { classes } = this.props;
        const { anchorEl } = this.state;
        const open = Boolean(anchorEl);

        return (
                <div className="navbar">
                    <AppBar position="static">
                        <Toolbar
                            variant="dense"
                            disableGutters={!this.state.open}
                            className={classes.toolbar}
                        >
                            {/* <IconButton
                            className={classes.menuButton}
                            color="inherit"
                            aria-label="Menu"
                        >
                            <MenuIcon />
                        </IconButton> */}
                            <IconButton
                                color="inherit"
                                aria-label="Open drawer"
                                onClick={this.handleDrawerOpen}
                                className={classNames(
                                    classes.menuButton,
                                    this.state.open && classes.menuButtonHidden
                                )}
                            >
                                <MenuIcon />
                            </IconButton>

                            {!this.state.isAuthenticated && (
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
                                        [xy|z]
                  </NavLink>
                                </Typography>
                            )}
                            {this.state.isAuthenticated && (
                                <Typography
                                    variant="title"
                                    color="inherit"
                                    className={classes.flex}
                                >
                                    <NavLink
                                        style={{ textDecoration: "none", color: "blue" }}
                                        activeClassName="active"
                                        to="/home"
                                    >
                                        [xy|z]
                  </NavLink>
                                </Typography>
                            )}
                            <div className={classes.grow} />
                            <div className={classes.search}>
                                <div className={classes.searchIcon}>
                                    <SearchIcon />
                                </div>
                                <InputBase
                                    placeholder="Search…"
                                    classes={{
                                        root: classes.inputRoot,
                                        input: classes.inputInput
                                    }}
                                />
                            </div>
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
                            {!this.state.isAuthenticated && (
                                <NavLink
                                    style={{ textDecoration: "none", color: "blue" }}
                                    to="/login"
                                >
                                    <Button
                                        style={{ textDecoration: "none", color: "blue" }}
                                        color="secondary"
                                        variant="outlined"
                                    >
                                        Login
                  </Button>
                                </NavLink>
                            )}
                            {this.state.isAuthenticated && (
                                <div>
                                    <IconButton
                                        aria-owns={open ? "menu-appbar" : undefined}
                                        aria-haspopup="true"
                                        onClick={this.handleMenu}
                                        color="inherit"
                                    >
                                        <AccountCircle />
                                    </IconButton>
                                    <Menu
                                        id="menu-appbar"
                                        anchorEl={anchorEl}
                                        anchorOrigin={{
                                            vertical: "top",
                                            horizontal: "right"
                                        }}
                                        transformOrigin={{
                                            vertical: "top",
                                            horizontal: "right"
                                        }}
                                        open={open}
                                        onClose={this.handleClose}
                                    >
                                        <MenuItem onClick={this.handleClose}>
                                            <NavLink
                                                style={{ textDecoration: "none", color: "white" }}
                                                to="/dashboard"
                                            >
                                                <Button
                                                    style={{ textDecoration: "none", color: "blue" }}
                                                    color="secondary"
                                                >
                                                    Dashboard
                        </Button>
                                            </NavLink>
                                        </MenuItem>
                                        <MenuItem onClick={this.handleClose}>
                                            <NavLink
                                                style={{ textDecoration: "none", color: "white" }}
                                                to="/settings"
                                            >
                                                <Button
                                                    style={{ textDecoration: "none", color: "blue" }}
                                                    color="secondary"
                                                >
                                                    Settings
                        </Button>
                                            </NavLink>
                                        </MenuItem>
                                        <MenuItem onClick={this.handleClose}>
                                            <NavLink
                                                style={{ textDecoration: "none", color: "white" }}
                                                to="/profile"
                                            >
                                                <Button
                                                    style={{ textDecoration: "none", color: "blue" }}
                                                    color="secondary"
                                                >
                                                    Profile
                        </Button>
                                            </NavLink>
                                        </MenuItem>
                                        <MenuItem onClick={this.handleClose}>
                                            <NavLink
                                                style={{ textDecoration: "none", color: "blue" }}
                                                to="/about"
                                            >
                                                <Button color="inherit">About</Button>
                                            </NavLink>
                                        </MenuItem>
                                        <MenuItem onClick={this.handleClose}>
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
                                        </MenuItem>
                                    </Menu>
                                </div>
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
)(withStyles(styles as any, { withTheme: true })(Navbar));
