import { red } from "@material-ui/core/colors";

export const styles = (theme: any) => ({
    // bigText: {
    //     position: "relative",
    //     "&:hover": {
           
    //     },
    bgImage: {
        height: 910,
        maxWidth: "100%",
        width: "100%",
        opacity: 1
    },
    media: {
        height: 0,
        paddingTop: "56.25%", // 16:9
        marginTop: -8
    },
    BigPanelMedia: {
        height: 0,
        paddingTop: "56.25%", // 16:9
        marginTop: 12
    },
    actions: {
        display: "flex"
    },
    expand: {
        transform: "rotate(0deg)",
        transition: theme.transitions.create("transform", {
            duration: theme.transitions.duration.shortest
        }),
        marginLeft: "auto"
    },
    expandOpen: {
        transform: "rotate(180deg)"
    },
    avatar: {
        backgroundColor: red[500]
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        marginTop: theme.spacing.unit * 40,
        marginButtom: theme.spacing.unit * 40
    },
    bootstrapRoot: {
        padding: 0,
        "label + &": {
            marginTop: theme.spacing.unit * 3
        },
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        marginTop: theme.spacing.unit * 30,
        marginButtom: theme.spacing.unit * 40
    },
    bootstrapInput: {
        borderRadius: 2,
        backgroundColor: theme.palette.common.white,
        border: "1px solid #ced4da",
        fontSize: 16,
        padding: "10px 12px",
        width: "calc(100% - 24px)",
        transition: theme.transitions.create(["border-color", "box-shadow"]),
        fontFamily: [
            "-apple-system",
            "BlinkMacSystemFont",
            '"Segoe UI"',
            "Roboto",
            '"Helvetica Neue"',
            "Arial",
            "sans-serif",
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"'
        ].join(","),
        "&:focus": {
            borderColor: "#80bdff",
            boxShadow: "0 0 0 0.2rem rgba(0,123,255,.25)"
        }
    },
    bootstrapFormLabel: {
        fontSize: 18
    },
    layout: {
        width: "auto",
        marginLeft: theme.spacing.unit * 3,
        marginRight: theme.spacing.unit * 3,
        [theme.breakpoints.up(900 + theme.spacing.unit * 3 * 2)]: {
            width: 900,
            marginLeft: "auto",
            marginRight: "auto"
        }
    },
    heroContent: {
        maxWidth: 600,
        margin: "0 auto",
        padding: `${theme.spacing.unit * 8}px 0 ${theme.spacing.unit * 6}px`
    },
    cardHeader: {
        backgroundColor: theme.palette.grey[200]
    },
    cardPricing: {
        display: "flex",
        justifyContent: "center",
        alignItems: "baseline",
        marginBottom: theme.spacing.unit * 2
    },
    cardActions: {
        [theme.breakpoints.up("sm")]: {
            paddingBottom: theme.spacing.unit * 2
        }
    }
});
