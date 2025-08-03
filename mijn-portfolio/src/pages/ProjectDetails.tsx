import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, ExternalLink, Github, Calendar, Users, Code, Zap } from 'lucide-react';

interface ProjectDetailProps {
  language: 'nl' | 'en';
  projectId: string;
  onBack: () => void;
}

const ProjectDetails: React.FC<ProjectDetailProps> = ({ language, projectId, onBack }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const translations = {
    nl: {
      backToProjects: 'Terug naar projecten',
      overview: 'Overzicht',
      features: 'Functionaliteiten',
      technologies: 'Technologieën',
      screenshots: 'Screenshots',
      projectDetails: 'Project Details',
      duration: 'Duur',
      teamSize: 'Team grootte',
      myRole: 'Mijn rol',
      challenges: 'Uitdagingen',
      solutions: 'Oplossingen',
      results: 'Resultaten',
      viewLive: 'Bekijk live',
      viewCode: 'Bekijk code',
      nextProject: 'Volgend project',
      prevProject: 'Vorig project',
    },
    en: {
      backToProjects: 'Back to projects',
      overview: 'Overview',
      features: 'Features',
      technologies: 'Technologies',
      screenshots: 'Screenshots',
      projectDetails: 'Project Details',
      duration: 'Duration',
      teamSize: 'Team size',
      myRole: 'My role',
      challenges: 'Challenges',
      solutions: 'Solutions',
      results: 'Results',
      viewLive: 'View live',
      viewCode: 'View code',
      nextProject: 'Next project',
      prevProject: 'Previous project',
    },
  };

  const t = translations[language];

  // Uitgebreide project data
  const projectData: Record<string, any> = {
    '1': {
      title: 'E-commerce Platform',
      subtitle: language === 'nl' ? 'Moderne webshop oplossing' : 'Modern webshop solution',
      category: 'client',
      description: language === 'nl' 
        ? 'Een volledig uitgeruste e-commerce platform gebouwd voor een lokale retailer. Het platform bevat een gebruiksvriendelijke interface, robuust betaalsysteem, en geavanceerd voorraadbeheer.'
        : 'A fully-featured e-commerce platform built for a local retailer. The platform includes a user-friendly interface, robust payment system, and advanced inventory management.',
      longDescription: language === 'nl'
        ? 'Dit project was een uitgebreide opdracht om een bestaande fysieke winkel te digitaliseren. We hebben gewerkt met een team van 4 developers om een schaalbare oplossing te bouwen die zowel B2C als B2B functionaliteiten ondersteunt. Het platform verwerkt nu dagelijks honderden bestellingen en heeft de omzet van de klant met 300% doen stijgen.'
        : 'This project was an extensive assignment to digitalize an existing physical store. We worked with a team of 4 developers to build a scalable solution that supports both B2C and B2B functionalities. The platform now processes hundreds of orders daily and has increased the client\'s revenue by 300%.',
      technologies: ['React', 'Python', 'PostgreSQL', 'Stripe API', 'Docker', 'AWS'],
      duration: '6 maanden',
      teamSize: '4 developers',
      myRole: language === 'nl' ? 'Frontend Lead Developer' : 'Frontend Lead Developer',
      features: language === 'nl' ? [
        'Responsief design voor alle apparaten',
        'Geavanceerd zoek- en filtersysteem',
        'Geïntegreerd betaalsysteem (Stripe)',
        'Realtime voorraadbeheer',
        'Admin dashboard voor orders en analytics',
        'Automatische email notificaties',
        'Multi-taal ondersteuning',
        'SEO geoptimaliseerd'
      ] : [
        'Responsive design for all devices',
        'Advanced search and filter system',
        'Integrated payment system (Stripe)',
        'Real-time inventory management',
        'Admin dashboard for orders and analytics',
        'Automatic email notifications',
        'Multi-language support',
        'SEO optimized'
      ],
      challenges: language === 'nl' ? [
        'Complexe integratie met bestaand ERP systeem',
        'Performance optimalisatie voor grote productcatalogi',
        'Implementatie van realtime updates'
      ] : [
        'Complex integration with existing ERP system',
        'Performance optimization for large product catalogs',
        'Implementation of real-time updates'
      ],
      solutions: language === 'nl' ? [
        'Custom API gateway voor ERP communicatie',
        'Implementatie van virtualisatie en lazy loading',
        'WebSocket verbindingen voor realtime functionaliteit'
      ] : [
        'Custom API gateway for ERP communication',
        'Implementation of virtualization and lazy loading',
        'WebSocket connections for real-time functionality'
      ],
      results: language === 'nl' ? [
        '300% stijging in online omzet',
        '50% reductie in handmatige orderverwerking',
        '95% klanttevredenheid score'
      ] : [
        '300% increase in online revenue',
        '50% reduction in manual order processing',
        '95% customer satisfaction score'
      ],
      images: [
        '/api/placeholder/800/600',
        '/api/placeholder/800/600',
        '/api/placeholder/800/600',
        '/api/placeholder/800/600'
      ],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/example'
    },
    '2': {
      title: 'Portfolio Website',
      subtitle: language === 'nl' ? 'Creatieve portfolio oplossing' : 'Creative portfolio solution',
      category: 'personal',
      description: language === 'nl'
        ? 'Responsieve portfolio website gebouwd met React en TypeScript voor een creatieve professional.'
        : 'Responsive portfolio website built with React and TypeScript for a creative professional.',
      longDescription: language === 'nl'
        ? 'Een op maat gemaakte portfolio website voor een grafisch ontwerper die zijn werk wilde presenteren in een stijlvolle en interactieve manier. De website bevat animaties, een lightbox gallerij en een contactformulier.'
        : 'A custom portfolio website for a graphic designer who wanted to showcase his work in a stylish and interactive way. The website includes animations, a lightbox gallery and a contact form.',
      technologies: ['React', 'TypeScript', 'Tailwind', 'Framer Motion', 'Netlify'],
      duration: '3 maanden',
      teamSize: '2 developers',
      myRole: language === 'nl' ? 'Full Stack Developer' : 'Full Stack Developer',
      features: language === 'nl' ? [
        'Geanimeerde landing pagina',
        'Interactieve project gallerij',
        'Responsive design',
        'Contact formulier met validatie',
        'Blog sectie met CMS',
        'SEO geoptimaliseerd'
      ] : [
        'Animated landing page',
        'Interactive project gallery',
        'Responsive design',
        'Contact form with validation',
        'Blog section with CMS',
        'SEO optimized'
      ],
      challenges: language === 'nl' ? [
        'Performance van complexe animaties',
        'Cross-browser compatibiliteit',
        'Afbeelding optimalisatie'
      ] : [
        'Performance of complex animations',
        'Cross-browser compatibility',
        'Image optimization'
      ],
      solutions: language === 'nl' ? [
        'Lazy loading en code splitting',
        'Progressive enhancement strategie',
        'WebP formaat met fallbacks'
      ] : [
        'Lazy loading and code splitting',
        'Progressive enhancement strategy',
        'WebP format with fallbacks'
      ],
      results: language === 'nl' ? [
        '150% meer klant aanvragen',
        '90+ lighthouse score',
        '40% langere sessie duur'
      ] : [
        '150% more client inquiries',
        '90+ lighthouse score',
        '40% longer session duration'
      ],
      images: [
        '/api/placeholder/800/600',
        '/api/placeholder/800/600',
        '/api/placeholder/800/600'
      ],
      liveUrl: 'https://portfolio-example.com',
      githubUrl: 'https://github.com/portfolio-example'
    },
    '3': {
      title: 'Event Management System',
      subtitle: language === 'nl' ? 'Complete evenementen oplossing' : 'Complete events solution',
      category: 'event',
      description: language === 'nl'
        ? 'Uitgebreid systeem voor het beheren van evenementen, registraties en betalingen.'
        : 'Comprehensive system for managing events, registrations and payments.',
      longDescription: language === 'nl'
        ? 'Een volledig event management platform voor een grote organisatie die jaarlijks 50+ evenementen organiseert. Het systeem automatiseert het gehele proces van eventcreatie tot nabeschouwing.'
        : 'A complete event management platform for a large organization that organizes 50+ events annually. The system automates the entire process from event creation to follow-up.',
      technologies: ['C#', 'React', 'SQL Server', 'Azure', 'SignalR'],
      duration: '8 maanden',
      teamSize: '6 developers',
      myRole: language === 'nl' ? 'Backend Developer' : 'Backend Developer',
      features: language === 'nl' ? [
        'Event creatie en beheer',
        'Online registratie systeem',
        'Geïntegreerde betalingen',
        'QR-code check-in systeem',
        'Realtime attendance tracking',
        'Automated email campaigns',
        'Rapportage dashboard',
        'Multi-tenant architectuur'
      ] : [
        'Event creation and management',
        'Online registration system',
        'Integrated payments',
        'QR-code check-in system',
        'Real-time attendance tracking',
        'Automated email campaigns',
        'Reporting dashboard',
        'Multi-tenant architecture'
      ],
      challenges: language === 'nl' ? [
        'Schaalbare architectuur voor duizenden gebruikers',
        'Realtime synchronisatie',
        'Complexe business logic'
      ] : [
        'Scalable architecture for thousands of users',
        'Real-time synchronization',
        'Complex business logic'
      ],
      solutions: language === 'nl' ? [
        'Microservices architectuur',
        'SignalR voor realtime updates',
        'CQRS pattern implementatie'
      ] : [
        'Microservices architecture',
        'SignalR for real-time updates',
        'CQRS pattern implementation'
      ],
      results: language === 'nl' ? [
        '80% reductie in administratieve tijd',
        '99.9% uptime tijdens events',
        '25.000+ registraties verwerkt'
      ] : [
        '80% reduction in administrative time',
        '99.9% uptime during events',
        '25,000+ registrations processed'
      ],
      images: [
        '/api/placeholder/800/600',
        '/api/placeholder/800/600',
        '/api/placeholder/800/600'
      ],
      liveUrl: 'https://events-example.com',
      githubUrl: 'https://github.com/events-example'
    },
    '4': {
      title: 'Learning Management System',
      subtitle: language === 'nl' ? 'Educatieve platform oplossing' : 'Educational platform solution',
      category: 'school',
      description: language === 'nl'
        ? 'LMS voor de hogeschool met cursusmateriaal, opdrachten en voortgangstracking.'
        : 'LMS for the university with course materials, assignments and progress tracking.',
      longDescription: language === 'nl'
        ? 'Een modern learning management systeem ontwikkeld voor onze hogeschool om de online leerervaring te verbeteren. Het platform ondersteunt verschillende leerformaten en biedt uitgebreide analytics.'
        : 'A modern learning management system developed for our university to improve the online learning experience. The platform supports various learning formats and provides comprehensive analytics.',
      technologies: ['React', 'Node.js', 'MongoDB', 'WebRTC', 'Socket.io'],
      duration: '12 maanden',
      teamSize: '8 students',
      myRole: language === 'nl' ? 'Frontend Team Lead' : 'Frontend Team Lead',
      features: language === 'nl' ? [
        'Cursus beheer systeem',
        'Video conferencing integratie',
        'Opdracht inlevering systeem',
        'Automatische beoordeling',
        'Progress tracking',
        'Discussion forums',
        'Mobile responsive design',
        'Offline content access'
      ] : [
        'Course management system',
        'Video conferencing integration',
        'Assignment submission system',
        'Automatic grading',
        'Progress tracking',
        'Discussion forums',
        'Mobile responsive design',
        'Offline content access'
      ],
      challenges: language === 'nl' ? [
        'Grote teams coördineren',
        'Video streaming optimalisatie',
        'Offline functionaliteit'
      ] : [
        'Coordinating large teams',
        'Video streaming optimization',
        'Offline functionality'
      ],
      solutions: language === 'nl' ? [
        'Agile methodologie met scrums',
        'CDN implementatie voor video\'s',
        'Service workers voor caching'
      ] : [
        'Agile methodology with scrums',
        'CDN implementation for videos',
        'Service workers for caching'
      ],
      results: language === 'nl' ? [
        '2.000+ studenten gebruiken het systeem',
        '40% verbetering in engagement',
        'Beste project van het jaar award'
      ] : [
        '2,000+ students using the system',
        '40% improvement in engagement',
        'Best project of the year award'
      ],
      images: [
        '/api/placeholder/800/600',
        '/api/placeholder/800/600',
        '/api/placeholder/800/600'
      ],
      liveUrl: 'https://lms-example.edu',
      githubUrl: 'https://github.com/lms-example'
    },
    '5': {
      title: 'Task Management App',
      subtitle: language === 'nl' ? 'Productiviteits platform' : 'Productivity platform',
      category: 'personal',
      description: language === 'nl'
        ? 'Productiviteitsapp voor teams met realtime samenwerking en projectbeheer.'
        : 'Productivity app for teams with real-time collaboration and project management.',
      longDescription: language === 'nl'
        ? 'Een persoonlijk project om mijn vaardigheden in realtime applicaties te ontwikkelen. De app combineert task management met team collaboration features en is gebouwd met moderne web technologieën.'
        : 'A personal project to develop my skills in real-time applications. The app combines task management with team collaboration features and is built with modern web technologies.',
      technologies: ['React', 'Firebase', 'TypeScript', 'Material-UI', 'PWA'],
      duration: '4 maanden',
      teamSize: '1 developer (zelf)',
      myRole: language === 'nl' ? 'Solo Developer' : 'Solo Developer',
      features: language === 'nl' ? [
        'Kanban board interface',
        'Realtime collaboration',
        'Team workspaces',
        'Time tracking',
        'File attachments',
        'Push notifications',
        'Dark/light theme',
        'Progressive Web App'
      ] : [
        'Kanban board interface',
        'Real-time collaboration',
        'Team workspaces',
        'Time tracking',
        'File attachments',
        'Push notifications',
        'Dark/light theme',
        'Progressive Web App'
      ],
      challenges: language === 'nl' ? [
        'Realtime data synchronisatie',
        'State management complexiteit',
        'PWA implementatie'
      ] : [
        'Real-time data synchronization',
        'State management complexity',
        'PWA implementation'
      ],
      solutions: language === 'nl' ? [
        'Firebase Firestore voor realtime sync',
        'Redux Toolkit voor state management',
        'Workbox voor PWA features'
      ] : [
        'Firebase Firestore for real-time sync',
        'Redux Toolkit for state management',
        'Workbox for PWA features'
      ],
      results: language === 'nl' ? [
        '500+ active gebruikers',
        '4.8/5 app store rating',
        'Featured in Firebase showcase'
      ] : [
        '500+ active users',
        '4.8/5 app store rating',
        'Featured in Firebase showcase'
      ],
      images: [
        '/api/placeholder/800/600',
        '/api/placeholder/800/600',
        '/api/placeholder/800/600'
      ],
      liveUrl: 'https://taskapp-example.com',
      githubUrl: 'https://github.com/taskapp-example'
    },
    '6': {
      title: 'Restaurant Booking System',
      subtitle: language === 'nl' ? 'Horeca reserveringssysteem' : 'Restaurant reservation system',
      category: 'client',
      description: language === 'nl'
        ? 'Online reserveringssysteem voor restaurants met tafelbeheer en klantcommunicatie.'
        : 'Online reservation system for restaurants with table management and customer communication.',
      longDescription: language === 'nl'
        ? 'Een volledig restaurantreserveringssysteem voor een keten van 5 restaurants. Het systeem beheert reserveringen, tafelbezetting en klantrelaties, en integreert met bestaande POS systemen.'
        : 'A complete restaurant reservation system for a chain of 5 restaurants. The system manages reservations, table occupancy and customer relations, and integrates with existing POS systems.',
      technologies: ['React', 'Python', 'PostgreSQL', 'Redis', 'Twilio'],
      duration: '5 maanden',
      teamSize: '3 developers',
      myRole: language === 'nl' ? 'Full Stack Developer' : 'Full Stack Developer',
      features: language === 'nl' ? [
        'Online reservering interface',
        'Tafel layout beheer',
        'Wachtlijst systeem',
        'SMS & Email notificaties',
        'Klant database',
        'Reservering analytics',
        'Multi-restaurant support',
        'POS systeem integratie'
      ] : [
        'Online reservation interface',
        'Table layout management',
        'Waitlist system',
        'SMS & Email notifications',
        'Customer database',
        'Reservation analytics',
        'Multi-restaurant support',
        'POS system integration'
      ],
      challenges: language === 'nl' ? [
        'Complexe tafel allocatie algoritmes',
        'Hoge beschikbaarheid vereisten',
        'Legacy systeem integratie'
      ] : [
        'Complex table allocation algorithms',
        'High availability requirements',
        'Legacy system integration'
      ],
      solutions: language === 'nl' ? [
        'Optimalisatie algoritmes voor tafeltoewijzing',
        'Redis voor caching en sessions',
        'REST API voor externe integraties'
      ] : [
        'Optimization algorithms for table assignment',
        'Redis for caching and sessions',
        'REST API for external integrations'
      ],
      results: language === 'nl' ? [
        '60% meer online reserveringen',
        '30% reductie in no-shows',
        '95% klant tevredenheid'
      ] : [
        '60% more online reservations',
        '30% reduction in no-shows',
        '95% customer satisfaction'
      ],
      images: [
        '/api/placeholder/800/600',
        '/api/placeholder/800/600',
        '/api/placeholder/800/600'
      ],
      liveUrl: 'https://restaurant-booking.com',
      githubUrl: 'https://github.com/restaurant-booking'
    }
  };

  const project = projectData[projectId] || projectData['1'];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          {/* Back Button */}
          <Button variant="ghost" className="mb-8 group" onClick={onBack}>
            <ArrowLeft className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            {t.backToProjects}
          </Button>

          {/* Project Header */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <Badge variant="secondary">
                {project.category}
              </Badge>
              <span className="text-muted-foreground">•</span>
              <span className="text-muted-foreground">{project.duration}</span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
              {project.title}
            </h1>
            <p className="text-xl text-muted-foreground mb-6">
              {project.subtitle}
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild>
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <ExternalLink className="h-4 w-4" />
                  {t.viewLive}
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <Github className="h-4 w-4" />
                  {t.viewCode}
                </a>
              </Button>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Screenshots */}
              <section>
                <h2 className="text-2xl font-bold mb-6">{t.screenshots}</h2>
                <div className="relative">
                  <div className="aspect-video bg-muted rounded-lg overflow-hidden mb-4">
                    <img
                      src={project.images[currentImageIndex]}
                      alt={`${project.title} screenshot ${currentImageIndex + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex justify-center gap-2 mb-4">
                    {project.images.map((_: any, index: number) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`w-3 h-3 rounded-full transition-colors ${
                          index === currentImageIndex ? 'bg-primary' : 'bg-muted-foreground/30'
                        }`}
                      />
                    ))}
                  </div>
                  <div className="flex justify-center gap-4">
                    <Button variant="outline" size="sm" onClick={prevImage}>
                      ←
                    </Button>
                    <Button variant="outline" size="sm" onClick={nextImage}>
                      →
                    </Button>
                  </div>
                </div>
              </section>

              {/* Overview */}
              <section>
                <h2 className="text-2xl font-bold mb-6">{t.overview}</h2>
                <div className="prose prose-gray max-w-none">
                  <p className="text-lg leading-relaxed mb-4">{project.description}</p>
                  <p className="leading-relaxed">{project.longDescription}</p>
                </div>
              </section>

              {/* Features */}
              <section>
                <h2 className="text-2xl font-bold mb-6">{t.features}</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {project.features.map((feature: string, index: number) => (
                    <div key={index} className="flex items-start gap-3 p-4 bg-muted/50 rounded-lg">
                      <Zap className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </section>

              {/* Challenges & Solutions */}
              <div className="grid md:grid-cols-2 gap-8">
                <section>
                  <h2 className="text-2xl font-bold mb-6">{t.challenges}</h2>
                  <ul className="space-y-3">
                    {project.challenges.map((challenge: string, index: number) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-red-500 rounded-full mt-3 flex-shrink-0" />
                        <span>{challenge}</span>
                      </li>
                    ))}
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-6">{t.solutions}</h2>
                  <ul className="space-y-3">
                    {project.solutions.map((solution: string, index: number) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-green-500 rounded-full mt-3 flex-shrink-0" />
                        <span>{solution}</span>
                      </li>
                    ))}
                  </ul>
                </section>
              </div>

              {/* Results */}
              <section>
                <h2 className="text-2xl font-bold mb-6">{t.results}</h2>
                <div className="grid md:grid-cols-3 gap-6">
                  {project.results.map((result: string, index: number) => (
                    <Card key={index}>
                      <CardContent className="p-6 text-center">
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                          <Zap className="h-6 w-6 text-primary" />
                        </div>
                        <p className="font-medium">{result}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </section>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Project Details */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-4">{t.projectDetails}</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                      <div>
                        <p className="text-sm text-muted-foreground">{t.duration}</p>
                        <p className="font-medium">{project.duration}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Users className="h-4 w-4 text-muted-foreground" />
                      <div>
                        <p className="text-sm text-muted-foreground">{t.teamSize}</p>
                        <p className="font-medium">{project.teamSize}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Code className="h-4 w-4 text-muted-foreground" />
                      <div>
                        <p className="text-sm text-muted-foreground">{t.myRole}</p>
                        <p className="font-medium">{project.myRole}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Technologies */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-4">{t.technologies}</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech: string) => (
                      <Badge key={tech} variant="outline">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;