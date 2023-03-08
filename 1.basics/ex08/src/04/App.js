import React, {Fragment} from 'react';
import Header from './Header';
import Content from './Content';

function App() {
  /*
    리액트 컴포넌트는 단일 루트 노드만 렌더링 할 수 있다.
    오류:
        <h2>01</h2>
        <p>JSX Tutorial - 특징1: HTML과 차이점</p>

    이유:
    변화되는 코드
      React.createElement('div', null, React.createElement('h2', null, '01'), React.createElement('p', null, '01'))
  */

  // return (
  //   <div id="App">
  //     <Fragment>
  //       <Header/>
  //       <Content/>
  //     </Fragment>
  //   </div>
  // );

  return React.createElement(Fragment, null, React.createElement(Header, null), React.createElement(Content, null));
}

export default App;
