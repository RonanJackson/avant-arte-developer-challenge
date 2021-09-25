import React from 'react';
import { useGetWorks } from '../../util/worksApi';
import Card from '../Card';
import STYLES from './Cards.scss';

const getClassName = (className) => STYLES[className] || 'UNKNOWN';

const Cards = () => {
  const { isLoading, isError, error, data } = useGetWorks();

  if (isLoading) return <p>Loading Art Works...</p>;
  if (isError) {
    console.error(error);
    return <p>There was a problem fetching Art Works.</p>;
  }

  return (
    <section className={getClassName('Cards__main')}>
      {data?.works.map((item) => (
        <ul>
          <li key={item.id}>
            <Card
              id={item.id}
              title={item.title}
              tags={item.tags}
              image={item.image}
              url={item.url}
              price={item.price}
            />
          </li>
        </ul>
      ))}
    </section>
  );
};

export default Cards;
