import { Link } from "react-router-dom";
import projects from "../data/projects";
import './Project.css';

function Projects() {
  return (
    <div className="projects-page">
      <h1>Mijn werk</h1>
      <p>Projecten waar ik trots op ben.</p>

      <div className="project-grid">
        {projects.map((project, index) => (
          <Link to={`/projects/${project.slug}`} className="project-card" key={index}>
            <img src={project.image} alt={project.title} />
            <div className="project-info">
              <small>{project.tag}</small>
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              <small className="view-project">Bekijk project →</small>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Projects;
