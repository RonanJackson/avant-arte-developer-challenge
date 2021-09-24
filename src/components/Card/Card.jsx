import React, { useEffect, useState } from 'react';
import STYLES from './Card.scss';
import PropTypes from 'prop-types';

const getClassName = (className) => STYLES[className] || 'UNKNOWN';
const internationalNumberFormat = new Intl.NumberFormat('en-EU');

const Card = ({ title, tags, image, url, price }) => {
  const [tagVisibility, setTagVisibility] = useState({ visibility: 'visible' });
  const [tagText, setTagText] = useState('-');

  useEffect(() => {
    if (tags.includes('Sold Out')) setTagText('Sold Out');
    else if (tags.includes('Coming soon')) setTagText('Coming Soon');
    else setTagVisibility({ visibility: 'hidden' });
  }, [tags]);

  return (
    <article
      className={getClassName('Card')}
      onClick={() => window.open(url, '_blank')}
    >
      <div className={getClassName('Card__status-header')}>
        <div
          className={getClassName('Card__status-box')}
          data-testid="tag"
          style={tagVisibility}
        >
          <span>{tagText}</span>
        </div>
      </div>
      <img src={image} alt={title} className={getClassName('Card__image')} />
      <h1>{title}</h1>
      <h2>€{internationalNumberFormat.format(price)}</h2>
    </article>
  );
};

Card.propTypes = {
  title: PropTypes.string,
  tags: PropTypes.arrayOf(PropTypes.string),
  image: PropTypes.string,
  url: PropTypes.string,
  price: PropTypes.number,
};

export default Card;
