'use client';

import React, { useState } from 'react';
import { AppLayout } from '@/components/AppLayout';
import { Button } from '@/components/ui/button';
import {
  Sparkles,
  Mic,
  MicOff,
  Settings,
  Send,
  AlertCircle,
  CheckCircle2,
  TrendingUp,
} from 'lucide-react';
import {
  aiCoFounderMessages,
  aiCoFounderQuickQuestions,
  aiCoFounderHealthScore,
  liveInsights,
  aiActionPlan,
} from '@/lib/mock-data';

export default function AICoFounderPage() {
  const [voiceEnabled, setVoiceEnabled] = useState(false);
  const [inputValue, setInputValue] = useState('');

  return (
    <AppLayout>
      <div className="space-y-6">
        {/* Header */}
        <div>
          <p className="text-sm text-[var(--muted-foreground)] mb-2">
            ⚡ 24/7 Virtual Co-Founder
          </p>
          <h1 className="text-3xl font-bold text-[var(--foreground)]">
            AI Co-Founder Assistant
          </h1>
        </div>

        {/* Main Layout */}
        <div className="grid grid-cols-3 gap-4">
          {/* Chat Panel */}
          <div className="col-span-2 bg-white border border-[var(--border)] rounded-xl flex flex-col h-[600px]">
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-[var(--border)]">
              <h3 className="font-semibold text-[var(--foreground)]">
                Intelligent Conversation
              </h3>
              <button
                onClick={() => setVoiceEnabled(!voiceEnabled)}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                  voiceEnabled
                    ? 'bg-[var(--primary)] text-white'
                    : 'bg-[var(--muted)] text-[var(--muted-foreground)]'
                }`}
              >
                {voiceEnabled ? <Mic size={16} /> : <MicOff size={16} />}
                Voice {voiceEnabled ? 'On' : 'Off'}
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {aiCoFounderMessages.map((msg, idx) => (
                <div key={idx} className="space-y-2">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-[var(--primary)] rounded-full flex items-center justify-center text-white flex-shrink-0">
                      <Sparkles size={16} />
                    </div>
                    <div className="flex-1 bg-[var(--muted)] rounded-lg p-4 space-y-3">
                      <p className="text-sm text-[var(--foreground)] whitespace-pre-wrap">
                        {msg.content}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Questions */}
            <div className="p-4 border-t border-[var(--border)] space-y-3">
              <p className="text-xs font-medium text-[var(--muted-foreground)]">
                Quick Questions
              </p>
              <div className="flex flex-wrap gap-2">
                {aiCoFounderQuickQuestions.map((q, idx) => (
                  <button
                    key={idx}
                    className="text-xs px-3 py-1.5 rounded-full border border-[var(--border)] bg-white hover:bg-[var(--muted)] transition-colors text-[var(--foreground)]"
                  >
                    {q}
                  </button>
                ))}
              </div>
            </div>

            {/* Input */}
            <div className="p-4 border-t border-[var(--border)]">
              <div className="flex items-end gap-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Ask me anything about your startup..."
                  className="flex-1 px-4 py-2.5 border border-[var(--border)] rounded-lg bg-white placeholder-[var(--muted-foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
                />
                <button className="p-2.5 bg-[var(--primary)] text-white rounded-lg hover:bg-[#5558e3] transition-colors">
                  <Send size={18} />
                </button>
              </div>
            </div>
          </div>

          {/* Right Panel */}
          <div className="space-y-4">
            {/* Health Score */}
            <div className="bg-[#f3e8ff] border border-[#e0e7ff] rounded-xl p-6">
              <div className="flex items-center gap-2 mb-4">
                <Sparkles size={20} className="text-[var(--primary)]" />
                <h4 className="font-semibold text-[var(--foreground)]">
                  Real-time Health Score
                </h4>
              </div>
              <div className="space-y-3">
                <div>
                  <p className="text-xs text-[var(--muted-foreground)] mb-1">
                    Overall Health
                  </p>
                  <p className="text-3xl font-bold text-[var(--primary)]">
                    {aiCoFounderHealthScore.overall}
                    <span className="text-lg">/100</span>
                  </p>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-[var(--foreground)]">
                      Execution Velocity
                    </span>
                    <span className="font-semibold text-[var(--success)]">
                      {aiCoFounderHealthScore.executionVelocity}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[var(--foreground)]">
                      Burn Efficiency
                    </span>
                    <span className="font-semibold text-[var(--warning)]">
                      {aiCoFounderHealthScore.burnEfficiency}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[var(--foreground)]">
                      Series A Readiness
                    </span>
                    <span className="font-semibold text-[var(--warning)]">
                      {aiCoFounderHealthScore.seriesAReadiness}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Live Insights */}
            <div className="bg-white border border-[var(--border)] rounded-xl p-6 space-y-3">
              <h4 className="font-semibold text-[var(--foreground)]">
                Live Insights
              </h4>
              <div className="space-y-3">
                {liveInsights.map((insight, idx) => (
                  <div
                    key={idx}
                    className={`p-3 rounded-lg space-y-1 ${
                      insight.color === 'green'
                        ? 'bg-[#f0fdf4] border border-[#dcfce7]'
                        : 'bg-[#fffbeb] border border-[#fef3c7]'
                    }`}
                  >
                    <div className="flex items-start gap-2">
                      {insight.color === 'green' ? (
                        <CheckCircle2
                          size={16}
                          className="text-[var(--success)] flex-shrink-0 mt-0.5"
                        />
                      ) : (
                        <AlertCircle
                          size={16}
                          className="text-[var(--warning)] flex-shrink-0 mt-0.5"
                        />
                      )}
                      <h5 className="text-xs font-semibold text-[var(--foreground)]">
                        {insight.title}
                      </h5>
                    </div>
                    <p className="text-xs text-[var(--muted-foreground)]">
                      {insight.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* AI-Powered Action Plan */}
        <div className="bg-white border border-[var(--border)] rounded-xl p-6">
          <div className="flex items-center gap-2 mb-6">
            <Sparkles size={20} className="text-[var(--primary)]" />
            <h3 className="text-lg font-semibold text-[var(--foreground)]">
              AI-Powered Action Plan (Prioritized by Impact)
            </h3>
          </div>

          <div className="space-y-3">
            {aiActionPlan.map((action, idx) => (
              <div
                key={idx}
                className="flex items-start gap-4 p-4 border border-[var(--border)] rounded-lg hover:bg-[var(--muted)] transition-colors cursor-pointer"
              >
                <div className="flex flex-col items-center gap-2 flex-shrink-0">
                  <span
                    className={`text-xs font-bold px-2 py-1 rounded ${
                      action.badge === 'Critical'
                        ? 'bg-[#fee2e2] text-[var(--error)]'
                        : 'bg-[#fef3c7] text-[var(--warning)]'
                    }`}
                  >
                    {action.badge}
                  </span>
                </div>

                <div className="flex-1">
                  <h4 className="font-semibold text-[var(--foreground)] mb-2">
                    {action.title}
                  </h4>
                  <div className="space-y-2 text-sm text-[var(--muted-foreground)]">
                    <div>
                      <span className="font-medium text-[var(--foreground)]">
                        Why:{' '}
                      </span>
                      {action.why}
                    </div>
                    <div>
                      <span className="font-medium text-[var(--foreground)]">
                        Timeline:{' '}
                      </span>
                      {action.timeline}
                    </div>
                  </div>
                </div>

                <ArrowRight size={20} className="text-[var(--muted-foreground)] flex-shrink-0 mt-1" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </AppLayout>
  );
}

import { ArrowRight } from 'lucide-react';
