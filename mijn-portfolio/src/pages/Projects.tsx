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

type ProjectStatus = 'completed' | 'paused' | 'inProgress' | 'canceled' | 'upcoming';
type ProjectCategory = 'school' | 'personal' | 'client' | 'event';

interface Project {
  id: string;
  title: string;
  description: string;
  category: ProjectCategory;
  status: ProjectStatus;
  technologies: string[];
  image: string;
}

const statusStyles: Record<ProjectStatus, string> = {
  completed: 'bg-emerald-100 text-emerald-700 border-transparent dark:bg-emerald-500/20 dark:text-emerald-200',
  paused: 'bg-amber-100 text-amber-700 border-transparent dark:bg-amber-500/20 dark:text-amber-200',
  inProgress: 'bg-blue-100 text-blue-700 border-transparent dark:bg-blue-500/20 dark:text-blue-200',
  canceled: 'bg-rose-100 text-rose-700 border-transparent dark:bg-rose-500/20 dark:text-rose-200',
  upcoming: 'bg-slate-100 text-slate-700 border-transparent dark:bg-slate-500/20 dark:text-slate-200',
};

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
      statuses: {
        completed: 'Klaar',
        paused: 'Gepauzeerd',
        inProgress: 'In ontwikkeling',
        canceled: 'Geannuleerd',
        upcoming: 'Toekomstig project',
      },
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
      statuses: {
        completed: 'Completed',
        paused: 'Paused',
        inProgress: 'In progress',
        canceled: 'Canceled',
        upcoming: 'Upcoming project',
      },
    },
  } as const;

  const t = translations[language];

  const projects: Project[] = [
    {
      id: '1',
      title: 'QR Logistics',
      description: language === 'nl' 
        ? 'Een logistieke webapplicatie waarmee bedrijven hun orders, zendingen en voorraad eenvoudig kunnen beheren via QR-scans. Ontwikkeld met aandacht voor gebruiksgemak, inzicht en procesoptimalisatie.'
        : 'A logistics web application that allows companies to easily manage their orders, shipments and inventory through QR scans. Developed with attention to ease of use, insight and process optimization.',
      category: 'school',
      status: 'completed',
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
      status: 'paused',
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
      status: 'inProgress',
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
      status: 'completed',
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
      status: 'completed',
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
      status: 'paused',
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
      status: 'completed',
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
      status: 'completed',
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
      status: 'completed',
      technologies: ['Lua', 'LÖVE 2D'],
      image: `${import.meta.env.BASE_URL}Projects/Brick/brick1.png`,
    },
    {
      id: '10',
      title: '21Questions',
      description: language === 'nl'
        ? 'Een intelligente chatbot volledig ontwikkeld in Mendix voor mijn stage bij 21south. De applicatie bevat een custom frontend design en backend, beide gebouwd in Mendix. De chatbot gebruikt Groq/Llama AI om vragen te beantwoorden, groeten te verwerken en ongepaste vragen af te wijzen. Documentzoekfunctionaliteit (text/pdf/doc) wordt momenteel ontwikkeld.'
        : 'An intelligent chatbot fully developed in Mendix for my internship at 21south. The application features a custom frontend design and backend, both built in Mendix. The chatbot uses Groq/Llama AI to answer questions, handle greetings and reject inappropriate questions. Document search functionality (text/pdf/doc) is currently in development.',
      category: 'client',
      status: 'inProgress',
      technologies: ['Mendix', 'Groq SDK', 'Llama 3.1'],
      image: `${import.meta.env.BASE_URL}Projects/21Questions/21Questions1.jpeg`,
    },
    {
      id: '11',
      title: 'Rijschool Planner SaaS',
      description: language === 'nl'
        ? 'Een moderne SaaS-applicatie voor rijscholen waarmee instructeurs hun agenda kunnen beheren, leerlingen kunnen inplannen en ritten kunnen bijhouden. De applicatie is ontworpen voor maximale eenvoud en snelheid. Instructeurs betalen per maand per gebruiker en kunnen direct starten zonder installatie. Het systeem bevat functies zoals leerlingbeheer, ritplanning, beschikbaarheid, notificaties en een dashboard voor dagelijkse afspraken.'
        : 'A modern SaaS application for driving schools that allows instructors to manage their schedule, plan students, and track lessons. The platform is designed for maximum speed and simplicity. Instructors pay monthly per user and can start immediately without installation. The system includes features such as student management, lesson scheduling, availability, notifications, and a dashboard for daily appointments.',
      category: 'personal',
      status: 'inProgress',
      technologies: ['Next.js', 'Fastify', 'Prisma', 'PostgreSQL', 'TypeScript'],
      image: `${import.meta.env.BASE_URL}Projects/Rijschool/Rijschool1.jpeg`,
    },
    {
      id: '12',
      title: 'FoodSwipe',
      description: language === 'nl'
        ? 'Een TikTok-achtige app voor het ontdekken van restaurants en recepten, ontwikkeld tijdens Build Weekend 2024. Met een team van 5 personen (2 frontend, 2 backend, 1 marketing) hebben we in 2 dagen een volledig werkende app gebouwd. Gebruikers kunnen restaurants en recepten doorswepen zoals op TikTok, via AI recepten genereren op basis van ingrediënten, en restaurants in de buurt bekijken op een kaart. Het design is gemaakt met Lovable en daarna zelf verder geprogrammeerd. De AI werkt met OpenAI en n8n, restaurant data wordt gescraped via Apify, en betalingen verlopen via Mollie.'
        : 'A TikTok-style app for discovering restaurants and recipes, developed during Build Weekend 2024. With a team of 5 people (2 frontend, 2 backend, 1 marketing) we built a fully working app in 2 days. Users can swipe through restaurants and recipes like on TikTok, generate recipes via AI based on ingredients, and view nearby restaurants on a map. The design was created with Lovable and then further programmed. The AI works with OpenAI and n8n, restaurant data is scraped via Apify, and payments are processed via Mollie.',
      category: 'event',
      status: 'completed',
      technologies: ['Lovable', 'n8n', 'Apify', 'OpenAI', 'Mollie'],
      image: `${import.meta.env.BASE_URL}Projects/FoodSwipe/FoodSwipe1.png`,
    },
    {
      id: '13',
      title: 'WoningSpotters',
      description: language === 'nl'
        ? 'Een platform dat data scrapet van de meeste woningwebsites voor koop en huur. De frontend is in React en de scrape is Python gecombineerd met Apify. Het platform zorgt voor een overzichtelijk systeem voor woningzoekers om al hun zoekopdrachten te beheren. Binnen 1 dag gemaakt tijdens het Apify $1M Challenge.'
        : 'A platform that scrapes data from most housing websites for sale and rent. The frontend is in React and the scraping is Python combined with Apify. The platform provides a clear system for home seekers to manage all their searches. Built within 1 day during the Apify $1M Challenge.',
      category: 'event',
      status: 'completed',
      technologies: ['React', 'Python', 'Apify'],
      image: `${import.meta.env.BASE_URL}Projects/Woningspotters/WoningSpotters1.png`,
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
                style={activeFilter !== filter.key ? { backgroundColor: 'hsl(var(--header-footer))' } : undefined}
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
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    <Badge variant="secondary" className="text-xs">
                      {t.filters[project.category]}
                    </Badge>
                    <Badge className={`text-xs ${statusStyles[project.status]}`}>
                      {t.statuses[project.status]}
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
