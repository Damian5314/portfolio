import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, Users, ArrowLeft, Image as ImageIcon } from 'lucide-react';
import { Card } from '@/components/ui/card';
import CTASection from '@/components/CTASection';

interface EventDetailProps {
  language: 'nl' | 'en';
}

interface EventData {
  type: string;
  title: string;
  date: string;
  location: string;
  attendees: string;
  description: string;
  experience: string;
  highlights: string[];
  learnings: string[];
  conclusion: string;
  image?: string;
  additionalImages?: string[];
}

const EventDetail: React.FC<EventDetailProps> = ({ language }) => {
  const { id } = useParams<{ id: string }>();

  const translations = {
    nl: {
      backToEvents: 'Terug naar evenementen',
      myExperience: 'Mijn Ervaring',
      highlights: 'Hoogtepunten',
      photos: "Foto's",
      whatILearned: 'Wat Ik Heb Geleerd',
      conclusion: 'Conclusie',
      viewAllEvents: 'Bekijk alle evenementen',
    },
    en: {
      backToEvents: 'Back to events',
      myExperience: 'My Experience',
      highlights: 'Highlights',
      photos: 'Photos',
      whatILearned: 'What I Learned',
      conclusion: 'Conclusion',
      viewAllEvents: 'View all events',
    },
  };

  const t = translations[language];

  // Event data
  const eventsData: { [key: string]: EventData } = {
    'citylab010': {
      type: 'Workshop',
      title: 'CityLab010 Netwerkevent',
      date: language === 'nl' ? '10 september 2025' : 'September 10, 2025',
      location: 'Het Timmerhuis, Rotterdam',
      attendees: 'TBD',
      description: language === 'nl'
        ? 'Het jaarlijkse netwerkevent van CityLab010 waar plannenmakers, de Stadsjury, partners en gemeentelijke experts samenkomen. Een inspirerende avond vol ontmoeting met workshops over het CityLab-proces en werken vanuit leefwerelden.'
        : 'The annual networking event of CityLab010 where planners, the City Jury, partners and municipal experts come together. An inspiring evening full of meetings with workshops about the CityLab process and working from living environments.',
      image: '/events/Netwerkavond Citylab010.jpg',
      additionalImages: ['/events/Citylab010Netwerkavond2.jpg', '/events/Citylab010Netwerkavond3.jpg'],
      experience: language === 'nl'
        ? 'Ik kwam naar dit netwerkevent samen met Hicham Tahiri en Wishant Bhajan. We presenteerden ons eigen idee: een app voor toerisme in Rotterdam. Tijdens de avond spraken we met veel verschillende mensen over hun ideeën en plannen voor de stad, en kregen we waardevolle feedback op ons concept.'
        : 'I came to this networking event together with Hicham Tahiri and Wishant Bhajan. We presented our own idea: an app for tourism in Rotterdam. During the evening we spoke with many different people about their ideas and plans for the city, and received valuable feedback on our concept.',
      highlights: language === 'nl'
        ? [
            'Presentatie van ons Rotterdam toerisme app concept aan eigen tafel',
            'Gesprekken met plannenmakers, Stadsjury en gemeentelijke experts',
            'Workshop over het CityLab-proces en wat je kunt verwachten',
            'Workshop door Concrete Blossom over werken vanuit leefwerelden',
            'Inzicht in cultureel erfgoed en leefwerelden in sociaal ondernemerschap',
            'Gesprekken met oud-deelnemers over hun ervaringen binnen CityLab010',
          ]
        : [
            'Presentation of our Rotterdam tourism app concept at own table',
            'Conversations with planners, City Jury and municipal experts',
            'Workshop about the CityLab process and what to expect',
            'Workshop by Concrete Blossom about working from living environments',
            'Insights into cultural heritage and living environments in social entrepreneurship',
            'Conversations with former participants about their experiences within CityLab010',
          ],
      learnings: language === 'nl'
        ? [
            'Het CityLab010 proces en ondersteuningsprogramma voor plannenmakers',
            'Hoe je authentiek kunt werken vanuit je eigen context',
            'Slim inspelen op mogelijkheden binnen het gemeentelijk systeem',
            'Waarde van cultureel erfgoed in sociaal ondernemerschap',
            'Feedback verzamelen en netwerken met stakeholders',
            'Criteria waar de Stadsjury op let bij het beoordelen van plannen',
          ]
        : [
            'The CityLab010 process and support program for planners',
            'How to work authentically from your own context',
            'Smartly responding to opportunities within the municipal system',
            'Value of cultural heritage in social entrepreneurship',
            'Gathering feedback and networking with stakeholders',
            'Criteria that the City Jury considers when evaluating plans',
          ],
      conclusion: language === 'nl'
        ? 'CityLab010 Netwerkevent was een waardevolle ervaring om ons Rotterdam toerisme app idee te pitchen en te valideren. De gesprekken met experts en andere plannenmakers gaven ons inzicht in hoe we ons concept kunnen verbeteren en hoe het gemeentelijk ondersteuningsprogramma werkt. De workshops over werken vanuit leefwerelden en het CityLab-proces waren zeer informatief.'
        : 'CityLab010 Networking event was a valuable experience to pitch and validate our Rotterdam tourism app idea. The conversations with experts and other planners gave us insights into how we can improve our concept and how the municipal support program works. The workshops about working from living environments and the CityLab process were very informative.',
    },
    'agency-at-night': {
      type: 'Meetup',
      title: 'Agency at Night',
      date: language === 'nl' ? '16 mei 2025' : 'May 16, 2025',
      location: 'Rotterdam (51 agencies)',
      attendees: 'TBD',
      description: language === 'nl'
        ? 'Een unieke avond waarbij je achter de schermen kijkt bij 51 creatieve en digitale agencies in Rotterdam. Met talks, exhibitions, workshops en meer over marketing, AI, branding, media en design.'
        : 'A unique evening where you go behind the scenes at 51 creative and digital agencies in Rotterdam. With talks, exhibitions, workshops and more about marketing, AI, branding, media and design.',
      image: '/events/Agency at night.png',
      additionalImages: ['/events/AgencyAtNight2.jpg', '/events/AgencyAtNight3.jpg'],
      experience: language === 'nl'
        ? 'Ik ging naar Agency at Night samen met Hicham Tahiri en Wishant Bhajan. We bezochten 6 verschillende agencies en namen deel aan diverse workshops en activiteiten. Het was een inspirerende avond vol leren over marketing automation, AI, SEO en creatieve challenges.'
        : 'I attended Agency at Night together with Hicham Tahiri and Wishant Bhajan. We visited 6 different agencies and participated in various workshops and activities. It was an inspiring evening full of learning about marketing automation, AI, SEO and creative challenges.',
      highlights: language === 'nl'
        ? [
            '100procent | united playground: Workshop "Marketing automation voor maximaal resultaat"',
            'Marketing Engineers: GeoGuessr gaming sessie',
            'Tastylemon: Fotosessie en brand experience',
            'Das Buro: Quiz/examen en Das Buro Branding Professional Degree certificate behaald',
            'Candid: v0.dev AI prompting challenge',
            'Buro voor de boeg: Workshop "AI inzetten voor jouw zoekmachine optimalisatie"',
          ]
        : [
            '100procent | united playground: Workshop "Marketing automation for maximum results"',
            'Marketing Engineers: GeoGuessr gaming session',
            'Tastylemon: Photo session and brand experience',
            'Das Buro: Quiz/exam and earned Das Buro Branding Professional Degree certificate',
            'Candid: v0.dev AI prompting challenge',
            'Buro voor de boeg: Workshop "Using AI for your search engine optimization"',
          ],
      learnings: language === 'nl'
        ? [
            'Marketing automation strategieën voor maximaal resultaat',
            'Praktische AI inzet voor SEO en zoekmachine optimalisatie',
            'AI prompting voor snelle development met v0.dev',
            'Branding fundamentals en professional degree certificering',
            'Netwerken met creative professionals in Rotterdam',
            'Inzicht in verschillende agency specialisaties en werkwijzen',
          ]
        : [
            'Marketing automation strategies for maximum results',
            'Practical AI implementation for SEO and search engine optimization',
            'AI prompting for rapid development with v0.dev',
            'Branding fundamentals and professional degree certification',
            'Networking with creative professionals in Rotterdam',
            'Insights into different agency specializations and workflows',
          ],
      conclusion: language === 'nl'
        ? 'Agency at Night was een unieke kans om in één avond kennis te maken met verschillende creative agencies in Rotterdam. Van marketing automation tot AI-gedreven SEO, en van branding challenges tot AI prompting - de diversiteit aan workshops en activiteiten gaf een breed perspectief op de creative industry. Het Das Buro Branding Professional Degree certificate was een leuke bonus!'
        : 'Agency at Night was a unique opportunity to get to know different creative agencies in Rotterdam in one evening. From marketing automation to AI-driven SEO, and from branding challenges to AI prompting - the diversity of workshops and activities provided a broad perspective on the creative industry. The Das Buro Branding Professional Degree certificate was a nice bonus!',
    },
    'buildweekend-young-creators': {
      type: 'Workshop',
      title: 'Build Weekend by Young Creators & n8n',
      date: language === 'nl' ? '29-30 november 2025' : 'November 29-30, 2025',
      location: 'StartDock, Amsterdam',
      attendees: language === 'nl' ? '~150 builders (25 teams van 4-6 personen)' : '~150 builders (25 teams of 4-6 people)',
      description: language === 'nl'
        ? 'Een weekend hackathon waar young builders (14-30 jaar) hun eigen ideeën kunnen ontwikkelen. Twee dagen in het hart van Amsterdam om te bouwen aan prototypes, designs, automations of nieuwe concepten.'
        : 'A weekend hackathon where young builders (14-30 years) can develop their own ideas. Two days in the heart of Amsterdam to build prototypes, designs, automations or new concepts.',
      image: '/events/build weekend by young creators.png',
      experience: language === 'nl'
        ? 'Dit evenement staat nog gepland voor 29-30 november 2025. Het belooft een inspirerende ervaring te worden met 150 builders die gedurende het weekend hun ideeën tot leven brengen. Met toegang tot top mentors, powerful tools en unlimited credits, zal dit een unieke kans zijn om te leren, te bouwen en te netwerken met like-minded creatives.'
        : 'This event is still scheduled for November 29-30, 2025. It promises to be an inspiring experience with 150 builders bringing their ideas to life throughout the weekend. With access to top mentors, powerful tools and unlimited credits, this will be a unique opportunity to learn, build and network with like-minded creatives.',
      highlights: language === 'nl'
        ? [
            'Twee dagen bouwen aan eigen ideeën in teams van 4-6 personen',
            'Toegang tot top mentors en powerful tools (n8n, Apify, Lovable, OpenAI, ElevenLabs)',
            'Unlimited credits voor tools en resources',
            '€1.000 cash prijs voor het winnende team plus extra prizes',
            'Workshops, lunch en dinner gedurende het weekend',
            'Netwerken met 150 builders en de Young Creators community',
            'Focus op collaboration en creativity boven competitie',
          ]
        : [
            'Two days of building own ideas in teams of 4-6 people',
            'Access to top mentors and powerful tools (n8n, Apify, Lovable, OpenAI, ElevenLabs)',
            'Unlimited credits for tools and resources',
            '€1,000 cash prize for winning team plus additional prizes',
            'Workshops, lunch and dinner throughout the weekend',
            'Networking with 150 builders and the Young Creators community',
            'Focus on collaboration and creativity over competition',
          ],
      learnings: language === 'nl'
        ? [
            'Hands-on ervaring met workflow automation (n8n), web scraping (Apify) en AI-tools',
            'Van idee naar MVP in één weekend: rapid prototyping technieken',
            'Samenwerken in diverse teams van builders, designers en engineers',
            'Pitching skills en presenteren van technische projecten',
            'Netwerken binnen de Young Creators community (14-30 jaar)',
          ]
        : [
            'Hands-on experience with workflow automation (n8n), web scraping (Apify) and AI tools',
            'From idea to MVP in one weekend: rapid prototyping techniques',
            'Collaborating in diverse teams of builders, designers and engineers',
            'Pitching skills and presenting technical projects',
            'Networking within the Young Creators community (14-30 years)',
          ],
      conclusion: language === 'nl'
        ? 'Build Weekend belooft een unieke kans te worden om gedurende één weekend een idee om te zetten naar een werkend prototype. De focus op collaboration, de toegang tot moderne tools en de energie van 150 young builders maken dit een waardevol event voor elke creative builder.'
        : 'Build Weekend promises to be a unique opportunity to turn an idea into a working prototype in one weekend. The focus on collaboration, access to modern tools and the energy of 150 young builders make this a valuable event for any creative builder.',
    },
    'mendix-hack-the-halls': {
      type: 'Hackathon',
      title: 'Hack the Halls: A Mendix Christmas Bauble Mini-Hackathon',
      date: language === 'nl' ? '19 november 2025' : 'November 19, 2025',
      location: 'Sopra Steria, Ringwade 1, Nieuwegein (Utrecht)',
      attendees: 'TBD',
      description: language === 'nl'
        ? 'Een feestelijke mini-hackathon waarbij deelnemers digitale kerstballen ontwerpen en stylen in Mendix 11, met alleen Mendix widgets en moderne CSS, ondersteund door AI assistenten zoals ChatGPT, Copilot of Claude.'
        : 'A festive mini-hackathon where participants design and style digital Christmas baubles in Mendix 11, using only Mendix widgets and modern CSS, guided by AI assistants like ChatGPT, Copilot or Claude.',
      image: '/events/mendix hack the halls.jpeg',
      experience: language === 'nl'
        ? 'Dit evenement staat nog gepland voor 19 november 2025. Het belooft een unieke ervaring te worden waarbij ik kan leren hoe ik moderne CSS features kan combineren met Mendix en AI-tools om visueel aantrekkelijke componenten te bouwen.'
        : 'This event is still scheduled for November 19, 2025. It promises to be a unique experience where I can learn how to combine modern CSS features with Mendix and AI tools to build visually appealing components.',
      highlights: language === 'nl'
        ? [
            'Ontwerpen van digitale kerstballen met alleen Mendix widgets en CSS (geen JavaScript)',
            'Vibe coding met AI tools (ChatGPT, Copilot, Claude) voor CSS generatie',
            'Leren werken met moderne CSS 2025 features zoals :has(), light-dark(), container queries',
            'Theme-aware componenten bouwen die werken in light en dark mode',
            'Presentatie en applaus-based voting met decibelmeter',
            'Meedoen aan de Mendix Community Christmas Tree',
          ]
        : [
            'Designing digital Christmas baubles with only Mendix widgets and CSS (no JavaScript)',
            'Vibe coding with AI tools (ChatGPT, Copilot, Claude) for CSS generation',
            'Learning modern CSS 2025 features like :has(), light-dark(), container queries',
            'Building theme-aware components that work in light and dark mode',
            'Presentation and applause-based voting with decibel meter',
            'Participating in the Mendix Community Christmas Tree',
          ],
      learnings: language === 'nl'
        ? [
            'Moderne CSS technieken zoals gradients, animations, conic patterns en cascade layers',
            'Effectief gebruik van AI voor CSS magic en feature experimentatie',
            'Theme switching in Mendix 11 met CSS variables',
            'Accessibility features zoals focus states en prefers-reduced-motion',
            'AI prompting strategieën voor front-end development',
          ]
        : [
            'Modern CSS techniques like gradients, animations, conic patterns and cascade layers',
            'Effective use of AI for CSS magic and feature experimentation',
            'Theme switching in Mendix 11 with CSS variables',
            'Accessibility features like focus states and prefers-reduced-motion',
            'AI prompting strategies for front-end development',
          ],
      conclusion: language === 'nl'
        ? 'Een feestelijk evenement dat CSS creativiteit combineert met AI-assisted development. De focus op moderne CSS features en theme-aware design maakt dit een waardevolle leerervaring voor het stylen van Mendix applicaties.'
        : 'A festive event that combines CSS creativity with AI-assisted development. The focus on modern CSS features and theme-aware design makes this a valuable learning experience for styling Mendix applications.',
    },
    'mendix-ctf': {
      type: 'Conference',
      title: 'Mendix Capture The Flag 2025',
      date: language === 'nl' ? '9-10 oktober 2025' : 'October 9-10, 2025',
      location: language === 'nl' ? 'Wereldwijd (17 locaties)' : 'Worldwide (17 locations)',
      attendees: language === 'nl' ? '1.092 hackers wereldwijd' : '1,092 hackers worldwide',
      description: language === 'nl'
        ? 'Het Mendix Security Event van het jaar. Twee dagen vol gratis leren en kennisdeling over Mendix security door middel van hacking challenges en workshops door security experts.'
        : 'The Mendix Security Event of the year. Two days of free learning and knowledge sharing about Mendix security through hacking challenges and workshops by security experts.',
      image: '/events/Mendix CTF 2025.webp',
      additionalImages: ['/events/MendixCTF20252.jpg', '/events/MendixCTF20253.jpg'],
      experience: language === 'nl'
        ? 'Ik ben naar deze CTF gegaan samen met Hicham Tahiri, Wishant Bhajan en Mohammad Falaha. Het was onze eerste ervaring met een Capture The Flag evenement. Er waren 27 challenges (flags) verdeeld over 3 moeilijkheidsgraden. Ondanks dat het nieuw voor ons was, hebben we toch 12 challenges kunnen voltooien, wat een goede prestatie was voor onze eerste keer.'
        : 'I attended this CTF together with Hicham Tahiri, Wishant Bhajan and Mohammad Falaha. It was our first experience with a Capture The Flag event. There were 27 challenges (flags) divided across 3 difficulty levels. Despite it being new to us, we managed to complete 12 challenges, which was a good achievement for our first time.',
      highlights: language === 'nl'
        ? [
            '27 security challenges verdeeld over 3 moeilijkheidsgraden',
            '12 flags succesvol gecaptured als team',
            '15+ expert-led workshops en sessies over Mendix security',
            'Deel van een wereldwijd evenement met 1.092 hackers op 17 locaties',
            'On-site coaching door security experts',
            'Exclusieve in-person merchandise',
          ]
        : [
            '27 security challenges divided across 3 difficulty levels',
            '12 flags successfully captured as a team',
            '15+ expert-led workshops and sessions about Mendix security',
            'Part of a global event with 1,092 hackers at 17 locations',
            'On-site coaching by security experts',
            'Exclusive in-person merchandise',
          ],
      learnings: language === 'nl'
        ? [
            'Introductie in Capture The Flag competities en security hacking',
            'Mendix security best practices en kwetsbaarheden identificeren',
            'Verschillende security attack vectors en defense mechanismen',
            'Samenwerken in een team om complexe security challenges op te lossen',
            'Hands-on ervaring met security testing tools en methodologieën',
          ]
        : [
            'Introduction to Capture The Flag competitions and security hacking',
            'Mendix security best practices and identifying vulnerabilities',
            'Various security attack vectors and defense mechanisms',
            'Collaborating in a team to solve complex security challenges',
            'Hands-on experience with security testing tools and methodologies',
          ],
      conclusion: language === 'nl'
        ? 'Deze CTF was een geweldige introductie in de wereld van security hacking en Capture The Flag competities. Ondanks dat het onze eerste ervaring was, hebben we als team 12 van de 27 challenges kunnen voltooien. Het was leerzaam om te zien hoe security vulnerabilities kunnen worden geïdentificeerd en geëxploiteerd in een veilige omgeving. De combinatie van competitie, workshops en networking maakte dit tot een onvergetelijke ervaring.'
        : 'This CTF was a great introduction to the world of security hacking and Capture The Flag competitions. Despite it being our first experience, we managed to complete 12 of the 27 challenges as a team. It was educational to see how security vulnerabilities can be identified and exploited in a safe environment. The combination of competition, workshops and networking made this an unforgettable experience.',
    },
    'hackathon-computational-science': {
      type: 'Hackathon',
      title: 'Hackathon Computational Science',
      date: language === 'nl' ? '14 juni 2025' : 'June 14, 2025',
      location: 'De Zalen van Zeven, Utrecht, Netherlands',
      attendees: language === 'nl' ? '~35 deelnemers (7 teams)' : '~35 participants (7 teams)',
      description: language === 'nl'
        ? 'De eerste Hackathon van Computational Science NL, waar onderzoekers uit verschillende domeinen samenkomen om een real-world uitdaging te tackelen gepresenteerd door Deltares.'
        : 'The first Hackathon of Computational Science NL, bringing together researchers from various domains to tackle a real-world challenge presented by Deltares.',
      image: '/events/Computational science NL.jpg',
      additionalImages: ['/events/ComputationalScienceNL2.jpeg', '/events/ComputationalScienceNL3.jpeg'],
      experience: language === 'nl'
        ? 'Ik ging naar deze hackathon samen met Wishant Bhajan en Hicham Tahiri als Team BBBs. We kregen de uitdaging om de beste solver voor de 1D shallow-water equations te ontwikkelen, geprogrammeerd in Julia - een taal waar we geen ervaring mee hadden. Na meer dan 6 uur intensief coderen en werken aan watervisualisaties, dachten we dat we het niet goed hadden gedaan. Tot onze verbazing kregen we uiteindelijk een Honorable Mention van de jury!'
        : 'I attended this hackathon together with Wishant Bhajan and Hicham Tahiri as Team BBBs. We received the challenge to develop the best solver for the 1D shallow-water equations, programmed in Julia - a language we had no experience with. After more than 6 hours of intensive coding and working on water visualizations, we thought we hadn\'t done well. To our surprise, we ultimately received an Honorable Mention from the jury!',
      highlights: language === 'nl'
        ? [
            'Ontwikkeling van een solver voor 1D shallow-water equations met Julia',
            'Werken in de unieke setting van een oude kerk (De Zalen van Zeven)',
            'Pitch voor een review panel bestaande uit experts van Deltares, VORtech BV en externe reviewers',
            'Team BBBs ontving een Honorable Mention voor hun oplossing',
            'Netwerken met onderzoekers uit de Nederlandse computational science community',
          ]
        : [
            'Development of a solver for 1D shallow-water equations using Julia',
            'Working in the unique setting of an old church (De Zalen van Zeven)',
            'Pitch to a review panel consisting of experts from Deltares, VORtech BV and external reviewers',
            'Team BBBs received an Honorable Mention for their solution',
            'Networking with researchers from the Dutch computational science community',
          ],
      learnings: language === 'nl'
        ? [
            'Introductie in Julia programmeren en numerieke methoden voor partiële differentiaalvergelijkingen',
            'Begrip van shallow-water equations en hun toepassing in wateronderzoek',
            'Samenwerken onder tijdsdruk met een onbekende programmeertaal',
            'Effectief communiceren van technische oplossingen in een pitch-format',
            'Doorzettingsvermogen: ondanks twijfels toch een prijs behalen',
          ]
        : [
            'Introduction to Julia programming and numerical methods for partial differential equations',
            'Understanding of shallow-water equations and their application in water research',
            'Collaborating under time pressure with an unfamiliar programming language',
            'Effectively communicating technical solutions in a pitch format',
            'Perseverance: achieving recognition despite doubts',
          ],
      conclusion: language === 'nl'
        ? 'Deze hackathon was een onverwacht succes. Ondanks dat we geen voorkennis hadden van Julia, hebben we als Team BBBs een werkende solver kunnen ontwikkelen die de jury overtuigde. De Honorable Mention was een geweldige verrassing en bewees dat met teamwork en doorzettingsvermogen je complexe uitdagingen kunt aanpakken, zelfs in een nieuwe programmeertaal. Het was een leerzame ervaring over watermodellering en numerieke methoden.'
        : 'This hackathon was an unexpected success. Despite having no prior knowledge of Julia, Team BBBs managed to develop a working solver that convinced the jury. The Honorable Mention was a great surprise and proved that with teamwork and perseverance you can tackle complex challenges, even in a new programming language. It was an educational experience about water modeling and numerical methods.',
    },
    'xebia-github-copilot-hackathon': {
      type: 'Hackathon',
      title: 'Xebia GitHub Copilot Hackathon',
      date: language === 'nl' ? '21 mei 2025' : 'May 21, 2025',
      location: 'Xebia Hilversum, Laapersveld 27, Netherlands',
      attendees: language === 'nl' ? '~50 deelnemers' : '~50 participants',
      description: language === 'nl'
        ? 'Een game-geïnspireerde hackathon gericht op het verbeteren van GitHub Copilot vaardigheden, met tracks voor zowel beginners als gevorderde gebruikers.'
        : 'A game-inspired hackathon focused on improving GitHub Copilot skills, with tracks for both beginners and advanced users.',
      image: '/events/Xebia github copilot hackathon.jpeg',
      additionalImages: ['/events/XebiaGithubCopilotHackathon2.JPG', '/events/XebiaGithubCopilotHackathon3.JPG'],
      experience: language === 'nl'
        ? 'Ik ben naar deze hackathon gegaan samen met Hicham Tahiri en Wishant Bhajan. We hebben gekozen voor Track 2: Advanced Mode, waarbij we uitleg kregen van Thijs Limmen en Liuba Gonta. Het was een leuke en leerzame ervaring waarbij we in korte tijd een werkend spel hebben kunnen bouwen met behulp van AI prompting.'
        : 'I attended this hackathon together with Hicham Tahiri and Wishant Bhajan. We chose Track 2: Advanced Mode, where we received instruction from Thijs Limmen and Liuba Gonta. It was a fun and educational experience where we managed to build a working game in a short time using AI prompting.',
      highlights: language === 'nl'
        ? [
            'Kick-off met uitleg over Track 2 (Advanced Mode) door Thijs Limmen en Liuba Gonta',
            '2 uur durende hackathon om een spel te maken met AI prompting',
            'Samen met Hicham een Pokemon-achtig spel ontwikkeld',
            'Hands-on ervaring met geavanceerde GitHub Copilot features',
            'Wrap-up sessie met drinks en bites waar we onze resultaten deelden',
          ]
        : [
            'Kick-off with explanation of Track 2 (Advanced Mode) by Thijs Limmen and Liuba Gonta',
            '2-hour hackathon to create a game using AI prompting',
            'Developed a Pokemon-like game together with Hicham',
            'Hands-on experience with advanced GitHub Copilot features',
            'Wrap-up session with drinks and bites where we shared our results',
          ],
      learnings: language === 'nl'
        ? [
            'Effectieve AI prompting technieken om complexere code te genereren',
            'Hoe GitHub Copilot te gebruiken voor game development en logica implementatie',
            'Samenwerken in een team met AI-tools als centrale focus',
            'Best practices voor het delegeren van repetitieve coding taken aan Copilot',
            'Inzicht in de geavanceerde features van GitHub Copilot die productiviteit verhogen',
          ]
        : [
            'Effective AI prompting techniques to generate more complex code',
            'How to use GitHub Copilot for game development and logic implementation',
            'Collaborating in a team with AI tools as the central focus',
            'Best practices for delegating repetitive coding tasks to Copilot',
            'Insights into advanced GitHub Copilot features that increase productivity',
          ],
      conclusion: language === 'nl'
        ? 'Deze hackathon was een geweldige ervaring die mij heeft laten zien hoe krachtig GitHub Copilot kan zijn als je de tool goed beheerst. Het ontwikkelen van een Pokemon-achtig spel in slechts 2 uur was uitdagend maar zeer leerzaam. Ik heb veel inzicht gekregen in effectieve AI prompting en hoe je GitHub Copilot optimaal kunt inzetten in je dagelijkse werk.'
        : 'This hackathon was a great experience that showed me how powerful GitHub Copilot can be when you master the tool properly. Developing a Pokemon-like game in just 2 hours was challenging but very educational. I gained a lot of insight into effective AI prompting and how to optimally use GitHub Copilot in your daily work.',
    },
    'react-summit-2024': {
      type: 'Conference',
      title: 'React Summit 2024',
      date: language === 'nl' ? '15 Maart 2024' : 'March 15, 2024',
      location: 'Amsterdam, Netherlands',
      attendees: language === 'nl' ? '1200 deelnemers' : '1200 participants',
      description: language === 'nl'
        ? 'Een inspirerende conferentie over de nieuwste ontwikkelingen in React en moderne frontend development.'
        : 'An inspiring conference about the latest developments in React and modern frontend development.',
      experience: language === 'nl'
        ? 'React Summit 2024 was een onvergetelijke ervaring. Als frontend developer was dit de perfecte gelegenheid om te leren over de nieuwste trends en best practices in het React ecosysteem.'
        : 'React Summit 2024 was an unforgettable experience. As a frontend developer, this was the perfect opportunity to learn about the latest trends and best practices in the React ecosystem.',
      highlights: language === 'nl'
        ? [
            'Keynote van Dan Abramov over React Server Components',
            'Workshop over performance optimalisatie met React 18',
            'Networking sessie met developers van grote tech bedrijven',
            'Lightning talks over innovatieve use cases van React',
          ]
        : [
            'Keynote by Dan Abramov about React Server Components',
            'Workshop on performance optimization with React 18',
            'Networking session with developers from major tech companies',
            'Lightning talks about innovative React use cases',
          ],
      learnings: language === 'nl'
        ? [
            'Diepgaande kennis over Server Components en hoe deze de architectuur van React applicaties veranderen',
            'Praktische technieken voor het optimaliseren van bundle sizes en runtime performance',
            'Nieuwe patterns voor state management in moderne React applicaties',
            'Best practices voor toegankelijkheid in complexe UI componenten',
          ]
        : [
            'In-depth knowledge about Server Components and how they change React application architecture',
            'Practical techniques for optimizing bundle sizes and runtime performance',
            'New patterns for state management in modern React applications',
            'Best practices for accessibility in complex UI components',
          ],
      conclusion: language === 'nl'
        ? 'Deze conferentie heeft mijn perspectief op moderne frontend development verrijkt. De combinatie van technische diepgang en praktische voorbeelden maakt dat ik direct aan de slag kan met de nieuwe kennis in mijn projecten.'
        : 'This conference enriched my perspective on modern frontend development. The combination of technical depth and practical examples allows me to immediately apply the new knowledge in my projects.',
    },
    'dutch-tech-meetup': {
      type: 'Meetup',
      title: 'Dutch Tech Meetup',
      date: language === 'nl' ? '8 Februari 2024' : 'February 8, 2024',
      location: 'Rotterdam, Netherlands',
      attendees: language === 'nl' ? '85 deelnemers' : '85 participants',
      description: language === 'nl'
        ? 'Maandelijkse meetup voor tech enthusiasts om kennis te delen en te netwerken.'
        : 'Monthly meetup for tech enthusiasts to share knowledge and network.',
      experience: language === 'nl'
        ? 'De Dutch Tech Meetup was een geweldige kans om lokale developers te ontmoeten en kennis uit te wisselen over verschillende technologieën.'
        : 'The Dutch Tech Meetup was a great opportunity to meet local developers and exchange knowledge about various technologies.',
      highlights: language === 'nl'
        ? [
            'Presentaties over AI en machine learning',
            'Discussies over cloud architectuur',
            'Netwerken met lokale tech community',
          ]
        : [
            'Presentations on AI and machine learning',
            'Discussions about cloud architecture',
            'Networking with local tech community',
          ],
      learnings: language === 'nl'
        ? [
            'Nieuwe inzichten in AI implementaties',
            'Best practices voor cloud-native applicaties',
            'Community driven development approaches',
          ]
        : [
            'New insights into AI implementations',
            'Best practices for cloud-native applications',
            'Community driven development approaches',
          ],
      conclusion: language === 'nl'
        ? 'Een waardevolle ervaring die mij heeft geholpen om mijn netwerk uit te breiden en nieuwe perspectieven te krijgen op moderne technologieën.'
        : 'A valuable experience that helped me expand my network and gain new perspectives on modern technologies.',
    },
    'ai-innovation-day': {
      type: 'Workshop',
      title: 'AI Innovation Day',
      date: language === 'nl' ? '22 Januari 2024' : 'January 22, 2024',
      location: 'Utrecht, Netherlands',
      attendees: language === 'nl' ? '50 deelnemers' : '50 participants',
      description: language === 'nl'
        ? 'Hands-on workshop over AI implementaties in moderne webapplicaties.'
        : 'Hands-on workshop about AI implementations in modern web applications.',
      experience: language === 'nl'
        ? 'AI Innovation Day bood een praktische hands-on ervaring met de nieuwste AI technologieën en hoe deze te integreren in webapplicaties.'
        : 'AI Innovation Day offered a practical hands-on experience with the latest AI technologies and how to integrate them into web applications.',
      highlights: language === 'nl'
        ? [
            'Praktische workshops met GPT-4 en Claude AI',
            'Use cases van AI in productiegerichte applicaties',
            'Ethical AI en responsible development',
          ]
        : [
            'Practical workshops with GPT-4 and Claude AI',
            'AI use cases in production applications',
            'Ethical AI and responsible development',
          ],
      learnings: language === 'nl'
        ? [
            'Implementatie van AI APIs in webapplicaties',
            'Prompting technieken voor betere AI responses',
            'Privacy en security considerations bij AI gebruik',
          ]
        : [
            'Implementation of AI APIs in web applications',
            'Prompting techniques for better AI responses',
            'Privacy and security considerations when using AI',
          ],
      conclusion: language === 'nl'
        ? 'Deze workshop heeft mij de tools en kennis gegeven om AI effectief te integreren in mijn projecten, met een focus op praktische toepassingen en ethische overwegingen.'
        : 'This workshop gave me the tools and knowledge to effectively integrate AI into my projects, with a focus on practical applications and ethical considerations.',
    },
  };

  const event = id ? eventsData[id] : null;

  if (!event) {
    return (
      <div className="min-h-screen bg-background pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-3xl font-bold mb-4">
            {language === 'nl' ? 'Evenement niet gevonden' : 'Event not found'}
          </h1>
          <Link to="/events" className="text-primary hover:underline">
            {t.backToEvents}
          </Link>
        </div>
      </div>
    );
  }

  const getBadgeColor = (type: string) => {
    if (type.toLowerCase().includes('conference')) return 'bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300';
    if (type.toLowerCase().includes('meetup')) return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300';
    if (type.toLowerCase().includes('workshop')) return 'bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300';
    return 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300';
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          {/* Back Button */}
          <Link
            to="/events"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>{t.backToEvents}</span>
          </Link>

          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <Badge className={`${getBadgeColor(event.type)} border-0`}>
                {event.type}
              </Badge>
              <span className="text-muted-foreground">{event.date}</span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              {event.title}
            </h1>
            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>{event.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4" />
                <span>{event.attendees}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{event.date}</span>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          {event.image ? (
            <div className="w-full h-96 bg-muted rounded-lg overflow-hidden mb-12">
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-full object-cover"
              />
            </div>
          ) : (
            <div className="w-full h-96 bg-muted rounded-lg flex items-center justify-center mb-12">
              <div className="w-20 h-20 rounded-full bg-background flex items-center justify-center">
                <ImageIcon className="w-10 h-10 text-muted-foreground" />
              </div>
            </div>
          )}

          {/* My Experience */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">{t.myExperience}</h2>
            <p className="text-muted-foreground leading-relaxed text-lg">
              {event.experience}
            </p>
          </section>

          {/* Highlights */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-6">{t.highlights}</h2>
            <ul className="space-y-3">
              {event.highlights.map((highlight, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span className="text-muted-foreground leading-relaxed">{highlight}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Photos */}
          {event.additionalImages && event.additionalImages.length > 0 && (
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-6">{t.photos}</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {event.additionalImages.map((image, index) => (
                  <div key={index} className="w-full h-64 bg-muted rounded-lg overflow-hidden">
                    <img
                      src={image}
                      alt={`${event.title} ${index + 2}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* What I Learned */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-6">{t.whatILearned}</h2>
            <ul className="space-y-3">
              {event.learnings.map((learning, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span className="text-muted-foreground leading-relaxed">{learning}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Conclusion */}
          <section className="mb-12">
            <Card className="bg-muted/50 border-0 p-8">
              <h2 className="text-3xl font-bold text-foreground mb-4">{t.conclusion}</h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                {event.conclusion}
              </p>
            </Card>
          </section>

          {/* Back to Events Link */}
          <div className="border-t border-border pt-8 mb-16">
            <Link
              to="/events"
              className="inline-flex items-center gap-2 text-foreground hover:text-primary transition-colors font-medium"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>{t.viewAllEvents}</span>
            </Link>
          </div>

          {/* CTA Section */}
          <CTASection language={language} />
        </div>
      </div>
    </div>
  );
};

export default EventDetail;
