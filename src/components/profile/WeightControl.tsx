import React from 'react';
import WeightMeter from './WeightMeter';

interface WeightControlProps {
  value: number;
  onChange: (value: number) => void;
}

export default function WeightControl({ value, onChange }: WeightControlProps) {
  const min = 40;
  const max = 120;
  const percentage = ((value - min) / (max - min)) * 100;

  return (
    <div className="relative bg-gray-800/50 p-6 rounded-2xl">
      <h3 className="text-sm font-medium text-gray-400 mb-2">Weight</h3>
      
      {/* Weight meter */}
      <WeightMeter value={value} min={min} max={max} />
      
      {/* Custom slider */}
      <div className="relative">
        {/* Track */}
        <div className="h-2 bg-gray-700/50 rounded-full overflow-hidden">
          {/* Fill */}
          <div 
            className="h-full bg-gradient-to-r from-purple-600/50 to-purple-600 rounded-full transition-all duration-300"
            style={{ width: `${percentage}%` }}
          />
        </div>
        
        {/* Tick marks */}
        <div className="absolute top-full left-0 right-0 flex justify-between px-2 mt-2">
          {[min, min + 20, min + 40, min + 60, max].map((tick) => (
            <div key={tick} className="flex flex-col items-center">
              <div className="w-px h-2 bg-gray-600" />
              <span className="text-xs text-gray-400 mt-1">{tick}</span>
            </div>
          ))}
        </div>
        
        {/* Slider thumb */}
        <div 
          className="absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full shadow-lg cursor-grab"
          style={{ left: `${percentage}%`, transform: `translate(-50%, -50%)` }}
        />
        
        {/* Hidden input for functionality */}
        <input
          type="range"
          min={min}
          max={max}
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          className="absolute inset-0 w-full opacity-0 cursor-pointer"
        />
      </div>
      
      {/* Weight categories */}
      <div className="mt-8 text-center">
        <span className={`text-sm ${
          value < 60 ? 'text-blue-400' :
          value < 80 ? 'text-green-400' :
          value < 100 ? 'text-yellow-400' :
          'text-red-400'
        }`}>
          {value < 60 ? 'Underweight' :
           value < 80 ? 'Normal' :
           value < 100 ? 'Overweight' :
           'Obese'}
        </span>
      </div>
    </div>
  );
}