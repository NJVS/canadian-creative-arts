import { useRoutes, useLocation } from 'react-router-dom';
import { FormDataProvider } from './context/FormDataContext';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import Routes from './routes/routes';

function App() {
  const route = useRoutes(Routes);
  const solidBackground = (useLocation().pathname).includes('/signup');
  
  return (
    <FormDataProvider>
      <Navbar solidBackground={solidBackground} />
      {route}
      <Footer />
    </FormDataProvider>
  );
}

export default App;