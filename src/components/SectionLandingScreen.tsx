import Shell from './Shell';
import Card from './Card';
import type { SectionMeta } from '../data/sections';

export default function SectionLandingScreen({
  section,
  onContinue,
}: {
  section: SectionMeta;
  onContinue: () => void;
}) {
  const { landing } = section;

  return (
    <Shell>
      <div className="flex-1 flex items-center justify-center px-6 py-16">
        <Card className="max-w-2xl w-full">
          <h1 className="text-3xl sm:text-4xl font-bold text-[#2f3b2f] mb-4 tracking-tight leading-tight">
            {landing.heading}
          </h1>
          <p className="text-[#5c6b52] leading-relaxed italic mb-8">{landing.intro}</p>

          <div className="space-y-4 mb-8">
            {landing.items.map((item) => (
              <div
                key={item.label}
                className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4 border-b border-[#e7e2d3] pb-4 last:border-0 last:pb-0"
              >
                <span className="font-semibold text-[#2f3b2f] sm:w-48 shrink-0">{item.label}</span>
                <span className="text-[#5c6b52]">{item.description}</span>
              </div>
            ))}
          </div>

          <p className="text-[#8a8a76] italic text-sm mb-8">{landing.footer}</p>

          <button
            onClick={onContinue}
            className="w-full py-4 rounded-xl font-semibold text-white bg-gradient-to-r from-[#6f9c63] to-[#5e8a52] hover:brightness-105 shadow-lg shadow-[#6f9c63]/25 transition"
          >
            Continue
          </button>
        </Card>
      </div>
    </Shell>
  );
}
