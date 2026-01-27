import { Clock, TrendingDown, Cpu, AlertCircle } from 'lucide-react';

const painPoints = [
  {
    icon: Clock,
    title: 'Drowning in Manual Tasks',
    description: 'You spend hours every day on repetitive admin work instead of coaching clients and growing your business.',
    color: 'from-red-500 to-orange-500',
  },
  {
    icon: TrendingDown,
    title: 'Missing Revenue Opportunities',
    description: 'Leads slip through the cracks, follow-ups get forgotten, and you lose money because there is no system.',
    color: 'from-orange-500 to-amber-500',
  },
  {
    icon: Cpu,
    title: 'Tech Overwhelm',
    description: 'Figuring out automation tools feels like learning a new language. You just want it to work.',
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: AlertCircle,
    title: 'DIY Burnout',
    description: 'You tried to set it up yourself and got stuck. Now your tech stack is a mess and nothing talks to each other.',
    color: 'from-pink-500 to-rose-500',
  },
];

export function PainPointsSection() {
  return (
    <section className="px-4 py-20 bg-slate-900/50">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Sound Familiar?
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            You are not alone. Most coaches struggle with these exact problems...
          </p>
        </div>

        {/* Pain points grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {painPoints.map((point, index) => (
            <div
              key={index}
              className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 hover:border-orange-500/50 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${point.color} flex items-center justify-center mb-4`}>
                <point.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">
                {point.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {point.description}
              </p>
            </div>
          ))}
        </div>

        {/* Transition statement */}
        <div className="text-center mt-16">
          <p className="text-2xl md:text-3xl font-bold text-white">
            What if there was a <span className="bg-gradient-to-r from-orange-400 to-purple-500 bg-clip-text text-transparent">better way?</span>
          </p>
        </div>
      </div>
    </section>
  );
}