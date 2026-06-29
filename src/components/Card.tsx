import type { ReactNode } from 'react';

export default function Card({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={`bg-white rounded-[32px] border border-[#e6ddc9] shadow-[0_12px_40px_-12px_rgba(90,70,50,0.16)] p-8 sm:p-10 ${className}`}
    >
      {children}
    </div>
  );
}
