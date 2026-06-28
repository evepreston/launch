import Shell from './Shell';
import Card from './Card';

export default function DisclaimerScreen({ onContinue }: { onContinue: () => void }) {
  return (
    <Shell>
      <div className="flex-1 flex items-center justify-center px-6 py-16">
        <Card className="max-w-xl w-full text-center">
          <div className="text-3xl mb-3">🤝</div>
          <h1 className="text-2xl font-semibold text-[#2f3b2f] mb-4">
            A note on our recommendations
          </h1>
          <p className="text-[#4a5743] leading-relaxed">
            We have no affiliation with any of the tools or services we recommend throughout this
            platform. We suggest them because they're genuinely useful for therapists starting a
            practice — nothing more. You're always free to use alternatives.
          </p>
          <button
            onClick={onContinue}
            className="mt-8 w-full py-4 rounded-xl font-semibold text-white bg-[#6f9c63] hover:bg-[#5e8a52] transition"
          >
            Let's get started
          </button>
        </Card>
      </div>
    </Shell>
  );
}
