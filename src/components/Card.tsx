import type { ReactNode } from 'react';

export default function Card({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={`bg-white rounded-[28px] border border-[#e7e2d3] shadow-[0_12px_40px_-12px_rgba(63,82,53,0.16)] p-8 sm:p-10 ${className}`}
    >
      {children}
    </div>
  );
}
