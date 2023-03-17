import React, {useState, useEffect} from 'react';
import RegisterForm from './RegisterForm';
import SearchBar from './SearchBar';
import Emaillist from './Emaillist';
import './assets/scss/App.scss';

const App = () => {
  const [emails, setEmails] = useState([]);
  const [search, setSearch] = useState([]);

  const getData = async () => {
    try {
        const response = await fetch('/api/email', {
            method: 'get',
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

useEffect(()=>{
  getData();
}, []);
 
  const notifyKeywordChanged = function(keyword) {
   
    const t = search.filter(e => (e.firstName+e.lastName).indexOf(keyword) != -1 || e.email.indexOf(keyword) != -1);
    console.log(t);
    setEmails(t);
  }

  return (
    <div id={'App'}>
      <RegisterForm />
      <SearchBar callback={notifyKeywordChanged}/>
      <Emaillist emails={emails} />
    </div>
  )
}

export default App;