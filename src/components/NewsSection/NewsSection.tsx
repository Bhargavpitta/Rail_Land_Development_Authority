import { useTranslation } from 'react-i18next';
import { ChevronLeft, ChevronRight } from 'lucide-react';

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

          <ChevronLeft className="w-4 h-4 text-primary-foreground cursor-pointer hover:opacity-70" />

          <h3 className="text-sm font-bold text-primary-foreground uppercase">
            {t('news_section.title')}
          </h3>

          <ChevronRight className="w-4 h-4 text-primary-foreground cursor-pointer hover:opacity-70" />

        </div>

        <ul className="p-4 space-y-3 max-h-[300px] overflow-y-auto">
          {newsItems.map((item, idx) => (
            <li
              key={idx}
              className="flex items-start gap-2 text-sm text-foreground animate-slide-in"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />

              <a href="#" className="hover:text-primary transition-colors leading-relaxed">
                {item}
              </a>

            </li>
          ))}
        </ul>

      </div>

      {/* Visitor Counter */}
      <div className="text-center py-2">
        <p className="text-sm font-bold text-foreground">
          {t('footer.visitors')}
        </p>
      </div>

    </aside>
  );
};

export default NewsSection;