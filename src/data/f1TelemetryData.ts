export interface DriverRecord {
  id: string;
  name: string;
  code: string;
  number: number;
  nationality: string;
  team: string;
  seasonsActive: string;
  cumulativePoints: number;
  wins: number;
  podiums: number;
  polePositions: number;
  raceStarts: number;
  dnfCount: number;
  dnfRate: string;
  championships: number;
}

export interface ConstructorRecord {
  id: string;
  name: string;
  country: string;
  titles: number;
  totalPoints: number;
  wins: number;
  podiums: number;
  primaryColor: string;
  trajectory: { season: number; points: number; rank: number }[];
}

export interface CircuitRecord {
  id: string;
  name: string;
  location: string;
  country: string;
  totalRounds: number;
  lengthKm: number;
  laps: number;
  type: 'Permanent Road Course' | 'High-Speed Temple' | 'Street Circuit';
  tyreDegradation: 'High' | 'Medium' | 'Low';
  safetyCarProbability: string;
}

export interface DnfCategory {
  category: string;
  count: number;
  percentage: number;
  description: string;
  regulatoryImpact: string;
}

export interface TyreStrategyRecord {
  compound: 'Soft' | 'Medium' | 'Hard' | 'Intermediate' | 'Full Wet';
  color: string;
  avgStintLaps: number;
  lapPaceDelta: string;
  pointsYieldRatio: string;
  recommendedTrackTemp: string;
  optimalCircuitTypes: string;
}

export const DRIVER_RECORDS: DriverRecord[] = [
  {
    id: 'hamilton',
    name: 'Lewis Hamilton',
    code: 'HAM',
    number: 44,
    nationality: 'British',
    team: 'Mercedes / Ferrari',
    seasonsActive: '2010–2026',
    cumulativePoints: 4639.5,
    wins: 105,
    podiums: 201,
    polePositions: 104,
    raceStarts: 350,
    dnfCount: 31,
    dnfRate: '8.8%',
    championships: 6, // In the 2010-2026 window (6 titles: 2014, 2015, 2017, 2018, 2019, 2020)
  },
  {
    id: 'verstappen',
    name: 'Max Verstappen',
    code: 'VER',
    number: 1,
    nationality: 'Dutch',
    team: 'Red Bull Racing',
    seasonsActive: '2015–2026',
    cumulativePoints: 2985.5,
    wins: 63,
    podiums: 111,
    polePositions: 40,
    raceStarts: 206,
    dnfCount: 32,
    dnfRate: '15.5%',
    championships: 4,
  },
  {
    id: 'vettel',
    name: 'Sebastian Vettel',
    code: 'VET',
    number: 5,
    nationality: 'German',
    team: 'Red Bull / Ferrari / Aston Martin',
    seasonsActive: '2010–2022',
    cumulativePoints: 3098.0,
    wins: 53,
    podiums: 122,
    polePositions: 57,
    raceStarts: 299,
    dnfCount: 43,
    dnfRate: '14.4%',
    championships: 4,
  },
  {
    id: 'alonso',
    name: 'Fernando Alonso',
    code: 'ALO',
    number: 14,
    nationality: 'Spanish',
    team: 'Ferrari / McLaren / Alpine / Aston Martin',
    seasonsActive: '2010–2026',
    cumulativePoints: 2329.0,
    wins: 32,
    podiums: 106,
    polePositions: 22,
    raceStarts: 398,
    dnfCount: 74,
    dnfRate: '18.6%',
    championships: 0, // Titles were 2005-2006
  },
  {
    id: 'bottas',
    name: 'Valtteri Bottas',
    code: 'BOT',
    number: 77,
    nationality: 'Finnish',
    team: 'Williams / Mercedes / Sauber',
    seasonsActive: '2013–2026',
    cumulativePoints: 1797.0,
    wins: 10,
    podiums: 67,
    polePositions: 20,
    raceStarts: 244,
    dnfCount: 28,
    dnfRate: '11.5%',
    championships: 0,
  },
  {
    id: 'perez',
    name: 'Sergio Perez',
    code: 'PER',
    number: 11,
    nationality: 'Mexican',
    team: 'Sauber / McLaren / Force India / Red Bull',
    seasonsActive: '2011–2026',
    cumulativePoints: 1636.0,
    wins: 6,
    podiums: 39,
    polePositions: 3,
    raceStarts: 278,
    dnfCount: 36,
    dnfRate: '12.9%',
    championships: 0,
  },
  {
    id: 'leclerc',
    name: 'Charles Leclerc',
    code: 'LEC',
    number: 16,
    nationality: 'Monegasque',
    team: 'Sauber / Ferrari',
    seasonsActive: '2018–2026',
    cumulativePoints: 1381.0,
    wins: 8,
    podiums: 42,
    polePositions: 26,
    raceStarts: 144,
    dnfCount: 21,
    dnfRate: '14.6%',
    championships: 0,
  },
  {
    id: 'sainz',
    name: 'Carlos Sainz',
    code: 'SAI',
    number: 55,
    nationality: 'Spanish',
    team: 'Toro Rosso / Renault / McLaren / Ferrari / Williams',
    seasonsActive: '2015–2026',
    cumulativePoints: 1226.5,
    wins: 4,
    podiums: 25,
    polePositions: 6,
    raceStarts: 203,
    dnfCount: 33,
    dnfRate: '16.3%',
    championships: 0,
  },
  {
    id: 'norris',
    name: 'Lando Norris',
    code: 'NOR',
    number: 4,
    nationality: 'British',
    team: 'McLaren',
    seasonsActive: '2019–2026',
    cumulativePoints: 964.0,
    wins: 4,
    podiums: 26,
    polePositions: 8,
    raceStarts: 125,
    dnfCount: 11,
    dnfRate: '8.8%',
    championships: 0,
  },
  {
    id: 'russell',
    name: 'George Russell',
    code: 'RUS',
    number: 63,
    nationality: 'British',
    team: 'Williams / Mercedes',
    seasonsActive: '2019–2026',
    cumulativePoints: 669.0,
    wins: 2,
    podiums: 15,
    polePositions: 4,
    raceStarts: 125,
    dnfCount: 16,
    dnfRate: '12.8%',
    championships: 0,
  },
];

