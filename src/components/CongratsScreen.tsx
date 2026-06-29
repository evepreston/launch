import Shell from './Shell';
import Marquee from './Marquee';

export default function CongratsScreen({ onContinue }: { onContinue: () => void }) {
  return (
    <Shell showHeader={false}>
      <div className="flex-1 flex flex-col items-center justify-center text-center px-6 py-24">
        <div className="flex flex-col items-center">
          <p className="font-label text-lg sm:text-2xl font-normal lowercase text-[#7d9b76] mb-6">
            private practice launch kit
          </p>
          <span className="inline-block text-sm font-normal lowercase text-[#6b8a64] bg-[#a8c2a1]/20 px-4 py-1.5 rounded-full mb-6">
            open your private practice in 7 days
          </span>
          <h1 className="font-serif-display text-4xl sm:text-5xl text-[#2c2c2a] leading-[1.05] max-w-3xl mb-6">
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
          <p className="text-lg text-[#5a5a52] leading-relaxed max-w-xl mb-12">
            Everything that comes next just looks complicated — it isn't. This is the stuff
            nobody teaches you, laid out in the right order, with the confusing parts explained.
            You've got this.
          </p>
          <p className="text-sm lowercase text-[#6b6b62] mb-10 max-w-md">
            built by therapists.
          </p>
          <button
            onClick={onContinue}
            className="group inline-flex items-center gap-2 font-medium lowercase text-lg text-[#7d9b76] hover:text-[#c4714f] transition"
          >
            <span className="border-b border-transparent group-hover:border-[#c4714f] transition">
              let's get you set up
            </span>
            <span className="transition group-hover:translate-x-1">→</span>
          </button>
        </div>
      </div>

      <Marquee />

      <div className="bg-[#f0ead8] px-6 py-20">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-[#3a3a36] leading-relaxed mb-4">
            built by therapists.
          </p>
          <a
            href="#about"
            className="group inline-flex items-center gap-2 font-medium lowercase text-[#7d9b76] hover:text-[#c4714f] transition"
          >
            <span className="border-b border-transparent group-hover:border-[#c4714f] transition">
              learn more
            </span>
            <span className="transition group-hover:translate-x-1">→</span>
          </a>
        </div>
      </div>
    </Shell>
  );
}
