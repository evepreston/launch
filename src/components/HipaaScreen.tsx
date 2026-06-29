import Shell from './Shell';
import Card from './Card';
import OnboardingProgress from './OnboardingProgress';

const EXAMPLES: [string, string][] = [
  ['Regular Gmail', 'not HIPAA compliant'],
  ['Google Workspace', 'compliant, because you can sign a BAA'],
  ['Your personal cell phone', 'not compliant'],
  ['RingRx', 'compliant, built specifically for healthcare providers'],
  ['Regular Zoom', 'not compliant'],
  ["Zoom's paid healthcare version", 'compliant'],
  ['SimplePractice', 'fully compliant, built specifically for therapists'],
];

export default function HipaaScreen({ onContinue }: { onContinue: () => void }) {
  return (
    <Shell>
      <div className="flex-1 flex items-center justify-center px-6 py-16">
        <Card className="max-w-2xl w-full">
          <OnboardingProgress step={3} total={4} />
          <h1 className="text-3xl sm:text-4xl font-bold text-[#2f3b2f] mb-4 tracking-tight leading-tight">
            A quick word on "HIPAA compliant"
          </h1>
          <div className="space-y-4 text-[#4a5743] leading-relaxed">
            <p>
              Throughout this guide you'll see us mention "HIPAA compliant" tools. Here's what
              that means in plain English.
            </p>
            <p>
              HIPAA is the federal law that protects your clients' private health information —
              their names, diagnoses, session notes, anything that identifies them as a patient.
              Any tool you use to communicate with clients, store notes, or handle billing needs
              to meet HIPAA's security standards.
            </p>
            <p>
              <strong className="text-[#2f3b2f]">The practical test:</strong> a HIPAA compliant
              tool will offer to sign what's called a Business Associate Agreement (BAA) —
              essentially a legal promise that they'll handle your clients' information securely.
              If a tool doesn't offer a BAA, assume it isn't HIPAA compliant.
            </p>
            <div className="bg-[#f3f7ee] rounded-2xl p-5">
              <p className="font-medium text-[#2f3b2f] mb-3">Some common examples:</p>
              <ul className="space-y-2">
                {EXAMPLES.map(([tool, status]) => (
                  <li key={tool} className="flex items-start gap-2 text-sm">
                    <span
                      className={
                        status.startsWith('not')
                          ? 'text-[#b5654a] font-semibold'
                          : 'text-[#6f9c63] font-semibold'
                      }
                    >
                      {status.startsWith('not') ? '✕' : '✓'}
                    </span>
                    <span>
                      <strong className="text-[#2f3b2f]">{tool}</strong> — {status}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <p>
              We'll flag HIPAA compliance at every relevant step. We'll never recommend a tool
              that isn't compliant for tasks that require it.
            </p>
          </div>
          <button
            onClick={onContinue}
            className="mt-8 w-full py-4 rounded-xl font-semibold text-white bg-gradient-to-r from-[#6f9c63] to-[#5e8a52] hover:brightness-105 shadow-lg shadow-[#6f9c63]/25 transition"
          >
            Got it, continue
          </button>
        </Card>
      </div>
    </Shell>
  );
}
