import { BrowserRouter } from 'react-router-dom';
import App from './app';

import * as React from 'react';
import * as ReactDOM from 'react-dom';



ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
  document.getElementById('root') as HTMLElement
);