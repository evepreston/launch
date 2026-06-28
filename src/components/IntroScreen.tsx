import { useState } from 'react';
import Shell from './Shell';
import Card from './Card';
import { US_STATES } from '../data/states';
import type { LicenseType, UserProfile } from '../types';

const LICENSE_TYPES: LicenseType[] = ['LCSW', 'LMFT', 'LPC', 'LPCC', 'Other'];

export default function IntroScreen({ onComplete }: { onComplete: (profile: UserProfile) => void }) {
  const [state, setState] = useState('');
  const [licensed, setLicensed] = useState<boolean | null>(null);
  const [licenseType, setLicenseType] = useState<LicenseType | null>(null);
  const [showNotYet, setShowNotYet] = useState(false);

  const canContinue = state && licensed === true && licenseType;

  if (showNotYet) {
    return (
      <Shell>
        <div className="flex-1 flex items-center justify-center px-6 py-16">
          <Card className="max-w-lg text-center">
            <h1 className="text-2xl font-semibold text-[#2f3b2f] mb-3">
              We'll be here when you're ready
            </h1>
            <p className="text-[#5c6b52] leading-relaxed mb-6">
              This platform is built for fully licensed therapists opening a private practice.
              It sounds like you're not quite there yet — and that's completely okay. Keep going
              with supervision, finish out your hours, and come back the moment your license is
              active. We'll be ready for you.
            </p>
            <button
              onClick={() => {
                setShowNotYet(false);
                setLicensed(null);
              }}
              className="text-[#6f9c63] font-medium hover:underline"
            >
              ← Go back
            </button>
          </Card>
        </div>
      </Shell>
    );
  }

  return (
    <Shell>
      <div className="flex-1 flex items-center justify-center px-6 py-16">
        <Card className="max-w-xl w-full">
          <h1 className="text-2xl sm:text-3xl font-semibold text-[#2f3b2f] mb-2">
            Let's make sure this is the right fit
          </h1>
          <p className="text-[#5c6b52] mb-8">
            Before we get started, let's make sure this is the right fit for where you are in
            your journey. Three quick questions.
          </p>

          <div className="space-y-7">
            <div>
              <label className="block font-medium text-[#2f3b2f] mb-2">
                What state are you licensed to practice in?
              </label>
              <select
                value={state}
                onChange={(e) => setState(e.target.value)}
                className="w-full border border-[#d8d2bd] rounded-xl px-4 py-3 bg-[#fffdf9] text-[#2f3b2f] focus:outline-none focus:ring-2 focus:ring-[#9bc18a]"
              >
                <option value="">Select your state...</option>
                {US_STATES.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
              <p className="text-sm text-[#8a8a76] mt-1">
                This populates state-specific links, fees, and requirements throughout the guide.
              </p>
            </div>

            <div>
              <label className="block font-medium text-[#2f3b2f] mb-2">
                Do you hold a current, active, full license in that state? (Not provisional, not
                supervised.)
              </label>
              <div className="flex gap-3">
                <button
                  onClick={() => setLicensed(true)}
                  className={`flex-1 py-3 rounded-xl border font-medium transition ${
                    licensed === true
                      ? 'bg-[#6f9c63] text-white border-[#6f9c63]'
                      : 'bg-[#fffdf9] text-[#2f3b2f] border-[#d8d2bd] hover:border-[#9bc18a]'
                  }`}
                >
                  Yes, fully licensed
                </button>
                <button
                  onClick={() => {
                    setLicensed(false);
                    setShowNotYet(true);
                  }}
                  className={`flex-1 py-3 rounded-xl border font-medium transition ${
                    licensed === false
                      ? 'bg-[#e7e2d3] text-[#2f3b2f] border-[#d8d2bd]'
                      : 'bg-[#fffdf9] text-[#2f3b2f] border-[#d8d2bd] hover:border-[#cbb27a]'
                  }`}
                >
                  Not yet
                </button>
              </div>
            </div>

            <div>
              <label className="block font-medium text-[#2f3b2f] mb-2">
                What license type do you hold?
              </label>
              <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
                {LICENSE_TYPES.map((lt) => (
                  <button
                    key={lt}
                    onClick={() => setLicenseType(lt)}
                    className={`py-2 rounded-lg border text-sm font-medium transition ${
                      licenseType === lt
                        ? 'bg-[#6f9c63] text-white border-[#6f9c63]'
                        : 'bg-[#fffdf9] text-[#2f3b2f] border-[#d8d2bd] hover:border-[#9bc18a]'
                    }`}
                  >
                    {lt}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <button
            disabled={!canContinue}
            onClick={() =>
              canContinue &&
              onComplete({ state, isFullyLicensed: licensed, licenseType })
            }
            className="mt-10 w-full py-4 rounded-xl font-semibold text-white bg-[#6f9c63] disabled:bg-[#cdd6c5] disabled:cursor-not-allowed hover:bg-[#5e8a52] transition"
          >
            Continue
          </button>
        </Card>
      </div>
    </Shell>
  );
}
