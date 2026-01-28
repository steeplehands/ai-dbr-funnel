export function SolutionIntroSection() {
  return (
    <section className="px-4 py-20 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-orange-500 to-purple-500 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto relative">
        {/* Section header */}
        <div className="text-center">
          <div className="inline-block bg-gradient-to-r from-orange-500/20 to-purple-500/20 border border-orange-500/30 rounded-full px-4 py-2 mb-4">
            <span className="text-orange-400 font-semibold">The Solution</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Automation You Control
            <br />
            <span className="bg-gradient-to-r from-orange-400 to-purple-500 bg-clip-text text-transparent">
              With Support When You Need It
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Ongoing access to automation systems we build and support. Customize, expand, or adjust workflows anytime.
          </p>
        </div>
      </div>
    </section>
  );
}
