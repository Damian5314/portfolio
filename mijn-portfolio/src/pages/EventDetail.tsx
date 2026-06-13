import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { MapPin, Users, ArrowLeft, Image as ImageIcon, X, Sparkles, Check } from 'lucide-react';
import CTASection from '@/components/CTASection';

// Accent dot colour per event type
const typeDot: Record<string, string> = {
  hackathon: 'bg-gold',
  conference: 'bg-rose-500',
  workshop: 'bg-amber-500',
  meetup: 'bg-gold',
};
const getTypeDot = (type: string) => typeDot[type.toLowerCase()] ?? typeDot.hackathon;

const SectionLabel: React.FC<{ children: React.ReactNode; tone?: 'gold' | 'goldOnDark' }> = ({
  children,
  tone = 'gold',
}) => (
  <span
    className={`font-mono text-xs uppercase tracking-[0.2em] ${
      tone === 'goldOnDark' ? 'text-gold' : 'text-gold-ink'
    }`}
  >
    {children}
  </span>
);

const isVideo = (src: string) =>
  src.toLowerCase().endsWith('.mp4') || src.toLowerCase().endsWith('.webm') || src.toLowerCase().endsWith('.mov');

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
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const translations = {
    nl: {
      backToEvents: 'Terug naar evenementen',
      myExperience: 'Mijn ervaring',
      highlights: 'Hoogtepunten',
      photos: "Foto's",
      whatILearned: 'Wat ik heb geleerd',
      conclusion: 'Conclusie',
      viewAllEvents: 'Bekijk alle evenementen',
      waitlistTitle: 'Interesse in FoodSwipe?',
      waitlistDescription: 'Schrijf je in voor de waitlist om op de hoogte te blijven van de lancering van FoodSwipe!',
      waitlistButton: 'Schrijf je in voor de waitlist',
    },
    en: {
      backToEvents: 'Back to events',
      myExperience: 'My Experience',
      highlights: 'Highlights',
      photos: 'Photos',
      whatILearned: 'What I Learned',
      conclusion: 'Conclusion',
      viewAllEvents: 'View all events',
      waitlistTitle: 'Interested in FoodSwipe?',
      waitlistDescription: 'Sign up for the waitlist to stay updated about the FoodSwipe launch!',
      waitlistButton: 'Join the waitlist',
    },
  };

  const t = translations[language];

  // Event data
  const eventsData: { [key: string]: EventData } = {
    'agency-at-night': {
      type: 'Meetup',
      title: 'Agency at Night',
      date: language === 'nl' ? '16 mei 2025' : 'May 16, 2025',
      location: 'Rotterdam (51 agencies)',
      attendees: 'TBD',
      description: language === 'nl'
        ? 'Een unieke avond waarbij je achter de schermen kijkt bij 51 creatieve en digitale agencies in Rotterdam. Met talks, exhibitions, workshops en meer over marketing, AI, branding, media en design.'
        : 'A unique evening where you go behind the scenes at 51 creative and digital agencies in Rotterdam. With talks, exhibitions, workshops and more about marketing, AI, branding, media and design.',
      image: '/events/AgencyAtNight.png',
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
    'xebia-github-copilot-hackathon': {
      type: 'Hackathon',
      title: 'Xebia GitHub Copilot Hackathon',
      date: language === 'nl' ? '21 mei 2025' : 'May 21, 2025',
      location: 'Xebia Hilversum, Laapersveld 27, Netherlands',
      attendees: language === 'nl' ? '~50 deelnemers' : '~50 participants',
      description: language === 'nl'
        ? 'Een game-geïnspireerde hackathon gericht op het verbeteren van GitHub Copilot vaardigheden, met tracks voor zowel beginners als gevorderde gebruikers.'
        : 'A game-inspired hackathon focused on improving GitHub Copilot skills, with tracks for both beginners and advanced users.',
      image: '/events/XebiaGithubCopilotHackathon.jpeg',
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
    'hackathon-computational-science': {
      type: 'Hackathon',
      title: 'Hackathon Computational Science',
      date: language === 'nl' ? '14 juni 2025' : 'June 14, 2025',
      location: 'De Zalen van Zeven, Utrecht, Netherlands',
      attendees: language === 'nl' ? '~35 deelnemers (7 teams)' : '~35 participants (7 teams)',
      description: language === 'nl'
        ? 'De eerste Hackathon van Computational Science NL, waar onderzoekers uit verschillende domeinen samenkomen om een real-world uitdaging te tackelen gepresenteerd door Deltares.'
        : 'The first Hackathon of Computational Science NL, bringing together researchers from various domains to tackle a real-world challenge presented by Deltares.',
      image: '/events/ComputationalScienceNL.jpg',
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
    'citylab010': {
      type: 'Workshop',
      title: 'CityLab010 Netwerkevent',
      date: language === 'nl' ? '10 september 2025' : 'September 10, 2025',
      location: 'Het Timmerhuis, Rotterdam',
      attendees: 'TBD',
      description: language === 'nl'
        ? 'Het jaarlijkse netwerkevent van CityLab010 waar plannenmakers, de Stadsjury, partners en gemeentelijke experts samenkomen. Een inspirerende avond vol ontmoeting met workshops over het CityLab-proces en werken vanuit leefwerelden.'
        : 'The annual networking event of CityLab010 where planners, the City Jury, partners and municipal experts come together. An inspiring evening full of meetings with workshops about the CityLab process and working from living environments.',
      image: '/events/Citylab010Netwerkavond.jpg',
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
    'mendix-ctf': {
      type: 'Conference',
      title: 'Mendix Capture The Flag 2025',
      date: language === 'nl' ? '9-10 oktober 2025' : 'October 9-10, 2025',
      location: language === 'nl' ? 'Wereldwijd (17 locaties)' : 'Worldwide (17 locations)',
      attendees: language === 'nl' ? '1.092 hackers wereldwijd' : '1,092 hackers worldwide',
      description: language === 'nl'
        ? 'Het Mendix Security Event van het jaar. Twee dagen vol gratis leren en kennisdeling over Mendix security door middel van hacking challenges en workshops door security experts.'
        : 'The Mendix Security Event of the year. Two days of free learning and knowledge sharing about Mendix security through hacking challenges and workshops by security experts.',
      image: '/events/MendixCTF2025.webp',
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
    'buildweekend-young-creators': {
      type: 'Hackathon',
      title: 'Build Weekend by Young Creators & n8n',
      date: language === 'nl' ? '29-30 november 2025' : 'November 29-30, 2025',
      location: 'StartDock, Amsterdam',
      attendees: language === 'nl' ? '~150 builders (25 teams van 4-6 personen)' : '~150 builders (25 teams of 4-6 people)',
      description: language === 'nl'
        ? 'Een weekend hackathon waar young builders (16-27 jaar) hun eigen ideeën kunnen ontwikkelen. Twee dagen in het hart van Amsterdam om te bouwen aan prototypes, designs, automations of nieuwe concepten.'
        : 'A weekend hackathon where young builders (16-27 years) can develop their own ideas. Two days in the heart of Amsterdam to build prototypes, designs, automations or new concepts.',
      image: '/events/buildweekendbyyoungcreators.png',
      additionalImages: ['/events/buildweekendbyyoungcreators2.jpg', '/events/buildweekendbyyoungcreators3.mp4', '/events/buildweekendbyyoungcreators4.jpeg', '/events/buildweekendbyyoungcreators5.jpeg'],
      experience: language === 'nl'
        ? 'Ik ging naar dit hackathon evenement samen met Wishant Bhajan, Mohammad Falaha, Rachid Ouaalit en Hicham Tahiri. In slechts 2 dagen hebben we FoodSwipe gebouwd - een TikTok-achtige app waarin je verschillende restaurants en recepten kunt ontdekken. We hebben ook een AI-functie geïmplementeerd waarmee je je ingrediënten kunt opgeven en daarmee een recept kunt genereren.'
        : 'I attended this hackathon event together with Wishant Bhajan, Mohammad Falaha, Rachid Ouaalit and Hicham Tahiri. In just 2 days we built FoodSwipe - a TikTok-style app where you can discover different restaurants and recipes. We also implemented an AI feature where you can input your ingredients and generate a recipe.',
      highlights: language === 'nl'
        ? [
            'Ontwikkeling van FoodSwipe: een TikTok-achtige app voor restaurants en recepten',
            'AI-functie voor het genereren van recepten op basis van ingrediënten',
            'Gebruik van moderne tools: n8n, Apify, Lovable, OpenAI, ElevenLabs',
            'Samenwerking met event partners voor tool toegang en support',
            'Gewonnen: 1 jaar n8n Cloud Pro door een challenge (wie een n8n pet droeg)',
            'Twee dagen intensief bouwen en prototyping met het team',
          ]
        : [
            'Development of FoodSwipe: a TikTok-style app for restaurants and recipes',
            'AI feature for generating recipes based on ingredients',
            'Use of modern tools: n8n, Apify, Lovable, OpenAI, ElevenLabs',
            'Collaboration with event partners for tool access and support',
            'Won: 1 year n8n Cloud Pro through a challenge (wearing an n8n cap)',
            'Two days of intensive building and prototyping with the team',
          ],
      learnings: language === 'nl'
        ? [
            'Workflow automation met n8n: automatiseren van complexe processen',
            'Web scraping met Apify voor het verzamelen van restaurant data',
            'Rapid development met Lovable voor snelle app prototyping',
            'AI integratie met OpenAI voor recept generatie',
            'Voice en audio features met ElevenLabs voor marketing',
            'Van idee naar werkend product in 2 dagen: rapid prototyping skills',
          ]
        : [
            'Workflow automation with n8n: automating complex processes',
            'Web scraping with Apify for collecting restaurant data',
            'Rapid development with Lovable for fast app prototyping',
            'AI integration with OpenAI for recipe generation',
            'Voice and audio features with ElevenLabs for marketing',
            'From idea to working product in 2 days: rapid prototyping skills',
          ],
      conclusion: language === 'nl'
        ? 'Build Weekend was een intensieve maar zeer leerzame ervaring. Hoewel we geen hoofdprijs hebben gewonnen, was het bouwen van FoodSwipe een groot succes. Ik heb bijzonder veel geleerd over workflow automation met n8n en web scraping met Apify. Als bonus hebben we door een leuke challenge 1 jaar n8n Cloud Pro gewonnen - simpelweg door een n8n pet te dragen! Het was geweldig om te zien hoe we in 2 dagen van idee naar een werkend prototype konden gaan.'
        : 'Build Weekend was an intensive but very educational experience. Although we didn\'t win a main prize, building FoodSwipe was a great success. I learned a lot about workflow automation with n8n and web scraping with Apify. As a bonus, we won 1 year of n8n Cloud Pro through a fun challenge - simply by wearing an n8n cap! It was amazing to see how we could go from idea to working prototype in 2 days.',
    },
    'apify-1m-challenge-amsterdam': {
      type: 'Hackathon',
      title: 'Apify $1M Challenge: Amsterdam',
      date: language === 'nl' ? '6 december 2025' : 'December 6, 2025',
      location: 'Meet Berlage, Amsterdam',
      attendees: language === 'nl' ? '~13 deelnemers' : '~13 participants',
      description: language === 'nl'
        ? 'Een dag-lange hackathon voor builders en web scraping enthousiastelingen. Tijdens dit event heb ik met mijn team WoningSpotters gebouwd - een platform dat woningdata scrapet - en de 3e plaats behaald.'
        : 'A day-long hackathon for builders and web scraping enthusiasts. During this event, I built WoningSpotters with my team - a platform that scrapes housing data - and achieved 3rd place.',
      image: '/events/ApifyChallenge.jpeg',
      additionalImages: ['/events/ApifyChallenge1.JPG', '/events/ApifyChallenge2.jpg'],
      experience: language === 'nl'
        ? 'Tijdens de Apify $1M Challenge op 6 december 2025 heb ik met een team van 4 personen binnen één dag een volledig werkend woningscraping platform gebouwd. We hebben WoningSpotters gemaakt - een platform dat data scrapet van de meeste Nederlandse woningwebsites voor zowel koop- als huurwoningen. De frontend is gebouwd in React en het scrape-gedeelte in Python gecombineerd met Apify. Het was een intense maar zeer leerzame dag waarbij we de kracht van web scraping hebben toegepast op een real-world probleem.'
        : 'During the Apify $1M Challenge on December 6, 2025, I built a fully working housing scraping platform with a team of 4 people within one day. We created WoningSpotters - a platform that scrapes data from most Dutch housing websites for both sale and rental properties. The frontend is built in React and the scraping part in Python combined with Apify. It was an intense but very educational day where we applied the power of web scraping to a real-world problem.',
      highlights: language === 'nl'
        ? [
            'Één dag hackathon van 10:00 tot 18:00 in het historische Meet Berlage',
            'Gebouwd: WoningSpotters - een woningscraping platform voor koop en huur',
            '3e plaats behaald met ons team van 4 personen!',
            'React frontend gecombineerd met Python + Apify scraping',
            'Data van meerdere Nederlandse woningwebsites gescraped',
            'Hands-on support van Apify experts',
            'Prijzen: €50 + $100 Apify credit voor 3e plaats',
            'Lunch, snacks en drinks gedurende de dag',
            'Netwerken met ~13 andere web scraping enthousiastelingen',
          ]
        : [
            'One day hackathon from 10:00 to 18:00 at the historic Meet Berlage',
            'Built: WoningSpotters - a housing scraping platform for sale and rent',
            'Achieved 3rd place with our team of 4 people!',
            'React frontend combined with Python + Apify scraping',
            'Scraped data from multiple Dutch housing websites',
            'Hands-on support from Apify experts',
            'Prizes: €50 + $100 Apify credit for 3rd place',
            'Lunch, snacks and drinks throughout the day',
            'Networked with ~13 other web scraping enthusiasts',
          ],
      learnings: language === 'nl'
        ? [
            'Web scraping van meerdere woningwebsites met verschillende structuren',
            'Apify gebruiken voor robuuste en schaalbare web scraping',
            'Python voor efficiënte data processing en transformatie',
            'React voor snelle en responsive frontend development',
            'Binnen zeer korte tijd (1 dag) een werkend product bouwen',
            'Pitching en presenteren van technische projecten',
            'Netwerken binnen de web scraping community',
          ]
        : [
            'Web scraping from multiple housing websites with different structures',
            'Using Apify for robust and scalable web scraping',
            'Python for efficient data processing and transformation',
            'React for fast and responsive frontend development',
            'Building a working product within a very short time (1 day)',
            'Pitching and presenting technical projects',
            'Networking within the web scraping community',
          ],
      conclusion: language === 'nl'
        ? 'De Apify $1M Challenge was een geweldige ervaring! Met mijn team hebben we binnen één dag WoningSpotters gebouwd - een platform dat woningzoekers helpt door data te scrapen van meerdere woningwebsites. Het behalen van de 3e plaats met ~13 deelnemers was een mooie beloning voor onze harde werk. Ik heb enorm veel geleerd over web scraping, Apify, en het bouwen van een product onder tijdsdruk. De combinatie van React voor de frontend en Python + Apify voor de scraping werkte perfect samen. Dit project heeft me laten zien hoe krachtig web scraping kan zijn voor het oplossen van real-world problemen.'
        : 'The Apify $1M Challenge was a great experience! With my team, we built WoningSpotters within one day - a platform that helps home seekers by scraping data from multiple housing websites. Achieving 3rd place with ~13 participants was a nice reward for our hard work. I learned a lot about web scraping, Apify, and building a product under time pressure. The combination of React for the frontend and Python + Apify for scraping worked perfectly together. This project showed me how powerful web scraping can be for solving real-world problems.',
    },
    'elevenlabs-worldwide-hackathon': {
      type: 'Hackathon',
      title: 'ElevenLabs Worldwide Hackathon',
      date: language === 'nl' ? '11 december 2025' : 'December 11, 2025',
      location: language === 'nl' ? 'Amsterdam, Nederland (deel van 30 steden wereldwijd)' : 'Amsterdam, Netherlands (part of 30 cities worldwide)',
      attendees: language === 'nl' ? 'Teams van 2-4 personen' : 'Teams of 2-4 people',
      description: language === 'nl'
        ? 'De grootste wereldwijde hackathon van ElevenLabs gericht op Conversational Agents. Een avond vol innovatie en samenwerking met de beste builders, ontwerpers en AI engineers, met meer dan $200K aan prijzen.'
        : 'ElevenLabs\' largest ever worldwide hackathon focused on Conversational Agents. An evening of innovation and collaboration with the world\'s best builders, designers and AI engineers, featuring over $200K in prizes.',
      image: '/events/ElevenLabsHackathon.jpg',
      additionalImages: ['/events/ElevenLabsHackathon1.jpeg', '/events/ElevenLabsHackathon2.jpeg'],
      experience: language === 'nl'
        ? 'Ik ging naar de ElevenLabs Worldwide Hackathon samen met Hicham Tahiri, Wishant Bhajan en Rachid Ouaalit. In een paar uur tijd hebben we LifeAdmin ontwikkeld: een persoonlijke AI assistent die met ElevenLabs, n8n en bolt.new automatisch afspraken voor je plant. Je vraagt iets aan de chatbot en LifeAdmin regelt het volledig zelfstandig, inclusief het toevoegen aan je agenda. Een kleine demo, maar met grote potentie om het dagelijks leven makkelijker te maken. We zijn tweede plaats geworden en hebben daarmee leuke prijzen gewonnen!'
        : 'I attended the ElevenLabs Worldwide Hackathon together with Hicham Tahiri, Wishant Bhajan and Rachid Ouaalit. In just a few hours, we developed LifeAdmin: a personal AI assistant that automatically schedules appointments for you using ElevenLabs, n8n and bolt.new. You ask the chatbot something and LifeAdmin handles it completely autonomously, including adding it to your calendar. A small demo, but with great potential to make daily life easier. We achieved 2nd place and won some nice prizes!',
      highlights: language === 'nl'
        ? [
            'Ontwikkeling van LifeAdmin: een AI assistent voor automatische afspraakplanning',
            '2e plaats behaald met ons team van 4 personen!',
            'Volledige integratie van ElevenLabs voor conversational AI',
            'n8n workflow automation voor agenda synchronisatie',
            'Rapid prototyping met bolt.new voor snelle ontwikkeling',
            'Autonome AI agent die zelfstandig afspraken plant en toevoegt aan agenda',
            'Deel van wereldwijd evenement met 30 steden simultaan',
            'Gezellige avond met inspirerende builders en creatieve projecten',
            'Prijzen gewonnen voor 2e plaats',
          ]
        : [
            'Development of LifeAdmin: an AI assistant for automatic appointment scheduling',
            'Achieved 2nd place with our team of 4 people!',
            'Full integration of ElevenLabs for conversational AI',
            'n8n workflow automation for calendar synchronization',
            'Rapid prototyping with bolt.new for fast development',
            'Autonomous AI agent that independently schedules and adds appointments to calendar',
            'Part of global event with 30 cities simultaneously',
            'Fun evening with inspiring builders and creative projects',
            'Won prizes for 2nd place',
          ],
      learnings: language === 'nl'
        ? [
            'ElevenLabs API integratie voor natuurlijke conversational AI',
            'n8n workflow automation voor complexe agenda synchronisatie',
            'Bolt.new voor rapid AI-driven development en prototyping',
            'Bouwen van autonome AI agents die zelfstandig taken uitvoeren',
            'Conversational interface design voor intuïtieve gebruikerservaringen',
            'Van idee naar werkend product in slechts een paar uur',
            'Effectief samenwerken in een team onder tijdsdruk',
            'Kracht van AI automation voor dagelijkse taken',
          ]
        : [
            'ElevenLabs API integration for natural conversational AI',
            'n8n workflow automation for complex calendar synchronization',
            'Bolt.new for rapid AI-driven development and prototyping',
            'Building autonomous AI agents that independently execute tasks',
            'Conversational interface design for intuitive user experiences',
            'From idea to working product in just a few hours',
            'Effective team collaboration under time pressure',
            'Power of AI automation for daily tasks',
          ],
      conclusion: language === 'nl'
        ? 'De ElevenLabs Worldwide Hackathon was een geweldige ervaring! Het was inspirerend om te zien wat mensen en wijzelf in zo een korte tijd konden maken. Ons project LifeAdmin was een mooie demonstratie van hoe conversational AI het dagelijks leven kan vereenvoudigen. Het behalen van de 2e plaats was een leuke verrassing en een bevestiging dat ons concept potentie heeft. De combinatie van ElevenLabs, n8n en bolt.new bleek perfect te werken voor het bouwen van een autonome AI assistent. Het was een gezellige avond vol innovatie en creativiteit.'
        : 'The ElevenLabs Worldwide Hackathon was a great experience! It was inspiring to see what people and we ourselves could create in such a short time. Our project LifeAdmin was a nice demonstration of how conversational AI can simplify daily life. Achieving 2nd place was a nice surprise and confirmation that our concept has potential. The combination of ElevenLabs, n8n and bolt.new proved perfect for building an autonomous AI assistant. It was a fun evening full of innovation and creativity.',
    },
    'AI-Fixathon-Amsterdam': {
      type: 'Hackathon',
      title: 'AI Fixathon Amsterdam',
      date: language === 'nl' ? '13-14 december 2025' : 'December 13-14, 2025',
      location: 'Vandebron, Amsterdam',
      attendees: language === 'nl' ? 'Max 40 deelnemers' : 'Max 40 participants',
      description: language === 'nl'
        ? 'Een 24-uurs AI hackathon gericht op de UN Sustainable Development Goals. Powered by Norrsken x AI for Impact Collective x AI Builders.'
        : 'A 24-hour AI hackathon focused on the UN Sustainable Development Goals. Powered by Norrsken x AI for Impact Collective x AI Builders.',
      image: '/events/AIFixathonAmsterdam.jpg',
      additionalImages: ['/events/AIFixathonAmsterdam1.jpeg', '/events/AIFixathonAmsterdam2.jpeg', '/events/AIFixathonAmsterdam3.jpeg', '/events/AIFixathonAmsterdam4.mp4'],
      experience: language === 'nl'
        ? 'Ik ging naar de AI Fixathon Amsterdam samen met Hicham Tahiri, Wishant Bhajan, Rachid Ouaalit, Mohammad Falaha en Elfarouq Bakr. We waren in 2 teams gesplitst en ik heb samen met Wishant en Elfarouq de casus WorkRight behandeld. WorkRight Navigator is een AI-concept dat kwetsbare werknemers helpt om na ontslag beter te begrijpen welke stappen er zijn, wat er gebeurt, en hoe zij zich kunnen voorbereiden voordat ze met een juridisch loket of adviseur praten. Het was een gezellige sfeer waarin ik veel slimme en interessante mensen heb ontmoet en ook veel nieuwe tools heb geleerd zoals GreenPT en ActivePieces.'
        : 'I attended the AI Fixathon Amsterdam together with Hicham Tahiri, Wishant Bhajan, Rachid Ouaalit, Mohammad Falaha and Elfarouq Bakr. We were split into 2 teams and I worked with Wishant and Elfarouq on the WorkRight case. WorkRight Navigator is an AI concept that helps vulnerable employees better understand what steps are involved after dismissal, what happens, and how they can prepare before speaking with a legal desk or advisor. It was a friendly atmosphere where I met many smart and interesting people and also learned many new tools like GreenPT and ActivePieces.',
      highlights: language === 'nl'
        ? [
            '24-uurs hackathon van zaterdag 10:00 tot zondag 18:00',
            'Ontwikkeling van WorkRight Navigator: AI-hulp voor kwetsbare werknemers na ontslag',
            'SDG focus op Gezondheid & Welzijn - werknemersrechten en juridische toegang',
            'Team van 3 personen: Wishant Bhajan, Elfarouq Bakr en mijzelf',
            'Introductie tot GreenPT voor duurzame LLM implementatie',
            'Hands-on ervaring met ActivePieces voor low-code AI agent building',
            'Eten & drinken voorzien door Vandebron gedurende de 24 uur',
            'Gezellige sfeer met slimme en interessante mensen uit de AI community',
            'Netwerken met builders gericht op social impact en SDGs',
          ]
        : [
            '24-hour hackathon from Saturday 10:00 to Sunday 18:00',
            'Development of WorkRight Navigator: AI assistance for vulnerable employees after dismissal',
            'SDG focus on Health & Well-being - employee rights and legal access',
            'Team of 3 people: Wishant Bhajan, Elfarouq Bakr and myself',
            'Introduction to GreenPT for sustainable LLM implementation',
            'Hands-on experience with ActivePieces for low-code AI agent building',
            'Food & drinks provided by Vandebron throughout the 24 hours',
            'Friendly atmosphere with smart and interesting people from the AI community',
            'Networking with builders focused on social impact and SDGs',
          ],
      learnings: language === 'nl'
        ? [
            'AI development gericht op maatschappelijke impact en werknemersrechten',
            'GreenPT voor duurzame en energie-efficiënte LLM implementatie',
            'ActivePieces voor low-code AI agent building en workflow automation',
            'Begrijpen van juridische processen en ondersteuning voor kwetsbare werknemers',
            'Ontwerpen van toegankelijke AI-tools voor niet-technische gebruikers',
            'Samenwerken aan social impact projecten binnen SDG framework',
            'Open-source development practices voor maatschappelijke tools',
            '24-uurs hackathon stamina en timemanagement',
          ]
        : [
            'AI development focused on social impact and employee rights',
            'GreenPT for sustainable and energy-efficient LLM implementation',
            'ActivePieces for low-code AI agent building and workflow automation',
            'Understanding legal processes and support for vulnerable employees',
            'Designing accessible AI tools for non-technical users',
            'Collaborating on social impact projects within SDG framework',
            'Open-source development practices for societal tools',
            '24-hour hackathon stamina and time management',
          ],
      conclusion: language === 'nl'
        ? 'De AI Fixathon Amsterdam was een waardevolle ervaring waarin we AI konden inzetten voor een echt maatschappelijk probleem. Met WorkRight Navigator hebben we een concept ontwikkeld dat kwetsbare werknemers kan helpen navigeren door complexe juridische processen na ontslag. Het was bijzonder leerzaam om te werken met nieuwe tools zoals GreenPT voor duurzame AI en ActivePieces voor low-code development. De gezellige sfeer en het netwerken met slimme mensen uit de AI community maakte deze 24-uurs hackathon tot een memorabele ervaring. Het liet zien hoe krachtig AI kan zijn wanneer het wordt ingezet voor social impact en de UN Sustainable Development Goals.'
        : 'The AI Fixathon Amsterdam was a valuable experience where we could deploy AI for a real societal problem. With WorkRight Navigator, we developed a concept that can help vulnerable employees navigate complex legal processes after dismissal. It was particularly educational to work with new tools like GreenPT for sustainable AI and ActivePieces for low-code development. The friendly atmosphere and networking with smart people from the AI community made this 24-hour hackathon a memorable experience. It showed how powerful AI can be when deployed for social impact and the UN Sustainable Development Goals.',
    },
  };

  const event = id ? eventsData[id] : null;

  if (!event) {
    return (
      <div className="min-h-screen bg-background px-4 pb-16 pt-32">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="mb-4 font-serif text-3xl text-foreground">
            {language === 'nl' ? 'Evenement niet gevonden' : 'Event not found'}
          </h1>
          <Link
            to="/events"
            className="font-mono text-sm text-gold-ink transition-colors hover:text-foreground"
          >
            {t.backToEvents}
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="px-4 pb-20 pt-28 sm:px-6 lg:px-8 lg:pt-32">
        <div className="mx-auto max-w-3xl">
          {/* Back Button */}
          <Link
            to="/events"
            className="group mb-8 inline-flex items-center gap-2 font-mono text-xs text-info transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-3.5 w-3.5 transition-transform group-hover:-translate-x-1" />
            {t.backToEvents}
          </Link>

          {/* Header */}
          <div className="mb-6">
            <div className="mb-4 flex flex-wrap items-center gap-3 font-mono text-[11px]">
              <span className="flex items-center gap-1.5 uppercase tracking-wide text-info">
                <span className={`h-1.5 w-1.5 rounded-full ${getTypeDot(event.type)}`} />
                {event.type}
              </span>
              <span className="text-gold-ink">{event.date}</span>
            </div>
            <h1 className="font-serif text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
              {event.title}
            </h1>
            <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 font-mono text-xs text-info">
              <div className="flex items-center gap-2">
                <MapPin className="h-3.5 w-3.5 text-gold-ink" />
                <span>{event.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-3.5 w-3.5 text-gold-ink" />
                <span>{event.attendees}</span>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          {event.image ? (
            <button
              className="group mb-6 block w-full overflow-hidden rounded-2xl"
              onClick={() => setSelectedImage(event.image!)}
            >
              <img
                src={event.image}
                alt={event.title}
                className="h-64 w-full object-cover transition-transform duration-300 group-hover:scale-105 sm:h-80"
              />
            </button>
          ) : (
            <div className="mb-6 flex h-64 w-full items-center justify-center rounded-2xl bg-muted sm:h-80">
              <ImageIcon className="h-10 w-10 text-info/50" />
            </div>
          )}

          {/* Intro summary */}
          <div className="rounded-2xl border border-border bg-card p-6">
            <p className="font-mono text-sm leading-relaxed text-info">{event.description}</p>
          </div>

          {/* My Experience */}
          <section className="mt-14">
            <h2 className="font-serif text-2xl text-foreground">{t.myExperience}</h2>
            <p className="mt-4 text-sm leading-relaxed text-info">{event.experience}</p>
          </section>

          {/* Photos */}
          {event.additionalImages && event.additionalImages.length > 0 && (
            <section className="mt-12">
              <SectionLabel>{t.photos}</SectionLabel>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                {event.additionalImages.map((image, index) => (
                  <div
                    key={index}
                    className="h-56 w-full overflow-hidden rounded-2xl border border-border bg-muted"
                  >
                    {isVideo(image) ? (
                      <video src={image} controls className="h-full w-full object-cover" />
                    ) : (
                      <img
                        src={image}
                        alt={`${event.title} ${index + 2}`}
                        className="h-full w-full cursor-pointer object-cover transition-transform duration-300 hover:scale-105"
                        onClick={() => setSelectedImage(image)}
                      />
                    )}
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Highlights */}
          <section className="mt-12">
            <SectionLabel>{t.highlights}</SectionLabel>
            <ul className="mt-4 space-y-2.5">
              {event.highlights.map((highlight, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 rounded-xl border border-border bg-card px-4 py-3"
                >
                  <Sparkles className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-gold-ink" />
                  <span className="font-mono text-xs leading-relaxed text-info">{highlight}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* What I Learned */}
          <section className="mt-12">
            <SectionLabel>{t.whatILearned}</SectionLabel>
            <div className="mt-4 grid gap-x-8 gap-y-3 sm:grid-cols-2">
              {event.learnings.map((learning, index) => (
                <div key={index} className="flex items-start gap-2.5">
                  <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-emerald-500" />
                  <span className="font-mono text-xs leading-relaxed text-info">{learning}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Conclusion */}
          <section className="mt-12">
            <div className="rounded-2xl bg-dark p-7 sm:p-9">
              <SectionLabel tone="goldOnDark">{t.conclusion}</SectionLabel>
              <p className="mt-4 text-sm leading-relaxed text-dark-foreground/80">
                {event.conclusion}
              </p>
            </div>
          </section>

          {/* Waitlist Section - Only for Build Weekend */}
          {id === 'buildweekend-young-creators' && (
            <section className="mt-8">
              <div className="rounded-2xl border border-gold/40 bg-gold/10 p-8 text-center">
                <h2 className="font-serif text-2xl text-foreground">{t.waitlistTitle}</h2>
                <p className="mx-auto mt-3 max-w-md font-mono text-sm leading-relaxed text-info">
                  {t.waitlistDescription}
                </p>
                <a
                  href="https://tally.so/r/EkqvxL"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-block rounded-xl bg-gold px-6 py-3 font-mono text-sm text-gold-foreground transition-transform hover:-translate-y-0.5"
                >
                  {t.waitlistButton}
                </a>
              </div>
            </section>
          )}

          {/* Back to Events Link */}
          <div className="mt-12 border-t border-border pt-8">
            <Link
              to="/events"
              className="group inline-flex items-center gap-2 font-mono text-sm text-foreground transition-colors hover:text-gold-ink"
            >
              <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
              {t.viewAllEvents}
            </Link>
          </div>
        </div>
      </div>

      <CTASection language={language} />

      {/* Image Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute right-4 top-4 text-white transition-colors hover:text-gray-300"
            onClick={() => setSelectedImage(null)}
          >
            <X className="h-8 w-8" />
          </button>
          <img
            src={selectedImage}
            alt="Enlarged view"
            className="max-h-full max-w-full object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
};

export default EventDetail;
