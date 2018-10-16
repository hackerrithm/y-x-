import * as React from "react";
import Navbar from "./navigation/web/components/Navbar";
import withRoot from "./ui/materialDesign/withRoot";

interface IProps { 
    children?: any;
}

export default withRoot(
    class App extends React.Component<IProps, {}> {
        constructor(props: IProps) {
            super(props);
        }

        public render() {
            return (
                <div>
                <Navbar />
                {this.props.children}
                </div>

            );
        }
    }
);
