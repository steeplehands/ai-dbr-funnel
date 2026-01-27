export function Footer() {
  return (
    <footer className="px-4 py-12 bg-slate-950 border-t border-slate-800">
      <div className="max-w-6xl mx-auto">
        <div className="text-center">
          <p className="text-gray-400 mb-4">
            © {new Date().getFullYear()} Automation Services for Coaches. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm">
            This is a demonstration funnel page. In production, form submissions would be sent to GoHighLevel.
          </p>
        </div>
      </div>
    </footer>
  );
}
