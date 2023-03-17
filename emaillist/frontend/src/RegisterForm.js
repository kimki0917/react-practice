import React from 'react';
import styles from './assets/css/RegisterForm.css';

const RegisterForm = () => {

  const sub = async (e) => {
    
    const firstName = e.target[0].value;
    const lastName = e.target[1].value;
    const email = e.target[2].value;
    const vo = {
      firstName : firstName,
      lastName : lastName,
      email : email
    }

    console.log(vo);
    const data = new FormData(document.getElementById('registerForm'));

    try {
        const response = await fetch('/api/email', {
            method: 'post',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(vo)
        });

        if(!response.ok) {
            throw new Error(`${response.status} ${response.statusText}`);
        }

        const json = await response.json();
        if(json.result !== 'success') {
            throw new Error(`${json.result} ${json.message}`)
        }
    } catch(err) {
        console.log(err.message);
    }
}
    return (
        <form className={styles.RegisterForm}  id="registerForm" onSubmit={sub}>
        <input type='text' name='firstName' placeholder='성' className={styles.InputFirstName} />
        <input type='text' name='lastName' placeholder='이름' className={styles.InputLastName} />
        <input type='text' name='email' placeholder='이메일'className={styles.InputEmail} />
        <input type='submit' value='등록' />
      </form> 
    );
};

export default RegisterForm;