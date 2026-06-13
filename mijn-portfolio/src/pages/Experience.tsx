import React, { useRef, useState } from 'react';
import { Image as ImageIcon, X, ArrowUpRight } from 'lucide-react';
import CTASection from '@/components/CTASection';

interface ExperienceProps {
  language: 'nl' | 'en';
}

interface EvidenceItem {
  id: string;
  label: string;
  caption: string;
}

interface WorkRole {
  title: string;
  period: string;
  current?: boolean;
  description: string;
  did: string[];
  tech?: string[];
  evidence?: EvidenceItem[];
  link?: { label: string; url: string };
}

interface Company {
  name: string;
  logo: string;
  period: string;
  location: string;
  context: string;
  roles: WorkRole[];
}

const STORAGE_PREFIX = 'exp-evidence-';

const loadEvidence = (id: string): string | null => {
  try {
    return localStorage.getItem(STORAGE_PREFIX + id);
  } catch {
    return null;
  }
};

/* Drag-and-drop evidence slot — downscales the image and persists it in localStorage */
const EvidenceSlot: React.FC<{
  item: EvidenceItem;
  browseLabel: string;
  onView: (src: string) => void;
}> = ({ item, browseLabel, onView }) => {
  const [img, setImg] = useState<string | null>(() => loadEvidence(item.id));
  const [dragging, setDragging] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFile = (file?: File | null) => {
    if (!file || !file.type.startsWith('image/')) return;
    const reader = new FileReader();
    reader.onload = (e) => {
      const image = new Image();
      image.onload = () => {
        const maxW = 1400;
        const scale = Math.min(1, maxW / image.width);
        const canvas = document.createElement('canvas');
        canvas.width = Math.round(image.width * scale);
        canvas.height = Math.round(image.height * scale);
        const ctx = canvas.getContext('2d');
        if (!ctx) return;
        ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
        const out = canvas.toDataURL('image/jpeg', 0.82);
        try {
          localStorage.setItem(STORAGE_PREFIX + item.id, out);
        } catch {
          /* quota exceeded — keep it in memory for this session */
        }
        setImg(out);
      };
      image.src = e.target?.result as string;
    };
    reader.readAsDataURL(file);
  };

  const remove = (e: React.MouseEvent) => {
    e.stopPropagation();
    try {
      localStorage.removeItem(STORAGE_PREFIX + item.id);
    } catch {
      /* ignore */
    }
    setImg(null);
  };

  return (
    <div>
      <div
        onDragOver={(e) => {
          e.preventDefault();
          setDragging(true);
        }}
        onDragLeave={() => setDragging(false)}
        onDrop={(e) => {
          e.preventDefault();
          setDragging(false);
          handleFile(e.dataTransfer.files?.[0]);
        }}
        className={`group relative flex aspect-[3/2] items-center justify-center overflow-hidden rounded-xl border-2 border-dashed transition-colors ${
          dragging ? 'border-gold bg-gold/5' : 'border-border bg-background/40'
        }`}
      >
        {img ? (
          <>
            <button type="button" onClick={() => onView(img)} className="h-full w-full">
              <img src={img} alt={item.label} className="h-full w-full object-cover" />
            </button>
            <button
              type="button"
              onClick={remove}
              aria-label="Verwijder"
              className="absolute right-2 top-2 flex h-7 w-7 items-center justify-center rounded-full bg-foreground/80 text-background backdrop-blur-sm transition-colors hover:bg-foreground"
            >
              <X className="h-3.5 w-3.5" />
            </button>
          </>
        ) : (
          <button
            type="button"
            onClick={() => inputRef.current?.click()}
            className="flex flex-col items-center px-4 text-center"
          >
            <ImageIcon className="h-6 w-6 text-info/40" />
            <span className="mt-2 font-mono text-[11px] leading-snug text-info">{item.label}</span>
            <span className="mt-1 font-mono text-[10px] text-gold-ink underline underline-offset-2">
              {browseLabel}
            </span>
          </button>
        )}
        <input
          ref={inputRef}
          type="file"
          accept="image/*"
          className="hidden"
          onChange={(e) => handleFile(e.target.files?.[0])}
        />
      </div>
      <p className="mt-1.5 font-mono text-[10px] text-info">{item.caption}</p>
    </div>
  );
};

