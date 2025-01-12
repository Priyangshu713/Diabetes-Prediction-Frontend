import React, { useState } from 'react';
import { Scale } from 'lucide-react';
import { Card } from '../../ui/Card';

export default function BMICard() {
  const [bmi, setBmi] = useState(24.5);
  const [isEditing, setIsEditing] = useState(false);

  const getBMICategory = (value: number) => {
    if (value < 18.5) return { text: 'Underweight', color: 'text-blue-400' };
    if (value < 25) return { text: 'Normal', color: 'text-green-400' };
    if (value < 30) return { text: 'Overweight', color: 'text-yellow-400' };
    return { text: 'Obesity', color: 'text-red-400' };
  };

  const percentage = Math.min(((bmi - 15) / (35 - 15)) * 100, 100);
  const category = getBMICategory(bmi);

  return (
    <Card className="p-6">
      <div className="flex items-center space-x-3 mb-4">
        <Scale className="h-5 w-5 text-purple-400" />
        <h3 className="text-lg font-medium text-white">BMI</h3>
      </div>

      <div className="cursor-pointer rounded-lg p-2 transition-colors">
        <div className="text-2xl font-bold text-white mb-4">{bmi.toFixed(1)}</div>
        
        {/* BMI Slider */}
        <div className="relative mb-6">
          <div className="h-2 bg-gray-700/50 rounded-full">
            <div 
              className="absolute h-full bg-gradient-to-r from-blue-400 via-green-400 via-yellow-400 to-red-400 rounded-full"
              style={{ width: `${percentage}%` }}
            />
          </div>
          
          {/* Tick marks */}
          <div className="absolute -bottom-6 left-0 right-0 flex justify-between text-xs">
            <span className="text-blue-400">15</span>
            <span className="text-green-400">18.5</span>
            <span className="text-yellow-400">25</span>
            <span className="text-red-400">30+</span>
          </div>
          
          {/* Slider thumb */}
          <div 
            className="absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full shadow-lg cursor-grab"
            style={{ left: `${percentage}%`, transform: `translate(-50%, -50%)` }}
          />
          
          <input
            type="range"
            min="15"
            max="35"
            step="0.1"
            value={bmi}
            onChange={(e) => setBmi(Number(e.target.value))}
            className="absolute inset-0 w-full opacity-0 cursor-pointer"
          />
        </div>

        <div className={`text-sm ${category.color} text-center mt-8`}>{category.text}</div>
      </div>
    </Card>
  );
}