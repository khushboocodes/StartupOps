'use client';

import React from 'react';
import { Bell, MessageCircle, ChevronDown, Zap, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface HeaderProps {
  onSidebarToggle?: () => void;
}

export function Header({ onSidebarToggle }: HeaderProps) {
  return (
    <header className="sticky top-0 z-40 bg-white border-b border-[var(--border)] px-6 py-3">
      <div className="flex items-center justify-between">
        {/* Left section */}
        <div className="flex items-center gap-3">
          <h1 className="text-lg font-semibold text-[var(--foreground)]">
            StartupOps
          </h1>
          <span className="text-sm text-[var(--muted-foreground)]">Intelligence Platform</span>
          <button className="ml-4 flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[var(--muted)] text-[var(--foreground)] text-sm font-medium hover:bg-[var(--muted)] transition-colors">
            Seed Round
            <ChevronDown size={16} />
          </button>
        </div>

        {/* Right section */}
        <div className="flex items-center gap-4">
          {/* Navigation links */}
          <div className="flex items-center gap-4 mr-4 pl-4 border-l border-[var(--border)]">
            <button className="flex items-center gap-1.5 text-sm text-[var(--muted-foreground)] hover:text-[var(--primary)] transition-colors">
              <Zap size={16} className="text-[var(--primary)]" />
              Budget AI
            </button>
            <button className="flex items-center gap-1.5 text-sm text-[var(--muted-foreground)] hover:text-[var(--primary)] transition-colors">
              <Sparkles size={16} className="text-[var(--primary)]" />
              AI Co-Founder
            </button>
            <button className="flex items-center gap-1.5 text-sm text-[var(--muted-foreground)] hover:text-[var(--primary)] transition-colors">
              <MessageCircle size={16} />
              Pitch Practice
            </button>
          </div>

          {/* Icons and user menu */}
          <div className="flex items-center gap-3">
            <button className="relative p-2 text-[var(--muted-foreground)] hover:bg-[var(--muted)] rounded-lg transition-colors">
              <Bell size={20} />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              <span className="absolute top-0.5 right-0.5 text-xs font-bold text-white bg-red-500 rounded-full w-5 h-5 flex items-center justify-center text-[10px]">
                3
              </span>
            </button>

            <button className="flex items-center gap-2 pl-3 hover:bg-[var(--muted)] rounded-lg transition-colors">
              <div className="w-8 h-8 bg-[var(--primary)] text-white rounded-full flex items-center justify-center text-sm font-semibold">
                K
              </div>
              <div className="flex flex-col items-start">
                <span className="text-sm font-medium text-[var(--foreground)]">
                  Khushboocodes
                </span>
                <span className="text-xs text-[var(--muted-foreground)]">
                  Founder & CEO
                </span>
              </div>
              <ChevronDown size={16} className="text-[var(--muted-foreground)]" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
