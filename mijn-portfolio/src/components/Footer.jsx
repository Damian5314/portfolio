function Footer() {
    return (
      <footer className="footer">
        <div className="footer-left">
          <h2>Let's start<br />creating together</h2>
          <a href="mailto:damianwillmse@gmail.com" className="footer-button">
            Let’s talk ↗
          </a>
          <p className="footer-copyright">© Damian Willemse {new Date().getFullYear()}</p>
        </div>
  
        <div className="footer-right">
          <div className="footer-links">
            <ul>
              <li><a href="/portfolio/">Home</a></li>
              <li><a href="/projects">Werk</a></li>
              <li><a href="/about">Over mij</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
  
            <ul>
              <li><a href="https://www.linkedin.com/in/damianwillemse/" target="_blank" rel="noreferrer">Linkedin ↗</a></li>
              <li><a href="https://github.com/Damian5314" target="_blank" rel="noreferrer">Github ↗</a></li>
            </ul>
          </div>
        </div>
      </footer>
    );
  }
  
  export default Footer;
  
