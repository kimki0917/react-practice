import React from 'react';
import './assets/css/App.css';
import emails from './assets/json/data.json';
import RegisterForm from './RegisterForm';
import Searchbar from './Searchbar';
import Emaillist from './Emaillist';

function App(props) {
    return (
        <div id='App' className={'App'}>    
            <RegisterForm  />
            <Searchbar/>        
            <Emaillist emails={emails} />
        </div>
    );
}

export default App;