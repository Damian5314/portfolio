import React, { useState } from 'react';
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

const statusDot: Record<ProjectStatus, string> = {
  completed: 'bg-emerald-500',
  paused: 'bg-amber-500',
  inProgress: 'bg-blue-500',
  canceled: 'bg-rose-500',
  upcoming: 'bg-slate-400',
};

// Header style cycles per card position: ink → gold → light
const headerStyles = [
  { bg: 'bg-dark', number: 'text-white/[0.06]', title: 'text-dark-foreground' },
  { bg: 'bg-gold', number: 'text-foreground/[0.08]', title: 'text-gold-foreground' },
  { bg: 'bg-muted', number: 'text-foreground/[0.07]', title: 'text-foreground' },
];

const Projects: React.FC<ProjectsProps> = ({ language, onProjectSelect }) => {
  const [activeFilter, setActiveFilter] = useState('all');

  const translations = {
    nl: {
      eyebrow: 'Werk',
      title: 'Projecten',
      subtitle: 'Een selectie van projecten waar ik trots op ben.',
      filters: {
        all: 'Alle',
        school: 'School',
        personal: 'Persoonlijk',
        client: 'Klant',
        event: 'Event',
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
      eyebrow: 'Work',
      title: 'Projects',
      subtitle: 'A selection of projects I am proud of.',
      filters: {
        all: 'All',
        school: 'School',
        personal: 'Personal',
        client: 'Client',
        event: 'Event',
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
      <div className="px-4 pb-16 pt-28 sm:px-6 lg:px-8 lg:pt-32">
        <div className="mx-auto max-w-6xl">
          {/* Header */}
          <div className="mb-10">
            <span className="font-mono text-xs uppercase tracking-[0.22em] text-gold-ink">
              {t.eyebrow}
            </span>
            <h1 className="mt-3 font-serif text-5xl font-semibold tracking-tight text-foreground lg:text-6xl">
              {t.title}
            </h1>
            <p className="mt-4 max-w-xl font-mono text-sm text-info">
              {t.subtitle}
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="mb-10 flex flex-wrap gap-2">
            {filterOptions.map((filter) => (
              <button
                key={filter.key}
                onClick={() => setActiveFilter(filter.key)}
                className={`rounded-full border px-4 py-1.5 font-mono text-xs transition-colors ${
                  activeFilter === filter.key
                    ? 'border-foreground bg-foreground text-background'
                    : 'border-border bg-card text-info hover:border-foreground/40 hover:text-foreground'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="mb-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredProjects.map((project, index) => {
              const header = headerStyles[index % headerStyles.length];
              return (
                <button
                  key={project.id}
                  onClick={() => handleProjectClick(project.id)}
                  className="group text-left"
                >
                  <article className="h-full overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card">
                    {/* Colored header with number watermark */}
                    <div className={`relative h-40 overflow-hidden ${header.bg}`}>
                      <span
                        className={`pointer-events-none absolute -top-3 right-2 font-serif text-[7rem] font-semibold leading-none ${header.number}`}
                      >
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <h3 className={`absolute bottom-4 left-5 right-5 font-serif text-2xl ${header.title}`}>
                        {project.title}
                      </h3>
                    </div>

                    {/* Body */}
                    <div className="p-5">
                      <div className="mb-3 flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-[11px]">
                        <span className="uppercase tracking-wide text-gold-ink">
                          {t.filters[project.category]}
                        </span>
                        <span className="flex items-center gap-1.5 text-info">
                          <span className={`h-1.5 w-1.5 rounded-full ${statusDot[project.status]}`} />
                          {t.statuses[project.status]}
                        </span>
                      </div>
                      <p className="mb-4 font-mono text-xs leading-relaxed text-info line-clamp-3">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="rounded-md border border-border px-2 py-0.5 font-mono text-[11px] text-info"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </article>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <CTASection language={language} />
    </div>
  );
};

export default Projects;
