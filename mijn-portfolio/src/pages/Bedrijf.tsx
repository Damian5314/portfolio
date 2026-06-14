import React from 'react';
import { ShoppingCart, LayoutDashboard, Globe, Heart, ExternalLink, Image } from 'lucide-react';
import CTASection from '@/components/CTASection';

interface BedrijfProps {
  language: 'nl' | 'en';
}

const features = [
  {
    icon: <ShoppingCart className="h-5 w-5" />,
    title: 'Online bestellen',
    description: 'Klanten plaatsen via de website bestellingen voor afhaal — met een overzichtelijk menu en eenvoudig afronden.',
  },
  {
    icon: <LayoutDashboard className="h-5 w-5" />,
    title: 'Keuken dashboard',
    description: 'Bestellingen komen realtime binnen in een keuken dashboard, inclusief statistieken over omzet en drukte.',
  },
  {
    icon: <Globe className="h-5 w-5" />,
    title: 'Stichtingswebsite',
    description: 'Een informatieve website die laat zien wie de stichting is, wat ze doen en welke projecten er lopen.',
  },
  {
    icon: <Heart className="h-5 w-5" />,
    title: 'Online donaties',
    description: 'Bezoekers kunnen direct via de website doneren, met een duidelijke weergave van het doel en de impact.',
  },
];

const screenshots = [
  'Dashboard-overzicht',
  'Bestel-flow',
  'Website / team',
];

