import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import FocusAreasSection from '@/components/FocusAreasSection';
import ElevateSection from '@/components/ElevateSection';
import NewsSection from '@/components/NewsSection';
import MembershipSection from '@/components/MembershipSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';
import AIChat from '@/components/AIChat';

export default function Home() {
  return (
    <div className="min-h-screen bg-brand-cream text-brand-ink overflow-x-hidden">
      <Header />
      <main>
        <HeroSection />
        <FocusAreasSection />
        <ElevateSection />
        <NewsSection />
        <MembershipSection />
        <CTASection />
      </main>
      <Footer />
      <AIChat />
    </div>
  );
}
