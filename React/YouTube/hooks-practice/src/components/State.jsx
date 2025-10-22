import React, { useState } from 'react'
import './State.css'

function State() {
    const [show, setShow] = useState(true);
    const [mode, setMode] = useState(false);

    const changeMode = () => {
        setMode((prevMode) => !prevMode);
    }

    return (

        <div id="main"
            style={{
                backgroundColor: mode ? "black" : "white",
                borderColor: mode ? "red" : "blue"
                // color: mode ? "white" : "black"
            }}>

            <div id='mode'
                style={{
                    borderColor: mode ? "red" : "blue"
                }}>
                <h1>Light Mode | Dark Mode </h1>
            </div>
            <button id='mode-btn' onClick={changeMode}
                style={{
                    borderColor: mode ? "red" : "blue"
                }}>
                {mode ? "switch to Light Mode" : "switch to Dark Mode"}
            </button>

            {show && (
                <div id='txt'
                    style={{
                        borderColor: mode ? "red" : "blue",
                    }}>
                    <h1>Hello, I am visible!</h1>
                </div>
            )
            }

            <div id='btn-div'>
                <button id='btn' onClick={() => setShow(!show)}
                    style={{
                        borderColor: mode ? "red" : "blue"
                    }}>
                    {!show ? "Show Text" : "Hide Text"}
                </button>
            </div>
        </div >
    )
}

export default State