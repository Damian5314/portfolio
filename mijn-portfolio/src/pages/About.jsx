import './About.css';
import { useLanguage } from '../context/LanguageContext';
import translations from '../data/translations';

function About() {
  const { language } = useLanguage();
  const t = translations[language];
  return (
    <div className="container">
        {/* Persoonlijke informatie */}
        <div className="about-box">
          <p className="small-title">{language === 'nl' ? 'Persoonlijk' : 'Personal'}</p>
          <h2 className="section-title">{t.about}</h2>
          <p>
            {language === 'nl'
              ? 'Ik ben een enthousiaste softwareontwikkelaar met een passie voor technologie, design en het bouwen van slimme oplossingen. In mijn vrije tijd bouw ik aan persoonlijke projecten, en verdiep ik mij in alles wat met innovatie en ondernemerschap te maken heeft.'
              : 'I am an enthusiastic software developer with a passion for technology, design, and building smart solutions. In my free time I work on personal projects, and immerse myself in everything related to innovation and entrepreneurship.'}
          </p>
        </div>
      <div className="row">
        {/* Vaardigheden */}
        <div className="col-lg-4 d-flex flex-column vaardigheden-container">
          <div className="tag">
            <p>{t.vaardigheden}</p>
          </div>
          <h2 className="title">{t.vaardigheden}</h2>

          <div className="werkgebied-container">
            <h5 className="titel-werkgebied">{language === 'nl' ? 'Werkgebied' : 'Expertise'}</h5>
            {['HTML', 'CSS', 'JavaScript', 'Python', 'TypeScript', 'React', 'C#'].map((skill, i) => (
              <div className="d-flex skill-item" key={i}>
                <i className="fa-solid fa-circle-check"></i>
                <p>{skill}</p>
              </div>
            ))}
          </div>

          <div className="talen-container">
            <h5 className="titel-talen">{t.talen}</h5>
            { [
              language === 'nl' ? 'Nederlands (moedertaal)' : 'Dutch (native)',
              language === 'nl' ? 'Engels (professionele vaardigheid)' : 'English (professional proficiency)'
            ].map((languageText, i) => (
              <div className="d-flex taal-item" key={i}>
                <div className="country-flag-image-container"></div>
                <p>{languageText}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Werkervaring */}
        <div className="col-lg-4 d-flex flex-column werkervaring-container">
          <div className="tag">
            <p>{t.functies}</p>
          </div>
          <h2 className="title">{t.werkervaring}</h2>

          <div className="jobs-container">
            { [
              ["21South", language === 'nl' ? "Service Desk" : "Service Desk", "Okt. 2024 - heden"],
              ["Mediamarkt", language === 'nl' ? "Logistiek medewerker" : "Logistics employee", "jul. 2021 - okt. 2024"],
              ["Dirk", language === 'nl' ? "Vakkenvuller" : "Stock clerk", "jul. 2019 - jul. 2021"]
            ].map(([company, role, period], i) => (
              <div className="d-flex flex-column job-item" key={i}>
                <h6>{company}</h6>
                <p className="job-function">{role}</p>
                <p className="job-period">{period}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Opleiding */}
        <div className="col-lg-4 d-flex flex-column opleiding-container">
          <div className="tag">
            <p>{t.educatie}</p>
          </div>
          <h2 className="title">{t.opleiding}</h2>

          <div className="scholen-container">
            { [
              [language === 'nl' ? "Hogeschool Rotterdam" : "Rotterdam University of Applied Sciences", language === 'nl' ? "Informatica (HBO)" : "Computer Science (BSc)", "2023 - heden"],
              [language === 'nl' ? "Montfort College Rotterdam" : "Montfort College Rotterdam", language === 'nl' ? "HAVO" : "Pre-university education (HAVO)", "2016 - 2023"]
            ].map(([school, edu, year], i) => (
              <div className="d-flex flex-column school-item" key={i}>
                <h6>{school}</h6>
                <p className="school-edu-name">{edu}</p>
                <p className="school-year">{year}</p>
              </div>
            ))}
          </div>
        </div>

        {/* certificaten & diploma's */}
        <div className="col-lg-4 d-flex flex-column opleiding-container">
          <div className="tag">
            <p>{language === 'nl' ? 'Certificaten & Diploma\'s' : 'Certificates & Diplomas'}</p>
          </div>
          <h2 className="title">{language === 'nl' ? '  Certificaten & Diploma\'s' : 'Certificates & Diplomas'}</h2>

          <div className="scholen-container">
            { [
              [
                language === 'nl' ? 'Propedeuse Bachelor Informatica' : 'Propaedeutic Diploma Computer Science',
                language === 'nl' ? 'Hogeschool Rotterdam' : 'Rotterdam University of Applied Sciences',
                language === 'nl' ? 'Afgegeven op jul. 2024' : 'Issued Jul 2024',
              ],
              [
                'B2 First - Score 171',
                'Cambridge English',
                language === 'nl' ? 'Afgegeven op dec. 2019' : 'Issued Dec 2019',
              ]
            ].map(([title, org, date, img], i) => (
              <div className="d-flex flex-row align-items-center school-item" key={i}>
                <div className="d-flex flex-column">
                  <h6 style={{marginBottom:0}}>{title}</h6>
                  <p className="school-edu-name" style={{marginBottom:0}}>{org}</p>
                  <p className="school-year" style={{fontSize:'0.95em', color:'#888'}}>{date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
