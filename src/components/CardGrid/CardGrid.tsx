import { useTranslation } from 'react-i18next';

const CardGrid = () => {
  const { t } = useTranslation();

  const cards = [
    { title: t('cards.growing_story'), color: 'bg-card-green' },
    { title: t('cards.expanding_horizon'), color: 'bg-card-orange' },
    { title: t('cards.stations_redevelopment'), color: 'bg-card-yellow' },
    { title: t('cards.mfc_passenger'), color: 'bg-card-red' },
    { title: t('cards.commercial_land'), color: 'bg-card-green' },
    { title: t('cards.colonies'), color: 'bg-card-orange' },
    { title: t('cards.bidding'), color: 'bg-card-yellow' },
    { title: t('cards.regulation'), color: 'bg-background border border-border' },
  ];

  return (
    <section className="py-8 px-4 md:px-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {cards.map((card, idx) => {
          const isLast = idx === cards.length - 1;
          return (
            <a
              key={idx}
              href="#"
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
    </section>
  );
};

export default CardGrid;
