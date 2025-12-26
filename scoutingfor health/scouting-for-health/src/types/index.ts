export interface GuideStep {
  stepNumber: number;
  instruction: string;
  image?: string;
  warning?: string;
  timer?: number; // For CPR timing in seconds
}

export interface EmergencyGuide {
  id: string;
  category: 'medical' | 'disaster';
  subCategory: string; // e.g., 'Life-Threatening', 'Injuries'
  title: string;
  description: string; // Short 1-2 sentence overview
  emergencyNumbers: string[]; // Local emergency numbers
  steps: GuideStep[]; // What to do (Step-by-Step)
  doNot: string[]; // "DO NOT" red text bullets
  callEmergencyIf: string[]; // "Call emergency services if..." red alert box
  aftercare: string[]; // Aftercare tips
  lastUpdated: string; // ISO Date string
}
