import React, {memo} from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import { Home, AboutUs, ContactUs, NotFound } from '~/app/pages';
import routesNames from '~/utils/routesNames';

const {
    home,
    contactUs,
    aboutUs,
    notFound,
    anythingElse,
} = routesNames;

const Routes = () => (
    <Switch>
        <Route exact path={home} component={Home}/>
        <Route path={contactUs} component={ContactUs}/>
        <Route path={aboutUs} component={AboutUs}/>
        <Route path={notFound} component={NotFound}/>
        <Redirect from={anythingElse} to={notFound}/>
    </Switch>
);

export default memo(Routes);
