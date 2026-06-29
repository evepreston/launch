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
    <div className="w-full sticky top-[73px] z-10 bg-[#f5f2ea]/80 backdrop-blur">
      <div className="max-w-3xl mx-auto px-6 pt-6 pb-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-[#5a5a52] lowercase">
            section {sectionIndex + 1} of {totalSections} — {sectionTitle}
          </span>
          <span className="text-sm font-medium text-[#5a5a52]">{overallPct}% complete</span>
        </div>
        <div className="flex gap-1.5">
          {Array.from({ length: totalSections }).map((_, i) => {
            const fillPct = i < sectionIndex ? 100 : i === sectionIndex ? sectionPct : 0;
            return (
              <div key={i} className="flex-1 h-3 rounded-full bg-[#e6ddc9] overflow-hidden">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-[#7d9b76] to-[#a8c2a1] transition-all duration-500 ease-out"
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
