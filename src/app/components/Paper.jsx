import React, {memo} from 'react';
import styles from '~/styles/styles.pcss';

const Paper = ({ children }) => (
    <div className={styles.paper}>
        {children}
    </div>
);

export default memo(Paper);
