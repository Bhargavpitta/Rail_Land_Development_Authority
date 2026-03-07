import { useState, useEffect, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import heroStation1 from '@/assets/hero-station-1.jpg';
import heroStation2 from '@/assets/hero-station-2.jpg';
import heroStation3 from '@/assets/hero-station-3.jpg';

const HeroSlider = () => {
  const { t } = useTranslation();
  const [current, setCurrent] = useState(0);

  const slides = [
    { image: heroStation1, text: t('slider.slide1') },
    { image: heroStation2, text: t('slider.slide2') },
    { image: heroStation3, text: t('slider.slide3') },
  ];

  const next = useCallback(() => setCurrent((p) => (p + 1) % slides.length), [slides.length]);
  const prev = () => setCurrent((p) => (p - 1 + slides.length) % slides.length);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <div className="relative w-full h-[300px] md:h-[450px] lg:h-[500px] overflow-hidden bg-foreground">
      {slides.map((slide, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 transition-opacity duration-700 ${idx === current ? 'opacity-100' : 'opacity-0'}`}
        >
          <img
            src={slide.image}
            alt={slide.text}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-foreground/40" />
          <div className="absolute bottom-0 left-0 right-0 bg-primary/90 py-3 px-6">
            <h3 className="text-primary-foreground text-lg md:text-xl font-bold text-center tracking-wide">
              {slide.text}
            </h3>
          </div>
        </div>
      ))}

      {/* Navigation arrows */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background/80 flex items-center justify-center hover:bg-background transition-colors shadow-lg"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-5 h-5 text-foreground" />
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background/80 flex items-center justify-center hover:bg-background transition-colors shadow-lg"
        aria-label="Next slide"
      >
        <ChevronRight className="w-5 h-5 text-foreground" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-16 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`w-3 h-3 rounded-full transition-colors ${
              idx === current ? 'bg-accent' : 'bg-background/60'
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;
