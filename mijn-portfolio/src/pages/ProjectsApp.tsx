import React, { useState } from 'react';
import Projects from './Projects';
import ProjectDetails from './ProjectDetails';

interface ProjectsAppProps {
  language: 'nl' | 'en';
}

const ProjectsApp: React.FC<ProjectsAppProps> = ({ language }) => {
  const [currentView, setCurrentView] = useState('projects');
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);

  const handleProjectSelect = (projectId: string) => {
    setSelectedProjectId(projectId);
    setCurrentView('detail');
  };

  const handleBackToProjects = () => {
    setCurrentView('projects');
    setSelectedProjectId(null);
  };

  return (
    <div>
      {currentView === 'projects' && (
        <Projects 
          language={language} 
          onProjectSelect={handleProjectSelect}
        />
      )}
      {currentView === 'detail' && selectedProjectId && (
        <ProjectDetails 
          language={language} 
          projectId={selectedProjectId}
          onBack={handleBackToProjects}
        />
      )}
    </div>
  );
};

export default ProjectsApp;