import React, {memo} from 'react';
import {NavLink} from "react-router-dom";
import styles from "~/styles/styles.pcss";
import routesNames from '~/utils/routesNames';
import contentWords from '~/utils/contentWords';

const {
    home: toHome,
    contactUs: toContactUs,
    aboutUs: toAboutUs,
} = routesNames;

const {
    home,
    contactUs,
    aboutUs
} = contentWords.menu;

const Menu = () => (
    <ul>
        <li>
            <NavLink exact to={toHome} activeClassName={styles.active}>{home}</NavLink>
        </li>
        <li>
            <NavLink to={toAboutUs} activeClassName={styles.active}>{aboutUs}</NavLink>
        </li>
        <li>
            <NavLink to={toContactUs} activeClassName={styles.active}>{contactUs}</NavLink>
        </li>
    </ul>
);

export default memo(Menu);
