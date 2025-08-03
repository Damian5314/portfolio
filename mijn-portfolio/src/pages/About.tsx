import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

interface AboutProps {
  language: 'nl' | 'en';
}

const About: React.FC<AboutProps> = ({ language }) => {
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
          role: 'Junior Support Engineer',
          company: '21South',
          period: 'oktober 2024 - Heden',
          description: '',
        },
        {
          role: 'Logistiek Medewerker',
          company: 'MediaMarkt',
          period: 'juli 2021 - september 2024',
          description: '',
        },
        {
          role: 'Vakkenvuller',
          company: 'Dirk van den Broek',
          period: 'juli 2019 - juli 2021',
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
          degree: 'HAVO',
          school: 'Montfort College Rotterdam',
          period: '2016 - 2023',
          status: 'Afgerond',
        },
      ],
      certificatesTitle: 'Certificaten & Diploma\'s',
      certificates: [
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
    },
    en: {
      title: 'About me',
      intro: 'Hello! I am Damian, an enthusiastic software developer with a passion for technology, design and building smart solutions. I am currently studying Computer Science at Rotterdam University of Applied Sciences and work as a Full Stack Developer at 21South.',
      skillsTitle: 'Skills',
      skills: {
        technical: 'Technical Skills',
        languages: 'Languages',
      },
      experienceTitle: 'Work Experience',
      experience: [
        {
          role: 'Full Stack Developer',
          company: '21South',
          period: 'Oct 2024 - Present',
          description: 'Development of modern web applications with React and Python.',
        },
        {
          role: 'Sales Associate',
          company: 'MediaMarkt',
          period: '2021 - 2024',
          description: 'Customer service and technical support for electronics.',
        },
        {
          role: 'Team Member',
          company: 'Dirk van den Broek',
          period: '2019 - 2021',
          description: 'Customer-focused service and teamwork in retail environment.',
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
          degree: 'HAVO',
          school: 'Montfort College Rotterdam',
          period: '2016 - 2023',
          status: 'Completed',
        },
      ],
      certificatesTitle: 'Certificates & Diplomas',
      certificates: [
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
    },
  };

  const t = translations[language];

  const technicalSkills = ['HTML', 'CSS', 'JavaScript', 'Python', 'TypeScript', 'React', 'C#'];
  const languageSkills = language === 'nl' ? ['Nederlands', 'Engels'] : ['Dutch', 'English'];

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
                {t.intro}
              </p>
            </div>
          </div>

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
                  <div className="flex flex-wrap gap-2">
                    {languageSkills.map((lang) => (
                      <Badge key={lang} variant="outline" className="text-xs">
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
                  {t.experience.map((exp, index) => (
                    <div key={index} className="border-l-2 border-accent pl-4">
                      <h4 className="font-semibold text-foreground">{exp.role}</h4>
                      <p className="text-primary font-medium text-sm">{exp.company}</p>
                      <p className="text-xs text-muted-foreground mb-2">{exp.period}</p>
                      <p className="text-sm text-muted-foreground">{exp.description}</p>
                    </div>
                  ))}
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
                  {t.education.map((edu, index) => (
                    <div key={index} className="border-l-2 border-accent pl-4">
                      <h4 className="font-semibold text-foreground">{edu.degree}</h4>
                      <p className="text-primary font-medium text-sm">{edu.school}</p>
                      <p className="text-xs text-muted-foreground mb-2">{edu.period}</p>
                      <Badge variant="outline" className="text-xs">
                        {edu.status}
                      </Badge>
                    </div>
                  ))}
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
                {t.certificates.map((cert, index) => (
                  <div key={index} className="flex items-start space-x-4 p-4 rounded-lg bg-muted/50">
                    <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-lg">🏆</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">{cert.name}</h4>
                      <p className="text-sm text-primary font-medium">{cert.issuer}</p>
                      <p className="text-xs text-muted-foreground">{cert.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* CTA Section */}
          <section className="bg-dark-section text-dark-section-foreground rounded-2xl p-8 lg:p-12 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              {t.ctaTitle}
            </h2>
            <Button 
              asChild 
              variant="secondary" 
              size="lg" 
              className="text-lg px-8 py-3 bg-dark-section-foreground text-dark-section hover:bg-accent"
            >
              <Link to="/contact">{t.ctaButton}</Link>
            </Button>
          </section>
        </div>
      </div>
    </div>
  );
};

export default About;