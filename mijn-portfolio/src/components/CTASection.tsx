import React from 'react';
import { Link } from 'react-router-dom';

interface CTASectionProps {
  language: 'nl' | 'en';
}

const CTASection: React.FC<CTASectionProps> = ({ language }) => {
  const currentYear = new Date().getFullYear();

  const translations = {
    nl: {
      contact: 'Contact',
    },
    en: {
      contact: 'Contact',
    },
  };

  const t = translations[language];

  return (
    <footer className="border-t border-border mt-16" style={{ backgroundColor: 'hsl(45, 46%, 94%)' }}>
      <div className="py-6 text-center text-sm text-muted-foreground">
        <p>
          © 2025-{currentYear} Damian Willemse •{' '}
          <Link to="/contact" className="hover:text-foreground transition-colors">
            {t.contact}
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default CTASection;
