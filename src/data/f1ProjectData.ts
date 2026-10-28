import { EpicTask, FeatureItem, NarrationSegment, ScenarioItem, SystemRequirement, VideoChapter } from '../types';

export const PROJECT_METADATA = {
  title: 'FORMULA 1 Race Intelligence Dashboard Analysis Report (2010–2026)',
  program: 'Data Analytics with Tableau',
  platform: 'Skill Wallet',
  projectType: 'Individual Capstone Project',
  category: 'Other / Individual',
  mentorStatus: 'No mentor assigned yet',
  totalEpics: 8,
  totalTasks: 14,
  totalSubtasks: 0,
  datasetScope: '6,464 Race Records across 17 Formula 1 Seasons (2010–2026)',
  tableauEmbedUrl: 'https://public.tableau.com/views/f1_17931303640870/Dashboard1?:language=en-US&:display_count=n&:origin=viz_share_link',
  tableauDirectUrl: 'https://public.tableau.com/views/f1_17931303640870/Dashboard1?:language=en-US&:display_count=n&:origin=viz_share_link',
  tokens: 0,
  credits: 300,
};

export const INTRODUCTION_TEXT = {
  lead: `This report delves into the captivating realm of Formula 1 Race Intelligence, providing a comprehensive visual exploration of key aspects and trends in the world's premier motorsport competition. Through visual representations, readers can gain valuable insights into driver performance, team championship trajectories, tyre compound strategies, circuit-level race participation, driver reliability and DNF analysis, and global podium achievements.`,
  impact: `These visualizations enable intuitive analysis, allowing stakeholders — including team strategists, race engineers, motorsport journalists, and F1 fans — to uncover patterns, identify areas of strength or concern, and make data-driven decisions.`,
  toolsUsage: `By harnessing the power of Tableau, this report not only presents the data in a visually appealing manner but also provides an interactive experience for readers to explore the intricacies of Formula 1 race intelligence. To extract insights from the data and present them in the form of visualizations, Dashboards, and Story, the Tableau tool was employed.`,
};

export const PROJECT_OBJECTIVES = [
  {
    id: 'obj-1',
    title: 'Multi-Season Telemetry & Standings Synthesis',
    description: 'Consolidate 6,464 individual race records spanning 17 championship seasons (2010–2026) into clean, high-performance Tableau data extracts.',
    metric: '17 Championship Seasons Analyzed',
  },
  {
    id: 'obj-2',
    title: 'Cross-Era Driver & Constructor Benchmarking',
    description: 'Deliver interactive multi-filter views comparing driver points accumulations, podium distributions, and team championship trajectories.',
    metric: '100% Normalized Scoring Across Eras',
  },
  {
    id: 'obj-3',
    title: 'Circuit Geographics & Reliability Analysis',
    description: 'Map global Grand Prix host venues and classify Did Not Finish (DNF) mechanical vs incident failure types to evaluate regulatory impact.',
    metric: 'Granular Failure Reason Categorization',
  },
  {
    id: 'obj-4',
    title: 'Role-Based Stakeholder Decision Support',
    description: 'Address distinct real-world analytical use cases for Team Performance Strategists, Broadcast Media Analysts, and FIA Technical Regulators.',
    metric: '3 Verified Persona Workflows',
  },
];

