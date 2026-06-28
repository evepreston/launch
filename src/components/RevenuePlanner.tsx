import { useState } from 'react';

export default function RevenuePlanner() {
  const [rate, setRate] = useState(150);
  const [clients, setClients] = useState(20);
  const [weeks, setWeeks] = useState(48);
  const [cancelRate, setCancelRate] = useState(10);

  const grossSessions = clients * weeks;
  const effectiveSessions = grossSessions * (1 - cancelRate / 100);
  const grossAnnual = effectiveSessions * rate;
  const grossMonthly = grossAnnual / 12;

  const field = (
    label: string,
    value: number,
    setValue: (v: number) => void,
    opts: { prefix?: string; suffix?: string; min?: number; max?: number; step?: number } = {}
  ) => (
    <div>
      <label className="block text-sm font-medium text-[#2f3b2f] mb-1">{label}</label>
      <div className="flex items-center gap-2">
        {opts.prefix && <span className="text-[#5c6b52]">{opts.prefix}</span>}
        <input
          type="number"
          value={value}
          min={opts.min ?? 0}
          max={opts.max}
          step={opts.step ?? 1}
          onChange={(e) => setValue(Number(e.target.value))}
          className="w-full border border-[#d8d2bd] rounded-lg px-3 py-2 bg-white text-[#2f3b2f] focus:outline-none focus:ring-2 focus:ring-[#9bc18a]"
        />
        {opts.suffix && <span className="text-[#5c6b52] whitespace-nowrap">{opts.suffix}</span>}
      </div>
    </div>
  );

  return (
    <div className="bg-[#f3f7ee] rounded-2xl p-6 mt-6">
      <h3 className="font-semibold text-[#2f3b2f] mb-1">Revenue Planner</h3>
      <p className="text-sm text-[#5c6b52] mb-5">
        Here's what your practice could look like financially.
      </p>
      <div className="grid sm:grid-cols-2 gap-4">
        {field('Session rate', rate, setRate, { prefix: '$' })}
        {field('Clients per week', clients, setClients)}
        {field('Weeks worked per year', weeks, setWeeks)}
        {field('Estimated cancellation rate', cancelRate, setCancelRate, { suffix: '%', max: 100 })}
      </div>
      <div className="mt-6 grid sm:grid-cols-2 gap-4">
        <div className="bg-white rounded-xl p-4 text-center border border-[#e7e2d3]">
          <p className="text-sm text-[#5c6b52]">Estimated gross annual income</p>
          <p className="text-2xl font-semibold text-[#6f9c63]">
            ${grossAnnual.toLocaleString(undefined, { maximumFractionDigits: 0 })}
          </p>
        </div>
        <div className="bg-white rounded-xl p-4 text-center border border-[#e7e2d3]">
          <p className="text-sm text-[#5c6b52]">Estimated monthly income</p>
          <p className="text-2xl font-semibold text-[#6f9c63]">
            ${grossMonthly.toLocaleString(undefined, { maximumFractionDigits: 0 })}
          </p>
        </div>
      </div>
    </div>
  );
}
