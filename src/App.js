import './App.css';
import { useState } from 'react';
import Sign from './sign';
import ParadeList from './ParadeList';


function App() {
  const [moonSize, setMoonSize] = useState(3);
  const [sunSize, setSunSize] = useState(3);
  const [isOpen, setIsOpen] = useState(false);
  const [parade, setParade] = useState(['lama']);

  const moonStyle = {
    fontSize: `${moonSize}rem`
  };
  const sunStyle = {
    fontSize: `${sunSize}rem`
  };

  return (
    <div className="App">
      <h1>Welcome to The Zoo!!</h1>
      <section className='fight'>
        <div className='moon'>
          <p style={moonStyle}>🌚</p>
          <div className='buttons'>
            <button onClick={() => setMoonSize(moonSize + 1)}>Moon powers ACTIVATE!!!</button>
            <button onClick={() => setSunSize(sunSize - 1)}>Moon blocks the sun!</button>
          </div>
     
        </div>
        <div className='sun'>
          <p style={sunStyle}>🌞</p>
          <div className='buttons'>
            <button onClick={() => setSunSize(sunSize + 1)}>Sun powers ACTIVATE!!!</button>
            <button onClick={() => setMoonSize(moonSize - 1)}>Sun shines on the moon!</button>
          </div>
        </div>
      </section>
      <section className='open-close'>
        <Sign isOpen={isOpen} />
        <div className='buttons'>
          <button onClick={() => setIsOpen(false)}>Closed Today!</button>
          <button onClick={() => setIsOpen(true)}>Open!</button>
     
        </div>
      </section>
      <section className='zoo'>
        <ParadeList parade={parade} />
        <div className='buttons'>
          <button onClick={() => setParade([...parade, 'lama'])}>Lama</button>
          <button onClick={() => setParade([...parade, 'dragon'])}>Dragon</button>
          <button onClick={() => setParade([...parade, 'dinosaur'])}>Dinosaur</button>
          <button onClick={() => setParade([...parade, 'kangaroo'])}>Kangaroo</button>
     
        </div>
      </section>
    </div>
  );
}

export default App;
