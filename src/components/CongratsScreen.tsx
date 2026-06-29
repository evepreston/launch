import Shell from './Shell';

export default function CongratsScreen({ onContinue }: { onContinue: () => void }) {
  return (
    <Shell>
      <div className="flex-1 relative overflow-hidden flex flex-col items-center justify-center text-center px-6 py-24">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-gradient-to-br from-[#9bc18a] to-[#6f9c63] opacity-30 blur-3xl" />
          <div className="absolute top-1/4 -right-40 w-[28rem] h-[28rem] rounded-full bg-gradient-to-br from-[#e8d8a0] to-[#cbb27a] opacity-30 blur-3xl" />
          <div className="absolute -bottom-40 left-1/4 w-96 h-96 rounded-full bg-gradient-to-br from-[#6f9c63] to-[#3f5235] opacity-15 blur-3xl" />
          <div className="absolute top-10 right-1/4 w-24 h-24 rounded-3xl border-2 border-[#9bc18a]/40 rotate-12" />
          <div className="absolute bottom-24 left-1/5 w-16 h-16 rounded-full border-2 border-[#cbb27a]/50" />
        </div>

        <div className="relative z-10 flex flex-col items-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#6f9c63] mb-6">
            Private practice launch kit
          </p>
          <h1 className="text-4xl sm:text-6xl font-bold text-[#2f3b2f] tracking-tight leading-[1.05] max-w-3xl mb-6">
            Getting licensed was the{' '}
            <span className="relative inline-block">
              hard part.
              <svg
                className="absolute left-0 -bottom-2 w-full"
                height="10"
                viewBox="0 0 200 10"
                preserveAspectRatio="none"
                aria-hidden
              >
                <path
                  d="M0 6 Q 50 -2, 100 6 T 200 6"
                  stroke="#cbb27a"
                  strokeWidth="4"
                  fill="none"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h1>
          <p className="text-lg text-[#5c6b52] leading-relaxed max-w-xl mb-12">
            Everything that comes next just looks complicated — it isn't. This is the stuff
            nobody teaches you, laid out in the right order, with the confusing parts explained.
            You've got this.
          </p>
          <button
            onClick={onContinue}
            className="group bg-white rounded-2xl shadow-[0_20px_50px_-15px_rgba(63,82,53,0.25)] border border-[#e7e2d3] px-10 py-5 flex items-center gap-3 font-semibold text-lg text-[#2f3b2f] hover:shadow-[0_24px_60px_-15px_rgba(63,82,53,0.32)] hover:-translate-y-0.5 transition"
          >
            Let's get you set up
            <span className="text-[#6f9c63] transition group-hover:translate-x-1">→</span>
          </button>
        </div>
      </div>
    </Shell>
  );
}
