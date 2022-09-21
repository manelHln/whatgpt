import React from 'react';
import {NavBar, Brand, CTA} from './components';
import {Blog, Features, Footer, Header, Possibility, WhatGPT3,} from './containers';
import './App.css'

const App = () => {
  return (
    <div>
      <div className="gpt3__whatgpt3">
        <NavBar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
    
  )
}

export default App