export const VERIFIED_FEATURES: FeatureItem[] = [
  {
    id: 'feat-driver',
    title: 'Driver Performance Leaderboard',
    category: 'driver',
    status: 'completed',
    description: 'Interactive ranking of driver points, podium finishes, and cumulative career trajectories across 17 seasons.',
    visualMechanism: 'Horizontal ranked bar chart with dynamic season parameters and driver tooltip cards.',
    analyticalImpact: 'Enables rapid identification of generational dominances, career consistency, and podium conversion ratios.',
  },
  {
    id: 'feat-constructor',
    title: 'Constructor Performance Benchmark',
    category: 'constructor',
    status: 'completed',
    description: 'Championship trajectories comparing team points accumulation, constructor dominance cycles, and mid-field battles.',
    visualMechanism: 'Multi-line trajectory trend charts segmented by constructor teams (Red Bull, Mercedes, Ferrari, McLaren, etc.).',
    analyticalImpact: 'Directly helps team strategists assess gap-to-front and historical development velocity over regulatory eras.',
  },
  {
    id: 'feat-circuits',
    title: 'Grand Prix Races by Circuit & Country',
    category: 'circuit',
    status: 'completed',
    description: 'Geographic and circuit-level breakdown of race participation, host venue frequencies, and track characteristics.',
    visualMechanism: 'Geographic symbol map and circuit frequency bar distribution linking venues to race dates.',
    analyticalImpact: 'Shows the worldwide expansion of the Formula 1 calendar and venue-specific historical performance.',
  },
  {
    id: 'feat-kpis',
    title: 'KPI Summary & Race Telemetry Cards',
    category: 'kpi',
    status: 'completed',
    description: 'High-level metric cards displaying total race records (6,464), active seasons (17), tracked circuits, and reliability indices.',
    visualMechanism: 'Dedicated KPI scorecards with tabular numerals and contextual deltas.',
    analyticalImpact: 'Provides immediate contextual scope for executives and broadcast producers before drilling down into granular data.',
  },
  {
    id: 'feat-filters',
    title: 'Interactive Multi-Dimension Filters',
    category: 'filters',
    status: 'completed',
    description: 'Global dashboard filters allowing instantaneous slicing by Season (2010–2026), Driver Name, Constructor Team, and Grand Prix Circuit.',
    visualMechanism: 'Tableau cascading quick filters with single/multi-select dropdowns and reset actions.',
    analyticalImpact: 'Eliminates report friction by letting users isolate specific eras, rivalries, or circuits with zero latency.',
  },
  // Planned Enhancements
  {
    id: 'feat-telemetry-live',
    title: 'Lap-by-Lap Microsector & Delta Telemetry',
    category: 'telemetry',
    status: 'planned',
    description: 'Ingestion of high-frequency GPS microsector data and throttle/brake traces for corner-by-corner pace comparison.',
    visualMechanism: 'High-frequency line telemetry traces synchronized with circuit mini-map overlays.',
    analyticalImpact: 'Will pinpoint precise aerodynamic and apex corner speed advantages across specific qualifying sectors.',
  },
  {
    id: 'feat-tyre-degradation',
    title: 'Predictive Tyre Degradation & Pit Window Optimizer',
    category: 'advanced',
    status: 'planned',
    description: 'Statistical degradation curves for Soft, Medium, Hard, and Wet compounds mapped against track temperature and stint length.',
    visualMechanism: 'Decay curve heatmaps with automated recommended pit window brackets.',
    analyticalImpact: 'Will enable predictive in-race strategy simulations to exploit undercut and overcut tactical opportunities.',
  },
  {
    id: 'feat-fia-anomaly',
    title: 'Automated FIA Regulatory Compliance & DNF Anomaly Engine',
    category: 'advanced',
    status: 'planned',
    description: 'Machine learning outlier detection for mechanical failure clusters following major technical regulation overhauls.',
    visualMechanism: 'Categorized anomaly score matrices and automated regulatory trend flags.',
    analyticalImpact: 'Supports regulatory bodies in assessing car safety evolutions and component reliability standards.',
  },
  {
    id: 'feat-tableau-story',
    title: 'Tableau Guided Story Points Presentation Mode',
    category: 'advanced',
    status: 'planned',
    description: 'Curated narrative walk-through chapters embedded directly into Tableau Story Points for classroom and executive briefings.',
    visualMechanism: 'Tableau Story navigation bar with step-by-step editorial callouts.',
    analyticalImpact: 'Delivers an automated executive briefing path for non-technical stakeholders.',
  },
];

