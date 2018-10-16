import * as React from "react";
import { Route, Switch, HashRouter } from "react-router-dom";
import { default as App } from "../app";
import Login from "src/authentication/web/components/Login";
import Start from "src/start/web/components/Start";

export default class AppRouter extends React.Component {
    public render() {
        return (
            <React.Fragment>
                    {/* <Switch>
                    <Route path="/" component={Start} />
                    <Route path="/login" component={Login} />
                    <Route
                        render={(): any => {
                            <div>not found</div>;
                        }}
                    />
                </Switch> */}
                    <HashRouter>
                        <div className="container-fluid">
                            <Route component={App} />
                            <Switch>
                                <Route exact={true} path="/" component={Start} />
                                <Route path="/login" component={Login} />
                            </Switch>
                        </div>
                    </HashRouter>

            </React.Fragment>
        );
    }
}
