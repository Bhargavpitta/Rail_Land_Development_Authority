import { useTranslation } from 'react-i18next';
import { Megaphone } from 'lucide-react';

const WhatsNew = () => {
  const { t } = useTranslation();

  return (
    <div className="flex items-center w-full bg-background border-b border-border overflow-hidden">
      <div className="flex-shrink-0 bg-accent text-accent-foreground px-4 py-2 font-bold text-sm uppercase flex items-center gap-2">
        <Megaphone className="w-4 h-4" />
        {t('nav.whats_new')} »
      </div>
      <div className="flex-1 overflow-hidden relative py-2">
        <div className="animate-ticker whitespace-nowrap flex items-center gap-8">
          <span className="text-sm text-foreground">• {t('ticker.item1')}</span>
          <span className="text-sm font-semibold text-accent">• {t('ticker.item2')}</span>
          <span className="text-sm text-primary">• {t('ticker.item3')}</span>
          <span className="text-sm text-foreground">• {t('ticker.item1')}</span>
          <span className="text-sm font-semibold text-accent">• {t('ticker.item2')}</span>
        </div>
      </div>
    </div>
  );
};

export default WhatsNew;
