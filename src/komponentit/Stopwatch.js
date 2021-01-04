import React, { useState } from 'react';
import '../App.css';

function Stopwatch() {

    const [time, setTime] = useState(0);
    const [running, setRunning] = useState(null); 
  
    function startStop() {
      if (running) {
        clearInterval(running);
        setRunning(false);
      } else { 
        const start = new Date(new Date() - time);
        setRunning(setInterval(() => {
          setTime((new Date() - start))
        }, 10));
      }
    }
  
    return (
      <div className='Stopwatch'>
        <h2>{(time / 1000).toFixed(2)} s</h2>
  
        <button onClick={startStop}>{running ? 'Seis' : (time ? 'Jatka' : 'Aloita')}</button>
        {!!time && <button onClick={() => setTime(0)}>Reset</button>}
      </div>
    );
  }

export default Stopwatch;
  