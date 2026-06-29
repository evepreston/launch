import { useState } from 'react';
import type { PromoCode } from '../types';

export default function PromoCodeBadge({ promo }: { promo: PromoCode }) {
  const [copied, setCopied] = useState(false);

  return (
    <div className="mt-6 flex items-center gap-3 rounded-xl border border-[#e0c4ab] bg-[#f7ebe3] px-4 py-3 flex-wrap">
      <span className="text-sm text-[#9c5234] font-medium">{promo.discount}:</span>
      <button
        onClick={() => {
          navigator.clipboard?.writeText(promo.code);
          setCopied(true);
          setTimeout(() => setCopied(false), 1500);
        }}
        className="font-mono text-sm font-semibold text-[#9c5234] bg-white border border-[#e0c4ab] rounded-lg px-3 py-1 hover:bg-[#f0dccb] transition"
      >
        {copied ? 'Copied!' : promo.code}
      </button>
      {promo.note && <span className="text-sm text-[#9c5234]">{promo.note}</span>}
    </div>
  );
}
