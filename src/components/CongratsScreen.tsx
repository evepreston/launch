import Shell from './Shell';

export default function CongratsScreen({ onContinue }: { onContinue: () => void }) {
  return (
    <Shell>
      <div className="flex-1 flex flex-col items-center justify-center text-center px-6 py-24">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#6f9c63] mb-6">
          Private practice launch kit
        </p>
        <h1 className="text-4xl sm:text-6xl font-bold text-[#2f3b2f] tracking-tight leading-[1.05] max-w-3xl mb-6">
          Getting licensed was the hard part.
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
    </Shell>
  );
}
