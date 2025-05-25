import './Home.css';
import { useLanguage } from '../context/LanguageContext';
import translations from '../data/translations';

function Home() {
  const { language } = useLanguage();
  const t = translations[language];
  return (
    <div className="home-container">
      <img
        src="DamianWillemse.jpeg"
        alt="Damian Willemse"
        className="profile-image"
      />
      <div className="intro-text">
        <h1>{t.welcome}</h1>
        <p>{t.intro}</p>
      </div>
    </div>
  );
}

export default Home;
