import React, { useState } from 'react';
import { CloudSun, Sun, CloudRain, Wind, Droplets, Compass, MapPin } from 'lucide-react';

export const WeatherDemo: React.FC = () => {
  const [selectedCity, setSelectedCity] = useState<'sf' | 'tokyo' | 'london' | 'nyc'>('sf');
  const [unit, setUnit] = useState<'C' | 'F'>('C');

  const cityData = {
    sf: { name: 'San Francisco, USA', tempC: 19, tempF: 66, condition: 'Partly Sunny', humidity: 68, wind: '14 km/h', uv: 5, icon: CloudSun, forecast: [18, 19, 21, 20, 19] },
    tokyo: { name: 'Tokyo, Japan', tempC: 24, tempF: 75, condition: 'Clear Skies', humidity: 54, wind: '9 km/h', uv: 7, icon: Sun, forecast: [24, 26, 27, 25, 23] },
    london: { name: 'London, UK', tempC: 14, tempF: 57, condition: 'Light Showers', humidity: 82, wind: '22 km/h', uv: 3, icon: CloudRain, forecast: [14, 15, 13, 14, 16] },
    nyc: { name: 'New York, USA', tempC: 22, tempF: 72, condition: 'Sunny & Crisp', humidity: 48, wind: '11 km/h', uv: 6, icon: Sun, forecast: [22, 23, 25, 21, 22] },
  };

  const current = cityData[selectedCity];
  const MainIcon = current.icon;
  const temp = unit === 'C' ? current.tempC : current.tempF;

  return (
    <div className="bg-white dark:bg-slate-900 rounded-xl p-4 md:p-6 text-slate-800 dark:text-slate-100 border border-slate-200 dark:border-slate-800">
      <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-slate-100 dark:border-slate-800">
        <div>
          <h4 className="font-bold text-lg text-slate-900 dark:text-white flex items-center gap-2">
            <CloudSun className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            Aura Meteorological Hub Prototype
          </h4>
          <p className="text-xs text-slate-500 dark:text-slate-400">Live atmospheric metrics with multi-city switching</p>
        </div>

        <div className="flex items-center gap-2">
          {(['sf', 'tokyo', 'london', 'nyc'] as const).map(k => (
            <button
              key={k}
              onClick={() => setSelectedCity(k)}
              className={`px-3 py-1 text-xs font-semibold rounded ${
                selectedCity === k
                  ? 'bg-blue-600 text-white'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300'
              }`}
            >
              {k.toUpperCase()}
            </button>
          ))}
          <button
            onClick={() => setUnit(u => u === 'C' ? 'F' : 'C')}
            className="px-2 py-1 text-xs font-bold rounded border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800"
          >
            °{unit}
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-5">
        {/* Main Weather Card */}
        <div className="sm:col-span-2 p-5 rounded-lg bg-linear-to-br from-blue-600 to-indigo-700 text-white flex flex-col justify-between shadow-md">
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center gap-1.5 text-blue-100 text-xs font-medium mb-1">
                <MapPin className="w-3.5 h-3.5" /> {current.name}
              </div>
              <h3 className="text-3xl font-extrabold">{temp}°{unit}</h3>
              <p className="text-sm text-blue-100 mt-0.5">{current.condition}</p>
            </div>
            <MainIcon className="w-16 h-16 text-amber-300 drop-shadow-md" />
          </div>

          <div className="grid grid-cols-3 gap-2 pt-4 mt-4 border-t border-white/20 text-xs text-blue-50">
            <div className="flex items-center gap-1.5">
              <Droplets className="w-4 h-4 text-blue-200" />
              <span>{current.humidity}% Humidity</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Wind className="w-4 h-4 text-blue-200" />
              <span>{current.wind}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Compass className="w-4 h-4 text-blue-200" />
              <span>UV {current.uv} / 10</span>
            </div>
          </div>
        </div>

        {/* 5-Day Forecast Column */}
        <div className="p-4 rounded-lg bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60 flex flex-col justify-between">
          <span className="text-xs font-bold text-slate-600 dark:text-slate-300 uppercase tracking-wider mb-2">5-Day Outlook</span>
          <div className="space-y-2">
            {current.forecast.map((t, idx) => (
              <div key={idx} className="flex items-center justify-between text-xs py-1 border-b border-slate-100 dark:border-slate-700/40 last:border-0">
                <span className="text-slate-500">Day {idx + 1}</span>
                <span className="font-semibold text-slate-800 dark:text-slate-200">
                  {unit === 'C' ? t : Math.round((t * 9) / 5 + 32)}°{unit}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
