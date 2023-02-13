import { useRoutes, useLocation } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import Routes from './routes/routes';

function App() {
  const route = useRoutes(Routes);
  const solidBackground = (useLocation().pathname).includes('/signup');
  
  return (
    <>
      <Navbar solidBackground={solidBackground} />
      {route}
      <Footer />
    </>
  );
}

export default App;