import React, {memo} from 'react';
import css from 'classnames';
import styles from '~/styles/styles.pcss';

const Socials = () => (
    <div className={styles['social-networks']}>
        <a href="https://b2n.ir/ir-react">
            <i className={css(styles.icon, styles['icon-telegram'])}/>
        </a>
        <a href="http://instagram.com/iran_react">
            <i className={css(styles.icon, styles['icon-instagram'])}/>
        </a>
        <a href="http://twitter.com/iran_react">
            <i className={css(styles.icon, styles['icon-twitter'])}/>
        </a>
        <a href="https://www.linkedin.com/groups/8742016/">
            <i className={css(styles.icon, styles['icon-linkedin'])}/>
        </a>
        <a href="https://github.com/iran-react-community">
            <i className={css(styles.icon, styles['icon-github'])}/>
        </a>
    </div>
);

export default memo(Socials);
