import React from 'react';
import STYLES from './Card.scss';

const getClassName = (className) => STYLES[className] || 'UNKNOWN';

const internationalNumberFormat = new Intl.NumberFormat('en-EU');

const Card = ({ title, tags, image, url, price }) => (
  <article className={getClassName('Card')}>
    <img
      src={image}
      alt={title}
      width="50%"
      height="auto"
      className={getClassName('Card__image')}
    />
    <div>{title}</div>
    <div>€{internationalNumberFormat.format(price)}</div>
  </article>
);

export default Card;
