import React from 'react';

function Clock01(props) {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
  
  
    return (
        
       /**
        *   comment01: JSX 밖은 JavaScript 구분( 주석 구문 )이 가능하다.
        * 
        */
       <div/*  
                comment 02: 여기서도 
    */>
    {
            /* comment03: 이런 방식으로 표현이 실행되는 블록 안에서 주석을 달아야 한다: 강추 */

    }

    {
        /**
         *  commnet 04 : JSX 는  HTML이 아니다!!
         * <!-- --> HTML 주석은 사용할 수 없다.
         * 
         */
    }

        {('0' + (hours > 12 ? horus - 12 : hours)).slice(-2)}
        {':'}
        {('0' + minutes).slice(-2)}
        {':'} 
        {('0' + seconds).slice(-2)}
        {' '} 
        {hours > 12 ? 'PM' : 'AM'}
        </div>

        );
}

export default Clock;