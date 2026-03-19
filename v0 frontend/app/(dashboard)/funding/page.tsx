'use client';

import React from 'react';
import { AppLayout } from '@/components/AppLayout';
import { StatCard } from '@/components/dashboard/StatCard';
import { Button } from '@/components/ui/button';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Cell,
} from 'recharts';
import { Copy, DollarSign, CheckCircle2, Zap } from 'lucide-react';
import {
  fundingManagementMetrics,
  capitalAllocation,
  fundingHistory,
  keyInvestors,
  upcomingMilestones,
} from '@/lib/mock-data';

export default function FundingPage() {
  return (
    <AppLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-[var(--foreground)]">
              Funding Management
            </h1>
            <p className="text-[var(--muted-foreground)] mt-1">
              Track your funding rounds, capital allocation, and prepare for your next raise.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="outline" size="sm">
              Export Cap Table
            </Button>
            <Button className="bg-[var(--primary)] hover:bg-[#5558e3] text-white">
              + Plan Next Round
            </Button>
          </div>
        </div>

        {/* KPI Cards */}
        <div className="grid grid-cols-4 gap-4">
          <StatCard
            value={fundingManagementMetrics.totalRaised.value}
            label={fundingManagementMetrics.totalRaised.label}
            color="purple"
          />
          <StatCard
            value={fundingManagementMetrics.cashRemaining.value}
            label={fundingManagementMetrics.cashRemaining.label}
          />
          <StatCard
            value={fundingManagementMetrics.monthlyBurn.value}
            label={fundingManagementMetrics.monthlyBurn.label}
          />
          <StatCard
            value={fundingManagementMetrics.runwayRemaining.value}
            label={fundingManagementMetrics.runwayRemaining.label}
            color="green"
          />
        </div>

        {/* Capital Allocation */}
        <div className="bg-white border border-[var(--border)] rounded-xl p-6">
          <h3 className="text-lg font-semibold text-[var(--foreground)] mb-2">
            Current Capital Allocation
          </h3>
          <p className="text-sm text-[var(--muted-foreground)] mb-6">
            Monthly spend breakdown by department
          </p>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={capitalAllocation} layout="vertical">
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
              <XAxis type="number" stroke="#64748b" />
              <YAxis dataKey="department" type="category" stroke="#64748b" width={100} />
              <Tooltip
                contentStyle={{
                  backgroundColor: '#ffffff',
                  border: '1px solid #e2e8f0',
                  borderRadius: '8px',
                }}
                formatter={(value) => `$${value}K`}
              />
              <Bar dataKey="amount" fill="#6366f1" radius={[0, 8, 8, 0]}>
                {capitalAllocation.map((entry, idx) => {
                  const colors = [
                    '#6366f1',
                    '#22c55e',
                    '#a855f7',
                    '#f59e0b',
                    '#ef4444',
                  ];
                  return (
                    <Cell key={`cell-${idx}`} fill={colors[idx % colors.length]} />
                  );
                })}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Funding History */}
        <div className="bg-white border border-[var(--border)] rounded-xl p-6">
          <h3 className="text-lg font-semibold text-[var(--foreground)] mb-6">
            Funding History
          </h3>
          <div className="space-y-3">
            {fundingHistory.map((round) => (
              <div
                key={round.id}
                className="flex items-center justify-between p-4 border border-[var(--border)] rounded-lg hover:bg-[var(--muted)] transition-colors"
              >
                <div className="flex items-center gap-4 flex-1">
                  <div className="w-10 h-10 bg-[var(--primary)] rounded-lg flex items-center justify-center text-white flex-shrink-0">
                    <DollarSign size={20} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="font-medium text-[var(--foreground)]">
                        {round.round}
                      </h4>
                      <span
                        className={`text-xs font-semibold px-2 py-0.5 rounded ${
                          round.status === 'Closed'
                            ? 'bg-[#dcfce7] text-[var(--success)]'
                            : 'bg-[#dbeafe] text-[var(--secondary)]'
                        }`}
                      >
                        {round.status}
                      </span>
                    </div>
                    <p className="text-sm text-[var(--muted-foreground)]">
                      {round.investors}
                    </p>
                  </div>
                </div>
                <div className="text-right mr-4">
                  <p className="font-semibold text-[var(--foreground)]">{round.amount}</p>
                  <p className="text-sm text-[var(--muted-foreground)]">{round.date}</p>
                </div>
                <button className="p-2 hover:bg-[var(--muted)] rounded-lg transition-colors">
                  <Copy size={18} className="text-[var(--muted-foreground)]" />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom panels */}
        <div className="grid grid-cols-2 gap-4">
          {/* Key Investors */}
          <div className="bg-white border border-[var(--border)] rounded-xl p-6">
            <h3 className="text-lg font-semibold text-[var(--foreground)] mb-4">
              Key Investors
            </h3>
            <div className="space-y-3">
              {keyInvestors.map((investor, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between p-3 border border-[var(--border)] rounded-lg"
                >
                  <span className="font-medium text-[var(--foreground)]">
                    {investor.name}
                  </span>
                  <span className="text-xs font-semibold px-2 py-1 rounded bg-[var(--muted)] text-[var(--muted-foreground)]">
                    {investor.badge}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Upcoming Milestones */}
          <div className="bg-white border border-[var(--border)] rounded-xl p-6">
            <h3 className="text-lg font-semibold text-[var(--foreground)] mb-4">
              Upcoming Milestones
            </h3>
            <div className="space-y-3">
              {upcomingMilestones.map((milestone, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 p-3 border border-[var(--border)] rounded-lg"
                >
                  <CheckCircle2
                    size={20}
                    className={`flex-shrink-0 mt-0.5 ${
                      milestone.priority === 'high'
                        ? 'text-[var(--error)]'
                        : 'text-[var(--warning)]'
                    }`}
                  />
                  <div className="flex-1">
                    <p className="font-medium text-[var(--foreground)]">
                      {milestone.title}
                    </p>
                    <p className="text-xs text-[var(--muted-foreground)]">
                      Target: {milestone.target}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
