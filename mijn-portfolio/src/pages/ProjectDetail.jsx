import { useParams } from "react-router-dom";
import projects from "../data/projects";
import './Project.css';

function ProjectDetail() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project) return <p>Project niet gevonden.</p>;

  return (
    <div className="project-detail">
      <h1>{project.title}</h1>
      <img src={project.image} alt={project.title} className="main-image" />

      <div className="meta">
        <p><strong>Tag:</strong> {project.tag}</p>
        <p><strong>Beschrijving:</strong> {project.description}</p>
      </div>

      <div className="gallery">
        {project.gallery.map((src, i) => (
          <img src={src} alt={`${project.title} ${i + 1}`} key={i} />
        ))}
      </div>
    </div>
  );
}

export default ProjectDetail;