'use client';

import React from 'react';
import { AppLayout } from '@/components/AppLayout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Search,
  Filter,
  Plus,
  AlertCircle,
  Clock,
  CheckCircle2,
} from 'lucide-react';
import { kanbanTasks } from '@/lib/mock-data';

interface Task {
  id: number;
  title: string;
  priority: string;
  assignee: string;
  dueDate: string;
  tags: string[];
}

const KanbanColumn = ({
  title,
  count,
  tasks,
  icon: Icon,
}: {
  title: string;
  count: number;
  tasks: Task[];
  icon: React.ReactNode;
}) => {
  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high':
        return 'bg-[#fee2e2] text-[var(--error)]';
      case 'medium':
        return 'bg-[#fef3c7] text-[var(--warning)]';
      case 'low':
        return 'bg-[#dcfce7] text-[var(--success)]';
      default:
        return 'bg-[var(--muted)] text-[var(--muted-foreground)]';
    }
  };

  return (
    <div className="flex-1 bg-[var(--muted)] rounded-xl p-4 space-y-4">
      <div className="flex items-center gap-2 px-3 py-2">
        {Icon}
        <h3 className="font-semibold text-[var(--foreground)]">{title}</h3>
        <span className="ml-auto text-sm font-medium bg-white px-2 py-0.5 rounded text-[var(--muted-foreground)]">
          {count}
        </span>
      </div>

      <div className="space-y-3">
        {tasks.map((task) => (
          <div
            key={task.id}
            className="bg-white border border-[var(--border)] rounded-lg p-4 space-y-3 hover:shadow-md transition-shadow cursor-move"
          >
            <div className="space-y-2">
              <p className="font-medium text-[var(--foreground)]">{task.title}</p>
              <p className="text-xs text-[var(--muted-foreground)]">
                by {task.assignee}
              </p>
            </div>

            <div className="flex flex-wrap gap-1">
              {task.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="text-xs bg-[var(--muted)] text-[var(--muted-foreground)] px-2 py-1 rounded"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex items-center justify-between pt-2 border-t border-[var(--border)]">
              <span className={`text-xs font-semibold px-2 py-1 rounded ${getPriorityColor(task.priority)}`}>
                {task.priority}
              </span>
              <span className="text-xs text-[var(--muted-foreground)]">
                {task.dueDate}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default function TasksPage() {
  return (
    <AppLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-[var(--foreground)]">
              Task Management
            </h1>
            <p className="text-[var(--muted-foreground)] mt-1">
              Track and manage your team's work
            </p>
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center gap-3">
          <div className="relative flex-1 max-w-xs">
            <Search
              size={18}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--muted-foreground)]"
            />
            <input
              type="text"
              placeholder="Search tasks..."
              className="w-full pl-10 pr-4 py-2 border border-[var(--border)] rounded-lg bg-white placeholder-[var(--muted-foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
            />
          </div>
          <button className="p-2.5 border border-[var(--border)] rounded-lg hover:bg-[var(--muted)] transition-colors">
            <Filter size={18} className="text-[var(--muted-foreground)]" />
          </button>
          <Button className="bg-[var(--primary)] hover:bg-[#5558e3] text-white">
            <Plus size={18} className="mr-2" />
            New Task
          </Button>
        </div>

        {/* Kanban Board */}
        <div className="flex gap-4 overflow-x-auto pb-4">
          <KanbanColumn
            title="To Do"
            count={kanbanTasks.todo.length}
            tasks={kanbanTasks.todo}
            icon={<AlertCircle size={20} className="text-[var(--muted-foreground)]" />}
          />
          <KanbanColumn
            title="In Progress"
            count={kanbanTasks.inProgress.length}
            tasks={kanbanTasks.inProgress}
            icon={<Clock size={20} className="text-[var(--warning)]" />}
          />
          <KanbanColumn
            title="Done"
            count={kanbanTasks.done.length}
            tasks={kanbanTasks.done}
            icon={<CheckCircle2 size={20} className="text-[var(--success)]" />}
          />
        </div>
      </div>
    </AppLayout>
  );
}
