import red from "@material-ui/core/colors/red";

export const styles: any = (theme: any) => ({
        root: {
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "space-around",
                overflow: "hidden",
                backgroundColor: theme.palette.background.paper
        },
        card: {
                maxWidth: 400
        },
        media: {
                height: 0,
                paddingTop: "56.25%", // 16:9,
                marginTop: "30"
        },
        actions: {
                display: "flex"
        },
        expand: {
                transform: "rotate(0deg)",
                transition: theme.transitions.create("transform", {
                        duration: theme.transitions.duration.shortest
                }),
                marginLeft: "auto",
                [theme.breakpoints.up("sm")]: {
                        marginRight: -8
                }
        },
        expandOpen: {
                transform: "rotate(180deg)"
        },
        avatar: {
                backgroundColor: red[500]
        },
        gridList: {
                flexWrap: "nowrap",
                // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
                transform: "translateZ(0)"
        },
        title: {
                color: theme.palette.primary.light
        },
        titleBar: {
                background:
                        "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)"
        }
});