const Bedrijf: React.FC<BedrijfProps> = ({ language }) => {
  return (
    <div className="min-h-screen bg-background">
      <div className="px-4 pb-16 pt-28 sm:px-6 lg:px-8 lg:pt-32">
        <div className="mx-auto max-w-5xl">

          {/* ── Hero ── */}
          <div className="mb-12 grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            {/* Left */}
            <div>
              <span className="font-mono text-xs uppercase tracking-[0.22em] text-gold-ink">
                // Mijn Bedrijf
              </span>

              <div className="mt-6 flex items-center gap-3">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-foreground font-serif text-xl font-bold text-background">
                  T
                </div>
                <span className="flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5 font-mono text-xs text-foreground">
                  <span className="h-2 w-2 rounded-full bg-green-500" />
                  Live · Co-founder
                </span>
              </div>

              <h1 className="mt-5 font-serif text-6xl font-bold tracking-tight text-foreground lg:text-7xl">
                TableTech
              </h1>

              <p className="mt-4 text-lg font-semibold leading-snug text-foreground">
                Maatwerk weboplossingen voor bedrijven en organisaties.
              </p>

              <p className="mt-4 text-sm leading-relaxed text-info">
                Samen met mijn mede-oprichters bouw ik bij TableTech gerichte digitale oplossingen voor onze klanten. Van een bestelwebsite met keuken dashboard voor een restaurant, tot een stichtingswebsite met donatiefunctie — elk project is op maat gebouwd.
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-3">
                <a
                  href="https://tabletech.nl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-xl bg-foreground px-5 py-2.5 font-mono text-sm text-background transition-opacity hover:opacity-85"
                >
                  Bezoek tabletech.nl <ExternalLink className="h-3.5 w-3.5" />
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-xl border border-border bg-card px-5 py-2.5 font-mono text-sm text-foreground transition-colors hover:border-gold/60"
                >
                  GitHub
                </a>
              </div>
            </div>

            {/* Right – hero image placeholder */}
            <div
              className="flex min-h-56 flex-col items-center justify-center gap-2 rounded-2xl border-2 border-dashed border-border/60 p-10 text-center"
              style={{ backgroundColor: 'hsl(44 80% 87%)' }}
            >
              <Image className="h-8 w-8 text-info/40" />
              <p className="font-mono text-sm text-info">Hero-screenshot van TableTech</p>
              <p className="font-mono text-xs text-info/60">(dashboard of app)</p>
            </div>
          </div>

          {/* ── Stats ── */}
          <div className="mb-20 grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-border bg-card p-6">
              <p className="font-serif text-4xl font-bold text-foreground">2025</p>
              <p className="mt-1.5 font-mono text-xs text-info">Opgericht</p>
            </div>
            <div className="rounded-2xl border border-border bg-card p-6">
              <p className="font-serif text-4xl font-bold text-foreground">4</p>
              <p className="mt-1.5 font-mono text-xs text-info">Mede-oprichters / team</p>
            </div>
            <div className="rounded-2xl bg-foreground p-6">
              <p className="font-serif text-4xl font-bold text-gold-ink">Maatwerk</p>
              <p className="mt-1.5 font-mono text-xs text-background/60">Onze aanpak</p>
            </div>
          </div>

          {/* ── Problem statement ── */}
          <div className="mb-16">
            <h2 className="font-serif text-4xl font-bold tracking-tight text-foreground lg:text-5xl">
              Bedrijven en organisaties lopen kansen mis zonder de juiste digitale aanwezigheid.
            </h2>
            <p className="mt-6 max-w-2xl text-sm leading-relaxed text-info">
              Een restaurant dat bestellingen mist omdat er geen online besteloptie is. Een stichting die donateurs verliest omdat de website verouderd of onduidelijk is. TableTech bouwt gerichte weboplossingen die dit concreet oplossen — per klant, op maat.
            </p>
          </div>

          {/* ── Features grid ── */}
          <div className="mb-20">
            <span className="font-mono text-xs uppercase tracking-[0.22em] text-info">
              Wat we bouwen
            </span>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {features.map((feature) => (
                <div key={feature.title} className="rounded-2xl border border-border bg-card p-6">
                  <div className="mb-4 inline-flex items-center justify-center rounded-xl bg-muted p-2.5 text-foreground">
                    {feature.icon}
                  </div>
                  <h3 className="font-semibold text-foreground">{feature.title}</h3>
                  <p className="mt-2 font-mono text-xs leading-relaxed text-info">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ── Role + Tech ── */}
          <div className="mb-20 grid gap-6 lg:grid-cols-2">
            {/* Dark – Mijn Rol */}
            <div className="rounded-2xl bg-foreground p-8">
              <span className="font-mono text-xs uppercase tracking-[0.22em] text-gold-ink">
                Mijn rol
              </span>
              <h2 className="mt-3 font-serif text-2xl font-bold text-gold-ink">
                Co-founder & Full Stack Developer
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-background/75">
                Ik ben vanaf het begin betrokken bij TableTech. Ik bouw de webapplicaties voor onze klanten — van bestelwebsites tot stichtingsplatforms — en denk mee over de richting van het bedrijf.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  'Product-richting bepalen met het team',
                  'Front- en backend bouwen en onderhouden',
                  'Klantgesprekken vertalen naar features',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gold-ink" />
                    <span className="font-mono text-xs text-background/75">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Light – Techniek */}
            <div className="rounded-2xl border border-border bg-card p-8">
              <span className="font-mono text-xs uppercase tracking-[0.22em] text-info">
                Techniek
              </span>
              <h2 className="mt-3 font-serif text-2xl font-bold text-foreground">
                Waarmee we bouwen
              </h2>
              <div className="mt-4 flex flex-wrap gap-2">
                {['React', 'Node.js', 'PostgreSQL', 'WebSocket', 'Microservices'].map((tech) => (
                  <span
                    key={tech}
                    className="rounded-lg border border-border px-3 py-1 font-mono text-xs text-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="my-6 h-px bg-border" />
              <p className="font-mono text-xs leading-relaxed text-info">
                We bouwen moderne webapplicaties op maat. Van een realtime keuken dashboard tot een donatiesysteem — elke oplossing is gebouwd op de specifieke wensen van de klant.
              </p>
            </div>
          </div>

          {/* ── Product in beeld ── */}
          <div className="mb-20">
            <span className="font-mono text-xs uppercase tracking-[0.22em] text-info">
              Het product in beeld
            </span>
            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              {screenshots.map((label) => (
                <div key={label}>
                  <div className="flex flex-col items-center justify-center gap-2 rounded-2xl border-2 border-dashed border-border bg-muted p-12 text-center">
                    <Image className="h-6 w-6 text-info/30" />
                    <p className="font-mono text-xs text-info">{label}</p>
                  </div>
                  <p className="mt-2 font-mono text-xs text-info">{label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ── CTA Banner ── */}
          <div
            className="mb-8 flex flex-col items-start justify-between gap-6 rounded-2xl p-10 sm:flex-row sm:items-center"
            style={{ backgroundColor: 'hsl(44 80% 87%)' }}
          >
            <div>
              <h2 className="font-serif text-2xl font-bold text-foreground">
                Benieuwd naar TableTech?
              </h2>
              <p className="mt-2 max-w-sm text-sm leading-relaxed text-info">
                Bekijk het platform live of neem contact op om mee te denken — ik vertel er graag meer over.
              </p>
            </div>
            <a
              href="https://tabletech.nl"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-shrink-0 items-center gap-2 rounded-xl bg-foreground px-6 py-3 font-mono text-sm text-background transition-opacity hover:opacity-85"
            >
              Naar tabletech.nl <ExternalLink className="h-3.5 w-3.5" />
            </a>
          </div>

        </div>
      </div>

      <CTASection language={language} />
    </div>
  );
};

export default Bedrijf;
