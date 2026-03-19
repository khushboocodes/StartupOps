'use client';

import React, { useState } from 'react';
import { AppLayout } from '@/components/AppLayout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { MoreVertical, Search, Plus } from 'lucide-react';
import { teams, teamMembers } from '@/lib/mock-data';

export default function TeamsPage() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredMembers = teamMembers.filter(
    (member) =>
      member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      member.role.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getTeamIconBg = (color: string) => {
    const colors: Record<string, string> = {
      blue: 'bg-[#dbeafe]',
      green: 'bg-[#dcfce7]',
      amber: 'bg-[#fef3c7]',
      red: 'bg-[#fee2e2]',
    };
    return colors[color] || 'bg-[#f3e8ff]';
  };

  const getTeamIconColor = (color: string) => {
    const colors: Record<string, string> = {
      blue: 'text-[var(--secondary)]',
      green: 'text-[var(--success)]',
      amber: 'text-[var(--warning)]',
      red: 'text-[var(--error)]',
    };
    return colors[color] || 'text-[var(--primary)]';
  };

  return (
    <AppLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-[var(--foreground)]">
              Teams & Hierarchy
            </h1>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="outline" size="sm">
              Invite Members
            </Button>
            <Button className="bg-[var(--primary)] hover:bg-[#5558e3] text-white">
              + Add Team
            </Button>
          </div>
        </div>

        {/* Team Cards */}
        <div className="grid grid-cols-4 gap-4">
          {teams.map((team) => (
            <div
              key={team.id}
              className="bg-white border border-[var(--border)] rounded-xl p-6"
            >
              <div className="flex items-start justify-between mb-4">
                <div
                  className={`w-12 h-12 ${getTeamIconBg(team.color)} rounded-lg flex items-center justify-center`}
                >
                  <span className={`text-lg ${getTeamIconColor(team.color)}`}>
                    ≡
                  </span>
                </div>
                <button className="p-1 hover:bg-[var(--muted)] rounded-lg">
                  <MoreVertical size={18} className="text-[var(--muted-foreground)]" />
                </button>
              </div>
              <h3 className="font-semibold text-[var(--foreground)] mb-2">
                {team.name}
              </h3>
              <p className="text-sm text-[var(--muted-foreground)] mb-3">
                {team.members} members
              </p>
              <p className="text-xs text-[var(--muted-foreground)]">
                Lead: <span className="font-medium text-[var(--foreground)]">{team.lead}</span>
              </p>
            </div>
          ))}
        </div>

        {/* All Team Members */}
        <div className="bg-white border border-[var(--border)] rounded-xl p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-[var(--foreground)]">
              All Team Members
            </h2>
            <div className="relative w-64">
              <Search
                size={18}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--muted-foreground)]"
              />
              <input
                type="text"
                placeholder="Search members..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-[var(--border)] rounded-lg bg-white placeholder-[var(--muted-foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
              />
            </div>
          </div>

          <div className="space-y-2">
            {filteredMembers.map((member) => (
              <div
                key={member.id}
                className="flex items-center justify-between p-4 rounded-lg hover:bg-[var(--muted)] transition-colors border border-[var(--border)]"
              >
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <div className="w-10 h-10 bg-[var(--primary)] rounded-full flex items-center justify-center text-white font-semibold text-sm">
                      {member.avatar}
                    </div>
                    {member.online && (
                      <div className="absolute bottom-0 right-0 w-3 h-3 bg-[var(--success)] rounded-full border 2 border-white"></div>
                    )}
                  </div>
                  <div>
                    <p className="font-medium text-[var(--foreground)]">
                      {member.name}
                    </p>
                    <p className="text-sm text-[var(--muted-foreground)]">
                      {member.role}
                    </p>
                  </div>
                </div>
                <span className="text-xs font-semibold px-2 py-1 rounded bg-[var(--muted)] text-[var(--muted-foreground)]">
                  {member.department}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Organization Chart Link */}
        <div className="flex items-center justify-between p-4 border border-[var(--border)] rounded-xl bg-white">
          <h3 className="font-semibold text-[var(--foreground)]">
            Organization Chart
          </h3>
          <button className="text-[var(--primary)] hover:underline text-sm font-medium">
            View Full Chart →
          </button>
        </div>
      </div>
    </AppLayout>
  );
}
