import React, { useState } from 'react';
import { SCENARIO_ANALYSES } from '../data/f1ProjectData';
import { Users, HelpCircle, Eye, CheckCircle2, TrendingUp, Shield, Tv, ArrowRight, Gauge } from 'lucide-react';

export const ScenarioAnalyses: React.FC = () => {
  const [activeScenarioId, setActiveScenarioId] = useState(SCENARIO_ANALYSES[0].id);

  const activeScenario = SCENARIO_ANALYSES.find((s) => s.id === activeScenarioId) || SCENARIO_ANALYSES[0];

  const getPersonaIcon = (id: string) => {
    switch (id) {
      case 'scenario-1':
        return <Gauge className="w-5 h-5 text-red-500" />;
      case 'scenario-2':
        return <Tv className="w-5 h-5 text-blue-400" />;
      case 'scenario-3':
        return <Shield className="w-5 h-5 text-amber-400" />;
      default:
        return <Users className="w-5 h-5 text-slate-400" />;
    }
  };

  return (
    <section id="scenarios" className="py-16 bg-[#0b0f19] border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-10">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#e10600]">
            <span>Decision Support Modeling</span>
            <span aria-hidden="true">·</span>
            <span>Real-World Use Cases</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white uppercase tracking-tight mt-1 font-['Outfit']">
            Three Scenario Analyses: Formula 1 Race Intelligence
          </h2>
          <p className="text-sm text-slate-300 mt-2">
            Examining how different motorsport stakeholders leverage the 6,464 historical records across 17 seasons to make data-driven decisions.
          </p>
        </div>

        {/* Persona Switcher Tabs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-8">
          {SCENARIO_ANALYSES.map((scenario) => {
            const isSelected = scenario.id === activeScenarioId;
            return (
              <button
                key={scenario.id}
                onClick={() => setActiveScenarioId(scenario.id)}
                className={`p-4 rounded-lg text-left transition-all cursor-pointer border ${
                  isSelected
                    ? 'bg-slate-900 border-[#e10600] shadow-lg ring-1 ring-[#e10600]/30'
                    : 'bg-slate-950/60 border-slate-800 hover:border-slate-700 hover:bg-slate-900/40'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded flex items-center justify-center font-bold text-xs shrink-0 ${
                    isSelected ? 'bg-slate-800 border border-slate-700 text-white' : 'bg-slate-900 text-slate-400'
                  }`}>
                    {scenario.avatarInitials}
                  </div>
                  <div className="min-w-0">
                    <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider truncate">
                      {scenario.personaName} · {scenario.role.split(' ')[0]}
                    </div>
                    <div className={`text-sm font-bold truncate mt-0.5 ${isSelected ? 'text-white' : 'text-slate-300'}`}>
                      {scenario.scenarioTitle.split(':')[1]?.trim() || scenario.scenarioTitle}
                    </div>
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Scenario Card Deep-Dive */}
        <div className="p-6 sm:p-8 rounded-xl bg-slate-900/90 border border-slate-800 shadow-xl">
          {/* Header of Active Scenario */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-slate-800">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-slate-800/80 border border-slate-700 shrink-0">
                {getPersonaIcon(activeScenario.id)}
              </div>
              <div>
                <div className="flex flex-wrap items-center gap-2 text-xs text-slate-400">
                  <span className="font-semibold text-white">{activeScenario.personaName}</span>
                  <span aria-hidden="true">·</span>
                  <span>{activeScenario.role}</span>
                  <span aria-hidden="true">·</span>
                  <span className="text-[#e10600]">{activeScenario.organization}</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mt-1 font-['Outfit']">
                  {activeScenario.scenarioTitle}
                </h3>
              </div>
            </div>

            <div className="text-xs text-slate-400 font-mono tabular-nums shrink-0 bg-slate-950 px-3 py-1.5 rounded border border-slate-800">
              Scope: {activeScenario.recordsCovered}
            </div>
          </div>

          {/* Context & Overview Narrative */}
          <div className="py-6 border-b border-slate-800">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
              Operational Context & Analytical Mandate
            </h4>
            <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
              {activeScenario.overview}
            </p>
            <div className="mt-4 p-3.5 rounded bg-slate-950/80 border border-slate-800 text-xs sm:text-sm text-slate-300">
              <span className="font-semibold text-white">Core Objective: </span>
              {activeScenario.coreObjective}
            </div>
          </div>

          {/* 3-Column Detailed Analysis Breakdown */}
          <div className="pt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Key Questions */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-400">
                <HelpCircle className="w-4 h-4 text-slate-400" />
                <span>Key Analytical Inquiries</span>
              </div>
              <ul className="space-y-2.5 text-xs text-slate-300">
                {activeScenario.keyQuestions.map((q, idx) => (
                  <li key={idx} className="flex items-start gap-2 bg-slate-950/50 p-2.5 rounded border border-slate-800/80">
                    <span className="text-[#e10600] font-mono font-bold shrink-0">{idx + 1}.</span>
                    <span>{q}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Dashboard Insights */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-400">
                <Eye className="w-4 h-4 text-slate-400" />
                <span>Extracted Dashboard Evidence</span>
              </div>
              <ul className="space-y-2.5 text-xs text-slate-300">
                {activeScenario.dashboardInsights.map((insight, idx) => (
                  <li key={idx} className="flex items-start gap-2 bg-slate-950/50 p-2.5 rounded border border-slate-800/80">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{insight}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Strategic Outcome */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#e10600]">
                <TrendingUp className="w-4 h-4 text-[#e10600]" />
                <span>Actionable Decision Impact</span>
              </div>
              <div className="p-4 rounded-lg bg-slate-950 border border-slate-800 text-xs text-slate-200 leading-relaxed flex flex-col justify-between h-[calc(100%-2rem)]">
                <p>
                  {activeScenario.actionableDecision}
                </p>
                <div className="mt-4 pt-3 border-t border-slate-800/80 text-[11px] text-slate-400 flex items-center gap-1.5">
                  <span className="font-semibold text-slate-300">Target Metric:</span>
                  <span>Championship Points & Reliability Rate</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
