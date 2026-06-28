import Shell from './Shell';
import Card from './Card';
import type { WizardStep } from '../types';

export default function CompletionScreen({ steps }: { steps: WizardStep[] }) {
  return (
    <Shell>
      <div className="flex-1 flex items-center justify-center px-6 py-16">
        <Card className="max-w-2xl w-full text-center">
          <div className="text-5xl mb-4">🎉</div>
          <h1 className="text-3xl font-semibold text-[#2f3b2f] mb-3">
            You've built the foundation of your practice
          </h1>
          <p className="text-[#5c6b52] leading-relaxed mb-8">
            That's no small thing. You now have the legal, financial, and operational pieces in
            place that most therapists spend months piecing together on their own.
          </p>

          <div className="bg-[#f3f7ee] rounded-2xl p-6 text-left mb-8">
            <p className="font-medium text-[#2f3b2f] mb-3">What you completed:</p>
            <ul className="grid sm:grid-cols-2 gap-2">
              {steps.map((s) => (
                <li key={s.id + s.number} className="flex items-start gap-2 text-sm text-[#4a5743]">
                  <span className="text-[#6f9c63] font-semibold">✓</span>
                  {s.title}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-[#fdf6e7] border border-[#e7d8ab] rounded-2xl p-6 text-left">
            <p className="font-medium text-[#8a6a1f] mb-2">Coming up next</p>
            <p className="text-sm text-[#6b5523] leading-relaxed">
              We're building additional modules to go deeper on personal finance, business
              finance, supervision, and insurance — so you're not just open for business, but set
              up to thrive in it.
            </p>
          </div>
        </Card>
      </div>
    </Shell>
  );
}
