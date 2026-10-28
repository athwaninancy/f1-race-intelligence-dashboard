import React, { useState, useMemo } from 'react';
import { DRIVER_RECORDS, CONSTRUCTOR_RECORDS, CIRCUIT_RECORDS, DNF_CATEGORIES, TYRE_STRATEGIES, DriverRecord, ConstructorRecord, CircuitRecord } from '../data/f1TelemetryData';
import { Filter, RotateCcw, Trophy, Users, MapPin, ShieldAlert, Disc, ArrowUpRight, BarChart3, TrendingUp, Info, Check } from 'lucide-react';

export const InteractiveF1Dashboard: React.FC = () => {
  const [selectedSeason, setSelectedSeason] = useState<string>('all');
  const [selectedConstructor, setSelectedConstructor] = useState<string>('all');
  const [selectedDriver, setSelectedDriver] = useState<string>('all');
  const [selectedCircuit, setSelectedCircuit] = useState<string>('all');
  const [activeSheet, setActiveSheet] = useState<'driver' | 'constructor' | 'circuit' | 'dnf' | 'tyres'>('driver');

  // Reset all filters
  const handleResetFilters = () => {
    setSelectedSeason('all');
    setSelectedConstructor('all');
    setSelectedDriver('all');
    setSelectedCircuit('all');
  };

  const hasActiveFilters = selectedSeason !== 'all' || selectedConstructor !== 'all' || selectedDriver !== 'all' || selectedCircuit !== 'all';

  // Filtered Driver Records
  const filteredDrivers = useMemo(() => {
    return DRIVER_RECORDS.filter((driver) => {
      if (selectedDriver !== 'all' && driver.id !== selectedDriver) return false;
      if (selectedConstructor !== 'all') {
        const teamLower = driver.team.toLowerCase();
        if (selectedConstructor === 'mercedes' && !teamLower.includes('mercedes')) return false;
        if (selectedConstructor === 'redbull' && !teamLower.includes('red bull')) return false;
        if (selectedConstructor === 'ferrari' && !teamLower.includes('ferrari')) return false;
        if (selectedConstructor === 'mclaren' && !teamLower.includes('mclaren')) return false;
        if (selectedConstructor === 'astonmartin' && !teamLower.includes('aston') && !teamLower.includes('force india')) return false;
        if (selectedConstructor === 'alpine' && !teamLower.includes('alpine') && !teamLower.includes('renault')) return false;
      }
      return true;
    });
  }, [selectedDriver, selectedConstructor]);

  // Filtered Constructor Records
  const filteredConstructors = useMemo(() => {
    return CONSTRUCTOR_RECORDS.filter((c) => {
      if (selectedConstructor !== 'all' && c.id !== selectedConstructor) return false;
      return true;
    });
  }, [selectedConstructor]);

  // Filtered Circuit Records
  const filteredCircuits = useMemo(() => {
    return CIRCUIT_RECORDS.filter((cir) => {
      if (selectedCircuit !== 'all' && cir.id !== selectedCircuit) return false;
      return true;
    });
  }, [selectedCircuit]);

  // Dynamic KPI calculation
  const totalFilteredPoints = useMemo(() => {
    return filteredDrivers.reduce((acc, curr) => acc + curr.cumulativePoints, 0);
  }, [filteredDrivers]);

  const maxPoints = Math.max(...DRIVER_RECORDS.map((d) => d.cumulativePoints));

  return (
    <div className="rounded-xl border border-slate-700 bg-slate-950 overflow-hidden shadow-2xl">
      {/* Dashboard Top Control Strip */}
      <div className="p-4 sm:p-5 border-b border-slate-800 bg-gradient-to-r from-slate-900 via-slate-950 to-slate-900 flex flex-col lg:flex-row lg:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#e10600]">
            <span>Complete Analytical Worksheets</span>
            <span aria-hidden="true">·</span>
            <span>Formula 1 Telemetry (2010–2026)</span>
          </div>
          <h3 className="text-xl font-extrabold text-white uppercase tracking-tight mt-0.5 font-['Outfit']">
            Race Intelligence Interactive Worksheets Suite
          </h3>
          <p className="text-xs text-slate-300 mt-0.5">
            Real-time interactive rendering of all core worksheets: driver rankings, team trajectories, circuit profiles, DNF categorizations, and compound strategies.
          </p>
        </div>

        {/* Global Filter Bar */}
        <div className="flex flex-wrap items-center gap-2">
          {/* Season Filter */}
          <div className="flex items-center gap-1.5 text-xs bg-slate-900 px-2.5 py-1.5 rounded border border-slate-700">
            <span className="text-slate-400 font-medium">Season:</span>
            <select
              value={selectedSeason}
              onChange={(e) => setSelectedSeason(e.target.value)}
              className="bg-transparent text-white font-mono font-medium focus:outline-none cursor-pointer"
            >
              <option value="all" className="bg-slate-900">All 17 Seasons (2010–2026)</option>
              <option value="2026" className="bg-slate-900">2026 Season</option>
              <option value="2024" className="bg-slate-900">2024 Season</option>
              <option value="2022" className="bg-slate-900">2022 Ground-Effect Era</option>
              <option value="2020" className="bg-slate-900">2020 Championship</option>
              <option value="2018" className="bg-slate-900">2018 Halo Era</option>
              <option value="2016" className="bg-slate-900">2016 Title Duel</option>
              <option value="2014" className="bg-slate-900">2014 Hybrid Turbo Era</option>
              <option value="2012" className="bg-slate-900">2012 Multi-Winner Season</option>
              <option value="2010" className="bg-slate-900">2010 4-Way Finale</option>
            </select>
          </div>

          {/* Constructor Filter */}
          <div className="flex items-center gap-1.5 text-xs bg-slate-900 px-2.5 py-1.5 rounded border border-slate-700">
            <span className="text-slate-400 font-medium">Team:</span>
            <select
              value={selectedConstructor}
              onChange={(e) => setSelectedConstructor(e.target.value)}
              className="bg-transparent text-white font-medium focus:outline-none cursor-pointer"
            >
              <option value="all" className="bg-slate-900">All Constructors</option>
              <option value="redbull" className="bg-slate-900">Red Bull Racing</option>
              <option value="mercedes" className="bg-slate-900">Mercedes-AMG Petronas</option>
              <option value="ferrari" className="bg-slate-900">Scuderia Ferrari</option>
              <option value="mclaren" className="bg-slate-900">McLaren F1 Team</option>
              <option value="astonmartin" className="bg-slate-900">Aston Martin F1</option>
              <option value="alpine" className="bg-slate-900">Alpine / Renault</option>
            </select>
          </div>

          {/* Driver Filter */}
          <div className="flex items-center gap-1.5 text-xs bg-slate-900 px-2.5 py-1.5 rounded border border-slate-700">
            <span className="text-slate-400 font-medium">Driver:</span>
            <select
              value={selectedDriver}
              onChange={(e) => setSelectedDriver(e.target.value)}
              className="bg-transparent text-white font-medium focus:outline-none cursor-pointer"
            >
              <option value="all" className="bg-slate-900">All Drivers</option>
              {DRIVER_RECORDS.map((d) => (
                <option key={d.id} value={d.id} className="bg-slate-900">
                  {d.name} ({d.code})
                </option>
              ))}
            </select>
          </div>

          {/* Reset Filters */}
          {hasActiveFilters && (
            <button
              onClick={handleResetFilters}
              className="px-2.5 py-1.5 text-xs font-semibold text-red-400 hover:text-white bg-red-950/40 hover:bg-red-900/60 border border-red-800/80 rounded transition-colors flex items-center gap-1 cursor-pointer"
              title="Reset all filters"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset</span>
            </button>
          )}
        </div>
      </div>

      {/* KPI Dynamic Summary Bar */}
      <div className="grid grid-cols-2 sm:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-slate-800 bg-slate-900/90 text-xs border-b border-slate-800">
        <div className="p-3.5 flex flex-col justify-center">
          <span className="text-slate-400 text-[11px]">Filtered Records Base</span>
          <span className="text-lg font-bold text-white font-mono tabular-nums">
            {hasActiveFilters ? 'Active Subset' : '6,464 Records'}
          </span>
          <span className="text-[10px] text-slate-400">17 Seasons (2010–2026)</span>
        </div>

        <div className="p-3.5 flex flex-col justify-center">
          <span className="text-slate-400 text-[11px]">Displayed Drivers</span>
          <span className="text-lg font-bold text-white font-mono tabular-nums">
            {filteredDrivers.length} <span className="text-xs font-normal text-slate-400">/ 10 Analyzed</span>
          </span>
          <span className="text-[10px] text-slate-400">Championship contenders</span>
        </div>

        <div className="p-3.5 flex flex-col justify-center">
          <span className="text-slate-400 text-[11px]">Cumulative Points Yield</span>
          <span className="text-lg font-bold text-white font-mono tabular-nums">
            {totalFilteredPoints.toLocaleString()} pts
          </span>
          <span className="text-[10px] text-slate-400">Standardized scoring</span>
        </div>

        <div className="p-3.5 flex flex-col justify-center">
          <span className="text-slate-400 text-[11px]">Championship Era Status</span>
          <span className="text-lg font-bold text-emerald-400 font-mono">
            {selectedSeason === 'all' ? '17 Seasons Consolidated' : `${selectedSeason} Regulations`}
          </span>
          <span className="text-[10px] text-slate-400">Normalized across rule changes</span>
        </div>
      </div>

      {/* Worksheet Tabs Navigation */}
      <div className="px-4 pt-3 pb-2 bg-slate-900/60 border-b border-slate-800 flex items-center gap-1 overflow-x-auto custom-scrollbar">
        <button
          onClick={() => setActiveSheet('driver')}
          className={`px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider rounded transition-colors whitespace-nowrap flex items-center gap-1.5 cursor-pointer ${
            activeSheet === 'driver'
              ? 'bg-[#e10600] text-white shadow-sm'
              : 'text-slate-400 hover:text-white hover:bg-slate-800'
          }`}
        >
          <Trophy className="w-3.5 h-3.5" />
          <span>1. Driver Leaderboard</span>
        </button>

        <button
          onClick={() => setActiveSheet('constructor')}
          className={`px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider rounded transition-colors whitespace-nowrap flex items-center gap-1.5 cursor-pointer ${
            activeSheet === 'constructor'
              ? 'bg-[#e10600] text-white shadow-sm'
              : 'text-slate-400 hover:text-white hover:bg-slate-800'
          }`}
        >
          <TrendingUp className="w-3.5 h-3.5" />
          <span>2. Constructor Trajectories</span>
        </button>

        <button
          onClick={() => setActiveSheet('circuit')}
          className={`px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider rounded transition-colors whitespace-nowrap flex items-center gap-1.5 cursor-pointer ${
            activeSheet === 'circuit'
              ? 'bg-[#e10600] text-white shadow-sm'
              : 'text-slate-400 hover:text-white hover:bg-slate-800'
          }`}
        >
          <MapPin className="w-3.5 h-3.5" />
          <span>3. Grand Prix by Circuit</span>
        </button>

        <button
          onClick={() => setActiveSheet('dnf')}
          className={`px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider rounded transition-colors whitespace-nowrap flex items-center gap-1.5 cursor-pointer ${
            activeSheet === 'dnf'
              ? 'bg-[#e10600] text-white shadow-sm'
              : 'text-slate-400 hover:text-white hover:bg-slate-800'
          }`}
        >
          <ShieldAlert className="w-3.5 h-3.5" />
          <span>4. Driver Reliability & DNF</span>
        </button>

        <button
          onClick={() => setActiveSheet('tyres')}
          className={`px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider rounded transition-colors whitespace-nowrap flex items-center gap-1.5 cursor-pointer ${
            activeSheet === 'tyres'
              ? 'bg-[#e10600] text-white shadow-sm'
              : 'text-slate-400 hover:text-white hover:bg-slate-800'
          }`}
        >
          <Disc className="w-3.5 h-3.5" />
          <span>5. Tyre Compound Strategy</span>
        </button>
      </div>

      {/* Main Worksheet Display Area */}
      <div className="p-5 sm:p-6 bg-slate-950">
        {/* SHEET 1: Driver Performance Leaderboard */}
        {activeSheet === 'driver' && (
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-2 border-b border-slate-800">
              <div>
                <h4 className="text-base font-bold text-white uppercase font-['Outfit']">
                  Driver Performance Leaderboard (2010–2026 Cumulative)
                </h4>
                <p className="text-xs text-slate-400">
                  Total points accumulated, wins, podium conversions, and DNF resilience across 17 seasons.
                </p>
              </div>
              <div className="text-xs text-slate-400 font-mono">
                Showing {filteredDrivers.length} drivers
              </div>
            </div>

            <div className="space-y-3">
              {filteredDrivers.map((driver, idx) => {
                const percentage = (driver.cumulativePoints / maxPoints) * 100;
                return (
                  <div
                    key={driver.id}
                    className="p-3 rounded-lg bg-slate-900/70 border border-slate-800/80 hover:border-slate-700 transition-colors"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                      <div className="flex items-center gap-2.5">
                        <span className="w-6 h-6 rounded bg-slate-800 text-slate-300 font-mono text-xs font-bold flex items-center justify-center shrink-0">
                          {idx + 1}
                        </span>
                        <div className="flex items-baseline gap-2">
                          <span className="text-sm font-bold text-white">{driver.name}</span>
                          <span className="text-xs text-slate-400 font-mono">#{driver.number} · {driver.code}</span>
                          <span className="text-xs text-[#e10600] font-medium hidden sm:inline">({driver.team})</span>
                        </div>
                      </div>

                      <div className="flex items-center gap-4 text-xs font-mono tabular-nums text-slate-300 shrink-0">
                        <span>Wins: <strong className="text-white">{driver.wins}</strong></span>
                        <span>Podiums: <strong className="text-white">{driver.podiums}</strong></span>
                        <span className="text-emerald-400 font-bold">{driver.cumulativePoints.toLocaleString()} pts</span>
                      </div>
                    </div>

                    {/* Proportional Bar */}
                    <div className="w-full bg-slate-950 h-2.5 rounded-full overflow-hidden flex">
                      <div
                        className="bg-gradient-to-r from-red-600 via-red-500 to-amber-500 h-full rounded-full transition-all duration-500"
                        style={{ width: `${percentage}%` }}
                      />
                    </div>

                    <div className="mt-2 flex items-center justify-between text-[11px] text-slate-400 font-mono">
                      <span>Race Starts: {driver.raceStarts}</span>
                      <span>Championships: {driver.championships}</span>
                      <span>DNF Rate: {driver.dnfRate} ({driver.dnfCount} retirements)</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* SHEET 2: Constructor Championship Trajectories */}
        {activeSheet === 'constructor' && (
          <div className="space-y-5">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-2 border-b border-slate-800">
              <div>
                <h4 className="text-base font-bold text-white uppercase font-['Outfit']">
                  Constructor Championship Points Evolution & Dominance Cycles
                </h4>
                <p className="text-xs text-slate-400">
                  Tracking constructor championship progression across the V8 (2010–2013), Hybrid V6 (2014–2021), and Ground Effect (2022–2026) eras.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredConstructors.map((c) => (
                <div
                  key={c.id}
                  className="p-4 rounded-lg bg-slate-900/80 border border-slate-800 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="w-3 h-3 rounded-full" style={{ backgroundColor: c.primaryColor }} />
                      <span className="text-xs font-mono text-slate-400">{c.titles} World Titles</span>
                    </div>
                    <h5 className="text-sm font-bold text-white mb-1">{c.name}</h5>
                    <div className="text-xs text-slate-400 mb-3">{c.country}</div>

                    <div className="space-y-1 text-xs text-slate-300 font-mono mb-4">
                      <div className="flex justify-between">
                        <span className="text-slate-400">Total Points:</span>
                        <span className="text-white font-bold">{c.totalPoints.toLocaleString()} pts</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-400">Total Wins:</span>
                        <span className="text-white">{c.wins}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-400">Total Podiums:</span>
                        <span className="text-white">{c.podiums}</span>
                      </div>
                    </div>
                  </div>

                  {/* Era Trajectory Milestones */}
                  <div className="pt-3 border-t border-slate-800 text-[11px]">
                    <div className="text-slate-400 mb-1.5 uppercase tracking-wider font-semibold">
                      Championship Trajectory Sample:
                    </div>
                    <div className="grid grid-cols-3 gap-1.5 font-mono text-center">
                      <div className="p-1 rounded bg-slate-950 border border-slate-800">
                        <div className="text-slate-400 text-[10px]">2014</div>
                        <div className="text-white font-bold">{c.trajectory.find(t => t.season === 2014)?.points || '—'}p</div>
                      </div>
                      <div className="p-1 rounded bg-slate-950 border border-slate-800">
                        <div className="text-slate-400 text-[10px]">2022</div>
                        <div className="text-white font-bold">{c.trajectory.find(t => t.season === 2022)?.points || '—'}p</div>
                      </div>
                      <div className="p-1 rounded bg-slate-950 border border-slate-800">
                        <div className="text-slate-400 text-[10px]">2024</div>
                        <div className="text-white font-bold">{c.trajectory.find(t => t.season === 2024)?.points || '—'}p</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* SHEET 3: Grand Prix Races by Circuit */}
        {activeSheet === 'circuit' && (
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-2 border-b border-slate-800">
              <div>
                <h4 className="text-base font-bold text-white uppercase font-['Outfit']">
                  Grand Prix Races by Circuit & Geographic Profile
                </h4>
                <p className="text-xs text-slate-400">
                  Circuit layouts, host nations, total historical rounds held, and safety car probability indices.
                </p>
              </div>
              <div className="text-xs text-slate-400 font-mono">
                {filteredCircuits.length} Circuits Displayed
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
              {filteredCircuits.map((cir) => (
                <div
                  key={cir.id}
                  className="p-4 rounded-lg bg-slate-900/70 border border-slate-800 hover:border-slate-700 transition-colors"
                >
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <div>
                      <h5 className="text-sm font-bold text-white">{cir.name}</h5>
                      <div className="text-xs text-slate-400 flex items-center gap-1 mt-0.5">
                        <MapPin className="w-3 h-3 text-[#e10600]" />
                        <span>{cir.location}, {cir.country}</span>
                      </div>
                    </div>
                    <span className="text-xs font-mono font-bold text-white bg-slate-800 px-2.5 py-1 rounded">
                      {cir.totalRounds} Rounds
                    </span>
                  </div>

                  <div className="mt-3 pt-3 border-t border-slate-800 grid grid-cols-3 gap-2 text-[11px] font-mono text-slate-300">
                    <div>
                      <span className="text-slate-400 block">Length:</span>
                      <span>{cir.lengthKm} km ({cir.laps} laps)</span>
                    </div>
                    <div>
                      <span className="text-slate-400 block">Type:</span>
                      <span className="truncate block">{cir.type}</span>
                    </div>
                    <div>
                      <span className="text-slate-400 block">Safety Car:</span>
                      <span className="text-amber-400 font-bold">{cir.safetyCarProbability}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* SHEET 4: Driver Reliability & DNF Failure Analysis (FIA Scenario) */}
        {activeSheet === 'dnf' && (
          <div className="space-y-5">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-2 border-b border-slate-800">
              <div>
                <h4 className="text-base font-bold text-white uppercase font-['Outfit']">
                  Driver Reliability Analysis & Did Not Finish (DNF) Failure Taxonomy
                </h4>
                <p className="text-xs text-slate-400">
                  Modeled after the FIA Technical Compliance Analyst persona (Arvind) to isolate mechanical versus incident retirements across all 17 seasons.
                </p>
              </div>
              <div className="text-xs text-slate-400 font-mono">
                1,049 Total Categorized DNFs
              </div>
            </div>

            <div className="space-y-3">
              {DNF_CATEGORIES.map((cat, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-lg bg-slate-900/80 border border-slate-800 space-y-2"
                >
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-xs sm:text-sm font-bold text-white flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#e10600]"></span>
                      {cat.category}
                    </span>
                    <span className="text-xs font-mono font-bold text-white">
                      {cat.count} occurrences ({cat.percentage}%)
                    </span>
                  </div>

                  {/* Percentage Bar */}
                  <div className="w-full bg-slate-950 h-2 rounded-full overflow-hidden">
                    <div
                      className="bg-[#e10600] h-full rounded-full"
                      style={{ width: `${cat.percentage}%` }}
                    />
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-slate-300">
                    <span className="text-slate-400">{cat.description}</span>
                    <span className="text-emerald-400 font-medium text-[11px] shrink-0 font-mono">
                      Regulatory Impact: {cat.regulatoryImpact}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* SHEET 5: Tyre Compound Strategy Analysis (Team Strategist Scenario) */}
        {activeSheet === 'tyres' && (
          <div className="space-y-5">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-2 border-b border-slate-800">
              <div>
                <h4 className="text-base font-bold text-white uppercase font-['Outfit']">
                  Tyre Compound Degradation & Stint Optimization Matrix
                </h4>
                <p className="text-xs text-slate-400">
                  Modeled after the F1 Team Performance Strategist persona (Rajan) to evaluate pit window returns across compound sets.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {TYRE_STRATEGIES.map((tyre) => (
                <div
                  key={tyre.compound}
                  className="p-4 rounded-lg bg-slate-900/80 border border-slate-800 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <span className="w-4 h-4 rounded-full border border-slate-600" style={{ backgroundColor: tyre.color }} />
                        <h5 className="text-sm font-bold text-white uppercase font-mono">{tyre.compound} Compound</h5>
                      </div>
                      <span className="text-xs font-mono text-slate-400">{tyre.avgStintLaps} laps avg</span>
                    </div>

                    <div className="space-y-2 text-xs text-slate-300 font-mono">
                      <div className="flex justify-between border-b border-slate-800/80 pb-1.5">
                        <span className="text-slate-400">Pace Delta:</span>
                        <span className="text-white">{tyre.lapPaceDelta}</span>
                      </div>
                      <div className="flex justify-between border-b border-slate-800/80 pb-1.5">
                        <span className="text-slate-400">Points Yield:</span>
                        <span className="text-emerald-400 font-bold">{tyre.pointsYieldRatio}</span>
                      </div>
                      <div className="flex justify-between border-b border-slate-800/80 pb-1.5">
                        <span className="text-slate-400">Ideal Temp:</span>
                        <span className="text-white">{tyre.recommendedTrackTemp}</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-800 text-[11px] text-slate-400">
                    <span className="font-semibold text-slate-300 block mb-0.5">Optimal Circuit Context:</span>
                    <span>{tyre.optimalCircuitTypes}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
