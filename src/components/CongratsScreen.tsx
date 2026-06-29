export default function CongratsScreen({ onContinue }: { onContinue: () => void }) {
  return (
    <div className="min-h-screen flex flex-col bg-[#f5f2ea]">
      <header className="w-full px-6 sm:px-12 py-5 border-b border-[#e6ddc9]">
        <div className="flex items-center justify-between">
          <span className="text-sm font-normal lowercase text-[#7d9b76]">
            private practice launch kit
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
        <div className="max-w-3xl">
          <h1 className="font-display font-bold lowercase text-[#2c2c2a] leading-[1.05] text-[44px] sm:text-[64px] lg:text-[76px] mb-8">
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

          <p className="text-lg text-[#5a5a52] leading-relaxed max-w-xl mb-10">
            the next part is simple with a little guidance. everything you need to open your
            private practice — in as little as a week.
          </p>

          <button
            onClick={onContinue}
            className="group inline-flex items-center gap-2 font-medium lowercase text-lg text-[#7d9b76] hover:text-[#c4714f] transition mb-24"
          >
            <span className="border-b border-transparent group-hover:border-[#c4714f] transition">
              let's get you set up
            </span>
            <span className="transition group-hover:translate-x-1">→</span>
          </button>

          <p className="text-[13px] lowercase text-[#8a8a80]">built by therapists.</p>
        </div>
      </main>
    </div>
  );
}
