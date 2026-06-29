const MARQUEE_TEXT =
  "let's get you started 〰️ make it official 〰️ sort out the money 〰️ define your practice 〰️ get out there 〰️ you've got this 〰️ ";

export default function Marquee() {
  return (
    <div className="w-full overflow-hidden bg-[#ece4d2] py-3">
      <div className="flex whitespace-nowrap marquee-track">
        <span className="px-4 text-sm font-normal text-[#6b8a64] lowercase">
          {MARQUEE_TEXT.repeat(4)}
        </span>
        <span className="px-4 text-sm font-normal text-[#6b8a64] lowercase" aria-hidden>
          {MARQUEE_TEXT.repeat(4)}
        </span>
      </div>
    </div>
  );
}
