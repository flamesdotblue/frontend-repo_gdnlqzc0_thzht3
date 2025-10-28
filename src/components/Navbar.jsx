import { useState } from 'react';
import { Menu, X, Rocket, ShieldCheck, Wallet } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { label: 'Dashboard', href: '#dashboard' },
    { label: 'Orders', href: '#orders' },
    { label: 'Wallet', href: '#wallet' },
    { label: 'KYC', href: '#kyc' },
    { label: 'Reports', href: '#reports' },
    { label: 'Admin', href: '#admin' },
  ];

  return (
    <header className="w-full sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 border-b border-slate-200/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-2 font-semibold text-slate-900">
            <div className="h-8 w-8 grid place-items-center rounded-lg bg-blue-600 text-white">
              <Rocket size={18} />
            </div>
            <span>Fast Parcel</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="text-sm font-medium text-slate-700 hover:text-blue-700 transition-colors"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a
              href="#wallet"
              className="inline-flex items-center gap-2 rounded-md bg-blue-50 px-3 py-2 text-sm font-semibold text-blue-700 ring-1 ring-inset ring-blue-200 hover:bg-blue-100"
            >
              <Wallet size={16} /> Wallet
            </a>
            <a
              href="#login"
              className="inline-flex items-center gap-2 rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-700"
            >
              <ShieldCheck size={16} /> Login
            </a>
          </div>

          <button
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-slate-700 hover:bg-slate-100"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle navigation"
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4">
            <div className="grid gap-1">
              {links.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  className="rounded-md px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100"
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </a>
              ))}
              <div className="flex gap-2 px-3 pt-2">
                <a
                  href="#wallet"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-blue-50 px-3 py-2 text-sm font-semibold text-blue-700 ring-1 ring-inset ring-blue-200 hover:bg-blue-100"
                  onClick={() => setOpen(false)}
                >
                  <Wallet size={16} /> Wallet
                </a>
                <a
                  href="#login"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-700"
                  onClick={() => setOpen(false)}
                >
                  <ShieldCheck size={16} /> Login
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
