export default function Footer() {
  return (
    <footer className="border-t border-slate-200/70 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-500">© {new Date().getFullYear()} Fast Parcel. All rights reserved.</p>
          <nav className="flex items-center gap-4 text-sm">
            <a href="#privacy" className="text-slate-600 hover:text-blue-700">Privacy</a>
            <a href="#terms" className="text-slate-600 hover:text-blue-700">Terms</a>
            <a href="#status" className="text-slate-600 hover:text-blue-700">Status</a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
