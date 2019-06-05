import React, {memo} from 'react';
import Helmet from 'react-helmet';
import contentWords from '~/utils/contentWords';
import styles from "~/styles/styles.pcss";

const {
    menu: {
        home,
    },
} = contentWords;

const Home = () => (
    <div className={styles.component}>
        <Helmet title={home}/>
        <h1>{home}</h1>
    </div>
);

export default memo(Home);
