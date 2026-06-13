import React, { useState } from 'react';
import { Mail, MapPin, Linkedin, Github } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import CTASection from '@/components/CTASection';
import emailjs from '@emailjs/browser';

interface ContactProps {
  language: 'nl' | 'en';
}

const Contact: React.FC<ContactProps> = ({ language }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSending, setIsSending] = useState(false);
  const { toast } = useToast();

  const translations = {
    nl: {
      eyebrow: 'Contact',
      title: 'Contact',
      subtitle: 'Laten we in contact komen! Ik sta klaar om je volgende project te bespreken.',
      contactInfo: 'Contactinformatie',
      email: 'E-mail',
      location: 'Locatie',
      socialLinks: 'Sociale links',
      form: {
        title: 'Stuur een bericht',
        name: 'Naam',
        email: 'E-mail',
        message: 'Bericht',
        send: 'Verstuur bericht',
        namePlaceholder: 'Je naam',
        emailPlaceholder: 'je@email.com',
        messagePlaceholder: 'Vertel me over je project...',
      },
      ctaTitle: 'Laten we samen beginnen met creëren',
      ctaButton: 'Laten we praten',
      success: 'Bericht succesvol verzonden!',
      error: 'Er is iets misgegaan. Probeer het opnieuw.',
      fillAll: 'Vul alle velden in.',
    },
    en: {
      eyebrow: 'Contact',
      title: 'Contact',
      subtitle: "Let's get in touch! I'm ready to discuss your next project.",
      contactInfo: 'Contact Information',
      email: 'Email',
      location: 'Location',
      socialLinks: 'Social Links',
      form: {
        title: 'Send a message',
        name: 'Name',
        email: 'Email',
        message: 'Message',
        send: 'Send message',
        namePlaceholder: 'Your name',
        emailPlaceholder: 'you@email.com',
        messagePlaceholder: 'Tell me about your project...',
      },
      ctaTitle: "Let's start creating together",
      ctaButton: "Let's talk",
      success: 'Message sent successfully!',
      error: 'Something went wrong. Please try again.',
      fillAll: 'Please fill in all fields.',
    },
  };

  const t = translations[language];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: 'Error',
        description: t.fillAll,
        variant: 'destructive',
      });
      return;
    }

    setIsSending(true);

    try {
      await emailjs.send(
        'service_4u7z1jh',
        'template_vp5976l',
        {
          from_name: formData.name,
          reply_to: formData.email,
          message: formData.message,
        },
        'dsG0e8u4lg8i42YLL'
      );

      toast({
        title: 'Success',
        description: t.success,
      });

      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      toast({
        title: 'Error',
        description: t.error,
        variant: 'destructive',
      });
    } finally {
      setIsSending(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const inputClass =
    'w-full rounded-xl border border-border bg-card px-4 py-2.5 font-mono text-sm text-foreground placeholder:text-info/50 transition-colors focus:border-foreground/40 focus:outline-none focus:ring-2 focus:ring-foreground/10';
  const labelClass = 'mb-1.5 block font-mono text-[11px] uppercase tracking-wider text-info';

  return (
    <div className="min-h-screen bg-background">
      <div className="px-4 pb-16 pt-28 sm:px-6 lg:px-8 lg:pt-32">
        <div className="mx-auto max-w-5xl">
          {/* Header */}
          <div className="mb-10">
            <span className="font-mono text-xs uppercase tracking-[0.22em] text-gold-ink">
              {t.eyebrow}
            </span>
            <h1 className="mt-3 font-serif text-5xl font-semibold tracking-tight text-foreground lg:text-6xl">
              {t.title}
            </h1>
            <p className="mt-4 max-w-xl font-mono text-sm leading-relaxed text-info">
              {t.subtitle}
            </p>
          </div>

          <div className="mb-16 grid gap-6 lg:grid-cols-2">
            {/* Left: info */}
            <div className="space-y-6">
              {/* Contact info */}
              <div className="rounded-2xl border border-border bg-card p-6">
                <h2 className="mb-5 font-semibold text-foreground">{t.contactInfo}</h2>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-gold/80">
                      <Mail className="h-5 w-5 text-gold-foreground" />
                    </div>
                    <div className="min-w-0">
                      <p className="font-mono text-[10px] uppercase tracking-wider text-info">{t.email}</p>
                      <a
                        href="mailto:damianwillmse@gmail.com"
                        className="font-mono text-sm text-foreground transition-colors hover:text-gold-ink"
                      >
                        damianwillmse@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-gold/80">
                      <MapPin className="h-5 w-5 text-gold-foreground" />
                    </div>
                    <div>
                      <p className="font-mono text-[10px] uppercase tracking-wider text-info">{t.location}</p>
                      <p className="font-mono text-sm text-foreground">Rotterdam, Netherlands</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social links */}
              <div className="rounded-2xl border border-border bg-card p-6">
                <h2 className="mb-5 font-semibold text-foreground">{t.socialLinks}</h2>
                <div className="space-y-2">
                  <a
                    href="https://linkedin.com/in/damianwillemse"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-4 rounded-xl p-2 transition-colors hover:bg-muted/60"
                  >
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-foreground">
                      <Linkedin className="h-5 w-5 text-background" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground transition-colors group-hover:text-gold-ink">
                        LinkedIn
                      </p>
                      <p className="font-mono text-[11px] text-info">Professioneel profiel</p>
                    </div>
                  </a>

                  <a
                    href="https://github.com/damian5314"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-4 rounded-xl p-2 transition-colors hover:bg-muted/60"
                  >
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-foreground">
                      <Github className="h-5 w-5 text-background" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground transition-colors group-hover:text-gold-ink">
                        GitHub
                      </p>
                      <p className="font-mono text-[11px] text-info">Code repositories</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            {/* Right: form */}
            <div className="rounded-2xl border border-border bg-card p-6 sm:p-7">
              <h2 className="mb-5 font-semibold text-foreground">{t.form.title}</h2>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className={labelClass}>{t.form.name}</label>
                  <input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder={t.form.namePlaceholder}
                    required
                    className={inputClass}
                  />
                </div>

                <div>
                  <label htmlFor="email" className={labelClass}>{t.form.email}</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder={t.form.emailPlaceholder}
                    required
                    className={inputClass}
                  />
                </div>

                <div>
                  <label htmlFor="message" className={labelClass}>{t.form.message}</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder={t.form.messagePlaceholder}
                    rows={6}
                    required
                    className={`${inputClass} resize-y`}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSending}
                  className="w-full rounded-xl bg-foreground px-6 py-3 font-mono text-sm text-background transition-transform hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0"
                >
                  {isSending ? (language === 'nl' ? 'Versturen...' : 'Sending...') : t.form.send}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <CTASection language={language} />
    </div>
  );
};

export default Contact;
