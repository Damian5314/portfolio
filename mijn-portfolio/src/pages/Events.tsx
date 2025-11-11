import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, Users } from 'lucide-react';

interface EventsProps {
  language: 'nl' | 'en';
}

interface Event {
  id: string;
  type: string;
  title: string;
  date: string;
  location: string;
  attendees: string;
  description: string;
  image?: string;
}

const Events: React.FC<EventsProps> = ({ language }) => {
  const translations = {
    nl: {
      title: 'Evenementen',
      description: 'Hier vind je een overzicht van evenementen waar ik aan heb deelgenomen of waar ik bij betrokken ben geweest.',
      conference: 'Conference',
      meetup: 'Meetup',
      workshop: 'Workshop',
      participants: 'deelnemers',
    },
    en: {
      title: 'Events',
      description: 'Here you can find an overview of events I have participated in or been involved with.',
      conference: 'Conference',
      meetup: 'Meetup',
      workshop: 'Workshop',
      participants: 'participants',
    },
  };

  const t = translations[language];

  const events: Event[] = [
    {
      id: 'agency-at-night',
      type: 'Meetup',
      title: 'Agency at night',
      date: language === 'nl' ? '16 mei 2025' : 'May 16, 2025',
      location: 'TBD',
      attendees: 'TBD',
      description: language === 'nl'
        ? 'Informatie wordt later toegevoegd.'
        : 'Information will be added later.',
    },
    {
      id: 'xebia-github-copilot-hackathon',
      type: 'Hackathon',
      title: 'Xebia GitHub copilot hackathon',
      date: language === 'nl' ? '21 mei 2025' : 'May 21, 2025',
      location: 'TBD',
      attendees: 'TBD',
      description: language === 'nl'
        ? 'Informatie wordt later toegevoegd.'
        : 'Information will be added later.',
    },
    {
      id: 'hackathon-computational-science',
      type: 'Hackathon',
      title: 'Hackathon computational science',
      date: language === 'nl' ? '14 juni 2025' : 'June 14, 2025',
      location: 'TBD',
      attendees: 'TBD',
      description: language === 'nl'
        ? 'Informatie wordt later toegevoegd.'
        : 'Information will be added later.',
    },
    {
      id: 'citylab010',
      type: 'Workshop',
      title: 'Citylab010',
      date: language === 'nl' ? '10 september 2025' : 'September 10, 2025',
      location: 'Rotterdam',
      attendees: 'TBD',
      description: language === 'nl'
        ? 'Informatie wordt later toegevoegd.'
        : 'Information will be added later.',
    },
    {
      id: 'citylab010-werk-cafe',
      type: 'Meetup',
      title: 'Citylab010 werk cafe',
      date: language === 'nl' ? '22 september 2025' : 'September 22, 2025',
      location: 'Rotterdam',
      attendees: 'TBD',
      description: language === 'nl'
        ? 'Informatie wordt later toegevoegd.'
        : 'Information will be added later.',
    },
    {
      id: 'citylab010-pitch',
      type: 'Conference',
      title: 'Citylab010 pitch',
      date: language === 'nl' ? '7 oktober 2025' : 'October 7, 2025',
      location: 'Rotterdam',
      attendees: 'TBD',
      description: language === 'nl'
        ? 'Informatie wordt later toegevoegd.'
        : 'Information will be added later.',
    },
    {
      id: 'mendix-ctf',
      type: 'Conference',
      title: 'Mendix CTF',
      date: language === 'nl' ? '9-10 oktober 2025' : 'October 9-10, 2025',
      location: 'TBD',
      attendees: 'TBD',
      description: language === 'nl'
        ? 'Informatie wordt later toegevoegd.'
        : 'Information will be added later.',
    },
    {
      id: 'mendix-hack-the-halls',
      type: 'Hackathon',
      title: 'Mendix hack the halls mini-hackathon',
      date: language === 'nl' ? '19 november 2025' : 'November 19, 2025',
      location: 'TBD',
      attendees: 'TBD',
      description: language === 'nl'
        ? 'Informatie wordt later toegevoegd.'
        : 'Information will be added later.',
    },
    {
      id: 'buildweekend-young-creators',
      type: 'Workshop',
      title: 'buildweekend young creators',
      date: language === 'nl' ? '30 november - 1 december 2025' : 'November 30 - December 1, 2025',
      location: 'TBD',
      attendees: 'TBD',
      description: language === 'nl'
        ? 'Informatie wordt later toegevoegd.'
        : 'Information will be added later.',
    },
  ];

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

          {/* Events Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {events.map((event, index) => (
              <Link key={index} to={`/events/${event.id}`}>
                <Card className="shadow-soft hover:shadow-lg transition-shadow overflow-hidden cursor-pointer h-full">
                  {/* Event Image Placeholder */}
                  <div className="w-full h-48 bg-muted flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-background flex items-center justify-center">
                      <Calendar className="w-8 h-8 text-muted-foreground" />
                    </div>
                  </div>

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
        </div>
      </div>
    </div>
  );
};

export default Events;
