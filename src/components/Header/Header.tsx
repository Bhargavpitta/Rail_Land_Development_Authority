import { useTranslation } from 'react-i18next';
import { Search, Mail, Globe, ChevronDown } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

const LANGUAGES = [
  { code: 'en', label: 'English' },
  { code: 'hi', label: 'हिन्दी' },
  { code: 'ta', label: 'தமிழ்' },
  { code: 'te', label: 'తెలుగు' },
  { code: 'bn', label: 'বাংলা' },
  { code: 'mr', label: 'मराठी' },
  { code: 'gu', label: 'ગુજરાતી' },
  { code: 'kn', label: 'ಕನ್ನಡ' },
  { code: 'ml', label: 'മലയാളം' },
  { code: 'pa', label: 'ਪੰਜਾਬੀ' },
  { code: 'or', label: 'ଓଡ଼ିଆ' },
  { code: 'as', label: 'অসমীয়া' },
  { code: 'ur', label: 'اردو' },
];

const Header = () => {
  const { t, i18n } = useTranslation();
  const [langOpen, setLangOpen] = useState(false);
  const langRef = useRef<HTMLDivElement>(null);

  const currentLang = LANGUAGES.find(l => l.code === i18n.language) || LANGUAGES[0];

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(e.target as Node)) {
        setLangOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

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
          {/* Language selector dropdown */}
          <div ref={langRef} className="relative">
            <button
              onClick={() => setLangOpen(!langOpen)}
              className="flex items-center gap-1.5 px-4 py-2 rounded-lg border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors text-sm font-medium"
            >
              <Globe className="w-4 h-4" />
              {currentLang.label}
              <ChevronDown className={`w-3 h-3 transition-transform ${langOpen ? 'rotate-180' : ''}`} />
            </button>
            {langOpen && (
              <div className="absolute right-0 top-full mt-1 min-w-[180px] bg-background border border-border rounded-lg shadow-xl z-50 max-h-[400px] overflow-y-auto">
                {LANGUAGES.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      i18n.changeLanguage(lang.code);
                      setLangOpen(false);
                    }}
                    className={`block w-full text-left px-4 py-2.5 text-sm transition-colors hover:bg-primary hover:text-primary-foreground ${
                      i18n.language === lang.code ? 'bg-primary/10 text-primary font-semibold' : 'text-foreground'
                    }`}
                  >
                    {lang.label}
                  </button>
                ))}
              </div>
            )}
          </div>
          {/* Emblem */}
          <div className="hidden md:flex w-14 h-14 rounded-full bg-muted items-center justify-center flex-shrink-0">
            <span className="text-xs text-muted-foreground font-bold">🇮🇳</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
