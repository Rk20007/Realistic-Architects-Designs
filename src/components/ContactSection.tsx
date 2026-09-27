import React, { useState } from 'react';
import { FIRM_DETAILS } from '../data/firmData.ts';
import { Phone, MapPin, Clock, Send, MessageSquare, CheckCircle, ArrowUpRight } from 'lucide-react';

interface ContactSectionProps {
  initialScopeDetails?: {
    propertyType: string;
    scope: string;
    area: number;
    tier: string;
    estimatedCost: string;
  } | null;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ initialScopeDetails }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    projectType: initialScopeDetails?.propertyType || 'Residential Villa',
    location: '',
    message: initialScopeDetails
      ? `Estimated project scope: ${initialScopeDetails.scope} for ${initialScopeDetails.area} sq.ft (${initialScopeDetails.tier}). Estimated range: ${initialScopeDetails.estimatedCost}.`
      : '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    setIsSubmitting(true);
    // Simulate real brief confirmation
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 800);
  };

  const whatsappUrl = `https://wa.me/${FIRM_DETAILS.whatsapp}?text=${encodeURIComponent(
    `Hello Realistic Architects & Designs, I am looking to consult regarding an architectural/interior project in Bhiwadi/NCR.`
  )}`;

  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    'Realistic Architects Sukham Tower Bhiwadi'
  )}`;

  return (
    <section id="contact" className="py-24 bg-neutral-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Contact & Sukham Tower Location Info */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-amber-400 mb-3">
                Studio Engagement
              </div>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-neutral-100 tracking-tight leading-tight">
                Visit our Bhiwadi studio or schedule a site visit.
              </h2>
              <p className="mt-3 text-sm text-neutral-400 leading-relaxed">
                Whether you have a plot ready for construction or an apartment shell awaiting interior craftsmanship, we look forward to reviewing your vision.
              </p>
            </div>

            {/* Studio Address Card */}
            <div className="p-5 bg-neutral-900/60 border border-neutral-800 rounded-xl space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs font-semibold text-neutral-200">
                    Studio Address
                  </div>
                  <div className="text-sm text-neutral-300 font-medium mt-0.5">
                    {FIRM_DETAILS.address.suite}, {FIRM_DETAILS.address.building}
                  </div>
                  <div className="text-xs text-neutral-400">
                    {FIRM_DETAILS.address.area}
                  </div>
                  <div className="text-xs text-neutral-400">
                    {FIRM_DETAILS.address.city}, {FIRM_DETAILS.address.state} – {FIRM_DETAILS.address.pincode}
                  </div>
                  <a
                    href={mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-amber-400 hover:text-amber-300 mt-2 font-medium"
                  >
                    <span>Open in Google Maps</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              <div className="pt-3 border-t border-neutral-800 flex items-start gap-3">
                <Clock className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs font-semibold text-neutral-200">
                    Office Hours
                  </div>
                  <div className="text-xs text-neutral-300 mt-0.5">
                    {FIRM_DETAILS.hours}
                  </div>
                  <div className="text-[11px] text-neutral-500 mt-0.5">
                    Walk-ins welcome during working hours
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Phone Numbers & WhatsApp */}
            <div className="space-y-3">
              <div className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
                Direct Contact Lines
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {FIRM_DETAILS.phones.map((phone) => (
                  <a
                    key={phone.value}
                    href={`tel:${phone.value}`}
                    className="flex items-center gap-2.5 p-3 rounded-lg bg-neutral-900 border border-neutral-800 hover:border-neutral-700 hover:bg-neutral-850 transition-colors"
                  >
                    <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                    <div>
                      <div className="text-[11px] text-neutral-400">
                        {phone.primary ? 'Primary Line' : 'Studio Mobile'}
                      </div>
                      <div className="text-xs font-semibold text-neutral-200 tabular-nums">
                        {phone.display}
                      </div>
                    </div>
                  </a>
                ))}
              </div>

              {/* WhatsApp Fast Connect */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold tracking-wide uppercase transition-all shadow-md font-display"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Chat Instantly on WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Right Column: Lead Capture Form */}
          <div className="lg:col-span-7 bg-neutral-900/80 border border-neutral-800 rounded-xl p-6 sm:p-8 backdrop-blur">
            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-14 h-14 bg-amber-400/10 border border-amber-400/30 rounded-full flex items-center justify-center mx-auto text-amber-400">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h3 className="font-display text-2xl font-bold text-neutral-100">
                  Consultation Request Received
                </h3>
                <p className="text-sm text-neutral-300 max-w-md mx-auto">
                  Thank you, <span className="font-semibold text-amber-300">{formData.name}</span>. An architect from Realistic Architects & Designs will review your project brief and call you at <span className="font-mono text-neutral-200">{formData.phone}</span> within 24 business hours.
                </p>
                <div className="pt-4">
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        phone: '',
                        email: '',
                        projectType: 'Residential Villa',
                        location: '',
                        message: '',
                      });
                    }}
                    className="text-xs text-amber-400 hover:underline font-medium"
                  >
                    Submit another project query
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <h3 className="font-display text-xl font-bold text-neutral-100 mb-1">
                    Book an Architectural & Interior Consultation
                  </h3>
                  <p className="text-xs text-neutral-400">
                    Fill in your project requirements for an in-studio drawing review or site evaluation.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-neutral-300 mb-1.5">
                      Your Full Name <span className="text-amber-400">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ramesh Kumar"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs bg-neutral-950 border border-neutral-800 rounded-lg text-neutral-100 placeholder-neutral-600 focus:outline-none focus:border-amber-400"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-neutral-300 mb-1.5">
                      Phone Number <span className="text-amber-400">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. +91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs bg-neutral-950 border border-neutral-800 rounded-lg text-neutral-100 placeholder-neutral-600 focus:outline-none focus:border-amber-400 font-mono"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-neutral-300 mb-1.5">
                      Email Address (Optional)
                    </label>
                    <input
                      type="email"
                      placeholder="e.g. ramesh@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs bg-neutral-950 border border-neutral-800 rounded-lg text-neutral-100 placeholder-neutral-600 focus:outline-none focus:border-amber-400"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-neutral-300 mb-1.5">
                      Project Classification
                    </label>
                    <select
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs bg-neutral-950 border border-neutral-800 rounded-lg text-neutral-100 focus:outline-none focus:border-amber-400"
                    >
                      <option value="Residential Villa">Independent Villa / Kothi</option>
                      <option value="Luxury Apartment">Apartment Interior (Ashiana/BDI/Avalon)</option>
                      <option value="Commercial Office">Commercial / Corporate Office</option>
                      <option value="Eco Mud House">Eco-Conscious / Mud House Retreat</option>
                      <option value="Turnkey Renovation">Renovation & Elevation Uplift</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-neutral-300 mb-1.5">
                    Plot / Site Location in Bhiwadi or NCR
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Sector 2, Alwar Bypass Road, Dharuhera, or Neemrana"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-xs bg-neutral-950 border border-neutral-800 rounded-lg text-neutral-100 placeholder-neutral-600 focus:outline-none focus:border-amber-400"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-neutral-300 mb-1.5">
                    Project Notes & Dimensions
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Provide details about plot size (e.g. 250 sq.yd), timeline, Vastu preferences, or design ideas..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-xs bg-neutral-950 border border-neutral-800 rounded-lg text-neutral-100 placeholder-neutral-600 focus:outline-none focus:border-amber-400 leading-relaxed"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 py-3 px-6 text-xs font-bold uppercase tracking-wider text-neutral-950 bg-amber-400 hover:bg-amber-300 active:scale-[0.98] transition-all rounded shadow cursor-pointer font-display disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>Sending Brief...</span>
                    ) : (
                      <>
                        <Send className="w-3.5 h-3.5" />
                        <span>Send Project Brief to Realistic Architects</span>
                      </>
                    )}
                  </button>
                  <p className="text-[11px] text-neutral-500 text-center mt-2">
                    Direct confidential review by principal architects. No spam.
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
