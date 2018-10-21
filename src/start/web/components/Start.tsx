import * as React from "react";

import { Grid, Typography, TextField } from "@material-ui/core";
import withStyles from "@material-ui/core/styles/withStyles";
import { styles } from "../ui/Start";
import { compose } from "redux";
import { reduxForm, Field } from "redux-form";

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
                ref={(c: any) => {
                    this.textInput = c;
                }}
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

class Start extends React.Component<any, any, any> {
    public render() {
        return (
            <div key={"start-page"}>
                <section />
                <BigPicture />
                <section />
                <SubscriptionForm />
                <section />
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
