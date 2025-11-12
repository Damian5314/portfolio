import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Projects from './Projects';
import ProjectDetails from './ProjectDetails';

interface ProjectsAppProps {
  language: 'nl' | 'en';
}

const ProjectsApp: React.FC<ProjectsAppProps> = ({ language }) => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const handleProjectSelect = (projectId: string) => {
    navigate(`/projects/${projectId}`);
  };

  const handleBackToProjects = () => {
    navigate('/projects');
  };

  return (
    <div>
      {!id && (
        <Projects
          language={language}
          onProjectSelect={handleProjectSelect}
        />
      )}
      {id && (
        <ProjectDetails
          language={language}
          projectId={id}
          onBack={handleBackToProjects}
        />
      )}
    </div>
  );
};

export default ProjectsApp;