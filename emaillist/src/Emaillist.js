import React from 'react';
import styles from './assets/css/Emaillist.css';

const Emaillist = ({emails}) => {
    return (
        <ul className={styles.Emaillist}>    
        {
            emails.map(email => <li key={email.no} className={styles.Emaillist}>
                {email.firstName}{email.lastName}
                <br/>
                {email.email}
            </li>)
        }
    </ul>
    );
};

export default Emaillist;