export default function OnboardingProgress({ step, total }: { step: number; total: number }) {
  return (
    <div className="flex items-center justify-center gap-1.5 mb-6">
      {Array.from({ length: total }).map((_, i) => (
        <div
          key={i}
          className={`h-1.5 rounded-full transition-all ${
            i === step - 1 ? 'w-8 bg-[#7d9b76]' : 'w-1.5 bg-[#e6ddc9]'
          }`}
        />
      ))}
    </div>
  );
}
