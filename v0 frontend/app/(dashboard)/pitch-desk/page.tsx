'use client';

import React from 'react';
import { AppLayout } from '@/components/AppLayout';
import { StatCard } from '@/components/dashboard/StatCard';
import {
  AreaChart,
  Area,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  ProgressBar,
  ComposedChart,
  Bar,
} from 'recharts';
import { TrendingUp, DollarSign, Clock, Shield, Sparkles } from 'lucide-react';
import {
  pitchDeskMetrics,
  valuationTimeline,
} from '@/lib/mock-data';

export default function PitchDeskPage() {
  const executionMetrics = [
    { name: 'Milestone Completion', value: 87, fill: '#22c55e' },
    { name: 'Budget Efficiency', value: 94, fill: '#3b82f6' },
    { name: 'Team Velocity', value: 92, fill: '#6366f1' },
  ];

  return (
    <AppLayout>
      <div className="space-y-6">
        {/* Header */}
        <div>
          <p className="text-sm text-[var(--muted-foreground)] mb-2">
            ↗ Investor Intelligence
          </p>
          <h1 className="text-3xl font-bold text-[var(--foreground)]">
            Pitch Desk
          </h1>
          <p className="text-[var(--muted-foreground)] mt-2">
            A complete view of your startup's past performance, current execution, and
            AI-predicted future.
          </p>
        </div>

        {/* Metrics Cards */}
        <div className="grid grid-cols-4 gap-4">
          <StatCard
            value={pitchDeskMetrics.totalFunding.value}
            label={pitchDeskMetrics.totalFunding.label}
            subtext={pitchDeskMetrics.totalFunding.subtext}
            color="green"
          />
          <StatCard
            value={pitchDeskMetrics.monthlyBurn.value}
            label={pitchDeskMetrics.monthlyBurn.label}
            subtext={pitchDeskMetrics.monthlyBurn.subtext}
          />
          <StatCard
            value={pitchDeskMetrics.runway.value}
            label={pitchDeskMetrics.runway.label}
            subtext={pitchDeskMetrics.runway.subtext}
          />
          <StatCard
            value={pitchDeskMetrics.transparencyScore.value}
            label={pitchDeskMetrics.transparencyScore.label}
            subtext={pitchDeskMetrics.transparencyScore.subtext}
          />
        </div>

        {/* Valuation Growth Timeline */}
        <div className="bg-white border border-[var(--border)] rounded-xl p-6">
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-[var(--foreground)] mb-2">
              Valuation Growth Timeline
            </h3>
            <p className="text-sm text-[var(--muted-foreground)]">
              Current valuation: <span className="font-semibold">$12.0M</span> | Projected Series A:{' '}
              <span className="font-semibold">$35M</span>
            </p>
          </div>
          <ResponsiveContainer width="100%" height={350}>
            <AreaChart data={valuationTimeline}>
              <defs>
                <linearGradient id="colorValuation" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="colorProjected" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#22c55e" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#22c55e" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
              <XAxis dataKey="date" stroke="#64748b" />
              <YAxis stroke="#64748b" label={{ value: '$M', angle: -90, position: 'insideLeft' }} />
              <Tooltip
                contentStyle={{
                  backgroundColor: '#ffffff',
                  border: '1px solid #e2e8f0',
                  borderRadius: '8px',
                }}
                formatter={(value) => `$${value}M`}
              />
              <Legend />
              <Area
                type="monotone"
                dataKey="valuation"
                stroke="#3b82f6"
                strokeWidth={2}
                fillOpacity={1}
                fill="url(#colorValuation)"
                name="Actual Valuation"
                isAnimationActive={false}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Bottom panels */}
        <div className="grid grid-cols-2 gap-4">
          {/* AI Growth Analysis */}
          <div className="bg-[#f3e8ff] border border-[#e0e7ff] rounded-xl p-6">
            <div className="flex items-start gap-2 mb-4">
              <Sparkles size={20} className="text-[var(--primary)]" />
              <h3 className="font-semibold text-[var(--foreground)] text-lg">
                AI Growth Analysis
              </h3>
            </div>
            <div className="space-y-3 text-sm text-[var(--foreground)]">
              <p>
                Your company has achieved{' '}
                <span className="font-bold text-[var(--primary)]">2.9x valuation increase</span> in
                12 months, driven by exceptional execution.
              </p>
              <p>
                <span className="font-bold text-[var(--primary)]">92% on-time task completion</span>{' '}
                and <span className="font-bold text-[var(--primary)]">23% faster</span> team velocity
                indicate strong operational discipline.
              </p>
              <p>
                Series A readiness score: <span className="font-bold">85/100</span> - You're well
                positioned for the next round.
              </p>
            </div>
          </div>

          {/* Execution & Budget Health */}
          <div className="bg-white border border-[var(--border)] rounded-xl p-6">
            <h3 className="font-semibold text-[var(--foreground)] text-lg mb-6">
              Execution & Budget Health
            </h3>
            <div className="space-y-5">
              {executionMetrics.map((metric, idx) => (
                <div key={idx} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-[var(--foreground)]">
                      {metric.name}
                    </span>
                    <span className="text-sm font-bold text-[var(--foreground)]">
                      {metric.value}%
                    </span>
                  </div>
                  <div className="h-2 bg-[var(--muted)] rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all"
                      style={{ width: `${metric.value}%`, backgroundColor: metric.fill }}
                    />
                  </div>
                </div>
              ))}
            </div>
            <p className="text-xs text-[var(--muted-foreground)] mt-6">
              All key metrics above industry benchmarks. Strong foundation for Series A
              conversation with investors.
            </p>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
