
export interface TimeLeft {
  total: number;
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export interface ValidationResult {
  isValid: boolean;
  error?: string;
  targetDate?: Date;
}