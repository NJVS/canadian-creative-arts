import { useRoutes } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import Routes from './routes/routes';

function App() {
  const route = useRoutes(Routes);
  return (
    <>
      <Navbar />
      {route}
      <Footer />
    </>
  );
}

export default App;