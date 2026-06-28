interface Props {
  current: number;
  total: number;
  label: string;
}

export default function ProgressBar({ current, total, label }: Props) {
  const pct = total === 0 ? 0 : Math.round((current / total) * 100);
  return (
    <div className="w-full max-w-3xl mx-auto px-6 pt-8 pb-2">
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm font-medium text-[#5c6b52]">{label}</span>
        <span className="text-sm font-medium text-[#5c6b52]">{pct}%</span>
      </div>
      <div className="w-full h-3 rounded-full bg-[#e7e2d3] overflow-hidden">
        <div
          className="h-full rounded-full bg-gradient-to-r from-[#6f9c63] to-[#9bc18a] transition-all duration-500 ease-out"
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
}
