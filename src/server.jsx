import React from 'react';
import ReactDOMServer from 'react-dom/server';
import {StaticRouter} from 'react-router-dom';
import {Helmet} from 'react-helmet';
import Template from '~/utils/template';
import Index from '~/app';

export default function serverRenderer({clientStats, serverStats}) {
    return (req, res, next) => {
        const context = {};
        const markup = ReactDOMServer.renderToString(
            <StaticRouter location={req.url} context={context}>
                <Index/>
            </StaticRouter>
        );
        const helmet = Helmet.renderStatic();

        res.status(200).send(Template({
            markup: markup,
            helmet: helmet,
        }));
    };
}
