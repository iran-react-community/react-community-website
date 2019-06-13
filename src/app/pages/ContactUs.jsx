import React, {memo} from 'react';
import KopiLeft from '~/app/components/KopiLeft';
import Socials from '~/app/components/Socials';
import Paper from '~/app/components/Paper';
import contentWords from '~/utils/contentWords';
import styles from "~/styles/styles.pcss";

const {
    page: {
        contactUs: {
            address,
            mail,
            city,
            email,
        },
    },
} = contentWords;

const ContactUs = () => (
    <div className={styles['contact-us']}>
        <KopiLeft/>
        <Socials/>
        <div className={styles['contact-us__paper-wrapper']}>
            <Paper>
                <i className={styles['icon-location']}/>
                <span>{address}</span>
                <span>{city}</span>
            </Paper>
            <Paper>
                <i className={styles['icon-mail']}/>
                <span>{mail}</span>
                <a href={`mailto:${email}`}>{email}</a>
            </Paper>
        </div>
    </div>
);

export default memo(ContactUs);
