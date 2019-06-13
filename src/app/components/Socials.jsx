import React, {memo} from 'react';
import styles from '~/styles/styles.pcss';

const Socials = () => (
    <div className={styles['social-networks']}>
        <a href="https://b2n.ir/ir-react">
            <i className={styles['icon-telegram']}/>
        </a>
        <a href="http://instagram.com/iran_react">
            <i className={styles['icon-instagram']}/>
        </a>
        <a href="http://twitter.com/iran_react">
            <i className={styles['icon-twitter']}/>
        </a>
        <a href="https://www.linkedin.com/groups/8742016/">
            <i className={styles['icon-linkedin']}/>
        </a>
        <a href="https://github.com/iran-react-community">
            <i className={styles['icon-github']}/>
        </a>
    </div>
);

export default memo(Socials);
