import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import GitHubStats from '@/components/GitHubStats';
import CTASection from '@/components/CTASection';

interface AboutProps {
  language: 'nl' | 'en';
}

const About: React.FC<AboutProps> = ({ language }) => {
  const [showCVDialog, setShowCVDialog] = useState(false);

  const translations = {
    nl: {
      title: 'Over mij',
      intro: 'Hallo! Ik ben Damian, een enthousiaste software developer met een passie voor technologie, design en het bouwen van slimme oplossingen. Momenteel studeer ik Informatica aan Hogeschool Rotterdam en werk ik als Junior Support Engineer bij 21South.',
      skillsTitle: 'Vaardigheden',
      skills: {
        technical: 'Technische Vaardigheden',
        languages: 'Talen',
      },
      experienceTitle: 'Werkervaring',
      experience: [
        {
          role: 'AI Development Stagair',
          company: '21South',
          period: 'September 2025 - Heden',
          description: 'Onderzoek en implementatie van AI-oplossingen in het 21QUBZ platform',
        },
        {
          role: 'Junior Support Engineer',
          company: '21South',
          period: 'Oktober 2024 - Heden',
          description: '',
        },
        {
          role: 'Logistiek Medewerker',
          company: 'MediaMarkt',
          period: 'Juli 2021 - September 2024',
          description: '',
        },
        {
          role: 'Vakkenvuller',
          company: 'Dirk van den Broek',
          period: 'Juli 2019 - Juli 2021',
          description: '',
        },
      ],
      educationTitle: 'Opleiding',
      education: [
        {
          degree: 'HBO Bachelor Informatica',
          school: 'Hogeschool Rotterdam',
          period: '2023 - Heden',
          status: 'Lopend',
        },
        {
          degree: 'HAVO - Economie & Maatschappij',
          school: 'Montfort College Rotterdam',
          period: '2016 - 2023',
          status: 'Afgerond',
        },
      ],
      certificatesTitle: 'Certificaten & Diploma\'s',
      certificates: [
        {
          name: 'Mendix Rapid Developer',
          issuer: 'Mendix',
          date: 'Sep 2025',
        },
        {
          name: 'Propedeuse Bachelor Informatica',
          issuer: 'Hogeschool Rotterdam',
          date: 'Jul 2024',
        },
        {
          name: 'B2 First – score 171',
          issuer: 'Cambridge English',
          date: 'Dec 2019',
        },
      ],
      ctaTitle: 'Laten we samen beginnen met creëren',
      ctaButton: 'Laten we praten',
      downloadCV: 'Download CV',
      cvDialogTitle: 'Kies je taalvoorkeur',
      cvDialogDescription: 'Selecteer de taal van het CV dat je wilt downloaden',
      cvNederlands: 'Nederlands',
      cvEnglish: 'Engels',
    },
    en: {
      title: 'About me',
      intro: 'Hello! I am Damian, an enthusiastic software developer with a passion for technology, design and building smart solutions. I am currently studying Computer Science at Rotterdam University of Applied Sciences and work as a Junior Support Engineer at 21South.',
      skillsTitle: 'Skills',
      skills: {
        technical: 'Technical Skills',
        languages: 'Languages',
      },
      experienceTitle: 'Work Experience',
      experience: [
        {
          role: 'AI Development Intern',
          company: '21South',
          period: 'September 2025 - Present',
          description: 'Research and implementation of AI solutions in the 21QUBZ platform',
        },
        {
          role: 'Junior Support Engineer',
          company: '21South',
          period: 'October 2024 - Present',
          description: '',
        },
        {
          role: 'Logistics Associate',
          company: 'MediaMarkt',
          period: 'July 2021 - September 2024',
          description: '',
        },
        {
          role: 'filling crew worker',
          company: 'Dirk van den Broek',
          period: 'July 2019 - July 2021',
          description: '',
        },
      ],
      educationTitle: 'Education',
      education: [
        {
          degree: 'HBO Bachelor Computer Science',
          school: 'Rotterdam University of Applied Sciences',
          period: '2023 - Present',
          status: 'Ongoing',
        },
        {
          degree: 'HAVO - Economics & Society',
          school: 'Montfort College Rotterdam',
          period: '2016 - 2023',
          status: 'Completed',
        },
      ],
      certificatesTitle: 'Certificates & Diplomas',
      certificates: [
        {
          name: 'Mendix Rapid Developer',
          issuer: 'Mendix',
          date: 'Sep 2025',
        },
        {
          name: 'Propaedeutic Bachelor Computer Science',
          issuer: 'Rotterdam University of Applied Sciences',
          date: 'Jul 2024',
        },
        {
          name: 'B2 First – score 171',
          issuer: 'Cambridge English',
          date: 'Dec 2019',
        },
      ],
      ctaTitle: "Let's start creating together",
      ctaButton: "Let's talk",
      downloadCV: 'Download CV',
      cvDialogTitle: 'Choose your language preference',
      cvDialogDescription: 'Select the language of the CV you want to download',
      cvNederlands: 'Dutch',
      cvEnglish: 'English',
    },
  };

  const t = translations[language];

  const technicalSkills = ['HTML', 'CSS', 'JavaScript', 'Python', 'TypeScript', 'React', 'C#'];
  const languageSkills = language === 'nl'
    ? ['Nederlands (Moedertaal)', 'Engels (Professionele vaardigheden)', 'Frans (Basis)', 'Spaans (Basis)', 'Chinees (Basis)']
    : ['Dutch (Native)', 'English (Professional proficiency)', 'French (Basic)', 'Spanish (Basic)', 'Chinese (Basic)'];

  const handleDownloadCV = (cvLanguage: 'nl' | 'en') => {
    const cvPath = cvLanguage === 'nl' ? '/cv/cv damian willemse.docx' : '/cv/cv damian willemse english.docx';
    const link = document.createElement('a');
    link.href = cvPath;
    link.download = `CV Damian Willemse ${cvLanguage === 'nl' ? 'Nederlands' : 'English'}.docx`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setShowCVDialog(false);
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
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                {t.intro}
              </p>
              <Button
                variant="outline"
                size="lg"
                className="text-lg px-8 py-3"
                onClick={() => setShowCVDialog(true)}
              >
                <Download className="h-5 w-5 mr-2" />
                {t.downloadCV}
              </Button>
            </div>
          </div>

          {/* CV Download Dialog */}
          <Dialog open={showCVDialog} onOpenChange={setShowCVDialog}>
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle>{t.cvDialogTitle}</DialogTitle>
                <DialogDescription>
                  {t.cvDialogDescription}
                </DialogDescription>
              </DialogHeader>
              <div className="flex flex-col gap-3 mt-4">
                <Button
                  variant="default"
                  size="lg"
                  onClick={() => handleDownloadCV('nl')}
                  className="w-full"
                >
                  <Download className="h-4 w-4 mr-2" />
                  {t.cvNederlands}
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => handleDownloadCV('en')}
                  className="w-full"
                >
                  <Download className="h-4 w-4 mr-2" />
                  {t.cvEnglish}
                </Button>
              </div>
            </DialogContent>
          </Dialog>

          {/* Three Column Section */}
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {/* Skills */}
            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle className="text-xl font-semibold">{t.skillsTitle}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-medium text-sm text-muted-foreground mb-3 uppercase tracking-wider">
                    {t.skills.technical}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {technicalSkills.map((skill) => (
                      <Badge key={skill} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-medium text-sm text-muted-foreground mb-3 uppercase tracking-wider">
                    {t.skills.languages}
                  </h4>
                  <div className="flex flex-col gap-2">
                    {languageSkills.map((lang) => (
                      <Badge key={lang} variant="outline" className="text-xs w-fit">
                        {lang}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Work Experience */}
            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle className="text-xl font-semibold">{t.experienceTitle}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {t.experience.map((exp, index) => {
                    const getCompanyLogo = (company: string) => {
                      const baseUrl = import.meta.env.BASE_URL;
                      if (company.toLowerCase().includes('21south')) {
                        return `${baseUrl}Work/21South_logo.png`;
                      } else if (company.toLowerCase().includes('mediamarkt')) {
                        return `${baseUrl}Work/mediamarkt_logo.svg`;
                      } else if (company.toLowerCase().includes('dirk')) {
                        return `${baseUrl}Work/Dirk_logo.png`;
                      }
                      return '';
                    };

                    const logoPath = getCompanyLogo(exp.company);

                    return (
                      <div key={index} className="flex items-start space-x-3">
                        {logoPath && (
                          <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center flex-shrink-0 overflow-hidden">
                            <img
                              src={logoPath}
                              alt={`${exp.company} logo`}
                              className="w-full h-full object-contain p-1"
                            />
                          </div>
                        )}
                        <div className="border-l-2 border-accent pl-4 flex-1">
                          <h4 className="font-semibold text-foreground">{exp.role}</h4>
                          <p className="text-primary font-medium text-sm">{exp.company}</p>
                          <p className="text-xs text-muted-foreground mb-2">{exp.period}</p>
                          <p className="text-sm text-muted-foreground">{exp.description}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>

            {/* Education */}
            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle className="text-xl font-semibold">{t.educationTitle}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {t.education.map((edu, index) => {
                    const getSchoolLogo = (school: string) => {
                      const baseUrl = import.meta.env.BASE_URL;
                      if (school.toLowerCase().includes('hogeschool rotterdam') || school.toLowerCase().includes('rotterdam university')) {
                        return `${baseUrl}School/hogeschool_rotterdam_logo.png`;
                      } else if (school.toLowerCase().includes('montfort')) {
                        return `${baseUrl}School/montfortcollege_logo.jpg`;
                      }
                      return '';
                    };

                    const logoPath = getSchoolLogo(edu.school);

                    return (
                      <div key={index} className="flex items-start space-x-3">
                        {logoPath && (
                          <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center flex-shrink-0 overflow-hidden">
                            <img
                              src={logoPath}
                              alt={`${edu.school} logo`}
                              className="w-full h-full object-contain p-1"
                            />
                          </div>
                        )}
                        <div className="border-l-2 border-accent pl-4 flex-1">
                          <h4 className="font-semibold text-foreground">{edu.degree}</h4>
                          <p className="text-primary font-medium text-sm">{edu.school}</p>
                          <p className="text-xs text-muted-foreground mb-2">{edu.period}</p>
                          <Badge variant="outline" className="text-xs">
                            {edu.status}
                          </Badge>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Certificates Section */}
          <Card className="shadow-soft mb-16">
            <CardHeader>
              <CardTitle className="text-xl font-semibold">{t.certificatesTitle}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                {t.certificates.map((cert, index) => {
                  const getLogoPath = (issuer: string) => {
                    const baseUrl = import.meta.env.BASE_URL;
                    if (issuer.toLowerCase().includes('mendix')) {
                      return `${baseUrl}Certificates/Mendix_logo.jpeg`;
                    } else if (issuer.toLowerCase().includes('hogeschool rotterdam') || issuer.toLowerCase().includes('rotterdam university')) {
                      return `${baseUrl}Certificates/hogeschool_rotterdam_logo.png`;
                    } else if (issuer.toLowerCase().includes('cambridge')) {
                      return `${baseUrl}Certificates/Cambridge_Logo.png`;
                    }
                    return '';
                  };

                  const logoPath = getLogoPath(cert.issuer);

                  return (
                    <div key={index} className="flex items-start space-x-4 p-4 rounded-lg bg-muted/50">
                      <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center flex-shrink-0 overflow-hidden">
                        {logoPath && (
                          <img
                            src={logoPath}
                            alt={`${cert.issuer} logo`}
                            className="w-full h-full object-contain p-1"
                          />
                        )}
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">{cert.name}</h4>
                        <p className="text-sm text-primary font-medium">{cert.issuer}</p>
                        <p className="text-xs text-muted-foreground">{cert.date}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>

          {/* GitHub Stats Section */}
          <div className="mb-16">
            <GitHubStats language={language} />
          </div>

          {/* CTA Section */}
          <CTASection language={language} />
        </div>
      </div>
    </div>
  );
};

export default About;