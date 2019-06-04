import React from 'react';
import ReactDOMServer from 'react-dom/server';
import {StaticRouter} from 'react-router-dom';
import {Helmet} from "react-helmet";
import Template from './app/template';
import App from './app/App';

export default function serverRenderer({clientStats, serverStats}) {
    return (req, res, next) => {
        const context = {};
        const markup = ReactDOMServer.renderToString(
            <StaticRouter location={req.url} context={context}>
                <App/>
            </StaticRouter>
        );
        const helmet = Helmet.renderStatic();

        res.status(200).send(Template({
            markup: markup,
            helmet: helmet,
        }));
    };
}