export const SCENARIO_ANALYSES: ScenarioItem[] = [
  {
    id: 'scenario-1',
    scenarioTitle: 'Scenario 1: Mr. Arnold - F1 Team Performance Strategist',
    personaName: 'Rajan',
    role: 'Senior Performance Strategist',
    organization: 'Mid-Tier Formula 1 Constructor Team',
    avatarInitials: 'RA',
    overview: `Rajan is a senior performance strategist at a mid-tier Formula 1 constructor team preparing for the upcoming season. He needs to benchmark his team's championship points trajectory against Red Bull Racing and Mercedes, evaluate how tyre compound strategies (Soft, Medium, Hard, Intermediate) affect race outcomes across different circuit types, and identify which drivers and nationalities represent the strongest talent pools globally.`,
    coreObjective: `Using the F1 Race Intelligence Dashboard built on 6,464 race records across 17 seasons, Rajan aims to develop a data-driven race and recruitment strategy to climb the Constructors' Championship standings.`,
    keyQuestions: [
      `How does our constructor points growth trajectory compare against tier-1 benchmark teams (Red Bull Racing, Mercedes)?`,
      `Which tyre compound strategies yield superior point returns on high-degradation versus low-degradation circuits?`,
      `What historical driver talent pools offer the highest podium-to-start conversion ratios for future seat signings?`,
    ],
    dashboardInsights: [
      `Constructor trajectories highlight decisive championship inflection points where aero package upgrades widened point margins.`,
      `Filtering by circuit type isolates aerodynamic downforce dependencies versus power unit advantages.`,
      `Driver consistency distributions reveal top performers with consistent top-6 finishes despite machinery limitations.`,
    ],
    recordsCovered: '6,464 Race Records (2010–2026)',
    actionableDecision: 'Optimize 2-stop versus 1-stop pit strategies based on historical circuit tyre survival rates, and prioritize driver scouting based on normalized points-per-finish metrics.',
  },
  {
    id: 'scenario-2',
    scenarioTitle: 'Scenario 2: Ms. lisa - Motorsport Broadcast Analyst',
    personaName: 'Divya',
    role: 'Motorsport Data Journalist & Broadcast Analyst',
    organization: 'Leading Sports Media Network',
    avatarInitials: 'DL',
    overview: `Divya is a motorsport data journalist and broadcast analyst at a leading sports media network preparing pre-race and post-race content for Formula 1 coverage. She needs to quickly retrieve the Driver Performance Leaderboard showing cumulative points across seasons, identify which countries have hosted the most Grand Prix rounds, and visualize podium achievement distributions by driver and team for compelling on-screen infographics.`,
    coreObjective: `The F1 Race Intelligence Dashboard enables Divya to rapidly pull data-rich visuals and statistics for live broadcast, editorial pieces, and fan engagement content.`,
    keyQuestions: [
      `What are the historical win and podium distributions for current championship contenders entering this weekend?`,
      `Which host nations have established the longest continuous Grand Prix traditions across the 17-season historical record?`,
      `What are the head-to-head points trends between leading teammates throughout their careers?`,
    ],
    dashboardInsights: [
      `Instant filtering by season allows instant generation of on-screen TV lower-third graphics during live race commentary.`,
      `Circuit participation maps contextualize historic milestones when revisiting legendary circuits like Silverstone, Monza, and Spa.`,
      `Podium distribution visualizations supply dynamic storyline fodder for pre-race panel discussions.`,
    ],
    recordsCovered: '17 Championship Seasons Telemetry',
    actionableDecision: 'Deploy verified statistical infographics in live broadcast rundown scripts to enhance viewer engagement and viewer retention during race build-up.',
  },
  {
    id: 'scenario-3',
    scenarioTitle: 'Scenario 3: Mr. Gilchrist - F1 Technical Regulation Analyst',
    personaName: 'Arvind',
    role: 'Technical Regulation Compliance Analyst',
    organization: 'Fédération Internationale de l’Automobile (FIA)',
    avatarInitials: 'AG',
    overview: `Arvind works at the FIA as a technical regulation compliance analyst. He is tasked with studying DNF (Did Not Finish) patterns across drivers to identify whether specific failure types — engine failures, brake failures, collisions, mechanical issues — are concentrated in particular teams or circuit types. He also needs to evaluate driver reliability scores across all 17 seasons to assess whether regulatory changes have improved race completion rates.`,
    coreObjective: `Using the Driver Reliability Analysis stacked bar chart on the Race Intelligence Dashboard, Arvind can identify systemic failure patterns and present evidence-based recommendations for technical regulation improvements.`,
    keyQuestions: [
      `Did the 2014 hybrid powertrain or 2022 ground-effect regulation overhauls spike mechanical DNF rates?`,
      `Are engine failures disproportionately clustered around specific power unit manufacturers across consecutive seasons?`,
      `Do street circuits exhibit significantly higher collision-induced retirement rates compared to permanent road courses?`,
    ],
    dashboardInsights: [
      `Stacked bar reliability charts reveal that mechanical retirements spike during the first year of major technical regulations and taper off as engine architectures mature.`,
      `Collision retirements correlate strongly with specific high-risk street circuits, providing safety barrier recommendations.`,
      `Driver reliability scoring proves an upward overall completion trend across the 17-season window.`,
    ],
    recordsCovered: 'Full 17-Season DNF Categorization',
    actionableDecision: 'Draft evidence-based technical directives for standardized engine component limits and revise track safety perimeter regulations for high-incident street circuits.',
  },
];

