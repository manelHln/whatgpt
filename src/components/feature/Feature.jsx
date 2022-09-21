import React from 'react';
import './feature.css';

const Feature = (props) => {
  return (
    <div className='feature-container'>
      <div className='feature-heading'>
        <div className='line'/>
        <h3>{props.title}</h3>
      </div>
      <p>{props.text}</p>
    </div>
  )
}

export default Feature;