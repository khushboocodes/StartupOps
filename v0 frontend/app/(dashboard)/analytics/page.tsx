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
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { Download } from 'lucide-react';
import {
  analyticsMetrics,
  revenueVsCosts,
  userGrowth,
  departmentSpend,
} from '@/lib/mock-data';

const COLORS = ['#3b82f6', '#22c55e', '#a855f7', '#f59e0b', '#ef4444'];

export default function AnalyticsPage() {
  return (
    <AppLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-[var(--foreground)]">
              Analytics
            </h1>
            <p className="text-[var(--muted-foreground)] mt-1">
              Track key metrics, monitor growth, and analyze performance
            </p>
          </div>
          <Button variant="outline" size="sm">
            <Download size={18} className="mr-2" />
            Export Report
          </Button>
        </div>

        {/* KPI Cards */}
        <div className="grid grid-cols-4 gap-4">
          <StatCard
            value={analyticsMetrics.monthlyRevenue.value}
            label="Monthly Revenue"
            trend={analyticsMetrics.monthlyRevenue.change}
            trendColor="green"
          />
          <StatCard
            value={analyticsMetrics.activeUsers.value}
            label="Active Users"
            trend={analyticsMetrics.activeUsers.change}
            trendColor="green"
          />
          <StatCard
            value={analyticsMetrics.burnMultiple.value}
            label="Burn Multiple"
            trend={analyticsMetrics.burnMultiple.change}
            trendColor="green"
          />
          <StatCard
            value={analyticsMetrics.netBurnRate.value}
            label="Net Burn Rate"
            trend={analyticsMetrics.netBurnRate.change}
            trendColor="green"
          />
        </div>

        {/* Revenue vs Operating Costs */}
        <div className="bg-white border border-[var(--border)] rounded-xl p-6">
          <h3 className="text-lg font-semibold text-[var(--foreground)] mb-2">
            Revenue vs Operating Costs
          </h3>
          <p className="text-sm text-[var(--muted-foreground)] mb-6">
            Monthly comparison over the past 6 months
          </p>
          <ResponsiveContainer width="100%" height={350}>
            <BarChart data={revenueVsCosts}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
              <XAxis dataKey="month" stroke="#64748b" />
              <YAxis stroke="#64748b" label={{ value: '$0K–$150K', angle: -90, position: 'insideLeft' }} />
              <Tooltip
                contentStyle={{
                  backgroundColor: '#ffffff',
                  border: '1px solid #e2e8f0',
                  borderRadius: '8px',
                }}
                formatter={(value) => `$${value}K`}
              />
              <Legend />
              <Bar dataKey="revenue" fill="#22c55e" radius={[8, 8, 0, 0]} />
              <Bar dataKey="costs" fill="#ef4444" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Charts Grid */}
        <div className="grid grid-cols-2 gap-4">
          {/* User Growth */}
          <div className="bg-white border border-[var(--border)] rounded-xl p-6">
            <h3 className="text-lg font-semibold text-[var(--foreground)] mb-2">
              User Growth
            </h3>
            <p className="text-sm text-[var(--muted-foreground)] mb-6">
              Total active users over time
            </p>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={userGrowth}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                <XAxis dataKey="month" stroke="#64748b" />
                <YAxis stroke="#64748b" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#ffffff',
                    border: '1px solid #e2e8f0',
                    borderRadius: '8px',
                  }}
                />
                <Line
                  type="monotone"
                  dataKey="users"
                  stroke="#3b82f6"
                  strokeWidth={3}
                  dot={{ fill: '#3b82f6', r: 5 }}
                  name="Active Users"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Department Spend Distribution */}
          <div className="bg-white border border-[var(--border)] rounded-xl p-6">
            <h3 className="text-lg font-semibold text-[var(--foreground)] mb-2">
              Department Spend Distribution
            </h3>
            <p className="text-sm text-[var(--muted-foreground)] mb-6">
              Monthly budget allocation
            </p>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={departmentSpend}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) =>
                    `${name} ${(percent * 100).toFixed(0)}%`
                  }
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {departmentSpend.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip
                  formatter={(value) => `$${value}K`}
                  contentStyle={{
                    backgroundColor: '#ffffff',
                    border: '1px solid #e2e8f0',
                    borderRadius: '8px',
                  }}
                />
              </PieChart>
            </ResponsiveContainer>

            {/* Legend */}
            <div className="mt-6 space-y-2">
              {departmentSpend.map((dept, idx) => (
                <div key={idx} className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2">
                    <div
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: COLORS[idx % COLORS.length] }}
                    />
                    <span className="text-[var(--foreground)]">{dept.name}</span>
                  </div>
                  <span className="font-semibold text-[var(--foreground)]">
                    ${dept.value}K
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
