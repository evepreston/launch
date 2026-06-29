import Shell from './Shell';
import Marquee from './Marquee';

export default function CongratsScreen({ onContinue }: { onContinue: () => void }) {
  return (
    <Shell showHeader={false}>
      <Marquee />
      <div className="flex-1 relative overflow-hidden flex flex-col items-center justify-center text-center px-6 py-24">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-gradient-to-br from-[#a8c2a1] to-[#7d9b76] opacity-30 blur-3xl" />
          <div className="absolute top-1/4 -right-40 w-[28rem] h-[28rem] rounded-full bg-gradient-to-br from-[#dba98a] to-[#c4714f] opacity-30 blur-3xl" />
          <div className="absolute -bottom-40 left-1/4 w-96 h-96 rounded-full bg-gradient-to-br from-[#7d9b76] to-[#4f6b49] opacity-15 blur-3xl" />
          <div className="absolute top-10 right-1/4 w-24 h-24 rounded-3xl border-2 border-[#a8c2a1]/40 rotate-12" />
          <div className="absolute bottom-24 left-1/5 w-16 h-16 rounded-full border-2 border-[#c4714f]/50" />
        </div>

        <div className="relative z-10 flex flex-col items-center">
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
            built by a therapist who's been through it — so you don't have to figure it out alone.
          </p>
          <button
            onClick={onContinue}
            className="group bg-white rounded-3xl shadow-[0_20px_50px_-15px_rgba(90,70,50,0.25)] border border-[#e6ddc9] px-10 py-5 flex items-center gap-3 font-medium lowercase text-lg text-[#2c2c2a] hover:shadow-[0_24px_60px_-15px_rgba(90,70,50,0.32)] hover:-translate-y-0.5 transition"
          >
            let's get you set up
            <span className="text-[#7d9b76] transition group-hover:translate-x-1">→</span>
          </button>
        </div>
      </div>

      <div className="relative z-10 bg-[#f0ead8] px-6 py-20">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-serif-display text-3xl sm:text-4xl text-[#2c2c2a] mb-6">
            why this exists
          </h2>
          <div className="space-y-5 text-[#3a3a36] leading-relaxed text-left">
            <p>
              When I finished my licensure, I was proud — and completely overwhelmed. Nobody
              hands you a roadmap for the business side of private practice. I spent weeks
              Googling things that should have taken an afternoon, making decisions that
              stressed me out when they didn't need to, and wishing someone who had been
              through it would just tell me what to do.
            </p>
            <p>
              This is that thing. Everything I wish I'd had — the right steps, in the right
              order, with the confusing parts explained in plain English. Built for therapists
              by a therapist, because you've already done the hard part.
            </p>
            <p>Now let's get your practice open.</p>
          </div>
        </div>
      </div>
    </Shell>
  );
}
