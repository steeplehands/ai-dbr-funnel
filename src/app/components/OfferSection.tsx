import { Check, Sparkles } from 'lucide-react';
import { Button } from '@/app/components/ui/button';

const MONTHLY_STRIPE_URL = 'https://buy.stripe.com/4gM14o8QlcSM4fR7vofIs02';
const ANNUAL_STRIPE_URL = 'https://buy.stripe.com/dRmeVefeJ4mgfYzaHAfIs03';

const features = [
  'Full-featured system access (unlimited)',
  '1 free Done-For-You workflow included',
  'Lead capture & automated follow-ups',
  'Email & SMS campaign setup',
  'Custom-trained AI agent aligned to your brand',
  'CRM setup & optimization',
  'Ongoing support & maintenance',
  'Training on how to use everything',
];

export function OfferSection() {
  return (
    <section className="px-4 py-20 bg-slate-900/50">
      <div className="max-w-4xl mx-auto">
        {/* Pricing card */}
        <div className="relative">
          {/* Glow effect */}
          <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-purple-600 rounded-3xl blur-xl opacity-75"></div>

          <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 border-2 border-orange-500/50 rounded-3xl p-8 md:p-12">
            {/* Badge */}
            <div className="flex justify-center mb-6">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-purple-600 text-white px-4 py-2 rounded-full">
                <Sparkles className="w-4 h-4" />
                <span className="text-sm font-semibold">LIMITED TIME OFFER</span>
              </div>
            </div>

            {/* Heading */}
            <h2 className="text-4xl md:text-5xl font-extrabold text-white text-center mb-4">
              Everything You Need to Scale
            </h2>
            <p className="text-xl text-gray-400 text-center mb-8">
              Stop paying for multiple tools and DIY headaches
            </p>

            {/* Price */}
            <div className="text-center mb-8">
              <div className="flex items-baseline justify-center gap-2">
                <span className="text-3xl text-gray-500 line-through">$97</span>
                <span className="text-6xl md:text-7xl font-extrabold text-white">$79</span>
                <span className="text-2xl text-gray-400">/month</span>
              </div>
              <p className="text-gray-500 mt-2">Cancel anytime. No contracts.</p>
            </div>

            {/* Features list */}
            <div className="grid md:grid-cols-2 gap-4 mb-10">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-300">{feature}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="text-center space-y-4">
              {/* Monthly Button */}
              <div>
                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white text-xl px-12 py-7 rounded-full shadow-2xl hover:shadow-orange-500/50 transition-all duration-300 transform hover:scale-105 w-full md:w-auto"
                >
                  <a href={MONTHLY_STRIPE_URL} target="_blank" rel="noopener noreferrer">
                    Monthly - $79/mo
                  </a>
                </Button>
              </div>

              <p className="text-gray-500 text-lg font-medium">OR</p>

              {/* Annual Button */}
              <div>
                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white text-xl px-12 py-7 rounded-full shadow-2xl hover:shadow-orange-500/50 transition-all duration-300 transform hover:scale-105 w-full md:w-auto"
                >
                  <a href={ANNUAL_STRIPE_URL} target="_blank" rel="noopener noreferrer">
                    Annual - $853/yr (Save 10%)
                  </a>
                </Button>
              </div>

              <p className="text-gray-500 text-lg font-medium">OR</p>

              {/* Free Strategy Call Button */}
              <div>
                <Button
                  onClick={() => document.getElementById('lead-form')?.scrollIntoView({ behavior: 'smooth' })}
                  size="lg"
                  className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white text-xl px-12 py-7 rounded-full shadow-2xl hover:shadow-orange-500/50 transition-all duration-300 transform hover:scale-105 w-full md:w-auto"
                >
                  Claim Your Free Strategy Call Now
                </Button>
              </div>

              <p className="text-gray-500 text-sm mt-4">
                🔒 Secure checkout powered by Stripe
              </p>
            </div>

            {/* Guarantee */}
            <div className="mt-8 pt-8 border-t border-slate-700 text-center">
              <p className="text-gray-400">
                <span className="font-bold text-white">Satisfaction Guarantee:</span> We are committed to your success. If you are not completely satisfied with our service, let us know and we will make it right.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
