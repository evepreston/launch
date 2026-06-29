import Shell from './Shell';
import Card from './Card';
import type { WizardStep } from '../types';

export default function CompletionScreen({ steps }: { steps: WizardStep[] }) {
  return (
    <Shell>
      <div className="flex-1 flex items-center justify-center px-6 py-16">
        <Card className="max-w-2xl w-full text-center">
          <h1 className="text-3xl font-semibold text-[#2c2c2a] mb-3">
            You've built the foundation of your practice
          </h1>
          <p className="text-[#5a5a52] leading-relaxed mb-8">
            That's no small thing. You now have the legal, financial, and operational pieces in
            place that most therapists spend months piecing together on their own.
          </p>

          <div className="bg-[#f0f2e9] rounded-2xl p-6 text-left mb-8">
            <p className="font-medium text-[#2c2c2a] mb-3">What you completed:</p>
            <ul className="grid sm:grid-cols-2 gap-2">
              {steps.map((s) => (
                <li key={s.id + s.number} className="flex items-start gap-2 text-sm text-[#3a3a36]">
                  <span className="text-[#7d9b76] font-semibold">✓</span>
                  {s.title}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-[#f7ebe3] border border-[#e0c4ab] rounded-2xl p-6 text-left">
            <p className="font-medium text-[#9c5234] mb-2">Coming up next</p>
            <p className="text-sm text-[#8a5235] leading-relaxed">
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
