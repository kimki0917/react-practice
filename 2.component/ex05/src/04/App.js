import React, {useState, useEffect} from 'react';
import './assets/scss/App.scss'
import Clock from './Clock';

export default function App() {
    const [ticks, setTicks] = useState(new Date());

    let now= new Date();
    

    function update(){
        now = new Date();
        return now;
    }

    // useEffect(() => {
    //     const id = setInterval(() => {
    //         setTicks(update());
    //         console.log("a");
    //         App();
    //       }, 1000);        
    //   });
    
    
      useEffect(() => {
        const id = setInterval(() => {
            setTicks(update());
        }, 1000);
        return (() => clearInterval(id))
      }, []);


    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    return (
        <div>
            <span>{ticks.getSeconds()}</span>
            {
                ticks.getSeconds() % 10 === 0 ?
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