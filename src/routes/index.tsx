import * as React from "react";
import { Route, Switch, HashRouter } from "react-router-dom";
import { default as App } from "../app";
// import Login from "src/authentication/web/components/Login";
import Start from "src/start/web/components/Start";
import Home from "src/home/web/components/Home";
import Authenticate from "src/authentication/web/components/Authenticate";
import Dashboard from "src/dashboard/web/components/Dashboard";
import About from "src/about/web/components/About";
import LoginContainer from "src/authentication/web/components/Login.container";

export default class AppRouter extends React.Component {
    public render() {
        return (
            <React.Fragment>
                <HashRouter>
                    <div className="container-fluid">
                        <Route component={App} />
                        <Switch>
                            <Route exact={true} path="/" component={Start} />
                            <Route path="/login" component={LoginContainer} />
                            <Route path="/about" component={About} />
                            <Route path="/dashboard" component={Authenticate(Dashboard)} />
                            <Route path="/home" component={Authenticate(Home)} />
                        </Switch>
                    </div>
                </HashRouter>
            </React.Fragment>
        );
    }
}
