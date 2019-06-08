import React, { memo } from 'react';
import { NavLink } from 'react-router-dom';
import styles from '~/styles/styles.pcss';
import routesNames from '~/utils/routesNames';
import contentWords from '~/utils/contentWords';
import logo from '~/assets/iran-react-community.png';

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
    <ul className={styles.menu}>
        <li className={styles['menu__item']}>
            <NavLink exact to={toHome} activeClassName={styles['menu__active']}>{home}</NavLink>
        </li>
        <li className={styles['menu__item']}>
            <NavLink to={toAboutUs} activeClassName={styles['menu__active']}>{aboutUs}</NavLink>
        </li>
        <li className={styles['menu__item']}>
            <NavLink to={toContactUs} activeClassName={styles['menu__active']}>{contactUs}</NavLink>
        </li>
        <li className={styles['menu__item']}>
            <NavLink to={toHome} activeClassName={styles['menu__active']}>
                <img src={logo} alt="iran-react-community-logo"/>
            </NavLink>
        </li>
    </ul>
);

export default memo(Menu);
