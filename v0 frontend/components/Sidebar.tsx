'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  LayoutDashboard,
  Presentation,
  DollarSign,
  Users,
  CheckSquare,
  BarChart3,
  Eye,
  CreditCard,
  Sparkles,
  MessageCircle,
  Settings,
  ChevronLeft,
} from 'lucide-react';

interface SidebarProps {
  isCollapsed?: boolean;
  onToggle?: () => void;
}

const navItems = [
  { icon: LayoutDashboard, label: 'Dashboard', href: '/dashboard' },
  { icon: Presentation, label: 'Pitch Desk', href: '/pitch-desk' },
  { icon: DollarSign, label: 'Funding', href: '/funding' },
  { icon: Users, label: 'Teams', href: '/teams' },
  { icon: CheckSquare, label: 'Tasks', href: '/tasks' },
  { icon: BarChart3, label: 'Analytics', href: '/analytics' },
  { icon: Eye, label: 'Investor View', href: '/investor-view' },
  { icon: CreditCard, label: 'Billing & Plans', href: '/billing' },
  { icon: Sparkles, label: 'AI Co-Founder', href: '/ai-co-founder' },
  { icon: MessageCircle, label: 'Support Chat', href: '/support-chat' },
  { icon: Settings, label: 'Settings', href: '/settings' },
];

export function Sidebar({ isCollapsed = false, onToggle }: SidebarProps) {
  const pathname = usePathname();

  return (
    <aside
      className={`flex flex-col h-screen bg-white border-r border-[var(--border)] transition-all duration-300 ${
        isCollapsed ? 'w-20' : 'w-64'
      }`}
    >
      {/* Logo section */}
      <div className="flex items-center justify-between px-4 py-4 border-b border-[var(--border)]">
        {!isCollapsed && (
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-[var(--primary)] rounded-md flex items-center justify-center text-white font-bold text-sm">
              S
            </div>
            <span className="font-semibold text-[var(--foreground)]">
              StartupOps
            </span>
          </div>
        )}
        <button
          onClick={onToggle}
          className="p-1.5 hover:bg-[var(--muted)] rounded-lg transition-colors"
        >
          <ChevronLeft
            size={20}
            className={`transition-transform ${isCollapsed ? 'rotate-180' : ''}`}
          />
        </button>
      </div>

      {/* Navigation items */}
      <nav className="flex-1 overflow-y-auto px-2 py-4 space-y-1">
        {navItems.map((item) => {
          const isActive = pathname === item.href || pathname.startsWith(item.href);
          const Icon = item.icon;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors ${
                isActive
                  ? 'bg-[var(--primary)] text-white'
                  : 'text-[var(--foreground)] hover:bg-[var(--muted)]'
              }`}
            >
              <Icon size={20} className="flex-shrink-0" />
              {!isCollapsed && (
                <span className="text-sm font-medium">{item.label}</span>
              )}
            </Link>
          );
        })}
      </nav>

      {/* Footer */}
      {!isCollapsed && (
        <div className="p-4 border-t border-[var(--border)]">
          <p className="text-xs text-[var(--muted-foreground)]">
            <strong>StartupOps v2.0</strong>
          </p>
          <p className="text-xs text-[var(--muted-foreground)]">
            Founder Intelligence
          </p>
        </div>
      )}
    </aside>
  );
}
