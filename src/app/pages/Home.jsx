import React, {memo} from 'react';
import Helmet from 'react-helmet';
import Socials from '~/app/components/Socials';
import contentWords from '~/utils/contentWords';
import styles from "~/styles/styles.pcss";

const {
    components: {
        menu: {
            home,
        },
    },
    page: {
        home: {
            title: {
                fa,
                en,
            },
            subTitle,
        },
    },
} = contentWords;

const Home = () => (
    <div className={styles.home}>
        <Helmet title={home}/>
        <h1 className={styles['home__en-title']}>{en}</h1>
        <h2 className={styles['home__fa-title']}>{fa}</h2>
        <h3 className={styles['home__sub-title']}>{subTitle}</h3>
        <Socials/>
    </div>
);

export default memo(Home);
