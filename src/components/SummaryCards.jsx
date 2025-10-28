import { PackageCheck, Truck, Clock, Wallet as WalletIcon } from 'lucide-react';

const Card = ({ title, value, icon: Icon, trend }) => (
  <div className="rounded-xl border border-slate-200/70 bg-white p-5 shadow-sm">
    <div className="flex items-center justify-between">
      <div>
        <p className="text-xs uppercase tracking-wide text-slate-500">{title}</p>
        <p className="mt-2 text-2xl font-bold text-slate-900">{value}</p>
        {trend && (
          <p className="mt-1 text-xs text-slate-500">{trend}</p>
        )}
      </div>
      <div className="h-10 w-10 grid place-items-center rounded-lg bg-blue-50 text-blue-700">
        <Icon size={18} />
      </div>
    </div>
  </div>
);

export default function SummaryCards() {
  const stats = [
    { title: 'Total Orders', value: '1,284', icon: PackageCheck, trend: '+4.2% this week' },
    { title: 'Delivered', value: '1,112', icon: Truck, trend: '97 completed' },
    { title: 'In Transit', value: '132', icon: Clock, trend: '19 delayed' },
    { title: 'Wallet Balance', value: '₹ 24,560', icon: WalletIcon, trend: '+₹ 2,000 top-up' },
  ];

  return (
    <section id="dashboard" className="py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {stats.map((s) => (
            <Card key={s.title} {...s} />
          ))}
        </div>
      </div>
    </section>
  );
}
