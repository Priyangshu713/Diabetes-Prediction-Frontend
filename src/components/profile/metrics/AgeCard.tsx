import React, { useState } from 'react';
import { Calendar } from 'lucide-react';
import { Card } from '../../ui/Card';

export default function AgeCard() {
  const [isEditing, setIsEditing] = useState(false);
  const [age, setAge] = useState(25);

  return (
    <Card className="p-6">
      <div className="flex items-center space-x-3 mb-4">
        <Calendar className="h-5 w-5 text-purple-400" />
        <h3 className="text-lg font-medium text-white">Age</h3>
      </div>
      
      {isEditing ? (
        <input
          type="number"
          value={age}
          onChange={(e) => setAge(Number(e.target.value))}
          onBlur={() => setIsEditing(false)}
          className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-purple-600"
          autoFocus
        />
      ) : (
        <div 
          onClick={() => setIsEditing(true)}
          className="cursor-pointer hover:bg-gray-800/30 rounded-lg p-2 transition-colors"
        >
          <div className="text-2xl font-bold text-white mb-2">{age} years</div>
          <div className="text-sm text-gray-400">Click to edit</div>
        </div>
      )}
    </Card>
  );
}