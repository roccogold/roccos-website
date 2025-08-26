import React, { useState } from 'react';
import { Mail, Linkedin, Github, Twitter, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';

const socialLinks = [
  {
    name: 'Email',
    href: 'mailto:roccogold23@gmail.com',
    icon: Mail,
    label: 'Email Rocco Goldschmidt'
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/roccogoldschmidt/',
    icon: Linkedin,
    label: 'LinkedIn profile'
  },
  {
    name: 'GitHub',
    href: 'https://github.com/roccogold',
    icon: Github,
    label: 'GitHub profile'
  },
  {
    name: 'Twitter',
    href: 'https://x.com/roccogold_',
    icon: Twitter,
    label: 'Twitter profile'
  }
];

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Mock form submission - replace with actual implementation
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast.success('Message sent! Thank you for reaching out.');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      toast.error('Oops! Something went wrong. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleResumeDownload = () => {
    // Mock analytics tracking
    console.log('Resume download tracked');
    window.open('https://drive.google.com/file/d/11c8tkDc5AH3pCAEgM44WR4d9w4cxoMR5/view', '_blank');
  };

  return (
    <section className="container-custom section-spacing reveal">
      <h2 className="text-section mb-8 pb-2 border-b border-border">
        Get in touch
      </h2>
      
      <div className="space-y-8">
        <div className="space-y-4 text-body leading-relaxed">
          <p>
            Let's connect whether it's about product stuff, fintech trends or the best ping pong serve — 
            find me on linkedin, join the conversation on twitter, explore my projects on github or say hello via email.
          </p>
          
          <p>
            Want the juicy bits?{' '}
            <button
              onClick={handleResumeDownload}
              className="inline-flex items-center space-x-1 text-primary hover:text-interactive-hover transition-colors underline font-medium"
            >
              <span>Download my resume</span>
              <Download className="w-4 h-4" />
            </button>
          </p>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-4 my-8">
          {socialLinks.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
                aria-label={link.label}
                title={link.label}
              >
                <Icon className="w-5 h-5" />
              </a>
            );
          })}
        </div>

        {/* Contact Form */}
        <div className="max-w-md mx-auto">
          <form onSubmit={handleSubmit} className="contact-form">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Name
              </label>
              <Input
                id="name"
                name="name"
                type="text"
                required
                placeholder="Your name"
                value={formData.name}
                onChange={handleInputChange}
                className="form-input"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                required
                placeholder="Your email"
                value={formData.email}
                onChange={handleInputChange}
                className="form-input"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Message
              </label>
              <Textarea
                id="message"
                name="message"
                rows={4}
                required
                placeholder="Your message"
                value={formData.message}
                onChange={handleInputChange}
                className="form-input resize-none"
              />
            </div>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="form-button"
            >
              {isSubmitting ? 'Sending...' : 'Send'}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}