import React from 'react';
import styles from './assets/css/Searchbar.css';

const Searchbar = () => {
    return (
        <div className={styles.Searchbar}>
        <input type='text' placeholder='찾기'/>
    </div>
    );
};

export default Searchbar;
//제어컴포넌트 안만들어도 됨
//바로 호출할 수 있게
