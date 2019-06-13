import React, {memo} from 'react';
import {NavLink} from 'react-router-dom';
import styles from '~/styles/styles.pcss';
import routesNames from '~/utils/routesNames';
import contentWords from '~/utils/contentWords';
import logo from '~/staticImages/iran-react-community.png';

const {
    home: toHome,
    contactUs: toContactUs,
    aboutUs: toAboutUs,
} = routesNames;

const {
    home,
    contactUs,
    aboutUs
} = contentWords.components.menu;

const Menu = () => (
    <nav className={styles.menu}>
        <NavLink exact to={toHome} className={styles['menu__item']}
                 activeClassName={styles['menu__active']}>{home}</NavLink>
        <NavLink to={toAboutUs} className={styles['menu__item']}
                 activeClassName={styles['menu__active']}>{aboutUs}</NavLink>
        <NavLink to={toContactUs} className={styles['menu__item']}
                 activeClassName={styles['menu__active']}>{contactUs}</NavLink>
        <NavLink to={toHome} className={styles['menu__item--the-last']}>
            <img src={logo} className={styles['menu__logo']} alt="iran-react-community-logo"/>
        </NavLink>
    </nav>
);

export default memo(Menu);
