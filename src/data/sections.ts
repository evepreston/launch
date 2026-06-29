export interface SectionMeta {
  id: string;
  title: string;
  stepIds: string[];
}

export const SECTIONS: SectionMeta[] = [
  {
    id: 'communications',
    title: "Let's Get You Set Up",
    stepIds: ['mailing-address', 'professional-email', 'phone-fax'],
  },
  {
    id: 'official',
    title: "Let's Make It Official",
    stepIds: ['npi-number', 'caqh', 'form-llc', 'ein'],
  },
  {
    id: 'financial-foundation',
    title: "Let's Sort Out the Money",
    stepIds: ['bank-account', 'liability-insurance', 'bookkeeping'],
  },
  {
    id: 'define-practice',
    title: "Let's Define Your Practice",
    stepIds: ['set-rate', 'credentialing', 'therapist-bio'],
  },
  {
    id: 'get-visible',
    title: "Let's Get You Out There",
    stepIds: ['online-presence', 'ehr-telehealth'],
  },
];

export function getSectionForStep(stepId: string): SectionMeta | undefined {
  return SECTIONS.find((s) => s.stepIds.includes(stepId));
}
