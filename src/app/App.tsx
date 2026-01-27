import { useState } from 'react';
import { HeroSection } from '@/app/components/HeroSection';
import { PainPointsSection } from '@/app/components/PainPointsSection';
import { SolutionIntroSection } from '@/app/components/SolutionIntroSection';
import { AutomationFlowSection } from '@/app/components/AutomationFlowSection';
import { BenefitsSection } from '@/app/components/BenefitsSection';
import { OfferSection } from '@/app/components/OfferSection';
import { LeadFormSection } from '@/app/components/LeadFormSection';
import { Footer } from '@/app/components/Footer';

export default function App() {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleFormSubmit = (data: { fullName: string; email: string; phone: string }) => {
    console.log('Form submitted:', data);
    setFormSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      <HeroSection />
      <PainPointsSection />
      <SolutionIntroSection />
      <AutomationFlowSection />
      <BenefitsSection />
      <OfferSection />
      <LeadFormSection onSubmit={handleFormSubmit} submitted={formSubmitted} />
      <Footer />
    </div>
  );
}
