import Spline from '@splinetool/react-spline';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-white to-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center pt-8 md:pt-16">
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700">
              <CheckCircle2 size={14} /> Cloudflare-native logistics prototype
            </div>
            <h1 className="mt-4 text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900">
              Fast Parcel — Ship smarter. Scale faster.
            </h1>
            <p className="mt-4 text-slate-600 text-base md:text-lg max-w-2xl">
              A modern, cloud-based shipping platform with realtime insights, wallet flows, and end-to-end shipment creation. Beautifully fast, ready for live integrations.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a
                href="#dashboard"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-700"
              >
                Launch Dashboard <ArrowRight size={16} />
              </a>
              <a
                href="#create"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-white px-5 py-3 text-sm font-semibold text-blue-700 ring-1 ring-inset ring-blue-200 hover:bg-blue-50"
              >
                Create Shipment
              </a>
            </div>

            <dl className="mt-8 grid grid-cols-3 gap-4 max-w-lg">
              <div>
                <dt className="text-xs text-slate-500">Avg. ETA</dt>
                <dd className="text-xl font-semibold text-slate-900">24-72h</dd>
              </div>
              <div>
                <dt className="text-xs text-slate-500">On-time rate</dt>
                <dd className="text-xl font-semibold text-slate-900">98.3%</dd>
              </div>
              <div>
                <dt className="text-xs text-slate-500">Uptime</dt>
                <dd className="text-xl font-semibold text-slate-900">99.99%</dd>
              </div>
            </dl>
          </div>

          <div className="relative aspect-[4/3] md:aspect-[16/10] lg:aspect-square">
            <div className="absolute inset-0 rounded-2xl overflow-hidden border border-slate-200/60 shadow-[0_10px_30px_rgba(2,6,23,0.08)]">
              <Spline scene="https://prod.spline.design/qQUip0dJPqrrPryE/scene.splinecode" style={{ width: '100%', height: '100%' }} />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/60 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
