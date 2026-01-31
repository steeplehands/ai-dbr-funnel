import { HeroSection } from '@/app/components/HeroSection';
import { PainPointsSection } from '@/app/components/PainPointsSection';
import { SolutionIntroSection } from '@/app/components/SolutionIntroSection';
import { AutomationFlowSection } from '@/app/components/AutomationFlowSection';
import { BenefitsSection } from '@/app/components/BenefitsSection';
import { OfferSection } from '@/app/components/OfferSection';
import { Footer } from '@/app/components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      <HeroSection />
      <PainPointsSection />
      <SolutionIntroSection />
      <AutomationFlowSection />
      <BenefitsSection />
      <OfferSection />
      <Footer />
    </div>
  );
}
