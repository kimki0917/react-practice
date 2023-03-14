import React, { Component } from 'react';
import './assets/scss/App.scss'
import Clock from './Clock';

export default class App extends Component {
    state = {
        date: new Date()
      };
    
      update = () => {
        this.setState({
          date: new Date()
        });
      };
      componentDidMount() {
        setInterval(this.update, 1000);
      }
    render() {
        const hour = this.state.date.getHours();
        const minute = this.state.date.getMinutes();
        const second = this.state.date.getSeconds();
        const session = hour/12> 1? 'pm': 'am';

        '0' + (hour > 12 ? hour - 12 : hour)
        return (
            <div className='clock-display'>
                <h2>ex05 - Component LifeCycle Practice</h2>
                    <Clock 
                        hours={('0' + (hour > 12 ? hour - 12 : hour)).slice(-2)}
                        minutes={('0' + minute).slice(-2)}
                        seconds={('0' + second).slice(-2)}
                        session={session}/>
            </div>
        );
    }
}