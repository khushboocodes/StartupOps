'use client';

import React, { useState } from 'react';
import { AppLayout } from '@/components/AppLayout';
import { Button } from '@/components/ui/button';
import {
  Zap,
  TrendingUp,
  Crown,
  Check,
  Lock,
  BarChart3,
  Sparkles,
} from 'lucide-react';
import { billingPlans } from '@/lib/mock-data';

export default function BillingPage() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('annual');

  return (
    <AppLayout>
      <div className="space-y-8">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-4xl font-bold text-[var(--foreground)] mb-2">
            Choose Your Plan
          </h1>
          <p className="text-[var(--muted-foreground)]">
            Scale your startup with the right tools and support
          </p>
        </div>

        {/* Billing Toggle */}
        <div className="flex items-center justify-center gap-4">
          <button
            onClick={() => setBillingCycle('monthly')}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              billingCycle === 'monthly'
                ? 'bg-[var(--primary)] text-white'
                : 'bg-[var(--muted)] text-[var(--foreground)]'
            }`}
          >
            Monthly
          </button>
          <button
            onClick={() => setBillingCycle('annual')}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              billingCycle === 'annual'
                ? 'bg-[var(--primary)] text-white'
                : 'bg-[var(--muted)] text-[var(--foreground)]'
            }`}
          >
            Annual
          </button>
          {billingCycle === 'annual' && (
            <span className="ml-2 inline-block bg-[var(--success)] text-white text-xs font-bold px-3 py-1 rounded-full">
              Save 20%
            </span>
          )}
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-3 gap-6 mb-12">
          {billingPlans.map((plan, idx) => {
            const Icon =
              plan.name === 'Starter'
                ? Zap
                : plan.name === 'Growth'
                  ? TrendingUp
                  : Crown;
            const monthlyPrice =
              billingCycle === 'annual'
                ? Math.floor((plan.price * 12 * 0.8) / 12)
                : plan.price;

            return (
              <div
                key={idx}
                className={`rounded-2xl border-2 transition-all ${
                  plan.highlighted
                    ? 'border-[var(--primary)] bg-white shadow-lg relative'
                    : 'border-[var(--border)] bg-white'
                }`}
              >
                {plan.badge && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <span className="inline-block bg-[var(--primary)] text-white text-xs font-bold px-3 py-1 rounded-full">
                      {plan.badge}
                    </span>
                  </div>
                )}

                <div className="p-8 space-y-6">
                  {/* Icon and name */}
                  <div className="space-y-3">
                    <div className="w-12 h-12 bg-[var(--muted)] rounded-lg flex items-center justify-center">
                      <Icon size={24} className="text-[var(--primary)]" />
                    </div>
                    <h3 className="text-2xl font-bold text-[var(--foreground)]">
                      {plan.name}
                    </h3>
                    <p className="text-sm text-[var(--muted-foreground)]">
                      {plan.description}
                    </p>
                  </div>

                  {/* Price */}
                  <div className="space-y-1">
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl font-bold text-[var(--foreground)]">
                        ${monthlyPrice}
                      </span>
                      <span className="text-[var(--muted-foreground)]">/month</span>
                    </div>
                    {billingCycle === 'annual' && (
                      <p className="text-xs text-[var(--muted-foreground)]">
                        ${Math.floor(plan.price * 12 * 0.8)}/year
                      </p>
                    )}
                  </div>

                  {/* CTA Button */}
                  <Button
                    className={`w-full py-2.5 rounded-lg font-medium ${
                      plan.highlighted
                        ? 'bg-[var(--primary)] hover:bg-[#5558e3] text-white'
                        : 'bg-white border-2 border-[var(--border)] text-[var(--foreground)] hover:border-[var(--primary)]'
                    }`}
                  >
                    {plan.cta}
                  </Button>

                  {/* Features */}
                  <div className="space-y-3 pt-4 border-t border-[var(--border)]">
                    {plan.features.map((feature, featureIdx) => (
                      <div
                        key={featureIdx}
                        className="flex items-start gap-3"
                      >
                        <Check
                          size={18}
                          className="text-[var(--success)] flex-shrink-0 mt-0.5"
                        />
                        <span className="text-sm text-[var(--foreground)]">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* All Plans Include */}
        <div className="bg-[#f0f4ff] border border-[#e0e7ff] rounded-2xl p-12">
          <h3 className="text-2xl font-bold text-[var(--foreground)] text-center mb-8">
            All plans include
          </h3>
          <div className="grid grid-cols-3 gap-8">
            <div className="text-center space-y-3">
              <div className="flex justify-center mb-4">
                <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center text-[var(--primary)]">
                  <Sparkles size={24} />
                </div>
              </div>
              <h4 className="font-semibold text-[var(--foreground)]">
                AI-Powered Insights
              </h4>
              <p className="text-sm text-[var(--muted-foreground)]">
                Get intelligent recommendations to optimize your startup operations
              </p>
            </div>

            <div className="text-center space-y-3">
              <div className="flex justify-center mb-4">
                <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center text-[var(--primary)]">
                  <Lock size={24} />
                </div>
              </div>
              <h4 className="font-semibold text-[var(--foreground)]">
                Enterprise Security
              </h4>
              <p className="text-sm text-[var(--muted-foreground)]">
                Bank-level encryption and compliance with industry standards
              </p>
            </div>

            <div className="text-center space-y-3">
              <div className="flex justify-center mb-4">
                <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center text-[var(--primary)]">
                  <BarChart3 size={24} />
                </div>
              </div>
              <h4 className="font-semibold text-[var(--foreground)]">
                Growth Analytics
              </h4>
              <p className="text-sm text-[var(--muted-foreground)]">
                Track key metrics and monitor growth trajectory
              </p>
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
