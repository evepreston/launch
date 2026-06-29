import { useState } from 'react';
import type { PromoCode } from '../types';

export default function PromoCodeBadge({ promo }: { promo: PromoCode }) {
  const [copied, setCopied] = useState(false);

  return (
    <div className="mt-6 flex items-center gap-3 rounded-xl border border-[#e7d8ab] bg-[#fdf6e7] px-4 py-3 flex-wrap">
      <span className="text-sm text-[#8a6a1f] font-medium">{promo.discount}:</span>
      <button
        onClick={() => {
          navigator.clipboard?.writeText(promo.code);
          setCopied(true);
          setTimeout(() => setCopied(false), 1500);
        }}
        className="font-mono text-sm font-semibold text-[#8a6a1f] bg-white border border-[#e7d8ab] rounded-lg px-3 py-1 hover:bg-[#fbeecb] transition"
      >
        {copied ? 'Copied!' : promo.code}
      </button>
      {promo.note && <span className="text-sm text-[#8a6a1f]">{promo.note}</span>}
    </div>
  );
}
