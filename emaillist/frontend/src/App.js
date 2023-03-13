import React from 'react';
import './assets/css/App.css';
import RegisterForm from './RegisterForm';
import Searchbar from './Searchbar';
import Emaillist from './Emaillist';
import emails from './assets/json/data.json';

const App = () => {
    const[emails, setEmails] = useState(data);
    const notifyKeyWordChanged = function(keyword){
        const newEmails = emails.filter(function(e){return firstName})
    }
    return (
        <div id='App' className={'App'}>    
            <RegisterForm  />
            <Searchbar/>        
            <Emaillist emails={emails} />
        </div>
    );
}

export default App;