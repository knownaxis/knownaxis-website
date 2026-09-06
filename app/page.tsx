import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Approach from '@/components/Approach';
import Services from '@/components/Services';
import Process from '@/components/Process';
import Cases from '@/components/Cases';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Approach />
        <Services />
        <Process />
        <Cases />
        <FAQ />
        <Footer />
      </main>
    </>
  );
}
