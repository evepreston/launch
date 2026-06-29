import { useState } from 'react';
import Shell from './Shell';
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
        <div className="flex-1 flex flex-col px-6 sm:px-12 py-20 sm:py-28">
          <div className="max-w-xl">
            <h1 className="font-display font-bold lowercase text-[#2c2c2a] text-[38px] sm:text-[48px] leading-[1.05] mb-6">
              we'll be here when you're ready.
            </h1>
            <p className="text-[18px] text-[#5a5a52] leading-relaxed mb-10">
              this platform is built for fully licensed therapists opening a private practice.
              it sounds like you're not quite there yet — and that's completely okay. keep going
              with supervision, finish out your hours, and come back the moment your license is
              active.
            </p>
            <button
              onClick={() => {
                setShowNotYet(false);
                setLicensed(null);
              }}
              className="text-[#7d9b76] font-medium lowercase hover:text-[#6b8a64] transition"
            >
              ← go back
            </button>
          </div>
        </div>
      </Shell>
    );
  }

  return (
    <Shell>
      <div className="flex-1 flex flex-col px-6 sm:px-12 py-20 sm:py-28">
        <div className="max-w-xl">
          <h1 className="font-display font-bold lowercase text-[#2c2c2a] text-[38px] sm:text-[48px] leading-[1.05] mb-4">
            let's make sure this is the right fit.
          </h1>
          <p className="text-[18px] text-[#5a5a52] leading-relaxed mb-12">
            three quick questions before we get started.
          </p>

          <div className="space-y-10">
            <div>
              <label className="block text-[#2c2c2a] lowercase mb-2">
                what state are you licensed to practice in?
              </label>
              <select
                value={state}
                onChange={(e) => setState(e.target.value)}
                className="w-full border border-[#d9d3c2] rounded-lg px-4 py-2.5 bg-[#f5f2ea] text-[#2c2c2a] text-sm focus:outline-none focus:ring-1 focus:ring-[#a8c2a1]"
              >
                <option value="">select your state...</option>
                {US_STATES.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
              <p className="text-sm text-[#8a8a80] mt-1.5">
                populates state-specific links, fees, and requirements throughout the guide.
              </p>
            </div>

            <div>
              <label className="block text-[#2c2c2a] lowercase mb-3">
                do you hold a current, active, full license in that state?
                <span className="text-[#8a8a80]"> (not provisional, not supervised.)</span>
              </label>
              <div className="flex gap-3">
                <button
                  onClick={() => setLicensed(true)}
                  className={`flex-1 py-2 rounded-lg border text-sm lowercase transition ${
                    licensed === true
                      ? 'border-[#7d9b76] text-[#7d9b76] bg-[#f5f2ea]'
                      : 'border-[#d9d3c2] text-[#5a5a52] bg-[#f5f2ea] hover:border-[#a8c2a1]'
                  }`}
                >
                  yes, fully licensed
                </button>
                <button
                  onClick={() => {
                    setLicensed(false);
                    setShowNotYet(true);
                  }}
                  className={`flex-1 py-2 rounded-lg border text-sm lowercase transition ${
                    licensed === false
                      ? 'border-[#d9d3c2] text-[#5a5a52] bg-[#f5f2ea]'
                      : 'border-[#d9d3c2] text-[#5a5a52] bg-[#f5f2ea] hover:border-[#c4714f]'
                  }`}
                >
                  not yet
                </button>
              </div>
            </div>

            <div>
              <label className="block text-[#2c2c2a] lowercase mb-3">
                what license type do you hold?
              </label>
              <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
                {LICENSE_TYPES.map((lt) => (
                  <button
                    key={lt}
                    onClick={() => setLicenseType(lt)}
                    className={`py-2 rounded-lg border text-sm lowercase transition ${
                      licenseType === lt
                        ? 'border-[#7d9b76] text-[#7d9b76] bg-[#f5f2ea]'
                        : 'border-[#d9d3c2] text-[#5a5a52] bg-[#f5f2ea] hover:border-[#a8c2a1]'
                    }`}
                  >
                    {lt}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-12">
            <button
              disabled={!canContinue}
              onClick={() =>
                canContinue &&
                onComplete({ state, isFullyLicensed: licensed, licenseType })
              }
              className={`inline-flex items-center gap-2 font-medium lowercase text-[22px] transition ${
                canContinue
                  ? 'text-[#7d9b76] hover:text-[#6b8a64]'
                  : 'text-[#c4c4b8] cursor-not-allowed'
              }`}
            >
              continue →
            </button>
          </div>
        </div>
      </div>
    </Shell>
  );
}
