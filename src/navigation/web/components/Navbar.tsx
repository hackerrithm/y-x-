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


export interface INavbarProps {
    classes: any;
}

export default withStyles(styles, { withTheme: true }) (class Navbar extends React.Component<INavbarProps> {
    constructor(props: INavbarProps) {
        super(props);
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
                            color="secondary"
                            className={classes.flex}
                        >
                            <NavLink
                                style={{ textDecoration: "none", color: "red" }}
                                activeClassName="active"
                                to="/"
                            >
                                <Button
                                    style={{ textDecoration: "none", color: "blue" }}
                                    color="secondary"
                                >
                                    

                                </Button>
                            </NavLink>
                        </Typography>
                        <NavLink
                            style={{ textDecoration: "none", color: "red" }}
                            to="/dashboard"
                        >
                            <Button
                                style={{ textDecoration: "none", color: "blue" }}
                                color="secondary"
                            >
                              
                            </Button>
                        </NavLink>
                        <NavLink
                            style={{ textDecoration: "none", color: "red" }}
                            to="/blog"
                        >
                            <Button
                                style={{ textDecoration: "none", color: "blue" }}
                                color="secondary"
                            >
                               
                            </Button>
                        </NavLink>
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
})
