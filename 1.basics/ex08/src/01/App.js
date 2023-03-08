import React from 'react';

function App() {
  /*
    리액트 컴포넌트는 단일 루트 노드만 렌더링 할 수 있다.
  */
  return (
    <div>
        <h2>01</h2>
        <p>JSX Tutorial - 특징1: HTML과 차이점</p>
        {
          /**
           * 1. 속성은 Camel Case
           */
        }
        <input type='text' maxLength='10'/>
        {
          /*
          2. Element 는 꼭 닫는다.
          */
        }
        <br/>
        <hr/>
        <img src=''/>
        {
          /*
          3. JSX Element의 속성 이름은 DOM API와 일치한다.
          <h4 className='header' id='title'> </h4>
            document.getElementById('title').className = 'header2';
          */
        }
        <h4 className='header' id='title'> </h4>
    </div>
  );
}

export default App;
