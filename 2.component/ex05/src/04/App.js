import React, {useState, useEffect} from 'react';
import './assets/scss/App.scss'
import Clock from './Clock';

export default function App() {
    const [ticks, setTicks] = useState(0);
    const [time, setTime] = useState(new Date());

        function update(){
        return new Date();
    }

      useEffect(() => {
        const interval = setInterval(() => {
            setTime(update());
            setTicks(t => t + 1);
        }, 1000);
        return (() => {clearInterval(interval)
        });
      }, []);

    return (
        <div>
            <span>{ticks}</span>
            {
                ticks % 10 === 0 ?
                null :
                <Clock
                    message={'ex05: useEffect Hook example'}
                    hours={time.getHours()}
                    minutes={time.getMinutes()}
                    seconds={time.getSeconds()}
                    />
            }
        </div>
    );


}