export const EPICS_ROADMAP: EpicTask[] = [
  {
    id: 'epic-1',
    epicNumber: 1,
    title: 'Data Collection & Extraction from Database',
    complexity: 'Medium',
    duration: '5h 0m',
    progressPercent: 100,
    status: 'completed',
    storiesCount: 2,
    subtasksCount: 0,
    description: 'Data collection is the process of gathering and measuring information on variables of interest, in an established systematic fashion that enables one to answer stated research questions, test hypotheses, evaluate outcomes and generate insights from the data.',
    tasks: ['Downloading the Dataset', 'Connect Dataset with Tableau'],
  },
  {
    id: 'epic-2',
    epicNumber: 2,
    title: 'Data Preparation & Cleaning',
    complexity: 'Medium',
    duration: '4h 30m',
    progressPercent: 100,
    status: 'completed',
    storiesCount: 2,
    subtasksCount: 0,
    description: 'Cleaning raw Formula 1 historical records, handling null values, standardizing driver and constructor naming conventions across acquisitions, and parsing DNF retirement reason codes.',
    tasks: ['Handling Missing & Null Values', 'Data Type Standardization & Calculations'],
  },
  {
    id: 'epic-3',
    epicNumber: 3,
    title: 'Data Visualization Construction',
    complexity: 'High',
    duration: '6h 0m',
    progressPercent: 100,
    status: 'completed',
    storiesCount: 2,
    subtasksCount: 0,
    description: 'Building dedicated Tableau worksheets for Driver Leaderboards, Constructor Trajectories, Global Circuit Maps, and Driver Reliability stacked bars.',
    tasks: ['Developing Core Worksheets', 'Designing Visual Charts & Color Palettes'],
  },
  {
    id: 'epic-4',
    epicNumber: 4,
    title: 'Interactive Dashboard Assembly',
    complexity: 'High',
    duration: '5h 30m',
    progressPercent: 100,
    status: 'completed',
    storiesCount: 2,
    subtasksCount: 0,
    description: 'Assembling interactive dashboard views, binding global quick filters, formatting containers, configuring tooltips, and testing responsiveness.',
    tasks: ['Dashboard Layout & Hierarchy', 'Global Filter Actions & Interactivity'],
  },
  {
    id: 'epic-5',
    epicNumber: 5,
    title: 'Story Points & Presentation Flow',
    complexity: 'Medium',
    duration: '4h 0m',
    progressPercent: 85,
    status: 'completed',
    storiesCount: 2,
    subtasksCount: 0,
    description: 'Drafting structured story points that walk stakeholders through the historical narrative of the 2010–2026 seasons.',
    tasks: ['Drafting Story Point Arc', 'Narrative Annotations & Captions'],
  },
  {
    id: 'epic-6',
    epicNumber: 6,
    title: 'Performance Testing & Optimization',
    complexity: 'Low',
    duration: '3h 0m',
    progressPercent: 100,
    status: 'completed',
    storiesCount: 1,
    subtasksCount: 0,
    description: 'Extract optimization, query performance tuning, removing unused fields, and verifying smooth rendering on Tableau Public.',
    tasks: ['Tableau Performance Recorder Validation', 'Extract Indexing & Render Optimization'],
  },
  {
    id: 'epic-7',
    epicNumber: 7,
    title: 'Web Integration & Responsive Deployment',
    complexity: 'Medium',
    duration: '4h 30m',
    progressPercent: 100,
    status: 'completed',
    storiesCount: 2,
    subtasksCount: 0,
    description: 'Embedding Tableau Public viz into responsive React application with dark theme, audio narration, video placeholder, and accessible controls.',
    tasks: ['Tableau Public Iframe & API Embedding', 'Responsive F1 Dark UI Implementation'],
  },
  {
    id: 'epic-8',
    epicNumber: 8,
    title: 'Project Demonstration & Documentation',
    complexity: 'Medium',
    duration: '4h 0m',
    progressPercent: 90,
    status: 'completed',
    storiesCount: 2,
    subtasksCount: 0,
    description: 'Comprehensive project report documentation, voice narration script, demo video structure, and Skill Wallet submission guidelines.',
    tasks: ['Executive Report & Limitations Writeup', 'Skill Wallet & GitHub Linking Preparation'],
  },
];

