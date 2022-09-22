import React from 'react';
import './possibility.css';
import possibilityImage from '../../assets/possibility.webp'


const Possibility = () => {
  return (
    <div className='possibility-container' id='possibilities'>
      <div className='possibility-image'>
        <img src={possibilityImage} alt='Possibilities' />
      </div>
      <div className='possibility-content'>
        <p>request an early access toget started</p>
        <h1>The possibilities are beyond your imagination</h1>
        <p>You can use this method to encode data which may otherwise cause communication problems, transmit it, then use the atob() method to decode the data again. For example, you can encode control characters such as ASCII values 0 through 31.</p>
        <p>request an early access toget started</p>
      </div>
    </div>
  )
}

export default Possibility