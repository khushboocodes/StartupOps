'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Mail, Lock, Eye, EyeOff, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function LoginPage() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock login - just redirect to dashboard
    router.push('/dashboard');
  };

  const handleDemoLogin = () => {
    setEmail('demo@startupops.com');
    setPassword('demo123');
    setTimeout(() => router.push('/dashboard'), 500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f0f4ff] to-[#f1f5f9] flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-2xl shadow-sm p-8 space-y-6">
          {/* Logo and heading */}
          <div className="flex flex-col items-center gap-3 mb-8">
            <div className="w-12 h-12 bg-[var(--primary)] rounded-lg flex items-center justify-center text-white">
              <svg
                className="w-7 h-7"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z" />
              </svg>
            </div>
            <h1 className="text-2xl font-bold text-[var(--foreground)] text-center">
              Welcome to StartupOps
            </h1>
            <p className="text-[var(--muted-foreground)] text-center text-sm">
              Intelligence platform for early-stage startups
            </p>
          </div>

          {/* Login form */}
          <form onSubmit={handleLogin} className="space-y-4">
            {/* Email field */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-[var(--foreground)]">
                Email Address
              </label>
              <div className="relative">
                <Mail
                  size={18}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--muted-foreground)]"
                />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="founder@startup.com"
                  className="w-full pl-10 pr-4 py-2.5 border border-[var(--border)] rounded-lg bg-white text-[var(--foreground)] placeholder-[var(--muted-foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent"
                />
              </div>
            </div>

            {/* Password field */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-[var(--foreground)]">
                Password
              </label>
              <div className="relative">
                <Lock
                  size={18}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--muted-foreground)]"
                />
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full pl-10 pr-10 py-2.5 border border-[var(--border)] rounded-lg bg-white text-[var(--foreground)] placeholder-[var(--muted-foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[var(--muted-foreground)] hover:text-[var(--foreground)]"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            {/* Remember me & Forgot password */}
            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 text-sm text-[var(--foreground)]">
                <input
                  type="checkbox"
                  className="w-4 h-4 rounded border-[var(--border)] cursor-pointer accent-[var(--primary)]"
                />
                Remember me
              </label>
              <Link
                href="#"
                className="text-sm text-[var(--primary)] hover:underline font-medium"
              >
                Forgot password?
              </Link>
            </div>

            {/* Sign in button */}
            <Button
              type="submit"
              className="w-full bg-[var(--primary)] hover:bg-[#5558e3] text-white py-2.5 rounded-lg font-medium mt-6"
            >
              Sign In <ArrowRight size={18} className="ml-2" />
            </Button>
          </form>

          {/* Demo access box */}
          <div className="bg-[#f0f4ff] border border-[#e0e7ff] rounded-lg p-4 space-y-2">
            <div className="flex items-center gap-2">
              <span className="text-sm text-[var(--primary)]">✨</span>
              <span className="font-semibold text-[var(--foreground)]">Demo Access</span>
            </div>
            <div className="text-sm text-[var(--muted-foreground)] space-y-1">
              <p>Email: <span className="font-mono text-[var(--foreground)]">demo@startupops.com</span></p>
              <p>Password: <span className="font-mono text-[var(--foreground)]">demo123</span></p>
            </div>
            <Button
              type="button"
              onClick={handleDemoLogin}
              variant="outline"
              className="w-full mt-3 text-sm"
            >
              Use Demo Access
            </Button>
          </div>

          {/* Footer */}
          <div className="text-center text-sm text-[var(--muted-foreground)]">
            Don't have an account?{' '}
            <Link href="#" className="text-[var(--primary)] font-semibold hover:underline">
              Request Access
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
