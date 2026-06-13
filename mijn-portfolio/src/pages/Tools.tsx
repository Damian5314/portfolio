import React from 'react';
import { Laptop, Monitor, Keyboard, Mouse, Headphones, Code, Package, Smartphone } from 'lucide-react';
import CTASection from '@/components/CTASection';

interface ToolsProps {
  language: 'nl' | 'en';
}

const Tools: React.FC<ToolsProps> = ({ language }) => {

  const translations = {
    nl: {
      eyebrow: 'Setup',
      title: 'Mijn Setup',
      subtitle: 'De hardware en software die ik dagelijks gebruik.',
      categories: {
        pcbuild: 'PC Build',
        desktech: 'Desk Tech',
        everyday: 'Everyday Carry',
        camera: 'Camera & Accessories',
        software: 'Software',
      },
      visit: 'Bekijk',
      ctaTitle: 'Laten we samen beginnen met creëren',
      ctaButton: 'Laten we praten',
    },
    en: {
      eyebrow: 'Setup',
      title: 'My Setup',
      subtitle: 'The hardware and software I use daily.',
      categories: {
        pcbuild: 'PC Build',
        desktech: 'Desk Tech',
        everyday: 'Everyday Carry',
        camera: 'Camera & Accessories',
        software: 'Software',
      },
      visit: 'View',
      ctaTitle: "Let's start creating together",
      ctaButton: "Let's talk",
    },
  };

  const t = translations[language];

  const tools = [
    // PC Build Components
    {
      id: 'pc-cpu',
      name: 'Intel i5-9600K',
      description: language === 'nl'
        ? '6-core processor voor gaming en development.'
        : '6-core processor for gaming and development.',
      category: 'pcbuild',
      icon: <Monitor className="h-6 w-6" />,
      url: '#',
      tags: ['CPU', 'Intel', '9th Gen'],
      color: 'bg-blue-500/10 text-blue-500',
    },
    {
      id: 'pc-gpu',
      name: 'GTX 1660',
      description: language === 'nl'
        ? 'Graphics card voor gaming en lichte content creation.'
        : 'Graphics card for gaming and light content creation.',
      category: 'pcbuild',
      icon: <Monitor className="h-6 w-6" />,
      url: '#',
      tags: ['GPU', 'NVIDIA', 'GTX'],
      color: 'bg-green-500/10 text-green-500',
    },
    {
      id: 'pc-ram',
      name: 'Corsair Vengeance LPX 32GB',
      description: language === 'nl'
        ? '4x8GB DDR4 2666MHz voor multitasking.'
        : '4x8GB DDR4 2666MHz for multitasking.',
      category: 'pcbuild',
      icon: <Monitor className="h-6 w-6" />,
      url: '#',
      tags: ['RAM', 'DDR4', '32GB'],
      color: 'bg-purple-500/10 text-purple-500',
    },
    {
      id: 'pc-mobo',
      name: 'ASRock B365 Pro4',
      description: language === 'nl'
        ? 'Betrouwbaar ATX motherboard voor Intel 9th gen.'
        : 'Reliable ATX motherboard for Intel 9th gen.',
      category: 'pcbuild',
      icon: <Monitor className="h-6 w-6" />,
      url: '#',
      tags: ['Motherboard', 'B365', 'ATX'],
      color: 'bg-red-500/10 text-red-500',
    },
    {
      id: 'pc-ssd',
      name: 'SSD 526GB',
      description: language === 'nl'
        ? 'Boot drive voor OS en veelgebruikte applicaties.'
        : 'Boot drive for OS and frequently used applications.',
      category: 'pcbuild',
      icon: <Monitor className="h-6 w-6" />,
      url: '#',
      tags: ['SSD', '526GB', 'Storage'],
      color: 'bg-orange-500/10 text-orange-500',
    },
    {
      id: 'pc-hdd',
      name: 'HDD 1TB',
      description: language === 'nl'
        ? 'Extra opslagruimte voor bestanden en projecten.'
        : 'Additional storage for files and projects.',
      category: 'pcbuild',
      icon: <Monitor className="h-6 w-6" />,
      url: '#',
      tags: ['HDD', '1TB', 'Storage'],
      color: 'bg-amber-500/10 text-amber-500',
    },
    {
      id: 'pc-psu',
      name: 'Be Quiet! System Power 9 600W',
      description: language === 'nl'
        ? 'Stille en betrouwbare voeding voor het systeem.'
        : 'Quiet and reliable power supply for the system.',
      category: 'pcbuild',
      icon: <Monitor className="h-6 w-6" />,
      url: '#',
      tags: ['PSU', '600W', 'Be Quiet!'],
      color: 'bg-yellow-500/10 text-yellow-500',
    },
    {
      id: 'pc-case',
      name: 'Sharkoon TG4',
      description: language === 'nl'
        ? 'ATX case met tempered glass side panel.'
        : 'ATX case with tempered glass side panel.',
      category: 'pcbuild',
      icon: <Monitor className="h-6 w-6" />,
      url: '#',
      tags: ['Case', 'ATX', 'Tempered Glass'],
      color: 'bg-gray-500/10 text-gray-500',
    },

    // Desk Tech
    {
      id: 'desk-monitors',
      name: 'AOC 27G4XE (2x)',
      description: language === 'nl'
        ? 'Dual 27" gaming monitors voor multitasking.'
        : 'Dual 27" gaming monitors for multitasking.',
      category: 'desktech',
      icon: <Monitor className="h-6 w-6" />,
      url: 'https://www.aoc.com/en/gaming/products/monitors/27g4xe',
      tags: ['27"', 'Gaming', 'Dual Setup'],
      color: 'bg-blue-500/10 text-blue-500',
    },
    {
      id: 'desk-keyboard',
      name: 'SteelSeries Apex 3',
      description: language === 'nl'
        ? 'Gaming toetsenbord met RGB verlichting.'
        : 'Gaming keyboard with RGB lighting.',
      category: 'desktech',
      icon: <Keyboard className="h-6 w-6" />,
      url: 'https://steelseries.com/gaming-keyboards/apex-3',
      tags: ['Keyboard', 'Gaming', 'RGB'],
      color: 'bg-purple-500/10 text-purple-500',
    },
    {
      id: 'desk-mouse-steelseries',
      name: 'SteelSeries Rival 600',
      description: language === 'nl'
        ? 'Gaming muis met dual sensor systeem.'
        : 'Gaming mouse with dual sensor system.',
      category: 'desktech',
      icon: <Mouse className="h-6 w-6" />,
      url: 'https://steelseries.com/gaming-mice/rival-600',
      tags: ['Mouse', 'Gaming', 'Precision'],
      color: 'bg-orange-500/10 text-orange-500',
    },
    {
      id: 'desk-headset',
      name: 'SteelSeries Arctis 7+',
      description: language === 'nl'
        ? 'Wireless gaming headset voor gaming en calls.'
        : 'Wireless gaming headset for gaming and calls.',
      category: 'desktech',
      icon: <Headphones className="h-6 w-6" />,
      url: 'https://steelseries.com/gaming-headsets/arctis-7-plus',
      tags: ['Headset', 'Gaming', 'Wireless'],
      color: 'bg-green-500/10 text-green-500',
    },

    // Everyday Carry
    {
      id: 'edc-macbook',
      name: 'MacBook Air M4',
      description: language === 'nl'
        ? 'Mijn primaire laptop die ik overal mee naartoe neem.'
        : 'My primary laptop that I take everywhere.',
      category: 'everyday',
      icon: <Laptop className="h-6 w-6" />,
      url: 'https://www.apple.com/macbook-air/',
      tags: ['MacBook', 'M4', 'Laptop'],
      color: 'bg-gray-500/10 text-gray-500',
    },
    {
      id: 'edc-iphone',
      name: 'iPhone 15 Pro',
      description: language === 'nl'
        ? 'Mijn dagelijkse telefoon voor alles.'
        : 'My daily phone for everything.',
      category: 'everyday',
      icon: <Smartphone className="h-6 w-6" />,
      url: 'https://www.apple.com/iphone-15-pro/',
      tags: ['iPhone', 'iOS', 'Mobile'],
      color: 'bg-indigo-500/10 text-indigo-500',
    },
    {
      id: 'edc-watch',
      name: 'Apple Watch SE 2',
      description: language === 'nl'
        ? 'Voor notificaties en fitness tracking.'
        : 'For notifications and fitness tracking.',
      category: 'everyday',
      icon: <Smartphone className="h-6 w-6" />,
      url: 'https://www.apple.com/apple-watch-se/',
      tags: ['Watch', 'Fitness', 'Health'],
      color: 'bg-pink-500/10 text-pink-500',
    },
    {
      id: 'edc-mouse-logitech',
      name: 'Logitech M720 Triathlon',
      description: language === 'nl'
        ? 'Draagbare muis die ik overal mee naartoe neem.'
        : 'Portable mouse that I take everywhere.',
      category: 'everyday',
      icon: <Mouse className="h-6 w-6" />,
      url: 'https://www.logitech.com/en-us/products/mice/m720-triathlon.html',
      tags: ['Mouse', 'Wireless', 'Multi-Device'],
      color: 'bg-cyan-500/10 text-cyan-500',
    },
    {
      id: 'edc-airpods',
      name: 'AirPods Pro 2',
      description: language === 'nl'
        ? 'Voor onderweg en spontane calls.'
        : 'For on the go and spontaneous calls.',
      category: 'everyday',
      icon: <Headphones className="h-6 w-6" />,
      url: 'https://www.apple.com/airpods-pro/',
      tags: ['Earbuds', 'ANC', 'Wireless'],
      color: 'bg-purple-500/10 text-purple-500',
    },
    {
      id: 'edc-sony',
      name: 'Sony WH-CH720N',
      description: language === 'nl'
        ? 'Noise-cancelling koptelefoon voor onderweg.'
        : 'Noise-cancelling headphones for on the go.',
      category: 'everyday',
      icon: <Headphones className="h-6 w-6" />,
      url: 'https://www.sony.com/electronics/headband-headphones/wh-ch720n',
      tags: ['Headphones', 'ANC', 'Travel'],
      color: 'bg-amber-500/10 text-amber-500',
    },

    // Camera & Accessories
    {
      id: 'camera-kodak',
      name: 'Kodak PIXPRO AZ421',
      description: language === 'nl'
        ? 'Bridge camera met 42x optische zoom voor veelzijdige fotografie.'
        : 'Bridge camera with 42x optical zoom for versatile photography.',
      category: 'camera',
      icon: <Package className="h-6 w-6" />,
      url: 'https://kodakpixpro.com/cameras/astro-zoom/az421/',
      tags: ['Camera', '42x Zoom', 'Bridge Camera'],
      color: 'bg-red-500/10 text-red-500',
    },
    {
      id: 'go-pro',
      name: 'GoPro Hero 8',
      description: language === 'nl'
        ? 'Action camera voor vlogs en on-the-go content.'
        : 'Action camera for vlogs and on-the-go content.',
      category: 'camera',
      icon: <Package className="h-6 w-6" />,
      url: 'https://gopro.com/en/us/shop/cameras/hero8-black/CHDHX-801-master.html',
      tags: ['Action Camera', '4K', 'Compact'],
      color: 'bg-orange-500/10 text-orange-500',
    },

    // Software
    {
      id: 'sw-vscode',
      name: 'Visual Studio Code',
      description: language === 'nl'
        ? 'Mijn primaire code editor met extensies.'
        : 'My primary code editor with extensions.',
      category: 'software',
      icon: <Code className="h-6 w-6" />,
      url: 'https://code.visualstudio.com/',
      tags: ['Editor', 'IDE', 'Development'],
      color: 'bg-blue-500/10 text-blue-500',
    },
  ];


  // Group tools by category, in display order
  const categoryOrder: Array<keyof typeof t.categories> = [
    'pcbuild',
    'desktech',
    'everyday',
    'camera',
    'software',
  ];
  const sections = categoryOrder
    .map((key) => ({ key, items: tools.filter((tool) => tool.category === key) }))
    .filter((section) => section.items.length > 0);

  return (
    <div className="min-h-screen bg-background">
      <div className="px-4 pb-16 pt-28 sm:px-6 lg:px-8 lg:pt-32">
        <div className="mx-auto max-w-5xl">
          {/* Header */}
          <div className="mb-12">
            <span className="font-mono text-xs uppercase tracking-[0.22em] text-gold-ink">
              {t.eyebrow}
            </span>
            <h1 className="mt-3 font-serif text-5xl font-semibold tracking-tight text-foreground lg:text-6xl">
              {t.title}
            </h1>
            <p className="mt-4 max-w-xl font-mono text-sm text-info">{t.subtitle}</p>
          </div>

          {/* Sections */}
          {sections.map((section) => (
            <section key={section.key} className="mb-12">
              <div className="mb-6 flex items-center gap-4">
                <h2 className="font-serif text-2xl text-foreground">{t.categories[section.key]}</h2>
                <span className="font-mono text-xs text-info">
                  {String(section.items.length).padStart(2, '0')}
                </span>
                <div className="h-px flex-1 bg-border" />
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                {section.items.map((tool) => (
                  <div
                    key={tool.id}
                    className="group rounded-2xl border border-border bg-card p-5 transition-colors hover:border-gold/60"
                  >
                    <div className="flex items-start gap-4">
                      <div
                        className={`flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl ${tool.color}`}
                      >
                        {tool.icon}
                      </div>
                      <div className="min-w-0 flex-1">
                        <h3 className="font-semibold text-foreground transition-colors group-hover:text-gold-ink">
                          {tool.name}
                        </h3>
                        <p className="mt-1 font-mono text-xs leading-relaxed text-info">
                          {tool.description}
                        </p>
                        <div className="mt-3 flex flex-wrap gap-1.5">
                          {tool.tags.map((tag) => (
                            <span
                              key={tag}
                              className="rounded-md border border-border px-2 py-0.5 font-mono text-[11px] text-info"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>

      <CTASection language={language} />
    </div>
  );
};

export default Tools;
