import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, Users, ArrowLeft, Image as ImageIcon } from 'lucide-react';
import { Card } from '@/components/ui/card';

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
    'xebia-github-copilot-hackathon': {
      type: 'Hackathon',
      title: 'Xebia GitHub Copilot Hackathon',
      date: language === 'nl' ? '21 mei 2025' : 'May 21, 2025',
      location: 'Xebia Hilversum, Laapersveld 27, Netherlands',
      attendees: language === 'nl' ? '~50 deelnemers' : '~50 participants',
      description: language === 'nl'
        ? 'Een game-geïnspireerde hackathon gericht op het verbeteren van GitHub Copilot vaardigheden, met tracks voor zowel beginners als gevorderde gebruikers.'
        : 'A game-inspired hackathon focused on improving GitHub Copilot skills, with tracks for both beginners and advanced users.',
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
          <div className="w-full h-96 bg-muted rounded-lg flex items-center justify-center mb-12">
            <div className="w-20 h-20 rounded-full bg-background flex items-center justify-center">
              <ImageIcon className="w-10 h-10 text-muted-foreground" />
            </div>
          </div>

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
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-6">{t.photos}</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[1, 2].map((_, index) => (
                <div key={index} className="w-full h-64 bg-muted rounded-lg flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-background flex items-center justify-center">
                    <ImageIcon className="w-8 h-8 text-muted-foreground" />
                  </div>
                </div>
              ))}
            </div>
          </section>

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
          <div className="border-t border-border pt-8">
            <Link
              to="/events"
              className="inline-flex items-center gap-2 text-foreground hover:text-primary transition-colors font-medium"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>{t.viewAllEvents}</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetail;
