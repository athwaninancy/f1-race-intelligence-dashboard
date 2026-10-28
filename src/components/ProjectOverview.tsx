import React, { useState } from 'react';
import { INTRODUCTION_TEXT, PROJECT_OBJECTIVES, VERIFIED_FEATURES } from '../data/f1ProjectData';
import { CheckCircle2, Clock, Target, Sparkles, Filter, ChevronRight, Layers, ArrowUpRight } from 'lucide-react';
import { FeatureItem } from '../types';

export const ProjectOverview: React.FC = () => {
  const [featureFilter, setFeatureFilter] = useState<'all' | 'completed' | 'planned'>('all');

  const filteredFeatures = VERIFIED_FEATURES.filter((item) => {
    if (featureFilter === 'all') return true;
    return item.status === featureFilter;
  });

  return (
    <section id="features" className="py-16 bg-[#080b12] border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Introduction Section */}
        <div className="mb-16">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#e10600]">
            <span>Executive Report</span>
            <span aria-hidden="true">·</span>
            <span>Skill Wallet Submission</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white uppercase tracking-tight mt-1 font-['Outfit']">
            Introduction & Analytical Scope
          </h2>

          <div className="mt-6 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-8 space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
              <p className="text-white font-medium">
                {INTRODUCTION_TEXT.lead}
              </p>
              <p>
                {INTRODUCTION_TEXT.impact}
              </p>
              <p className="text-slate-400">
                {INTRODUCTION_TEXT.toolsUsage}
              </p>
            </div>

            {/* Program & Project Status Card */}
            <div className="lg:col-span-4 p-5 rounded-lg bg-slate-900/80 border border-slate-800 space-y-3.5">
              <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                Project Classification
              </div>
              <div className="divide-y divide-slate-800 text-xs">
                <div className="py-2 flex justify-between items-center">
                  <span className="text-slate-400">Program</span>
                  <span className="text-white font-medium">Data Analytics with Tableau</span>
                </div>
                <div className="py-2 flex justify-between items-center">
                  <span className="text-slate-400">Type</span>
                  <span className="text-white font-medium">Individual Capstone</span>
                </div>
                <div className="py-2 flex justify-between items-center">
                  <span className="text-slate-400">Mentor Assigned</span>
                  <span className="text-amber-400 font-medium">Pending Assignment</span>
                </div>
                <div className="py-2 flex justify-between items-center">
                  <span className="text-slate-400">Total Epics</span>
                  <span className="text-white font-mono tabular-nums font-medium">8 Epics (14 Tasks)</span>
                </div>
                <div className="py-2 flex justify-between items-center">
                  <span className="text-slate-400">Dataset Records</span>
                  <span className="text-white font-mono tabular-nums font-medium">6,464 Grand Prix Rows</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Project Objectives */}
        <div className="mb-16">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1">
            <span>Methodological Rigor</span>
            <span aria-hidden="true">·</span>
            <span>Core Deliverables</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-white uppercase font-['Outfit'] mb-6">
            Project Objectives
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {PROJECT_OBJECTIVES.map((obj) => (
              <div key={obj.id} className="p-4 rounded-lg bg-slate-900/60 border border-slate-800 flex flex-col justify-between">
                <div>
                  <div className="w-8 h-8 rounded bg-[#e10600]/10 text-[#e10600] flex items-center justify-center font-bold text-xs mb-3">
                    <Target className="w-4 h-4" />
                  </div>
                  <h4 className="text-sm font-bold text-white mb-2 leading-snug">
                    {obj.title}
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed mb-4">
                    {obj.description}
                  </p>
                </div>
                <div className="pt-3 border-t border-slate-800 text-[11px] font-mono tabular-nums text-slate-400">
                  {obj.metric}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Feature Verification: Completed Features vs Planned Enhancements */}
        <div>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#e10600]">
                <span>Architecture Audit</span>
                <span aria-hidden="true">·</span>
                <span>Verification State</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white uppercase font-['Outfit'] mt-1">
                Verified Features vs. Planned Enhancements
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                Clearly demarcating deliverables verified in the live Tableau viz from future telemetry expansions.
              </p>
            </div>

            {/* Interactive Filter Control (segmented buttons) */}
            <div className="flex items-center gap-1 p-1 bg-slate-900 border border-slate-800 rounded shrink-0">
              <button
                onClick={() => setFeatureFilter('all')}
                className={`px-3 py-1.5 text-xs font-medium rounded transition-colors cursor-pointer ${
                  featureFilter === 'all'
                    ? 'bg-[#e10600] text-white shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                All ({VERIFIED_FEATURES.length})
              </button>
              <button
                onClick={() => setFeatureFilter('completed')}
                className={`px-3 py-1.5 text-xs font-medium rounded transition-colors cursor-pointer ${
                  featureFilter === 'completed'
                    ? 'bg-[#e10600] text-white shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Verified Completed (5)
              </button>
              <button
                onClick={() => setFeatureFilter('planned')}
                className={`px-3 py-1.5 text-xs font-medium rounded transition-colors cursor-pointer ${
                  featureFilter === 'planned'
                    ? 'bg-[#e10600] text-white shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Planned Enhancements (4)
              </button>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredFeatures.map((feat) => {
              const isCompleted = feat.status === 'completed';
              return (
                <div
                  key={feat.id}
                  className={`p-5 rounded-lg border transition-all ${
                    isCompleted
                      ? 'bg-slate-900/80 border-slate-700/80 hover:border-slate-600'
                      : 'bg-slate-950/60 border-dashed border-slate-800 opacity-90'
                  }`}
                >
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-xs uppercase tracking-wider font-mono text-slate-400">
                      {feat.category}
                    </span>
                    <div className="flex items-center gap-1.5">
                      {isCompleted ? (
                        <span className="flex items-center gap-1 text-[11px] font-semibold text-emerald-400 uppercase tracking-wider">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                          <span>Verified</span>
                        </span>
                      ) : (
                        <span className="flex items-center gap-1 text-[11px] font-semibold text-amber-400 uppercase tracking-wider">
                          <Clock className="w-3.5 h-3.5 text-amber-400" />
                          <span>Planned</span>
                        </span>
                      )}
                    </div>
                  </div>

                  <h4 className="text-base font-bold text-white mb-2 leading-snug">
                    {feat.title}
                  </h4>

                  <p className="text-xs text-slate-300 leading-relaxed mb-4">
                    {feat.description}
                  </p>

                  <div className="pt-3 border-t border-slate-800/80 space-y-2 text-[11px]">
                    <div>
                      <span className="text-slate-400 block font-medium">Tableau Visual Mechanism:</span>
                      <span className="text-slate-300">{feat.visualMechanism}</span>
                    </div>
                    <div>
                      <span className="text-slate-400 block font-medium">Analytical Outcome:</span>
                      <span className="text-slate-300">{feat.analyticalImpact}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
