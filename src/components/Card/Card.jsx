import React, { useEffect, useState } from 'react';
import STYLES from './Card.scss';

const getClassName = (className) => STYLES[className] || 'UNKNOWN';

const internationalNumberFormat = new Intl.NumberFormat('en-EU');

const Card = ({ title, tags, image, url, price }) => {
  const [tagVisibility, setTagVisibility] = useState({ visibility: 'visible' });
  // This is not great, the string length dictates the styling
  const [tagText, setTagText] = useState('Other Text');

  useEffect(() => {
    if (tags.includes('Sold Out')) setTagText('Sold Out');
    else if (tags.includes('Coming soon')) setTagText('Coming Soon');
    else {
      setTagVisibility({ visibility: 'hidden' });
    }
  }, [tags]);

  return (
    <article
      className={getClassName('Card')}
      onClick={() => window.open(url, '_blank')}
    >
      <div className={getClassName('Card__status-box')} style={tagVisibility}>
        <span>{tagText}</span>
      </div>
      <img
        src={image}
        alt={title}
        width="50%"
        height="auto"
        className={getClassName('Card__image')}
      />
      <h1>{title}</h1>
      <h2>€{internationalNumberFormat.format(price)}</h2>
    </article>
  );
};

export default Card;
