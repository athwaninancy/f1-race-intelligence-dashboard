import React, { useState, useEffect, useMemo } from 'react';
import { DEMO_VIDEO_CHAPTERS } from '../data/f1ProjectData';
import {
  Video,
  Link2,
  Info,
  Check,
  ExternalLink,
  AlertTriangle,
  RotateCcw,
  Play,
  Youtube,
  Clock,
} from 'lucide-react';

interface ParsedVideo {
  embedUrl: string;
  watchUrl: string;
  isYouTube: boolean;
  videoId?: string;
  provider: 'youtube' | 'loom' | 'vimeo' | 'generic';
}

/**
 * Converts any standard video link into a proper iframe embed URL.
 * Automatically handles:
 * - https://www.youtube.com/watch?v=VIDEO_ID
 * - https://youtu.be/VIDEO_ID
 * - https://www.youtube.com/embed/VIDEO_ID
 * - https://www.youtube.com/shorts/VIDEO_ID
 * - https://www.youtube.com/live/VIDEO_ID
 * - https://m.youtube.com/watch?v=VIDEO_ID
 * - Loom and Vimeo URLs
 */
export function convertToEmbedUrl(rawUrl: string): ParsedVideo {
  const trimmed = rawUrl.trim();
  if (!trimmed) {
    return { embedUrl: '', watchUrl: '', isYouTube: false, provider: 'generic' };
  }

  // 1. YouTube parser
  const ytRegex =
    /(?:https?:\/\/)?(?:www\.|m\.)?(?:youtube\.com\/(?:watch\?(?:.*&)?v=|embed\/|v\/|shorts\/|live\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/i;
  const ytMatch = trimmed.match(ytRegex);

  if (ytMatch && ytMatch[1]) {
    const videoId = ytMatch[1];
    return {
      embedUrl: `https://www.youtube.com/embed/${videoId}`,
      watchUrl: `https://www.youtube.com/watch?v=${videoId}`,
      isYouTube: true,
      videoId,
      provider: 'youtube',
    };
  }

  // 2. Loom parser: loom.com/share/ID -> loom.com/embed/ID
  const loomRegex =
    /(?:https?:\/\/)?(?:www\.)?loom\.com\/(?:share|embed)\/([a-zA-Z0-9_-]+)/i;
  const loomMatch = trimmed.match(loomRegex);
  if (loomMatch && loomMatch[1]) {
    const loomId = loomMatch[1];
    return {
      embedUrl: `https://www.loom.com/embed/${loomId}`,
      watchUrl: `https://www.loom.com/share/${loomId}`,
      isYouTube: false,
      provider: 'loom',
    };
  }

  // 3. Vimeo parser: vimeo.com/ID -> player.vimeo.com/video/ID
  const vimeoRegex =
    /(?:https?:\/\/)?(?:www\.)?vimeo\.com\/(?:video\/)?([0-9]+)/i;
  const vimeoMatch = trimmed.match(vimeoRegex);
  if (vimeoMatch && vimeoMatch[1]) {
    const vimeoId = vimeoMatch[1];
    return {
      embedUrl: `https://player.vimeo.com/video/${vimeoId}`,
      watchUrl: `https://vimeo.com/${vimeoId}`,
      isYouTube: false,
      provider: 'vimeo',
    };
  }

  // Generic fallback
  return {
    embedUrl: trimmed,
    watchUrl: trimmed,
    isYouTube: false,
    provider: 'generic',
  };
}

function parseTimestampToSeconds(ts: string): number {
  const parts = ts.split(':').map((p) => parseInt(p, 10));
  if (parts.length === 2 && !isNaN(parts[0]) && !isNaN(parts[1])) {
    return parts[0] * 60 + parts[1];
  }
  return 0;
}

export const VideoDemoSection: React.FC = () => {
  const [selectedChapter, setSelectedChapter] = useState(0);
  const [customVideoUrl, setCustomVideoUrl] = useState('');
  const [savedVideoUrl, setSavedVideoUrl] = useState('');
  const [showUrlInput, setShowUrlInput] = useState(false);
  const [saveSuccess, setSaveSuccess] = useState(false);
  const [hasEmbedBlockedWarning, setHasEmbedBlockedWarning] = useState(false);

  // Restore saved video link from localStorage if user previously submitted one
  useEffect(() => {
    try {
      const stored = localStorage.getItem('f1_demo_video_url');
      if (stored) {
        setSavedVideoUrl(stored);
        setCustomVideoUrl(stored);
      }
    } catch {
      // ignore storage access errors
    }
  }, []);

  // Parse current saved video into embed & watch formats
  const parsedVideo = useMemo(() => {
    return convertToEmbedUrl(savedVideoUrl);
  }, [savedVideoUrl]);

  // Construct iframe embed URL with active chapter start time
  const currentChapterSeconds = useMemo(() => {
    const chapter = DEMO_VIDEO_CHAPTERS[selectedChapter];
    return chapter ? parseTimestampToSeconds(chapter.timestamp) : 0;
  }, [selectedChapter]);

  const activeIframeSrc = useMemo(() => {
    if (!parsedVideo.embedUrl) return '';

    if (parsedVideo.isYouTube) {
      // Append rel=0 and start timestamp if a chapter is selected
      const params = new URLSearchParams();
      params.set('rel', '0');
      params.set('modestbranding', '1');
      if (currentChapterSeconds > 0) {
        params.set('start', currentChapterSeconds.toString());
      }
      return `${parsedVideo.embedUrl}?${params.toString()}`;
    }

    return parsedVideo.embedUrl;
  }, [parsedVideo, currentChapterSeconds]);

  // Direct watch URL for external button
  const directWatchUrl = useMemo(() => {
    if (!parsedVideo.watchUrl) return '';
    if (parsedVideo.isYouTube && currentChapterSeconds > 0) {
      return `${parsedVideo.watchUrl}&t=${currentChapterSeconds}s`;
    }
    return parsedVideo.watchUrl;
  }, [parsedVideo, currentChapterSeconds]);

  const handleSaveVideoUrl = (e: React.FormEvent) => {
    e.preventDefault();
    if (customVideoUrl.trim()) {
      const trimmed = customVideoUrl.trim();
      setSavedVideoUrl(trimmed);
      try {
        localStorage.setItem('f1_demo_video_url', trimmed);
      } catch {
        // ignore
      }
      setSaveSuccess(true);
      setHasEmbedBlockedWarning(false);
      setTimeout(() => setSaveSuccess(false), 3500);
    }
  };

  const handleClearVideo = () => {
    setSavedVideoUrl('');
    setCustomVideoUrl('');
    try {
      localStorage.removeItem('f1_demo_video_url');
    } catch {
      // ignore
    }
  };

  return (
    <div className="p-6 sm:p-8 rounded-xl bg-slate-900/90 border border-slate-800 shadow-xl">
      {/* Header and Controls */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-800">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#e10600]">
            <span>Visual Demonstration</span>
            <span aria-hidden="true">·</span>
            <span>Video Walkthrough</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-white uppercase font-['Outfit'] mt-1">
            Project Demonstration Video Walkthrough
          </h3>
          <p className="text-xs text-slate-300 mt-1">
            Structured demonstration of the Tableau dashboard, 3 stakeholder scenarios, and methodology for Skill Wallet mentor evaluation.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2.5 shrink-0">
          {parsedVideo.watchUrl && (
            <a
              href={directWatchUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-1.5 text-xs font-semibold text-white bg-red-600 hover:bg-red-500 rounded transition-colors flex items-center gap-1.5 shadow-sm"
              title="Open video directly in new tab"
            >
              <Youtube className="w-3.5 h-3.5" />
              <span>Watch on YouTube</span>
              <ExternalLink className="w-3 h-3 ml-0.5" />
            </a>
          )}

          <button
            onClick={() => setShowUrlInput(!showUrlInput)}
            className="px-3.5 py-1.5 text-xs font-semibold text-slate-200 hover:text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded transition-colors flex items-center gap-1.5 cursor-pointer"
          >
            <Link2 className="w-3.5 h-3.5" />
            <span>{showUrlInput ? 'Hide Video Linker' : savedVideoUrl ? 'Change Video Link' : 'Embed Video Link'}</span>
          </button>

          {savedVideoUrl && (
            <button
              onClick={handleClearVideo}
              className="px-2.5 py-1.5 text-xs font-medium text-slate-400 hover:text-white bg-slate-900 border border-slate-800 rounded transition-colors flex items-center gap-1 cursor-pointer"
              title="Clear saved video link"
            >
              <RotateCcw className="w-3 h-3" />
              <span>Reset</span>
            </button>
          )}
        </div>
      </div>

      {/* Video URL Input & Automatic Conversion Box */}
      {showUrlInput && (
        <form onSubmit={handleSaveVideoUrl} className="my-5 p-4 sm:p-5 rounded-lg bg-slate-950 border border-slate-800 space-y-3">
          <div className="flex items-center justify-between">
            <label htmlFor="video-url" className="block text-xs font-semibold text-slate-200">
              Paste your YouTube link (normal watch or share URL accepted):
            </label>
            <span className="text-[11px] font-mono text-slate-400">
              Auto-converts to embed format
            </span>
          </div>

          <div className="flex flex-col sm:flex-row gap-2">
            <input
              id="video-url"
              type="text"
              value={customVideoUrl}
              onChange={(e) => setCustomVideoUrl(e.target.value)}
              placeholder="e.g. https://www.youtube.com/watch?v=... or https://youtu.be/..."
              className="flex-1 bg-slate-900 border border-slate-700 rounded px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#e10600]"
            />
            <button
              type="submit"
              className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white bg-[#e10600] hover:bg-[#c00500] rounded transition-colors cursor-pointer shrink-0"
            >
              Apply & Convert
            </button>
          </div>

          <p className="text-[11px] text-slate-400 leading-relaxed">
            Accepts any YouTube link format (<code>youtube.com/watch?v=...</code>, <code>youtu.be/...</code>, <code>youtube.com/embed/...</code>, or <code>loom.com</code>). The app will extract the video ID and embed it cleanly with no connect errors.
          </p>

          {saveSuccess && (
            <div className="p-2.5 rounded bg-emerald-950/60 border border-emerald-500/40 text-xs text-emerald-300 flex items-center gap-2">
              <Check className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>
                Link converted and applied! Embed URL: <code className="font-mono text-[11px] text-white">{parsedVideo.embedUrl}</code>
              </span>
            </div>
          )}
        </form>
      )}

      {/* Video Player Display Container (Responsive 16:9) */}
      <div className="mt-6 grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Main 16:9 Video Player Screen */}
        <div className="lg:col-span-8 flex flex-col gap-3">
          <div className="relative w-full aspect-video rounded-lg overflow-hidden bg-slate-950 border border-slate-800 shadow-2xl flex items-center justify-center">
            {parsedVideo.embedUrl ? (
              <iframe
                key={activeIframeSrc}
                src={activeIframeSrc}
                title="F1 Race Intelligence Video Walkthrough"
                className="w-full h-full border-0 aspect-video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                loading="eager"
              />
            ) : (
              <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-gradient-to-br from-slate-950 via-slate-900 to-[#0b0f19]">
                <div className="w-16 h-16 rounded-full bg-[#e10600]/20 border border-[#e10600]/40 flex items-center justify-center text-[#e10600] mb-4">
                  <Video className="w-8 h-8" />
                </div>
                <h4 className="text-base font-bold text-white mb-1 font-['Outfit']">
                  Capstone Video Walkthrough Ready to Connect
                </h4>
                <p className="text-xs text-slate-400 max-w-md mb-4 leading-relaxed">
                  Active chapter: <span className="text-white font-medium">{DEMO_VIDEO_CHAPTERS[selectedChapter].title}</span> ({DEMO_VIDEO_CHAPTERS[selectedChapter].timestamp})
                </p>
                <button
                  onClick={() => setShowUrlInput(true)}
                  className="px-4 py-2 text-xs font-semibold text-white bg-[#e10600] hover:bg-[#c00500] rounded transition-colors flex items-center gap-1.5 cursor-pointer shadow-sm"
                >
                  <Link2 className="w-3.5 h-3.5" />
                  <span>Paste Your YouTube Video Link</span>
                </button>
              </div>
            )}
          </div>

          {/* Fallback Message & Action Bar for Blocked Embedding */}
          {parsedVideo.embedUrl ? (
            <div className="p-3.5 rounded-lg bg-slate-950 border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
              <div className="flex items-start gap-2.5 text-slate-300">
                <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  If the video displays <em>"Video unavailable"</em> or embedding is blocked by permissions or browser privacy shields, you can open it directly:
                </span>
              </div>
              <a
                href={directWatchUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 text-xs font-semibold text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded transition-colors flex items-center gap-1.5 shrink-0 whitespace-nowrap"
              >
                <Youtube className="w-3.5 h-3.5 text-red-500" />
                <span>Watch on YouTube</span>
                <ExternalLink className="w-3 h-3 text-slate-400" />
              </a>
            </div>
          ) : (
            <div className="p-3 rounded-lg bg-slate-950/70 border border-slate-800/80 text-[11px] text-slate-400 flex items-center gap-2">
              <Info className="w-3.5 h-3.5 text-[#e10600] shrink-0" />
              <span>
                Standard watch links (e.g. <code>https://www.youtube.com/watch?v=...</code>) are automatically reformatted to YouTube's official embed format to prevent connection refusal.
              </span>
            </div>
          )}
        </div>

        {/* Video Chapters Timeline Navigation */}
        <div className="lg:col-span-4 space-y-2">
          <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
            <span>Walkthrough Chapters</span>
            <span className="text-[11px] font-mono text-slate-500">6 Chapters</span>
          </div>

          <div className="space-y-1.5 max-h-[380px] overflow-y-auto pr-1 custom-scrollbar">
            {DEMO_VIDEO_CHAPTERS.map((ch, idx) => {
              const isSelected = selectedChapter === idx;
              return (
                <button
                  key={idx}
                  onClick={() => setSelectedChapter(idx)}
                  className={`w-full p-3 rounded-lg border text-left transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-slate-800 border-[#e10600] text-white'
                      : 'bg-slate-950/60 border-slate-800/80 text-slate-300 hover:bg-slate-900/60'
                  }`}
                >
                  <div className="flex items-center justify-between text-[11px] font-mono mb-1">
                    <span className={isSelected ? 'text-[#e10600] font-bold' : 'text-slate-400'}>
                      {ch.timestamp}
                    </span>
                    <span className="text-[10px] text-slate-400">Chapter {idx + 1}</span>
                  </div>
                  <div className="text-xs font-semibold leading-snug">
                    {ch.title}
                  </div>
                  <p className="text-[11px] text-slate-400 mt-1 line-clamp-2">
                    {ch.summary}
                  </p>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
