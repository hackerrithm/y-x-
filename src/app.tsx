import * as React from "react";
import Start from "./start/web/components/Start";
import withRoot from './ui/materialDesign/withRoot';

export default withRoot (class App extends React.Component {
    public render() {
        return (
            <div className="App">
               <Start key={"start-page"} />
            </div>
        );
    }
})
