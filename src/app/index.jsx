import React from 'react';
import Helmet from 'react-helmet';
import Menu from '~/app/components/Menu';
import Routes from '~/app/routes/Routes';

const Index = () => (
    <>
        <Helmet
            htmlAttributes={{lang: "en", amp: undefined}}
            titleTemplate="%s | iran-react-community"
            titleAttributes={{itemprop: "name", lang: "en"}}
            meta={[
                {name: "description", content: "Iran React Community"},
                {name: "viewport", content: "width=device-width, initial-scale=1"},
            ]}
            link={[{rel: "stylesheet", href: "/assets/css/styles.css"}]}
            script={[
                {src: "/assets/js/vendor.js", defer: undefined},
                {src: "/assets/js/client.js", defer: undefined},
            ]}
        />
        <Menu/>
        <Routes/>
    </>
);

export default Index;
