interface Props {
  sectionIndex: number;
  totalSections: number;
  sectionTitle: string;
  sectionStepsDone: number;
  sectionStepsTotal: number;
  overallCurrent: number;
  overallTotal: number;
}

export default function ProgressBar({
  sectionIndex,
  totalSections,
  sectionTitle,
  sectionStepsDone,
  sectionStepsTotal,
  overallCurrent,
  overallTotal,
}: Props) {
  const overallPct = overallTotal === 0 ? 0 : Math.round((overallCurrent / overallTotal) * 100);
  const sectionPct =
    sectionStepsTotal === 0 ? 0 : Math.round((sectionStepsDone / sectionStepsTotal) * 100);

  return (
    <div className="w-full sticky top-[73px] z-10 bg-[#faf7f0]/80 backdrop-blur border-b border-[#e7e2d3]">
      <div className="max-w-3xl mx-auto px-6 pt-6 pb-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-[#5c6b52]">
            Section {sectionIndex + 1} of {totalSections} — {sectionTitle}
          </span>
          <span className="text-sm font-medium text-[#5c6b52]">{overallPct}% complete</span>
        </div>
        <div className="flex gap-1.5">
          {Array.from({ length: totalSections }).map((_, i) => {
            const fillPct = i < sectionIndex ? 100 : i === sectionIndex ? sectionPct : 0;
            return (
              <div key={i} className="flex-1 h-3 rounded-full bg-[#e7e2d3] overflow-hidden">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-[#6f9c63] to-[#9bc18a] transition-all duration-500 ease-out"
                  style={{ width: `${fillPct}%` }}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
