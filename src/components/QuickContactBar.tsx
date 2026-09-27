import React from 'react';
import { FIRM_DETAILS } from '../data/firmData.ts';
import { Phone, MessageSquare, Calendar } from 'lucide-react';

interface QuickContactBarProps {
  onOpenConsultation: () => void;
}

export const QuickContactBar: React.FC<QuickContactBarProps> = ({ onOpenConsultation }) => {
  const whatsappUrl = `https://wa.me/${FIRM_DETAILS.whatsapp}?text=${encodeURIComponent(
    `Hello Realistic Architects & Designs, I would like to consult on a project.`
  )}`;

  return (
    <div
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-neutral-950/95 backdrop-blur-lg border-t border-neutral-800/90 px-3 py-2 shadow-2xl flex items-center justify-between gap-2 max-h-[58px]"
      aria-label="Quick mobile contact actions"
    >
      <a
        href={`tel:${FIRM_DETAILS.phones[0].value}`}
        className="flex-1 flex items-center justify-center gap-1.5 py-2 px-2 text-xs font-semibold text-neutral-200 bg-neutral-900 border border-neutral-800 rounded-md active:bg-neutral-800 transition-colors"
      >
        <Phone className="w-3.5 h-3.5 text-amber-400 shrink-0" />
        <span className="truncate">Call Office</span>
      </a>

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 flex items-center justify-center gap-1.5 py-2 px-2 text-xs font-semibold text-emerald-400 bg-neutral-900 border border-neutral-800 rounded-md active:bg-neutral-800 transition-colors"
      >
        <MessageSquare className="w-3.5 h-3.5 shrink-0" />
        <span className="truncate">WhatsApp</span>
      </a>

      <button
        onClick={onOpenConsultation}
        className="flex-1 flex items-center justify-center gap-1.5 py-2 px-2 text-xs font-bold uppercase tracking-wider text-neutral-950 bg-amber-400 rounded-md active:scale-95 transition-all shadow-sm font-display"
      >
        <Calendar className="w-3.5 h-3.5 shrink-0" />
        <span className="truncate">Consult</span>
      </button>
    </div>
  );
};
