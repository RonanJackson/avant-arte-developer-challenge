import React from 'react';

const internationalNumberFormat = new Intl.NumberFormat('en-EU');

const Card = ({ title, tags, image, url, price }) => (
  <div>
    <div>{title}</div>
    <div>{tags}</div>
    <img src={image} alt={title} width="50" height="60" />
    <div>{url}</div>
    <div>€{internationalNumberFormat.format(price)}</div>
  </div>
);

export default Card;
