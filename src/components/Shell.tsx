import type { ReactNode } from 'react';

export default function Shell({
  children,
  showHeader = true,
}: {
  children: ReactNode;
  showHeader?: boolean;
}) {
  return (
    <div className="min-h-screen flex flex-col relative bg-[#f5f2ea]">
      {showHeader && (
        <header className="w-full py-4 px-6 bg-[#f5f2ea]/70 backdrop-blur-md sticky top-0 z-10">
          <div className="max-w-3xl mx-auto flex items-center justify-between gap-2.5">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-[#7d9b76] to-[#6b8a64] flex items-center justify-center text-white text-sm font-bold shadow-sm shadow-[#7d9b76]/30">
                P
              </div>
              <span className="font-label font-normal text-[#2c2c2a] text-lg lowercase">
                private practice launch kit
              </span>
            </div>
            <nav>
              <a
                href="#about"
                className="text-sm font-normal lowercase text-[#5a5a52] hover:text-[#c4714f] transition"
              >
                about
              </a>
            </nav>
          </div>
        </header>
      )}
      <main className="flex-1 flex flex-col">{children}</main>
    </div>
  );
}
