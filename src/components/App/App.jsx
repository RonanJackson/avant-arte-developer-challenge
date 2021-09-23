import React, { useEffect, useState } from 'react';
import Card from '../Card';
import Header from '../Header';
import STYLES from './App.scss';

const getClassName = (className) => STYLES[className] || 'UNKNOWN';

const App = () => {
  const [data, setData] = useState(undefined);
  useEffect(() => {
    fetch('works.json')
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);
  return (
    <div className={getClassName('App')}>
      <Header />
      <main className={getClassName('App__main')}>
        {data ? (
          <section className={getClassName('App__cards')}>
            {data?.works.map((item) => (
              <Card
                key={item.id}
                title={item.title}
                tags={item.tags}
                image={item.image}
                url={item.url}
                price={item.price}
              />
            ))}
          </section>
        ) : (
          <p>There was a problem loading our artwork...</p>
        )}
      </main>
    </div>
  );
};

export default App;
