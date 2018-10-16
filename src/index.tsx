// import { BrowserRouter } from 'react-router-dom';

import * as React from "react";
import * as ReactDOM from "react-dom";
// import App from "./app";
import { BrowserRouter}  from 'react-router-dom';
import AppRouter from "./routes";

ReactDOM.render(
    <BrowserRouter>
        <AppRouter />
    </BrowserRouter>,
    document.getElementById("root")
);
// ReactDOM.render(
//     <BrowserRouter>
//         <App />
//     <AppRouter />,
//     document.getElementById('root'));
