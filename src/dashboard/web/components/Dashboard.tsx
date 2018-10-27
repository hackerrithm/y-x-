import * as React from "react";
import DrawerSidebar from "src/navigation/web/components/DrawerSidebar";
import { Typography, withStyles } from "@material-ui/core";
import SimpleLineChart from "./LineChart";
import { styles } from "../ui/Dashboard";

class Dashboard extends React.Component<any, any> {
    public render() {
        const { classes } = this.props;
        return (
            <div>
                <DrawerSidebar />
                <main className={classes.content}>
                    <div className={classes.appBarSpacer} />
                    <Typography variant="h4" gutterBottom={true} component="h2">
                        Orders
          </Typography>
                    <Typography component="div" className={classes.chartContainer}>
                        <SimpleLineChart />
                    </Typography>
                    <Typography variant="h4" gutterBottom={true} component="h2">
                        Products
          </Typography>
                    <div className={classes.tableContainer}>{/* <SimpleTable /> */}</div>
                </main>
            </div>
        );
    }
}

export default withStyles(styles, { withTheme: true })(Dashboard);
