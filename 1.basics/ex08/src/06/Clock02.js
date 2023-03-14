import React from 'react';

function Clock01(props) {
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
  
    '0' + (hours > 12 ? hours - 12 : hours)
    return (
        <div>
            {('0' + (hours > 12 ? hours - 12 : hours)).slice(-2)}
            {':'}
            {('0' + minutes).slice}
            {':'}
            {('0' + seconds).slice}
        
             {session}  
        </div>
    );
}

export default Clock02;