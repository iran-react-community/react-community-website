import React, {memo} from 'react';
import Helmet from 'react-helmet';
import contentWords from '~/utils/contentWords';
import styles from "~/styles/styles.pcss";

const {
    menu: {
        aboutUs
    },
} = contentWords;

const AboutUs = () => (
    <div className={styles.component}>
        <Helmet title={aboutUs}/>
        <h1>{aboutUs}</h1>
    </div>
);

export default memo(AboutUs);
