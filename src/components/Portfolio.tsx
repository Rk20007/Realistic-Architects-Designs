import React, { useState } from 'react';
import { PROJECTS, Project } from '../data/firmData.ts';
import { MapPin, Maximize2, ArrowUpRight, SlidersHorizontal } from 'lucide-react';
import { ProjectModal } from './ProjectModal.tsx';

interface PortfolioProps {
  onOpenConsultationWithProject: (projectName: string) => void;
}

export const Portfolio: React.FC<PortfolioProps> = ({ onOpenConsultationWithProject }) => {
  const [filter, setFilter] = useState<'all' | 'residential' | 'interior' | 'commercial' | 'sustainable'>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  
  // Before / After slider state
  const [sliderPosition, setSliderPosition] = useState<number>(50);

  const filteredProjects = filter === 'all'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === filter);

  const categories = [
    { id: 'all', label: 'All Works' },
    { id: 'residential', label: 'Villas & Architecture' },
    { id: 'interior', label: 'Luxury Interiors' },
    { id: 'commercial', label: 'Commercial & Retail' },
    { id: 'sustainable', label: 'Eco & Mud Homes' },
  ];

  return (
    <section id="portfolio" className="py-24 bg-neutral-950 relative border-b border-neutral-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="text-xs font-semibold uppercase tracking-wider text-amber-400 mb-3">
              Selected Works
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-100 tracking-tight leading-tight text-balance">
              Executed architecture across Rajasthan & NCR.
            </h2>
            <p className="mt-3 text-base text-neutral-400 max-w-xl text-balance">
              Explore bespoke residential villas, turnkey penthouse interiors, and commercial spaces designed and built by our Bhiwadi studio.
            </p>
          </div>

          {/* Interactive Filter Tabs (Zero-pill discipline: segmented functional control) */}
          <div className="flex items-center gap-1.5 p-1 bg-neutral-900 border border-neutral-800 rounded-lg overflow-x-auto max-w-full">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setFilter(cat.id as any)}
                className={`px-3.5 py-1.5 text-xs font-medium rounded-md transition-all whitespace-nowrap cursor-pointer ${
                  filter === cat.id
                    ? 'bg-amber-400 text-neutral-950 font-semibold shadow-sm'
                    : 'text-neutral-400 hover:text-neutral-200 hover:bg-neutral-800/60'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Interactive Before & After Renovation Feature */}
        <div className="mb-16 bg-neutral-900/60 border border-neutral-800 rounded-xl p-6 sm:p-8 backdrop-blur">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold text-amber-400 mb-1">
                <SlidersHorizontal className="w-3.5 h-3.5" />
                <span>Renovation & Turnkey Transformation</span>
              </div>
              <h3 className="font-display text-xl sm:text-2xl font-bold text-neutral-100">
                Interactive Before vs. After Execution
              </h3>
              <p className="text-xs sm:text-sm text-neutral-400 mt-1">
                Slide left/right to witness how our studio reimagined a bare residential shell in Ashiana Town into an architecturally curated living sanctum.
              </p>
            </div>
            <div className="text-xs text-neutral-400 flex items-center gap-3">
              <span className="flex items-center gap-1.5 font-medium text-neutral-300">
                <span className="w-2 h-2 rounded-full bg-neutral-400 inline-block" /> Bare Site Initial State
              </span>
              <span className="text-neutral-600">/</span>
              <span className="flex items-center gap-1.5 font-medium text-amber-300">
                <span className="w-2 h-2 rounded-full bg-amber-400 inline-block" /> Realistic Architects Handover
              </span>
            </div>
          </div>

          {/* Interactive Split Slider */}
          <div className="relative aspect-[16/9] sm:aspect-[21/9] w-full rounded-lg overflow-hidden border border-neutral-800 select-none">
            {/* "After" Image (Complete Interior Handover) */}
            <img
              src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1800&q=80"
              alt="After turnkey execution: Bespoke modern interior"
              className="absolute inset-0 w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute top-4 right-4 bg-amber-400/90 text-neutral-950 font-display text-xs font-bold px-3 py-1 rounded shadow">
              AFTER · Turnkey Handover
            </div>

            {/* "Before" Image (Clipped by slider position) */}
            <div
              className="absolute inset-y-0 left-0 overflow-hidden"
              style={{ width: `${sliderPosition}%` }}
            >
              <img
                src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1800&q=80"
                alt="Before turnkey execution: Raw unfinished concrete shell"
                className="absolute inset-0 w-full h-full object-cover max-w-none"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-4 left-4 bg-neutral-900/90 text-neutral-200 font-display text-xs font-bold px-3 py-1 rounded shadow border border-neutral-700">
                BEFORE · Unfinished Shell
              </div>
            </div>

            {/* Draggable Divider Handle */}
            <div
              className="absolute inset-y-0 w-1 bg-amber-400 shadow-lg cursor-ew-resize flex items-center justify-center pointer-events-none"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="w-8 h-8 rounded-full bg-amber-400 text-neutral-950 flex items-center justify-center font-bold text-xs shadow-xl border-2 border-neutral-950">
                ↔
              </div>
            </div>

            {/* Hidden Input Range for smooth drag & touch */}
            <input
              type="range"
              min="0"
              max="100"
              value={sliderPosition}
              onChange={(e) => setSliderPosition(Number(e.target.value))}
              aria-label="Comparison slider between before and after renovation"
              className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-20"
            />
          </div>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="group bg-neutral-900/60 border border-neutral-800/80 rounded-xl overflow-hidden hover:border-neutral-600 transition-all duration-300 flex flex-col cursor-pointer hover:shadow-xl hover:shadow-black/40"
            >
              {/* Project Card Image */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-neutral-950">
                <img
                  src={project.coverImage}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-neutral-950/10 to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-neutral-300">
                  <span className="bg-neutral-950/80 px-2.5 py-1 rounded backdrop-blur border border-neutral-800/60 text-amber-300 font-medium">
                    {project.categoryLabel}
                  </span>
                  <span className="bg-neutral-950/80 px-2.5 py-1 rounded backdrop-blur text-neutral-300 tabular-nums">
                    {project.completionYear}
                  </span>
                </div>
              </div>

              {/* Project Card Content */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-start justify-between gap-2 mb-1.5">
                    <h3 className="font-display text-lg font-bold text-neutral-100 group-hover:text-amber-300 transition-colors">
                      {project.title}
                    </h3>
                    <ArrowUpRight className="w-4 h-4 text-neutral-500 group-hover:text-amber-300 shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                  <p className="text-xs text-neutral-400 line-clamp-2 leading-relaxed mb-4">
                    {project.description}
                  </p>
                </div>

                {/* Card Metadata (Zero-pill discipline: unboxed with bullet separator) */}
                <div className="pt-3 border-t border-neutral-800/80 flex items-center justify-between text-xs text-neutral-400">
                  <div className="flex items-center gap-1 truncate">
                    <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    <span className="truncate">{project.location}</span>
                  </div>
                  <div className="flex items-center gap-1 font-mono text-neutral-300 shrink-0">
                    <Maximize2 className="w-3 h-3 text-neutral-500" />
                    <span>{project.area}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onConsultProject={(title) => {
          setSelectedProject(null);
          onOpenConsultationWithProject(title);
        }}
      />
    </section>
  );
};