export const CONSTRUCTOR_RECORDS: ConstructorRecord[] = [
  {
    id: 'mercedes',
    name: 'Mercedes-AMG Petronas',
    country: 'Germany / UK',
    titles: 8,
    totalPoints: 7392.5,
    wins: 116,
    podiums: 258,
    primaryColor: '#00d2be',
    trajectory: [
      { season: 2010, points: 214, rank: 4 },
      { season: 2012, points: 142, rank: 5 },
      { season: 2014, points: 701, rank: 1 },
      { season: 2016, points: 765, rank: 1 },
      { season: 2018, points: 655, rank: 1 },
      { season: 2020, points: 573, rank: 1 },
      { season: 2022, points: 515, rank: 3 },
      { season: 2024, points: 468, rank: 4 },
      { season: 2026, points: 410, rank: 3 },
    ],
  },
  {
    id: 'redbull',
    name: 'Red Bull Racing',
    country: 'Austria / UK',
    titles: 6,
    totalPoints: 7210.0,
    wins: 120,
    podiums: 279,
    primaryColor: '#0600ef',
    trajectory: [
      { season: 2010, points: 498, rank: 1 },
      { season: 2012, points: 460, rank: 1 },
      { season: 2014, points: 405, rank: 2 },
      { season: 2016, points: 468, rank: 2 },
      { season: 2018, points: 419, rank: 3 },
      { season: 2020, points: 319, rank: 2 },
      { season: 2022, points: 759, rank: 1 },
      { season: 2024, points: 589, rank: 2 },
      { season: 2026, points: 520, rank: 2 },
    ],
  },
  {
    id: 'ferrari',
    name: 'Scuderia Ferrari',
    country: 'Italy',
    titles: 0,
    totalPoints: 6184.0,
    wins: 38,
    podiums: 212,
    primaryColor: '#e10600',
    trajectory: [
      { season: 2010, points: 396, rank: 3 },
      { season: 2012, points: 400, rank: 2 },
      { season: 2014, points: 216, rank: 4 },
      { season: 2016, points: 398, rank: 3 },
      { season: 2018, points: 571, rank: 2 },
      { season: 2020, points: 131, rank: 6 },
      { season: 2022, points: 554, rank: 2 },
      { season: 2024, points: 652, rank: 1 },
      { season: 2026, points: 560, rank: 1 },
    ],
  },
  {
    id: 'mclaren',
    name: 'McLaren F1 Team',
    country: 'United Kingdom',
    titles: 1,
    totalPoints: 3912.0,
    wins: 24,
    podiums: 118,
    primaryColor: '#ff8000',
    trajectory: [
      { season: 2010, points: 454, rank: 2 },
      { season: 2012, points: 378, rank: 3 },
      { season: 2014, points: 181, rank: 5 },
      { season: 2016, points: 76, rank: 6 },
      { season: 2018, points: 62, rank: 6 },
      { season: 2020, points: 202, rank: 3 },
      { season: 2022, points: 159, rank: 5 },
      { season: 2024, points: 666, rank: 1 },
      { season: 2026, points: 590, rank: 1 },
    ],
  },
  {
    id: 'astonmartin',
    name: 'Aston Martin / Force India',
    country: 'United Kingdom',
    titles: 0,
    totalPoints: 2145.0,
    wins: 1,
    podiums: 24,
    primaryColor: '#006f62',
    trajectory: [
      { season: 2010, points: 68, rank: 7 },
      { season: 2012, points: 109, rank: 7 },
      { season: 2014, points: 155, rank: 6 },
      { season: 2016, points: 173, rank: 4 },
      { season: 2018, points: 111, rank: 7 },
      { season: 2020, points: 195, rank: 4 },
      { season: 2022, points: 55, rank: 7 },
      { season: 2024, points: 86, rank: 5 },
      { season: 2026, points: 110, rank: 5 },
    ],
  },
  {
    id: 'alpine',
    name: 'Alpine / Renault',
    country: 'France / UK',
    titles: 0,
    totalPoints: 1740.0,
    wins: 2,
    podiums: 15,
    primaryColor: '#0090ff',
    trajectory: [
      { season: 2010, points: 163, rank: 5 },
      { season: 2012, points: 303, rank: 4 },
      { season: 2014, points: 10, rank: 8 },
      { season: 2016, points: 8, rank: 9 },
      { season: 2018, points: 122, rank: 4 },
      { season: 2020, points: 181, rank: 5 },
      { season: 2022, points: 173, rank: 4 },
      { season: 2024, points: 49, rank: 6 },
      { season: 2026, points: 62, rank: 6 },
    ],
  },
];

