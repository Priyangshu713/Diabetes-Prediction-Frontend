import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Container } from './ui/Container';

export default function Hero() {
  return (
    <div className="relative bg-gradient-to-br from-gray-900 to-purple-900 grid-pattern">
      <Container className="py-16 lg:py-20">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
              <span className="block">Take Control of Your</span>
              <span className="block text-purple-400">Diabetes Risk</span>
            </h1>
            <p className="mt-3 text-base text-gray-300 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
              Early detection is key to managing diabetes. Use our advanced prediction tool to assess your risk factors and take proactive steps towards a healthier future.
            </p>
            <div className="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left">
              <a
                href="/predict"
                className="inline-flex items-center px-6 py-3 text-base font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 transition-colors"
              >
                Check Your Risk
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </div>
          </div>
          <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
            <img
              className="w-full rounded-lg shadow-2xl ring-1 ring-gray-700"
              src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80"
              alt="Medical professional with patient"
            />
          </div>
        </div>
      </Container>
    </div>
  );
}