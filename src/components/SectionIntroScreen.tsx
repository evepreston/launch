import Shell from './Shell';
import Card from './Card';
import type { SectionMeta } from '../data/sections';

interface Props {
  section: SectionMeta;
  sectionIndex: number;
  totalSections: number;
  onContinue: () => void;
}

export default function SectionIntroScreen({ section, sectionIndex, totalSections, onContinue }: Props) {
  return (
    <Shell>
      <div className="flex-1 flex items-center justify-center px-6 py-16">
        <Card className="max-w-xl w-full text-center">
          <span className="inline-block text-xs font-semibold text-[#6f9c63] bg-[#e6efe0] px-3 py-1 rounded-full mb-4">
            Section {sectionIndex + 1} of {totalSections}
          </span>
          <h1 className="text-2xl sm:text-3xl font-semibold text-[#2f3b2f] mb-3">{section.title}</h1>
          <p className="text-[#5c6b52] leading-relaxed mb-2">{section.description}</p>
          <p className="text-sm text-[#8a8a76] mb-8">Takes about {section.estimatedMinutes} minutes.</p>
          <button
            onClick={onContinue}
            className="w-full py-4 rounded-xl font-semibold text-white bg-[#6f9c63] hover:bg-[#5e8a52] transition"
          >
            Start this section
          </button>
        </Card>
      </div>
    </Shell>
  );
}
