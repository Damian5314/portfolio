import { Link, Outlet } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <nav className="navbar">
          <div className="logo">
            <Link to="/" style={{ textDecoration: 'none', color: 'black' }}>Damian Willemse</Link>
          </div>
          <ul className="nav-links">
            <li><Link to="/projects">Werk</Link></li>
            <li><Link to="/about">Over mij</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
      </nav>
      <div className="container">
        <hr />
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default App;
