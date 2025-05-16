"use client"

import { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"
import "./ProjectDetail.css"

const ProjectDetail = () => {
  const { slug } = useParams()
  const [project, setProject] = useState(null)
  const [loading, setLoading] = useState(true)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [otherProjects, setOtherProjects] = useState([])

  useEffect(() => {
    // Import the projects data
    import("../data/projects.js")
      .then((module) => {
        const allProjects = module.default
        const projectData = allProjects.find((p) => p.slug === slug)

        // Get two other projects for the "Other Projects" section
        const filteredProjects = allProjects.filter((p) => p.slug !== slug).slice(0, 2)

        setProject(projectData)
        setOtherProjects(filteredProjects)
        setLoading(false)
      })
      .catch((error) => {
        console.error("Error loading project data:", error)
        setLoading(false)
      })
  }, [slug])

  const handleNextImage = () => {
    if (project && project.gallery) {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % project.gallery.length)
    }
  }

  const handlePrevImage = () => {
    if (project && project.gallery) {
      setCurrentImageIndex((prevIndex) => (prevIndex - 1 + project.gallery.length) % project.gallery.length)
    }
  }

  if (loading) {
    return (
      <div className="project-detail-container">
        <div className="loading">Loading...</div>
      </div>
    )
  }

  if (!project) {
    return (
      <div className="project-detail-container">
        <div className="not-found">
          <h1>Project not found</h1>
          <Link to="/projects" className="back-link">
            ← Back to projects
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="project-detail-container">
      <Link to="/projects" className="back-link">
        ← Back to projects
      </Link>

      <h1 className="project-title">{project.title}</h1>

      <div className="project-tag">{project.tag}</div>

      <div className="project-gallery">
        <div className="main-image-container">
          <img
            src={project.gallery[currentImageIndex] || "/placeholder.svg"}
            alt={`${project.title} - Image ${currentImageIndex + 1}`}
            className="main-image"
          />

          {project.gallery.length > 1 && (
            <div className="gallery-controls">
              <button onClick={handlePrevImage} className="gallery-control">
                ←
              </button>
              <span className="image-counter">
                {currentImageIndex + 1} / {project.gallery.length}
              </span>
              <button onClick={handleNextImage} className="gallery-control">
                →
              </button>
            </div>
          )}
        </div>

        {project.gallery.length > 1 && (
          <div className="thumbnails">
            {project.gallery.map((image, index) => (
              <div
                key={index}
                className={`thumbnail ${index === currentImageIndex ? "active" : ""}`}
                onClick={() => setCurrentImageIndex(index)}
              >
                <img src={image || "/placeholder.svg"} alt={`${project.title} thumbnail ${index + 1}`} />
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="project-description">
        <h2>Project Description</h2>
        <p>{project.description}</p>
      </div>

      {otherProjects.length > 0 && (
        <div className="other-projects">
          <h2>Other Projects</h2>
          <div className="projects-grid">
            {otherProjects.map((otherProject, index) => (
              <Link key={index} to={`/projects/${otherProject.slug}`} className="project-card">
                <div className="project-card-image">
                  {otherProject.gallery && otherProject.gallery.length > 0 && (
                    <img
                      src={otherProject.gallery[0] || "/placeholder.svg"}
                      alt={otherProject.title}
                      style={{ width: "100%", height: "100%", objectFit: "contain" }}
                    />
                  )}
                </div>
                <h3>{otherProject.title}</h3>
                <p>
                  {otherProject.description.length > 120
                    ? otherProject.description.substring(0, 120) + "..."
                    : otherProject.description}
                </p>
                <span className="view-project">View Project →</span>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default ProjectDetail
