import React, {useState, useEffect} from 'react';
import './assets/scss/App.scss'
import Clock from './Clock';

export default function App() {
    const [ticks, setTicks] = useState(new Date());

    function update(){
        return new Date();
    }

      useEffect(() => {
        const id = setInterval(() => {
            setTicks(update());
        }, 1000);
        return (() => clearInterval(id))
      }, []);

    return (
        <div>
            <span>{ticks.getSeconds()}</span>
            {
                ticks.getSeconds() % 10 === 0 ?
                null :
                <Clock
                    message={'ex05: useEffect Hook example'}
                    hours={ticks.getHours()}
                    minutes={ticks.getMinutes()}
                    seconds={ticks.getSeconds()}
                    />
            }
        </div>
    );


}