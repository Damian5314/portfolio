import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Download, ArrowRight } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import GitHubStats from '@/components/GitHubStats';
import CTASection from '@/components/CTASection';
import damianPortrait from '@/assets/DamianWillemse.jpeg';

interface AboutProps {
  language: 'nl' | 'en';
}

const About: React.FC<AboutProps> = ({ language }) => {
  const [showCVDialog, setShowCVDialog] = useState(false);

  const translations = {
    nl: {
      title: 'Over mij',
      intro: 'Hallo! Ik ben Damian, een enthousiaste software developer met een passie voor technologie, design en het bouwen van slimme oplossingen. Ik studeer Informatica aan Hogeschool Rotterdam en werk als developer bij 21South.',
      skillsTitle: 'Vaardigheden',
      skills: {
        technical: 'Technische Vaardigheden',
        languages: 'Talen',
      },
      experienceTitle: 'Werkervaring',
      experienceLink: 'Bekijk volledige werkervaring',
      experienceHighlights: [
        { role: 'Software Developer', company: '21South', period: 'Feb 2026 - Heden', logo: `${import.meta.env.BASE_URL}Work/21South_logo.png` },
        { role: 'AI Development Stagiair', company: '21South', period: 'Sep 2025 - Jan 2026', logo: `${import.meta.env.BASE_URL}Work/21South_logo.png` },
        { role: 'Logistiek Medewerker', company: 'MediaMarkt', period: 'Jul 2021 - Sep 2024', logo: `${import.meta.env.BASE_URL}Work/mediamarkt_logo.svg` },
      ],
      experience: [
        {
          role: 'Software Developer',
          company: '21South',
          period: 'Februari 2026 - Heden',
          description: '',
        },
        {
          role: 'AI Development Stagiair',
          company: '21South',
          period: 'September 2025 - Januari 2026',
          description: 'Onderzoek en implementatie van AI-oplossingen in het 21QUBZ platform',
        },
        {
          role: 'Junior Support Engineer',
          company: '21South',
          period: 'Oktober 2024 - Januari 2026',
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
          degree: 'Minor Software Reversing and Exploitation',
          school: 'De Haagse Hogeschool',
          period: 'September 2026 - Januari 2027',
          status: 'Aankomend',
        },
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
      intro: 'Hello! I am Damian, an enthusiastic software developer with a passion for technology, design and building smart solutions. I study Computer Science at Rotterdam University of Applied Sciences and work as a developer at 21South.',
      skillsTitle: 'Skills',
      skills: {
        technical: 'Technical Skills',
        languages: 'Languages',
      },
      experienceTitle: 'Work Experience',
      experienceLink: 'View full work experience',
      experienceHighlights: [
        { role: 'Software Developer', company: '21South', period: 'Feb 2026 - Present', logo: `${import.meta.env.BASE_URL}Work/21South_logo.png` },
        { role: 'AI Development Intern', company: '21South', period: 'Sep 2025 - Jan 2026', logo: `${import.meta.env.BASE_URL}Work/21South_logo.png` },
        { role: 'Logistics Associate', company: 'MediaMarkt', period: 'Jul 2021 - Sep 2024', logo: `${import.meta.env.BASE_URL}Work/mediamarkt_logo.svg` },
      ],
      experience: [
        {
          role: 'Software Developer',
          company: '21South',
          period: 'February 2026 - Present',
          description: '',
        },
        {
          role: 'AI Development Intern',
          company: '21South',
          period: 'September 2025 - January 2026',
          description: 'Research and implementation of AI solutions in the 21QUBZ platform',
        },
        {
          role: 'Junior Support Engineer',
          company: '21South',
          period: 'October 2024 - January 2026',
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
          degree: 'Minor Software Reversing and Exploitation',
          school: 'The Hague University of Applied Sciences',
          period: 'September 2026 - January 2027',
          status: 'Upcoming',
        },
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

  const technicalSkills = ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Python', 'C#'];
  const languageSkills = language === 'nl'
    ? [
        { name: 'Nederlands', level: 'Moedertaal' },
        { name: 'Engels', level: 'Professioneel' },
        { name: 'Frans', level: 'Basis' },
        { name: 'Spaans', level: 'Basis' },
        { name: 'Chinees', level: 'Basis' },
      ]
    : [
        { name: 'Dutch', level: 'Native' },
        { name: 'English', level: 'Professional' },
        { name: 'French', level: 'Basic' },
        { name: 'Spanish', level: 'Basic' },
        { name: 'Chinese', level: 'Basic' },
      ];

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

  const getSchoolLogo = (school: string) => {
    const baseUrl = import.meta.env.BASE_URL;
    if (school.toLowerCase().includes('hogeschool rotterdam') || school.toLowerCase().includes('rotterdam university')) {
      return `${baseUrl}School/hogeschool_rotterdam_logo.png`;
    } else if (school.toLowerCase().includes('montfort')) {
      return `${baseUrl}School/montfortcollege_logo.jpg`;
    } else if (school.toLowerCase().includes('haagse') || school.toLowerCase().includes('hague')) {
      return `${baseUrl}School/overdehaagse-mediakit-hhsnlgroenhexpng.png`;
    }
    return '';
  };

  const getCertLogo = (issuer: string) => {
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

  const sectionLabel = 'font-mono text-xs uppercase tracking-[0.2em] text-gold-ink';
  const cardClass = 'rounded-2xl border border-border bg-card p-6';

  return (
    <div className="min-h-screen bg-background">
      <div className="px-4 pb-16 pt-28 sm:px-6 lg:px-8 lg:pt-32">
        <div className="mx-auto max-w-6xl">
          {/* Hero */}
          <section className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <div className="order-1 flex justify-center lg:justify-start">
              <img
                src={damianPortrait}
                alt="Damian Willemse"
                className="aspect-[4/5] w-full max-w-sm rounded-2xl object-cover shadow-card"
              />
            </div>

            <div className="order-2">
              <span className={sectionLabel}>{t.title}</span>
              <h1 className="mt-3 font-serif text-5xl font-semibold tracking-tight text-foreground lg:text-6xl">
                {t.title}
              </h1>
              <p className="mt-5 max-w-lg font-mono text-sm leading-relaxed text-info">
                {t.intro}
              </p>
              <button
                onClick={() => setShowCVDialog(true)}
                className="mt-7 inline-flex items-center gap-2 rounded-xl bg-foreground px-6 py-3 font-mono text-sm text-background transition-transform hover:-translate-y-0.5"
              >
                <Download className="h-4 w-4" />
                {t.downloadCV}
              </button>
            </div>
          </section>

          {/* CV Download Dialog */}
          <Dialog open={showCVDialog} onOpenChange={setShowCVDialog}>
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle>{t.cvDialogTitle}</DialogTitle>
                <DialogDescription>{t.cvDialogDescription}</DialogDescription>
              </DialogHeader>
              <div className="mt-4 flex flex-col gap-3">
                <Button variant="default" size="lg" onClick={() => handleDownloadCV('nl')} className="w-full">
                  <Download className="mr-2 h-4 w-4" />
                  {t.cvNederlands}
                </Button>
                <Button variant="outline" size="lg" onClick={() => handleDownloadCV('en')} className="w-full">
                  <Download className="mr-2 h-4 w-4" />
                  {t.cvEnglish}
                </Button>
              </div>
            </DialogContent>
          </Dialog>

          {/* Three Column Section */}
          <div className="mt-16 grid gap-6 lg:grid-cols-3">
            {/* Skills */}
            <div className={cardClass}>
              <h2 className="mb-5 font-semibold text-foreground">{t.skillsTitle}</h2>

              <p className={`${sectionLabel} mb-3 block`}>{t.skills.technical}</p>
              <div className="mb-6 flex flex-wrap gap-1.5">
                {technicalSkills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-md border border-border px-2 py-0.5 font-mono text-[11px] text-info"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <p className={`${sectionLabel} mb-3 block`}>{t.skills.languages}</p>
              <ul className="space-y-2">
                {languageSkills.map((lang) => (
                  <li key={lang.name} className="flex items-center gap-2.5 font-mono text-xs">
                    <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gold" />
                    <span className="text-foreground">{lang.name}</span>
                    <span className="text-info">— {lang.level}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Work Experience */}
            <div className={cardClass}>
              <h2 className="mb-5 font-semibold text-foreground">{t.experienceTitle}</h2>
              <div className="space-y-4">
                {t.experienceHighlights.map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center overflow-hidden rounded-lg border border-border bg-white">
                      <img src={item.logo} alt={item.company} className="h-full w-full object-contain p-1" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-sm font-medium text-foreground">{item.role}</p>
                      <p className="font-mono text-[11px] text-info">{item.company} · {item.period}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Link
                to="/experience"
                className="group mt-6 inline-flex items-center gap-2 font-mono text-xs text-gold-ink transition-colors hover:text-foreground"
              >
                {t.experienceLink}
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            {/* Education */}
            <div className={cardClass}>
              <h2 className="mb-5 font-semibold text-foreground">{t.educationTitle}</h2>
              <div className="space-y-5">
                {t.education.map((edu, index) => {
                  const logoPath = getSchoolLogo(edu.school);
                  return (
                    <div key={index} className="flex items-start gap-3">
                      {logoPath && (
                        <div className="mt-0.5 flex h-9 w-9 flex-shrink-0 items-center justify-center overflow-hidden rounded-lg border border-border bg-white">
                          <img src={logoPath} alt={`${edu.school} logo`} className="h-full w-full object-contain p-1" />
                        </div>
                      )}
                      <div className="min-w-0 flex-1">
                        <h4 className="text-sm font-semibold leading-snug text-foreground">{edu.degree}</h4>
                        <p className="font-mono text-[11px] text-gold-ink">{edu.school}</p>
                        <p className="font-mono text-[11px] text-info">{edu.period}</p>
                        <span className="mt-1.5 inline-block rounded-md border border-border px-2 py-0.5 font-mono text-[10px] text-info">
                          {edu.status}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Certificates Section */}
          <div className={`mt-6 ${cardClass}`}>
            <h2 className="mb-5 font-semibold text-foreground">{t.certificatesTitle}</h2>
            <div className="grid gap-4 md:grid-cols-3">
              {t.certificates.map((cert, index) => {
                const logoPath = getCertLogo(cert.issuer);
                return (
                  <div key={index} className="flex items-start gap-3 rounded-xl border border-border bg-background/40 p-4">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center overflow-hidden rounded-lg border border-border bg-white">
                      {logoPath && (
                        <img src={logoPath} alt={`${cert.issuer} logo`} className="h-full w-full object-contain p-1" />
                      )}
                    </div>
                    <div className="min-w-0">
                      <h4 className="text-sm font-semibold leading-snug text-foreground">{cert.name}</h4>
                      <p className="font-mono text-[11px] text-gold-ink">{cert.issuer}</p>
                      <p className="font-mono text-[11px] text-info">{cert.date}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* GitHub Stats Section */}
          <div className="mt-16">
            <GitHubStats language={language} />
          </div>
        </div>
      </div>

      <CTASection language={language} />
    </div>
  );
};

export default About;