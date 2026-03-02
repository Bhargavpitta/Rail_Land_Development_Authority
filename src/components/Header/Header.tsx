import { useTranslation } from 'react-i18next';
import { Search, Mail, Globe } from 'lucide-react';

const Header = () => {
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'hi' : 'en';
    i18n.changeLanguage(newLang);
  };

  return (
    <header className="w-full bg-background border-b border-border">
      {/* Top utility bar */}
      <div className="flex items-center justify-end gap-4 px-6 py-1 text-sm text-muted-foreground bg-secondary">
        <a href="#" className="flex items-center gap-1 hover:text-primary transition-colors">
          <Mail className="w-3 h-3" />
          {t('header.railnet_mail')}
        </a>
        <a href="#" className="flex items-center gap-1 hover:text-primary transition-colors">
          <Search className="w-3 h-3" />
          {t('header.search')}
        </a>
        <span className="text-xs">A+ A A-</span>
      </div>

      {/* Main header */}
      <div className="flex items-center justify-between px-6 py-4 max-w-full">
        {/* Logo & Title */}
        <div className="flex items-center gap-4">
          {/* RLDA Logo placeholder */}
          <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
            <span className="text-primary-foreground font-bold text-lg">RLDA</span>
          </div>
          <div>
            <h1 className="text-xl md:text-2xl font-bold text-foreground leading-tight">
              {t('header.title_hi')}
            </h1>
            <h2 className="text-lg md:text-xl font-semibold text-primary">
              {t('header.title_en')}
            </h2>
            <p className="text-xs md:text-sm text-muted-foreground">
              {t('header.subtitle')}
            </p>
          </div>
        </div>

        {/* Right side */}
        <div className="flex items-center gap-4">
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-1 px-4 py-2 rounded-lg border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors text-sm font-medium"
          >
            <Globe className="w-4 h-4" />
            {t('header.hindi')}
          </button>
          {/* Emblem placeholder */}
          <div className="hidden md:flex w-14 h-14 rounded-full bg-muted items-center justify-center flex-shrink-0">
            <span className="text-xs text-muted-foreground font-bold">🇮🇳</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
