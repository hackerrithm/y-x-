import * as React from "react";
import axios from 'axios';
import * as styles from "../ui/Profile";
import withStyles from "@material-ui/core/styles/withStyles";
import { log } from "util";

class Profile extends React.Component<any, any> {
    public userDetails: any;
    public profileDetails: any;
    public constructor(props: any) {
        super(props);

        this.state = {
            userUID: undefined,
            token: undefined,
            profileDetails: undefined,
            ln: undefined,
        };
    }

    public async componentDidMount() {
        const IDKey = 'userUID';
        const tokenKey = "token";
        try {
            this.userDetails = await JSON.parse(localStorage.getItem("user") as any);
            this.setState({ userUID: this.userDetails[IDKey], token: this.userDetails[tokenKey] });
        } catch (error) {
            log("an error occured: " + error);
        }


        await axios
            .get(`http://localhost:7003/auth/profile?uuid=` + this.state.userUID, {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + this.state.token,
                }
            }
        )
        .then((response: any) => {
            console.log("correct" + JSON.stringify(response.data, null, 4));
            localStorage.setItem("profile", JSON.stringify(response.data))
            this.profileDetails = JSON.parse(localStorage.getItem("profile") as any);
        })
        .catch((error: any) => {
            console.log("error located here" + error);
        });

        await this.setState({ ln: this.profileDetails.lastname})
             
        await log("profileDetails" + this.profileDetails.lastname)

        
    }

    public render() {
        return (
            <div>
                <section>
                    <p>user id: {this.state.ln} </p>
                </section>
            </div>
        );
    }
}

export default withStyles(styles, { withTheme: true })(Profile);