export const SYSTEM_REQUIREMENTS: SystemRequirement[] = [
  {
    component: 'Processor (CPU)',
    minimum: 'Dual-core (Intel i3 or equivalent)',
    recommended: 'Intel i5 / Ryzen 5 or higher',
    category: 'hardware',
  },
  {
    component: 'RAM (Memory)',
    minimum: 'Minimum 8 GB',
    recommended: '16 GB for handling large datasets',
    category: 'hardware',
  },
  {
    component: 'Storage',
    minimum: 'Minimum 2–3 GB free',
    recommended: 'SSD with 10+ GB free space',
    category: 'hardware',
  },
  {
    component: 'Operating System',
    minimum: 'Windows 10 (64-bit) / macOS 11+',
    recommended: 'Windows 11 (64-bit) / macOS 13+ (latest supported versions)',
    category: 'environment',
  },
  {
    component: 'Software',
    minimum: 'Tableau Desktop or Tableau Public',
    recommended: 'Tableau Desktop 2023.x / 2024.x or Tableau Public latest',
    category: 'software',
  },
  {
    component: 'Browser',
    minimum: 'Modern HTML5 Browser',
    recommended: 'Latest version of Chrome, Edge, or Safari',
    category: 'software',
  },
  {
    component: 'Data Sources',
    minimum: 'Excel, CSV flat files',
    recommended: 'Normalized CSV / SQL Relational database extracts',
    category: 'software',
  },
  {
    component: 'Internet Connectivity',
    minimum: 'Standard Broadband',
    recommended: 'Stable high-speed connection for Tableau Server / Tableau Cloud',
    category: 'environment',
  },
];

export const TOOLS_LIST = [
  {
    name: 'Tableau Desktop & Tableau Public',
    role: 'Primary Business Intelligence & Visualization Engine',
    description: 'Used to build calculations, dual-axis charts, geographic maps, interactive filter actions, and publish the live embeddable dashboard.',
    badge: 'Core BI Tool',
  },
  {
    name: 'Formula 1 Historical Database (2010–2026)',
    role: 'Primary Dataset (6,464 Records)',
    description: 'Granular race results comprising qualifying positions, points, lap times, pit-stop compounds, constructor standings, and DNF classifications.',
    badge: 'Dataset',
  },
  {
    name: 'Data Preprocessing (Spreadsheets / CSV)',
    role: 'ETL & Schema Normalization',
    description: 'Used for dataset extraction, handling nulls, verifying record counts, and validating season-by-season points system harmonizations.',
    badge: 'Data Pipeline',
  },
  {
    name: 'React, TypeScript & Tailwind CSS',
    role: 'Web Integration & Capstone Portfolio Showcase',
    description: 'Delivers a responsive, accessible web presentation layer with dark F1 aesthetic, live audio synthesis, and interactive stakeholder views.',
    badge: 'Web Stack',
  },
];

export const NARRATION_SEGMENTS: NarrationSegment[] = [
  {
    timeCode: '00:00',
    section: 'Introduction & Project Scope',
    text: `Welcome to the FORMULA 1 Race Intelligence Dashboard Analysis Report, covering 17 seasons from 2010 to 2026. This individual capstone project synthesizes 6,464 race records into an interactive Tableau analytical system designed for team strategists, broadcast journalists, and regulatory officials.`,
  },
  {
    timeCode: '00:45',
    section: 'Data Architecture & Methodology',
    text: `Our data pipeline extracted raw Grand Prix records across drivers, constructors, circuits, and results. Through rigorous data cleaning in Tableau, we normalized points changes, categorized Did Not Finish reasons into mechanical versus incident buckets, and compiled responsive high-speed data extracts.`,
  },
  {
    timeCode: '01:30',
    section: 'Core Dashboard & Verified Visualizations',
    text: `The core dashboard features five verified components: the Driver Performance Leaderboard tracking cumulative points; the Constructor Trajectory benchmark; the global Circuit venue distribution map; KPI overview cards; and cascading multi-dimension filters that let users slice any era in milliseconds.`,
  },
  {
    timeCode: '02:30',
    section: 'Scenario 1: Team Strategist Analysis',
    text: `In Scenario 1, Performance Strategist Rajan uses the constructor trajectory lines to benchmark his mid-tier team against Red Bull and Mercedes. By filtering circuit types and studying tyre compound trends, Rajan uncovers optimal stint lengths to outmaneuver rivals in upcoming championship campaigns.`,
  },
  {
    timeCode: '03:30',
    section: 'Scenario 2: Broadcast Media Production',
    text: `In Scenario 2, Motorsport Journalist Divya relies on the Driver Leaderboard and podium distributions to generate real-time on-screen infographics during live broadcast weekends, giving millions of viewers instant historical context.`,
  },
  {
    timeCode: '04:30',
    section: 'Scenario 3: FIA Technical Regulation Compliance',
    text: `In Scenario 3, FIA Compliance Analyst Arvind investigates DNF patterns across the 17 seasons. The data demonstrates that mechanical retirements spike during the introductory year of major engine regulation shifts, before stabilizing as reliability engineering matures.`,
  },
  {
    timeCode: '05:30',
    section: 'Conclusion & Analytical Limitations',
    text: `While historical points systems and sprint race variations require careful context, the F1 Race Intelligence Dashboard proves the immense value of visual analytics in high-stakes motorsport. Thank you for exploring this project.`,
  },
];

