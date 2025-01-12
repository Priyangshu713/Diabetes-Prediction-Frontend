import React from 'react';
import { Activity, User, Home } from 'lucide-react';
import { Container } from './ui/Container';

export default function Navbar() {
  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      <nav className="bg-gray-900/30 backdrop-blur-md border border-white/10 shadow-lg rounded-b-2xl mx-4 mt-2">
        <Container>
          <div className="flex justify-between h-16">
            <a 
              href="/" 
              className="flex items-center hover:opacity-80 transition-opacity"
            >
              <Activity className="h-8 w-8 text-purple-400" />
              <span className="ml-2 text-xl font-bold text-white">Diabetes Check</span>
            </a>
            
            <div className="flex items-center space-x-4">
              <a href="/" className="flex items-center px-4 py-2 text-gray-300 hover:text-purple-400 hover:bg-white/5 rounded-xl transition-all">
                <Home className="h-5 w-5 mr-1.5" />
                <span>Home</span>
              </a>
              <a href="/predict" className="flex items-center px-4 py-2 text-gray-300 hover:text-purple-400 hover:bg-white/5 rounded-xl transition-all">
                <Activity className="h-5 w-5 mr-1.5" />
                <span>Check Risk</span>
              </a>
              <a href="/about" className="flex items-center px-4 py-2 text-gray-300 hover:text-purple-400 hover:bg-white/5 rounded-xl transition-all">
                <span>About Us</span>
              </a>
              <a href="/profile" className="flex items-center px-4 py-2 text-gray-300 hover:text-purple-400 hover:bg-white/5 rounded-xl transition-all">
                <User className="h-5 w-5 mr-1.5" />
                <span>Profile</span>
              </a>
            </div>
          </div>
        </Container>
      </nav>
    </div>
  );
}