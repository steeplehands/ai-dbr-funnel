import { useEffect } from 'react';
import { CheckCircle2, Mail, Settings, Zap, ArrowRight } from 'lucide-react';
import { Footer } from '@/app/components/Footer';

const nextSteps = [
  {
    icon: Mail,
    title: 'Check Your Email',
    description: "Within 24 hours, you'll receive an email from LeadConnector containing:",
    items: [
      'Your GoHighLevel login credentials',
      'Access to your automation dashboard',
      'Your first custom workflow, ready to use',
    ],
  },
  {
    icon: Settings,
    title: "We'll Set Everything Up",
    description: 'Our team will:',
    items: [
      'Create your GoHighLevel sub-account',
      'Configure your custom workflow',
      'Set up your CRM, email, and SMS systems',
    ],
  },
  {
    icon: Zap,
    title: "You're In Control",
    description: "Once live, you'll have:",
    items: [
      'Full access to customize and expand your workflows',
      'Ongoing support',
      'The freedom to build additional automations as you grow',
    ],
  },
];

export function SuccessPage() {
  // Load Calendly script
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      {/* Background accents */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl"></div>
      </div>

      <main className="relative">
        <div className="max-w-4xl mx-auto px-4 py-16 md:py-24">
          {/* Hero Section */}
          <div className="text-center mb-16">
            {/* Success Icon */}
            <div className="relative inline-block mb-8">
              <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full blur-2xl opacity-50"></div>
              <div className="relative w-24 h-24 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center">
                <CheckCircle2 className="w-12 h-12 text-white" />
              </div>
            </div>

            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4">
              Payment{' '}
              <span className="bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
                Confirmed!
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-400">
              Your automation system will be live within 24 hours
            </p>
          </div>

          {/* Next Steps Section */}
          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-10">
              Here's What Happens Next:
            </h2>

            <div className="space-y-6">
              {nextSteps.map((step, index) => (
                <div key={index} className="relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-orange-500/20 to-purple-600/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-2xl p-6 md:p-8">
                    <div className="flex items-start gap-4 md:gap-6">
                      {/* Step Number & Icon */}
                      <div className="flex-shrink-0">
                        <div className="relative">
                          <div className="absolute -top-2 -left-2 w-6 h-6 rounded-full bg-gradient-to-r from-orange-500 to-purple-600 flex items-center justify-center">
                            <span className="text-white text-xs font-bold">{index + 1}</span>
                          </div>
                          <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center">
                            <step.icon className="w-7 h-7 text-orange-500" />
                          </div>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                        <p className="text-gray-400 mb-3">{step.description}</p>
                        <ul className="space-y-2">
                          {step.items.map((item, itemIndex) => (
                            <li key={itemIndex} className="flex items-center gap-2 text-gray-300">
                              <ArrowRight className="w-4 h-4 text-orange-500 flex-shrink-0" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Onboarding Call Section */}
          <div className="relative mb-16">
            <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-purple-600 rounded-3xl blur-xl opacity-30"></div>
            <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-3xl p-8 md:p-10">
              <div className="text-center mb-8">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
                  Onboarding Call
                </h2>
                <p className="text-gray-400 max-w-2xl mx-auto">
                  Book a 30-minute onboarding call and we'll show you around your new automation system
                </p>
              </div>

              {/* Pre-call information */}
              <div className="bg-slate-900/50 border border-slate-700 rounded-xl p-6 mb-8">
                <h3 className="text-lg font-semibold text-white mb-3">Before Our Call:</h3>
                <p className="text-gray-400">
                  Think about where your coaching business is today and where you want it to be. We'll discuss your current setup, your client acquisition process, and your goals so we can customize your automation system to fit your needs.
                </p>
              </div>

              {/* Calendly Embed */}
              <div
                className="calendly-inline-widget rounded-xl overflow-hidden"
                data-url="https://calendly.com/noah-rizo/30min?hide_gdpr_banner=1&hide_event_type_details=1&primary_color=FF6B35"
                style={{ minWidth: '320px', height: '700px' }}
              />

              <p className="text-gray-500 text-sm text-center mt-6">
                This call is optional - you'll receive everything you need via email regardless
              </p>
            </div>
          </div>

          {/* Footer Contact */}
          <div className="text-center space-y-4">
            <p className="text-gray-400">
              Have questions? Email us at{' '}
              <a href="mailto:noah@rizo.pro" className="text-orange-400 hover:text-orange-300 underline">
                noah@rizo.pro
              </a>
            </p>
            <p className="text-gray-500">
              Return to{' '}
              <a href="https://get.rizo.pro" className="text-orange-400 hover:text-orange-300 underline">
                get.rizo.pro
              </a>
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
