import React from 'react';
import { LIMITATIONS_AND_CONCLUSION, PROJECT_METADATA } from '../data/f1ProjectData';
import { AlertTriangle, Award, CheckCircle, ExternalLink, Github, BookOpen, Layers, ShieldCheck } from 'lucide-react';

interface DocProps {
  onOpenSubmissionGuide: () => void;
}

export const DocumentationConclusion: React.FC<DocProps> = ({ onOpenSubmissionGuide }) => {
  return (
    <section id="documentation" className="py-16 bg-[#080b12] border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#e10600]">
          <span>Academic & Technical Evaluation</span>
          <span aria-hidden="true">·</span>
          <span>Capstone Synthesis</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white uppercase tracking-tight mt-1 font-['Outfit']">
          Documentation, Limitations & Conclusion
        </h2>
        <p className="text-sm text-slate-300 mt-1 max-w-3xl mb-10">
          Rigorous methodological caveats regarding Formula 1 historical scoring shifts, paired with strategic takeaways for telemetry stakeholders.
        </p>

        {/* Analytical Limitations Grid */}
        <div className="mb-14">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-400 mb-4">
            <AlertTriangle className="w-4 h-4 text-amber-400" />
            <span>Analytical Limitations & Boundary Conditions</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {LIMITATIONS_AND_CONCLUSION.limitations.map((lim, idx) => (
              <div
                key={idx}
                className="p-5 rounded-lg bg-slate-900/70 border border-slate-800 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono font-bold text-slate-400 mb-2">
                    <span className="text-[#e10600]">L-0{idx + 1}</span>
                    <span className="text-white">{lim.title}</span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {lim.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Conclusion Card */}
        <div className="p-6 sm:p-8 rounded-xl bg-slate-900/90 border border-slate-800 shadow-xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-emerald-400 mb-3">
            <CheckCircle className="w-4 h-4 text-emerald-400" />
            <span>Project Conclusion & Strategic Synthesis</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-white font-['Outfit'] mb-4">
            Transforming High-Velocity Telemetry Into Competitive Advantage
          </h3>
          <p className="text-sm sm:text-base text-slate-200 leading-relaxed mb-6">
            {LIMITATIONS_AND_CONCLUSION.conclusionText}
          </p>

          <div className="pt-6 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3 text-xs text-slate-400">
              <span className="font-semibold text-white">Curriculum Verified:</span>
              <span>Data Analytics with Tableau</span>
              <span aria-hidden="true">·</span>
              <span className="font-mono tabular-nums">6,464 Records</span>
            </div>

            <div className="flex items-center gap-3">
              <a
                href={PROJECT_METADATA.tableauDirectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white bg-[#e10600] hover:bg-[#c00500] rounded transition-colors flex items-center gap-1.5"
              >
                <span>Launch Tableau Viz</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
              <button
                onClick={onOpenSubmissionGuide}
                className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-slate-200 hover:text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded transition-colors flex items-center gap-1.5 cursor-pointer"
              >
                <Github className="w-3.5 h-3.5" />
                <span>GitHub & Submission Guide</span>
              </button>
            </div>
          </div>
        </div>

        {/* Capstone Metadata Summary Box */}
        <div className="p-5 rounded-lg bg-slate-950 border border-slate-800 text-xs text-slate-400 grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div>
            <div className="text-slate-500 uppercase text-[10px] font-mono">Project</div>
            <div className="text-white font-medium mt-0.5 truncate">F1 Race Intelligence (2010–2026)</div>
          </div>
          <div>
            <div className="text-slate-500 uppercase text-[10px] font-mono">Program</div>
            <div className="text-white font-medium mt-0.5">Data Analytics with Tableau</div>
          </div>
          <div>
            <div className="text-slate-500 uppercase text-[10px] font-mono">Platform</div>
            <div className="text-white font-medium mt-0.5">Skill Wallet Capstone</div>
          </div>
          <div>
            <div className="text-slate-500 uppercase text-[10px] font-mono">Evaluation State</div>
            <div className="text-amber-400 font-medium mt-0.5">Awaiting Link Updates</div>
          </div>
        </div>
      </div>
    </section>
  );
};
