import React from 'react';
import './footer.css';
import logo from '../../assets/logo.svg';

const Footer = () => {
  return (
    <div className='footer-container' id='footer'>
      <div className='footer-header'>
        <h1>Do you want to step in to the future before others</h1>
        <p>Request Early Access</p>
      </div>

      <div className='footer-links'>
        <div className='logo-container'>
          <img src={logo} alt="logo" className='footer-logo' />
          <p>Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved</p>
        </div>
        <div>
          <h4>Links</h4>
          <ul>
            <li>Overon</li>
            <li>social media</li>
            <li>counters</li>
            <li>contact</li>
          </ul>
        </div>
        <div>
          <h4>Company</h4>
          <ul>
            <li>terms and conditions</li>
            <li>privacy and policy</li>
            <li>contact</li>
          </ul>
        </div>
        <div>
          <h4>Get in touch</h4>
          <ul>
            <li>Somewhere in the world</li>
            <li>985-532168</li>
            <li>john@doe.me</li>
          </ul>
        </div>
      </div>
      <div className='copyright'>
        <p>© 2021 GPT-3. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer