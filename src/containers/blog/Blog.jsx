import React from 'react';
import './blog.css';
import { blog1, blog2, blog3, blog4, blog5 } from '.';
import { Article } from '../../components';

const data = [
{
  id: 1,
  image: blog2,
  title: "GPT-3 and Open  AI is the future. Let us exlore how it is?"
},
{
  id: 2,
  image: blog3,
  title: "GPT-3 and Open  AI is the future. Let us exlore how it is?"
},
{
  id: 3,
  image: blog4,
  title: "GPT-3 and Open  AI is the future. Let us exlore how it is?"
},
{
  id: 4,
  image: blog5,
  title: "GPT-3 and Open  AI is the future. Let us exlore how it is?"
}]


const Blog = () => {

  
  return (
    <div className='blog-container' id='blog'>
      <div className='blog-heading' >
        <h1>A lot is happening,<br /> we are blogging about it.</h1>
      </div>
      <div className='blog-article-container'>
        <div className='article-group1' >
          <Article image={blog1} title="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
        </div>
        <div className='article-group2' >
          {data.map((article)=> <Article key={article.id} image={article.image} title={article.title} />)}
        </div>
      </div>
    </div>
  )
}

export default Blog