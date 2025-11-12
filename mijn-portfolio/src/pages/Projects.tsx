import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink } from 'lucide-react';
import CTASection from '@/components/CTASection';

interface ProjectsProps {
  language: 'nl' | 'en';
  onProjectSelect?: (projectId: string) => void;
}

const Projects: React.FC<ProjectsProps> = ({ language, onProjectSelect }) => {
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
      id: '1',
      title: 'QR Logistics',
      description: language === 'nl' 
        ? 'Een logistieke webapplicatie waarmee bedrijven hun orders, zendingen en voorraad eenvoudig kunnen beheren via QR-scans. Ontwikkeld met aandacht voor gebruiksgemak, inzicht en procesoptimalisatie.'
        : 'A logistics web application that allows companies to easily manage their orders, shipments and inventory through QR scans. Developed with attention to ease of use, insight and process optimization.',
      category: 'school',
      technologies: ['React Native', 'TypeScript', 'C#', '.NET'],
      image: `${import.meta.env.BASE_URL}Projects/QRLogistics/QRLogistics5.png`,
    },
    {
      id: '2',
      title: 'Voetbal-app',
      description: language === 'nl' 
        ? 'Een sociale voetbal-app waarin gebruikers wedstrijden kunnen voorspellen, vrienden kunnen volgen en coins verdienen voor correcte voorspellingen.'
        : 'A social football app where users can predict matches, follow friends and earn coins for correct predictions.',
      category: 'personal',
      technologies: ['React Native', 'JavaScript'],
      image: `${import.meta.env.BASE_URL}Projects/Voetbal/voetbalbanner.png`
    },
    {
      id: '3',
      title: 'TableTech',
      description: language === 'nl'
        ? 'Een alles-in-één dashboard voor horecazaken, waarmee personeel menu\'s kan beheren, feedback kan ontvangen en voorraden bijhouden.'
        : 'An all-in-one dashboard for hospitality businesses, allowing staff to manage menus, receive feedback and track inventory.',
      category: 'personal',
      technologies: ['React', 'Node.js', 'PostgreSQL'],
      image: `${import.meta.env.BASE_URL}Projects/TableTech/TableTech4.png`,
    },
    {
      id: '4',
      title: 'TableTech Website',
      description: language === 'nl'
        ? 'De officiële website van TableTech waarmee horecaondernemers kennismaken met het platform. Geoptimaliseerd voor SEO en conversie.'
        : 'The official TableTech website where hospitality entrepreneurs get acquainted with the platform. Optimized for SEO and conversion.',
      category: 'personal',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      image: `${import.meta.env.BASE_URL}Projects/TableTechWeb/TableTechWeb1.png`,
    },
    {
      id: '5',
      title: 'Willes Rijschool Website',
      description: language === 'nl'
        ? 'Een moderne en overzichtelijke website voor Willes Rijschool waarmee bezoekers informatie kunnen vinden over rijlessen en tarieven.'
        : 'A modern and clear website for Willes Driving School where visitors can find information about driving lessons and rates.',
      category: 'client',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      image: `${import.meta.env.BASE_URL}Projects/Willes/willes1.png`,
    },
    {
      id: '6',
      title: 'CaboFeira',
      description: language === 'nl'
        ? 'CaboFeira is een online marktplaats speciaal ontwikkeld voor de Kaapverdische gemeenschap om tweedehands spullen te verkopen.'
        : 'CaboFeira is an online marketplace specially developed for the Cape Verdean community to sell second-hand items.',
      category: 'client',
      technologies: ['WordPress'],
      image: `${import.meta.env.BASE_URL}Projects/CaboFeira/CaboFeira1.png`,
    },
    {
      id: '7',
      title: 'Space Monkey',
      description: language === 'nl'
        ? 'Space Monkey is een interactieve terminal-game waarin je speelt als Jararis, een hyperintelligente aap op een missie om de mensheid te redden.'
        : 'Space Monkey is an interactive terminal game where you play as Jararis, a hyper-intelligent monkey on a mission to save humanity.',
      category: 'school',
      technologies: ['Python'],
      image: `${import.meta.env.BASE_URL}Projects/SpaceMonkey/SpaceMonkey1.png`,
    },
    {
      id: '8',
      title: '2D Battle Game',
      description: language === 'nl'
        ? 'Een Pokémon-achtige browsergame ontwikkeld tijdens een GitHub Copilot Hackathon met turn-based battle-systeem.'
        : 'A Pokémon-like browser game developed during a GitHub Copilot Hackathon with turn-based battle system.',
      category: 'event',
      technologies: ['HTML', 'JavaScript', 'GitHub Copilot'],
      image: `${import.meta.env.BASE_URL}Projects/PokemonHackathon/PokemonHackathon3.png`,
    },
    {
      id: '9',
      title: 'Brick Breaker',
      description: language === 'nl'
        ? 'Brick Breaker is een moderne versie van het klassieke arcadespel, gemaakt in Lua met de LÖVE 2D-engine.'
        : 'Brick Breaker is a modern version of the classic arcade game, made in Lua with the LÖVE 2D engine.',
      category: 'personal',
      technologies: ['Lua', 'LÖVE 2D'],
      image: `${import.meta.env.BASE_URL}Projects/Brick/brick1.png`,
    },
    {
      id: '10',
      title: '21Questions Chat Widget',
      description: language === 'nl'
        ? 'Een intelligente Mendix-geïntegreerde chat widget met Groq/Llama AI en documentzoekfunctionaliteit. Deze React component is specifiek ontworpen als pluggable widget voor Mendix applicaties, waarbij bedrijven een geavanceerde chatbot kunnen integreren die documenten kan doorzoeken en contextuele antwoorden geeft.'
        : 'An intelligent Mendix-integrated chat widget with Groq/Llama AI and document search functionality. This React component is specifically designed as a pluggable widget for Mendix applications, allowing companies to integrate an advanced chatbot that can search documents and provide contextual answers.',
      category: 'client',
      technologies: ['React', 'TypeScript', 'Node.js', 'Groq SDK', 'Llama 3.1', 'Mendix', 'Webpack'],
      image: `${import.meta.env.BASE_URL}21questions.png`,
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

  const handleProjectClick = (projectId: string) => {
    if (onProjectSelect) {
      onProjectSelect(projectId);
    } else {
      // Fallback: navigate using window.location
      window.location.href = `/projects/${projectId}`;
    }
  };

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
                  <Button 
                    variant="ghost" 
                    className="w-full group/button"
                    onClick={() => handleProjectClick(project.id)}
                  >
                    <span className="flex items-center justify-center gap-2">
                      {t.viewProject}
                      <ExternalLink className="h-4 w-4 group-hover/button:translate-x-1 transition-transform" />
                    </span>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA Section */}
          <CTASection language={language} />
        </div>
      </div>
    </div>
  );
};

export default Projects;