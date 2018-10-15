import spacing from "@material-ui/core/styles/spacing";

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
    }
});