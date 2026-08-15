import React, { useState } from 'react';
import { TrendingUp, Users, DollarSign, Activity, ArrowUpRight, ArrowDownRight, RefreshCw } from 'lucide-react';

export const AnalyticsDemo: React.FC = () => {
  const [timeframe, setTimeframe] = useState<'7d' | '30d' | '90d'>('30d');
  const [dataSeed, setDataSeed] = useState(1);

  const metrics = [
    { label: 'Total Revenue', value: '$84,230', change: '+14.2%', isPositive: true, icon: DollarSign },
    { label: 'Active Users', value: '18,420', change: '+22.5%', isPositive: true, icon: Users },
    { label: 'Avg Session Time', value: '4m 32s', change: '-1.8%', isPositive: false, icon: Activity },
    { label: 'Conversion Rate', value: '3.84%', change: '+0.6%', isPositive: true, icon: TrendingUp },
  ];

  const chartBars = timeframe === '7d'
    ? [45, 62, 78, 55, 89, 94, 82]
    : timeframe === '30d'
    ? [35, 42, 48, 55, 60, 58, 64, 72, 68, 77, 85, 92, 88, 95]
    : [20, 30, 45, 40, 55, 65, 70, 75, 80, 85, 90, 95, 88, 92, 100];

  return (
    <div className="bg-white dark:bg-slate-900 rounded-xl p-4 md:p-6 text-slate-800 dark:text-slate-100 border border-slate-200 dark:border-slate-800">
      <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-slate-100 dark:border-slate-800">
        <div>
          <h4 className="font-bold text-lg text-slate-900 dark:text-white flex items-center gap-2">
            <Activity className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            Pulse Analytics Live Command Center
          </h4>
          <p className="text-xs text-slate-500 dark:text-slate-400">Interactive telemetry with dynamic time slicing</p>
        </div>

        <div className="flex items-center gap-2">
          {(['7d', '30d', '90d'] as const).map(tf => (
            <button
              key={tf}
              onClick={() => setTimeframe(tf)}
              className={`px-3 py-1 text-xs font-semibold rounded-md transition ${
                timeframe === tf
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200'
              }`}
            >
              {tf.toUpperCase()}
            </button>
          ))}
          <button
            onClick={() => setDataSeed(s => s + 1)}
            title="Refresh metrics data"
            className="p-1.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 transition"
          >
            <RefreshCw className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Metrics Row */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 my-5">
        {metrics.map((m, idx) => {
          const Icon = m.icon;
          return (
            <div key={idx} className="p-3 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/40">
              <div className="flex items-center justify-between text-xs text-slate-500 mb-1">
                <span>{m.label}</span>
                <Icon className="w-3.5 h-3.5 text-blue-600" />
              </div>
              <div className="text-lg font-bold text-slate-900 dark:text-white mb-1">
                {m.value}
              </div>
              <div className={`flex items-center text-[11px] font-semibold ${m.isPositive ? 'text-emerald-600 dark:text-emerald-400' : 'text-rose-600 dark:text-rose-400'}`}>
                {m.isPositive ? <ArrowUpRight className="w-3 h-3 mr-0.5" /> : <ArrowDownRight className="w-3 h-3 mr-0.5" />}
                {m.change}
              </div>
            </div>
          );
        })}
      </div>

      {/* Simulated Live Trend Visualizer */}
      <div className="p-4 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50/40 dark:bg-slate-800/30">
        <div className="flex justify-between items-center mb-4">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Live Traffic & Revenue Trajectory</span>
          <span className="text-[11px] text-emerald-600 flex items-center gap-1 font-semibold">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span> Live Stream Active
          </span>
        </div>

        <div className="h-36 flex items-end gap-2 pt-4 px-2">
          {chartBars.map((height, i) => {
            const dynamicHeight = Math.min(100, Math.max(15, (height + (dataSeed * 7) % 25)));
            return (
              <div key={i} className="flex-1 flex flex-col items-center gap-1.5 group h-full justify-end">
                <div
                  style={{ height: `${dynamicHeight}%` }}
                  className="w-full bg-blue-500/80 hover:bg-blue-600 dark:bg-blue-500 dark:hover:bg-blue-400 rounded-t transition-all duration-300 relative"
                >
                  <div className="opacity-0 group-hover:opacity-100 absolute -top-7 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-[10px] py-0.5 px-1.5 rounded pointer-events-none whitespace-nowrap shadow z-10 transition-opacity">
                    ${dynamicHeight * 120}
                  </div>
                </div>
                <span className="text-[9px] text-slate-400">P{i + 1}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
