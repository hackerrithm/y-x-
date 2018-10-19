import * as React from "react";
import { Route, Switch, HashRouter } from "react-router-dom";
import { default as App } from "../app";
import Login from "src/authentication/web/components/Login";
import Start from "src/start/web/components/Start";
import Home from "src/home/web/components/Home";

export default class AppRouter extends React.Component<any, any, any> {
    public constructor(props: any) {
        super(props)
    }
    public render() {
        return (
            <React.Fragment>
                <HashRouter>
                    <div className="container-fluid">
                        <Route component={App} />
                        <Switch>
                            <Route exact={true} path="/" component={Start} />
                            <Route path="/login" component={Login} />
                            <Route path="/home" component={Home} />
                        </Switch>
                    </div>
                </HashRouter>

            </React.Fragment>
        );
    }
}
