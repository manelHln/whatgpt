import React from 'react';
import './article.css';

const Article = (props) => {
  return (
    <div className='article-container'>
      <div className='article-img'>
        <img src={props.image} alt='article' />
      </div>
      <div className='article-content'>
        <div>
          <p>21 Jan 2021</p>
          <h3>{props.title}</h3>
        </div>
        <p>Read Full Article</p>
      </div>
    </div>
  )
}

export default Article