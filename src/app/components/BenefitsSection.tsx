import { CheckCircle2, Zap, Users, BarChart3 } from 'lucide-react';

const benefits = [
  {
    icon: CheckCircle2,
    title: 'Reclaim 15+ Hours Per Week',
    description: 'Automate lead capture, follow-ups, booking, and client onboarding so you can focus on what you do best.',
  },
  {
    icon: BarChart3,
    title: 'Increase Revenue by 30-50%',
    description: 'Never miss a lead again. Automated follow-ups and nurture sequences turn more prospects into paying clients.',
  },
  {
    icon: Zap,
    title: 'Zero Tech Headaches',
    description: 'We build and maintain your workflows for you. No learning curve, no setup stress, no troubleshooting.',
  },
  {
    icon: Users,
    title: 'White-Glove Service',
    description: 'Get a new custom workflow every month, tailored to your business needs. Like having a tech team on demand.',
  },
];

export function BenefitsSection() {
  return (
    <section className="px-4 py-20 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-orange-500 to-purple-500 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto relative">
        {/* Benefits grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="flex gap-4 bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 hover:border-orange-500/50 transition-all duration-300"
            >
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-orange-500 to-purple-600 flex items-center justify-center">
                  <benefit.icon className="w-6 h-6 text-white" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* How it works */}
        <div className="bg-gradient-to-r from-slate-800/50 to-slate-900/50 border border-slate-700 rounded-2xl p-8 md:p-12">
          <h3 className="text-3xl font-bold text-white mb-8 text-center">
            How It Works
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center text-2xl font-bold text-white mx-auto mb-4">
                1
              </div>
              <h4 className="text-lg font-bold text-white mb-2">Book Your Free Call</h4>
              <p className="text-gray-400">We will map out your biggest automation opportunities</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center text-2xl font-bold text-white mx-auto mb-4">
                2
              </div>
              <h4 className="text-lg font-bold text-white mb-2">We Build Everything</h4>
              <p className="text-gray-400">Your GoHighLevel account + first workflow ready in days</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-pink-500 to-rose-600 flex items-center justify-center text-2xl font-bold text-white mx-auto mb-4">
                3
              </div>
              <h4 className="text-lg font-bold text-white mb-2">Watch It Work</h4>
              <p className="text-gray-400">Save time, close more deals, and scale with confidence</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
