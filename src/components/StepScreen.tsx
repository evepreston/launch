import { useState } from 'react';
import Shell from './Shell';
import ProgressBar from './ProgressBar';
import RevenuePlanner from './RevenuePlanner';
import BreakEvenCalculator from './BreakEvenCalculator';
import PromoCodeBadge from './PromoCodeBadge';
import { SECTIONS } from '../data/sections';
import { withGlossary } from '../utils/withGlossary';
import type { WizardStep } from '../types';

const SECTION_CELEBRATIONS = [
  "you're set up. ✓",
  "you're official. ✓",
  'money sorted. ✓',
  'practice defined. ✓',
  "you're out there. ✓",
];

const SECTION_LABELS = [
  "let's get started",
  "let's make it official",
  "let's sort out the money",
  "let's define your practice",
  "let's get you out there",
];

interface Props {
  step: WizardStep;
  index: number;
  total: number;
  isComplete: boolean;
  onComplete: () => void;
  onBack: () => void;
  onNext: () => void;
  canGoBack: boolean;
  steps: WizardStep[];
  completedIds: Set<string>;
  onJump: (index: number) => void;
}

export default function StepScreen({
  step,
  index,
  total,
  isComplete,
  onComplete,
  onBack,
  onNext,
  canGoBack,
  steps,
  completedIds,
  onJump,
}: Props) {
  const [celebrationPhase, setCelebrationPhase] = useState<'in' | 'out' | null>(null);

  const sectionIndex = SECTIONS.findIndex((s) => s.stepIds.includes(step.id));
  const section = SECTIONS[sectionIndex];
  const isLastInSection = section.stepIds[section.stepIds.length - 1] === step.id;

  const sectionStatuses = SECTIONS.map((sec, i) => {
    const allDone = sec.stepIds.every((id) => completedIds.has(id));
    if (allDone) return 'complete' as const;
    if (i === sectionIndex) return 'current' as const;
    return 'upcoming' as const;
  });

  const handleMarkComplete = () => {
    if (isLastInSection && !isComplete) {
      setCelebrationPhase('in');
      setTimeout(() => setCelebrationPhase('out'), 1800);
      setTimeout(() => {
        setCelebrationPhase(null);
        onComplete();
        onNext();
      }, 2300);
    } else {
      onComplete();
    }
  };

  return (
    <Shell>
      {celebrationPhase && (
        <div
          className={`fixed inset-0 z-50 bg-[#f5f2ea] flex items-center justify-center ${
            celebrationPhase === 'in' ? 'celebrate-in' : 'celebrate-out'
          }`}
        >
          <span className="font-display font-bold text-[#7d9b76] text-[48px] sm:text-[64px] lowercase text-center px-6">
            {SECTION_CELEBRATIONS[sectionIndex]}
          </span>
        </div>
      )}

      <ProgressBar sectionStatuses={sectionStatuses} sectionLabels={SECTION_LABELS} />

      <div className="flex-1 flex flex-col lg:flex-row gap-8 max-w-5xl mx-auto w-full px-6 py-10">
        {/* Sidebar */}
        <aside className="hidden lg:block w-52 shrink-0">
          {SECTIONS.map((sec) => (
            <div key={sec.id} className="mb-6">
              <p className="text-[11px] font-normal text-[#8a8a80] lowercase mb-2 tracking-wide">
                {sec.title.toLowerCase()}
              </p>
              <ol className="space-y-1">
                {sec.stepIds.map((id) => {
                  const i = steps.findIndex((s) => s.id === id);
                  const s = steps[i];
                  if (!s) return null;
                  const done = completedIds.has(s.id);
                  const active = i === index;
                  return (
                    <li key={s.id}>
                      <button
                        onClick={() => onJump(i)}
                        className={`w-full text-left text-sm py-1.5 flex items-start gap-2 transition lowercase ${
                          active
                            ? 'text-[#7d9b76] font-medium'
                            : done
                            ? 'text-[#8a8a80]'
                            : 'text-[#5a5a52] hover:text-[#2c2c2a]'
                        }`}
                      >
                        <span className="text-[#8a8a80] shrink-0 text-[11px] mt-0.5 w-4 text-right">
                          {i + 1}.
                        </span>
                        <span className="leading-snug">{s.title.toLowerCase()}</span>
                      </button>
                    </li>
                  );
                })}
              </ol>
            </div>
          ))}
        </aside>

        {/* Main content */}
        <div className="flex-1 min-w-0">
          <p className="text-sm text-[#8a8a80] lowercase mb-4">
            step {index + 1} of {total}
          </p>

          <h1 className="font-display font-bold lowercase text-[#2c2c2a] text-[28px] sm:text-[36px] leading-[1.1] mb-3">
            {step.title.toLowerCase()}
          </h1>

          <p className="text-[#7d9b76] text-[17px] leading-relaxed mb-6">
            {withGlossary(step.summary)}
          </p>

          <div className="space-y-4 text-[#3a3a36] leading-relaxed">
            {step.body.map((p, i) => (
              <p key={i}>{withGlossary(p)}</p>
            ))}
          </div>

          {step.links.length > 0 && (
            <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2">
              {step.links.map((link) => (
                <a
                  key={link.url}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#7d9b76] hover:text-[#6b8a64] transition lowercase"
                >
                  {link.label} ↗
                </a>
              ))}
            </div>
          )}

          {step.promo && <PromoCodeBadge promo={step.promo} />}
          {step.tool === 'revenuePlanner' && <RevenuePlanner />}
          {step.tool === 'breakEvenCalculator' && <BreakEvenCalculator />}

          <div className="mt-10 flex items-center justify-between gap-4">
            <button
              onClick={onBack}
              disabled={!canGoBack}
              className="text-[#8a8a80] lowercase disabled:opacity-0 hover:text-[#5a5a52] transition text-sm"
            >
              ← back
            </button>

            {isComplete ? (
              <button
                onClick={onNext}
                className="font-medium lowercase text-[#7d9b76] hover:text-[#6b8a64] transition"
              >
                {index === total - 1 ? 'finish →' : 'next step →'}
              </button>
            ) : (
              <button
                onClick={handleMarkComplete}
                className="font-medium lowercase text-[#7d9b76] hover:text-[#6b8a64] transition"
              >
                mark step complete →
              </button>
            )}
          </div>
        </div>
      </div>
    </Shell>
  );
}
