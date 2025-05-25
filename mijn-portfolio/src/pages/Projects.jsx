import { useState } from "react";
import { Link } from "react-router-dom";
import projects from "../data/projects";
import './Project.css';
import { useLanguage } from '../context/LanguageContext';
import translations from '../data/translations';

function Projects() {
  const [filter, setFilter] = useState("Alles");
  const { language } = useLanguage();
  const t = translations[language];

  // Translate tags if needed in the future
  const tags = [language === 'nl' ? "Alles" : "All", ...new Set(projects.map(p => p.tag))];
  const filteredProjects = filter === (language === 'nl' ? "Alles" : "All") ? projects : projects.filter(p => p.tag === filter);

  return (
    <div className="projects-page">
      <h1>{t.myWork}</h1>
      <p>{t.projectsProud}</p>

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
              <small className="view-project">{language === 'nl' ? 'Bekijk project →' : 'View project →'}</small>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Projects;