export const CIRCUIT_RECORDS: CircuitRecord[] = [
  {
    id: 'silverstone',
    name: 'Silverstone Circuit',
    location: 'Silverstone, Northamptonshire',
    country: 'United Kingdom',
    totalRounds: 18,
    lengthKm: 5.891,
    laps: 52,
    type: 'Permanent Road Course',
    tyreDegradation: 'High',
    safetyCarProbability: '83%',
  },
  {
    id: 'monza',
    name: 'Autodromo Nazionale Monza',
    location: 'Monza, Lombardy',
    country: 'Italy',
    totalRounds: 17,
    lengthKm: 5.793,
    laps: 53,
    type: 'High-Speed Temple',
    tyreDegradation: 'Medium',
    safetyCarProbability: '65%',
  },
  {
    id: 'spa',
    name: 'Circuit de Spa-Francorchamps',
    location: 'Stavelot, Ardennes',
    country: 'Belgium',
    totalRounds: 17,
    lengthKm: 7.004,
    laps: 44,
    type: 'Permanent Road Course',
    tyreDegradation: 'High',
    safetyCarProbability: '88%',
  },
  {
    id: 'monaco',
    name: 'Circuit de Monaco',
    location: 'Monte Carlo',
    country: 'Monaco',
    totalRounds: 16,
    lengthKm: 3.337,
    laps: 78,
    type: 'Street Circuit',
    tyreDegradation: 'Low',
    safetyCarProbability: '79%',
  },
  {
    id: 'suzuka',
    name: 'Suzuka International Racing Course',
    location: 'Suzuka, Mie Prefecture',
    country: 'Japan',
    totalRounds: 15,
    lengthKm: 5.807,
    laps: 53,
    type: 'Permanent Road Course',
    tyreDegradation: 'High',
    safetyCarProbability: '71%',
  },
  {
    id: 'interlagos',
    name: 'Autódromo José Carlos Pace (Interlagos)',
    location: 'São Paulo',
    country: 'Brazil',
    totalRounds: 16,
    lengthKm: 4.309,
    laps: 71,
    type: 'Permanent Road Course',
    tyreDegradation: 'High',
    safetyCarProbability: '85%',
  },
  {
    id: 'cota',
    name: 'Circuit of the Americas (COTA)',
    location: 'Austin, Texas',
    country: 'United States',
    totalRounds: 13,
    lengthKm: 5.513,
    laps: 56,
    type: 'Permanent Road Course',
    tyreDegradation: 'High',
    safetyCarProbability: '62%',
  },
  {
    id: 'yasmarina',
    name: 'Yas Marina Circuit',
    location: 'Abu Dhabi',
    country: 'United Arab Emirates',
    totalRounds: 17,
    lengthKm: 5.281,
    laps: 58,
    type: 'Permanent Road Course',
    tyreDegradation: 'Medium',
    safetyCarProbability: '48%',
  },
  {
    id: 'marinabay',
    name: 'Marina Bay Street Circuit',
    location: 'Marina Bay',
    country: 'Singapore',
    totalRounds: 15,
    lengthKm: 4.940,
    laps: 62,
    type: 'Street Circuit',
    tyreDegradation: 'Medium',
    safetyCarProbability: '100%',
  },
  {
    id: 'redbullring',
    name: 'Red Bull Ring',
    location: 'Spielberg, Styria',
    country: 'Austria',
    totalRounds: 15,
    lengthKm: 4.318,
    laps: 71,
    type: 'Permanent Road Course',
    tyreDegradation: 'Medium',
    safetyCarProbability: '73%',
  },
];

