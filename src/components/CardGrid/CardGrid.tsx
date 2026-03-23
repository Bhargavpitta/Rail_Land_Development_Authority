import { useTranslation } from 'react-i18next';
import { Image, AlertTriangle } from 'lucide-react';

const CardGrid = () => {
  const { t } = useTranslation();

  const cards = [
    { title: t('cards.growing_story'), color: 'bg-card-green', pdf: '/pdfs/one.pdf' },
    { title: t('cards.expanding_horizon'), color: 'bg-card-orange', pdf: '/pdfs/two.pdf' },
    { title: t('cards.stations_redevelopment'), color: 'bg-card-yellow', pdf: '/pdfs/three.pdf' },
    { title: t('cards.mfc_passenger'), color: 'bg-card-red', pdf: '/pdfs/four.pdf' },
    { title: t('cards.commercial_land'), color: 'bg-card-green', pdf: '/pdfs/five.pdf' },
    { title: t('cards.colonies'), color: 'bg-card-orange', pdf: '/pdfs/six.pdf' },
    { title: t('cards.bidding'), color: 'bg-card-yellow', pdf: '/pdfs/seven.pdf' },
    { title: t('cards.regulation'), color: 'bg-background border border-border', pdf: '/pdfs/eight.pdf' },
  ];

  return (
    <section className="py-8 px-4 md:px-6">

      {/* 8 Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {cards.map((card, idx) => {
          const isLast = idx === cards.length - 1;

          return (
            <a
              key={idx}
              href={card.pdf}
              target="_blank"
              rel="noopener noreferrer"
              className={`group block rounded-lg p-6 min-h-[140px] flex items-end transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${card.color}`}
            >
              <h3
                className={`text-sm font-bold uppercase leading-snug ${
                  isLast ? 'text-foreground' : 'text-primary-foreground'
                }`}
              >
                {card.title}
              </h3>
            </a>
          );
        })}
      </div>

      {/* Bottom Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">

        {/* Photo Gallery */}
        <a
          href="#"
          className="block bg-primary rounded-lg p-6 text-center hover:opacity-90 transition-opacity"
        >
          <Image className="w-10 h-10 text-primary-foreground mx-auto mb-2" />
          <span className="text-primary-foreground font-bold">
            {t('footer.photo_gallery')}
          </span>
        </a>

        {/* Public Grievances */}
        <a
          href="https://pgportal.gov.in/"
          target="_blank"
          rel="noopener noreferrer"
          className="block bg-accent rounded-lg p-6 text-center hover:opacity-90 transition-opacity"
        >
          <AlertTriangle className="w-10 h-10 text-accent-foreground mx-auto mb-2" />
          <span className="text-accent-foreground font-bold">
            {t('footer.public_grievances')}
          </span>
        </a>

      </div>

    </section>
  );
};

export default CardGrid;

