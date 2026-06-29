import Shell from './Shell';

export default function AboutScreen({
  onBackToWizard,
}: {
  onBackToWizard: () => void;
}) {
  return (
    <Shell>
      <div className="bg-[#f0ead8] px-6 py-20">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="font-serif-display text-3xl sm:text-4xl text-[#2c2c2a] mb-6">
            why this exists
          </h1>

          <div className="w-full aspect-[4/3] max-w-sm mx-auto rounded-2xl bg-[#e6ddc9] flex items-center justify-center mb-10">
            <span className="text-sm lowercase text-[#6b6b62]">founder photo</span>
          </div>

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

          <button
            onClick={onBackToWizard}
            className="group mt-10 inline-flex items-center gap-2 font-medium lowercase text-lg text-[#7d9b76] hover:text-[#c4714f] transition"
          >
            <span className="border-b border-transparent group-hover:border-[#c4714f] transition">
              ready to get started?
            </span>
            <span className="transition group-hover:translate-x-1">→</span>
          </button>
        </div>
      </div>
    </Shell>
  );
}
