import { User, Database, Bell, MessageSquare, Calendar, RefreshCw, ArrowRight } from 'lucide-react';

const flowSteps = [
  {
    icon: User,
    title: 'Prospect Raises Their Hand',
    description: 'Enters through your funnel or form',
  },
  {
    icon: Database,
    title: 'Lead Is Captured Automatically',
    description: 'Stored in one central system',
  },
  {
    icon: Bell,
    title: 'You Get Notified',
    description: 'Stay informed without inbox chaos',
  },
  {
    icon: MessageSquare,
    title: 'Automated Follow-Up',
    description: 'Email sequences or optional AI agent',
    note: '(AI add-on available)',
  },
  {
    icon: Calendar,
    title: 'Booking Happens Automatically',
    description: 'Qualified leads book calls on your calendar',
  },
  {
    icon: RefreshCw,
    title: 'Long-Term Nurture',
    description: 'Old leads are re-engaged over time',
  },
];

export function AutomationFlowSection() {
  return (
    <section className="px-4 py-20 bg-slate-900/30">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
            How Leads Are Handled Automatically (Without You Chasing Anyone)
          </h2>
          <p className="text-gray-500 text-sm">
            A simple background system that runs once it is set up.
          </p>
        </div>

        {/* Flow diagram */}
        <div className="relative">
          {/* Desktop flow */}
          <div className="hidden lg:grid lg:grid-cols-6 gap-4 mb-12">
            {flowSteps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-slate-800/60 border border-slate-700/50 rounded-lg p-5 h-full flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-lg bg-slate-700/50 flex items-center justify-center mb-4">
                    <step.icon className="w-6 h-6 text-gray-300" />
                  </div>
                  <h3 className="text-sm font-semibold text-white mb-2 leading-tight">
                    {step.title}
                  </h3>
                  <p className="text-xs text-gray-400 leading-relaxed">
                    {step.description}
                  </p>
                  {step.note && (
                    <p className="text-xs text-gray-500 italic mt-2">
                      {step.note}
                    </p>
                  )}
                </div>
                {/* Arrow connector */}
                {index < flowSteps.length - 1 && (
                  <div className="absolute top-1/2 -right-2 -translate-y-1/2 z-10">
                    <ArrowRight className="w-4 h-4 text-slate-600" />
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile/Tablet flow */}
          <div className="lg:hidden space-y-4 mb-12">
            {flowSteps.map((step, index) => (
              <div key={index}>
                <div className="bg-slate-800/60 border border-slate-700/50 rounded-lg p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-slate-700/50 flex items-center justify-center flex-shrink-0">
                      <step.icon className="w-6 h-6 text-gray-300" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-base font-semibold text-white mb-1">
                        {step.title}
                      </h3>
                      <p className="text-sm text-gray-400">
                        {step.description}
                      </p>
                      {step.note && (
                        <p className="text-sm text-gray-500 italic mt-1">
                          {step.note}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
                {/* Arrow connector */}
                {index < flowSteps.length - 1 && (
                  <div className="flex justify-center py-2">
                    <ArrowRight className="w-5 h-5 text-slate-600 rotate-90" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Caption */}
        <div className="text-center">
          <p className="text-sm text-gray-500 max-w-3xl mx-auto leading-relaxed">
            A structured workflow that runs in the background. Optional AI agents available for enhanced follow-up.
          </p>
        </div>
      </div>
    </section>
  );
}
