import { CheckCircle2, Zap, Users, BarChart3 } from 'lucide-react';

const benefits = [
  {
    icon: CheckCircle2,
    title: 'Follow-Ups Happen Automatically',
    description: 'No more forgotten leads or missed opportunities. Every prospect gets followed up with, on time, every time.',
  },
  {
    icon: BarChart3,
    title: 'Get Bookings Without Chasing',
    description: 'Qualified leads book calls on your calendar automatically. You show up, they show up.',
  },
  {
    icon: Zap,
    title: 'Full Control Over Your System',
    description: 'Customize, expand, or adjust your workflows anytime. Video tutorials show you how to make changes yourself.',
  },
  {
    icon: Users,
    title: 'Support When You Need It',
    description: 'Guidance and support included. Questions answered. No waiting around.',
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
              <h4 className="text-lg font-bold text-white mb-2">Sign Up</h4>
              <p className="text-gray-400">Get instant access to your automation system</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center text-2xl font-bold text-white mx-auto mb-4">
                2
              </div>
              <h4 className="text-lg font-bold text-white mb-2">Go Live in 24 Hours</h4>
              <p className="text-gray-400">Your follow-up automation system is built and running</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-pink-500 to-rose-600 flex items-center justify-center text-2xl font-bold text-white mx-auto mb-4">
                3
              </div>
              <h4 className="text-lg font-bold text-white mb-2">Customize and Grow</h4>
              <p className="text-gray-400">Use tutorials to modify workflows or add more anytime</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
