import { create } from 'zustand';

interface RiskState {
  age: number;
  hypertension: boolean | null;
  heartDisease: boolean | null;
  bmi: number;
  hba1c: number;
  glucose: number;
  risk: number;
  showResult: boolean;
  
  setAge: (age: number) => void;
  setBMI: (bmi: number) => void;
  setBinaryValue: (key: 'hypertension' | 'heartDisease', value: boolean) => void;
  setBloodLevel: (key: 'hba1c' | 'glucose', value: number) => void;
  calculateRisk: () => void;
  resetAssessment: () => void;
}

export const useRiskStore = create<RiskState>((set, get) => ({
  age: 25,
  hypertension: null,
  heartDisease: null,
  bmi: 24.5,
  hba1c: 5.7,
  glucose: 95,
  risk: 0,
  showResult: false,

  setAge: (age) => set({ age }),
  setBMI: (bmi) => set({ bmi }),
  setBinaryValue: (key, value) => set({ [key]: value }),
  setBloodLevel: (key, value) => set({ [key]: value }),

  calculateRisk: () => {
    const state = get();
    
    // Simple risk calculation algorithm
    let riskScore = 0;
    
    // Age factor
    if (state.age > 45) riskScore += 0.2;
    if (state.age > 65) riskScore += 0.1;
    
    // Medical conditions
    if (state.hypertension) riskScore += 0.15;
    if (state.heartDisease) riskScore += 0.15;
    
    // BMI factor
    if (state.bmi >= 25 && state.bmi < 30) riskScore += 0.1;
    if (state.bmi >= 30) riskScore += 0.2;
    
    // HbA1c factor
    if (state.hba1c >= 5.7 && state.hba1c < 6.5) riskScore += 0.2;
    if (state.hba1c >= 6.5) riskScore += 0.4;
    
    // Blood glucose factor
    if (state.glucose >= 100 && state.glucose < 126) riskScore += 0.2;
    if (state.glucose >= 126) riskScore += 0.4;
    
    set({ risk: Math.min(riskScore, 1), showResult: true });
  },

  resetAssessment: () => set({ showResult: false }),
}));