export const DEMO_VIDEO_CHAPTERS: VideoChapter[] = [
  {
    timestamp: '00:00',
    title: 'Project Introduction & Objectives',
    summary: 'Executive overview of the 6,464 records dataset and capstone goals.',
  },
  {
    timestamp: '01:15',
    title: 'Interactive Tableau Dashboard Tour',
    summary: 'Live walkthrough of filters, tooltips, and responsive layout.',
  },
  {
    timestamp: '02:40',
    title: 'Scenario 1: Team Strategist Benchmarking',
    summary: 'Rajan analyzing constructor trajectories and tyre strategy impact.',
  },
  {
    timestamp: '04:00',
    title: 'Scenario 2: Broadcast Infographics Retrieval',
    summary: 'Divya pulling podium distribution and host country statistics.',
  },
  {
    timestamp: '05:20',
    title: 'Scenario 3: FIA DNF Reliability Analysis',
    summary: 'Arvind studying mechanical failure trends across 17 seasons.',
  },
  {
    timestamp: '06:45',
    title: 'Skill Wallet Documentation & Conclusion',
    summary: 'Summary of tools, limitations, and future roadmap enhancements.',
  },
];

export const LIMITATIONS_AND_CONCLUSION = {
  limitations: [
    {
      title: 'Historical Points System Variations',
      detail: 'Formula 1 altered point distribution rules in 2010 (25-18-15-12-10-8-6-4-2-1), added fastest lap points in 2019, and introduced Sprint races with additional points in 2021. Cross-era cumulative comparisons must account for these structural rule differences.',
    },
    {
      title: 'Sprint Race vs Main Grand Prix Granularity',
      detail: 'Certain early sprint race points are aggregated into weekend totals in historical tables rather than separated into standalone mini-race stints.',
    },
    {
      title: 'Tyre Compound Telemetry Availability',
      detail: 'Granular lap-by-lap tyre temperature and compound degradation telemetry is proprietary to Formula 1 teams and Pirelli; published historical data summarizes starting and stint compound types rather than continuous sensor telemetry.',
    },
    {
      title: 'Weather & Track Condition Normalization',
      detail: 'Rain and safety car interventions dramatically alter race outcome points without necessarily reflecting purely chassis or aerodynamic performance.',
    },
  ],
  conclusionText: `The FORMULA 1 Race Intelligence Dashboard Analysis Report bridges complex motorsport telemetry and strategic decision-making through Tableau. By structuring 6,464 race records into clear visual hierarchies, stakeholders across engineering, broadcast media, and regulatory governance can extract verified historical insights within seconds. The dashboard successfully proves that rigorous data preprocessing combined with intuitive business intelligence visualization transforms high-velocity sport telemetry into durable competitive advantage.`,
};

export const SKILL_WALLET_INSTRUCTIONS = [
  {
    step: 1,
    title: 'Initialize & Push Your Project to GitHub',
    description: 'Ensure your code repository is uploaded to your GitHub account as a public repository so your mentor can review the commit history and implementation.',
    command: 'git init\ngit add .\ngit commit -m "feat: complete F1 Race Intelligence Dashboard project"\ngit remote add origin https://github.com/YOUR_USERNAME/f1-race-intelligence-dashboard.git\ngit push -u origin main',
  },
  {
    step: 2,
    title: 'Deploy a Live Demo URL',
    description: 'Host this interactive website on a free platform such as Vercel, Netlify, or GitHub Pages. The build runs Vite ("npm run build"), producing an optimized static web app.',
    command: 'npm run build\n# Connect your repository to Vercel or Netlify for automatic deployment',
  },
  {
    step: 3,
    title: 'Update Links in Skill Wallet',
    description: 'In your Skill Wallet dashboard (as shown in your screenshot): Click the blue "Add Demo Link" button to paste your live website URL, and click "Add Github Link" to paste your repository URL so your mentor can evaluate your project.',
    command: 'Skill Wallet > Projects > Add Demo Link & Add Github Link',
  },
];
