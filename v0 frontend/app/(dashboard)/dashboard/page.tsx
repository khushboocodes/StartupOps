'use client';

import React from 'react';
import { AppLayout } from '@/components/AppLayout';
import { StatCard } from '@/components/dashboard/StatCard';
import { Button } from '@/components/ui/button';
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Cell,
} from 'recharts';
import {
  CheckCircle2,
  Users,
  Clock,
  Activity,
  Plus,
  ArrowRight,
  Zap,
} from 'lucide-react';
import {
  dashboardMetrics,
  weeklyTaskCompletion,
  burnRateData,
  recentActivity,
} from '@/lib/mock-data';

const COLORS = ['#f1f5f9', '#6366f1'];

export default function DashboardPage() {
  return (
    <AppLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-[var(--foreground)]">
              Welcome back, Jane
            </h1>
            <p className="text-[var(--muted-foreground)] mt-1">
              Here's what's happening with TechVenture today
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="outline" size="sm">
              Export Report
            </Button>
            <Button className="bg-[var(--primary)] hover:bg-[#5558e3] text-white">
              Schedule Investor Update
            </Button>
          </div>
        </div>

        {/* KPI Cards */}
        <div className="grid grid-cols-4 gap-4">
          <StatCard
            value={dashboardMetrics.goalCompletion.value}
            label={dashboardMetrics.goalCompletion.label}
            badge={dashboardMetrics.goalCompletion.badge}
            trend={dashboardMetrics.goalCompletion.trend}
            trendColor="green"
            color="purple"
          />
          <StatCard
            value={dashboardMetrics.teamMembers.value}
            label={dashboardMetrics.teamMembers.label}
            badge={dashboardMetrics.teamMembers.badge}
            subtext={dashboardMetrics.teamMembers.subtext}
          />
          <StatCard
            value={dashboardMetrics.tasksCompleted.value}
            label={dashboardMetrics.tasksCompleted.label}
            badge={dashboardMetrics.tasksCompleted.badge}
            subtext={dashboardMetrics.tasksCompleted.subtext}
          />
          <StatCard
            value={dashboardMetrics.cashRunway.value}
            label={dashboardMetrics.cashRunway.label}
            badge={dashboardMetrics.cashRunway.badge}
            subtext={dashboardMetrics.cashRunway.subtext}
            color="green"
          />
        </div>

        {/* Charts */}
        <div className="grid grid-cols-2 gap-4">
          {/* Weekly Task Completion */}
          <div className="bg-white border border-[var(--border)] rounded-xl p-6">
            <h3 className="text-lg font-semibold text-[var(--foreground)] mb-4">
              Weekly Task Completion
            </h3>
            <p className="text-sm text-[var(--muted-foreground)] mb-4">
              Planned vs completed tasks this week
            </p>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={weeklyTaskCompletion}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                <XAxis dataKey="day" stroke="#64748b" />
                <YAxis stroke="#64748b" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#ffffff',
                    border: '1px solid #e2e8f0',
                    borderRadius: '8px',
                  }}
                />
                <Legend />
                <Bar dataKey="planned" fill="#f1f5f9" radius={[8, 8, 0, 0]} />
                <Bar dataKey="completed" fill="#6366f1" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Monthly Burn Rate */}
          <div className="bg-white border border-[var(--border)] rounded-xl p-6">
            <h3 className="text-lg font-semibold text-[var(--foreground)] mb-4">
              Monthly Burn Rate
            </h3>
            <p className="text-sm text-[var(--muted-foreground)] mb-4">
              Operating expenses over time
            </p>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={burnRateData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                <XAxis dataKey="month" stroke="#64748b" />
                <YAxis stroke="#64748b" label={{ value: '$0K–$180K', angle: -90, position: 'insideLeft' }} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#ffffff',
                    border: '1px solid #e2e8f0',
                    borderRadius: '8px',
                  }}
                  formatter={(value) => `$${value}K`}
                />
                <Line
                  type="monotone"
                  dataKey="rate"
                  stroke="#3b82f6"
                  strokeWidth={3}
                  dot={{ fill: '#3b82f6', r: 5 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Activity and Actions */}
        <div className="grid grid-cols-3 gap-4">
          {/* Recent Activity */}
          <div className="col-span-2 bg-white border border-[var(--border)] rounded-xl p-6">
            <h3 className="text-lg font-semibold text-[var(--foreground)] mb-4">
              Recent Activity
            </h3>
            <div className="space-y-3">
              {recentActivity.map((activity) => (
                <div
                  key={activity.id}
                  className="flex items-start gap-3 pb-3 border-b border-[var(--border)] last:border-0"
                >
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                      activity.color === 'green'
                        ? 'bg-[#dcfce7]'
                        : activity.color === 'purple'
                          ? 'bg-[#f3e8ff]'
                          : 'bg-[#fef3c7]'
                    }`}
                  >
                    <span
                      className={`text-sm ${
                        activity.color === 'green'
                          ? 'text-[var(--success)]'
                          : activity.color === 'purple'
                            ? 'text-[var(--primary)]'
                            : 'text-[var(--warning)]'
                      }`}
                    >
                      ✓
                    </span>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-[var(--foreground)]">
                      {activity.title}
                    </p>
                    <p className="text-xs text-[var(--muted-foreground)]">
                      {activity.timestamp}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Actions */}
          <div className="space-y-4">
            <div className="bg-white border border-[var(--border)] rounded-xl p-6 flex-1">
              <h3 className="text-lg font-semibold text-[var(--foreground)] mb-4">
                Quick Actions
              </h3>
              <div className="space-y-2">
                {[
                  { icon: CheckCircle2, label: 'Create Task' },
                  { icon: Users, label: 'Invite Team Member' },
                  { icon: Clock, label: 'Set Milestone' },
                  { icon: Zap, label: 'Run Budget Analysis' },
                ].map((action, idx) => {
                  const Icon = action.icon;
                  return (
                    <button
                      key={idx}
                      className="w-full flex items-center justify-between p-3 rounded-lg hover:bg-[var(--muted)] transition-colors border border-[var(--border)] bg-white"
                    >
                      <div className="flex items-center gap-3">
                        <Icon size={18} className="text-[var(--primary)]" />
                        <span className="text-sm font-medium text-[var(--foreground)]">
                          {action.label}
                        </span>
                      </div>
                      <ArrowRight size={16} className="text-[var(--muted-foreground)]" />
                    </button>
                  );
                })}
              </div>
            </div>

            {/* AI Insights */}
            <div className="bg-[#f3e8ff] border border-[#e0e7ff] rounded-xl p-6">
              <div className="flex items-start gap-2 mb-3">
                <span className="text-xl">✨</span>
                <h4 className="font-semibold text-[var(--foreground)]">
                  AI Insights
                </h4>
              </div>
              <p className="text-sm text-[var(--foreground)]">
                Your team velocity is{' '}
                <span className="font-semibold">23% above average</span>. Consider
                allocating more resources to product development.
              </p>
            </div>

            {/* FAB button */}
            <div className="flex justify-end">
              <button className="w-16 h-16 bg-[var(--primary)] text-white rounded-full flex items-center justify-center hover:bg-[#5558e3] shadow-lg transition-colors">
                <Plus size={24} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
