import React from 'react'
import styles from './assets/scss/SearchBar.scss';

export default function SearchBar({callback}) {
  return (
    <div className={styles.Searchbar}>
        <input
          type='text'
          placeholder='찾기'
          onChange={e => callback(e.target.value)}/>
    </div>
  )
}
//제어컴포넌트 안만들어도 됨
//바로 호출할 수 있게
