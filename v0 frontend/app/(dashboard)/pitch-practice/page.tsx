'use client';

import React, { useState } from 'react';
import { AppLayout } from '@/components/AppLayout';
import { Button } from '@/components/ui/button';
import { Mic, Sparkles, SkipForward } from 'lucide-react';
import { pitchPracticeSession, pitchProTips } from '@/lib/mock-data';

export default function PitchPracticePage() {
  const [isRecording, setIsRecording] = useState(false);

  return (
    <AppLayout>
      <div className="space-y-6">
        {/* Header */}
        <div>
          <p className="text-sm text-[var(--muted-foreground)] mb-2">
            🎤 AI Pitch Simulator
          </p>
          <h1 className="text-3xl font-bold text-[var(--foreground)]">
            Shark Tank Practice Session
          </h1>
          <p className="text-[var(--muted-foreground)] mt-2">
            Face intelligent AI Judges that ask tough questions and provide realtime
            feedback on your pitch.
          </p>
        </div>

        {/* Progress Bar */}
        <div className="bg-white border border-[var(--border)] rounded-xl p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-[var(--foreground)]">
              Session Progress
            </h3>
            <span className="text-sm text-[var(--muted-foreground)]">
              {pitchPracticeSession.status}
            </span>
          </div>

          <div className="space-y-4">
            {/* Questions Answered */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-[var(--foreground)]">
                  Questions Answered
                </span>
                <span className="text-sm font-semibold text-[var(--muted-foreground)]">
                  {pitchPracticeSession.questionsAnswered}/{pitchPracticeSession.totalQuestions}
                </span>
              </div>
              <div className="h-2 bg-[var(--muted)] rounded-full overflow-hidden">
                <div
                  className="h-full bg-[var(--primary)] transition-all"
                  style={{
                    width: `${(pitchPracticeSession.questionsAnswered / pitchPracticeSession.totalQuestions) * 100}%`,
                  }}
                />
              </div>
            </div>

            {/* Confidence Level */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-[var(--foreground)]">
                  Confidence Level
                </span>
                <span className="text-sm font-semibold text-[var(--muted-foreground)]">
                  {pitchPracticeSession.confidenceLevel}%
                </span>
              </div>
              <div className="h-2 bg-[var(--muted)] rounded-full overflow-hidden">
                <div
                  className="h-full bg-[var(--warning)] transition-all"
                  style={{ width: `${pitchPracticeSession.confidenceLevel}%` }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Live Pitch Session */}
        <div className="bg-white border border-[var(--border)] rounded-xl p-6">
          <div className="flex items-center gap-3 mb-6 pb-6 border-b border-[var(--border)]">
            <div className="w-12 h-12 bg-[#fee2e2] rounded-lg flex items-center justify-center text-xl">
              🦈
            </div>
            <div>
              <h3 className="font-semibold text-[var(--foreground)]">
                AI Judge - Shark Tank Edition
              </h3>
              <p className="text-xs text-[var(--muted-foreground)]">
                Evaluating your pitch with industry expertise
              </p>
            </div>
          </div>

          {/* Question */}
          <div className="mb-8 space-y-4">
            <p className="text-sm text-[var(--muted-foreground)]">Current Question:</p>
            <div className="bg-[var(--muted)] rounded-lg p-4 border border-[var(--border)]">
              <p className="text-lg font-medium text-[var(--foreground)]">
                {pitchPracticeSession.currentQuestion}
              </p>
            </div>
          </div>

          {/* Microphone Button */}
          <div className="flex flex-col items-center gap-4 py-8">
            <button
              onClick={() => setIsRecording(!isRecording)}
              className={`w-20 h-20 rounded-full flex items-center justify-center transition-all ${
                isRecording
                  ? 'bg-[var(--error)] animate-pulse'
                  : 'bg-[var(--primary)] hover:bg-[#5558e3]'
              }`}
            >
              <Mic size={32} className="text-white" />
            </button>
            <p className="text-center text-sm text-[var(--muted-foreground)]">
              Click the microphone to record your answer
            </p>
          </div>

          {/* Buttons */}
          <div className="flex items-center gap-3">
            <Button className="flex-1 bg-[var(--primary)] hover:bg-[#5558e3] text-white py-2.5">
              Next Question
            </Button>
            <button className="px-4 py-2.5 text-[var(--primary)] font-medium hover:bg-[var(--muted)] rounded-lg transition-colors">
              <SkipForward size={18} className="mr-2 inline" />
              Skip
            </button>
          </div>
        </div>

        {/* Pro Tips */}
        <div className="bg-[#f0f4ff] border border-[#e0e7ff] rounded-xl p-6">
          <div className="flex items-start gap-2 mb-4">
            <Sparkles size={20} className="text-[var(--primary)]" />
            <h3 className="text-lg font-semibold text-[var(--foreground)]">
              Pro Tips for This Session
            </h3>
          </div>

          <ul className="space-y-3">
            {pitchProTips.map((tip, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <span className="flex-shrink-0 w-5 h-5 rounded-full bg-[var(--primary)] text-white flex items-center justify-center text-xs font-bold">
                  ✓
                </span>
                <span className="text-sm text-[var(--foreground)]">{tip}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </AppLayout>
  );
}
