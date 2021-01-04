import React from 'react';
import './App.css';
import Stopwatch from './komponentit/Stopwatch.js';
import Savedtimes from './komponentit/Savedtimes.js';


function App() {
  return (
    <div className="App">
      <h1>Sekuntikello</h1>
      <Stopwatch />
      <Savedtimes />
    </div>
  );
}

export default App;