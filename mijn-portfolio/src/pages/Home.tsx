import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin } from 'lucide-react';
import CTASection from '@/components/CTASection';
import damianPortrait from '@/assets/DamianWillemse.jpeg';

interface HomeProps {
  language: 'nl' | 'en';
}

const Home: React.FC<HomeProps> = ({ language }) => {
  const translations = {
    nl: {
      available: 'Beschikbaar voor projecten',
      titles: [
        'Informatica @ Hogeschool Rotterdam',
        'Software Developer @ 21South',
        'Co-founder @ TableTech',
      ],
      description:
        'Gepassioneerd over het bouwen van moderne webapplicaties en slimme oplossingen. Ik help bedrijven hun digitale dromen waar te maken.',
      viewProjects: 'Bekijk projecten',
      contact: 'Neem contact op',
      location: 'Rotterdam, NL',
      role: 'Informatica student & developer',
      whatIDo: 'Wat ik doe',
      cards: [
        { title: 'Frontend', desc: 'React, TypeScript, Tailwind CSS' },
        { title: 'Backend', desc: 'Python, C#, Database Design' },
        { title: 'Innovatie', desc: 'Slimme oplossingen, modern design' },
      ],
      contactLabel: 'Contact',
      ctaTitle: 'Laten we samen beginnen met creëren',
      ctaSub: 'Heb je een idee of project? Ik hoor graag van je.',
      ctaButton: 'Laten we praten',
    },
    en: {
      available: 'Available for projects',
      titles: [
        'Computer Science @ Rotterdam University',
        'Software Developer @ 21South',
        'Co-founder @ TableTech',
      ],
      description:
        'Passionate about building modern web applications and smart solutions. I help businesses bring their digital dreams to life.',
      viewProjects: 'View projects',
      contact: 'Get in touch',
      location: 'Rotterdam, NL',
      role: 'Computer Science student & developer',
      whatIDo: 'What I do',
      cards: [
        { title: 'Frontend', desc: 'React, TypeScript, Tailwind CSS' },
        { title: 'Backend', desc: 'Python, C#, Database Design' },
        { title: 'Innovation', desc: 'Smart solutions, modern design' },
      ],
      contactLabel: 'Contact',
      ctaTitle: "Let's start creating together",
      ctaSub: 'Got an idea or project? I’d love to hear from you.',
      ctaButton: "Let's talk",
    },
  };

  const t = translations[language];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="px-4 pb-20 pt-28 sm:px-6 lg:px-8 lg:pt-32">
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Content */}
          <div className="order-2 lg:order-1">
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 font-mono text-xs text-info">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              {t.available}
            </div>

            <h1 className="mb-8 font-serif text-5xl font-semibold leading-[0.95] tracking-tight text-foreground sm:text-6xl lg:text-7xl">
              Damian Willemse
            </h1>

            <ul className="mb-6 space-y-2">
              {t.titles.map((title, index) => (
                <li key={index} className="flex items-baseline gap-3 font-mono text-sm text-info sm:text-[15px]">
                  <span className="text-gold-ink">{String(index + 1).padStart(2, '0')}</span>
                  <span>{title}</span>
                </li>
              ))}
            </ul>

            <p className="mb-8 max-w-md font-mono text-sm leading-relaxed text-info/90">
              {t.description}
            </p>

            <div className="flex flex-wrap gap-3">
              <Link
                to="/projects"
                className="group inline-flex items-center gap-2 rounded-xl bg-foreground px-6 py-3 font-mono text-sm text-background transition-transform hover:-translate-y-0.5"
              >
                {t.viewProjects}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center rounded-xl border border-foreground/15 bg-card px-6 py-3 font-mono text-sm text-foreground transition-colors hover:border-foreground/40"
              >
                {t.contact}
              </Link>
            </div>
          </div>

          {/* Portrait */}
          <div className="order-1 flex justify-center lg:order-2 lg:justify-end">
            <div className="relative w-full max-w-sm">
              <div className="absolute -bottom-4 -right-4 h-full w-full rounded-2xl bg-gold/70" />
              <img
                src={damianPortrait}
                alt="Damian Willemse"
                className="relative aspect-[4/5] w-full rounded-2xl object-cover shadow-card"
              />
              <div className="absolute bottom-4 left-4 rounded-xl bg-foreground/90 px-4 py-2.5 backdrop-blur-sm">
                <div className="flex items-center gap-1.5 font-mono text-xs text-gold">
                  <MapPin className="h-3 w-3" />
                  {t.location}
                </div>
                <div className="font-mono text-[11px] text-background/70">{t.role}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What I do */}
      <section className="px-4 pb-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 flex items-center gap-4">
            <span className="font-mono text-xs uppercase tracking-[0.22em] text-info">
              {t.whatIDo}
            </span>
            <div className="h-px flex-1 bg-border" />
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {t.cards.map((card, index) => (
              <div
                key={card.title}
                className="group rounded-2xl border border-border bg-card p-6 transition-colors hover:border-gold"
              >
                <span className="font-mono text-xs text-gold-ink">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h3 className="mb-2 mt-3 font-serif text-2xl text-foreground">{card.title}</h3>
                <p className="font-mono text-xs leading-relaxed text-info">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dark CTA */}
      <section className="px-4 pb-20 sm:px-6 lg:px-8">
        <div className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl bg-dark px-6 py-16 text-center sm:px-16 sm:py-20">
          <div className="pointer-events-none absolute -right-10 -top-10 h-48 w-48 rounded-full bg-white/[0.03]" />
          <div className="pointer-events-none absolute -bottom-16 -left-12 h-56 w-56 rounded-full bg-white/[0.03]" />

          <div className="relative">
            <span className="font-mono text-xs text-gold">// {t.contactLabel}</span>
            <h2 className="mx-auto mb-4 mt-4 max-w-2xl font-serif text-4xl leading-tight text-dark-foreground sm:text-5xl">
              {t.ctaTitle}
            </h2>
            <p className="mb-8 font-mono text-sm text-dark-foreground/60">{t.ctaSub}</p>
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 rounded-xl bg-gold px-7 py-3 font-mono text-sm text-gold-foreground transition-transform hover:-translate-y-0.5"
            >
              {t.ctaButton}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      <CTASection language={language} />
    </div>
  );
};

export default Home;
