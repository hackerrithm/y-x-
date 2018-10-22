import * as React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import { styles } from "../ui/Start";
import { compose } from "redux";
import { reduxForm, Field } from "redux-form";
import { Grid, Typography, TextField } from "@material-ui/core";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import RestoreIcon from "@material-ui/icons/Restore";
import FavoriteIcon from "@material-ui/icons/Favorite";
import LocationOnIcon from "@material-ui/icons/LocationOn";

class SubscriptionForm extends React.PureComponent {
    public email: any;
    public textInput: any;
    public constructor(props: any) {
        super(props);

        this.state = {
            emailAddress: ""
        };
    }

    public renderTextField({
        input,
        label,
        meta: { touched, error },
        ...custom
    }: any) {
        return (
            <TextField
                hinttext={label}
                floatinglabeltext={label}
                errortext={touched && error}
                ref={...input}
                onChangeText={input.onChange}
                {...custom}
            />
        );
    }
    public onChange = (event: any): any => {
        this.setState({
            [event.currentTarget.name]: event.currentTarget.value
        } as any);
    };
    public render() {
        const { handleSubmit }: any = this.props;
        return (
            <div className="sunscription-form">
                <form onSubmit={handleSubmit}>
                    <div>
                        <Field
                            name="subscribe"
                            component={this.renderTextField}
                            label="Email Address"
                            placeholder={"enter email address"}
                        />
                    </div>
                    <div>
                        <button type="submit">Submit</button>
                    </div>
                </form>
            </div>
        );
    }
}

class Start extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            emailAddress: "",
            videoURL: [
                "https://d15iertza0f11s.cloudfront.net/app/uploads/2018/08/16110122/SoE_Master_NEWVERSION_HELENA_2.mp4"
            ],
            // videoURL: [
            //     {
            //         u1:
            //             "https://d15iertza0f11s.cloudfront.net/app/uploads/2018/08/16110122/SoE_Master_NEWVERSION_HELENA_2.mp4"
            //     },
            //     {
            //         u1:
            //             "https://d15iertza0f11s.cloudfront.net/app/uploads/2018/05/07140946/ARTE_Webloop2.mp4"
            //     }
            // ]
            // "https://veritystudios.cdn.prismic.io/veritystudios%2F3074e329-d882-4db8-ac02-9dfc40b586dc_drake_website_loop-low.mp4"
            value: 0
        };
    }

    public handleChange = (event: any, value: any) => {
        this.setState({ value });
    };

    public render() {
        const { classes } = this.props;
        const { value } = this.state;
        return (
            <div key={"start-page"} className="container">
                <section>
                    <video id="background-video" loop autoPlay width="100%">
                        <source src={this.state.videoURL} type="video/mp4" />
                        <source src={this.state.videoURL} type="video/ogg" />
                        Your browser does not support the video tag.
          </video>
                </section>
                <section />
                <BigPicture />
                <section />
                <SubscriptionForm />
                <section />
                <section>
                <Grid container={true} alignItems={"center"}>
                    <Grid item={true} sm={4}>
                    </Grid>
                    <Grid item={true} xs={12} sm={4}>
                        <div key={1}>

                        </div>
                        </Grid>
                    <Grid item={true} sm={4}>
                    </Grid>
</Grid>
                </section>
                <section>
                    <BottomNavigation
                        value={value}
                        onChange={this.handleChange}
                        showLabels
                        className={classes.root}
                    >
                        <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
                        <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
                        <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
                    </BottomNavigation>
                </section>
            </div>
        );
    }
}

class BigPicture extends React.Component {
    public render() {
        return (
            <div>
                <Grid container={true} alignItems={"center"}>
                    <Grid item={true} xs={12} sm={12}>
                        <Typography
                            variant="display3"
                            align={"center"}
                            color={"textPrimary"}
                        >
                            Idea
            </Typography>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default compose(
    reduxForm({ form: "Start" }),
    withStyles(styles, { withTheme: true })
)(Start);
