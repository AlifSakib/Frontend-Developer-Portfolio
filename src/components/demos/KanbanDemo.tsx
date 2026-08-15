import React, { useState } from 'react';
import { Columns3, Plus, CheckCircle2, Clock, AlertCircle } from 'lucide-react';

interface Task {
  id: string;
  title: string;
  tag: string;
  tagColor: string;
  status: 'backlog' | 'in_progress' | 'done';
}

export const KanbanDemo: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([
    { id: '1', title: 'Implement React 19 Server Actions & Optimistic Hooks', tag: 'Core', tagColor: 'bg-purple-100 text-purple-700 dark:bg-purple-900/40 dark:text-purple-300', status: 'done' },
    { id: '2', title: 'Optimize Lighthouse score & Core Web Vitals (LCP < 1.2s)', tag: 'Performance', tagColor: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300', status: 'in_progress' },
    { id: '3', title: 'Refactor Tailwind styling & accessible ARIA modal dialogs', tag: 'UI / a11y', tagColor: 'bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300', status: 'in_progress' },
    { id: '4', title: 'Setup automated E2E Cypress regression suite', tag: 'Testing', tagColor: 'bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300', status: 'backlog' },
  ]);

  const [newTaskTitle, setNewTaskTitle] = useState('');

  const moveTask = (id: string, newStatus: 'backlog' | 'in_progress' | 'done') => {
    setTasks(prev => prev.map(t => t.id === id ? { ...t, status: newStatus } : t));
  };

  const handleAddTask = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTaskTitle.trim()) return;
    const newTask: Task = {
      id: Date.now().toString(),
      title: newTaskTitle.trim(),
      tag: 'Feature',
      tagColor: 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/40 dark:text-indigo-300',
      status: 'backlog'
    };
    setTasks(prev => [newTask, ...prev]);
    setNewTaskTitle('');
  };

  const columns = [
    { key: 'backlog' as const, label: 'Backlog', icon: AlertCircle, color: 'text-slate-500' },
    { key: 'in_progress' as const, label: 'In Progress', icon: Clock, color: 'text-blue-500' },
    { key: 'done' as const, label: 'Completed', icon: CheckCircle2, color: 'text-emerald-500' },
  ];

  return (
    <div className="bg-white dark:bg-slate-900 rounded-xl p-4 md:p-6 text-slate-800 dark:text-slate-100 border border-slate-200 dark:border-slate-800">
      <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-slate-100 dark:border-slate-800">
        <div>
          <h4 className="font-bold text-lg text-slate-900 dark:text-white flex items-center gap-2">
            <Columns3 className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            CoCreate Kanban Board Prototype
          </h4>
          <p className="text-xs text-slate-500 dark:text-slate-400">Click actions to advance sprint tasks across lifecycle states</p>
        </div>

        <form onSubmit={handleAddTask} className="flex gap-2 w-full sm:w-auto">
          <input
            type="text"
            placeholder="Quick task title..."
            value={newTaskTitle}
            onChange={(e) => setNewTaskTitle(e.target.value)}
            className="px-3 py-1.5 text-xs rounded border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 focus:outline-none focus:border-blue-500 w-full sm:w-48"
          />
          <button
            type="submit"
            className="px-3 py-1.5 bg-blue-600 hover:bg-blue-700 text-white rounded text-xs font-semibold flex items-center gap-1 shrink-0"
          >
            <Plus className="w-3.5 h-3.5" /> Add
          </button>
        </form>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-5">
        {columns.map(col => {
          const colTasks = tasks.filter(t => t.status === col.key);
          const ColIcon = col.icon;
          return (
            <div key={col.key} className="bg-slate-50 dark:bg-slate-800/50 rounded-lg p-3 border border-slate-200 dark:border-slate-700/60 flex flex-col">
              <div className="flex items-center justify-between pb-2 mb-3 border-b border-slate-200 dark:border-slate-700">
                <span className="font-semibold text-xs text-slate-700 dark:text-slate-200 flex items-center gap-1.5">
                  <ColIcon className={`w-4 h-4 ${col.color}`} /> {col.label}
                </span>
                <span className="text-[10px] px-2 py-0.5 font-bold rounded-full bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300">
                  {colTasks.length}
                </span>
              </div>

              <div className="space-y-2.5 flex-1 min-h-[140px]">
                {colTasks.length === 0 ? (
                  <div className="h-full flex items-center justify-center text-slate-400 text-xs italic py-6">
                    No tasks here
                  </div>
                ) : (
                  colTasks.map(task => (
                    <div
                      key={task.id}
                      className="p-3 bg-white dark:bg-slate-900 rounded-md border border-slate-200 dark:border-slate-800 shadow-xs hover:border-blue-400 transition"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className={`text-[10px] font-bold px-2 py-0.5 rounded ${task.tagColor}`}>
                          {task.tag}
                        </span>
                      </div>
                      <p className="text-xs font-medium text-slate-800 dark:text-slate-200 mb-3">
                        {task.title}
                      </p>

                      <div className="flex items-center justify-between pt-2 border-t border-slate-100 dark:border-slate-800 text-[11px]">
                        {col.key === 'backlog' && (
                          <button
                            onClick={() => moveTask(task.id, 'in_progress')}
                            className="text-blue-600 hover:text-blue-700 dark:text-blue-400 font-semibold flex items-center gap-1"
                          >
                            Start →
                          </button>
                        )}
                        {col.key === 'in_progress' && (
                          <>
                            <button
                              onClick={() => moveTask(task.id, 'backlog')}
                              className="text-slate-400 hover:text-slate-600"
                            >
                              ← Back
                            </button>
                            <button
                              onClick={() => moveTask(task.id, 'done')}
                              className="text-emerald-600 hover:text-emerald-700 dark:text-emerald-400 font-semibold"
                            >
                              Done ✓
                            </button>
                          </>
                        )}
                        {col.key === 'done' && (
                          <button
                            onClick={() => moveTask(task.id, 'in_progress')}
                            className="text-slate-400 hover:text-slate-600"
                          >
                            Reopen
                          </button>
                        )}
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
