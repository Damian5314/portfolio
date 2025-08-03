import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink } from 'lucide-react';

interface ProjectsProps {
  language: 'nl' | 'en';
}

const Projects: React.FC<ProjectsProps> = ({ language }) => {
  const [activeFilter, setActiveFilter] = useState('all');

  const translations = {
    nl: {
      title: 'Projecten',
      subtitle: 'Projecten waar ik trots op ben',
      filters: {
        all: 'Alle',
        school: 'School project',
        personal: 'Persoonlijk project',
        client: 'Klant project',
        event: 'Event project',
      },
      viewProject: 'Bekijk project',
      ctaTitle: 'Laten we samen beginnen met creëren',
      ctaButton: 'Laten we praten',
    },
    en: {
      title: 'Projects',
      subtitle: 'Projects I am proud of',
      filters: {
        all: 'All',
        school: 'School project',
        personal: 'Personal project',
        client: 'Client project',
        event: 'Event project',
      },
      viewProject: 'View project',
      ctaTitle: "Let's start creating together",
      ctaButton: "Let's talk",
    },
  };

  const t = translations[language];

  const projects = [
    {
      id: 1,
      title: 'E-commerce Platform',
      description: language === 'nl' 
        ? 'Moderne webshop met React en Python backend, inclusief betaalsysteem en voorraadbeheer.'
        : 'Modern web shop with React and Python backend, including payment system and inventory management.',
      category: 'client',
      technologies: ['React', 'Python', 'PostgreSQL'],
      image: '/placeholder.svg',
      link: '#',
    },
    {
      id: 2,
      title: 'Portfolio Website',
      description: language === 'nl'
        ? 'Responsieve portfolio website gebouwd met React en TypeScript voor een creatieve professional.'
        : 'Responsive portfolio website built with React and TypeScript for a creative professional.',
      category: 'personal',
      technologies: ['React', 'TypeScript', 'Tailwind'],
      image: '/placeholder.svg',
      link: '#',
    },
    {
      id: 3,
      title: 'Event Management System',
      description: language === 'nl'
        ? 'Uitgebreid systeem voor het beheren van evenementen, registraties en betalingen.'
        : 'Comprehensive system for managing events, registrations and payments.',
      category: 'event',
      technologies: ['C#', 'React', 'SQL Server'],
      image: '/placeholder.svg',
      link: '#',
    },
    {
      id: 4,
      title: 'Learning Management System',
      description: language === 'nl'
        ? 'LMS voor de hogeschool met cursusmateriaal, opdrachten en voortgangstracking.'
        : 'LMS for the university with course materials, assignments and progress tracking.',
      category: 'school',
      technologies: ['React', 'Node.js', 'MongoDB'],
      image: '/placeholder.svg',
      link: '#',
    },
    {
      id: 5,
      title: 'Task Management App',
      description: language === 'nl'
        ? 'Productiviteitsapp voor teams met realtime samenwerking en projectbeheer.'
        : 'Productivity app for teams with real-time collaboration and project management.',
      category: 'personal',
      technologies: ['React', 'Firebase', 'TypeScript'],
      image: '/placeholder.svg',
      link: '#',
    },
    {
      id: 6,
      title: 'Restaurant Booking System',
      description: language === 'nl'
        ? 'Online reserveringssysteem voor restaurants met tafelbeheer en klantcommunicatie.'
        : 'Online reservation system for restaurants with table management and customer communication.',
      category: 'client',
      technologies: ['React', 'Python', 'PostgreSQL'],
      image: '/placeholder.svg',
      link: '#',
    },
  ];

  const filterOptions = [
    { key: 'all', label: t.filters.all },
    { key: 'school', label: t.filters.school },
    { key: 'personal', label: t.filters.personal },
    { key: 'client', label: t.filters.client },
    { key: 'event', label: t.filters.event },
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <div className="min-h-screen bg-background">
      <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
              {t.title}
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {t.subtitle}
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {filterOptions.map((filter) => (
              <Button
                key={filter.key}
                variant={activeFilter === filter.key ? 'default' : 'outline'}
                onClick={() => setActiveFilter(filter.key)}
                className="text-sm"
              >
                {filter.label}
              </Button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {filteredProjects.map((project) => (
              <Card key={project.id} className="group shadow-soft hover:shadow-card transition-all duration-300 hover:-translate-y-1">
                <div className="aspect-video bg-muted rounded-t-lg overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="mb-3">
                    <Badge variant="secondary" className="text-xs">
                      {t.filters[project.category as keyof typeof t.filters]}
                    </Badge>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <Button variant="ghost" className="w-full group/button" asChild>
                    <a href={project.link} className="flex items-center justify-center gap-2">
                      {t.viewProject}
                      <ExternalLink className="h-4 w-4 group-hover/button:translate-x-1 transition-transform" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA Section */}
          <section className="bg-dark-section text-dark-section-foreground rounded-2xl p-8 lg:p-12 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              {t.ctaTitle}
            </h2>
            <Button 
              asChild 
              variant="secondary" 
              size="lg" 
              className="text-lg px-8 py-3 bg-dark-section-foreground text-dark-section hover:bg-accent"
            >
              <a href="/contact">{t.ctaButton}</a>
            </Button>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Projects;