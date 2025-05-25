import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { useLanguage } from '../context/LanguageContext';
import translations from '../data/translations';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { language, switchLanguage } = useLanguage();

  const t = translations[language];

  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="//" style={{ textDecoration: 'none', color: 'black' }}>
          Damian Willemse
        </Link>
      </div>

      <button
        className="hamburger"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Menu"
      >
        ☰
      </button>

      <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
        <li><Link to="//" onClick={() => setMenuOpen(false)}>{t.home || 'Home'}</Link></li>
        <li><Link to="/projects" onClick={() => setMenuOpen(false)}>{t.myWork || 'Werk'}</Link></li>
        <li><Link to="/about" onClick={() => setMenuOpen(false)}>{t.about || 'Over mij'}</Link></li>
        <li><Link to="/contact" onClick={() => setMenuOpen(false)}>{t.contact || 'Contact'}</Link></li>
        <li>
          <div className="lang-switcher-vertical">
            <button
              onClick={() => switchLanguage('nl')}
              className={language === 'nl' ? 'active' : ''}
              aria-label="Switch to Dutch"
            >
              NL
            </button>
            <button
              onClick={() => switchLanguage('en')}
              className={language === 'en' ? 'active' : ''}
              aria-label="Switch to English"
            >
              EN
            </button>
          </div>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;