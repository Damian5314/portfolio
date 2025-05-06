import { Link, Outlet } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="container">
      <nav>
        <ul style={{ display: 'flex', gap: '1rem', listStyle: 'none', padding: 0 }}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">Over mij</Link></li>
          <li><Link to="/projects">Projecten</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
      <hr />
      <Outlet />
    </div>
  );
}

export default App;
