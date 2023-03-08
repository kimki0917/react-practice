import React from 'react';

function Clock01(props) {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    let session = 'AM';

    if(minutes < 10){
        minutes = '0' + minutes;
    }
    
    if(seconds < 10){
        seconds = '0' + seconds;
    }
    
    if(hours > 12){
        session = 'PM';
    }

    if(hours <10 ){
        hours = '0' + hours;
    }

    return (
        <div>
          {hours}:{minutes}:{seconds} {session}  
        </div>
    );
}

export default Clock01;