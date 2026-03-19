'use client';

import React from 'react';
import { AppLayout } from '@/components/AppLayout';
import { MessageCircle, Send } from 'lucide-react';

export default function SupportChatPage() {
  return (
    <AppLayout>
      <div className="flex flex-col h-[calc(100vh-200px)]">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-[var(--foreground)]">
            Support Chat
          </h1>
          <p className="text-[var(--muted-foreground)] mt-1">
            Get help from our support team
          </p>
        </div>

        <div className="flex-1 bg-white border border-[var(--border)] rounded-xl flex flex-col">
          <div className="flex-1 flex items-center justify-center p-8 text-center">
            <div className="space-y-4">
              <div className="w-16 h-16 bg-[var(--muted)] rounded-lg flex items-center justify-center mx-auto">
                <MessageCircle size={32} className="text-[var(--primary)]" />
              </div>
              <h2 className="text-xl font-semibold text-[var(--foreground)]">
                Support Team Available
              </h2>
              <p className="text-[var(--muted-foreground)]">
                Our team is ready to help you with any questions
              </p>
            </div>
          </div>

          <div className="p-4 border-t border-[var(--border)]">
            <div className="flex items-end gap-2">
              <input
                type="text"
                placeholder="Type your message..."
                className="flex-1 px-4 py-2.5 border border-[var(--border)] rounded-lg bg-white placeholder-[var(--muted-foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
              />
              <button className="p-2.5 bg-[var(--primary)] text-white rounded-lg hover:bg-[#5558e3] transition-colors">
                <Send size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
