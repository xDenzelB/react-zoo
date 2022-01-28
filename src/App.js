import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [moonSize, setMoonSize] = useState(1);
  const [sunSize, setSunSize] = useState(1);

  const moonStyle = {
    fontSize: `${moonSize}rem`
  };
  const sunStyle = {
    fontSize: `${sunSize}rem`
  };

  return (
    <div className="App">
      <section className='fight'>
        <div className='moon'>
          <p style={moonStyle}>🌚</p>
          <button onClick={() => setMoonSize(moonSize + 1)}>Moon powers ACTIVATE!!!</button>
          <button onClick={() => setSunSize(sunSize - 1)}>Moon blocks the sun!</button>

     
        </div>
        <div className='sun'>
          <p style={sunStyle}>🌞</p>
          <button onClick={() => setSunSize(sunSize + 1)}>Sun powers ACTIVATE!!!</button>
          <button onClick={() => setMoonSize(moonSize - 1)}>Sun shines on the moon!</button>
     
        </div>
      </section>
      <div className='open-close'>

     
      </div>
      <div className='zoo'>

     
      </div>

    </div>
  );
}

export default App;
