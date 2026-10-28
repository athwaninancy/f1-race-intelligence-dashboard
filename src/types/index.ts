export interface FeatureItem {
  id: string;
  title: string;
  category: 'driver' | 'constructor' | 'circuit' | 'kpi' | 'filters' | 'telemetry' | 'advanced';
  status: 'completed' | 'planned';
  description: string;
  visualMechanism: string;
  analyticalImpact: string;
}

export interface ScenarioItem {
  id: string;
  scenarioTitle: string;
  personaName: string;
  role: string;
  organization: string;
  avatarInitials: string;
  overview: string;
  coreObjective: string;
  keyQuestions: string[];
  dashboardInsights: string[];
  recordsCovered: string;
  actionableDecision: string;
}

export interface EpicTask {
  id: string;
  epicNumber: number;
  title: string;
  complexity: 'Low' | 'Medium' | 'High';
  duration: string;
  progressPercent: number;
  status: 'completed' | 'planned';
  storiesCount: number;
  subtasksCount: number;
  description: string;
  tasks: string[];
}

export interface SystemRequirement {
  component: string;
  minimum: string;
  recommended: string;
  category: 'hardware' | 'software' | 'environment';
}

export interface VideoChapter {
  timestamp: string;
  title: string;
  summary: string;
}

export interface NarrationSegment {
  timeCode: string;
  section: string;
  text: string;
}
