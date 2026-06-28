import type { ReactNode } from 'react';

export default function Shell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-[#faf7f0] flex flex-col">
      <header className="w-full py-5 px-6 border-b border-[#e7e2d3] bg-[#faf7f0]/80 backdrop-blur sticky top-0 z-10">
        <div className="max-w-3xl mx-auto flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-[#6f9c63] flex items-center justify-center text-white text-sm font-bold">
            P
          </div>
          <span className="font-semibold text-[#2f3b2f] text-lg tracking-tight">
            Private Practice Launchkit
          </span>
        </div>
      </header>
      <main className="flex-1 flex flex-col">{children}</main>
    </div>
  );
}
