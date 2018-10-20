import * as React from "react";
import { log } from "util";

export default class Home extends React.Component {
    public token: any;
    public constructor(props:any) {
        super(props)
    }
    public async componentDidMount() {
        await this.displayToken();
        // location.reload();
    }

    public displayToken = async () => {
        try {
            this.token = await localStorage.getItem("token");
            log(this.token + ' token here')
        } catch (error) {
            Error("err: " + error);
        }
    };
    public render() {
        return <div>home {this.token}!</div>;
    }
}
