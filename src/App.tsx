import { useEffect, useState } from 'react';
import IntroScreen from './components/IntroScreen';
import CongratsScreen from './components/CongratsScreen';
import DisclaimerScreen from './components/DisclaimerScreen';
import StepScreen from './components/StepScreen';
import CompletionScreen from './components/CompletionScreen';
import { buildSteps } from './data/steps';
import type { UserProfile } from './types';

type Phase = 'welcome' | 'intro' | 'disclaimer' | 'steps' | 'complete';

const STORAGE_KEY = 'launchkit-wizard-state';

interface PersistedState {
  phase: Phase;
  profile: UserProfile | null;
  currentIndex: number;
  completedIds: string[];
}

function load(): PersistedState | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

function App() {
  const saved = load();
  const [phase, setPhase] = useState<Phase>(saved?.phase ?? 'welcome');
  const [profile, setProfile] = useState<UserProfile | null>(saved?.profile ?? null);
  const [currentIndex, setCurrentIndex] = useState(saved?.currentIndex ?? 0);
  const [completedIds, setCompletedIds] = useState<Set<string>>(
    new Set(saved?.completedIds ?? [])
  );

  useEffect(() => {
    const data: PersistedState = {
      phase,
      profile,
      currentIndex,
      completedIds: Array.from(completedIds),
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  }, [phase, profile, currentIndex, completedIds]);

  if (phase === 'welcome') {
    return <CongratsScreen onContinue={() => setPhase('intro')} />;
  }

  if (phase === 'intro' || !profile) {
    return (
      <IntroScreen
        onComplete={(p) => {
          setProfile(p);
          setPhase('disclaimer');
        }}
      />
    );
  }

  if (phase === 'disclaimer') {
    return <DisclaimerScreen onContinue={() => setPhase('steps')} />;
  }

  const steps = buildSteps(profile);

  if (phase === 'complete') {
    return <CompletionScreen steps={steps} />;
  }

  const step = steps[currentIndex];
  const isComplete = completedIds.has(step.id);

  return (
    <StepScreen
      step={step}
      index={currentIndex}
      total={steps.length}
      isComplete={isComplete}
      canGoBack={currentIndex > 0}
      steps={steps}
      completedIds={completedIds}
      onJump={(i) => setCurrentIndex(i)}
      onBack={() => setCurrentIndex((i) => Math.max(0, i - 1))}
      onComplete={() => setCompletedIds((prev) => new Set(prev).add(step.id))}
      onNext={() => {
        if (currentIndex === steps.length - 1) {
          setPhase('complete');
        } else {
          setCurrentIndex((i) => i + 1);
        }
      }}
    />
  );
}

export default App;
