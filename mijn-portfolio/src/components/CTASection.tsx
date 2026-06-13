import React from 'react';
import { Link } from 'react-router-dom';

interface CTASectionProps {
  language: 'nl' | 'en';
}

const CTASection: React.FC<CTASectionProps> = ({ language }) => {
  const currentYear = new Date().getFullYear();

  const links = [
    { label: 'Email', href: 'mailto:damianwillmse@gmail.com' },
    { label: 'LinkedIn', href: 'https://linkedin.com/in/damianwillemse' },
    { label: 'GitHub', href: 'https://github.com/damian5314' },
  ];

  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-5 px-4 py-8 sm:flex-row sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <Link
            to="/"
            className="flex h-7 w-7 items-center justify-center rounded-md bg-foreground font-serif text-xs font-semibold text-background"
          >
            D
          </Link>
          <span className="font-mono text-xs text-info">
            © 2025-{currentYear} Damian Willemse
          </span>
        </div>

        <div className="flex items-center gap-6">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="font-mono text-xs text-info transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default CTASection;
