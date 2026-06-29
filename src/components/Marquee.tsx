const MARQUEE_TEXT =
  "let's get you set up 〰️ you've got this 〰️ make it official 〰️ sort out the money 〰️ define your practice 〰️ get out there 〰️ ";

export default function Marquee() {
  return (
    <div className="relative z-10 w-full overflow-hidden border-y border-[#e6ddc9] bg-white/60 py-3">
      <div className="flex whitespace-nowrap marquee-track">
        <span className="px-4 text-sm font-medium text-[#6b8a64] lowercase">
          {MARQUEE_TEXT.repeat(4)}
        </span>
        <span className="px-4 text-sm font-medium text-[#6b8a64] lowercase" aria-hidden>
          {MARQUEE_TEXT.repeat(4)}
        </span>
      </div>
    </div>
  );
}
