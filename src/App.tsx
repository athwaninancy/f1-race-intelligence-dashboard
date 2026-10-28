import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { TableauSection } from './components/TableauSection';
import { ProjectOverview } from './components/ProjectOverview';
import { ScenarioAnalyses } from './components/ScenarioAnalyses';
import { DataMethodology } from './components/DataMethodology';
import { ToolsSection } from './components/ToolsSection';
import { AudioNarrationSection } from './components/AudioNarrationSection';
import { VideoDemoSection } from './components/VideoDemoSection';
import { GitHubSkillWalletGuide } from './components/GitHubSkillWalletGuide';
import { DocumentationConclusion } from './components/DocumentationConclusion';
import { Footer } from './components/Footer';

export default function App() {
  const [submissionGuideOpen, setSubmissionGuideOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#080b12] text-slate-100 flex flex-col font-sans selection:bg-[#e10600] selection:text-white">
      {/* Top Bar Header */}
      <Header onOpenSubmissionGuide={() => setSubmissionGuideOpen(true)} />

      <main className="flex-1">
        {/* Hero Section */}
        <Hero onOpenSubmissionGuide={() => setSubmissionGuideOpen(true)} />

        {/* Embedded Interactive Tableau Dashboard */}
        <TableauSection />

        {/* Project Overview: Introduction, Objectives, Verified vs Planned Features */}
        <ProjectOverview />

        {/* Three Scenarios: Team Strategist, Broadcast Analyst, FIA Technical Regulation Analyst */}
        <ScenarioAnalyses />

        {/* Data & Methodology: 8 Epics, System Requirements, Technical Architecture */}
        <DataMethodology />

        {/* Tools & Required Competencies */}
        <ToolsSection />

        {/* Audio Player & Demo Video Section */}
        <section id="audio-demo" className="py-16 bg-[#0b0f19] border-b border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            <AudioNarrationSection />
            <VideoDemoSection />
          </div>
        </section>

        {/* Documentation, Limitations & Conclusion */}
        <DocumentationConclusion onOpenSubmissionGuide={() => setSubmissionGuideOpen(true)} />
      </main>

      {/* Footer */}
      <Footer onOpenSubmissionGuide={() => setSubmissionGuideOpen(true)} />

      {/* Beginner-friendly GitHub & Skill Wallet Submission Modal */}
      <GitHubSkillWalletGuide
        isOpen={submissionGuideOpen}
        onClose={() => setSubmissionGuideOpen(false)}
      />
    </div>
  );
}
