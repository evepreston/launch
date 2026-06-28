import { useEffect, useState } from 'react';
import IntroScreen from './components/IntroScreen';
import HipaaScreen from './components/HipaaScreen';
import DisclaimerScreen from './components/DisclaimerScreen';
import StepScreen from './components/StepScreen';
import SectionIntroScreen from './components/SectionIntroScreen';
import CompletionScreen from './components/CompletionScreen';
import { buildSteps } from './data/steps';
import { SECTIONS } from './data/sections';
import type { UserProfile } from './types';

type Phase = 'intro' | 'hipaa' | 'disclaimer' | 'steps' | 'complete';

const STORAGE_KEY = 'launchkit-wizard-state';

interface PersistedState {
  phase: Phase;
  profile: UserProfile | null;
  currentIndex: number;
  completedIds: string[];
  seenSections: string[];
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
  const [phase, setPhase] = useState<Phase>(saved?.phase ?? 'intro');
  const [profile, setProfile] = useState<UserProfile | null>(saved?.profile ?? null);
  const [currentIndex, setCurrentIndex] = useState(saved?.currentIndex ?? 0);
  const [completedIds, setCompletedIds] = useState<Set<string>>(
    new Set(saved?.completedIds ?? [])
  );
  const [seenSections, setSeenSections] = useState<Set<string>>(
    new Set(saved?.seenSections ?? [])
  );

  useEffect(() => {
    const data: PersistedState = {
      phase,
      profile,
      currentIndex,
      completedIds: Array.from(completedIds),
      seenSections: Array.from(seenSections),
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  }, [phase, profile, currentIndex, completedIds, seenSections]);

  if (phase === 'intro' || !profile) {
    return (
      <IntroScreen
        onComplete={(p) => {
          setProfile(p);
          setPhase('hipaa');
        }}
      />
    );
  }

  if (phase === 'hipaa') {
    return <HipaaScreen onContinue={() => setPhase('disclaimer')} />;
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
  const sectionIndex = SECTIONS.findIndex((s) => s.stepIds.includes(step.id));
  const section = SECTIONS[sectionIndex];

  if (!seenSections.has(section.id)) {
    return (
      <SectionIntroScreen
        section={section}
        sectionIndex={sectionIndex}
        totalSections={SECTIONS.length}
        onContinue={() => setSeenSections((prev) => new Set(prev).add(section.id))}
      />
    );
  }

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
