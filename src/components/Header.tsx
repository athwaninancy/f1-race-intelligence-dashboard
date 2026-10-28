import React, { useState } from 'react';
import { ExternalLink, Compass, BarChart3, Users, Volume2, BookOpen, Github } from 'lucide-react';
import { PROJECT_METADATA } from '../data/f1ProjectData';

interface HeaderProps {
  onOpenSubmissionGuide: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenSubmissionGuide }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-[#080b12]/95 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8 h-16">
          {/* Zone 1: Single text element wordmark */}
          <a href="#" className="flex items-center gap-3 text-lg font-bold tracking-tight text-white whitespace-nowrap shrink-0 group">
            <span className="w-2.5 h-6 bg-[#e10600] rounded-xs group-hover:scale-y-110 transition-transform"></span>
            <span className="font-extrabold uppercase tracking-wider font-['Outfit']">
              F1 Race Intelligence <span className="text-[#e10600] font-normal text-sm ml-1">· Report</span>
            </span>
          </a>

          {/* Zone 2: 4-5 single-line clean nav links */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-300">
            <a href="#tableau-section" className="hover:text-white hover:underline underline-offset-8 decoration-[#e10600] transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5">
              <BarChart3 className="w-4 h-4 text-slate-400" />
              Tableau Viz
            </a>
            <a href="#scenarios" className="hover:text-white hover:underline underline-offset-8 decoration-[#e10600] transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5">
              <Users className="w-4 h-4 text-slate-400" />
              Scenarios
            </a>
            <a href="#features" className="hover:text-white hover:underline underline-offset-8 decoration-[#e10600] transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5">
              <Compass className="w-4 h-4 text-slate-400" />
              Features
            </a>
            <a href="#methodology" className="hover:text-white hover:underline underline-offset-8 decoration-[#e10600] transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5">
              <BookOpen className="w-4 h-4 text-slate-400" />
              Methodology
            </a>
            <a href="#audio-demo" className="hover:text-white hover:underline underline-offset-8 decoration-[#e10600] transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5">
              <Volume2 className="w-4 h-4 text-slate-400" />
              Audio & Demo
            </a>
          </nav>

          {/* Zone 3: 1 primary action */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={onOpenSubmissionGuide}
              className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white bg-[#e10600] hover:bg-[#c00500] rounded transition-colors shadow-sm whitespace-nowrap shrink-0 cursor-pointer"
            >
              Skill Wallet Guide
            </button>
            <a
              href={PROJECT_METADATA.tableauDirectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:inline-flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-slate-300 hover:text-white bg-slate-900 hover:bg-slate-800 border border-slate-700 rounded transition-colors whitespace-nowrap shrink-0"
              title="Open full dashboard on Tableau Public"
            >
              <span>Tableau Public</span>
              <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
            </a>
          </div>
        </div>

        {/* Mobile menu toggle bar if collapsed */}
        <div className="md:hidden flex items-center justify-between py-2 border-t border-slate-800/80 text-xs text-slate-400 overflow-x-auto gap-4 custom-scrollbar">
          <a href="#tableau-section" className="whitespace-nowrap hover:text-white">Tableau Viz</a>
          <a href="#scenarios" className="whitespace-nowrap hover:text-white">3 Scenarios</a>
          <a href="#features" className="whitespace-nowrap hover:text-white">Features</a>
          <a href="#methodology" className="whitespace-nowrap hover:text-white">Methodology</a>
          <a href="#audio-demo" className="whitespace-nowrap hover:text-white">Audio & Demo</a>
          <a href="#documentation" className="whitespace-nowrap hover:text-white">Docs & Conclusion</a>
        </div>
      </div>
    </header>
  );
};
