'use client';

import React from 'react';
import { AppLayout } from '@/components/AppLayout';
import { Settings as SettingsIcon, Save } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function SettingsPage() {
  return (
    <AppLayout>
      <div className="max-w-2xl space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-[var(--foreground)]">
            Settings
          </h1>
          <p className="text-[var(--muted-foreground)] mt-1">
            Manage your account and preferences
          </p>
        </div>

        <div className="space-y-4">
          {/* Profile Section */}
          <div className="bg-white border border-[var(--border)] rounded-xl p-6">
            <h2 className="text-lg font-semibold text-[var(--foreground)] mb-4 flex items-center gap-2">
              <SettingsIcon size={20} />
              Account Settings
            </h2>

            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium text-[var(--foreground)]">
                  Full Name
                </label>
                <input
                  type="text"
                  defaultValue="Jane Khushboocodes"
                  className="w-full mt-2 px-4 py-2 border border-[var(--border)] rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-[var(--foreground)]">
                  Email Address
                </label>
                <input
                  type="email"
                  defaultValue="jane@techventure.com"
                  className="w-full mt-2 px-4 py-2 border border-[var(--border)] rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-[var(--foreground)]">
                  Company Name
                </label>
                <input
                  type="text"
                  defaultValue="TechVenture Inc."
                  className="w-full mt-2 px-4 py-2 border border-[var(--border)] rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-[var(--foreground)]">
                  Role
                </label>
                <input
                  type="text"
                  defaultValue="Founder & CEO"
                  className="w-full mt-2 px-4 py-2 border border-[var(--border)] rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
                />
              </div>

              <Button className="bg-[var(--primary)] hover:bg-[#5558e3] text-white">
                <Save size={18} className="mr-2" />
                Save Changes
              </Button>
            </div>
          </div>

          {/* Notifications */}
          <div className="bg-white border border-[var(--border)] rounded-xl p-6">
            <h2 className="text-lg font-semibold text-[var(--foreground)] mb-4">
              Notifications
            </h2>

            <div className="space-y-3">
              {[
                'Email on new team member',
                'Email on task completion',
                'Weekly performance summary',
                'Investor update reminders',
              ].map((notification, idx) => (
                <label
                  key={idx}
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-[var(--muted)] cursor-pointer"
                >
                  <input
                    type="checkbox"
                    defaultChecked
                    className="w-4 h-4 rounded border-[var(--border)] accent-[var(--primary)]"
                  />
                  <span className="text-sm text-[var(--foreground)]">
                    {notification}
                  </span>
                </label>
              ))}
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
