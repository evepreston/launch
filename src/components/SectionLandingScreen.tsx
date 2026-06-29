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
          <h1 className="font-serif-display lowercase text-4xl sm:text-5xl font-normal text-[#2c2c2a] mb-4 tracking-tight leading-tight">
            {landing.heading}
          </h1>
          <p className="text-[#5a5a52] leading-relaxed italic mb-8">{landing.intro}</p>

          <div className="space-y-4 mb-8">
            {landing.items.map((item) => (
              <div
                key={item.label}
                className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4 border-b border-[#e6ddc9] pb-4 last:border-0 last:pb-0"
              >
                <span className="font-semibold text-[#2c2c2a] sm:w-48 shrink-0">{item.label}</span>
                <span className="text-[#5a5a52]">{item.description}</span>
              </div>
            ))}
          </div>

          <p className="text-[#6b6b62] italic text-sm mb-8">{landing.footer}</p>

          <button
            onClick={onContinue}
            className="w-full py-4 rounded-2xl font-semibold text-white bg-gradient-to-r from-[#7d9b76] to-[#6b8a64] hover:brightness-105 shadow-lg shadow-[#7d9b76]/25 transition"
          >
            Continue
          </button>
        </Card>
      </div>
    </Shell>
  );
}
