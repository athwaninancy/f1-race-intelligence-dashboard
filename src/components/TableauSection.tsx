import React, { useState } from 'react';
import { ExternalLink, Maximize2, Minimize2, RotateCcw, Info, BarChart2, ShieldCheck, Filter, MapPin, Trophy, Eye, Layout, Disc, BookOpen } from 'lucide-react';
import { PROJECT_METADATA } from '../data/f1ProjectData';
import { InteractiveF1Dashboard } from './InteractiveF1Dashboard';

export const TableauSection: React.FC = () => {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [reloadKey, setReloadKey] = useState(0);
  const [viewMode, setViewMode] = useState<'embed' | 'worksheets' | 'both'>('embed');
  const [embedHeight, setEmbedHeight] = useState<'standard' | 'tall'>('tall');

  // URL with :tabs=yes and :toolbar=yes so that the complete multi-tab Tableau workbook is displayed
  const embedUrl = `https://public.tableau.com/views/f1_17931303640870/Dashboard1?:language=en-US&:display_count=n&:origin=viz_share_link&:embed=y&:showVizHome=no&:tabs=yes&:toolbar=yes&:device=desktop`;

  const handleReload = () => {
    setReloadKey((prev) => prev + 1);
  };

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  return (
    <section id="tableau-section" className="py-14 bg-[#0b0f19] border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 mb-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#e10600]">
              <span>Tableau Business Intelligence System</span>
              <span aria-hidden="true">·</span>
              <span>17 Seasons (2010–2026)</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white uppercase tracking-tight mt-1 font-['Outfit']">
              Complete Formula 1 Race Intelligence Dashboard
            </h2>
            <p className="text-sm text-slate-300 mt-1 max-w-2xl">
              Access the complete dashboard suite via the official live Tableau Public cloud embed or explore the full interactive worksheets directly on this page.
            </p>
          </div>

          {/* View Mode Switcher & Controls */}
          <div className="flex flex-wrap items-center gap-2 shrink-0">
            {/* View Mode Toggle */}
            <div className="flex items-center gap-1 p-1 bg-slate-900 border border-slate-700 rounded">
              <button
                onClick={() => setViewMode('embed')}
                className={`px-3 py-1.5 text-xs font-semibold rounded transition-colors cursor-pointer flex items-center gap-1.5 ${
                  viewMode === 'embed' ? 'bg-[#e10600] text-white shadow-sm' : 'text-slate-300 hover:text-white'
                }`}
              >
                <Eye className="w-3.5 h-3.5" />
                <span>Tableau Live Viz</span>
              </button>
              <button
                onClick={() => setViewMode('worksheets')}
                className={`px-3 py-1.5 text-xs font-semibold rounded transition-colors cursor-pointer flex items-center gap-1.5 ${
                  viewMode === 'worksheets' ? 'bg-[#e10600] text-white shadow-sm' : 'text-slate-300 hover:text-white'
                }`}
              >
                <Layout className="w-3.5 h-3.5" />
                <span>Full Worksheets Suite</span>
              </button>
              <button
                onClick={() => setViewMode('both')}
                className={`hidden sm:flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded transition-colors cursor-pointer ${
                  viewMode === 'both' ? 'bg-[#e10600] text-white shadow-sm' : 'text-slate-300 hover:text-white'
                }`}
              >
                <span>Combined View</span>
              </button>
            </div>

            {/* Reload & Fullscreen */}
            <button
              onClick={handleReload}
              className="px-2.5 py-1.5 text-xs font-medium text-slate-300 hover:text-white bg-slate-900 border border-slate-700 rounded transition-colors flex items-center gap-1 cursor-pointer"
              title="Reload View"
            >
              <RotateCcw className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={toggleFullscreen}
              className="px-2.5 py-1.5 text-xs font-medium text-slate-300 hover:text-white bg-slate-900 border border-slate-700 rounded transition-colors flex items-center gap-1 cursor-pointer"
              title="Fullscreen Mode"
            >
              {isFullscreen ? <Minimize2 className="w-3.5 h-3.5" /> : <Maximize2 className="w-3.5 h-3.5" />}
            </button>
            <a
              href={PROJECT_METADATA.tableauDirectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-1.5 text-xs font-semibold text-white bg-[#e10600] hover:bg-[#c00500] rounded transition-colors flex items-center gap-1.5 shadow-sm whitespace-nowrap"
            >
              <span>Open on Tableau</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* View Mode 1 or Both: Official Tableau Public Embed */}
        {(viewMode === 'embed' || viewMode === 'both') && (
          <div className="space-y-4 mb-8">
            <div className="flex items-center justify-between text-xs text-slate-400 bg-slate-900/80 px-4 py-2 rounded-t-lg border-t border-x border-slate-700">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                <span className="font-semibold text-white">Live Tableau Public Workbook</span>
                <span className="text-slate-500 font-mono">(:tabs=yes · :toolbar=yes enabled)</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[11px] text-slate-400">Height:</span>
                <button
                  onClick={() => setEmbedHeight(embedHeight === 'standard' ? 'tall' : 'standard')}
                  className="px-2 py-0.5 rounded bg-slate-800 hover:bg-slate-700 text-slate-200 text-[10px] font-mono cursor-pointer"
                >
                  {embedHeight === 'tall' ? '1000px (Full View)' : '720px (Compact)'}
                </button>
              </div>
            </div>

            {/* Tableau Embed Container */}
            <div
              className={`relative w-full rounded-b-lg overflow-hidden border border-slate-700 bg-slate-950 shadow-2xl transition-all duration-300 ${
                isFullscreen
                  ? 'fixed inset-4 z-50 rounded-xl max-w-none h-[calc(100vh-2rem)]'
                  : embedHeight === 'tall'
                  ? 'h-[850px] sm:h-[980px] lg:h-[1050px]'
                  : 'h-[640px] sm:h-[720px]'
              }`}
            >
              {isFullscreen && (
                <div className="absolute top-3 right-3 z-30 flex items-center gap-2">
                  <button
                    onClick={toggleFullscreen}
                    className="px-3.5 py-1.5 text-xs font-semibold text-white bg-[#e10600] hover:bg-[#c00500] rounded shadow-md flex items-center gap-1.5 cursor-pointer"
                  >
                    <Minimize2 className="w-3.5 h-3.5" />
                    <span>Exit Fullscreen</span>
                  </button>
                </div>
              )}

              {/* Iframe Loading container */}
              <iframe
                key={reloadKey}
                src={embedUrl}
                title="Tableau F1 Race Intelligence Dashboard"
                className="w-full h-full border-0 bg-slate-950"
                allowFullScreen
                loading="eager"
              />
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs text-slate-400 gap-2 pb-2">
              <div className="flex items-center gap-2">
                <Info className="w-4 h-4 text-slate-400 shrink-0" />
                <span>
                  The Tableau embed loads with full tabs and controls enabled. If your browser blocks third-party cookies or requires a direct connection, you can also launch it via the{' '}
                  <a
                    href={PROJECT_METADATA.tableauDirectUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#e10600] hover:underline font-semibold"
                  >
                    Direct Tableau Server Link
                  </a>.
                </span>
              </div>
              <span className="font-mono text-[11px] text-slate-500 shrink-0">
                Author: Nancy Athwani · Skill Wallet
              </span>
            </div>
          </div>
        )}

        {/* View Mode 2 or Both: Complete Interactive Worksheets Suite */}
        {(viewMode === 'worksheets' || viewMode === 'both') && (
          <div className="space-y-4">
            {viewMode === 'both' && (
              <div className="pt-6 border-t border-slate-800">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#e10600] mb-2">
                  <span>Interactive Mirror</span>
                  <span aria-hidden="true">·</span>
                  <span>Direct Browser Exploration</span>
                </div>
              </div>
            )}
            <InteractiveF1Dashboard />
          </div>
        )}

        {/* 4 Summary Highlights */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
          <div className="p-3.5 rounded bg-slate-900/60 border border-slate-800">
            <div className="flex items-center gap-2 text-xs font-semibold text-white mb-1">
              <Trophy className="w-4 h-4 text-[#e10600]" />
              <span>1. Driver Leaderboard</span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Cumulative championship points, podium distributions, and driver consistency across 17 seasons.
            </p>
          </div>

          <div className="p-3.5 rounded bg-slate-900/60 border border-slate-800">
            <div className="flex items-center gap-2 text-xs font-semibold text-white mb-1">
              <BarChart2 className="w-4 h-4 text-[#e10600]" />
              <span>2. Constructor Trajectories</span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Championship points progression comparing Red Bull, Mercedes, Ferrari, and McLaren across regulatory shifts.
            </p>
          </div>

          <div className="p-3.5 rounded bg-slate-900/60 border border-slate-800">
            <div className="flex items-center gap-2 text-xs font-semibold text-white mb-1">
              <MapPin className="w-4 h-4 text-[#e10600]" />
              <span>3. Circuit Venues & Rounds</span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Global race frequencies by host nation, circuit lengths, and historical safety car likelihood.
            </p>
          </div>

          <div className="p-3.5 rounded bg-slate-900/60 border border-slate-800">
            <div className="flex items-center gap-2 text-xs font-semibold text-white mb-1">
              <ShieldCheck className="w-4 h-4 text-[#e10600]" />
              <span>4. Reliability & Tyre Matrix</span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Categorized Did Not Finish (DNF) failure reasons and compound degradation models for race strategy.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
