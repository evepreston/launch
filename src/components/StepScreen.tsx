import Shell from './Shell';
import Card from './Card';
import ProgressBar from './ProgressBar';
import RevenuePlanner from './RevenuePlanner';
import BreakEvenCalculator from './BreakEvenCalculator';
import PromoCodeBadge from './PromoCodeBadge';
import { SECTIONS } from '../data/sections';
import { withGlossary } from '../utils/withGlossary';
import type { WizardStep } from '../types';

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
  const sectionIndex = SECTIONS.findIndex((s) => s.stepIds.includes(step.id));
  const section = SECTIONS[sectionIndex];
  const sectionStepIds = new Set(section.stepIds);
  const sectionStepsDone = steps.filter((s) => sectionStepIds.has(s.id) && completedIds.has(s.id)).length;

  return (
    <Shell>
      <ProgressBar
        sectionIndex={sectionIndex}
        totalSections={SECTIONS.length}
        sectionTitle={section.title}
        sectionStepsDone={sectionStepsDone}
        sectionStepsTotal={section.stepIds.length}
        overallCurrent={completedIds.size}
        overallTotal={total}
      />
      <div className="flex-1 flex flex-col lg:flex-row gap-6 max-w-5xl mx-auto w-full px-6 py-8">
        <aside className="hidden lg:block w-56 shrink-0">
          {SECTIONS.map((sec) => (
            <div key={sec.id} className="mb-5">
              <p className="text-xs font-semibold text-[#8a8a76] uppercase tracking-wide mb-2">
                {sec.title}
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
                        className={`w-full text-left text-sm px-3 py-2 rounded-lg flex items-center gap-2 transition ${
                          active
                            ? 'bg-[#e6efe0] text-[#2f3b2f] font-medium'
                            : 'text-[#5c6b52] hover:bg-[#f3f7ee]'
                        }`}
                      >
                        <span
                          className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] shrink-0 ${
                            done ? 'bg-[#6f9c63] text-white' : 'bg-[#e7e2d3] text-[#8a8a76]'
                          }`}
                        >
                          {done ? '✓' : i + 1}
                        </span>
                        <span className="truncate">{s.title}</span>
                      </button>
                    </li>
                  );
                })}
              </ol>
            </div>
          ))}
        </aside>

        <div className="flex-1">
          <Card>
            <span className="inline-block text-xs font-semibold text-[#6f9c63] bg-[#e6efe0] px-3 py-1 rounded-full mb-4">
              Step {index + 1} of {total}
            </span>
            <h1 className="text-2xl sm:text-3xl font-bold text-[#2f3b2f] mb-2 tracking-tight">
              {step.title}
            </h1>
            <p className="text-[#6f9c63] font-medium mb-6">{withGlossary(step.summary)}</p>

            <div className="space-y-4 text-[#4a5743] leading-relaxed">
              {step.body.map((p, i) => (
                <p key={i}>{withGlossary(p)}</p>
              ))}
            </div>

            {step.links.length > 0 && (
              <div className="mt-6 flex flex-wrap gap-3">
                {step.links.map((link) => (
                  <a
                    key={link.url}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#fdf6e7] border border-[#e7d8ab] text-[#8a6a1f] font-medium hover:bg-[#fbeecb] transition"
                  >
                    {link.label}
                    <span aria-hidden>↗</span>
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
                className="px-5 py-3 rounded-xl font-medium text-[#5c6b52] disabled:opacity-0 hover:bg-[#f3f7ee] transition"
              >
                ← Back
              </button>

              {isComplete ? (
                <button
                  onClick={onNext}
                  className="px-6 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-[#6f9c63] to-[#5e8a52] hover:brightness-105 shadow-lg shadow-[#6f9c63]/25 transition"
                >
                  {index === total - 1 ? 'Finish' : 'Next step →'}
                </button>
              ) : (
                <button
                  onClick={onComplete}
                  className="px-6 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-[#6f9c63] to-[#5e8a52] hover:brightness-105 shadow-lg shadow-[#6f9c63]/25 transition"
                >
                  Mark step complete
                </button>
              )}
            </div>
          </Card>
        </div>
      </div>
    </Shell>
  );
}
