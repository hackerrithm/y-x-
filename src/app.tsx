import * as React from "react";
import AppRouter from "./routes";

import withRoot from './ui/materialDesign/withRoot';
import Navbar from "./navigation/web/components/Navbar";

export default withRoot(class App extends React.Component {
    public render() {
        return (
            <div className="App">
                <Navbar />
                <AppRouter />
                {this.props.children}
            </div>
        );
    }
})
