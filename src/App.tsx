import { useEffect, useState } from 'react';
import IntroScreen from './components/IntroScreen';
import CongratsScreen from './components/CongratsScreen';
import DisclaimerScreen from './components/DisclaimerScreen';
import StepScreen from './components/StepScreen';
import CompletionScreen from './components/CompletionScreen';
import CustomCursor from './components/CustomCursor';
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

  let screen: React.ReactNode;
  let fadeKey: string = phase;

  if (phase === 'welcome') {
    screen = <CongratsScreen onContinue={() => setPhase('intro')} />;
  } else if (phase === 'intro' || !profile) {
    screen = (
      <IntroScreen
        onComplete={(p) => {
          setProfile(p);
          setPhase('disclaimer');
        }}
      />
    );
  } else if (phase === 'disclaimer') {
    screen = <DisclaimerScreen onContinue={() => setPhase('steps')} />;
  } else {
    const steps = buildSteps(profile);

    if (phase === 'complete') {
      screen = <CompletionScreen steps={steps} />;
    } else {
      const step = steps[currentIndex];
      const isComplete = completedIds.has(step.id);
      fadeKey = `${phase}-${currentIndex}`;

      screen = (
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
  }

  return (
    <>
      <CustomCursor />
      <div key={fadeKey} className="screen-fade">
        {screen}
      </div>
    </>
  );
}

export default App;
