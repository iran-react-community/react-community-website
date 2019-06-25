import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import Index from '~/app';

ReactDOM.hydrate((
    <BrowserRouter>
        <Index/>
    </BrowserRouter>
), document.getElementById('root'));
