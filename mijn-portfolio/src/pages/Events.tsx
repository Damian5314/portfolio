import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, MapPin, Users, ArrowUpDown } from 'lucide-react';
import CTASection from '@/components/CTASection';

// Accent colours per event type (top bar + label dot)
const typeStyles: Record<string, { bar: string; dot: string }> = {
  hackathon: { bar: 'bg-foreground', dot: 'bg-gold' },
  conference: { bar: 'bg-rose-500', dot: 'bg-rose-500' },
  workshop: { bar: 'bg-amber-500', dot: 'bg-amber-500' },
  meetup: { bar: 'bg-gold', dot: 'bg-gold' },
};

const getTypeStyle = (type: string) => {
  const key = type.toLowerCase();
  return typeStyles[key] ?? typeStyles.hackathon;
};

interface EventsProps {
  language: 'nl' | 'en';
}

interface Event {
  id: string;
  type: string;
  title: string;
  date: string;
  dateSort: string; // For sorting purposes (YYYY-MM-DD format)
  location: string;
  attendees: string;
  description: string;
  image?: string;
}

const Events: React.FC<EventsProps> = ({ language }) => {
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc');

  const translations = {
    nl: {
      eyebrow: 'Community',
      title: 'Evenementen',
      description: 'Een overzicht van hackathons, meetups en events waar ik aan heb deelgenomen of bij betrokken ben geweest.',
      conference: 'Conference',
      meetup: 'Meetup',
      workshop: 'Workshop',
      participants: 'deelnemers',
      sortByDate: 'Sorteer op datum',
      newest: 'Nieuwste eerst',
      oldest: 'Oudste eerst',
    },
    en: {
      eyebrow: 'Community',
      title: 'Events',
      description: 'An overview of hackathons, meetups and events I have participated in or been involved with.',
      conference: 'Conference',
      meetup: 'Meetup',
      workshop: 'Workshop',
      participants: 'participants',
      sortByDate: 'Sort by date',
      newest: 'Newest first',
      oldest: 'Oldest first',
    },
  };

  const t = translations[language];

  const events: Event[] = [
    {
      id: 'agency-at-night',
      type: 'Meetup',
      title: 'Agency at Night',
      date: language === 'nl' ? '16 mei 2025' : 'May 16, 2025',
      dateSort: '2025-05-16',
      location: 'Rotterdam (51 agencies)',
      attendees: 'TBD',
      description: language === 'nl'
        ? 'Een unieke avond waarbij je achter de schermen kijkt bij 51 creatieve en digitale agencies in Rotterdam. Met talks, exhibitions, workshops en meer over marketing, AI, branding, media en design.'
        : 'A unique evening where you go behind the scenes at 51 creative and digital agencies in Rotterdam. With talks, exhibitions, workshops and more about marketing, AI, branding, media and design.',
      image: '/events/AgencyAtNight.png',
    },
    {
      id: 'xebia-github-copilot-hackathon',
      type: 'Hackathon',
      title: 'Xebia GitHub Copilot Hackathon',
      date: language === 'nl' ? '21 mei 2025' : 'May 21, 2025',
      dateSort: '2025-05-21',
      location: 'Xebia Hilversum, Netherlands',
      attendees: language === 'nl' ? '~50 deelnemers' : '~50 participants',
      description: language === 'nl'
        ? 'Een game-geïnspireerde hackathon gericht op het verbeteren van GitHub Copilot vaardigheden, met tracks voor zowel beginners als gevorderde gebruikers.'
        : 'A game-inspired hackathon focused on improving GitHub Copilot skills, with tracks for both beginners and advanced users.',
      image: '/events/XebiaGithubCopilotHackathon.jpeg',
    },
    {
      id: 'hackathon-computational-science',
      type: 'Hackathon',
      title: 'Hackathon Computational Science',
      date: language === 'nl' ? '14 juni 2025' : 'June 14, 2025',
      dateSort: '2025-06-14',
      location: 'De Zalen van Zeven, Utrecht',
      attendees: language === 'nl' ? '~35 deelnemers (7 teams)' : '~35 participants (7 teams)',
      description: language === 'nl'
        ? 'De eerste Hackathon van Computational Science NL, waar onderzoekers uit verschillende domeinen samenkomen om een real-world uitdaging te tackelen gepresenteerd door Deltares.'
        : 'The first Hackathon of Computational Science NL, bringing together researchers from various domains to tackle a real-world challenge presented by Deltares.',
      image: '/events/ComputationalScienceNL.jpg',
    },
    {
      id: 'citylab010',
      type: 'Workshop',
      title: 'CityLab010 Netwerkevent',
      date: language === 'nl' ? '10 september 2025' : 'September 10, 2025',
      dateSort: '2025-09-10',
      location: 'Het Timmerhuis, Rotterdam',
      attendees: 'TBD',
      description: language === 'nl'
        ? 'Het jaarlijkse netwerkevent van CityLab010 waar plannenmakers, de Stadsjury, partners en gemeentelijke experts samenkomen. Een inspirerende avond vol ontmoeting met workshops over het CityLab-proces en werken vanuit leefwerelden.'
        : 'The annual networking event of CityLab010 where planners, the City Jury, partners and municipal experts come together. An inspiring evening full of meetings with workshops about the CityLab process and working from living environments.',
      image: '/events/Citylab010Netwerkavond.jpg',
    },
    {
      id: 'mendix-ctf',
      type: 'Conference',
      title: 'Mendix Capture The Flag 2025',
      date: language === 'nl' ? '9-10 oktober 2025' : 'October 9-10, 2025',
      dateSort: '2025-10-09',
      location: language === 'nl' ? 'Wereldwijd (17 locaties)' : 'Worldwide (17 locations)',
      attendees: language === 'nl' ? '1.092 hackers wereldwijd' : '1,092 hackers worldwide',
      description: language === 'nl'
        ? 'Het Mendix Security Event van het jaar. Twee dagen vol gratis leren en kennisdeling over Mendix security door middel van hacking challenges en workshops door security experts.'
        : 'The Mendix Security Event of the year. Two days of free learning and knowledge sharing about Mendix security through hacking challenges and workshops by security experts.',
      image: '/events/MendixCTF2025.webp',
    },
    {
      id: 'buildweekend-young-creators',
      type: 'Hackathon',
      title: 'Build Weekend by Young Creators & n8n',
      date: language === 'nl' ? '29-30 november 2025' : 'November 29-30, 2025',
      dateSort: '2025-11-29',
      location: 'StartDock, Amsterdam',
      attendees: language === 'nl' ? '~150 builders (25 teams)' : '~150 builders (25 teams)',
      description: language === 'nl'
        ? 'Een weekend hackathon waar young builders (16-27 jaar) hun eigen ideeën kunnen ontwikkelen. Twee dagen vol collaboration, creativity en learning met toegang tot top mentors en powerful tools.'
        : 'A weekend hackathon where young builders (16-27 years) can develop their own ideas. Two days of collaboration, creativity and learning with access to top mentors and powerful tools.',
      image: '/events/buildweekendbyyoungcreators.png',
    },
    {
      id: 'apify-1m-challenge-amsterdam',
      type: 'Hackathon',
      title: language === 'nl' ? 'Apify $1M Challenge: Amsterdam' : 'Apify $1M Challenge: Amsterdam',
      date: language === 'nl' ? '6 december 2025' : 'December 6, 2025',
      dateSort: '2025-12-06',
      location: 'Meet Berlage, Amsterdam',
      attendees: language === 'nl' ? '~13 deelnemers' : '~13 participants',
      description: language === 'nl'
        ? 'Een dag-lange hackathon voor builders en web scraping enthousiastelingen. Tijdens dit event heb ik met mijn team een woningenscraper gebouwd en de 3e plaats behaald.'
        : 'A day-long hackathon for builders and web scraping enthusiasts. During this event, I built a housing scraper with my team and achieved 3rd place.',
      image: '/events/ApifyChallenge.jpeg',
    },
    {
      id: 'elevenlabs-worldwide-hackathon',
      type: 'Hackathon',
      title: language === 'nl' ? 'ElevenLabs Worldwide Hackathon' : 'ElevenLabs Worldwide Hackathon',
      date: language === 'nl' ? '11 december 2025' : 'December 11, 2025',
      dateSort: '2025-12-11',
      location: language === 'nl' ? 'Amsterdam, Nederland (deel van 30 steden wereldwijd)' : 'Amsterdam, Netherlands (part of 30 cities worldwide)',
      attendees: language === 'nl' ? 'Teams van 2-4 personen' : 'Teams of 2-4 people',
      description: language === 'nl'
        ? 'De grootste wereldwijde hackathon van ElevenLabs gericht op Conversational Agents. We hebben LifeAdmin gebouwd - een AI assistent voor automatische afspraakplanning - en de 2e plaats behaald!'
        : 'ElevenLabs\' largest ever worldwide hackathon focused on Conversational Agents. We built LifeAdmin - an AI assistant for automatic appointment scheduling - and achieved 2nd place!',
      image: '/events/ElevenLabsHackathon.jpg',
    },
    {
      id: 'AI-Fixathon-Amsterdam',
      type: 'Hackathon',
      title: language === 'nl' ? 'AI Fixathon Amsterdam' : 'AI Fixathon Amsterdam',
      date: language === 'nl' ? '13-14 december 2025' : 'December 13-14, 2025',
      dateSort: '2025-12-13',
      location: 'Vandebron, Amsterdam',
      attendees: language === 'nl' ? 'Max 40 deelnemers' : 'Max 40 participants',
      description: language === 'nl'
        ? 'Een 24-uurs AI hackathon gericht op de UN Sustainable Development Goals. We hebben WorkRight Navigator gebouwd - een AI-tool die kwetsbare werknemers helpt na ontslag.'
        : 'A 24-hour AI hackathon focused on the UN Sustainable Development Goals. We built WorkRight Navigator - an AI tool that helps vulnerable employees after dismissal.',
      image: '/events/AIFixathonAmsterdam.jpg',
    },
  ];

  const sortedEvents = [...events].sort((a, b) =>
    sortOrder === 'asc'
      ? a.dateSort.localeCompare(b.dateSort)
      : b.dateSort.localeCompare(a.dateSort)
  );

  return (
    <div className="min-h-screen bg-background">
      <div className="px-4 pb-16 pt-28 sm:px-6 lg:px-8 lg:pt-32">
        <div className="mx-auto max-w-6xl">
          {/* Header */}
          <div className="mb-8">
            <span className="font-mono text-xs uppercase tracking-[0.22em] text-gold-ink">
              {t.eyebrow}
            </span>
            <h1 className="mt-3 font-serif text-5xl font-semibold tracking-tight text-foreground lg:text-6xl">
              {t.title}
            </h1>
            <p className="mt-4 max-w-2xl font-mono text-sm leading-relaxed text-info">
              {t.description}
            </p>
          </div>

          {/* Sort Button */}
          <div className="mb-8 flex justify-end">
            <button
              onClick={() => setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 font-mono text-xs text-info transition-colors hover:border-foreground/40 hover:text-foreground"
            >
              <ArrowUpDown className="h-3.5 w-3.5" />
              {sortOrder === 'desc' ? t.newest : t.oldest}
            </button>
          </div>

          {/* Events Grid */}
          <div className="mb-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {sortedEvents.map((event) => {
              const style = getTypeStyle(event.type);
              return (
                <Link key={event.id} to={`/events/${event.id}`} className="group">
                  <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card">
                    {/* Coloured top accent */}
                    <div className={`h-1 w-full ${style.bar}`} />

                    {/* Event Image */}
                    {event.image ? (
                      <div className="h-44 w-full overflow-hidden">
                        <img
                          src={event.image}
                          alt={event.title}
                          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                      </div>
                    ) : (
                      <div className="flex h-44 w-full items-center justify-center bg-muted">
                        <Calendar className="h-8 w-8 text-info/50" />
                      </div>
                    )}

                    {/* Content */}
                    <div className="flex flex-1 flex-col p-5">
                      <div className="mb-2.5 flex items-center gap-2 font-mono text-[11px] uppercase tracking-wide text-info">
                        <span className={`h-1.5 w-1.5 rounded-full ${style.dot}`} />
                        {event.type}
                      </div>

                      <h3 className="mb-3 font-serif text-xl leading-snug text-foreground">
                        {event.title}
                      </h3>

                      <div className="mb-3 space-y-1.5 font-mono text-xs text-info">
                        <div className="flex items-center gap-2">
                          <Calendar className="h-3.5 w-3.5 flex-shrink-0 text-gold-ink" />
                          <span>{event.date}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="h-3.5 w-3.5 flex-shrink-0 text-gold-ink" />
                          <span>{event.location}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Users className="h-3.5 w-3.5 flex-shrink-0 text-gold-ink" />
                          <span>{event.attendees}</span>
                        </div>
                      </div>

                      <p className="font-mono text-xs leading-relaxed text-info/90 line-clamp-4">
                        {event.description}
                      </p>
                    </div>
                  </article>
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      <CTASection language={language} />
    </div>
  );
};

export default Events;
