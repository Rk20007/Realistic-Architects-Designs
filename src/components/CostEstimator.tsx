import React, { useState, useMemo } from 'react';
import { Calculator, ArrowRight, CheckCircle2, Clock, Sparkles } from 'lucide-react';

interface CostEstimatorProps {
  onOpenConsultationWithScope: (details: {
    propertyType: string;
    scope: string;
    area: number;
    tier: string;
    estimatedCost: string;
  }) => void;
}

export const CostEstimator: React.FC<CostEstimatorProps> = ({ onOpenConsultationWithScope }) => {
  const [propertyType, setPropertyType] = useState<'villa' | 'apartment' | 'office' | 'retail'>('villa');
  const [scope, setScope] = useState<'architecture_turnkey' | 'interior_turnkey' | 'renovation'>('interior_turnkey');
  const [area, setArea] = useState<number>(2400);
  const [tier, setTier] = useState<'premium' | 'luxury' | 'ultra'>('luxury');

  const propertyTypes = [
    { id: 'villa', label: 'Independent Villa / Kothi' },
    { id: 'apartment', label: 'Apartment / Penthouse' },
    { id: 'office', label: 'Corporate Office' },
    { id: 'retail', label: 'Retail / Showroom' },
  ];

  const scopes = [
    {
      id: 'interior_turnkey',
      label: 'Turnkey Luxury Interior',
      desc: 'Modular kitchen, wardrobes, false ceiling, lighting, paint, stone & woodwork',
      baseRate: { premium: 1600, luxury: 2500, ultra: 3800 },
      durationWeeks: { min: 10, max: 14 }
    },
    {
      id: 'architecture_turnkey',
      label: 'Full Architecture + Construction',
      desc: 'Foundation, civil structure, facade engineering, MEP & complete architectural shell',
      baseRate: { premium: 2200, luxury: 3200, ultra: 4800 },
      durationWeeks: { min: 24, max: 36 }
    },
    {
      id: 'renovation',
      label: 'Spatial Renovation & Facade',
      desc: 'Layout re-planning, floor replacement, modern facade uplift & MEP overhaul',
      baseRate: { premium: 1100, luxury: 1800, ultra: 2800 },
      durationWeeks: { min: 8, max: 12 }
    },
  ];

  const currentScopeObj = scopes.find((s) => s.id === scope) || scopes[0];

  const { calculatedBudget, formattedRange, estimatedTimeline } = useMemo(() => {
    const rate = currentScopeObj.baseRate[tier];
    // Adjust rate slightly based on property type complexity
    const factorMap = { villa: 1.05, apartment: 1.0, office: 0.95, retail: 1.1 };
    const adjustedRate = rate * factorMap[propertyType];

    const totalMin = Math.round(area * adjustedRate * 0.95);
    const totalMax = Math.round(area * adjustedRate * 1.1);

    const formatToIndianLakhs = (val: number) => {
      const inLakhs = val / 100000;
      if (inLakhs >= 100) {
        return `₹${(inLakhs / 100).toFixed(2)} Cr`;
      }
      return `₹${inLakhs.toFixed(1)} Lakhs`;
    };

    const avg = (totalMin + totalMax) / 2;
    const duration = `${currentScopeObj.durationWeeks.min} – ${currentScopeObj.durationWeeks.max} Weeks`;

    return {
      calculatedBudget: avg,
      formattedRange: `${formatToIndianLakhs(totalMin)} – ${formatToIndianLakhs(totalMax)}`,
      estimatedTimeline: duration,
    };
  }, [propertyType, scope, area, tier, currentScopeObj]);

  const handleRequestBoq = () => {
    const propertyLabel = propertyTypes.find((p) => p.id === propertyType)?.label || propertyType;
    onOpenConsultationWithScope({
      propertyType: propertyLabel,
      scope: currentScopeObj.label,
      area,
      tier: tier === 'premium' ? 'Premium Modern' : tier === 'luxury' ? 'Signature Luxury' : 'Ultra-Bespoke',
      estimatedCost: formattedRange,
    });
  };

  return (
    <section id="estimator" className="py-24 bg-[#0c0d0e] relative border-b border-neutral-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-400 mb-3">
            <Calculator className="w-4 h-4" />
            <span>Interactive Feasibility Tool</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-100 tracking-tight leading-tight text-balance">
            Estimate your project timeline & investment.
          </h2>
          <p className="mt-3 text-base text-neutral-400 max-w-2xl text-balance">
            Transparent, benchmarked estimations based on prevailing material costs, craftsmanship grades, and regional construction rates in Bhiwadi & NCR.
          </p>
        </div>

        {/* Estimator Card Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Controls Box */}
          <div className="lg:col-span-7 bg-neutral-900/80 border border-neutral-800 rounded-xl p-6 sm:p-8 space-y-7 backdrop-blur">
            {/* Step 1: Property Type */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-3">
                1. Select Property Classification
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {propertyTypes.map((t) => (
                  <button
                    key={t.id}
                    onClick={() => setPropertyType(t.id as any)}
                    className={`px-3 py-2.5 text-xs font-medium rounded-lg border transition-all text-center cursor-pointer ${
                      propertyType === t.id
                        ? 'bg-amber-400 text-neutral-950 border-amber-400 font-semibold shadow-sm'
                        : 'bg-neutral-950 border-neutral-800 text-neutral-300 hover:border-neutral-700'
                    }`}
                  >
                    {t.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Project Scope */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-3">
                2. Scope of Engagement
              </label>
              <div className="grid grid-cols-1 gap-2.5">
                {scopes.map((s) => (
                  <button
                    key={s.id}
                    onClick={() => setScope(s.id as any)}
                    className={`w-full text-left p-3.5 rounded-lg border transition-all cursor-pointer ${
                      scope === s.id
                        ? 'bg-neutral-800 border-amber-400 shadow-sm'
                        : 'bg-neutral-950 border-neutral-800 text-neutral-300 hover:border-neutral-700'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-semibold text-neutral-100">{s.label}</span>
                      {scope === s.id && <CheckCircle2 className="w-4 h-4 text-amber-400" />}
                    </div>
                    <p className="text-xs text-neutral-400 mt-1">{s.desc}</p>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Built-Up Area Slider */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
                  3. Approximate Built-Up Area
                </label>
                <span className="font-mono text-base font-bold text-amber-400 tabular-nums">
                  {area.toLocaleString()} sq.ft
                </span>
              </div>
              <input
                type="range"
                min="600"
                max="10000"
                step="100"
                value={area}
                onChange={(e) => setArea(Number(e.target.value))}
                className="w-full h-2 bg-neutral-950 rounded-lg appearance-none cursor-pointer accent-amber-400 border border-neutral-800"
              />
              <div className="flex justify-between text-[11px] text-neutral-500 mt-1 font-mono">
                <span>600 sq.ft (Studio/1BHK)</span>
                <span>2,500 sq.ft (3-4 BHK)</span>
                <span>10,000 sq.ft (Estate/Villa)</span>
              </div>
            </div>

            {/* Step 4: Material Specification Grade */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-3">
                4. Material & Craftsmanship Tier
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                {[
                  { id: 'premium', title: 'Premium Contemporary', note: 'Standard branded fittings, polished vitrified tiles, acrylic laminates' },
                  { id: 'luxury', title: 'Signature Luxury', note: 'Italian marble, veneer millwork, Blum hardware, warm cove lighting' },
                  { id: 'ultra', title: 'Ultra Bespoke', note: 'Exotic stone, smart home automation, solid teak joinery, custom brass details' },
                ].map((t) => (
                  <button
                    key={t.id}
                    onClick={() => setTier(t.id as any)}
                    className={`p-3 rounded-lg border text-left transition-all cursor-pointer ${
                      tier === t.id
                        ? 'bg-neutral-800 border-amber-400'
                        : 'bg-neutral-950 border-neutral-800 hover:border-neutral-700'
                    }`}
                  >
                    <div className="text-xs font-semibold text-neutral-100">{t.title}</div>
                    <div className="text-[11px] text-neutral-400 mt-1 line-clamp-2">{t.note}</div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Results Summary Box */}
          <div className="lg:col-span-5 bg-gradient-to-br from-neutral-900 to-neutral-950 border border-neutral-800 rounded-xl p-6 sm:p-8 space-y-6 shadow-xl">
            <div className="flex items-center gap-2 text-xs font-semibold text-amber-400 uppercase tracking-wider">
              <Sparkles className="w-4 h-4" />
              <span>Projected Benchmark</span>
            </div>

            <div className="p-4 bg-neutral-950/70 border border-neutral-800/80 rounded-lg">
              <div className="text-xs text-neutral-400 mb-1">Estimated Investment Range</div>
              <div className="font-display text-2xl sm:text-3xl font-extrabold text-neutral-100 tabular-nums">
                {formattedRange}
              </div>
              <div className="text-[11px] text-neutral-500 mt-1">
                *Subject to site survey, exact architectural drawing & final BOQ approval.
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 text-xs">
              <div className="p-3 bg-neutral-950/40 border border-neutral-800/80 rounded-lg">
                <div className="text-neutral-500 flex items-center gap-1.5 mb-1">
                  <Clock className="w-3.5 h-3.5 text-amber-400" />
                  Estimated Timeline
                </div>
                <div className="font-semibold text-neutral-200">{estimatedTimeline}</div>
              </div>

              <div className="p-3 bg-neutral-950/40 border border-neutral-800/80 rounded-lg">
                <div className="text-neutral-500 mb-1">Office Location</div>
                <div className="font-semibold text-neutral-200">151 Sukham Tower</div>
              </div>
            </div>

            <div className="space-y-2 text-xs text-neutral-300 pt-2 border-t border-neutral-800/80">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>Includes 3D architectural renders & VR walkthrough</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>Vastu Shastra directional alignment check</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>Dedicated site project supervisor in Bhiwadi</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>Transparent itemized Bill of Quantities (BOQ)</span>
              </div>
            </div>

            <button
              onClick={handleRequestBoq}
              className="w-full flex items-center justify-center gap-2 py-3.5 px-4 text-xs font-bold uppercase tracking-wider text-neutral-950 bg-amber-400 hover:bg-amber-300 active:scale-[0.98] transition-all rounded shadow cursor-pointer font-display"
            >
              <span>Request Detailed BOQ & Drawings</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
