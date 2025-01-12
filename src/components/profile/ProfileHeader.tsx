import React from 'react';
import { User } from 'lucide-react';
import EditableName from './EditableName';
import ProfileMenu from './ProfileMenu';

export default function ProfileHeader() {
  return (
    <div className="flex justify-between items-center mb-8">
      <EditableName />
      <div className="relative group z-50">
        <button className="p-3 rounded-full bg-purple-600/20 hover:bg-purple-600/30 transition-colors">
          <User className="h-6 w-6 text-purple-400" />
        </button>
        <ProfileMenu />
      </div>
    </div>
  );
}