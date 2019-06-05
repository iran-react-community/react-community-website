import React, {memo} from 'react';
import Helmet from 'react-helmet';
import contentWords from '~/utils/contentWords';
import styles from "~/styles/styles.pcss";

const {
    menu: {
        contactUs
    },
} = contentWords;

const ContactUs = () => (
    <div className={styles.component}>
        <Helmet title={contactUs}/>
        <h1>{contactUs}</h1>
    </div>
);

export default memo(ContactUs);
