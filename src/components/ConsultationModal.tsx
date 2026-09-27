import React, { useState, useEffect } from 'react';
import { FIRM_DETAILS } from '../data/firmData.ts';
import { X, Send, CheckCircle, Phone, MessageSquare } from 'lucide-react';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  prefillNote?: string;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({
  isOpen,
  onClose,
  prefillNote = '',
}) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    serviceType: 'Architecture & Construction',
    note: prefillNote,
  });

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (prefillNote) {
      setFormData((prev) => ({ ...prev, note: prefillNote }));
    }
  }, [prefillNote]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 700);
  };

  const whatsappUrl = `https://wa.me/${FIRM_DETAILS.whatsapp}?text=${encodeURIComponent(
    `Hello Realistic Architects, I would like to schedule an in-studio consultation for my project.`
  )}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-neutral-950/85 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-lg bg-neutral-900 border border-neutral-800 rounded-xl overflow-hidden shadow-2xl my-auto text-neutral-100"
        role="dialog"
        aria-modal="true"
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-800 bg-neutral-950/60">
          <div>
            <div className="text-xs font-semibold text-amber-400">
              Realistic Architects & Designs
            </div>
            <h3 className="font-display text-xl font-bold text-neutral-100">
              Studio Consultation
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-neutral-400 hover:text-white rounded-lg hover:bg-neutral-800 transition-colors"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6">
          {submitted ? (
            <div className="py-8 text-center space-y-4">
              <div className="w-12 h-12 bg-amber-400/10 border border-amber-400/30 rounded-full flex items-center justify-center mx-auto text-amber-400">
                <CheckCircle className="w-6 h-6" />
              </div>
              <h4 className="font-display text-xl font-bold text-neutral-100">
                Appointment Requested
              </h4>
              <p className="text-xs text-neutral-300 max-w-sm mx-auto leading-relaxed">
                Thank you, <span className="font-semibold text-amber-300">{formData.name}</span>. Our studio at Sukham Tower will contact you at <span className="font-mono text-neutral-200">{formData.phone}</span> to schedule an in-person or virtual design review.
              </p>
              <div className="pt-2">
                <button
                  onClick={() => {
                    setSubmitted(false);
                    onClose();
                  }}
                  className="px-5 py-2 text-xs font-semibold uppercase tracking-wider bg-neutral-800 hover:bg-neutral-700 text-neutral-200 rounded transition-colors"
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-neutral-300 mb-1">
                  Full Name <span className="text-amber-400">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3.5 py-2 text-xs bg-neutral-950 border border-neutral-800 rounded-lg text-neutral-100 placeholder-neutral-600 focus:outline-none focus:border-amber-400"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-neutral-300 mb-1">
                    Phone Number <span className="text-amber-400">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 93143..."
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2 text-xs bg-neutral-950 border border-neutral-800 rounded-lg text-neutral-100 placeholder-neutral-600 focus:outline-none focus:border-amber-400 font-mono"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-neutral-300 mb-1">
                    Service Required
                  </label>
                  <select
                    value={formData.serviceType}
                    onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                    className="w-full px-3.5 py-2 text-xs bg-neutral-950 border border-neutral-800 rounded-lg text-neutral-100 focus:outline-none focus:border-amber-400"
                  >
                    <option value="Architecture & Construction">Architecture & Construction</option>
                    <option value="Turnkey Interior">Turnkey Interior Design</option>
                    <option value="Commercial / Office Fit-out">Commercial / Office Fit-out</option>
                    <option value="Eco Mud House">Eco Mud House / Resort</option>
                    <option value="3D Walkthrough / Elevation">3D Elevation & Modeling</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-neutral-300 mb-1">
                  Project Notes / Location
                </label>
                <textarea
                  rows={3}
                  placeholder="Tell us about the plot or flat location in Bhiwadi/NCR..."
                  value={formData.note}
                  onChange={(e) => setFormData({ ...formData, note: e.target.value })}
                  className="w-full px-3.5 py-2 text-xs bg-neutral-950 border border-neutral-800 rounded-lg text-neutral-100 placeholder-neutral-600 focus:outline-none focus:border-amber-400"
                />
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 text-xs font-bold uppercase tracking-wider text-neutral-950 bg-amber-400 hover:bg-amber-300 active:scale-[0.98] transition-all rounded shadow cursor-pointer font-display disabled:opacity-50"
              >
                {submitting ? <span>Confirming...</span> : <span>Confirm Consultation Request</span>}
              </button>

              <div className="relative py-2 flex items-center justify-center">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-neutral-800" />
                </div>
                <span className="relative bg-neutral-900 px-3 text-[11px] text-neutral-500 uppercase tracking-wider">
                  Or Connect Directly
                </span>
              </div>

              <div className="grid grid-cols-2 gap-2">
                <a
                  href={`tel:${FIRM_DETAILS.phones[0].value}`}
                  className="flex items-center justify-center gap-1.5 py-2 px-3 text-xs font-medium text-neutral-300 bg-neutral-950 hover:bg-neutral-800 border border-neutral-800 rounded transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-amber-400" />
                  <span>Call Studio</span>
                </a>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 py-2 px-3 text-xs font-medium text-emerald-400 bg-neutral-950 hover:bg-neutral-800 border border-neutral-800 rounded transition-colors"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
