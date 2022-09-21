import React, {useState} from 'react';
import './navbar.css';
import logo from '../../assets/logo.svg';
import {RiMenu3Line, RiCloseLine} from 'react-icons/ri';


const Menu = () => (
  <ul>
      <li><a href='#home'>Home</a></li>
      <li><a href='#whatgpt'>WhatGPT3?</a></li>
      <li><a href='#features'>Features</a></li>
      <li><a href='#possibilities'>Possibilities</a></li>
      <li><a href='#blog'>Blog</a></li>
      <li><a href='#footer'>Footer</a></li>
    </ul>
)

function NavBar() {

  const [toggleMenu, setToggleMenuState] = useState(false);

  return (
    <div className="navbar">

      <div className="navbar-links">
        <img src={logo} alt="logo" className="logo" />
        <Menu />
      </div>

      <div className="navbar-login">
        <button className="signin-btn">Sign in</button>
        <button className="signup-btn">Sign up</button>
      </div>

      <div className="toggle-menu">
        {toggleMenu ? 
        <RiCloseLine style={{color: "#fff"}} size={27} onClick={()=>setToggleMenuState(false)} /> : 
        <RiMenu3Line style={{color: "#fff"}} size={27} onClick={()=>setToggleMenuState(true)} />}

        {
          toggleMenu && 
          <div className="mobile-menu">
            <Menu />
            <div className="navbar-login">
              <button className="signin-btn">Sign in</button>
              <button className="signup-btn">Sign up</button>
            </div>
          </div>

        }
      </div>

    </div>
  );
}

export default NavBar