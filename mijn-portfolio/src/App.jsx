import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <hr />
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default App;
