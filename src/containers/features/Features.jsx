import React from 'react';
import Feature from '../../components/feature/Feature';
import './features.css';

const features = [{
  id: 1,
  title: "Improving end distrusts instantly",
  text: "You can use this method to encode data which may otherwise cause communication problems"
},
{
  id: 2,
  title: "Become the tended active",
  text: "You can use this method to encode data which may otherwise cause communication problems"
},
{
  id: 3,
  title: "Message or am nothing",
  text: "You can use this method to encode data which may otherwise cause communication problems"
},
{
  id: 4,
  title: "Really boy law county",
  text: "You can use this method to encode data which may otherwise cause communication problems"
}
]

const Features = () => {
  return (
    <div className='features-container' id='features'>
      <div className='features-heading'>
        <h2>The future is now and you just need to realize it.Step into future today & make it happen.</h2>
        <p>Request early access to get started.</p>
      </div>
      <div className='features-content'>
        {features.map((feature)=> <Feature key={feature.id} title={feature.title} text={feature.text} />)}
      </div>
    </div>
  )
}

export default Features