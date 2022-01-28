import React from 'react';

export default function sign(props) {
  return <div className='sign-open'>{
    props.isOpen
      ? 'We Are OPEN! 😃' : 'Sorry the Zoo is closed! ☹️'
  }
 
  </div>;
}
