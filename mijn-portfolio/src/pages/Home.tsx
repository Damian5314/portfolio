import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import damianPortrait from '@/assets/damian-portrait.jpg';

interface HomeProps {
  language: 'nl' | 'en';
}

const Home: React.FC<HomeProps> = ({ language }) => {
  const translations = {
    nl: {
      title: 'Full Stack Developer',
      description: 'Gepassioneerd over het creëren van moderne webapplicaties en slimme oplossingen. Ik help bedrijven hun digitale dromen waar te maken.',
      viewProjects: 'Bekijk projecten',
      contact: 'Neem contact op',
      ctaTitle: 'Laten we samen beginnen met creëren',
      ctaButton: 'Laten we praten',
    },
    en: {
      title: 'Full Stack Developer',
      description: 'Passionate about creating modern web applications and smart solutions. I help businesses bring their digital dreams to life.',
      viewProjects: 'View projects',
      contact: 'Get in touch',
      ctaTitle: "Let's start creating together",
      ctaButton: "Let's talk",
    },
  };

  const t = translations[language];

  return (
    <div className="min-h-screen bg-hero-gradient">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            {/* Portrait */}
            <div className="flex justify-center lg:justify-start order-1 lg:order-1">
              <Card className="p-8 shadow-card">
                <img
                  src={damianPortrait}
                  alt="Damian Willemse"
                  className="w-80 h-80 object-cover rounded-lg mx-auto"
                />
              </Card>
            </div>

            {/* Content */}
            <div className="text-center lg:text-left order-2 lg:order-2">
              <h1 className="text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
                Damian Willemse
              </h1>
              <h2 className="text-2xl lg:text-3xl font-semibold text-primary mb-6">
                {t.title}
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-xl">
                {t.description}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button asChild size="lg" className="text-lg px-8 py-3">
                  <Link to="/projects">{t.viewProjects}</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="text-lg px-8 py-3">
                  <Link to="/contact">{t.contact}</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Preview */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="p-6 text-center shadow-soft hover:shadow-card transition-shadow">
              <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎨</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Frontend</h3>
              <p className="text-muted-foreground">React, TypeScript, Tailwind CSS</p>
            </Card>

            <Card className="p-6 text-center shadow-soft hover:shadow-card transition-shadow">
              <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚙️</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Backend</h3>
              <p className="text-muted-foreground">Python, C#, Database Design</p>
            </Card>

            <Card className="p-6 text-center shadow-soft hover:shadow-card transition-shadow">
              <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🚀</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Innovation</h3>
              <p className="text-muted-foreground">Smart Solutions, Modern Design</p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-dark-section text-dark-section-foreground py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto text-center max-w-4xl">
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
        </div>
      </section>
    </div>
  );
};

export default Home;