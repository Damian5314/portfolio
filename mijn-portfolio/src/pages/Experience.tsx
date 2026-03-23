import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import CTASection from '@/components/CTASection';

interface ExperienceProps {
  language: 'nl' | 'en';
}

interface WorkRole {
  role: string;
  period: string;
  description: string;
  images: string[];
}

interface Company {
  name: string;
  logo: string;
  totalPeriod: string;
  roles: WorkRole[];
}

const Experience: React.FC<ExperienceProps> = ({ language }) => {
  const [lightboxImg, setLightboxImg] = useState<string | null>(null);

  const baseUrl = import.meta.env.BASE_URL;

  const translations = {
    nl: {
      title: 'Werkervaring',
      subtitle: 'Een blik op mijn professionele reis — de bedrijven waar ik heb gewerkt, de rollen die ik heb vervuld en de ervaringen die ik heb opgedaan.',
      companies: [
        {
          name: '21South',
          logo: `${baseUrl}Work/21South_logo.png`,
          totalPeriod: 'Oktober 2024 - Heden',
          roles: [
            {
              role: 'Software Developer',
              period: 'Februari 2026 - Heden',
              description: 'Als Software Developer werk ik mee aan mobiele applicaties die gebruikt worden door gemeentes en commerciële inzamelaars. Via deze apps kunnen bewoners zien wanneer hun afval opgehaald wordt. Naast de app-ontwikkeling houd ik me ook bezig met veel data-gerelateerde vraagstukken.',
              images: [],
            },
            {
              role: 'AI Development Stagiair',
              period: 'September 2025 - Januari 2026',
              description: 'Tijdens mijn stage bij 21South hield ik me bezig met het onderzoeken en implementeren van AI-oplossingen binnen het 21QUBZ platform. Ik verdiepte me in moderne AI-technologieën en werkte aan concrete toepassingen die waarde toevoegen voor gebruikers van het platform.',
              images: [],
            },
            {
              role: 'Junior Support Engineer',
              period: 'Oktober 2024 - Januari 2026',
              description: 'Als Junior Support Engineer was ik het eerste aanspreekpunt voor klanten. Ik hield contact via de telefoon en e-mail en hielp klanten met hun vragen en problemen.',
              images: [],
            },
          ],
        },
        {
          name: 'MediaMarkt',
          logo: `${baseUrl}Work/mediamarkt_logo.svg`,
          totalPeriod: 'Juli 2021 - September 2024',
          roles: [
            {
              role: 'Logistiek Medewerker',
              period: 'Juli 2021 - September 2024',
              description: 'Als logistiek medewerker zorgde ik ervoor dat alle producten veilig binnenkwamen en de winkel in konden. Ik zette bestellingen klaar voor bezorgdiensten en voor klanten die hun bestelling kwamen ophalen. Daarnaast hield ik de voorraad in zowel de winkel als het magazijn goed geordend.',
              images: [],
            },
          ],
        },
        {
          name: 'Dirk van den Broek',
          logo: `${baseUrl}Work/Dirk_logo.png`,
          totalPeriod: 'Juli 2019 - Juli 2021',
          roles: [
            {
              role: 'Vakkenvuller',
              period: 'Juli 2019 - Juli 2021',
              description: 'Als vakkenvuller zorgde ik ervoor dat de schappen altijd goed gevuld en netjes gespiegeld waren.',
              images: [],
            },
          ],
        },
      ] as Company[],
    },
    en: {
      title: 'Work Experience',
      subtitle: 'A look at my professional journey — the companies I\'ve worked for, the roles I\'ve held and the experiences I\'ve gained.',
      companies: [
        {
          name: '21South',
          logo: `${baseUrl}Work/21South_logo.png`,
          totalPeriod: 'October 2024 - Present',
          roles: [
            {
              role: 'Software Developer',
              period: 'February 2026 - Present',
              description: 'As a Software Developer I work on mobile applications used by municipalities and commercial waste collectors. These apps allow residents to see when their waste will be collected. Alongside app development, I also work on a variety of data-related tasks.',
              images: [],
            },
            {
              role: 'AI Development Intern',
              period: 'September 2025 - January 2026',
              description: 'During my internship at 21South I researched and implemented AI solutions within the 21QUBZ platform. I explored modern AI technologies and worked on concrete applications that add value for platform users.',
              images: [],
            },
            {
              role: 'Junior Support Engineer',
              period: 'October 2024 - January 2026',
              description: 'As a Junior Support Engineer I was the first point of contact for customers. I maintained contact via phone and email and helped customers with their questions and issues.',
              images: [],
            },
          ],
        },
        {
          name: 'MediaMarkt',
          logo: `${baseUrl}Work/mediamarkt_logo.svg`,
          totalPeriod: 'July 2021 - September 2024',
          roles: [
            {
              role: 'Logistics Associate',
              period: 'July 2021 - September 2024',
              description: 'As a logistics associate I ensured all products arrived safely and were ready to be brought onto the shop floor. I prepared orders for delivery services and for customers picking up their purchases in store. I also kept the stock in both the shop and the warehouse well organised.',
              images: [],
            },
          ],
        },
        {
          name: 'Dirk van den Broek',
          logo: `${baseUrl}Work/Dirk_logo.png`,
          totalPeriod: 'July 2019 - July 2021',
          roles: [
            {
              role: 'Shelf Stacker',
              period: 'July 2019 - July 2021',
              description: 'As a shelf stacker I made sure the shelves were always well stocked and neatly faced.',
              images: [],
            },
          ],
        },
      ] as Company[],
    },
  };

  const t = translations[language];

  return (
    <div className="min-h-screen bg-background">
      <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">

          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              {t.title}
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              {t.subtitle}
            </p>
          </div>

          {/* Companies */}
          {t.companies.map((company, companyIndex) => (
            <div key={companyIndex} className="mb-20">

              {/* Company header */}
              <div className="flex items-center gap-5 mb-8 p-6 rounded-xl bg-card border border-border shadow-soft">
                <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center overflow-hidden flex-shrink-0 shadow-sm">
                  <img
                    src={company.logo}
                    alt={`${company.name} logo`}
                    className="w-full h-full object-contain p-2"
                  />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-foreground">{company.name}</h2>
                  <p className="text-sm text-muted-foreground mt-1">{company.totalPeriod}</p>
                </div>
              </div>

              {/* Roles */}
              <div className="space-y-6 pl-4 border-l-2 border-accent ml-8">
                {company.roles.map((role, roleIndex) => (
                  <div key={roleIndex} className="relative">
                    {/* Timeline dot */}
                    <div className="absolute -left-[21px] top-6 w-4 h-4 rounded-full bg-accent border-2 border-background shadow-sm" />

                    <Card className="shadow-soft hover:shadow-card transition-shadow duration-300">
                      <CardContent className="p-6 lg:p-8">
                        <div className="flex flex-wrap items-center gap-3 mb-4">
                          <h3 className="text-xl font-semibold text-foreground">{role.role}</h3>
                          <Badge variant="outline" className="text-xs">{role.period}</Badge>
                        </div>

                        <p className="text-muted-foreground leading-relaxed">
                          {role.description}
                        </p>

                        {/* Image gallery */}
                        {role.images.length > 0 && (
                          <div className="mt-6 grid grid-cols-2 md:grid-cols-3 gap-3">
                            {role.images.map((img, imgIndex) => (
                              <button
                                key={imgIndex}
                                onClick={() => setLightboxImg(img)}
                                className="aspect-video rounded-lg overflow-hidden group focus:outline-none focus:ring-2 focus:ring-primary"
                              >
                                <img
                                  src={img}
                                  alt=""
                                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                              </button>
                            ))}
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* CTA */}
          <CTASection language={language} />
        </div>
      </div>

      {/* Lightbox */}
      {lightboxImg && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
          onClick={() => setLightboxImg(null)}
        >
          <img
            src={lightboxImg}
            alt=""
            className="max-w-full max-h-full rounded-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
};

export default Experience;
