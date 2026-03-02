import Header from '@/components/Header/Header';
import Navbar from '@/components/Navbar/Navbar';
import WhatsNew from '@/components/WhatsNew/WhatsNew';
import HeroSlider from '@/components/HeroSlider/HeroSlider';
import CardGrid from '@/components/CardGrid/CardGrid';
import NewsSection from '@/components/NewsSection/NewsSection';
import Footer from '@/components/Footer/Footer';

const Index = () => {
  return (
    <div className="min-h-screen w-full flex flex-col bg-background">
      <Header />
      <Navbar />
      <WhatsNew />

      <main className="flex-1">
        <HeroSlider />

        {/* Cards + News sidebar layout */}
        <div className="flex flex-col lg:flex-row gap-6 px-4 md:px-6 py-6">
          <div className="flex-1">
            <CardGrid />
          </div>
          <div className="w-full lg:w-[300px] flex-shrink-0">
            <NewsSection />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
