import React, { useEffect, useState } from 'react';
import { Project } from '../data/firmData.ts';
import { X, MapPin, Maximize2, Calendar, Check, ArrowRight, Layers } from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onConsultProject: (projectTitle: string) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  onClose,
  onConsultProject,
}) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  useEffect(() => {
    setActiveImageIndex(0);
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-neutral-950/85 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-4xl bg-neutral-900 border border-neutral-800 rounded-xl overflow-hidden shadow-2xl my-auto text-neutral-100"
        role="dialog"
        aria-modal="true"
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-800 bg-neutral-950/50">
          <div>
            <div className="flex items-center gap-2 text-xs text-amber-400 font-medium">
              <span>{project.categoryLabel}</span>
              <span aria-hidden="true" className="text-neutral-600">·</span>
              <span className="text-neutral-400">{project.completionYear}</span>
            </div>
            <h3 className="font-display text-xl sm:text-2xl font-bold text-neutral-100">
              {project.title}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-neutral-400 hover:text-white rounded-lg hover:bg-neutral-800 transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-amber-400"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-6 max-h-[75vh] overflow-y-auto">
          {/* Main Visual Carousel / Gallery */}
          <div className="space-y-3">
            <div className="relative aspect-[16/9] w-full rounded-lg overflow-hidden bg-neutral-950 border border-neutral-800">
              <img
                src={project.gallery[activeImageIndex] || project.coverImage}
                alt={`${project.title} - View ${activeImageIndex + 1}`}
                className="w-full h-full object-cover transition-opacity duration-300"
                referrerPolicy="no-referrer"
              />
            </div>
            {project.gallery.length > 1 && (
              <div className="flex gap-2 overflow-x-auto pb-1">
                {project.gallery.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImageIndex(idx)}
                    className={`relative w-20 h-14 shrink-0 rounded overflow-hidden border-2 transition-all cursor-pointer ${
                      activeImageIndex === idx
                        ? 'border-amber-400 opacity-100'
                        : 'border-transparent opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img
                      src={img}
                      alt={`Thumbnail ${idx + 1}`}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Project Details Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 bg-neutral-950/60 rounded-lg border border-neutral-800/80">
            <div>
              <div className="text-xs text-neutral-500">Location</div>
              <div className="text-xs sm:text-sm font-medium text-neutral-200 mt-0.5 truncate flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                {project.location}
              </div>
            </div>
            <div>
              <div className="text-xs text-neutral-500">Built-Up Area</div>
              <div className="text-xs sm:text-sm font-medium text-neutral-200 mt-0.5 truncate flex items-center gap-1">
                <Maximize2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                {project.area}
              </div>
            </div>
            <div>
              <div className="text-xs text-neutral-500">Handover Year</div>
              <div className="text-xs sm:text-sm font-medium text-neutral-200 mt-0.5 truncate flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                {project.completionYear}
              </div>
            </div>
            <div>
              <div className="text-xs text-neutral-500">Delivery Model</div>
              <div className="text-xs sm:text-sm font-medium text-neutral-200 mt-0.5 truncate flex items-center gap-1">
                <Layers className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                Turnkey Execution
              </div>
            </div>
          </div>

          {/* Narrative Description */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-2">
              Architectural Concept & Spatial Flow
            </h4>
            <p className="text-neutral-300 text-sm leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Key Design Interventions */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-2.5">
              Key Features & Innovations
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {project.features.map((feat, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-neutral-300">
                  <Check className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Material Palette */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-2">
              Specified Material Palette
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.materials.map((mat, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 text-xs font-mono bg-neutral-950 border border-neutral-800 text-neutral-300 rounded"
                >
                  {mat}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 px-6 py-4 border-t border-neutral-800 bg-neutral-950/60">
          <div className="text-xs text-neutral-400 text-center sm:text-left">
            Interested in a similar design for your residence or commercial plot?
          </div>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="flex-1 sm:flex-none px-4 py-2 text-xs font-medium text-neutral-300 hover:text-white bg-neutral-800 hover:bg-neutral-700 rounded transition-colors"
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                onConsultProject(project.title);
              }}
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-neutral-950 bg-amber-400 hover:bg-amber-300 rounded transition-all font-display"
            >
              <span>Consult On Similar Project</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
