import { Link } from 'react-router-dom';
import './Footer.css';
import { useLanguage } from '../context/LanguageContext';
import translations from '../data/translations';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

function Footer() {
    const { language } = useLanguage();
    const t = translations[language];
    return (
      <footer className="footer">
        <div className="footer-left">
          <h2>{t.startCreating || "Let's start\ncreating together"}</h2>
          <a href="mailto:damianwillmse@gmail.com" className="footer-button">
            {t.letsTalk || "Let’s talk ↗"}
          </a>
          <p className="footer-copyright">© Damian Willemse {new Date().getFullYear()}</p>
        </div>
  
        <div className="footer-right">
          <div className="footer-links">
            <ul>
              <li><Link to="//">{t.home || 'Home'}</Link></li>
              <li><Link to="/projects">{t.myWork || 'Werk'}</Link></li>
              <li><Link to="/about">{t.about || 'Over mij'}</Link></li>
              <li><Link to="/contact">{t.contact || 'Contact'}</Link></li>
            </ul>
  
            <ul>
              <li>
                <a href="https://www.linkedin.com/in/damianwillemse/" target="_blank" rel="noreferrer">
                  <FaLinkedin style={{ marginRight: '8px', verticalAlign: 'middle' }} />
                  {t.linkedin || 'Linkedin ↗'}
                </a>
              </li>
              <li>
                <a href="https://github.com/Damian5314" target="_blank" rel="noreferrer">
                  <FaGithub style={{ marginRight: '8px', verticalAlign: 'middle' }} />
                  {t.github || 'Github ↗'}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    );
  }
  
  export default Footer;

