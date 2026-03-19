'use client';

import React from 'react';
import { AppLayout } from '@/components/AppLayout';
import { Button } from '@/components/ui/button';
import { Sparkles, ArrowRight, TrendingUp } from 'lucide-react';
import {
  budgetOptimizerData,
  departmentBudgets,
  budgetInsights,
  projectedImpact,
} from '@/lib/mock-data';

export default function BudgetOptimizerPage() {
  return (
    <AppLayout>
      <div className="space-y-6">
        {/* Header */}
        <div>
          <p className="text-sm text-[var(--muted-foreground)] mb-2">
            ⚡ AI Budget Optimization
          </p>
          <h1 className="text-3xl font-bold text-[var(--foreground)]">
            Budget Optimizer
          </h1>
          <p className="text-[var(--muted-foreground)] mt-2">
            AI-powered recommendations to optimize your spending based on ROI data,
            industry benchmarks, and growth goals.
          </p>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-white border border-[var(--border)] rounded-xl p-6 space-y-2">
            <p className="text-sm text-[var(--muted-foreground)]">
              {budgetOptimizerData.current.badge}
            </p>
            <h3 className="text-3xl font-bold text-[var(--foreground)]">
              {budgetOptimizerData.current.value}
            </h3>
            <p className="text-xs text-[var(--muted-foreground)]">
              {budgetOptimizerData.current.label}
            </p>
          </div>

          <div className="bg-[#f3e8ff] border border-[#e0e7ff] rounded-xl p-6 space-y-2">
            <p className="text-sm text-[var(--primary)]">
              {budgetOptimizerData.optimized.badge}
            </p>
            <div className="flex items-center gap-2">
              <h3 className="text-3xl font-bold text-[var(--foreground)]">
                {budgetOptimizerData.optimized.value}
              </h3>
              <Sparkles size={20} className="text-[var(--primary)]" />
            </div>
            <p className="text-xs text-[var(--muted-foreground)]">
              {budgetOptimizerData.optimized.label}
            </p>
          </div>

          <div className="bg-[#f0fdf4] border border-[#dcfce7] rounded-xl p-6 space-y-2">
            <p className="text-sm text-[var(--success)]">
              {budgetOptimizerData.savings.label}
            </p>
            <h3 className="text-3xl font-bold text-[var(--success)]">
              {budgetOptimizerData.savings.value}
            </h3>
            <p className="text-xs text-[var(--muted-foreground)]">
              {budgetOptimizerData.savings.percentage} reduction
            </p>
          </div>
        </div>

        {/* Budget Allocation Comparison */}
        <div className="bg-white border border-[var(--border)] rounded-xl p-6">
          <h3 className="text-lg font-semibold text-[var(--foreground)] mb-6">
            Budget Allocation Comparison
          </h3>

          <div className="space-y-6">
            {departmentBudgets.map((dept, idx) => (
              <div key={idx} className="space-y-3">
                <div className="flex items-center justify-between">
                  <h4 className="font-medium text-[var(--foreground)]">
                    {dept.department}
                  </h4>
                  <div className="text-sm text-[var(--muted-foreground)]">
                    <span className="font-medium text-[var(--foreground)]">
                      ${dept.current}K
                    </span>
                    <span className="mx-2">→</span>
                    <span className="font-medium text-[var(--primary)]">
                      ${dept.recommended}K
                    </span>
                    {dept.change !== 0 && (
                      <span
                        className={`ml-2 font-semibold ${
                          dept.change > 0
                            ? 'text-[var(--success)]'
                            : 'text-[var(--error)]'
                        }`}
                      >
                        {dept.change > 0 ? '+' : ''}{dept.change}K
                      </span>
                    )}
                  </div>
                </div>

                {/* Progress bars */}
                <div className="space-y-1">
                  <div className="h-1.5 bg-[#d1d5db] rounded-full overflow-hidden">
                    <div
                      className="h-full bg-[var(--muted-foreground)]"
                      style={{
                        width: `${Math.min((dept.current / 700) * 100, 100)}%`,
                      }}
                    />
                  </div>
                  <div className="h-1.5 bg-[#e0e7ff] rounded-full overflow-hidden">
                    <div
                      className="h-full bg-[var(--primary)]"
                      style={{
                        width: `${Math.min((dept.recommended / 700) * 100, 100)}%`,
                      }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Legend */}
          <div className="flex items-center gap-6 mt-8 pt-6 border-t border-[var(--border)]">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-[var(--muted-foreground)] rounded-full" />
              <span className="text-sm text-[var(--muted-foreground)]">
                Current Allocation
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-[var(--primary)] rounded-full" />
              <span className="text-sm text-[var(--muted-foreground)]">
                AI Recommended
              </span>
            </div>
          </div>
        </div>

        {/* Bottom panels */}
        <div className="grid grid-cols-2 gap-4">
          {/* Key Insights */}
          <div className="bg-white border border-[var(--border)] rounded-xl p-6">
            <div className="flex items-center gap-2 mb-6">
              <Sparkles size={20} className="text-[var(--primary)]" />
              <h3 className="text-lg font-semibold text-[var(--foreground)]">
                Key Insights
              </h3>
            </div>

            <div className="space-y-4">
              {budgetInsights.map((insight, idx) => (
                <div
                  key={idx}
                  className={`p-4 rounded-lg space-y-2 ${
                    insight.color === 'purple'
                      ? 'bg-[#f3e8ff] border border-[#e0e7ff]'
                      : 'bg-[var(--muted)] border border-[var(--border)]'
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <h4 className="font-semibold text-[var(--foreground)]">
                      {insight.title}
                    </h4>
                    <span
                      className={`text-xs font-bold px-2 py-1 rounded ${
                        insight.color === 'purple'
                          ? 'bg-[#e0e7ff] text-[var(--primary)]'
                          : 'bg-[var(--border)] text-[var(--muted-foreground)]'
                      }`}
                    >
                      {insight.impact}
                    </span>
                  </div>
                  <p className="text-sm text-[var(--muted-foreground)]">
                    {insight.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Recommended Actions */}
          <div className="bg-white border border-[var(--border)] rounded-xl p-6 space-y-4">
            <h3 className="text-lg font-semibold text-[var(--foreground)]">
              Recommended Actions
            </h3>

            <div className="space-y-3 flex-1">
              {[
                {
                  num: 1,
                  title: 'Shift $450K from paid ads to content marketing',
                  subtitle: 'Implement over next 60 days',
                },
                {
                  num: 2,
                  title: 'Hire 2 senior sales reps immediately',
                  subtitle: 'Start this month',
                },
                {
                  num: 3,
                  title: 'Consolidate software subscriptions',
                  subtitle: 'Review and consolidate next 2 weeks',
                },
              ].map((action, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 p-3 border border-[var(--border)] rounded-lg"
                >
                  <span className="flex-shrink-0 w-6 h-6 bg-[var(--primary)] text-white rounded-full flex items-center justify-center text-xs font-bold">
                    {action.num}
                  </span>
                  <div className="flex-1">
                    <p className="font-medium text-[var(--foreground)]">
                      {action.title}
                    </p>
                    <p className="text-xs text-[var(--muted-foreground)] mt-1">
                      {action.subtitle}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <Button className="w-full bg-[var(--primary)] hover:bg-[#5558e3] text-white py-2.5">
              Apply Recommendations
            </Button>
          </div>
        </div>

        {/* Projected Impact Banner */}
        <div className="bg-[#f0fdf4] border border-[#dcfce7] rounded-xl p-6">
          <h3 className="text-lg font-semibold text-[var(--foreground)] mb-4">
            Projected Impact
          </h3>
          <div className="grid grid-cols-3 gap-6">
            <div>
              <p className="text-sm text-[var(--muted-foreground)] mb-1">
                Annual Savings
              </p>
              <p className="text-2xl font-bold text-[var(--success)]">
                {projectedImpact.annualSavings}
              </p>
              <p className="text-xs text-[var(--muted-foreground)] mt-1">
                7 months additional runway
              </p>
            </div>
            <div>
              <p className="text-sm text-[var(--muted-foreground)] mb-1">
                Efficiency Gain
              </p>
              <p className="text-2xl font-bold text-[var(--success)]">
                {projectedImpact.efficiencyGain}
              </p>
              <p className="text-xs text-[var(--muted-foreground)] mt-1">
                Cost per acquisition reduction
              </p>
            </div>
            <div>
              <p className="text-sm text-[var(--muted-foreground)] mb-1">
                Revenue Impact
              </p>
              <p className="text-2xl font-bold text-[var(--success)]">
                {projectedImpact.revenueImpact}
              </p>
              <p className="text-xs text-[var(--muted-foreground)] mt-1">
                From sales team expansion (12 mo)
              </p>
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
