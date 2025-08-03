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
      title: 'QR Logistics',
      subtitle: language === 'nl' ? 'Logistieke management oplossing' : 'Logistics management solution',
      category: 'school',
      description: language === 'nl' 
        ? 'Een logistieke webapplicatie waarmee bedrijven hun orders, zendingen en voorraad eenvoudig kunnen beheren via QR-scans. Ontwikkeld met aandacht voor gebruiksgemak, inzicht en procesoptimalisatie.'
        : 'A logistics web application that allows companies to easily manage their orders, shipments and inventory through QR scans. Developed with attention to ease of use, insight and process optimization.',
      longDescription: language === 'nl'
        ? 'Dit schoolproject was gericht op het digitaliseren van logistieke processen binnen bedrijven. Door gebruik te maken van QR-codes kunnen medewerkers snel en accuraat voorraad scannen, orders verwerken en zendingen bijhouden. De applicatie combineert een intuïtieve mobile interface met een robuuste backend voor realtime data synchronisatie.'
        : 'This school project was focused on digitalizing logistics processes within companies. By using QR codes, employees can quickly and accurately scan inventory, process orders and track shipments. The application combines an intuitive mobile interface with a robust backend for real-time data synchronization.',
      technologies: ['React Native', 'TypeScript', 'Tailwind CSS', 'NativeWind', 'C#', '.NET Framework'],
      duration: language === 'nl' ? '4 maanden' : '4 months',
      teamSize: language === 'nl' ? '5 studenten' : '5 students',
      myRole: language === 'nl' ? 'Frontend Developer & UI/UX Designer' : 'Frontend Developer & UI/UX Designer',
      features: language === 'nl' ? [
        'QR-code scanning voor voorraad beheer',
        'Order tracking en management',
        'Zending status updates',
        'Realtime voorraad overzicht',
        'Mobiele applicatie voor warehouse medewerkers',
        'Dashboard voor managers en supervisors',
        'Geïntegreerde rapportage tools',
        'Multi-user ondersteuning met rollen'
      ] : [
        'QR-code scanning for inventory management',
        'Order tracking and management',
        'Shipment status updates',
        'Real-time inventory overview',
        'Mobile application for warehouse employees',
        'Dashboard for managers and supervisors',
        'Integrated reporting tools',
        'Multi-user support with roles'
      ],
      challenges: language === 'nl' ? [
        'Realtime synchronisatie tussen mobile app en backend',
        'QR-code generatie en scanning optimalisatie',
        'Complexe voorraad management logica',
        'Cross-platform compatibility voor mobile app'
      ] : [
        'Real-time synchronization between mobile app and backend',
        'QR-code generation and scanning optimization',
        'Complex inventory management logic',
        'Cross-platform compatibility for mobile app'
      ],
      solutions: language === 'nl' ? [
        'SignalR implementatie voor realtime updates',
        'Optimized QR-code library integratie',
        'Gestructureerde database design met constraints',
        'React Native voor cross-platform development'
      ] : [
        'SignalR implementation for real-time updates',
        'Optimized QR-code library integration',
        'Structured database design with constraints',
        'React Native for cross-platform development'
      ],
      results: language === 'nl' ? [
        '70% sneller voorraad beheer proces',
        '95% accuratesse in order tracking',
        'Hoogste beoordeling van het semester',
        'Positieve feedback van industry experts'
      ] : [
        '70% faster inventory management process',
        '95% accuracy in order tracking',
        'Highest grade of the semester',
        'Positive feedback from industry experts'
      ],
      images: [
        `${import.meta.env.BASE_URL}QRLogistics1.jpeg`,
        `${import.meta.env.BASE_URL}QRLogistics2.jpeg`,
        `${import.meta.env.BASE_URL}QRLogistics3.jpeg`,
        `${import.meta.env.BASE_URL}QRLogistics4.jpeg`,
        `${import.meta.env.BASE_URL}QRLogistics5.png`,
        `${import.meta.env.BASE_URL}QRLogistics6.png`,
      ],
      liveUrl: '#', // Vervang met echte URL indien beschikbaar
      githubUrl: 'https://github.com/Motje3/QR-Scanner-Tracking'
    },

    '2': {
      title: 'Voetbal-app',
      subtitle: language === 'nl' ? 'Sociale voetbal voorspelling app' : 'Social football prediction app',
      category: 'personal',
      description: language === 'nl' 
        ? 'Een sociale voetbal-app waarin gebruikers wedstrijden kunnen voorspellen, vrienden kunnen volgen en coins verdienen voor correcte voorspellingen.'
        : 'A social football app where users can predict matches, follow friends and earn coins for correct predictions.',
      longDescription: language === 'nl'
        ? 'Deze persoonlijke app project combineert mijn passie voor voetbal met mobile development. Gebruikers kunnen wedstrijden voorspellen, vrienden uitdagen en coins verdienen die ingewisseld kunnen worden voor cosmetische items en profiel-aanpassingen.'
        : 'This personal app project combines my passion for football with mobile development. Users can predict matches, challenge friends and earn coins that can be exchanged for cosmetic items and profile customizations.',
      technologies: ['React Native', 'JavaScript', 'Firebase', 'Expo'],
      duration: language === 'nl' ? '3 maanden' : '3 months',
      teamSize: language === 'nl' ? '1 developer (zelf)' : '1 developer (solo)',
      myRole: language === 'nl' ? 'Solo Developer & Designer' : 'Solo Developer & Designer',
      features: language === 'nl' ? [
        'Wedstrijd voorspellingen systeem',
        'Vrienden volgen en uitdagen',
        'Coins verdienen systeem',
        'Cosmetische items shop',
        'Profiel customization',
        'Leaderboards en rankings',
        'Live match updates',
        'Push notificaties'
      ] : [
        'Match prediction system',
        'Follow and challenge friends',
        'Coin earning system',
        'Cosmetic items shop',
        'Profile customization',
        'Leaderboards and rankings',
        'Live match updates',
        'Push notifications'
      ],
      challenges: language === 'nl' ? [
        'Live voetbal data integratie',
        'Coins economie balancing',
        'Social features implementatie'
      ] : [
        'Live football data integration',
        'Coin economy balancing',
        'Social features implementation'
      ],
      solutions: language === 'nl' ? [
        'Externe API voor voetbal data',
        'Uitgebalanceerd reward systeem',
        'Firebase voor realtime social features'
      ] : [
        'External API for football data',
        'Balanced reward system',
        'Firebase for real-time social features'
      ],
      results: language === 'nl' ? [
        'Eerste complete mobile app project',
        'Leerde Firebase integratie',
        'Positieve feedback van testers'
      ] : [
        'First complete mobile app project',
        'Learned Firebase integration',
        'Positive feedback from testers'
      ],
      images: [
        `${import.meta.env.BASE_URL}voetbalbanner.png`,        
        `${import.meta.env.BASE_URL}voetbal1.jpeg`,
        `${import.meta.env.BASE_URL}voetbal2.jpeg`,
        `${import.meta.env.BASE_URL}voetbal3.jpeg`,
        `${import.meta.env.BASE_URL}voetbal4.jpeg`
      ],
      liveUrl: '#',
      githubUrl: '#'
    },

    '3': {
    title: 'TableTech',
    subtitle: language === 'nl' ? 'Horeca management platform' : 'Hospitality management platform',
    category: 'personal',
    description: language === 'nl' 
      ? 'Een alles-in-één dashboard voor horecazaken, waarmee personeel menu\'s kan beheren, feedback kan ontvangen, voorraden bijhouden en klanttevredenheid verhogen.'
      : 'An all-in-one dashboard for hospitality businesses, allowing staff to manage menus, receive feedback, track inventory and increase customer satisfaction.',
    longDescription: language === 'nl'
      ? 'TableTech is een ambitieus project gericht op het digitaliseren van horecaprocessen. Het platform biedt restauranthouders een complete oplossing voor menu-beheer, voorraadcontrole en klantinteractie via digitale bestelmogelijkheden.'
      : 'TableTech is an ambitious project aimed at digitalizing hospitality processes. The platform offers restaurant owners a complete solution for menu management, inventory control and customer interaction through digital ordering options.',
    technologies: ['React', 'Node.js', 'NeonDB', 'Express.js', 'TypeScript'],
    duration: language === 'nl' ? '6 maanden' : '6 months',
    teamSize: language === 'nl' ? '4 developers' : '4 developers',
    myRole: language === 'nl' ? 'Full Stack Developer & Product Owner' : 'Full Stack Developer & Product Owner',
    features: language === 'nl' ? [
      'Menu beheer systeem',
      'Digitale bestelmogelijkheden',
      'Feedback en review systeem',
      'Voorraad tracking',
      'Analytics dashboard',
      'Multi-restaurant ondersteuning',
      'Staff management tools',
      'Klant loyalty programma'
    ] : [
      'Menu management system',
      'Digital ordering capabilities',
      'Feedback and review system',
      'Inventory tracking',
      'Analytics dashboard',
      'Multi-restaurant support',
      'Staff management tools',
      'Customer loyalty program'
    ],
    challenges: language === 'nl' ? [
      'Complexe restaurant workflows modelleren',
      'Realtime order synchronisatie',
      'Scalable database architectuur'
    ] : [
      'Modeling complex restaurant workflows',
      'Real-time order synchronization',
      'Scalable database architecture'
    ],
    solutions: language === 'nl' ? [
      'Modulaire microservices architectuur',
      'WebSocket implementatie voor realtime updates',
      'MongoDB voor flexibele data opslag'
    ] : [
      'Modular microservices architecture',
      'WebSocket implementation for real-time updates',
      'MongoDB for flexible data storage'
    ],
    results: language === 'nl' ? [
      'Volledig werkend MVP ontwikkeld',
      'Interesse van lokale restaurants',
      'Basis voor vervolgprojecten'
    ] : [
      'Fully working MVP developed',
      'Interest from local restaurants',
      'Foundation for follow-up projects'
    ],
    images: [
      `${import.meta.env.BASE_URL}TableTech1.jpeg`,
      `${import.meta.env.BASE_URL}TableTech2.jpeg`,
      `${import.meta.env.BASE_URL}TableTech3.png`,
      `${import.meta.env.BASE_URL}TableTech4.png`,
      `${import.meta.env.BASE_URL}TableTech5.png`,
      `${import.meta.env.BASE_URL}TableTech6.png`,
      `${import.meta.env.BASE_URL}TableTech7.png`
    ],
    liveUrl: '#',
    githubUrl: 'https://github.com/Table-Tech/TableTech-app'
  },

  '4': {
    title: 'TableTech Website',
    subtitle: language === 'nl' ? 'Marketing en landing pagina' : 'Marketing and landing page',
    category: 'personal',
    description: language === 'nl' 
      ? 'De officiële website van TableTech waarmee horecaondernemers kennismaken met het platform. De site legt de voordelen uit en is geoptimaliseerd voor SEO en conversie.'
      : 'The official TableTech website where hospitality entrepreneurs get acquainted with the platform. The site explains the benefits and is optimized for SEO and conversion.',
    longDescription: language === 'nl'
      ? 'Als aanvulling op het TableTech platform ontwikkelde ik een professionele marketing website om potentiële klanten te werven. De site focust op het overbrengen van de kernwaarden en het stimuleren van conversies via strategisch geplaatste call-to-actions.'
      : 'As a complement to the TableTech platform, I developed a professional marketing website to attract potential customers. The site focuses on conveying core values and stimulating conversions through strategically placed call-to-actions.',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'SASS', 'Responsive Design'],
    duration: language === 'nl' ? '6 maanden' : '6 months',
    teamSize: language === 'nl' ? '4 developers' : '4 developers',
    myRole: language === 'nl' ? 'Frontend Developer & UX Designer' : 'Frontend Developer & UX Designer',
    features: language === 'nl' ? [
      'Responsieve landing pagina',
      'SEO geoptimaliseerde content',
      'Call-to-action strategieën',
      'Contact formulieren',
      'Feature showcase secties',
      'Testimonials integratie',
      'Newsletter signup',
      'Performance optimalisatie'
    ] : [
      'Responsive landing page',
      'SEO optimized content',
      'Call-to-action strategies',
      'Contact forms',
      'Feature showcase sections',
      'Testimonials integration',
      'Newsletter signup',
      'Performance optimization'
    ],
    challenges: language === 'nl' ? [
      'Conversie optimalisatie',
      'SEO implementatie',
      'Cross-browser compatibility'
    ] : [
      'Conversion optimization',
      'SEO implementation',
      'Cross-browser compatibility'
    ],
    solutions: language === 'nl' ? [
      'A/B testing voor CTA plaatsing',
      'Semantic HTML en meta tags',
      'Progressive enhancement principes'
    ] : [
      'A/B testing for CTA placement',
      'Semantic HTML and meta tags',
      'Progressive enhancement principles'
    ],
    results: language === 'nl' ? [
      'Hoge conversion rate achieved',
      'Goede SEO rankings',
      'Professionele brand presentatie'
    ] : [
      'High conversion rate achieved',
      'Good SEO rankings',
      'Professional brand presentation'
    ],
    images: [
      `${import.meta.env.BASE_URL}TableTechWeb1.png`,
      `${import.meta.env.BASE_URL}TableTechWeb2.png`,
    ],
    liveUrl: 'https://tabletech.nl/',
    githubUrl: 'https://github.com/Table-Tech/TableTech-website'
  },

  '5': {
    title: 'Willes Rijschool Website',
    subtitle: language === 'nl' ? 'Rijschool website ontwikkeling' : 'Driving school website development',
    category: 'client',
    description: language === 'nl' 
      ? 'Een moderne en overzichtelijke website voor Willes Rijschool waarmee bezoekers eenvoudig informatie kunnen vinden over rijlessen, tarieven en contactgegevens.'
      : 'A modern and clear website for Willes Driving School where visitors can easily find information about driving lessons, rates and contact details.',
    longDescription: language === 'nl'
      ? 'Voor Willes Rijschool ontwikkelde ik een professionele website die vertrouwen uitstraalt en potentiële leerlingen informeert over de diensten. De site is geoptimaliseerd voor lokale SEO en conversie van bezoekers naar klanten.'
      : 'For Willes Driving School I developed a professional website that radiates trust and informs potential students about the services. The site is optimized for local SEO and conversion of visitors to customers.',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design', 'SEO'],
    duration: language === 'nl' ? '3 weken' : '3 weeks',
    teamSize: language === 'nl' ? '1 developer (zelf)' : '1 developer (solo)',
    myRole: language === 'nl' ? 'Frontend Developer & Designer' : 'Frontend Developer & Designer',
    features: language === 'nl' ? [
      'Responsive website design',
      'Service overzicht pagina\'s',
      'Tarieven en pakketten',
      'Contact formulier',
      'Google Maps integratie',
      'Mobiel-geoptimaliseerde navigatie',
      'Call-to-action buttons',
      'SEO-vriendelijke structuur'
    ] : [
      'Responsive website design',
      'Service overview pages',
      'Rates and packages',
      'Contact form',
      'Google Maps integration',
      'Mobile-optimized navigation',
      'Call-to-action buttons',
      'SEO-friendly structure'
    ],
    challenges: language === 'nl' ? [
      'Vertrouwen opbouwen via design',
      'Lokale SEO optimalisatie',
      'Gebruiksvriendelijke informatie presentatie'
    ] : [
      'Building trust through design',
      'Local SEO optimization',
      'User-friendly information presentation'
    ],
    solutions: language === 'nl' ? [
      'Professionele kleurenschema en typography',
      'Lokale keywords en schema markup',
      'Intuïtieve informatie architectuur'
    ] : [
      'Professional color scheme and typography',
      'Local keywords and schema markup',
      'Intuitive information architecture'
    ],
    results: language === 'nl' ? [
      'Tevreden klant met meer online aanmeldingen',
      'Verbeterde online zichtbaarheid',
      'Professionele online presentatie'
    ] : [
      'Satisfied client with more online registrations',
      'Improved online visibility',
      'Professional online presentation'
    ],
    images: [
      `${import.meta.env.BASE_URL}willes1.png`,
      `${import.meta.env.BASE_URL}willes2.png`,
      `${import.meta.env.BASE_URL}willes3.png`
    ],
    liveUrl: 'https://willesrijschool.nl/',
    githubUrl: 'https://github.com/Damian5314/v0-remake-willesrijschool'
  },

  '6': {
    title: 'CaboFeira',
    subtitle: language === 'nl' ? 'Kaapverdische marktplaats' : 'Cape Verdean marketplace',
    category: 'client',
    description: language === 'nl' 
      ? 'CaboFeira is een online marktplaats speciaal ontwikkeld voor de Kaapverdische gemeenschap om tweedehands spullen te verkopen of producten te zoeken.'
      : 'CaboFeira is an online marketplace specially developed for the Cape Verdean community to sell second-hand items or search for products.',
    longDescription: language === 'nl'
      ? 'CaboFeira werd ontwikkeld als een niche marktplaats voor de Kaapverdische gemeenschap. Het platform biedt een vertrouwde omgeving waar mensen uit deze gemeenschap veilig kunnen handelen in tweedehands goederen.'
      : 'CaboFeira was developed as a niche marketplace for the Cape Verdean community. The platform provides a trusted environment where people from this community can safely trade in second-hand goods.',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'PHP', 'MySQL'],
    duration: language === 'nl' ? '6 weken' : '6 weeks',
    teamSize: language === 'nl' ? '1 developer (zelf)' : '1 developer (solo)',
    myRole: language === 'nl' ? 'Full Stack Developer' : 'Full Stack Developer',
    features: language === 'nl' ? [
      'Product advertentie systeem',
      'Gebruiker registratie en profielen',
      'Zoek en filter functionaliteiten',
      'Categorie gebaseerde browsen',
      'Contact tussen kopers en verkopers',
      'Afbeelding upload systeem',
      'Responsive design',
      'Meertalige ondersteuning'
    ] : [
      'Product advertisement system',
      'User registration and profiles',
      'Search and filter functionalities',
      'Category-based browsing',
      'Contact between buyers and sellers',
      'Image upload system',
      'Responsive design',
      'Multilingual support'
    ],
    challenges: language === 'nl' ? [
      'Culturele specificaties integreren',
      'Vertrouwen opbouwen in online handel',
      'Gebruiksvriendelijkheid voor diverse leeftijden'
    ] : [
      'Integrating cultural specifications',
      'Building trust in online trading',
      'User-friendliness for diverse ages'
    ],
    solutions: language === 'nl' ? [
      'Community-gerichte features',
      'Transparante gebruiker verificatie',
      'Intuïtieve interface met duidelijke navigatie'
    ] : [
      'Community-focused features',
      'Transparent user verification',
      'Intuitive interface with clear navigation'
    ],
    results: language === 'nl' ? [
      'Actieve gebruikersbasis opgebouwd',
      'Positieve community feedback',
      'Succesvolle handelstransacties'
    ] : [
      'Active user base built',
      'Positive community feedback',
      'Successful trading transactions'
    ],
    images: [
      `${import.meta.env.BASE_URL}CaboFeira1.png`,
    ],
    liveUrl: 'https://cabofeira.com/',
    githubUrl: '#'
  },

  '7': {
    title: 'Space Monkey',
    subtitle: language === 'nl' ? 'Interactieve terminal game' : 'Interactive terminal game',
    category: 'school',
    description: language === 'nl' 
      ? 'Space Monkey is een interactieve terminal-game geschreven in Python waarin je speelt als Jararis, een hyperintelligente aap op een missie om de mensheid te redden.'
      : 'Space Monkey is an interactive terminal game written in Python where you play as Jararis, a hyper-intelligent monkey on a mission to save humanity.',
    longDescription: language === 'nl'
      ? 'Dit schoolproject combineert programmeervaardigheden met storytelling. De game bevat een uitgebreid verhaal met meerdere paden, puzzels en interactieve elementen, allemaal gespeeld via de terminal met een flinke dosis humor.'
      : 'This school project combines programming skills with storytelling. The game contains an extensive story with multiple paths, puzzles and interactive elements, all played through the terminal with a good dose of humor.',
    technologies: ['Python', 'Object-Oriented Programming', 'File I/O', 'Game Logic'],
    duration: language === 'nl' ? '1 week' : '1 week',
    teamSize: language === 'nl' ? '3 developers' : '3 developers',
    myRole: language === 'nl' ? 'Game Developer & Story Writer' : 'Game Developer & Story Writer',
    features: language === 'nl' ? [
      'Interactief verhaal met keuzes',
      'Multiple choice gameplay',
      'Puzzels en raadsels',
      'Galgje mini-game',
      'Character development systeem',
      'Save/load functionaliteit',
      'ASCII art en styling',
      'Humor en satire elementen'
    ] : [
      'Interactive story with choices',
      'Multiple choice gameplay',
      'Puzzles and riddles',
      'Hangman mini-game',
      'Character development system',
      'Save/load functionality',
      'ASCII art and styling',
      'Humor and satire elements'
    ],
    challenges: language === 'nl' ? [
      'Complexe verhaalstructuur programmeren',
      'User input validatie en error handling',
      'Game state management'
    ] : [
      'Programming complex story structure',
      'User input validation and error handling',
      'Game state management'
    ],
    solutions: language === 'nl' ? [
      'Object-oriented design voor game states',
      'Robuuste input validation functies',
      'Modulaire verhaal sectie architectuur'
    ] : [
      'Object-oriented design for game states',
      'Robust input validation functions',
      'Modular story section architecture'
    ],
    results: language === 'nl' ? [
      'Succesvolle combinatie van programmeren en creativiteit',
      'Positieve feedback op storytelling',
      'Goede beoordeling voor technische implementatie'
    ] : [
      'Successful combination of programming and creativity',
      'Positive feedback on storytelling',
      'Good grade for technical implementation'
    ],
    images: [
      `${import.meta.env.BASE_URL}SpaceMonkey1.png`,
    ],
    liveUrl: '#',
    githubUrl: 'https://github.com/Damian5314/Spacemonkey'
  },

  '8': {
    title: '2D Battle Game',
    subtitle: language === 'nl' ? 'Hackathon Pokémon-stijl game' : 'Hackathon Pokémon-style game',
    category: 'event',
    description: language === 'nl' 
      ? 'Een Pokémon-achtige browsergame ontwikkeld tijdens een GitHub Copilot Hackathon op 21 mei 2025, georganiseerd door Xebia in Hilversum.'
      : 'A Pokémon-like browser game developed during a GitHub Copilot Hackathon on May 21, 2025, organized by Xebia in Hilversum.',
    longDescription: language === 'nl'
      ? 'Tijdens deze intensieve hackathon ontwikkelde ons team een werkende Pokémon-achtige game binnen enkele uren met behulp van GitHub Copilot. Het project toonde de kracht van AI-assistentie bij snelle prototyping en game development.'
      : 'During this intensive hackathon, our team developed a working Pokémon-like game within a few hours using GitHub Copilot. The project demonstrated the power of AI assistance in rapid prototyping and game development.',
    technologies: ['HTML5', 'JavaScript', 'CSS3', 'GitHub Copilot', 'Canvas API'],
    duration: language === 'nl' ? '2 uur (hackathon)' : '2 hours (hackathon)',
    teamSize: language === 'nl' ? '2 developers' : '2 developers',
    myRole: language === 'nl' ? 'Frontend Developer & Game Logic' : 'Frontend Developer & Game Logic',
    features: language === 'nl' ? [
      'Karakter beweging op speelveld',
      'Wilde Pokémon encounters',
      'Turn-based battle systeem',
      'Health en stats tracking',
      'Multiple Pokémon types',
      'Attack move systeem',
      'Victory/defeat conditions',
      'Responsive controls'
    ] : [
      'Character movement on game field',
      'Wild Pokémon encounters',
      'Turn-based battle system',
      'Health and stats tracking',
      'Multiple Pokémon types',
      'Attack move system',
      'Victory/defeat conditions',
      'Responsive controls'
    ],
    challenges: language === 'nl' ? [
      'Tijdsdruk van hackathon formaat',
      'Team coördinatie onder druk',
      'AI tool effectief gebruiken'
    ] : [
      'Time pressure of hackathon format',
      'Team coordination under pressure',
      'Using AI tools effectively'
    ],
    solutions: language === 'nl' ? [
      'Duidelijke taakverdelingen',
      'GitHub Copilot voor snelle code generatie',
      'Focus op core gameplay features'
    ] : [
      'Clear task divisions',
      'GitHub Copilot for rapid code generation',
      'Focus on core gameplay features'
    ],
    results: language === 'nl' ? [
      'Werkende game binnen deadline',
      'Eerste ervaring met AI-assisted development',
      'Goede teamwork onder druk'
    ] : [
      'Working game within deadline',
      'First experience with AI-assisted development',
      'Good teamwork under pressure'
    ],
    images: [
      `${import.meta.env.BASE_URL}PokemonHackathon1.png`,
      `${import.meta.env.BASE_URL}PokemonHackathon2.png`,
      `${import.meta.env.BASE_URL}PokemonHackathon3.png`
    ],
    liveUrl: '#',
    githubUrl: 'https://github.com/Damian5314/Github-Copilot-Hackathon'
  },

  '9': {
    title: 'Brick Breaker',
    subtitle: language === 'nl' ? 'Moderne arcade game remake' : 'Modern arcade game remake',
    category: 'personal',
    description: language === 'nl' 
      ? 'Brick Breaker is een moderne versie van het klassieke arcadespel, gemaakt in Lua met de LÖVE 2D-engine. De game bevat upgrades, meerdere ballen en verschillende soorten blokken.'
      : 'Brick Breaker is a modern version of the classic arcade game, made in Lua with the LÖVE 2D engine. The game features upgrades, multiple balls and different types of blocks.',
    longDescription: language === 'nl'
      ? 'Als persoonlijk project om game development te leren, creëerde ik een moderne interpretatie van het klassieke Brick Breaker spel. Het project focuste op het leren van game physics, collision detection en de LÖVE 2D engine.'
      : 'As a personal project to learn game development, I created a modern interpretation of the classic Brick Breaker game. The project focused on learning game physics, collision detection and the LÖVE 2D engine.',
    technologies: ['Lua', 'LÖVE 2D', 'Game Physics', 'Collision Detection'],
    duration: language === 'nl' ? '3 dagen' : '3 days',
    teamSize: language === 'nl' ? '1 developer (zelf)' : '1 developer (solo)',
    myRole: language === 'nl' ? 'Game Developer & Designer' : 'Game Developer & Designer',
    features: language === 'nl' ? [
      'Klassieke brick breaking gameplay',
      'Power-ups en upgrades systeem',
      'Meerdere ballen tegelijkertijd',
      'Verschillende blok types',
      'Score en high score tracking',
      'Paddle size modificaties',
      'Particle effects',
      'Responsive paddle controls'
    ] : [
      'Classic brick breaking gameplay',
      'Power-ups and upgrade system',
      'Multiple balls simultaneously',
      'Different block types',
      'Score and high score tracking',
      'Paddle size modifications',
      'Particle effects',
      'Responsive paddle controls'
    ],
    challenges: language === 'nl' ? [
      'Nauwkeurige collision detection',
      'Ball physics implementatie',
      'Game state management'
    ] : [
      'Accurate collision detection',
      'Ball physics implementation',
      'Game state management'
    ],
    solutions: language === 'nl' ? [
      'LÖVE 2D physics systeem gebruiken',
      'Optimized collision algorithms',
      'Clean state machine architectuur'
    ] : [
      'Using LÖVE 2D physics system',
      'Optimized collision algorithms',
      'Clean state machine architecture'
    ],
    results: language === 'nl' ? [
      'Eerste complete game in Lua',
      'Leerde game development fundamentals',
      'Werkende physics-based gameplay'
    ] : [
      'First complete game in Lua',
      'Learned game development fundamentals',
      'Working physics-based gameplay'
    ],
    images: [
      `${import.meta.env.BASE_URL}brick1.png`,
      `${import.meta.env.BASE_URL}brick2.png`,
      `${import.meta.env.BASE_URL}brick3.png`,
    ],
    liveUrl: '#',
    githubUrl: 'https://github.com/Damian5314/brick-breaker'
  },
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