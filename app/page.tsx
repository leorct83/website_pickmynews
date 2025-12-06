import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import PainPoints from '@/components/PainPoints';
import HowItWorks from '@/components/HowItWorks';
import Benefits from '@/components/Benefits';
import NewsletterShowcase from '@/components/NewsletterShowcase';
import PricingTable from '@/components/PricingTable';
import FAQ from '@/components/FAQ';
import SubscriptionForm from '@/components/SubscriptionForm';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';

export default function HomePage() {
  return (
    <>
      {/* Navigation fixe */}
      <Navbar />

      <main>
        {/* 1. Hero - Accroche + Promesse */}
        <HeroSection />

        {/* 2. Pain Points - Amplifier le problème */}
        <PainPoints />

        {/* 3. Solution - Comment ça marche */}
        <HowItWorks />

        {/* 4. Avantages - Pourquoi nous */}
        <Benefits />

        {/* 5. Exemples de newsletters */}
        <NewsletterShowcase />

        {/* 6. Tarifs - Offres claires */}
        <PricingTable />

        {/* 7. FAQ - Lever les objections */}
        <FAQ />

        {/* 8. Formulaire d'inscription */}
        <SubscriptionForm />

        {/* 9. CTA Final - Dernière conversion */}
        <FinalCTA />
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}
