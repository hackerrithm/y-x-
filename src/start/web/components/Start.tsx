import * as React from "react";

import { Grid, Typography } from "@material-ui/core";
import withStyles from "@material-ui/core/styles/withStyles";
import { styles } from '../ui/Start';


export interface IProps {
    loading: boolean;
    classNamees: any;
}

export interface IState { }


export default withStyles(styles, { withTheme: true }) (class Start extends React.Component<IProps, IState> {
    public render() {
        return [
            <div key={"start-page"}>
                <section />
                <BigPicture />
                <section />
                <section />
            </div>
        ];
    }
})


class BigPicture extends React.Component {
    public render() {
        return (
            <div>
                <Grid container={true} alignItems={"center"}>
                    <Grid item={true} xs={12} sm={12}>
                        <Typography variant="display3" align={"center"} color={"textPrimary"}>
                            Idea
                        </Typography>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

