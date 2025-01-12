import React from 'react';
import { Activity } from 'lucide-react';
import { useRiskStore } from '../../../store/riskStore';
import { useProfileStore } from '../../../store/profileStore';

interface BloodLevelInputProps {
  title: string;
  description: string;
  name: 'hba1c' | 'glucose';
  unit: string;
  min: number;
  max: number;
  step: number;
}

export default function BloodLevelInput({
  title,
  description,
  name,
  unit,
  min,
  max,
  step,
}: BloodLevelInputProps) {
  const { [name]: value, setBloodLevel } = useRiskStore();
  const { updateProfile } = useProfileStore();

  const handleChange = (newValue: number) => {
    setBloodLevel(name, newValue);
    if (name === 'glucose') {
      updateProfile({ glucoseLevel: newValue });
    }
  };

  const percentage = ((value - min) / (max - min)) * 100;

  return (
    <div>
      <div className="flex items-center gap-2 mb-2">
        <Activity className="w-5 h-5 text-purple-400" />
        <h3 className="text-lg font-medium text-white">{title}</h3>
      </div>
      <p className="text-gray-400 mb-6">{description}</p>

      <div className="space-y-6">
        <div className="text-2xl font-bold text-white text-center">
          {value.toFixed(name === 'hba1c' ? 1 : 0)} {unit}
        </div>

        <div className="relative h-24 bg-gray-800/30 rounded-lg overflow-hidden">
          <div
            className="absolute inset-x-0 bottom-0 transition-all duration-500"
            style={{ height: `${percentage}%` }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-purple-600/50 to-transparent">
              <div className="absolute inset-0 glucose-wave" />
              <div className="absolute inset-0 glucose-wave" style={{ animationDelay: '-2s' }} />
            </div>
          </div>

          <div className="absolute inset-y-2 right-0 w-8 flex flex-col justify-between">
            {[max, (max + min) / 2, min].map((value) => (
              <div key={value} className="flex items-center gap-1">
                <div className="w-2 h-px bg-gray-500" />
                <span className="text-xs text-gray-500">{value.toFixed(name === 'hba1c' ? 1 : 0)}</span>
              </div>
            ))}
          </div>
        </div>

        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={(e) => handleChange(Number(e.target.value))}
          className="w-full h-2 bg-gray-700/50 rounded-full appearance-none cursor-pointer"
        />
      </div>
    </div>
  );
}