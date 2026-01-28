import { Check, Sparkles } from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import { useState } from 'react';

const MONTHLY_STRIPE_URL = 'https://buy.stripe.com/4gM14o8QlcSM4fR7vofIs02';
const ANNUAL_STRIPE_URL = 'https://buy.stripe.com/dRmeVefeJ4mgfYzaHAfIs03';

const features = [
  'Ongoing access to managed automation systems',
  'One custom workflow included at signup (sign-on bonus)',
  'Full control to customize, expand, or adjust workflows',
  'Lead capture & automated follow-ups',
  'Email & SMS campaign setup',
  'CRM setup & optimization',
  'Support and guidance included',
  'Video tutorials to build and modify workflows yourself',
];

export function OfferSection() {
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'annual'>('monthly');

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
              Get Bookings Without Manual Work
            </h2>
            <p className="text-xl text-gray-400 text-center mb-8">
              One central system instead of scattered tools
            </p>

            {/* Billing Toggle */}
            <div className="flex justify-center mb-8">
              <div className="inline-flex items-center bg-slate-900/80 border border-slate-700 rounded-full p-1">
                <button
                  onClick={() => setBillingPeriod('monthly')}
                  className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                    billingPeriod === 'monthly'
                      ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-lg'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  Monthly
                </button>
                <button
                  onClick={() => setBillingPeriod('annual')}
                  className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-200 relative ${
                    billingPeriod === 'annual'
                      ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-lg'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  Annual
                  <span className="ml-1 text-xs bg-green-500 text-white px-2 py-0.5 rounded-full">
                    Save 10%
                  </span>
                </button>
              </div>
            </div>

            {/* Price */}
            <div className="text-center mb-8">
              {billingPeriod === 'monthly' ? (
                <>
                  <div className="flex items-baseline justify-center gap-2">
                    <span className="text-3xl text-gray-500 line-through">$97</span>
                    <span className="text-6xl md:text-7xl font-extrabold text-white">$79</span>
                    <span className="text-2xl text-gray-400">/month</span>
                  </div>
                  <p className="text-gray-500 mt-2">Cancel anytime. No contracts.</p>
                </>
              ) : (
                <>
                  <div className="flex items-baseline justify-center gap-2">
                    <span className="text-6xl md:text-7xl font-extrabold text-white">$853</span>
                    <span className="text-2xl text-gray-400">/year</span>
                  </div>
                  <p className="text-gray-500 mt-2">
                    Just ~$71/month • Billed annually
                  </p>
                </>
              )}
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
              {/* Payment Button - changes based on billing period */}
              <div>
                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white text-xl px-12 py-7 rounded-full shadow-2xl hover:shadow-orange-500/50 transition-all duration-300 transform hover:scale-105 w-full md:w-auto"
                >
                  <a
                    href={billingPeriod === 'monthly' ? MONTHLY_STRIPE_URL : ANNUAL_STRIPE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {billingPeriod === 'monthly' ? 'Get Started - $79/mo' : 'Get Started - $853/yr'}
                  </a>
                </Button>
              </div>

              <p className="text-gray-500 text-sm mt-4">
                Includes your first workflow + ongoing support
              </p>
            </div>

            {/* AI Agent note */}
            <div className="mt-6 text-center">
              <p className="text-gray-400 text-sm">
                <span className="font-semibold text-white">Custom AI Agent:</span> Available as an add-on for follow-up, lead nurture, or client care. Annual plans include one free custom AI agent.
              </p>
              <p className="text-gray-500 text-xs mt-2">
                SMS and API usage fees apply when AI agents or SMS follow-up are enabled.
              </p>
            </div>

            {/* Strategy Call note */}
            <div className="mt-6 pt-6 border-t border-slate-700 text-center">
              <p className="text-gray-400 text-sm">
                Want extra workflows or custom systems? <a href="https://calendly.com/noah-rizo/30min" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:text-orange-300 underline">Book a free strategy call</a> to discuss your needs.
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
