import React, { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
}

export function Card({ children, className = '' }: CardProps) {
  return (
    <div className={`relative bg-gray-800/30 backdrop-blur-md rounded-lg p-6 border border-white/10 shadow-xl 
    before:absolute before:inset-0 before:bg-purple-600/20 before:rounded-lg before:blur-2xl before:-z-10 ${className}`}>
      {children}
    </div>
  );
}