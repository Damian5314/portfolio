import { Outlet } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <LanguageProvider>
      <Navbar />
      <div className="container">
        <hr />
        <Outlet />
      </div>
      <Footer />
    </LanguageProvider>
  );
}

export default App;
