import Header from '@/components/Header/Header';
import Hero from '@/components/Hero/Hero';
import InfoCards from '@/components/InfoCards/InfoCards';
import Footer from '@/components/Footer/Footer';

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <InfoCards />
      </main>
      <Footer />
    </>
  );
}
