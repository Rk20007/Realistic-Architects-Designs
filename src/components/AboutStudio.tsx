import React from 'react';
import { FIRM_DETAILS } from '../data/firmData.ts';
import { Compass, ShieldCheck, Award, MapPin, Building2, SunMedium } from 'lucide-react';

export const AboutStudio: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-neutral-950 relative border-b border-neutral-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Visual Composition with Studio Location Card */}
          <div className="lg:col-span-6 relative">
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-neutral-800 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80"
                alt="Realistic Architects studio work and architectural drafting"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/90 via-neutral-950/20 to-transparent" />
              
              {/* Studio Physical Presence Box in Bhiwadi */}
              <div className="absolute bottom-4 left-4 right-4 p-4 bg-neutral-900/90 backdrop-blur border border-neutral-800 rounded-lg">
                <div className="flex items-start gap-3">
                  <Building2 className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs font-semibold text-neutral-100">
                      Studio Headquarters · Sukham Tower
                    </div>
                    <div className="text-xs text-neutral-300 mt-0.5">
                      Suite 151, 1st Floor, Bhagat Singh Colony, Alwar Bypass Road, Bhiwadi
                    </div>
                    <div className="text-[11px] text-amber-400/90 mt-1">
                      Serving Bhiwadi, Dharuhera, Manesar, Gurgaon & Alwar
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Architectural Badge */}
            <div className="hidden sm:block absolute -top-4 -right-4 bg-neutral-900 border border-neutral-700/80 rounded-lg p-3.5 shadow-xl">
              <div className="text-xs text-neutral-400">Regional Experience</div>
              <div className="font-display text-xl font-bold text-amber-400">14+ Years Practice</div>
            </div>
          </div>

          {/* Right Column: Architectural Philosophy & Credo */}
          <div className="lg:col-span-6 space-y-6">
            <div className="text-xs font-semibold uppercase tracking-wider text-amber-400">
              About The Practice
            </div>

            <h2 className="font-display text-3xl sm:text-4xl font-bold text-neutral-100 tracking-tight leading-tight text-balance">
              Where engineering rigor meets human comfort.
            </h2>

            <p className="text-sm sm:text-base text-neutral-300 leading-relaxed text-balance">
              Founded in 2011 at Sukham Tower in Bhiwadi, Realistic Architects & Designs was built on an uncompromising principle: that spaces must endure the demanding climatic reality of the NCR-Rajasthan belt while expressing pristine contemporary aesthetics.
            </p>

            <p className="text-sm text-neutral-400 leading-relaxed text-balance">
              Whether designing an eco-conscious rammed-earth residence along the Aravalli fringe or engineering a sleek executive corporate office in RIICO Industrial Area, our multidisciplinary team handles every phase — from initial structural calculations and Vastu layout orientation to bespoke interior joinery.
            </p>

            {/* 3 Core Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-neutral-800">
              <div className="p-3.5 bg-neutral-900/50 border border-neutral-800/80 rounded-lg">
                <div className="flex items-center gap-2 font-display text-sm font-semibold text-neutral-200 mb-1">
                  <SunMedium className="w-4 h-4 text-amber-400" />
                  <span>Climate-Adaptive Design</span>
                </div>
                <p className="text-xs text-neutral-400 leading-normal">
                  Deep overhangs, courtyards, and thermal mass tailored for Bhiwadi's intense summers and seasonal winds.
                </p>
              </div>

              <div className="p-3.5 bg-neutral-900/50 border border-neutral-800/80 rounded-lg">
                <div className="flex items-center gap-2 font-display text-sm font-semibold text-neutral-200 mb-1">
                  <Compass className="w-4 h-4 text-amber-400" />
                  <span>Vedic Vastu Integration</span>
                </div>
                <p className="text-xs text-neutral-400 leading-normal">
                  Harmonious alignment of energy flow, daylight, and spatial hierarchy without aesthetic compromise.
                </p>
              </div>

              <div className="p-3.5 bg-neutral-900/50 border border-neutral-800/80 rounded-lg">
                <div className="flex items-center gap-2 font-display text-sm font-semibold text-neutral-200 mb-1">
                  <ShieldCheck className="w-4 h-4 text-amber-400" />
                  <span>Turnkey Material Integrity</span>
                </div>
                <p className="text-xs text-neutral-400 leading-normal">
                  Rigorous testing of cement, steel, seasoned timber, and branded hardware with verified BOQs.
                </p>
              </div>

              <div className="p-3.5 bg-neutral-900/50 border border-neutral-800/80 rounded-lg">
                <div className="flex items-center gap-2 font-display text-sm font-semibold text-neutral-200 mb-1">
                  <Award className="w-4 h-4 text-amber-400" />
                  <span>Virtual Certainty</span>
                </div>
                <p className="text-xs text-neutral-400 leading-normal">
                  Accurate 4K photorealistic 3D perspectives so you see every shadow and texture before foundation pouring.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
