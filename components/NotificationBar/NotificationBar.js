import React from 'react';
import { useStatus } from '../../Context/StatusContext';
import styles from './NotificationBar.module.css';

const NotificationBar = () => {
    const { message } = useStatus();
    return (
        <>
            {message ?
                <div className={styles.main}>
                    <p>{message}</p>
                </div>
                : null}

        </>
    )
}

export default NotificationBar
