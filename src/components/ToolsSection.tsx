import React from 'react';
import { TOOLS_LIST } from '../data/f1ProjectData';
import { Wrench, CheckCircle, Database, LayoutDashboard, BarChart3, Terminal } from 'lucide-react';

export const ToolsSection: React.FC = () => {
  return (
    <section className="py-14 bg-[#0b0f19] border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#e10600]">
          <span>Technology Ecosystem</span>
          <span aria-hidden="true">·</span>
          <span>Program Curriculum</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white uppercase tracking-tight mt-1 font-['Outfit']">
          Tools & Required Competencies
        </h2>
        <p className="text-sm text-slate-300 mt-1 max-w-2xl mb-8">
          The software suite and analytical instruments utilized across data extraction, visualization, testing, and portfolio deployment.
        </p>

        {/* Skills Required Tags (as captured from screenshot 2) */}
        <div className="mb-8 p-4 rounded-lg bg-slate-900/60 border border-slate-800 flex flex-wrap items-center gap-3">
          <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
            Curriculum Skills Required:
          </span>
          <div className="flex flex-wrap items-center gap-2 text-xs text-slate-300">
            <span className="px-2.5 py-1 bg-slate-800 rounded border border-slate-700 text-white font-medium">Tableau (Business Intelligence Software)</span>
            <span className="px-2.5 py-1 bg-slate-800 rounded border border-slate-700 text-white font-medium">Dashboard Architecture</span>
            <span className="px-2.5 py-1 bg-slate-800 rounded border border-slate-700 text-white font-medium">Data Visualization (Tableau)</span>
            <span className="px-2.5 py-1 bg-slate-800 rounded border border-slate-700 text-white font-medium">Data Preprocessing & Cleaning</span>
          </div>
        </div>

        {/* Tools Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {TOOLS_LIST.map((tool, idx) => (
            <div
              key={idx}
              className="p-5 rounded-lg bg-slate-900/80 border border-slate-800 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">
                    {tool.badge}
                  </span>
                  <CheckCircle className="w-4 h-4 text-emerald-400" />
                </div>
                <h4 className="text-base font-bold text-white mb-1 leading-snug">
                  {tool.name}
                </h4>
                <div className="text-xs text-[#e10600] font-medium mb-3">
                  {tool.role}
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {tool.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
