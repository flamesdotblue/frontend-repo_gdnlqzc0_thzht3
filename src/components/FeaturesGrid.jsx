import { BadgeCheck, BarChart3, FileDown, FileSearch, Layers3, Shield, Users } from 'lucide-react';

const Feature = ({ icon: Icon, title, desc }) => (
  <div className="group rounded-xl border border-slate-200/70 bg-white p-6 shadow-sm hover:shadow-md transition-all">
    <div className="h-10 w-10 grid place-items-center rounded-lg bg-blue-50 text-blue-700">
      <Icon size={18} />
    </div>
    <h3 className="mt-4 text-base font-semibold text-slate-900">{title}</h3>
    <p className="mt-1 text-sm text-slate-600">{desc}</p>
  </div>
);

export default function FeaturesGrid() {
  const features = [
    { icon: BarChart3, title: 'Realtime Analytics', desc: 'Track orders, delivery performance, and SLAs with live-style charts.' },
    { icon: FileSearch, title: 'Shipment Lifecycle', desc: 'Create, track, cancel and generate labels with a streamlined flow.' },
    { icon: FileDown, title: 'Reports & Exports', desc: 'Download CSV summaries and invoices for quick ops reviews.' },
    { icon: Users, title: 'Admin Console', desc: 'Manage users, KYC verifications, and audit logs with ease.' },
    { icon: BadgeCheck, title: 'KYC & Compliance', desc: 'Upload business docs, accept terms, and track verification status.' },
    { icon: Layers3, title: 'Multi-service Rates', desc: 'Compare Economy, Standard, and Priority with ETAs and costs.' },
    { icon: Shield, title: 'Secure by Design', desc: 'Built for Cloudflare with modern auth patterns and safe defaults.' },
  ];

  return (
    <section id="features" className="py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-2xl font-bold text-slate-900">Everything you need to ship at scale</h2>
            <p className="mt-1 text-sm text-slate-600">Modular building blocks ready for real API integrations.</p>
          </div>
          <a href="#create" className="hidden md:inline-flex rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700">Start booking</a>
        </div>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f) => (
            <Feature key={f.title} {...f} />
          ))}
        </div>
      </div>
    </section>
  );
}
