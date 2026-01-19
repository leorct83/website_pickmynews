import dynamic from 'next/dynamic';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import PainPoints from '@/components/PainPoints';
import HowItWorks from '@/components/HowItWorks';
import Benefits from '@/components/Benefits';

// Lazy load des composants below-the-fold pour améliorer le LCP
const NewsletterShowcase = dynamic(() => import('@/components/NewsletterShowcase'), {
  loading: () => <div className="py-24 bg-white" />,
});
const PricingTable = dynamic(() => import('@/components/PricingTable'), {
  loading: () => <div className="py-24 bg-slate-900" />,
});
const FAQ = dynamic(() => import('@/components/FAQ'), {
  loading: () => <div className="py-24 bg-white" />,
});
const SubscriptionForm = dynamic(() => import('@/components/SubscriptionForm'), {
  loading: () => <div className="py-24 bg-white" />,
});
const FinalCTA = dynamic(() => import('@/components/FinalCTA'), {
  loading: () => <div className="py-24 bg-slate-900" />,
});
const Footer = dynamic(() => import('@/components/Footer'), {
  loading: () => <div className="py-12 bg-slate-900" />,
});

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
