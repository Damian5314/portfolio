import './About.css';

function About() {
  return (
    <div className="container">
        {/* Persoonlijke informatie */}
        <div className="about-box">
          <p className="small-title">Persoonlijk</p>
          <h2 className="section-title">Over mij</h2>
          <p>
            Ik ben een enthousiaste softwareontwikkelaar met een passie voor technologie, design en het bouwen van slimme oplossingen.
            In mijn vrije tijd verzamel ik vinylplaten, bouw ik aan persoonlijke projecten, en verdiep ik mij in alles wat met innovatie en ondernemerschap te maken heeft.
          </p>
        </div>
      <div className="row">
        {/* Vaardigheden */}
        <div className="col-lg-4 d-flex flex-column vaardigheden-container">
          <div className="tag">
            <p>Skills</p>
          </div>
          <h2 className="title">Vaardigheden</h2>

          <div className="werkgebied-container">
            <h5 className="titel-werkgebied">Werkgebied</h5>
            {[
              "HTML",
              "CSS",
              "JavaScript",
              "Python",
              "TypeScript",
              "React",
              "C#"
            ].map((skill, i) => (
              <div className="d-flex skill-item" key={i}>
                <i className="fa-solid fa-circle-check"></i>
                <p>{skill}</p>
              </div>
            ))}
          </div>

          <div className="talen-container">
            <h5 className="titel-talen">Talen</h5>
            {[
              "Nederlands (moedertaal)",
              "Engels (professionele vaardigheid)",
            ].map((language, i) => (
              <div className="d-flex taal-item" key={i}>
                <div className="country-flag-image-container"></div>
                <p>{language}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Werkervaring */}
        <div className="col-lg-4 d-flex flex-column werkervaring-container">
          <div className="tag">
            <p>Functies</p>
          </div>
          <h2 className="title">Werkervaring</h2>

          <div className="jobs-container">
            {[
              ["21South", "Service Desk", "Okt. 2024 - heden"],
              ["Mediamarkt", "Logistiek medewerker", "jul. 2021 - okt. 2024"],
              ["Dirk", "Vakkenvuller", "jul. 2019 - jul. 2021"],
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
            <p>Educatie</p>
          </div>
          <h2 className="title">Opleiding</h2>

          <div className="scholen-container">
            {[
              ["Hogeschool Rotterdam", "Informatica (HBO)", "2023 - heden"],
              ["Montfort College Rotterdam", "HBO", "2016 - 2023"],
            ].map(([school, edu, year], i) => (
              <div className="d-flex flex-column school-item" key={i}>
                <h6>{school}</h6>
                <p className="school-edu-name">{edu}</p>
                <p className="school-year">{year}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
