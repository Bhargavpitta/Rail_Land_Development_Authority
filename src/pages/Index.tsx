import HeroSlider from '@/components/HeroSlider/HeroSlider';
import CardGrid from '@/components/CardGrid/CardGrid';
import NewsSection from '@/components/NewsSection/NewsSection';
import NotificationBar from '@/components/NotificationBar/NotificationBar';

const Index = () => {
  return (
    <div className="min-h-screen w-full flex flex-col bg-background">

      {/* Notifications below navbar */}
      <NotificationBar />

      <main className="flex-1">

        <HeroSlider />

        {/* Cards + News sidebar */}
        <div className="flex flex-col lg:flex-row gap-6 px-4 md:px-6 py-6">

          <div className="flex-1">
            <CardGrid />
          </div>

          <div className="w-full lg:w-[300px] flex-shrink-0">
            <NewsSection />
          </div>

        </div>

      </main>

    </div>
  );
};

export default Index;