import React, { useState } from 'react';
import { SERVICES, Service } from '../data/firmData.ts';
import { Home, LayoutGrid, Briefcase, Leaf, Eye, ShieldCheck, Check, ArrowRight } from 'lucide-react';

interface ServicesProps {
  onOpenConsultation: () => void;
}

const iconMap: Record<string, React.ReactNode> = {
  Home: <Home className="w-5 h-5 text-amber-400" />,
  LayoutGrid: <LayoutGrid className="w-5 h-5 text-amber-400" />,
  Briefcase: <Briefcase className="w-5 h-5 text-amber-400" />,
  Leaf: <Leaf className="w-5 h-5 text-amber-400" />,
  Eye: <Eye className="w-5 h-5 text-amber-400" />,
  ShieldCheck: <ShieldCheck className="w-5 h-5 text-amber-400" />,
};

export const Services: React.FC<ServicesProps> = ({ onOpenConsultation }) => {
  const [activeServiceId, setActiveServiceId] = useState<string>(SERVICES[0].number);

  const selectedService = SERVICES.find((s) => s.number === activeServiceId) || SERVICES[0];

  return (
    <section id="services" className="py-24 bg-[#0c0d0e] relative border-b border-neutral-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-semibold uppercase tracking-wider text-amber-400 mb-3">
            Core Disciplines
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-100 tracking-tight leading-tight text-balance">
            Comprehensive architectural & interior spatial practices.
          </h2>
          <p className="mt-4 text-base text-neutral-400 leading-relaxed max-w-2xl text-balance">
            From initial site contouring and Vastu-compliant layout drafting to fine interior joinery and complete turnkey handover.
          </p>
        </div>

        {/* Interactive Master-Detail Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Numbered Service Selection List */}
          <div className="lg:col-span-5 space-y-2">
            {SERVICES.map((service) => {
              const isActive = service.number === activeServiceId;
              return (
                <button
                  key={service.number}
                  onClick={() => setActiveServiceId(service.number)}
                  className={`w-full text-left p-4 sm:p-5 rounded-lg transition-all duration-200 cursor-pointer border ${
                    isActive
                      ? 'bg-neutral-900 border-neutral-700 shadow-md'
                      : 'bg-neutral-950/40 border-neutral-900 hover:border-neutral-800 hover:bg-neutral-900/40 text-neutral-400 hover:text-neutral-200'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <span
                      className={`font-display text-base font-bold tabular-nums shrink-0 mt-0.5 ${
                        isActive ? 'text-amber-400' : 'text-neutral-600'
                      }`}
                    >
                      {service.number}.
                    </span>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2">
                        <h3
                          className={`text-base font-semibold truncate ${
                            isActive ? 'text-neutral-100' : 'text-neutral-300'
                          }`}
                        >
                          {service.title}
                        </h3>
                        {isActive && (
                          <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0" />
                        )}
                      </div>
                      <p className="text-xs text-neutral-400 mt-1 line-clamp-1">
                        {service.tagline}
                      </p>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Column: Detailed Service Inspection Card */}
          <div className="lg:col-span-7 bg-neutral-900/90 border border-neutral-800 rounded-xl p-6 sm:p-8 backdrop-blur-sm shadow-xl">
            <div className="relative aspect-[16/9] w-full rounded-lg overflow-hidden mb-6 border border-neutral-800">
              <img
                src={selectedService.image}
                alt={selectedService.title}
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-neutral-300">
                <span className="flex items-center gap-2 bg-neutral-950/80 px-3 py-1.5 rounded backdrop-blur">
                  {iconMap[selectedService.iconName]}
                  <span className="font-semibold text-neutral-200">Discipline {selectedService.number}</span>
                </span>
                <span className="text-neutral-400 bg-neutral-950/80 px-3 py-1.5 rounded backdrop-blur">
                  {selectedService.suitableFor}
                </span>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-2 text-xs font-semibold text-amber-400">
                <span>{selectedService.number}. Architectural Capability</span>
              </div>

              <h3 className="font-display text-2xl font-bold text-neutral-100">
                {selectedService.title}
              </h3>

              <p className="text-neutral-300 text-sm sm:text-base leading-relaxed">
                {selectedService.description}
              </p>

              <div className="pt-4 border-t border-neutral-800">
                <div className="text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-3">
                  Scope & Technical Deliverables
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {selectedService.deliverables.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-300">
                      <Check className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
                <div className="text-xs text-neutral-400">
                  Ideal for: <span className="text-neutral-200 font-medium">{selectedService.suitableFor}</span>
                </div>
                <button
                  onClick={onOpenConsultation}
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-neutral-950 bg-amber-400 hover:bg-amber-300 active:scale-95 transition-all rounded shadow cursor-pointer font-display"
                >
                  <span>Inquire For This Service</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
