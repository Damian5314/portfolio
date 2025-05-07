const projects = [
  {
    title: "QR logistics",
    image: "/images/qrlogistics.png",
    description: "Een app die logistiek bedrijven helpt met hun orders.",
    tag: "School project"
  },
  {
    title: "Voetbal-app",
    image: "/images/voetbalapp.png",
    description: "Voorspel wedstrijden, verdien coins, vergelijk met vrienden.",
    tag: "Persoonlijk project"
  },
  {
    title: "TableTech",
    image: "/images/calendify.png",
    description: "Kantoor-agenda en aanwezigheidssysteem voor teams.",
    tag: "Persoonlijk project"
  }
];

function Projects() {
  return (
    <div className="projects-page">
      <h1>Mijn werk</h1>
      <p>Projecten waar ik trots op ben.</p>

      <div className="project-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.image} alt={project.title} />
            <div className="project-info">
              <small>{project.tag}</small>
              <h2>{project.title}</h2>
              <p>{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
