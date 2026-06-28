import type { ReactNode } from 'react';

export default function Card({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={`bg-white rounded-3xl border border-[#e7e2d3] shadow-[0_4px_24px_-4px_rgba(63,82,53,0.08)] p-8 sm:p-10 ${className}`}
    >
      {children}
    </div>
  );
}
