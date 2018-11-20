import * as React from "react";
import { connect } from "react-redux";
import { log } from "util";

export default function (ComposedComponent: any) {
        interface IProps {
                isLoggedIn: boolean;
        }
        class Authenticate extends React.Component<any, any> {
                public constructor(props: IProps) {
                        super(props);
                }

                public componentWillMount() {
                        if (!localStorage.getItem("user")) {
                                log("needs to be logged in");
                                this.props.history.push("/login");
                        }
                }

                public render() {
                        return <ComposedComponent {...this.props} />;
                }
        }

        const mapStateToProps = (state: any) => {
                return {
                        isLoggedIn: state.authenticationReducer.isLoggedIn
                };
        };

        return connect(
                mapStateToProps,
                null
        )(Authenticate);
}
