import { useTranslation } from 'react-i18next';
import { ChevronLeft, ChevronRight, ExternalLink, Image, AlertTriangle } from 'lucide-react';

const NewsSection = () => {
  const { t } = useTranslation();

  const newsItems = [
    t('news_section.item1'),
    t('news_section.item2'),
    t('news_section.item3'),
    t('news_section.item4'),
    t('news_section.item5'),
  ];

  return (
    <aside className="space-y-4">
      {/* News & Announcements */}
      <div className="bg-background border border-border rounded-lg overflow-hidden">
        <div className="flex items-center justify-between bg-primary px-4 py-2.5">
          <div className="flex items-center gap-2">
            <ChevronLeft className="w-4 h-4 text-primary-foreground cursor-pointer hover:opacity-70" />
          </div>
          <h3 className="text-sm font-bold text-primary-foreground uppercase">
            {t('news_section.title')}
          </h3>
          <ChevronRight className="w-4 h-4 text-primary-foreground cursor-pointer hover:opacity-70" />
        </div>
        <ul className="p-4 space-y-3 max-h-[300px] overflow-y-auto">
          {newsItems.map((item, idx) => (
            <li key={idx} className="flex items-start gap-2 text-sm text-foreground animate-slide-in" style={{ animationDelay: `${idx * 100}ms` }}>
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
              <a href="#" className="hover:text-primary transition-colors leading-relaxed">{item}</a>
            </li>
          ))}
        </ul>
      </div>

      {/* Photo Gallery */}
      <a href="#" className="block bg-primary rounded-lg p-4 text-center hover:opacity-90 transition-opacity">
        <Image className="w-8 h-8 text-primary-foreground mx-auto mb-1" />
        <span className="text-primary-foreground font-bold text-sm">{t('footer.photo_gallery')}</span>
      </a>

      {/* Public Grievances */}
      <a href="#" className="block bg-accent rounded-lg p-4 text-center hover:opacity-90 transition-opacity">
        <AlertTriangle className="w-8 h-8 text-accent-foreground mx-auto mb-1" />
        <span className="text-accent-foreground font-bold text-sm">{t('footer.public_grievances')}</span>
      </a>

      {/* Visitor counter */}
      <div className="text-center py-2">
        <p className="text-sm font-bold text-foreground">{t('footer.visitors')}</p>
      </div>
    </aside>
  );
};

export default NewsSection;
