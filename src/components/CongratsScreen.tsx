export default function CongratsScreen({ onContinue }: { onContinue: () => void }) {
  return (
    <div className="min-h-screen flex flex-col bg-[#f5f2ea]">
      <header className="w-full px-6 sm:px-12 py-5 border-b border-[#e6ddc9]">
        <div className="flex items-center justify-between">
          <span className="font-display font-bold text-[18px] lowercase whitespace-nowrap">
            <span className="text-[#7d9b76]">private practice</span>
            <span className="text-[#2c2c2a]"> launch kit</span>
            <span className="text-[#c4714f]">.</span>
          </span>
          <nav className="flex items-center gap-6">
            <a
              href="#about"
              className="text-sm font-normal lowercase text-[#5a5a52] hover:text-[#c4714f] transition"
            >
              about
            </a>
            <button
              onClick={onContinue}
              className="text-sm font-normal lowercase text-[#5a5a52] hover:text-[#c4714f] transition"
            >
              start
            </button>
          </nav>
        </div>
      </header>

      <main className="flex-1 flex flex-col px-6 sm:px-12 py-20 sm:py-28">
        <div className="w-full max-w-[1100px]">
          <h1 className="font-display font-bold lowercase text-[#2c2c2a] leading-[1.05] text-[38px] sm:text-[54px] lg:text-[65px] mb-8 w-full sm:w-[70%]">
            getting licensed was the{' '}
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
                  stroke="#c4714f"
                  strokeWidth="4"
                  fill="none"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h1>

          <p className="text-[22px] text-[#5a5a52] leading-relaxed max-w-2xl mb-12">
            opening your private practice isn't as hard as it looks
            <br />
            <span className="text-[#7d9b76]">
              we're here to guide you through the process, one step at a time*
            </span>
          </p>

          <button
            onClick={onContinue}
            className="inline-flex items-center gap-2 font-medium lowercase text-[26px] text-[#7d9b76] hover:text-[#6b8a64] transition mb-4 ml-1"
          >
            let's get you set up →
          </button>

          <p className="text-[13px] lowercase text-[#8a8a80] ml-1 mt-28">
            *built by a therapist and her business friend.
          </p>
        </div>
      </main>
    </div>
  );
}
