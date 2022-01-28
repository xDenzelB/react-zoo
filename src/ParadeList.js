import React from 'react';
import Parade from './Parade';

export default function ParadeList(props) {
  return <div className='parade-list'>
    {props.parade.map((parades, i) => 
      <Parade key={`${parades}-${i}`}
        parades={parades} />
    )}



  </div>;
}
