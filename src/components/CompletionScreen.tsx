import Shell from './Shell';
import type { WizardStep } from '../types';

export default function CompletionScreen({ steps }: { steps: WizardStep[] }) {
  return (
    <Shell>
      <div className="flex-1 flex flex-col px-6 sm:px-12 py-20 sm:py-28">
        <div className="max-w-2xl">
          <h1 className="font-display font-bold lowercase text-[#2c2c2a] text-[38px] sm:text-[54px] leading-[1.05] mb-6">
            you've built the foundation of your practice.
          </h1>
          <p className="text-[18px] text-[#5a5a52] leading-relaxed mb-12">
            that's no small thing. you now have the legal, financial, and operational pieces in
            place that most therapists spend months piecing together on their own.
          </p>

          <div className="mb-10">
            <p className="text-sm lowercase text-[#8a8a80] mb-4">what you completed:</p>
            <ul className="grid sm:grid-cols-2 gap-2">
              {steps.map((s) => (
                <li key={s.id + s.number} className="flex items-start gap-2 text-[#3a3a36]">
                  <span className="text-[#7d9b76] font-medium shrink-0">✓</span>
                  <span className="lowercase">{s.title.toLowerCase()}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="border-l-2 border-[#e6ddc9] pl-6">
            <p className="text-sm lowercase text-[#8a8a80] mb-2">coming up next</p>
            <p className="text-[#5a5a52] leading-relaxed">
              we're building additional modules to go deeper on personal finance, business
              finance, supervision, and insurance — so you're not just open for business, but
              set up to thrive in it.
            </p>
          </div>
        </div>
      </div>
    </Shell>
  );
}
