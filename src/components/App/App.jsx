import { QueryClientProvider, QueryClient } from 'react-query';
import Cards from '../Cards';
import Header from '../Header';
import STYLES from './App.scss';

const getClassName = (className) => STYLES[className] || 'UNKNOWN';

const App = () => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <div className={getClassName('App')}>
        <Header />
        <main className={getClassName('App__main')}>
          <Cards />
        </main>
      </div>
    </QueryClientProvider>
  );
};

export default App;
