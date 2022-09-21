import React from 'react';
import Feature from '../../components/feature/Feature';
import './whatgpt3.css';

const features = [{
  id: 1,
  title: "Chatbots",
  text: "You can use this method to encode data which may otherwise cause communication problems, transmit it, then use the atob"
},
{
  id: 2,
  title: "Knowledgebase",
  text: "You can use this method to encode data which may otherwise cause communication problems, transmit it, then use the atob"
},
{
  id: 3,
  title: "Education",
  text: "You can use this method to encode data which may otherwise cause communication problems, transmit it, then use the atob"
}]

const WhatGPT3 = () => {
  return (
    <div className='whatgpt3-container' id='whatgpt'>
      <div>
        <Feature title="What is WhatGPT-3" text="You can use this method to encode data which may otherwise cause communication problems, transmit it, then use the atob() method to decode the data again. For example, you can encode control characters such as ASCII values 0 through 31." />
      </div>
      <div className='whatgpt3-heading'>
        <h1>The possibilities are beyond your imagination</h1>
        <p>Explore the library</p>
      </div>
      <div className='whatgpt3-features'>
        {features.map((feature)=> <Feature key={feature.id} title={feature.title} text={feature.text} />)}
      </div>
    </div>
  )
}

export default WhatGPT3