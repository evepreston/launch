export interface SectionMeta {
  id: string;
  title: string;
  description: string;
  estimatedMinutes: number;
  stepIds: string[];
}

export const SECTIONS: SectionMeta[] = [
  {
    id: 'communications',
    title: "Let's Get You Set Up",
    description: 'Get a real address, a professional email, and a HIPAA-compliant phone line in place.',
    estimatedMinutes: 30,
    stepIds: ['mailing-address', 'professional-email', 'phone-fax'],
  },
  {
    id: 'official',
    title: "Let's Make It Official",
    description: 'Register your business and get the numbers insurers and banks will ask for.',
    estimatedMinutes: 45,
    stepIds: ['npi-number', 'caqh', 'form-llc', 'ein'],
  },
  {
    id: 'financial-foundation',
    title: "Let's Sort Out the Money",
    description: 'Open the right accounts and protections so money and risk are handled correctly from day one.',
    estimatedMinutes: 40,
    stepIds: ['bank-account', 'liability-insurance', 'bookkeeping'],
  },
  {
    id: 'define-practice',
    title: "Let's Define Your Practice",
    description: 'Decide what you charge, whether you take insurance, and how you introduce yourself to clients.',
    estimatedMinutes: 25,
    stepIds: ['set-rate', 'credentialing', 'therapist-bio'],
  },
  {
    id: 'get-visible',
    title: "Let's Get You Out There",
    description: "Set up the places clients will actually find you and meet with you.",
    estimatedMinutes: 30,
    stepIds: ['online-presence', 'ehr-telehealth'],
  },
];

export function getSectionForStep(stepId: string): SectionMeta | undefined {
  return SECTIONS.find((s) => s.stepIds.includes(stepId));
}
