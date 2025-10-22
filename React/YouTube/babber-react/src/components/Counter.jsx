import React, { useState } from 'react'
import './Counter.css'


const Counter = () => {
    const [count, setCount] = useState(0);
    return (
        <div className='counter-container'>
            <p id='para'>You have clicked {count} times</p>
            <div id='db'>
                <button id='btn1' onClick={() => { setCount(count + 1) }}>Add</button>
                <button id='btn2' onClick={() => { setCount(count - 1) }}>Remove</button>
            </div>

        </div>
    )
}

export default Counter