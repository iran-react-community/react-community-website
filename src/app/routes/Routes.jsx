import React, {memo} from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from '~/app/pages/Home';
import ContactUs from '~/app/pages/ContactUs';
import AboutUs from '~/app/pages/AboutUs';
import routesNames from '~/utils/routesNames';

const {
    home,
    contactUs,
    aboutUs,
} = routesNames;

const Routes = () => (
    <Switch>
        <Route exact path={home} component={Home}/>
        <Route path={contactUs} component={ContactUs}/>
        <Route path={aboutUs} component={AboutUs}/>
    </Switch>
);

export default memo(Routes);
