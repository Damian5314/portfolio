import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, MapPin, Users, ArrowUpDown } from 'lucide-react';
import CTASection from '@/components/CTASection';

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
      title: 'Evenementen',
      description: 'Hier vind je een overzicht van evenementen waar ik aan heb deelgenomen of waar ik bij betrokken ben geweest.',
      conference: 'Conference',
      meetup: 'Meetup',
      workshop: 'Workshop',
      participants: 'deelnemers',
      sortByDate: 'Sorteer op datum',
      newest: 'Nieuwste eerst',
      oldest: 'Oudste eerst',
    },
    en: {
      title: 'Events',
      description: 'Here you can find an overview of events I have participated in or been involved with.',
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
      id: 'AI-Fixathon-Amsterdam',
      type: 'Hackathon',
      title: language === 'nl' ? 'AI Fixathon Amsterdam' : 'AI Fixathon Amsterdam',
      date: language === 'nl' ? '13-14 december 2025' : 'December 13-14, 2025',
      dateSort: '2025-12-13',
      location: 'Vandebron, Amsterdam',
      attendees: language === 'nl' ? 'Max 40 deelnemers' : 'Max 40 participants',
      description: language === 'nl'
        ? 'Een 24-uurs AI hackathon gericht op de UN Sustainable Development Goals. Bouw AI apps/tools die echte impact maken op gebieden als gezondheid, duurzaamheid en schone energie. Deel van de wereldwijde Norrsken Fixathon serie.'
        : 'A 24-hour AI hackathon focused on the UN Sustainable Development Goals. Build AI apps/tools that make real impact in areas like health, sustainability and clean energy. Part of the global Norrsken Fixathon series.',
      image: '/events/AIFixathonAmsterdam.jpg',
    },
  ];

  const sortedEvents = useMemo(() => {
    return [...events].sort((a, b) => {
      if (sortOrder === 'asc') {
        return a.dateSort.localeCompare(b.dateSort);
      } else {
        return b.dateSort.localeCompare(a.dateSort);
      }
    });
  }, [events, sortOrder]);

  const getBadgeColor = (type: string) => {
    if (type.toLowerCase().includes('conference')) return 'bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300';
    if (type.toLowerCase().includes('meetup')) return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300';
    if (type.toLowerCase().includes('workshop')) return 'bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300';
    if (type.toLowerCase().includes('hackathon')) return 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300';
    return 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300';
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              {t.title}
            </h1>
            <div className="max-w-3xl mx-auto">
              <p className="text-lg text-muted-foreground leading-relaxed">
                {t.description}
              </p>
            </div>
          </div>

          {/* Sort Button */}
          <div className="flex justify-end mb-6">
            <Button
              variant="outline"
              onClick={() => setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')}
              className="gap-2"
            >
              <ArrowUpDown className="w-4 h-4" />
              {sortOrder === 'desc' ? t.newest : t.oldest}
            </Button>
          </div>

          {/* Events Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {sortedEvents.map((event, index) => (
              <Link key={index} to={`/events/${event.id}`}>
                <Card className="shadow-soft hover:shadow-lg transition-shadow overflow-hidden cursor-pointer h-full">
                  {/* Event Image */}
                  {event.image ? (
                    <div className="w-full h-48 overflow-hidden">
                      <img
                        src={event.image}
                        alt={event.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ) : (
                    <div className="w-full h-48 bg-muted flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-background flex items-center justify-center">
                        <Calendar className="w-8 h-8 text-muted-foreground" />
                      </div>
                    </div>
                  )}

                  <CardContent className="p-6 space-y-4">
                    {/* Badge */}
                    <Badge className={`${getBadgeColor(event.type)} border-0`}>
                      {event.type}
                    </Badge>

                    {/* Event Title */}
                    <h3 className="text-xl font-bold text-foreground">
                      {event.title}
                    </h3>

                    {/* Event Details */}
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        <span>{event.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4" />
                        <span>{event.attendees}</span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {event.description}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          {/* CTA Section */}
          <CTASection language={language} />
        </div>
      </div>
    </div>
  );
};

export default Events;
