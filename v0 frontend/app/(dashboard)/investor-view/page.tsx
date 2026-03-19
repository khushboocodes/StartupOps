'use client';

import React from 'react';
import { AppLayout } from '@/components/AppLayout';
import { StatCard } from '@/components/dashboard/StatCard';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { CheckCircle2, Clock, AlertCircle } from 'lucide-react';
import {
  investorMetrics,
  valuationTrajectory,
  executionHighlights,
  keyMilestones,
} from '@/lib/mock-data';

export default function InvestorViewPage() {
  return (
    <AppLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="text-center mb-8">
          <p className="text-sm text-[var(--muted-foreground)] mb-2">
            ⊙ Investor Dashboard
          </p>
          <h1 className="text-4xl font-bold text-[var(--foreground)] mb-2">
            TechVenture Inc. — Investor Report
          </h1>
          <p className="text-[var(--muted-foreground)]">
            A transparent view of our progress, execution, and path to growth. Updated
            monthly for investor confidence.
          </p>
        </div>

        {/* Metrics Cards */}
        <div className="grid grid-cols-4 gap-4">
          <div className="bg-white border border-[var(--border)] rounded-xl p-6 text-center">
            <div className="flex justify-center mb-3">
              <div className="w-12 h-12 bg-[#f3e8ff] rounded-lg flex items-center justify-center text-[var(--primary)]">
                🛡️
              </div>
            </div>
            <h3 className="text-2xl font-bold text-[var(--foreground)]">96/100</h3>
            <p className="text-sm text-[var(--muted-foreground)]">
              Transparency Score
            </p>
          </div>

          <div className="bg-[#f0fdf4] border border-[#dcfce7] rounded-xl p-6 text-center">
            <div className="flex justify-center mb-3">
              <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center text-[var(--success)]">
                📈
              </div>
            </div>
            <h3 className="text-2xl font-bold text-[var(--foreground)]">192%</h3>
            <p className="text-sm text-[var(--muted-foreground)]">
              YoY Growth
            </p>
          </div>

          <div className="bg-white border border-[var(--border)] rounded-xl p-6 text-center">
            <div className="flex justify-center mb-3">
              <div className="w-12 h-12 bg-[#f0f9ff] rounded-lg flex items-center justify-center text-[var(--secondary)]">
                💵
              </div>
            </div>
            <h3 className="text-2xl font-bold text-[var(--foreground)]">$3.8M</h3>
            <p className="text-sm text-[var(--muted-foreground)]">
              Cash on Hand
            </p>
          </div>

          <div className="bg-[#f0fdf4] border border-[#dcfce7] rounded-xl p-6 text-center">
            <div className="flex justify-center mb-3">
              <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center text-[var(--success)]">
                ⏱️
              </div>
            </div>
            <h3 className="text-2xl font-bold text-[var(--foreground)]">18 mo</h3>
            <p className="text-sm text-[var(--muted-foreground)]">
              Runway
            </p>
          </div>
        </div>

        {/* Valuation Trajectory */}
        <div className="bg-white border border-[var(--border)] rounded-xl p-6">
          <h3 className="text-lg font-semibold text-[var(--foreground)] mb-2">
            Valuation Trajectory
          </h3>
          <p className="text-sm text-[var(--muted-foreground)] mb-6">
            Current valuation: <span className="font-semibold">$12.0M</span> | Projected Series A:{' '}
            <span className="font-semibold">$35M</span>
          </p>
          <ResponsiveContainer width="100%" height={350}>
            <LineChart data={valuationTrajectory}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
              <XAxis dataKey="quarter" stroke="#64748b" />
              <YAxis
                stroke="#64748b"
                label={{ value: '$M', angle: -90, position: 'insideLeft' }}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: '#ffffff',
                  border: '1px solid #e2e8f0',
                  borderRadius: '8px',
                }}
                formatter={(value) => `$${value}M`}
              />
              <Line
                type="monotone"
                dataKey="valuation"
                stroke="#3b82f6"
                strokeWidth={3}
                dot={{ fill: '#3b82f6', r: 6 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Bottom panels */}
        <div className="grid grid-cols-2 gap-4">
          {/* Execution Highlights */}
          <div className="bg-white border border-[var(--border)] rounded-xl p-6">
            <h3 className="text-lg font-semibold text-[var(--foreground)] mb-6">
              Execution Highlights
            </h3>
            <div className="space-y-4">
              {executionHighlights.map((metric, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between p-3 border border-[var(--border)] rounded-lg"
                >
                  <span className="font-medium text-[var(--foreground)]">
                    {metric.label}
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-[var(--primary)]">
                      {metric.value}
                    </span>
                    <CheckCircle2
                      size={18}
                      className="text-[var(--success)]"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Key Milestones */}
          <div className="bg-white border border-[var(--border)] rounded-xl p-6">
            <h3 className="text-lg font-semibold text-[var(--foreground)] mb-6">
              Key Milestones
            </h3>
            <div className="space-y-3">
              {keyMilestones.map((milestone, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3 border border-[var(--border)] rounded-lg">
                  {milestone.status === 'Completed' ? (
                    <CheckCircle2
                      size={20}
                      className="text-[var(--success)] flex-shrink-0 mt-0.5"
                    />
                  ) : milestone.status === 'On Track' ? (
                    <AlertCircle
                      size={20}
                      className="text-[var(--warning)] flex-shrink-0 mt-0.5"
                    />
                  ) : (
                    <Clock
                      size={20}
                      className="text-[var(--muted-foreground)] flex-shrink-0 mt-0.5"
                    />
                  )}
                  <div className="flex-1">
                    <p className="font-medium text-[var(--foreground)]">
                      {milestone.title}
                    </p>
                    <div className="flex items-center justify-between mt-1">
                      <p className="text-xs text-[var(--muted-foreground)]">
                        {milestone.quarter}
                      </p>
                      <span
                        className={`text-xs font-semibold px-2 py-0.5 rounded ${
                          milestone.status === 'Completed'
                            ? 'bg-[#dcfce7] text-[var(--success)]'
                            : milestone.status === 'On Track'
                              ? 'bg-[#fef3c7] text-[var(--warning)]'
                              : 'bg-[var(--muted)] text-[var(--muted-foreground)]'
                        }`}
                      >
                        {milestone.status}
                      </span>
                    </div>
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
