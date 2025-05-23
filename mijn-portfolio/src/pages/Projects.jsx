import { useState } from "react";
import { Link } from "react-router-dom";
import projects from "../data/projects";
import './Project.css';

function Projects() {
  const [filter, setFilter] = useState("Alles");

  const tags = ["Alles", ...new Set(projects.map(p => p.tag))];

  const filteredProjects = filter === "Alles" ? projects : projects.filter(p => p.tag === filter);

  return (
    <div className="projects-page">
      <h1>Mijn werk</h1>
      <p>Projecten waar ik trots op ben.</p>

      <div className="filter-buttons">
        {tags.map((tag, index) => (
          <button
            key={index}
            className={filter === tag ? "active" : ""}
            onClick={() => setFilter(tag)}
          >
            {tag}
          </button>
        ))}
      </div>

      <div className="project-grid">
        {filteredProjects.map((project, index) => (
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
