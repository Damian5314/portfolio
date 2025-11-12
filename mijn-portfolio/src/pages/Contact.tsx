import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Mail, MapPin, Linkedin, Github } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import CTASection from '@/components/CTASection';

interface ContactProps {
  language: 'nl' | 'en';
}

const Contact: React.FC<ContactProps> = ({ language }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const { toast } = useToast();

  const translations = {
    nl: {
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
    },
    en: {
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
    },
  };

  const t = translations[language];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Simple form validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: 'Error',
        description: language === 'nl' ? 'Vul alle velden in.' : 'Please fill in all fields.',
        variant: 'destructive',
      });
      return;
    }

    // Create mailto link with form data
    const subject = `Contact from ${formData.name}`;
    const body = `Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0A%0D%0AMessage:%0D%0A${formData.message}`;
    const mailtoLink = `mailto:damianwillmse@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`;

    // Open default email client
    window.location.href = mailtoLink;

    // Clear form
    setFormData({ name: '', email: '', message: '' });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
              {t.title}
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {t.subtitle}
            </p>
          </div>

          {/* Contact Content */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Contact Information */}
            <div className="space-y-8">
              <Card className="shadow-soft">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold">{t.contactInfo}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
                      <Mail className="h-5 w-5 text-foreground" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">{t.email}</p>
                      <a 
                        href="mailto:damianwillmse@gmail.com" 
                        className="text-primary hover:underline"
                      >
                        damianwillmse@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
                      <MapPin className="h-5 w-5 text-foreground" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">{t.location}</p>
                      <p className="text-muted-foreground">Rotterdam, Netherlands</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-soft">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold">{t.socialLinks}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <a 
                    href="https://linkedin.com/in/damianwillemse" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center space-x-4 p-3 rounded-lg hover:bg-muted/50 transition-colors group"
                  >
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                      <Linkedin className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">LinkedIn</p>
                      <p className="text-sm text-muted-foreground">Professional profile</p>
                    </div>
                  </a>

                  <a 
                    href="https://github.com/damian5314" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center space-x-4 p-3 rounded-lg hover:bg-muted/50 transition-colors group"
                  >
                    <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center group-hover:bg-gray-200 transition-colors">
                      <Github className="h-5 w-5 text-gray-600" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">GitHub</p>
                      <p className="text-sm text-muted-foreground">Code repositories</p>
                    </div>
                  </a>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle className="text-xl font-semibold">{t.form.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">{t.form.name}</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder={t.form.namePlaceholder}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">{t.form.email}</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder={t.form.emailPlaceholder}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">{t.form.message}</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder={t.form.messagePlaceholder}
                      rows={6}
                      required
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full">
                    {t.form.send}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* CTA Section */}
          <CTASection language={language} />
        </div>
      </div>
    </div>
  );
};

export default Contact;