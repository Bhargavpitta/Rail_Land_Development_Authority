import { useTranslation } from 'react-i18next';
import { Facebook, Instagram, Youtube, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  const { t } = useTranslation();

  const footerLinks = [
    { label: t('footer.sitemap'), href: '/sitemap' },
    { label: t('footer.contact'), href: '/contact' },
    { label: t('footer.rti'), href: '/rti' },
    { label: t('footer.disclaimer'), href: 'disclaimer' },
    { label: t('footer.terms'), href: 'terms' },
    { label: t('footer.privacy'), href: 'privacy' },
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

    {/* Portal Images */}
    <a href="http://irimee.indianrailways.gov.in/view_section.jsp?lang=0&id=0,296" target="_blank">
      <img src="/Footer_Portals/KP.jpg" alt="Knowledge Portal" className="h-10 hover:scale-105 transition" />
    </a>

    <a href="http://pensionersportal.gov.in/" target="_blank">
      <img src="/Footer_Portals/PP.jpg" alt="Pensioners Portal" className="h-10 hover:scale-105 transition" />
    </a>

    <a href="http://www.nvsp.in/" target="_blank">
      <img src="/Footer_Portals/NVSP.jpg" alt="NVSP" className="h-10 hover:scale-105 transition" />
    </a>

    <a href="https://www.india.gov.in/" target="_blank">
      <img src="/Footer_Portals/IGN.jpg" alt="India Gov" className="h-10 hover:scale-105 transition" />
    </a>

    <a href="http://www.irts.org.in/" target="_blank">
      <img src="/Footer_Portals/IRTSA.jpg" alt="IRTSA" className="h-10 hover:scale-105 transition" />
    </a>

    {/* Social Media Icons */}
    <div className="flex items-center gap-3 ml-4">
      <a href="https://www.facebook.com/rldaindia" className="text-muted-foreground hover:text-primary">
        <Facebook className="w-5 h-5" />
      </a>

      <a href="https://x.com/rlda_india" className="text-muted-foreground hover:text-primary">
        <Twitter className="w-5 h-5" />
      </a>

      <a href="https://www.instagram.com/rldaindia/" className="text-muted-foreground hover:text-accent">
        <Instagram className="w-5 h-5" />
      </a>

      <a href="https://www.youtube.com/@RailLandDevelopmentAuthority" className="text-muted-foreground hover:text-accent">
        <Youtube className="w-5 h-5" />
      </a>

      <a href="https://www.linkedin.com/company/rail-land-development-authority-rlda/" className="text-muted-foreground hover:text-primary">
        <Linkedin className="w-5 h-5" />
      </a>
    </div>

  </div>

  <p className="text-center text-sm font-bold text-foreground mt-4">
    {t('footer.gst')}
  </p>
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
