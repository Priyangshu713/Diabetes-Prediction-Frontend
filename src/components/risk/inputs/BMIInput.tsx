import React from 'react';
import { Scale } from 'lucide-react';
import { useRiskStore } from '../../../store/riskStore';
import { useProfileStore } from '../../../store/profileStore';

export default function BMIInput() {
  const { bmi, setBMI } = useRiskStore();
  const { updateProfile } = useProfileStore();

  const getBMICategory = (value: number) => {
    if (value < 18.5) return { text: 'Underweight', color: 'text-blue-400' };
    if (value < 25) return { text: 'Normal', color: 'text-green-400' };
    if (value < 30) return { text: 'Overweight', color: 'text-yellow-400' };
    return { text: 'Obesity', color: 'text-red-400' };
  };

  const handleChange = (value: number) => {
    setBMI(value);
    updateProfile({ bmi: value });
  };

  const category = getBMICategory(bmi);
  const percentage = Math.min(((bmi - 15) / (35 - 15)) * 100, 100);

  return (
    <div>
      <div className="flex items-center gap-2 mb-4">
        <Scale className="w-5 h-5 text-purple-400" />
        <h3 className="text-lg font-medium text-white">Body Mass Index (BMI)</h3>
      </div>

      <div className="space-y-6">
        <div className="text-2xl font-bold text-white text-center">
          {bmi.toFixed(1)}
        </div>

        <div className="relative h-2 bg-gray-700/50 rounded-full">
          <div
            className="absolute h-full bg-gradient-to-r from-blue-400 via-green-400 to-red-400 rounded-full transition-all"
            style={{ width: `${percentage}%` }}
          />
        </div>

        <input
          type="range"
          min="15"
          max="35"
          step="0.1"
          value={bmi}
          onChange={(e) => handleChange(Number(e.target.value))}
          className="w-full h-2 appearance-none bg-transparent cursor-pointer"
        />

        <div className="flex justify-between text-sm">
          <span className="text-blue-400">Underweight</span>
          <span className="text-green-400">Normal</span>
          <span className="text-yellow-400">Overweight</span>
          <span className="text-red-400">Obese</span>
        </div>

        <div className={`text-center ${category.color}`}>
          {category.text}
        </div>
      </div>
    </div>
  );
}