const Experience: React.FC<ExperienceProps> = ({ language }) => {
  const [lightbox, setLightbox] = useState<string | null>(null);
  const baseUrl = import.meta.env.BASE_URL;
  const nl = language === 'nl';

  const t = {
    eyebrow: nl ? 'Carrière — Uitgebreid' : 'Career — Extended',
    title: nl ? 'Werkervaring' : 'Work Experience',
    subtitle: nl
      ? 'Geen losse opsomming, maar het hele verhaal: per rol wat ik deed, welke techniek ik gebruikte en — belangrijk — het bewijs erbij. Sleep je eigen screenshots en foto’s in de vlakken.'
      : 'Not just a list, but the whole story: per role what I did, which tech I used and — importantly — the proof to back it up. Drag your own screenshots and photos into the slots.',
    stats: {
      since: nl ? 'Aan het werk sinds' : 'Working since',
      companies: nl ? 'Bedrijven' : 'Companies',
      currentRole: nl ? 'Huidige rol @ 21South' : 'Current role @ 21South',
    },
    currentRoleName: 'Software Developer',
    whatIDid: nl ? 'Wat ik deed' : 'What I did',
    evidence: nl ? 'Bewijs' : 'Evidence',
    browse: nl ? 'sleep of kies bestand' : 'drag or browse',
    rolesLabel: nl ? 'rollen' : 'roles',
    nowBadge: nl ? 'Huidig' : 'Now',
  };

  const companies: Company[] = [
    {
      name: '21South',
      logo: `${baseUrl}Work/21South_logo.png`,
      period: nl ? 'Okt 2024 - Heden' : 'Oct 2024 - Present',
      location: 'Rotterdam',
      context: nl
        ? 'Software & data-oplossingen voor de afvalbranche. Hier groeide ik in twee jaar van support naar developer.'
        : 'Software & data solutions for the waste industry. Here I grew from support to developer in two years.',
      roles: [
        {
          title: 'Software Developer',
          period: nl ? 'Feb 2026 - Heden' : 'Feb 2026 - Present',
          current: true,
          description: nl
            ? 'Ik werk mee aan drie productie-apps van 21South — de Burgerapp (white-label afvalapp voor 10+ gemeenten zoals Utrecht en Leiden), de Urenapp (tijdregistratie voor veldmedewerkers) en de AfvalCoach App (RFID-containerregistratie) — allemaal gebouwd in Flutter. Daarnaast werk ik aan de gedeelde Firebase-backend op Cloud Functions die meerdere apps en organisaties bedient.'
            : 'I work on three production apps at 21South — the citizen waste app (white-label for 10+ municipalities such as Utrecht and Leiden), the hours app (time tracking for field workers) and the AfvalCoach app (RFID container registration) — all built in Flutter. I also work on the shared Firebase backend on Cloud Functions that serves multiple apps and organisations.',
          did: nl
            ? [
                'Nieuwe gemeente-flavors uitrollen in de white-label Burgerapp (o.a. Leiden & Utrecht productie)',
                'Boeking- en pauzelogica bouwen in de Urenapp, inclusief split/merge-algoritmen en validatie',
                'Newsmodule en FCM push-notificaties ontwikkelen in de gedeelde TypeScript/Node-backend',
                'RFID-workflowstappen en nieuwe hardwarescanners toevoegen aan de AfvalCoach App',
                'Unit tests schrijven (flutter_test, mockito, Jest) en CI/CD onderhouden via Codemagic & GitLab CI',
              ]
            : [
                'Rolling out new municipality flavors in the white-label citizen app (incl. Leiden & Utrecht production)',
                'Building booking and break logic in the hours app, including split/merge algorithms and validation',
                'Developing the news module and FCM push notifications in the shared TypeScript/Node backend',
                'Adding RFID workflow steps and new hardware scanners to the AfvalCoach app',
                'Writing unit tests (flutter_test, mockito, Jest) and maintaining CI/CD via Codemagic & GitLab CI',
              ],
          tech: ['Flutter', 'Dart', 'Firebase', 'TypeScript / Node.js', 'Riverpod', 'Cloud Functions', 'CI/CD'],
          evidence: [
            {
              id: '21south-swdev-1',
              label: nl ? 'Burgerapp: ophaalkalender' : 'Citizen app: collection calendar',
              caption: nl ? 'Burgerapp / gemeente-flavor' : 'Citizen app / municipality flavor',
            },
            {
              id: '21south-swdev-2',
              label: nl ? 'Urenapp of AfvalCoach App' : 'Hours or AfvalCoach app',
              caption: nl ? 'Urenapp / AfvalCoach' : 'Hours / AfvalCoach',
            },
          ],
          link: { label: nl ? 'Bekijk 21QUBZ platform' : 'View 21QUBZ platform', url: '#' },
        },
        {
          title: nl ? 'AI Development Stagiair' : 'AI Development Intern',
          period: nl ? 'Sep 2025 - Jan 2026' : 'Sep 2025 - Jan 2026',
          description: nl
            ? 'Tijdens mijn stage onderzocht en implementeerde ik AI-oplossingen binnen het 21QUBZ platform — van eerste concept en onderzoek tot een werkend prototype dat ik aan het team presenteerde.'
            : 'During my internship I researched and implemented AI solutions within the 21QUBZ platform — from initial concept and research to a working prototype that I presented to the team.',
          did: nl
            ? [
                'Onderzoek naar toepasbare AI-modellen voor het platform',
                'Een prototype gebouwd en getest met echte data',
                'Bevindingen en aanbevelingen gepresenteerd aan het team',
              ]
            : [
                'Researching applicable AI models for the platform',
                'Built and tested a prototype with real data',
                'Presented findings and recommendations to the team',
              ],
          tech: ['Python', 'AI / LLM API', nl ? 'Data-analyse' : 'Data analysis'],
          evidence: [
            {
              id: '21south-ai-1',
              label: nl ? 'Prototype screenshot' : 'Prototype screenshot',
              caption: nl ? 'Prototype / interface' : 'Prototype / interface',
            },
            {
              id: '21south-ai-2',
              label: nl ? 'Stageverslag of presentatie' : 'Internship report or presentation',
              caption: nl ? 'Stageverslag / presentatie' : 'Report / presentation',
            },
          ],
        },
        {
          title: nl ? 'Junior Support Engineer' : 'Junior Support Engineer',
          period: nl ? 'Okt 2024 - Jan 2026' : 'Oct 2024 - Jan 2026',
          description: nl
            ? 'Eerste aanspreekpunt voor klanten via telefoon en e-mail. Ik loste meldingen op, schakelde met development bij complexere bugs en hielp klanten op weg met het platform. Hier leerde ik het product door en door kennen.'
            : 'First point of contact for customers via phone and email. I resolved tickets, escalated complex bugs to development and helped customers get started with the platform. This is where I got to know the product inside out.',
          did: nl
            ? [
                'Klantvragen en storingen oplossen via telefoon en e-mail',
                'Bugs reproduceren en gestructureerd doorzetten naar development',
                'Klanten begeleiden bij het gebruik van het platform',
              ]
            : [
                'Resolving customer questions and issues via phone and email',
                'Reproducing bugs and escalating them to development in a structured way',
                'Guiding customers in using the platform',
              ],
        },
      ],
    },
    {
      name: 'MediaMarkt',
      logo: `${baseUrl}Work/mediamarkt_logo.svg`,
      period: nl ? 'Jul 2021 - Sep 2024' : 'Jul 2021 - Sep 2024',
      location: 'Rotterdam',
      context: nl
        ? 'Logistiek & magazijn naast mijn studie. Drie jaar verantwoordelijkheid en een gestructureerde manier van werken.'
        : 'Logistics & warehouse alongside my studies. Three years of responsibility and a structured way of working.',
      roles: [
        {
          title: nl ? 'Logistiek Medewerker' : 'Logistics Associate',
          period: nl ? 'Jul 2021 - Sep 2024' : 'Jul 2021 - Sep 2024',
          description: nl
            ? 'Verantwoordelijk voor de logistieke stroom in de winkel: producten veilig ontvangen, online orders klaarzetten voor klanten en de voorraad in winkel en magazijn geordend houden.'
            : 'Responsible for the logistics flow in the store: receiving products safely, preparing online orders for customers and keeping stock organised in store and warehouse.',
          did: nl
            ? [
                'Inkomende goederen controleren en veilig verwerken',
                'Online orders picken en klaarzetten voor uitlevering',
                'Voorraad in winkel en magazijn netjes en geordend houden',
              ]
            : [
                'Checking and safely processing incoming goods',
                'Picking and preparing online orders for delivery',
                'Keeping stock in store and warehouse tidy and organised',
              ],
        },
      ],
    },
    {
      name: 'Dirk van den Broek',
      logo: `${baseUrl}Work/Dirk_logo.png`,
      period: nl ? 'Jul 2019 - Jul 2021' : 'Jul 2019 - Jul 2021',
      location: 'Rotterdam',
      context: nl
        ? 'Mijn eerste bijbaan tijdens de middelbare school. Hier leerde ik wat werken en verantwoordelijkheid betekenen.'
        : 'My first job during secondary school. Here I learned what working and responsibility really mean.',
      roles: [
        {
          title: nl ? 'Vakkenvuller' : 'Shelf Stacker',
          period: nl ? 'Jul 2019 - Jul 2021' : 'Jul 2019 - Jul 2021',
          description: nl
            ? 'Mijn eerste werkervaring. Ik zorgde dat de schappen altijd goed gevuld en netjes gespiegeld waren en hielp klanten in de winkel.'
            : 'My first work experience. I made sure the shelves were always well stocked and neatly faced, and helped customers in the store.',
          did: nl
            ? [
                'Schappen vullen en netjes spiegelen',
                'Houdbaarheidsdata controleren en producten roteren',
                'Klanten helpen met vragen in de winkel',
              ]
            : [
                'Stocking shelves and facing them neatly',
                'Checking expiry dates and rotating products',
                'Helping customers with questions in the store',
              ],
        },
      ],
    },
  ];

  const chipClass = 'rounded-md border border-border bg-card px-2 py-0.5 font-mono text-[11px] text-info';
  const labelClass = 'font-mono text-[11px] uppercase tracking-[0.2em] text-gold-ink';

  return (
    <div className="min-h-screen bg-background">
      <div className="px-4 pb-16 pt-28 sm:px-6 lg:px-8 lg:pt-32">
        <div className="mx-auto max-w-5xl">
          {/* Header */}
          <div className="mb-10">
            <span className="font-mono text-xs uppercase tracking-[0.22em] text-gold-ink">
              // {t.eyebrow}
            </span>
            <h1 className="mt-3 font-serif text-5xl font-semibold tracking-tight text-foreground lg:text-6xl">
              {t.title}
            </h1>
            <p className="mt-4 max-w-2xl font-mono text-sm leading-relaxed text-info">
              {t.subtitle}
            </p>
          </div>

          {/* Stats */}
          <div className="mb-14 grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-border bg-card p-5">
              <p className="font-serif text-3xl text-foreground">2019</p>
              <p className="mt-1 font-mono text-[11px] uppercase tracking-wider text-info">{t.stats.since}</p>
            </div>
            <div className="rounded-2xl border border-border bg-card p-5">
              <p className="font-serif text-3xl text-foreground">{companies.length}</p>
              <p className="mt-1 font-mono text-[11px] uppercase tracking-wider text-info">{t.stats.companies}</p>
            </div>
            <div className="rounded-2xl bg-dark p-5">
              <p className="font-semibold text-gold">{t.currentRoleName}</p>
              <p className="mt-1 font-mono text-[11px] text-dark-foreground/60">{t.stats.currentRole}</p>
            </div>
          </div>

          {/* Companies */}
          {companies.map((company, companyIndex) => (
            <div
              key={companyIndex}
              className="mb-12 grid gap-6 lg:grid-cols-[240px_1fr] lg:gap-10"
            >
              {/* Fixed left column */}
              <aside className="lg:sticky lg:top-28 lg:self-start">
                <div className="flex h-14 w-14 items-center justify-center overflow-hidden rounded-xl border border-border bg-white">
                  <img
                    src={company.logo}
                    alt={`${company.name} logo`}
                    className="h-full w-full object-contain p-2"
                  />
                </div>
                <h2 className="mt-4 font-serif text-2xl text-foreground">{company.name}</h2>
                <p className="mt-1 font-mono text-xs text-gold-ink">
                  {company.period} · {company.location}
                </p>
                <p className="mt-3 font-mono text-xs leading-relaxed text-info">{company.context}</p>
                {company.roles.length > 1 && (
                  <span className="mt-4 inline-flex items-center gap-1.5 rounded-full border border-border px-3 py-1 font-mono text-[11px] text-info">
                    <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                    {company.roles.length} {t.rolesLabel}
                  </span>
                )}
              </aside>

              {/* Roles */}
              <div className="space-y-5">
                {company.roles.map((role, roleIndex) => (
                  <article key={roleIndex} className="rounded-2xl border border-border bg-card p-6">
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="font-serif text-xl text-foreground">{role.title}</h3>
                        {role.current && (
                          <span className="rounded-full bg-gold px-2 py-0.5 font-mono text-[10px] uppercase tracking-wide text-gold-foreground">
                            {t.nowBadge}
                          </span>
                        )}
                      </div>
                      <span className="whitespace-nowrap font-mono text-[11px] text-gold-ink">
                        {role.period}
                      </span>
                    </div>

                    <p className="mt-3 font-mono text-xs leading-relaxed text-info">{role.description}</p>

                    <p className={`mt-5 ${labelClass}`}>{t.whatIDid}</p>
                    <ul className="mt-3 space-y-2">
                      {role.did.map((d, i) => (
                        <li key={i} className="flex items-start gap-2.5 font-mono text-xs leading-relaxed text-info">
                          <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gold" />
                          {d}
                        </li>
                      ))}
                    </ul>

                    {role.tech && role.tech.length > 0 && (
                      <div className="mt-4 flex flex-wrap gap-1.5">
                        {role.tech.map((tag) => (
                          <span key={tag} className={chipClass}>
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}

                    {role.evidence && role.evidence.length > 0 && (
                      <div className="mt-6">
                        <p className={labelClass}>{t.evidence}</p>
                        <div className="mt-3 grid gap-3 sm:grid-cols-2">
                          {role.evidence.map((ev) => (
                            <EvidenceSlot
                              key={ev.id}
                              item={ev}
                              browseLabel={t.browse}
                              onView={setLightbox}
                            />
                          ))}
                        </div>
                      </div>
                    )}

                    {role.link && (
                      <a
                        href={role.link.url}
                        target={role.link.url.startsWith('http') ? '_blank' : undefined}
                        rel={role.link.url.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="group mt-5 inline-flex items-center gap-2 rounded-xl border border-foreground/15 bg-background/40 px-4 py-2 font-mono text-xs text-foreground transition-colors hover:border-foreground/40"
                      >
                        {role.link.label}
                        <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </a>
                    )}
                  </article>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <CTASection language={language} />

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4"
          onClick={() => setLightbox(null)}
        >
          <img
            src={lightbox}
            alt=""
            className="max-h-full max-w-full rounded-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
};

export default Experience;
