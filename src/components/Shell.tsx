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
        <header className="w-full px-6 sm:px-12 py-5 border-b border-[#e6ddc9]">
          <div className="flex items-center justify-between">
            <button
              onClick={() => window.dispatchEvent(new CustomEvent('go-home'))}
              className="font-display font-bold text-[18px] lowercase whitespace-nowrap text-left"
            >
              <span className="text-[#7d9b76]">private practice</span>
              <span className="text-[#2c2c2a]"> launch kit</span>
              <span className="text-[#c4714f]">.</span>
            </button>
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
