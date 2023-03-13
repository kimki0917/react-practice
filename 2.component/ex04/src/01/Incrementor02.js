import React, {useState} from 'react';

export default function ({ begin, step }) {
    const [val, setVal] = useState(begin);
   //const [step] = useState(step);

    return (
        <div>
            <button onClick={(e) => {
                setVal(val + step);
            }}>
                <strong>+</strong>
            </button>
            {' '}
            <span>{ val }</span>
        </div>
    );
}