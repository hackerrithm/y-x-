import spacing from "@material-ui/core/styles/spacing";
import { fade } from "@material-ui/core/styles/colorManipulator";

export const styles = (theme: any) => ({
    flex: {
        flex: 1
    },
    header: {
        alignItems: "center",
        backgroundColor: theme.palette.background.default,
        display: "flex",
        height: 50,
        marginBottom: 20,
        paddingLeft: spacing.unit * 4
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 200
    },
    root: {
        flexGrow: 1
    },
    search: {
        position: "relative",
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        "&:hover": {
            backgroundColor: fade(theme.palette.common.white, 0.25)
        },
        marginLeft: 0,
        width: "100%",
        [theme.breakpoints.up("sm")]: {
            marginLeft: theme.spacing.unit,
            width: "auto"
        }
    },
    searchIcon: {
        width: theme.spacing.unit * 9,
        height: "100%",
        position: "absolute",
        pointerEvents: "none",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },
    inputRoot: {
        color: "inherit",
        width: "100%"
    },
    inputInput: {
        paddingTop: theme.spacing.unit,
        paddingRight: theme.spacing.unit,
        paddingBottom: theme.spacing.unit,
        paddingLeft: theme.spacing.unit * 10,
        transition: theme.transitions.create("width"),
        width: "100%",
        [theme.breakpoints.up("sm")]: {
            width: 120,
            "&:focus": {
                width: 800
            }
        }
    }
});
