interface Props {
  sectionStatuses: ('complete' | 'current' | 'upcoming')[];
  sectionLabels: string[];
}

export default function ProgressBar({ sectionStatuses, sectionLabels }: Props) {
  return (
    <div className="w-full sticky top-[73px] z-10 bg-[#f5f2ea]/90 backdrop-blur border-b border-[#e6ddc9]">
      <div className="max-w-5xl mx-auto px-6 py-4">
        <div className="flex gap-2">
          {sectionStatuses.map((status, i) => (
            <div key={i} className="flex-1 flex flex-col gap-1.5">
              <div
                className={`h-2 rounded-full transition-all duration-500 ${
                  status === 'complete'
                    ? 'bg-[#7d9b76]'
                    : status === 'current'
                    ? 'bg-[#7d9b76] animate-pulse'
                    : 'bg-[#f5f2ea] border border-[#d3d1c7]'
                }`}
              />
              <span className="text-[14px] lowercase text-[#8a8a80] leading-tight">
                {sectionLabels[i]}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
