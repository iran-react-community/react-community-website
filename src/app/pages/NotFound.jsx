import React, {memo} from 'react';
import Helmet from 'react-helmet';
import contentWords from '~/utils/contentWords';
import styles from "~/styles/styles.pcss";

const {
    page: {
        notFound: {
            title,
        },
    },
} = contentWords;

const NotFound = () => (
    <div className={styles.component}>
        <Helmet title={title}/>
        <h1>{title}</h1>
    </div>
);

export default memo(NotFound);
