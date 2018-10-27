import * as React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import { styles } from "../ui/Start";
import { compose } from "redux";
import { reduxForm, Field } from "redux-form";
import {
    Grid,
    Typography,
    TextField,
    Card,
    CardHeader,
    CardContent,
    CardActions,
    Button
} from "@material-ui/core";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import RestoreIcon from "@material-ui/icons/Restore";
import FavoriteIcon from "@material-ui/icons/Favorite";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import StarIcon from "@material-ui/icons/StarBorder";
import SignUpContainer from "src/authentication/web/components/SignUp.container";
import '../ui/stylesheets/start.css';

const tiers = [
    {
        title: "Free",
        price: "0",
        description: [
            "10 users included",
            "2 GB of storage",
            "Help center access",
            "Email support"
        ],
        buttonText: "Sign up for free",
        buttonVariant: "outlined"
    },
    {
        title: "Pro",
        subheader: "Most popular",
        price: "15",
        description: [
            "20 users included",
            "10 GB of storage",
            "Help center access",
            "Priority email support"
        ],
        buttonText: "Get started",
        buttonVariant: "contained"
    },
    {
        title: "Enterprise",
        price: "30",
        description: [
            "50 users included",
            "30 GB of storage",
            "Help center access",
            "Phone & email support"
        ],
        buttonText: "Contact us",
        buttonVariant: "outlined"
    }
];

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

class Pricing extends React.Component<any, any> {
    public render() {
        const { classes } = this.props;
        return (
            <div>
                <main className={classes.layout}>
                    {/* Hero unit */}
                    <div className={classes.heroContent}>
                        <Typography
                            component="h1"
                            variant="h2"
                            align="center"
                            color="textPrimary"
                            gutterBottom
                        >
                            Pricing
            </Typography>
                        <Typography
                            variant="h6"
                            align="center"
                            color="textSecondary"
                            component="p"
                        >
                            Quickly build an effective pricing table for your potential
                            customers with this layout. It&apos;s built with default
                            Material-UI components with little customization.
            </Typography>
                    </div>
                    {/* End hero unit */}
                    <Grid container spacing={40} alignItems="flex-end">
                        {tiers.map((tier: any) => (
                            // Enterprise card is full width at sm breakpoint
                            <Grid
                                item
                                key={tier.title}
                                xs={12}
                                sm={tier.title === "Enterprise" ? 12 : 6}
                                md={4}
                            >
                                <Card>
                                    <CardHeader
                                        title={tier.title}
                                        subheader={tier.subheader}
                                        titleTypographyProps={{ align: "center" }}
                                        subheaderTypographyProps={{ align: "center" }}
                                        action={tier.title === "Pro" ? <StarIcon /> : null}
                                        className={classes.cardHeader}
                                    />
                                    <CardContent>
                                        <div className={classes.cardPricing}>
                                            <Typography
                                                component="h2"
                                                variant="h3"
                                                color="textPrimary"
                                            >
                                                ${tier.price}
                                            </Typography>
                                            <Typography variant="h6" color="textSecondary">
                                                /mo
                      </Typography>
                                        </div>
                                        {tier.description.map((line: any) => (
                                            <Typography variant="subtitle1" align="center" key={line}>
                                                {line}
                                            </Typography>
                                        ))}
                                    </CardContent>
                                    <CardActions className={classes.cardActions}>
                                        <Button
                                            fullWidth
                                            variant={tier.buttonVariant}
                                            color="primary"
                                        >
                                            {tier.buttonText}
                                        </Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </main>
            </div>
        );
    }
}

class Start extends React.Component<any, any, any> {
    public constructor(props: any) {
        super(props);
        this.state = {
            emailAddress: "",
            videoURL: [
                "https://player.vimeo.com/external/260015882.hd.mp4?s=a1321e6df42f072dc1a0c62018580a2b2387f402&profile_id=174"
                // "https://d15iertza0f11s.cloudfront.net/app/uploads/2018/08/16110122/SoE_Master_NEWVERSION_HELENA_2.mp4"
            ],
            value: 0
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
                    <h1 className="page-header-title" appdir-scroll-fade="">Explore. Discover. Live.</h1>
                    <video
                        id="background-video"
                        loop={true}
                        muted={true}
                        autoPlay={true}
                        width="100%"
                    >
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
                    <Pricing {...this.props} />
                </section>
                <section>
                    <Grid container={true} alignItems={"center"}>
                        <Grid item={true} sm={4} />
                        <Grid item={true} xs={12} sm={4} />
                        <Grid item={true} sm={4} />
                    </Grid>
                </section>
                {/* <section>
                    <LoginContainer {...this.context}/>
                </section> */}
                <section>
                    <SignUpContainer {...this.context} />
                </section>
                <section>
                    <BottomNavigation
                        value={value}
                        onChange={this.handleChange}
                        showLabels={true}
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

export default compose(
    reduxForm({ form: "Start" }),
    withStyles(styles, { withTheme: true })
)(Start);
