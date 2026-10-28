import React, { useState } from 'react';
import { EPICS_ROADMAP, SYSTEM_REQUIREMENTS } from '../data/f1ProjectData';
import { Database, Cpu, CheckCircle2, ChevronDown, ChevronUp, HardDrive, Monitor, Globe, Server, FileText, Layers, GitBranch } from 'lucide-react';
import { EpicTask } from '../types';

export const DataMethodology: React.FC = () => {
  const [expandedEpicId, setExpandedEpicId] = useState<string | null>('epic-1');
  const [activeTab, setActiveTab] = useState<'epics' | 'requirements' | 'architecture'>('epics');

  const toggleEpic = (id: string) => {
    setExpandedEpicId(expandedEpicId === id ? null : id);
  };

  return (
    <section id="methodology" className="py-16 bg-[#080b12] border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#e10600]">
              <span>Data Pipeline & Architecture</span>
              <span aria-hidden="true">·</span>
              <span>Skill Wallet Epics</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white uppercase tracking-tight mt-1 font-['Outfit']">
              Data & Methodology: 8 Epics & Architecture
            </h2>
            <p className="text-sm text-slate-300 mt-1 max-w-2xl">
              From raw data extraction to dashboard deployment. Track the 8 core epics, system configurations, and data pipeline flow.
            </p>
          </div>

          {/* Segmented Tab Controls */}
          <div className="flex items-center gap-1 p-1 bg-slate-900 border border-slate-800 rounded shrink-0">
            <button
              onClick={() => setActiveTab('epics')}
              className={`px-3 py-1.5 text-xs font-medium rounded transition-colors cursor-pointer ${
                activeTab === 'epics' ? 'bg-[#e10600] text-white shadow-sm' : 'text-slate-400 hover:text-white'
              }`}
            >
              8 Project Epics ({EPICS_ROADMAP.length})
            </button>
            <button
              onClick={() => setActiveTab('requirements')}
              className={`px-3 py-1.5 text-xs font-medium rounded transition-colors cursor-pointer ${
                activeTab === 'requirements' ? 'bg-[#e10600] text-white shadow-sm' : 'text-slate-400 hover:text-white'
              }`}
            >
              System Requirements
            </button>
            <button
              onClick={() => setActiveTab('architecture')}
              className={`px-3 py-1.5 text-xs font-medium rounded transition-colors cursor-pointer ${
                activeTab === 'architecture' ? 'bg-[#e10600] text-white shadow-sm' : 'text-slate-400 hover:text-white'
              }`}
            >
              Technical Architecture
            </button>
          </div>
        </div>

        {/* Tab 1: 8 Epics Accordion */}
        {activeTab === 'epics' && (
          <div className="space-y-3">
            <div className="p-4 rounded-lg bg-slate-900/60 border border-slate-800 flex flex-wrap items-center justify-between gap-4 text-xs">
              <div className="flex items-center gap-3">
                <span className="text-slate-400 font-medium">Methodology Standard:</span>
                <span className="text-white font-semibold">Skill Wallet Data Analytics Capstone Framework</span>
              </div>
              <div className="flex items-center gap-4 text-slate-400 font-mono tabular-nums">
                <span>Total Epics: <strong className="text-white">8</strong></span>
                <span>Total Tasks: <strong className="text-white">14</strong></span>
                <span>Completion Status: <strong className="text-emerald-400">Verified Ready</strong></span>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-2.5">
              {EPICS_ROADMAP.map((epic) => {
                const isExpanded = expandedEpicId === epic.id;
                return (
                  <div
                    key={epic.id}
                    className="rounded-lg border border-slate-800 bg-slate-900/70 overflow-hidden transition-colors"
                  >
                    <button
                      onClick={() => toggleEpic(epic.id)}
                      className="w-full p-4 flex items-center justify-between gap-4 text-left hover:bg-slate-800/40 transition-colors cursor-pointer"
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <span className="w-7 h-7 rounded bg-slate-800 text-slate-300 font-mono font-bold text-xs flex items-center justify-center shrink-0">
                          {epic.epicNumber}
                        </span>
                        <div className="min-w-0">
                          <h4 className="text-sm font-bold text-white truncate">
                            {epic.title}
                          </h4>
                          <div className="flex items-center gap-2 text-[11px] text-slate-400 font-mono mt-0.5">
                            <span>Complexity: {epic.complexity}</span>
                            <span aria-hidden="true">·</span>
                            <span>Duration: {epic.duration}</span>
                            <span aria-hidden="true">·</span>
                            <span>Stories: {epic.storiesCount}</span>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center gap-3 shrink-0">
                        <span className="text-xs font-mono tabular-nums text-emerald-400 font-semibold">
                          {epic.progressPercent}%
                        </span>
                        {isExpanded ? (
                          <ChevronUp className="w-4 h-4 text-slate-400" />
                        ) : (
                          <ChevronDown className="w-4 h-4 text-slate-400" />
                        )}
                      </div>
                    </button>

                    {isExpanded && (
                      <div className="p-4 pt-1 border-t border-slate-800/80 bg-slate-950/60 text-xs text-slate-300 space-y-3">
                        <p className="leading-relaxed text-slate-300">
                          {epic.description}
                        </p>
                        <div>
                          <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 mb-1.5">
                            Implemented Stories & Subtasks
                          </div>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                            {epic.tasks.map((task, idx) => (
                              <div
                                key={idx}
                                className="flex items-center gap-2 p-2 rounded bg-slate-900/80 border border-slate-800 text-slate-200"
                              >
                                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                                <span>{task}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Tab 2: System Requirements Table */}
        {activeTab === 'requirements' && (
          <div className="rounded-xl border border-slate-800 bg-slate-900/80 overflow-hidden shadow-lg">
            <div className="p-4 sm:p-5 border-b border-slate-800 bg-slate-900 flex items-center justify-between">
              <div>
                <h3 className="text-base font-bold text-white uppercase font-['Outfit']">
                  Tableau & System Requirements Specifications
                </h3>
                <p className="text-xs text-slate-400 mt-0.5">
                  Verified hardware, operating environment, and software configurations from the Skill Wallet curriculum.
                </p>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="border-b border-slate-800 bg-slate-950 text-slate-400 font-mono uppercase text-[11px]">
                    <th className="py-3 px-4 font-semibold">Component / Layer</th>
                    <th className="py-3 px-4 font-semibold">Minimum Specification</th>
                    <th className="py-3 px-4 font-semibold">Recommended (Optimal)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/70 text-slate-300 font-sans">
                  {SYSTEM_REQUIREMENTS.map((req, idx) => (
                    <tr key={idx} className="hover:bg-slate-800/30 transition-colors">
                      <td className="py-3 px-4 font-medium text-white flex items-center gap-2">
                        {req.component.includes('CPU') && <Cpu className="w-3.5 h-3.5 text-[#e10600]" />}
                        {req.component.includes('RAM') && <Server className="w-3.5 h-3.5 text-blue-400" />}
                        {req.component.includes('Storage') && <HardDrive className="w-3.5 h-3.5 text-amber-400" />}
                        {req.component.includes('Software') && <Layers className="w-3.5 h-3.5 text-emerald-400" />}
                        {req.component.includes('Browser') && <Globe className="w-3.5 h-3.5 text-cyan-400" />}
                        {req.component.includes('Data') && <Database className="w-3.5 h-3.5 text-purple-400" />}
                        <span>{req.component}</span>
                      </td>
                      <td className="py-3 px-4 text-slate-400 font-mono text-[11px]">{req.minimum}</td>
                      <td className="py-3 px-4 text-emerald-300 font-medium font-mono text-[11px]">{req.recommended}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Tab 3: Technical Architecture Pipeline Diagram */}
        {activeTab === 'architecture' && (
          <div className="p-6 sm:p-8 rounded-xl border border-slate-800 bg-slate-900/80 shadow-lg space-y-6">
            <div>
              <h3 className="text-base font-bold text-white uppercase font-['Outfit']">
                End-to-End Analytics Architecture Flow
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                Visualizing data ingestion from raw database extracts through Tableau Desktop modeling to public web integration.
              </p>
            </div>

            {/* Architecture Flow Sequence */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="p-4 rounded-lg bg-slate-950 border border-slate-800">
                <div className="w-8 h-8 rounded bg-blue-600/20 text-blue-400 flex items-center justify-center font-bold text-xs mb-3">
                  1
                </div>
                <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-1">
                  Data Ingestion
                </h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Formula 1 raw CSV / Database extraction covering 6,464 race records (2010–2026).
                </p>
              </div>

              <div className="p-4 rounded-lg bg-slate-950 border border-slate-800">
                <div className="w-8 h-8 rounded bg-purple-600/20 text-purple-400 flex items-center justify-center font-bold text-xs mb-3">
                  2
                </div>
                <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-1">
                  Tableau Data Prep
                </h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Calculated fields, points normalization, DNF classification, and fast hyper-extract indexing.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-slate-950 border border-slate-800">
                <div className="w-8 h-8 rounded bg-red-600/20 text-red-400 flex items-center justify-center font-bold text-xs mb-3">
                  3
                </div>
                <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-1">
                  Dashboard & Stories
                </h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Worksheets assembled with dynamic parameters, quick cascading filters, and role-based views.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-slate-950 border border-slate-800">
                <div className="w-8 h-8 rounded bg-emerald-600/20 text-emerald-400 flex items-center justify-center font-bold text-xs mb-3">
                  4
                </div>
                <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-1">
                  Tableau Public & Web
                </h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Live cloud hosting on Tableau Public, embedded into this responsive web application for evaluation.
                </p>
              </div>
            </div>

            {/* Embedded Architecture Image Reference if available */}
            <div className="p-4 rounded-lg bg-slate-950/80 border border-slate-800/80 text-xs text-slate-400 flex items-center gap-3">
              <Layers className="w-5 h-5 text-[#e10600] shrink-0" />
              <span>
                Verified Pipeline: Source DB &rarr; Tableau Prep &rarr; Tableau OLAP Engine &rarr; User Client Browser &rarr; Interactive Dashboard & Story.
              </span>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
