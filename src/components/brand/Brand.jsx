import React from 'react';
import './brand.css';
import { google, shopify, atlassian, slack, dropbox} from '.';

const brands = [google, shopify, atlassian, dropbox, slack];

const Brand = () => {
  return (
    <div className="brands-container">
      {brands.map((brand)=><img key={brand} src={brand} alt={brand} />)}
    </div>
  )
}

export default Brand