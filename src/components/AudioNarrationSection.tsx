import React, { useState, useEffect, useRef } from 'react';
import { NARRATION_SEGMENTS } from '../data/f1ProjectData';
import { Play, Pause, RotateCcw, Volume2, VolumeX, Sparkles, FileText, CheckCircle2, FastForward } from 'lucide-react';

export const AudioNarrationSection: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSegmentIndex, setCurrentSegmentIndex] = useState(0);
  const [speechRate, setSpeechRate] = useState<number>(1.0);
  const [isMuted, setIsMuted] = useState(false);
  const [speechSupported, setSpeechSupported] = useState(false);
  const [isSpeechActive, setIsSpeechActive] = useState(false);

  // Check Web Speech API availability
  useEffect(() => {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      setSpeechSupported(true);
    }
  }, []);

  // Cleanup speech synthesis on unmount
  useEffect(() => {
    return () => {
      if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  const speakSegment = (index: number) => {
    if (!speechSupported) return;

    window.speechSynthesis.cancel();

    if (index >= NARRATION_SEGMENTS.length) {
      setIsPlaying(false);
      setIsSpeechActive(false);
      setCurrentSegmentIndex(0);
      return;
    }

    const segment = NARRATION_SEGMENTS[index];
    const utterance = new SpeechSynthesisUtterance(segment.text);
    utterance.rate = speechRate;
    utterance.pitch = 1.0;
    utterance.volume = isMuted ? 0 : 1.0;

    utterance.onstart = () => {
      setIsPlaying(true);
      setIsSpeechActive(true);
      setCurrentSegmentIndex(index);
    };

    utterance.onend = () => {
      if (index + 1 < NARRATION_SEGMENTS.length) {
        speakSegment(index + 1);
      } else {
        setIsPlaying(false);
        setIsSpeechActive(false);
      }
    };

    utterance.onerror = () => {
      setIsPlaying(false);
      setIsSpeechActive(false);
    };

    window.speechSynthesis.speak(utterance);
  };

  const handlePlayPause = () => {
    if (!speechSupported) {
      setIsPlaying(!isPlaying);
      return;
    }

    if (isPlaying) {
      window.speechSynthesis.pause();
      setIsPlaying(false);
    } else {
      if (window.speechSynthesis.paused) {
        window.speechSynthesis.resume();
        setIsPlaying(true);
      } else {
        speakSegment(currentSegmentIndex);
      }
    }
  };

  const handleReset = () => {
    if (speechSupported) {
      window.speechSynthesis.cancel();
    }
    setIsPlaying(false);
    setIsSpeechActive(false);
    setCurrentSegmentIndex(0);
  };

  const handleJumpToSegment = (index: number) => {
    setCurrentSegmentIndex(index);
    if (isPlaying || isSpeechActive) {
      speakSegment(index);
    }
  };

  const handleSpeedChange = (rate: number) => {
    setSpeechRate(rate);
    if (isPlaying) {
      speakSegment(currentSegmentIndex);
    }
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
    if (speechSupported && isPlaying) {
      // Re-trigger current segment with mute setting
      speakSegment(currentSegmentIndex);
    }
  };

  return (
    <div id="audio-player" className="p-6 sm:p-8 rounded-xl bg-slate-900/90 border border-slate-800 shadow-xl">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-800">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#e10600]">
            <span>Accessible Audio Player</span>
            <span aria-hidden="true">·</span>
            <span>Spoken Project Walkthrough</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-white uppercase font-['Outfit'] mt-1">
            Audio Narration: Executive Summary & Telemetry Walkthrough
          </h3>
          <p className="text-xs text-slate-300 mt-1">
            Listen to the verified narration walkthrough using browser speech synthesis, or review the complete script below.
          </p>
        </div>

        {/* Audio Controls Bar */}
        <div className="flex items-center gap-2.5 shrink-0 bg-slate-950 p-2 rounded-lg border border-slate-800">
          <button
            onClick={handlePlayPause}
            className="w-9 h-9 rounded bg-[#e10600] hover:bg-[#c00500] text-white flex items-center justify-center transition-colors cursor-pointer"
            aria-label={isPlaying ? 'Pause Narration' : 'Play Narration'}
          >
            {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 ml-0.5" />}
          </button>

          <button
            onClick={handleReset}
            className="w-8 h-8 rounded bg-slate-900 hover:bg-slate-800 text-slate-300 flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Restart from Beginning"
            title="Restart"
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </button>

          <button
            onClick={toggleMute}
            className="w-8 h-8 rounded bg-slate-900 hover:bg-slate-800 text-slate-300 flex items-center justify-center transition-colors cursor-pointer"
            aria-label={isMuted ? 'Unmute Audio' : 'Mute Audio'}
          >
            {isMuted ? <VolumeX className="w-3.5 h-3.5 text-red-400" /> : <Volume2 className="w-3.5 h-3.5" />}
          </button>

          {/* Speed Selector */}
          <div className="flex items-center gap-1 border-l border-slate-800 pl-2">
            {[1.0, 1.25, 1.5].map((rate) => (
              <button
                key={rate}
                onClick={() => handleSpeedChange(rate)}
                className={`px-1.5 py-0.5 text-[10px] font-mono rounded cursor-pointer ${
                  speechRate === rate
                    ? 'bg-slate-700 text-white font-bold'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {rate}x
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Progress & Current Playing Status */}
      <div className="py-4 border-b border-slate-800/80 flex flex-wrap items-center justify-between gap-2 text-xs">
        <div className="flex items-center gap-2">
          <span className="font-mono text-slate-400">Section {currentSegmentIndex + 1} of {NARRATION_SEGMENTS.length}:</span>
          <span className="font-semibold text-white">{NARRATION_SEGMENTS[currentSegmentIndex]?.section}</span>
        </div>
        <div className="text-slate-400 font-mono text-[11px]">
          Timestamp: {NARRATION_SEGMENTS[currentSegmentIndex]?.timeCode}
        </div>
      </div>

      {/* Transcript Segment List with Interactive Jump */}
      <div className="mt-6 space-y-3">
        <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
          <span className="uppercase tracking-wider font-semibold">Narration Script Transcript</span>
          <span>Click any timestamp to jump to that segment</span>
        </div>

        <div className="space-y-2.5 max-h-[360px] overflow-y-auto pr-2 custom-scrollbar">
          {NARRATION_SEGMENTS.map((segment, idx) => {
            const isCurrent = idx === currentSegmentIndex;
            return (
              <div
                key={idx}
                onClick={() => handleJumpToSegment(idx)}
                className={`p-3.5 rounded-lg border text-xs cursor-pointer transition-all ${
                  isCurrent
                    ? 'bg-slate-800/90 border-[#e10600] text-white shadow-sm'
                    : 'bg-slate-950/60 border-slate-800 text-slate-300 hover:bg-slate-900/60 hover:border-slate-700'
                }`}
              >
                <div className="flex items-center justify-between gap-2 mb-1.5 font-mono text-[11px]">
                  <span className={`font-semibold ${isCurrent ? 'text-[#e10600]' : 'text-slate-400'}`}>
                    [{segment.timeCode}] · {segment.section}
                  </span>
                  {isCurrent && (
                    <span className="text-[10px] uppercase font-bold text-emerald-400 tracking-wider">
                      Active
                    </span>
                  )}
                </div>
                <p className="leading-relaxed">
                  {segment.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