export const DNF_CATEGORIES: DnfCategory[] = [
  {
    category: 'Power Unit / Internal Combustion Engine',
    count: 382,
    percentage: 36.4,
    description: 'Turbocharger, MGU-K, MGU-H, exhaust manifold or piston failure.',
    regulatoryImpact: 'Spikes in 2014 (V6 turbo hybrid debut) and stabilizes by 2017.',
  },
  {
    category: 'On-Track Collision & Incident Damage',
    count: 278,
    percentage: 26.5,
    description: 'Lap 1 turn 1 pinches, barrier impacts, and wheel-to-wheel damage.',
    regulatoryImpact: 'Concentrated predominantly on narrow street circuits (Monaco, Baku, Singapore).',
  },
  {
    category: 'Gearbox & Drivetrain Transmission',
    count: 147,
    percentage: 14.0,
    description: 'Hydraulic pressure drop, differential seizure, dog ring failure.',
    regulatoryImpact: 'Regulated by strict consecutive race gearbox penalty quotas.',
  },
  {
    category: 'Electrical, Sensor & Battery Telemetry',
    count: 124,
    percentage: 11.8,
    description: 'Energy store failure, wiring harness grounding, ECU safety shutoff.',
    regulatoryImpact: 'High in early hybrid era, reduced with standardized sensor specs.',
  },
  {
    category: 'Brake, Suspension & Structural Failures',
    count: 119,
    percentage: 11.3,
    description: 'Carbon brake disc delamination, wishbone fracture, puncture.',
    regulatoryImpact: 'Influenced by high-kerb loadings at Spielberg and Monza.',
  },
];

export const TYRE_STRATEGIES: TyreStrategyRecord[] = [
  {
    compound: 'Soft',
    color: '#e10600',
    avgStintLaps: 16,
    lapPaceDelta: '0.00s (Baseline Benchmark)',
    pointsYieldRatio: '28.4% Top-3 Finishes',
    recommendedTrackTemp: '20°C – 32°C',
    optimalCircuitTypes: 'Qualifying & Low-Degradation Street Venues',
  },
  {
    compound: 'Medium',
    color: '#fbbf24',
    avgStintLaps: 26,
    lapPaceDelta: '+0.55s / lap',
    pointsYieldRatio: '46.2% Points Scored',
    recommendedTrackTemp: '28°C – 45°C',
    optimalCircuitTypes: 'Prime Race Stint Backbone for 1-Stop and 2-Stop',
  },
  {
    compound: 'Hard',
    color: '#f8fafc',
    avgStintLaps: 38,
    lapPaceDelta: '+1.15s / lap',
    pointsYieldRatio: '21.0% Points Scored',
    recommendedTrackTemp: '35°C – 55°C',
    optimalCircuitTypes: 'High-Energy Lateral Load Circuits (Silverstone, Spa, Suzuka)',
  },
  {
    compound: 'Intermediate',
    color: '#10b981',
    avgStintLaps: 22,
    lapPaceDelta: 'Damp Track / Crossover',
    pointsYieldRatio: 'High Disruption Impact',
    recommendedTrackTemp: 'Ambient Crossover',
    optimalCircuitTypes: 'Damp to Drying Surfaces (Spa, Interlagos)',
  },
  {
    compound: 'Full Wet',
    color: '#3b82f6',
    avgStintLaps: 18,
    lapPaceDelta: 'Standing Water Clearing',
    pointsYieldRatio: 'Safety Car Heavy Stints',
    recommendedTrackTemp: 'Heavy Rainfall',
    optimalCircuitTypes: 'Monsoon Conditions (>30L water/sec evacuation)',
  },
];
