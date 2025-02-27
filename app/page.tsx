import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Partners from './components/Partners';
import Benefits from './components/Benefits';
import Services from './components/Services';
import FAQ from './components/FAQ';
import CTA from './components/CTA';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Partners />
      <Benefits />
      <Services />
      <FAQ />
      <CTA />
      <Footer />
      {/* Add other components as needed */}
    </main>
  );
}
