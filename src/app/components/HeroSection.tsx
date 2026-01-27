import { Button } from '@/app/components/ui/button';
import { Zap } from 'lucide-react';

const BOOKING_URL = 'https://calendly.com/noah-rizo/30min';

export function HeroSection() {
  return (
    <section className="relative overflow-hidden px-4 py-20 md:py-32">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-orange-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative max-w-6xl mx-auto text-center">
        {/* Top badge */}
        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-purple-600 text-white px-4 py-2 rounded-full mb-6 animate-bounce">
          <Zap className="w-4 h-4" />
          <span className="text-sm font-semibold">Automation Made Simple</span>
        </div>

        {/* Main headline */}
        <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight">
          Stop Wrestling With Tech.
          <br />
          <span className="bg-gradient-to-r from-orange-400 to-purple-500 bg-clip-text text-transparent">
            Start Scaling Your Coaching Business.
          </span>
        </h1>

        {/* Subheadline */}
        <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto">
          Get GoHighLevel + a done-for-you workflow every month. 
          <br className="hidden md:block" />
          Finally automate your business without the tech headaches.
        </p>

        {/* CTA Button */}
        <Button
          onClick={() => document.getElementById('lead-form')?.scrollIntoView({ behavior: 'smooth' })}
          size="lg"
          className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white text-lg px-8 py-6 rounded-full shadow-2xl hover:shadow-orange-500/50 transition-all duration-300 transform hover:scale-105"
        >
          Book My Free Strategy Call
        </Button>

        {/* Trust indicators */}
        <div className="mt-12 flex flex-wrap justify-center gap-8 text-gray-400 text-sm">
          <div className="flex items-center gap-2">
            <Zap className="w-4 h-4 text-orange-500" />
            <span>No Setup Required</span>
          </div>
          <div className="flex items-center gap-2">
            <Zap className="w-4 h-4 text-orange-500" />
            <span>Cancel Anytime</span>
          </div>
          <div className="flex items-center gap-2">
            <Zap className="w-4 h-4 text-orange-500" />
            <span>Done-For-You</span>
          </div>
        </div>
      </div>
    </section>
  );
}
