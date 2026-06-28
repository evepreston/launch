import Shell from './Shell';
import Card from './Card';

export default function CongratsScreen({ onContinue }: { onContinue: () => void }) {
  return (
    <Shell>
      <div className="flex-1 flex items-center justify-center px-6 py-16">
        <Card className="max-w-xl w-full text-center">
          <h1 className="text-2xl sm:text-3xl font-semibold text-[#2f3b2f] mb-4">
            Getting licensed was the hard part.
          </h1>
          <p className="text-[#5c6b52] leading-relaxed mb-8">
            Everything that comes next just looks complicated — it isn't. This is the stuff
            nobody teaches you, laid out in the right order, with the confusing parts explained.
            You've got this. Let's get you set up.
          </p>
          <button
            onClick={onContinue}
            className="w-full py-4 rounded-xl font-semibold text-white bg-[#6f9c63] hover:bg-[#5e8a52] transition"
          >
            Let's go
          </button>
        </Card>
      </div>
    </Shell>
  );
}
