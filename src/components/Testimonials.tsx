import React, { useState } from 'react';
import { REVIEWS, FAQ_ITEMS } from '../data/firmData.ts';
import { Star, ChevronDown, ChevronUp, Quote } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <section className="py-24 bg-[#0c0d0e] relative border-b border-neutral-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Testimonials Header */}
        <div className="max-w-3xl mb-14">
          <div className="text-xs font-semibold uppercase tracking-wider text-amber-400 mb-3">
            Client Endorsements
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-100 tracking-tight leading-tight text-balance">
            Trusted by villa owners, developers & industrialists.
          </h2>
          <p className="mt-3 text-base text-neutral-400 max-w-xl text-balance">
            Real feedback from clients who commissioned architecture, interior transformations, and corporate spaces with our Bhiwadi team.
          </p>
        </div>

        {/* Testimonials Grid (Claim-to-proof adjacency) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
          {REVIEWS.map((rev) => (
            <div
              key={rev.id}
              className="bg-neutral-900/60 border border-neutral-800 rounded-xl p-6 sm:p-7 flex flex-col justify-between backdrop-blur relative"
            >
              <Quote className="w-8 h-8 text-neutral-800 absolute top-6 right-6 pointer-events-none" />

              <div>
                {/* 5-star rating */}
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                {/* Comment */}
                <p className="text-sm text-neutral-300 leading-relaxed italic mb-6">
                  "{rev.comment}"
                </p>
              </div>

              {/* Author Info (Unboxed clean metadata) */}
              <div className="pt-4 border-t border-neutral-800 flex items-center justify-between">
                <div>
                  <div className="font-display font-semibold text-neutral-100 text-sm">
                    {rev.author}
                  </div>
                  <div className="text-xs text-neutral-400">
                    {rev.role} · <span className="text-neutral-300">{rev.location}</span>
                  </div>
                </div>
                <div className="text-[11px] font-mono text-neutral-500">
                  {rev.date}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* FAQ Accordion Section */}
        <div className="max-w-4xl mx-auto pt-8">
          <div className="text-center mb-10">
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-neutral-100 mb-2">
              Frequently Asked Questions
            </h3>
            <p className="text-xs sm:text-sm text-neutral-400">
              Clear answers regarding our design fees, site supervision, and architectural process.
            </p>
          </div>

          <div className="space-y-3">
            {FAQ_ITEMS.map((item, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  className="bg-neutral-900/40 border border-neutral-800/80 rounded-lg overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="w-full flex items-center justify-between p-4 sm:p-5 text-left text-sm font-semibold text-neutral-200 hover:text-amber-300 transition-colors cursor-pointer"
                  >
                    <span>{item.q}</span>
                    {isOpen ? (
                      <ChevronUp className="w-4 h-4 text-amber-400 shrink-0 ml-4" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-neutral-500 shrink-0 ml-4" />
                    )}
                  </button>
                  {isOpen && (
                    <div className="px-4 sm:px-5 pb-5 text-xs sm:text-sm text-neutral-400 leading-relaxed border-t border-neutral-800/50 pt-3">
                      {item.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
