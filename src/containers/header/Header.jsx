import React from 'react';
import './header.css';
import people from '../../assets/people.png';
import ai from '../../assets/ai.png'

const Header = () => {
  return (
    <div className="header" id='home'>
      <div className="header-content">
        <h1>Let's Build Something amazing with GPT3 OpenAI</h1>
        <p className='header-content-text'>You can use this method to encode data which may otherwise cause communication problems, transmit it, then use the atob() method to decode the data again. For example, you can encode control characters such as ASCII values 0 through 31.</p>
        <div className="header-form">
          <input type="email" placeholder="Your Email Adress" />
          <button>Get Started</button>
        </div>
        <div className="header-people">
          <img src={people} alt="people" />
          <p>1600 people requested access a visit in last 24 hours</p>
        </div>
      </div>
      <div className="header-img">
        <img src={ai} alt="ai" />
      </div>
    </div>
  )
}

export default Header