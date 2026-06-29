import { useState } from 'react';

export default function GlossaryTerm({
  term,
  definition,
}: {
  term: string;
  definition: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <span
      className="relative inline-block border-b border-dotted border-[#a8c2a1] text-[#5d7d56] cursor-help"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onClick={() => setOpen((o) => !o)}
      tabIndex={0}
      onFocus={() => setOpen(true)}
      onBlur={() => setOpen(false)}
    >
      {term}
      {open && (
        <span className="absolute z-20 left-1/2 -translate-x-1/2 bottom-full mb-2 w-64 rounded-xl bg-[#2c2c2a] text-[#f0f2e9] text-sm leading-snug p-3 shadow-lg pointer-events-none">
          {definition}
          <span className="absolute left-1/2 -translate-x-1/2 top-full w-2 h-2 bg-[#2c2c2a] rotate-45" />
        </span>
      )}
    </span>
  );
}
