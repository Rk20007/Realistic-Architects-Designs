import React from 'react';
import { FIRM_DETAILS } from '../data/firmData.ts';
import { Phone, MapPin, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#08090a] border-t border-neutral-850 text-neutral-400 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand Wordmark & Studio Essence */}
          <div className="space-y-4 lg:col-span-1">
            <span className="font-display text-lg font-bold text-neutral-100 tracking-tight block">
              Realistic Architects & Designs
            </span>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Bhiwadi's dedicated architecture and interior design studio crafting private residences, modern penthouses, corporate facilities, and eco-conscious retreats.
            </p>
            <div className="text-xs text-amber-400 font-medium pt-1">
              Registered Architecture Practice · Bhiwadi, Rajasthan
            </div>
          </div>

          {/* Quick Navigation */}
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-neutral-200 mb-3">
              Navigation
            </div>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#services" className="hover:text-amber-300 transition-colors">Architectural Planning</a>
              </li>
              <li>
                <a href="#services" className="hover:text-amber-300 transition-colors">Bespoke Luxury Interiors</a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-amber-300 transition-colors">Selected Projects Portfolio</a>
              </li>
              <li>
                <a href="#estimator" className="hover:text-amber-300 transition-colors">Project Cost Estimator</a>
              </li>
              <li>
                <a href="#about" className="hover:text-amber-300 transition-colors">About Our Studio</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-amber-300 transition-colors">Consultation & Office Visit</a>
              </li>
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-neutral-200 mb-3">
              Regional Practice
            </div>
            <ul className="space-y-1.5 text-xs text-neutral-400">
              {FIRM_DETAILS.serviceRegions.map((region, idx) => (
                <li key={idx} className="flex items-center gap-1.5">
                  <span className="w-1 h-1 rounded-full bg-neutral-600" />
                  <span>{region}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Office Contact Info */}
          <div className="space-y-3">
            <div className="text-xs font-semibold uppercase tracking-wider text-neutral-200 mb-3">
              Sukham Tower Studio
            </div>
            <div className="flex items-start gap-2 text-xs">
              <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <span>
                151, 1st Floor, Sukham Tower, Bhagat Singh Colony, Alwar Bypass Road, Bhiwadi – 301019
              </span>
            </div>
            <div className="flex items-center gap-2 text-xs">
              <Phone className="w-4 h-4 text-amber-400 shrink-0" />
              <div className="tabular-nums space-x-2">
                <a href={`tel:${FIRM_DETAILS.phones[0].value}`} className="hover:text-white">
                  {FIRM_DETAILS.phones[0].display}
                </a>
                <span>/</span>
                <a href={`tel:${FIRM_DETAILS.phones[1].value}`} className="hover:text-white">
                  {FIRM_DETAILS.phones[1].display}
                </a>
              </div>
            </div>
            <div className="text-[11px] text-neutral-500 pt-1">
              Mon – Sat: 10:00 AM – 7:30 PM
            </div>
          </div>
        </div>

        {/* Bottom Hairline & Legal */}
        <div className="pt-8 border-t border-neutral-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <div>
            © {new Date().getFullYear()} Realistic Architects & Designs. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <span>Bhiwadi · Rajasthan · NCR</span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 text-neutral-400 hover:text-amber-400 transition-colors cursor-pointer"
              aria-label="Scroll back to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
