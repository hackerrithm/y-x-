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
import SignUpContainer from "src/authentication/web/components/SignUp.container";
import Profile from "src/profile/web/components/Profile";
import Setting from "src/settings/web/components/Setting";

export default class AppRouter extends React.Component {
    public render() {
        return (
            <React.Fragment>
                <HashRouter basename="awesome.xyz" hashType="slash">
                    <div className="container-fluid">
                        <Route component={App} />
                        <Switch>
                            <Route exact={true} path="/" component={Start} />
                            <Route path="/signup" component={SignUpContainer} />
                            <Route path="/login" component={LoginContainer} />
                            <Route path="/about" component={About} />
                            <Route path="/dashboard" component={Authenticate(Dashboard)} />
                            <Route path="/home" component={Authenticate(Home)} />
                            <Route path="/profile" component={Authenticate(Profile)} />
                            <Route path="/settings" component={Authenticate(Setting)} />
                        </Switch>
                    </div>
                </HashRouter>
            </React.Fragment>
        );
    }
}
