import { useRoutes, useLocation } from 'react-router-dom';
import { FormDataProvider } from './context/FormDataContext';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import Routes from './routes/routes';

import styles from './App.module.scss';

function App() {
  const route = useRoutes(Routes);
  const solidBackground = (useLocation().pathname).includes('/signup');

  return (
    <FormDataProvider>
      <div className={styles.container}>
        <Navbar solidBackground={solidBackground} />
        {route}
        <Footer />
      </div>
    </FormDataProvider>
  );
}

export default App;