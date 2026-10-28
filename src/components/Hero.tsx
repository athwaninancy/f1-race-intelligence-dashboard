import React from 'react';
import { ExternalLink, Play, ArrowDown, Sparkles, AlertCircle, Github, Database, Flag, Award, Calendar } from 'lucide-react';
import { PROJECT_METADATA } from '../data/f1ProjectData';

interface HeroProps {
  onOpenSubmissionGuide: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenSubmissionGuide }) => {
  return (
    <section className="relative overflow-hidden pt-10 pb-16 bg-[#080b12] bg-circuit-lines border-b border-slate-800">
      {/* Decorative racing grid lines */}
      <div className="absolute inset-0 bg-racing-pattern opacity-40 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Skill Wallet Mentor Alert Banner (matching screenshot 1) */}
        <div className="mb-8 p-4 sm:p-5 rounded-lg bg-gradient-to-r from-blue-900/40 via-blue-950/60 to-slate-900 border border-blue-500/40 shadow-lg flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-start gap-3.5">
            <div className="p-2 rounded bg-blue-600/20 text-blue-400 shrink-0 mt-0.5">
              <AlertCircle className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-semibold text-blue-200">
                Add Demo and GitHub links!
              </div>
              <p className="text-xs text-blue-300/80 mt-0.5">
                Please update the demo and GitHub links so that your mentor can review and evaluate your project.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2.5 shrink-0">
            <button
              onClick={onOpenSubmissionGuide}
              className="px-3.5 py-1.5 text-xs font-medium text-white bg-blue-600 hover:bg-blue-500 rounded transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              <Play className="w-3.5 h-3.5" />
              <span>Add Demo Link</span>
            </button>
            <button
              onClick={onOpenSubmissionGuide}
              className="px-3.5 py-1.5 text-xs font-medium text-slate-200 hover:text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              <Github className="w-3.5 h-3.5" />
              <span>Add Github Link</span>
            </button>
          </div>
        </div>

        {/* Hero Header Content */}
        <div className="max-w-4xl">
          {/* Metadata breadcrumb line (no pill badges, clean unboxed text) */}
          <div className="flex flex-wrap items-center gap-2 text-xs text-slate-400 font-medium mb-4">
            <span className="text-[#e10600] font-semibold uppercase tracking-wider">Skill Wallet Capstone</span>
            <span aria-hidden="true">·</span>
            <span>Program: Data Analytics with Tableau</span>
            <span aria-hidden="true">·</span>
            <span>Category: Individual Project</span>
            <span aria-hidden="true">·</span>
            <span>Seasons 2010–2026</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight uppercase leading-tight font-['Outfit']">
            FORMULA 1 Race Intelligence <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-slate-400">
              Dashboard Analysis Report
            </span>
          </h1>

          <p className="mt-4 text-base sm:text-lg text-slate-300 font-normal leading-relaxed max-w-3xl">
            A comprehensive visual telemetry report analyzing <span className="text-white font-semibold font-mono tabular-nums">6,464</span> race records 
            across <span className="text-white font-semibold font-mono tabular-nums">17</span> Formula 1 championship seasons. 
            Engineered in Tableau to deliver evidence-based intelligence for team strategists, broadcast journalists, and FIA regulation compliance analysts.
          </p>

          {/* Action CTAs */}
          <div className="mt-7 flex flex-wrap items-center gap-3.5">
            <a
              href="#tableau-section"
              className="px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white bg-[#e10600] hover:bg-[#c00500] rounded shadow-md transition-all flex items-center gap-2"
            >
              <Flag className="w-4 h-4" />
              <span>Interact with Tableau Viz</span>
            </a>
            <a
              href="#audio-demo"
              className="px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-slate-200 hover:text-white bg-slate-900 hover:bg-slate-800 border border-slate-700 rounded transition-colors flex items-center gap-2"
            >
              <Play className="w-3.5 h-3.5 text-red-500" />
              <span>Audio & Video Walkthrough</span>
            </a>
            <button
              onClick={onOpenSubmissionGuide}
              className="px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-slate-300 hover:text-white bg-slate-900/60 hover:bg-slate-800 border border-slate-700/80 rounded transition-colors flex items-center gap-2 cursor-pointer"
            >
              <Github className="w-3.5 h-3.5" />
              <span>Skill Wallet Guide</span>
            </button>
          </div>
        </div>

        {/* 4-Column Key Project Metrics Strip (Tabular Figures) */}
        <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-4 rounded-lg bg-slate-900/80 border border-slate-800">
            <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
              <span>Historical Scope</span>
              <Database className="w-4 h-4 text-slate-500" />
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono tabular-nums">
              6,464
            </div>
            <div className="text-xs text-slate-400 mt-1">Race records analyzed</div>
          </div>

          <div className="p-4 rounded-lg bg-slate-900/80 border border-slate-800">
            <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
              <span>Championship Span</span>
              <Calendar className="w-4 h-4 text-slate-500" />
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono tabular-nums">
              17
            </div>
            <div className="text-xs text-slate-400 mt-1">Seasons (2010–2026)</div>
          </div>

          <div className="p-4 rounded-lg bg-slate-900/80 border border-slate-800">
            <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
              <span>Project Architecture</span>
              <Award className="w-4 h-4 text-slate-500" />
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono tabular-nums">
              8 Epics <span className="text-sm font-normal text-slate-400 font-sans">/ 14 Tasks</span>
            </div>
            <div className="text-xs text-slate-400 mt-1">Data pipeline & visualization</div>
          </div>

          <div className="p-4 rounded-lg bg-slate-900/80 border border-slate-800">
            <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
              <span>Decision Personas</span>
              <Flag className="w-4 h-4 text-slate-500" />
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono tabular-nums">
              3 Scenarios
            </div>
            <div className="text-xs text-slate-400 mt-1">Strategist · Media · FIA</div>
          </div>
        </div>
      </div>
    </section>
  );
};
