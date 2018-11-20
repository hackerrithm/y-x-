import { IconButton, Divider, List, Drawer } from "@material-ui/core";
import withStyles from "@material-ui/core/styles/withStyles";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import * as React from "react";
import { styles } from "../ui/Navbar";
import { connect } from "react-redux";
import * as classNames from "classnames";
import { mainListItems, secondaryListItems } from "./ListItems";

export interface IPropsSidebar {
        readonly classes: any;
        readonly isLoggedIn: any;
}

export interface IStateSidebar {
        isAuthenticated: boolean;
        open: boolean;
}

const mapStateToProps = (state: any) => {
        return {
                isLoggedIn: state.authenticationReducer.isLoggedIn
        };
};

class DrawerSidebar extends React.Component<IPropsSidebar, IStateSidebar> {
        public constructor(props: IPropsSidebar) {
                super(props);

                this.state = {
                        isAuthenticated: false,
                        open: true
                };
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
        }

        public handleDrawerOpen = () => {
                this.setState({ open: true });
        };

        public handleDrawerClose = () => {
                this.setState({ open: false });
        };

        public render() {
                const { classes } = this.props;
                return (
                        <React.Fragment>
                                <div className="sidebar">
                                        {this.state.isAuthenticated && (
                                                <Drawer
                                                        variant="permanent"
                                                        classes={{
                                                                paper: classNames(
                                                                        classes.drawerPaper,
                                                                        !this.state.open && classes.drawerPaperClose
                                                                )
                                                        }}
                                                        open={this.state.open}
                                                >
                                                        <div className={classes.toolbarIcon}>
                                                                <IconButton onClick={this.handleDrawerClose}>
                                                                        <ChevronLeftIcon />
                                                                </IconButton>
                                                        </div>
                                                        <Divider />
                                                        <List>{mainListItems}</List>
                                                        <Divider />
                                                        <List>{secondaryListItems}</List>
                                                </Drawer>
                                        )}
                                </div>
                        </React.Fragment>
                );
        }
}

export default connect(
        mapStateToProps,
        null
)(withStyles(styles as any, { withTheme: true })(DrawerSidebar));
