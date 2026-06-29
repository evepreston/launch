import type { ReactNode } from 'react';

export default function Shell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col relative bg-[#faf7f0]">
      <div
        className="pointer-events-none fixed inset-0 -z-10"
        style={{
          background:
            'radial-gradient(60% 50% at 15% 0%, rgba(111,156,99,0.14), transparent 60%), radial-gradient(50% 45% at 100% 10%, rgba(189,168,99,0.12), transparent 60%), #faf7f0',
        }}
      />
      <header className="w-full py-4 px-6 border-b border-[#e7e2d3] bg-[#faf7f0]/70 backdrop-blur-md sticky top-0 z-10">
        <div className="max-w-3xl mx-auto flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-[#6f9c63] to-[#5e8a52] flex items-center justify-center text-white text-sm font-bold shadow-sm shadow-[#6f9c63]/30">
            P
          </div>
          <span className="font-semibold text-[#2f3b2f] text-lg tracking-tight">
            private practice launch kit
          </span>
        </div>
      </header>
      <main className="flex-1 flex flex-col">{children}</main>
    </div>
  );
}
