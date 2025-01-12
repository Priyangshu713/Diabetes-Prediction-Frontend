import React, { useState } from 'react';
import { Container } from '../ui/Container';
import { Card } from '../ui/Card';
import { Activity, Lock, Mail, User } from 'lucide-react';
import AuthForm from './AuthForm';

export default function Signup() {
  return (
    <div className="min-h-screen bg-gray-900 grid-pattern flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <Container className="max-w-md w-full">
        <div className="text-center mb-8">
          <div className="flex justify-center mb-6">
            <div className="bg-purple-600/20 p-4 rounded-full">
              <Activity className="h-12 w-12 text-purple-400" />
            </div>
          </div>
          <h2 className="text-3xl font-extrabold text-white">Create Account</h2>
          <p className="mt-2 text-gray-400">Join us to monitor your health</p>
        </div>

        <Card className="p-8">
          <AuthForm mode="signup" />
        </Card>

        <p className="mt-8 text-center text-sm text-gray-400">
          Already have an account?{' '}
          <a href="/login" className="font-medium text-purple-400 hover:text-purple-300">
            Sign in
          </a>
        </p>
      </Container>
    </div>
  );
}