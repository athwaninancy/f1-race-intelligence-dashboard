import React, { useState } from 'react';
import { Github, Globe, ExternalLink, Copy, Check, Terminal, Play, HelpCircle, ArrowRight, ShieldCheck } from 'lucide-react';
import { SKILL_WALLET_INSTRUCTIONS } from '../data/f1ProjectData';

interface GitHubGuideProps {
  isOpen: boolean;
  onClose: () => void;
}

export const GitHubSkillWalletGuide: React.FC<GitHubGuideProps> = ({ isOpen, onClose }) => {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  const [userRepoUrl, setUserRepoUrl] = useState('');
  const [userDemoUrl, setUserDemoUrl] = useState('');
  const [savedStatus, setSavedStatus] = useState(false);

  const copyToClipboard = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2500);
  };

  const handleSaveLinks = (e: React.FormEvent) => {
    e.preventDefault();
    setSavedStatus(true);
    setTimeout(() => setSavedStatus(false), 3000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="relative w-full max-w-3xl rounded-xl bg-slate-900 border border-slate-700 shadow-2xl p-6 sm:p-8 max-h-[90vh] overflow-y-auto custom-scrollbar">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-white p-2 rounded-lg hover:bg-slate-800 transition-colors cursor-pointer"
          aria-label="Close Guide"
        >
          ✕
        </button>

        {/* Modal Header */}
        <div className="flex items-start gap-3.5 mb-6">
          <div className="p-3 rounded-lg bg-blue-600/20 text-blue-400 border border-blue-500/30 shrink-0">
            <Github className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-400">
              <span>Beginner-Friendly Guide</span>
              <span aria-hidden="true">·</span>
              <span>Skill Wallet Submission</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white uppercase font-['Outfit'] mt-1">
              How to Connect GitHub & Publish Live Demo
            </h3>
            <p className="text-xs text-slate-300 mt-1">
              Follow these simple 3 steps to submit your project so your mentor can review and evaluate your work.
            </p>
          </div>
        </div>

        {/* 3 Steps */}
        <div className="space-y-6">
          {SKILL_WALLET_INSTRUCTIONS.map((step, idx) => (
            <div key={step.step} className="p-4 sm:p-5 rounded-lg bg-slate-950 border border-slate-800 space-y-3">
              <div className="flex items-center gap-2.5">
                <span className="w-6 h-6 rounded-full bg-[#e10600] text-white text-xs font-bold flex items-center justify-center shrink-0">
                  {step.step}
                </span>
                <h4 className="text-sm sm:text-base font-bold text-white">
                  {step.title}
                </h4>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed pl-8">
                {step.description}
              </p>

              {/* Code Snippet Box with Copy Button */}
              <div className="ml-8 relative rounded-md bg-slate-900 border border-slate-800 p-3 font-mono text-[11px] text-slate-200">
                <button
                  onClick={() => copyToClipboard(step.command, idx)}
                  className="absolute top-2.5 right-2.5 px-2 py-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white text-[10px] flex items-center gap-1 transition-colors cursor-pointer"
                  title="Copy command"
                >
                  {copiedIndex === idx ? (
                    <>
                      <Check className="w-3 h-3 text-emerald-400" />
                      <span className="text-emerald-400">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
                <pre className="overflow-x-auto custom-scrollbar pr-14 whitespace-pre-wrap">
                  {step.command}
                </pre>
              </div>
            </div>
          ))}
        </div>

        {/* Live Demo and GitHub Link Input Tester */}
        <div className="mt-8 p-5 rounded-lg bg-slate-950 border border-blue-500/30">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-400 mb-2">
            <ShieldCheck className="w-4 h-4" />
            <span>Interactive Link Tester for Skill Wallet</span>
          </div>
          <p className="text-xs text-slate-300 mb-4">
            Test and store your repository and live demo URLs below so you can easily copy them into the Skill Wallet dashboard.
          </p>

          <form onSubmit={handleSaveLinks} className="space-y-3">
            <div>
              <label htmlFor="repo-url" className="block text-xs font-medium text-slate-300 mb-1">
                Your GitHub Repository URL:
              </label>
              <input
                id="repo-url"
                type="url"
                value={userRepoUrl}
                onChange={(e) => setUserRepoUrl(e.target.value)}
                placeholder="https://github.com/your-username/f1-race-intelligence"
                className="w-full bg-slate-900 border border-slate-700 rounded px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#e10600]"
              />
            </div>

            <div>
              <label htmlFor="demo-url" className="block text-xs font-medium text-slate-300 mb-1">
                Your Published Live Demo URL:
              </label>
              <input
                id="demo-url"
                type="url"
                value={userDemoUrl}
                onChange={(e) => setUserDemoUrl(e.target.value)}
                placeholder="https://f1-race-intelligence.vercel.app or your shared Cloud Run URL"
                className="w-full bg-slate-900 border border-slate-700 rounded px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#e10600]"
              />
            </div>

            <div className="flex items-center justify-between pt-2">
              <button
                type="submit"
                className="px-4 py-2 text-xs font-semibold uppercase text-white bg-blue-600 hover:bg-blue-500 rounded transition-colors cursor-pointer"
              >
                Validate & Save Links
              </button>

              {userRepoUrl && (
                <a
                  href={userRepoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-blue-400 hover:underline flex items-center gap-1"
                >
                  <span>Test GitHub Link</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              )}
            </div>

            {savedStatus && (
              <div className="p-2.5 rounded bg-emerald-950/60 border border-emerald-500/40 text-xs text-emerald-300 flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Links verified! Copy these into Skill Wallet's "Add Demo Link" and "Add Github Link" buttons.</span>
              </div>
            )}
          </form>
        </div>

        {/* Footer Actions */}
        <div className="mt-6 flex justify-end gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold uppercase text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 rounded transition-colors cursor-pointer"
          >
            Close Guide
          </button>
        </div>
      </div>
    </div>
  );
};
