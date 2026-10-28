import React from 'react';
import { PROJECT_METADATA } from '../data/f1ProjectData';
import { ExternalLink, ArrowUp, Flag } from 'lucide-react';

interface FooterProps {
  onOpenSubmissionGuide: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenSubmissionGuide }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-[#06080e] border-t border-slate-900 py-12 text-xs text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-900">
          <div className="flex items-center gap-3">
            <span className="w-2 h-5 bg-[#e10600] rounded-xs"></span>
            <div>
              <div className="text-sm font-bold text-white tracking-wider uppercase font-['Outfit']">
                FORMULA 1 Race Intelligence Report (2010–2026)
              </div>
              <div className="text-[11px] text-slate-400 mt-0.5">
                Skill Wallet Individual Capstone Project · Data Analytics with Tableau
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-xs text-slate-400">
            <a href="#tableau-section" className="hover:text-white transition-colors">Tableau Viz</a>
            <a href="#scenarios" className="hover:text-white transition-colors">Scenarios</a>
            <a href="#features" className="hover:text-white transition-colors">Features</a>
            <a href="#methodology" className="hover:text-white transition-colors">Methodology</a>
            <a href="#audio-demo" className="hover:text-white transition-colors">Audio & Demo</a>
            <a href="#documentation" className="hover:text-white transition-colors">Documentation</a>
            <button
              onClick={onOpenSubmissionGuide}
              className="text-[#e10600] hover:underline font-semibold cursor-pointer"
            >
              Skill Wallet Guide
            </button>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-400">
          <div>
            Data source: 6,464 Formula 1 race records (2010–2026). Published on Tableau Public for academic evaluation.
          </div>

          <div className="flex items-center gap-4">
            <a
              href={PROJECT_METADATA.tableauDirectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-slate-200 transition-colors flex items-center gap-1"
            >
              <span>Tableau Public Viz</span>
              <ExternalLink className="w-3 h-3" />
            </a>
            <button
              onClick={scrollToTop}
              className="hover:text-white transition-colors flex items-center gap-1 cursor-pointer"
              title="Back to Top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
