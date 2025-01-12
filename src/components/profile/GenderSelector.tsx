import React from 'react';
import { UserCircle2, User2 } from 'lucide-react';

interface GenderSelectorProps {
  value: 'male' | 'female';
  onChange: (value: 'male' | 'female') => void;
}

export default function GenderSelector({ value, onChange }: GenderSelectorProps) {
  return (
    <div className="flex justify-center mb-8">
      <div className="bg-gray-800/50 p-2 rounded-full flex gap-4">
        <button
          onClick={() => onChange('female')}
          className={`p-6 rounded-full transition-all group ${
            value === 'female' 
              ? 'bg-purple-600 text-white' 
              : 'text-gray-400 hover:text-purple-400'
          }`}
        >
          <div className="relative">
            <UserCircle2 className="h-8 w-8" />
            <span className={`absolute -bottom-6 left-1/2 -translate-x-1/2 text-sm whitespace-nowrap transition-opacity ${
              value === 'female' ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
            }`}>Female</span>
          </div>
        </button>
        
        <button
          onClick={() => onChange('male')}
          className={`p-6 rounded-full transition-all group ${
            value === 'male' 
              ? 'bg-purple-600 text-white' 
              : 'text-gray-400 hover:text-purple-400'
          }`}
        >
          <div className="relative">
            <User2 className="h-8 w-8" />
            <span className={`absolute -bottom-6 left-1/2 -translate-x-1/2 text-sm whitespace-nowrap transition-opacity ${
              value === 'male' ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
            }`}>Male</span>
          </div>
        </button>
      </div>
    </div>
  );
}