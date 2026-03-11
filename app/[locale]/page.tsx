import dynamic from 'next/dynamic';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import PainPoints from '@/components/PainPoints';
import HowItWorks from '@/components/HowItWorks';
import Benefits from '@/components/Benefits';

// Lazy load des composants below-the-fold pour améliorer le LCP
const FAQ = dynamic(() => import('@/components/FAQ'), {
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

        {/* 5. FAQ - Lever les objections */}
        <FAQ />

        {/* 6. CTA Final - Dernière conversion */}
        <FinalCTA />
      </main>

      {/* Footer */}
      <Footer />

    </>
  );
}
