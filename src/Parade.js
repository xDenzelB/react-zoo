import React from 'react';

export default function Parade(props) {
  return <div className='parade'>
    {props.parades === 'lama' && '🦙'}
    {props.parades === 'dragon' && '🐉'}
    {props.parades === 'dinosaur' && '🦕'}
    {props.parades === 'kangaroo' && '🦘'}

  </div>;
}
