import React, {memo} from 'react';
import contentWords from '~/utils/contentWords';
import styles from '~/styles/styles.pcss';

const {
    kopiLeft
} = contentWords.components;


const KopiLeft = () => (
    <pre className={styles['kopi-left']}>
        {kopiLeft}
    </pre>
);

export default memo(KopiLeft);
