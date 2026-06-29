import Shell from './Shell';
import Card from './Card';
import OnboardingProgress from './OnboardingProgress';

export default function DisclaimerScreen({ onContinue }: { onContinue: () => void }) {
  return (
    <Shell>
      <div className="flex-1 flex items-center justify-center px-6 py-16">
        <Card className="max-w-xl w-full text-center">
          <OnboardingProgress step={3} total={3} />
          <h1 className="text-3xl font-bold text-[#2c2c2a] mb-4 leading-tight">
            A note on our recommendations
          </h1>
          <p className="text-[#3a3a36] leading-relaxed">
            We have no affiliation with any of the tools or services we recommend throughout this
            platform. We suggest them because they're genuinely useful for therapists starting a
            practice — nothing more. You're always free to use alternatives.
          </p>
          <button
            onClick={onContinue}
            className="mt-8 w-full py-4 rounded-2xl font-semibold text-white bg-gradient-to-r from-[#7d9b76] to-[#6b8a64] hover:brightness-105 shadow-lg shadow-[#7d9b76]/25 transition"
          >
            Let's get started
          </button>
        </Card>
      </div>
    </Shell>
  );
}
