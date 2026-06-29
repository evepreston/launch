import Shell from './Shell';

export default function DisclaimerScreen({ onContinue }: { onContinue: () => void }) {
  return (
    <Shell>
      <div className="flex-1 flex flex-col px-6 sm:px-12 py-20 sm:py-28">
        <div className="max-w-xl">
          <h1 className="font-display font-bold lowercase text-[#2c2c2a] text-[38px] sm:text-[48px] leading-[1.05] mb-6">
            a note on our recommendations.
          </h1>
          <p className="text-[18px] text-[#5a5a52] leading-relaxed mb-10">
            we have no affiliation with any of the tools or services we recommend throughout
            this platform. we suggest them because they're genuinely useful for therapists
            starting a practice — nothing more. you're always free to use alternatives.
          </p>
          <button
            onClick={onContinue}
            className="font-medium lowercase text-[22px] text-[#7d9b76] hover:text-[#6b8a64] transition"
          >
            let's get started →
          </button>
        </div>
      </div>
    </Shell>
  );
}
