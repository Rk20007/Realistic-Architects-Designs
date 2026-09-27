import React from 'react';
import { FIRM_DETAILS } from '../data/firmData.ts';
import { ArrowUpRight, MapPin, Compass, Building, CheckCircle2 } from 'lucide-react';

interface HeroProps {
  onOpenConsultation: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenConsultation }) => {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Background Architectural Canvas with measured scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=85"
          alt="Contemporary luxury villa architectural facade designed with natural stone and ambient lighting"
          className="w-full h-full object-cover object-center scale-105 animate-pulse duration-1000"
          style={{ animationDuration: '8s' }}
          referrerPolicy="no-referrer"
        />
        {/* Measured dark scrim for WCAG AA 4.5:1 contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-950/85 via-neutral-950/80 to-[#0c0d0e]" />
        {/* Subtle grid pattern overlay evoking architectural drafting paper */}
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)`,
            backgroundSize: '32px 32px'
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12">
        <div className="max-w-3xl">
          {/* Unboxed regional location marker (Zero-Pill discipline) */}
          <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm font-medium text-amber-400 mb-6">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4 shrink-0" />
              151 Sukham Tower, Alwar Bypass, Bhiwadi
            </span>
            <span aria-hidden="true" className="text-neutral-500">·</span>
            <span className="text-neutral-300">Architecture & Interior Studio</span>
            <span aria-hidden="true" className="text-neutral-500">·</span>
            <span className="text-neutral-400">Est. 2011</span>
          </div>

          {/* Primary Architectural Headline */}
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-neutral-100 leading-[1.1] mb-6 text-balance">
            Architecture and interior spaces shaped with structural clarity.
          </h1>

          {/* Concrete Proposition */}
          <p className="text-base sm:text-lg text-neutral-300 font-normal leading-relaxed mb-8 max-w-2xl text-balance">
            Realistic Architects & Designs plans and delivers contemporary villas, bespoke residential interiors, corporate headquarters, and eco-conscious courtyard retreats across Bhiwadi, Dharuhera, and the NCR corridor.
          </p>

          {/* Primary Action Zone */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-12">
            <button
              onClick={onOpenConsultation}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold tracking-wide uppercase text-neutral-950 bg-amber-400 hover:bg-amber-300 active:scale-[0.98] transition-all rounded shadow-lg shadow-amber-400/10 cursor-pointer font-display"
            >
              <span>Schedule Studio Consultation</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
            <a
              href="#portfolio"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-medium text-neutral-200 bg-neutral-900/80 hover:bg-neutral-800/90 border border-neutral-700/70 hover:border-neutral-500 transition-all rounded"
            >
              <span>Explore Selected Works</span>
            </a>
          </div>

          {/* Verified Regional Proof Metrics (Claim-to-proof adjacency) */}
          <div className="pt-6 border-t border-neutral-800/80 grid grid-cols-2 sm:grid-cols-4 gap-6">
            <div>
              <div className="font-display text-2xl sm:text-3xl font-bold text-neutral-100 tabular-nums">
                280<span className="text-amber-400">+</span>
              </div>
              <div className="text-xs text-neutral-400 mt-1">Projects Delivered</div>
            </div>
            <div>
              <div className="font-display text-2xl sm:text-3xl font-bold text-neutral-100 tabular-nums">
                14<span className="text-amber-400">+</span>
              </div>
              <div className="text-xs text-neutral-400 mt-1">Years Regional Practice</div>
            </div>
            <div>
              <div className="font-display text-2xl sm:text-3xl font-bold text-neutral-100 tabular-nums">
                100<span className="text-amber-400">%</span>
              </div>
              <div className="text-xs text-neutral-400 mt-1">Turnkey Accountability</div>
            </div>
            <div>
              <div className="font-display text-2xl sm:text-3xl font-bold text-neutral-100 tabular-nums">
                Vastu
              </div>
              <div className="text-xs text-neutral-400 mt-1">Integrated Planning</div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative hairline bottom divider */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neutral-700/60 to-transparent" />
    </section>
  );
};
