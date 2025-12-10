import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Globe } from 'lucide-react';

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
      about: 'Over mij',
      tools: 'Tools',
      contact: 'Contact',
    },
    en: {
      home: 'Home',
      projects: 'Projects',
      events: 'Events',
      about: 'About',
      tools: 'Tools',
      contact: 'Contact',
    },
  };

  const t = translations[language];

  const navItems = [
    { key: 'home', label: t.home, path: '/' },
    { key: 'projects', label: t.projects, path: '/projects' },
    { key: 'events', label: t.events, path: '/events' },
    { key: 'about', label: t.about, path: '/about' },
    { key: 'tools', label: t.tools, path: '/tools' },
    { key: 'contact', label: t.contact, path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm border-b border-border" style={{ backgroundColor: 'hsl(var(--header-footer) / 0.95)' }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="text-xl font-bold text-foreground hover:text-primary transition-colors">
            Damian Willemse
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.key}
                to={item.path}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  isActive(item.path)
                    ? 'text-primary border-b-2 border-primary pb-1'
                    : 'text-muted-foreground'
                }`}
              >
                {item.label}
              </Link>
            ))}
            
            {/* Language Switcher */}
            <div className="flex items-center space-x-2 ml-4">
              <Globe className="h-4 w-4 text-muted-foreground" />
              <Button
                variant={language === 'nl' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => onLanguageChange('nl')}
                className="text-xs px-2 py-1 h-7"
              >
                NL
              </Button>
              <Button
                variant={language === 'en' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => onLanguageChange('en')}
                className="text-xs px-2 py-1 h-7"
              >
                EN
              </Button>
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden flex items-center justify-center w-8 h-8 text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="flex flex-col space-y-1">
              <span className={`block w-5 h-0.5 bg-current transition-transform ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
              <span className={`block w-5 h-0.5 bg-current transition-opacity ${isMenuOpen ? 'opacity-0' : ''}`} />
              <span className={`block w-5 h-0.5 bg-current transition-transform ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.key}
                  to={item.path}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    isActive(item.path) ? 'text-primary' : 'text-muted-foreground'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              
              {/* Mobile Language Switcher */}
              <div className="flex items-center space-x-2 pt-2 border-t border-border">
                <Globe className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground mr-2">Language:</span>
                <Button
                  variant={language === 'nl' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => onLanguageChange('nl')}
                  className="text-xs px-2 py-1 h-7"
                >
                  NL
                </Button>
                <Button
                  variant={language === 'en' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => onLanguageChange('en')}
                  className="text-xs px-2 py-1 h-7"
                >
                  EN
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;