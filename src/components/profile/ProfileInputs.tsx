import React, { useState } from 'react';
import GenderSelector from './GenderSelector';
import WeightControl from './WeightControl';
import HeightControl from './HeightControl';
import { Card } from '../ui/Card';

export default function ProfileInputs() {
  const [gender, setGender] = useState<'male' | 'female'>('male');
  const [weight, setWeight] = useState(70);
  const [height, setHeight] = useState(170);

  return (
    <Card className="p-6">
      <GenderSelector value={gender} onChange={setGender} />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <WeightControl value={weight} onChange={setWeight} />
        <HeightControl value={height} onChange={setHeight} />
      </div>
    </Card>
  );
}