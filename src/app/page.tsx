import Header from '@/components/Header/Header';
import Hero from '@/components/Hero/Hero';
import StatsSection from '@/components/StatsSection/StatsSection';
import InfoCards from '@/components/InfoCards/InfoCards';
import HistorySection from '@/components/HistorySection/HistorySection';
import NotableSection from '@/components/NotableSection/NotableSection';
import Footer from '@/components/Footer/Footer';

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <StatsSection />
        <InfoCards />
        <HistorySection />
        <NotableSection />
      </main>
      <Footer />
    </>
  );
}
