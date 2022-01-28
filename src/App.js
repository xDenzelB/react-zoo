import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Sign from './sign';

function App() {
  const [moonSize, setMoonSize] = useState(1);
  const [sunSize, setSunSize] = useState(1);
  const [isOpen, setIsOpen] = useState(false);
  const [parade, setParade] = useState(['lama', 'dragon', 'dinosaur', 'kangaroo']);

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
      <section className='open-close'>
        <Sign isOpen={isOpen} />
        <div>
          <button onClick={() => setIsOpen(false)}>Closed Today!</button>
          <button onClick={() => setIsOpen(true)}>Open!</button>
     
        </div>
      </section>
      <section className='zoo'>
        <div>
          <button>Lama</button>
          <button>Dragon</button>
          <button>Dinosaur</button>
          <button>Kangaroo</button>
     
        </div>
      </section>
    </div>
  );
}

export default App;
