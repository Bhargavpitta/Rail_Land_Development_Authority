import { useTranslation } from 'react-i18next';
import { Facebook, Instagram, Youtube, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  const { t } = useTranslation();

  const footerLinks = [
    { label: t('footer.sitemap'), href: '#' },
    { label: t('footer.contact'), href: '#' },
    { label: t('footer.rti'), href: '#' },
    { label: t('footer.disclaimer'), href: '#' },
    { label: t('footer.terms'), href: '#' },
    { label: t('footer.privacy'), href: '#' },
  ];

  return (
    <footer className="w-full">
      {/* Info bar */}
      <div className="bg-secondary px-6 py-4">
        <p className="text-sm text-muted-foreground text-center">
          Multiple Documents can be downloaded with one time registration after repeated submission of registration details in active registration window for Tenders.
        </p>
      </div>

      {/* Social & partner links */}
      <div className="bg-background border-t border-border px-6 py-6">
        <div className="flex flex-wrap items-center justify-center gap-6">
          <span className="text-xs text-muted-foreground">Knowledge Portal</span>
          <span className="text-xs text-muted-foreground">Pensioner's Portal</span>
          <span className="text-xs text-muted-foreground">National Voters' Services Portal</span>
          <span className="text-xs text-muted-foreground">india.gov.in</span>
          <span className="text-xs text-muted-foreground">Indian Railways Traffic Service Association</span>
          <div className="flex items-center gap-3">
            <a href="https://www.facebook.com/rldaindia" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Facebook"><Facebook className="w-5 h-5" /></a>
            <a href="https://x.com/rlda_india" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Twitter"><Twitter className="w-5 h-5" /></a>
            <a href="https://www.instagram.com/rldaindia/" className="text-muted-foreground hover:text-accent transition-colors" aria-label="Instagram"><Instagram className="w-5 h-5" /></a>
            <a href="https://www.youtube.com/@RailLandDevelopmentAuthority" className="text-muted-foreground hover:text-accent transition-colors" aria-label="YouTube"><Youtube className="w-5 h-5" /></a>
            <a href="https://www.linkedin.com/company/rail-land-development-authority-rlda/" className="text-muted-foreground hover:text-primary transition-colors" aria-label="LinkedIn"><Linkedin className="w-5 h-5" /></a>
          </div>
        </div>
        <p className="text-center text-sm font-bold text-foreground mt-4">{t('footer.gst')}</p>
      </div>

      {/* Footer links */}
      <div className="bg-secondary border-t border-border px-6 py-4">
        <div className="flex flex-wrap items-center justify-center gap-4">
          {footerLinks.map((link, idx) => (
            <a
              key={idx}
              href={link.href}
              className="text-sm text-primary hover:underline font-medium"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-footer text-footer-foreground px-6 py-4">
        <p className="text-center text-sm mb-2">{t('footer.copyright')}</p>
        <p className="text-center text-xs opacity-80 max-w-4xl mx-auto leading-relaxed">
          {t('footer.description')}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
