import React, {useState, useEffect} from 'react';
import './assets/scss/App.scss'
import Clock from './Clock';

export default function App() {
    const [ticks, setTicks] = useState(0);

    let now;
    function state(){
        now= new Date();
    }

    function update(){
        now = new Date();
    }

    useEffect(() => {
        const id = setInterval(() => {
            setTicks(update());
          }, 1000);
          return (() => clearInterval(id))        
      });
    
      state();

    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    return (
        <div>
            <span>{ticks}</span>
            {
                ticks % 10 === 1 ?
                null :
                <Clock
                    message={'ex05: useEffect Hook example'}
                    hours={hours}
                    minutes={minutes}
                    seconds={seconds}
                    />
            }
        </div>
    );


}