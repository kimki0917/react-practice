
import React from 'react'
import styles from './assets/scss/Email.scss';
import PropTypes from 'prop-types';

export default function Email({firstName, lastName, email, no}) {
  const deleteData = async (e, no) => {
    try {
        const response = await fetch('/api/delete/'+`${no}`, {
            method: 'delete',
            headers: {
                'Accept': 'application/json'
            }
        });

        if(!response.ok) {
            throw new Error(`${response.status} ${response.statusText}`);
        }

        const json = await response.json();
        if(json.result !== 'success') {
            throw new Error(`${json.result} ${json.message}`)
        }
        setEmails(json.data);
        console.log(json.data);
        setSearch(json.data);
    } catch(err) {
        console.log(err.message);
    }
}

  return (
    <li className={styles.Email}>
      <h4>{`${firstName} ${lastName}`}</h4>
      <span>{email} {no}</span>
      <a href='' onClick={(e) => deleteData(e,`${no}`)} > </a>
    </li>
  );
}

Email.propType = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,  
  email: PropTypes.string.isRequired
}