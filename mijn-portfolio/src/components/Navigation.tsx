import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

interface NavigationProps {
  language: 'nl' | 'en';
  onLanguageChange: (lang: 'nl' | 'en') => void;
}

const Navigation: React.FC<NavigationProps> = ({ language, onLanguageChange }) => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const translations = {
    nl: {
      home: 'Home',
      projects: 'Projecten',
      events: 'Evenementen',
      experience: 'Werkervaring',
      about: 'Over mij',
      tools: 'Tools',
      bedrijf: 'Bedrijf',
      contact: 'Contact',
    },
    en: {
      home: 'Home',
      projects: 'Projects',
      events: 'Events',
      experience: 'Experience',
      about: 'About',
      tools: 'Tools',
      bedrijf: 'Company',
      contact: 'Contact',
    },
  };

  const t = translations[language];

  const navItems = [
    { key: 'home', label: t.home, path: '/' },
    { key: 'projects', label: t.projects, path: '/projects' },
    { key: 'events', label: t.events, path: '/events' },
    { key: 'experience', label: t.experience, path: '/experience' },
    { key: 'about', label: t.about, path: '/about' },
    { key: 'tools', label: t.tools, path: '/tools' },
    { key: 'bedrijf', label: t.bedrijf, path: '/bedrijf' },
    { key: 'contact', label: t.contact, path: '/contact' },
  ];

  const isActive = (path: string) =>
    path === '/' ? location.pathname === '/' : location.pathname.startsWith(path);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/85 backdrop-blur-md">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="group flex items-center gap-2.5">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-foreground font-serif text-sm font-semibold text-background">
              D
            </span>
            <span className="text-sm font-semibold tracking-tight text-foreground">
              Damian Willemse
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-7 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.key}
                to={item.path}
                className={`font-mono text-[13px] transition-colors hover:text-foreground ${
                  isActive(item.path) ? 'text-foreground' : 'text-info'
                }`}
              >
                {item.label}
              </Link>
            ))}

            {/* Language Switcher */}
            <div className="ml-2 flex items-center rounded-lg border border-border bg-card p-0.5">
              {(['nl', 'en'] as const).map((lang) => (
                <button
                  key={lang}
                  onClick={() => onLanguageChange(lang)}
                  className={`rounded-md px-2 py-1 font-mono text-[11px] uppercase transition-colors ${
                    language === lang
                      ? 'bg-foreground text-background'
                      : 'text-info hover:text-foreground'
                  }`}
                >
                  {lang}
                </button>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            className="flex h-8 w-8 items-center justify-center text-foreground md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Menu"
          >
            <div className="flex flex-col space-y-1">
              <span className={`block h-0.5 w-5 bg-current transition-transform ${isMenuOpen ? 'translate-y-1.5 rotate-45' : ''}`} />
              <span className={`block h-0.5 w-5 bg-current transition-opacity ${isMenuOpen ? 'opacity-0' : ''}`} />
              <span className={`block h-0.5 w-5 bg-current transition-transform ${isMenuOpen ? '-translate-y-1.5 -rotate-45' : ''}`} />
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="border-t border-border py-4 md:hidden">
            <div className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <Link
                  key={item.key}
                  to={item.path}
                  className={`font-mono text-sm transition-colors hover:text-foreground ${
                    isActive(item.path) ? 'text-foreground' : 'text-info'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}

              <div className="flex items-center gap-2 border-t border-border pt-3">
                {(['nl', 'en'] as const).map((lang) => (
                  <button
                    key={lang}
                    onClick={() => onLanguageChange(lang)}
                    className={`rounded-md px-2.5 py-1 font-mono text-[11px] uppercase transition-colors ${
                      language === lang
                        ? 'bg-foreground text-background'
                        : 'border border-border text-info'
                    }`}
                  >
                    {lang}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
