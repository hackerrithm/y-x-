import * as React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./routes";
import configureStore from './state/store/configureStore'
import { Provider } from "react-redux";

const store = configureStore();


ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <AppRouter />
        </BrowserRouter>
    </Provider>,
    document.getElementById("root")
);
