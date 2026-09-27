import React, { useState, useEffect } from 'react';
import { FIRM_DETAILS } from '../data/firmData.ts';
import { Phone, Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onOpenConsultation: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenConsultation }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Architecture', href: '#services' },
    { label: 'Interiors', href: '#services' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Estimator', href: '#estimator' },
    { label: 'Studio', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-neutral-950/90 backdrop-blur-md border-b border-neutral-800/80 py-3 shadow-lg shadow-black/20'
          : 'bg-gradient-to-b from-neutral-950/90 via-neutral-950/40 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Zone 1: Single text element wordmark */}
          <a
            href="#"
            className="group flex flex-col text-left focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-amber-400"
          >
            <span className="font-display text-lg sm:text-xl font-bold tracking-tight text-neutral-100 group-hover:text-amber-300 transition-colors">
              Realistic Architects & Designs
            </span>
          </a>

          {/* Zone 2: 4-6 clean text navigation links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-neutral-300">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-amber-300 transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-amber-400 hover:after:w-full after:transition-all"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: 1-2 primary actions */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={`tel:${FIRM_DETAILS.phones[0].value}`}
              className="inline-flex items-center gap-2 px-3 py-2 text-xs font-medium text-neutral-300 hover:text-white transition-colors"
              title="Call studio directly"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <span className="whitespace-nowrap tabular-nums">{FIRM_DETAILS.phones[0].display}</span>
            </a>
            <button
              onClick={onOpenConsultation}
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold tracking-wide uppercase text-neutral-950 bg-amber-400 hover:bg-amber-300 active:scale-95 transition-all rounded shadow-sm whitespace-nowrap cursor-pointer"
            >
              <span>Consult Studio</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile hamburger toggle */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-neutral-300 hover:text-white rounded focus-visible:ring-1 focus-visible:ring-amber-400"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile dropdown menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 pt-4 pb-5 border-t border-neutral-800/80 bg-neutral-950/95 backdrop-blur-xl px-2 space-y-3 rounded-b-xl">
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 text-sm font-medium text-neutral-200 hover:text-amber-300 hover:bg-neutral-900 rounded-md transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="pt-3 border-t border-neutral-800/60 flex flex-col gap-2">
              <a
                href={`tel:${FIRM_DETAILS.phones[0].value}`}
                className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-neutral-300 hover:text-white bg-neutral-900 rounded-md"
              >
                <Phone className="w-4 h-4 text-amber-400" />
                <span>Call {FIRM_DETAILS.phones[0].display}</span>
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenConsultation();
                }}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold tracking-wide uppercase text-neutral-950 bg-amber-400 hover:bg-amber-300 rounded shadow font-display"
              >
                <span>Book Architectural Consultation</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
