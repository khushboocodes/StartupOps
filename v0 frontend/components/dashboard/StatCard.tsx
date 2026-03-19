import React from 'react';
import {
  Circle,
  TrendingUp,
  CheckCircle2,
} from 'lucide-react';

interface StatCardProps {
  value: string | number;
  label: string;
  badge?: string;
  subtext?: string;
  trend?: string;
  trendColor?: 'green' | 'red';
  color?: 'green' | 'purple' | 'blue';
}

export function StatCard({
  value,
  label,
  badge,
  subtext,
  trend,
  trendColor = 'green',
  color,
}: StatCardProps) {
  const getBgColor = () => {
    switch (color) {
      case 'green':
        return 'bg-[#f0fdf4]';
      case 'purple':
        return 'bg-[#f3e8ff]';
      case 'blue':
        return 'bg-[#f0f9ff]';
      default:
        return 'bg-white';
    }
  };

  const getIconColor = () => {
    switch (color) {
      case 'green':
        return 'text-[var(--success)]';
      case 'purple':
        return 'text-[var(--primary)]';
      case 'blue':
        return 'text-[var(--secondary)]';
      default:
        return 'text-[var(--primary)]';
    }
  };

  return (
    <div className={`${getBgColor()} border border-[var(--border)] rounded-xl p-6 space-y-3`}>
      <div className="flex items-start justify-between">
        <div className={`p-2 rounded-lg ${color === 'green' ? 'bg-[var(--success)]' : color === 'blue' ? 'bg-[var(--secondary)]' : 'bg-[var(--primary)]'}`}>
          {color === 'green' ? (
            <CheckCircle2 size={24} className="text-white" />
          ) : (
            <Circle size={24} className="text-white" />
          )}
        </div>
        {badge && (
          <span className="text-xs font-medium bg-white px-2 py-1 rounded text-[var(--muted-foreground)]">
            {badge}
          </span>
        )}
      </div>

      <div className="space-y-1">
        <h3 className="text-3xl font-bold text-[var(--foreground)]">
          {value}
        </h3>
        <p className="text-sm text-[var(--muted-foreground)]">{label}</p>
      </div>

      {subtext && (
        <p className="text-xs text-[var(--muted-foreground)]">{subtext}</p>
      )}

      {trend && (
        <div className="flex items-center gap-1">
          <TrendingUp
            size={16}
            className={trendColor === 'green' ? 'text-[var(--success)]' : 'text-[var(--error)]'}
          />
          <span
            className={`text-sm font-medium ${
              trendColor === 'green'
                ? 'text-[var(--success)]'
                : 'text-[var(--error)]'
            }`}
          >
            {trend}
          </span>
        </div>
      )}
    </div>
  );
}
