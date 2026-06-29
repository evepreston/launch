export interface SectionLandingItem {
  label: string;
  description: string;
}

export interface SectionLanding {
  heading: string;
  intro: string;
  items: SectionLandingItem[];
  footer: string;
}

export interface SectionMeta {
  id: string;
  title: string;
  stepIds: string[];
  landing: SectionLanding;
}

export const SECTIONS: SectionMeta[] = [
  {
    id: 'communications',
    title: "Let's Get Started",
    stepIds: ['mailing-address', 'professional-email', 'phone-fax'],
    landing: {
      heading: "Let's Get You Started",
      intro:
        'Before you can see clients, the world needs to be able to reach you professionally. This section is about setting up the basics — your address, your email, your phone. Nothing complicated, just a few accounts to open.',
      items: [
        { label: 'Business mailing address', description: "A real street address for your practice that isn't your home" },
        { label: 'Professional email', description: 'A HIPAA compliant email that looks like you, not Gmail' },
        { label: 'Phone and fax', description: 'A separate, HIPAA compliant line for client communication' },
      ],
      footer: 'Most people get through this section in an afternoon.',
    },
  },
  {
    id: 'official',
    title: "Let's Make It Official",
    stepIds: ['npi-number', 'caqh', 'form-llc', 'ein'],
    landing: {
      heading: "Let's Make It Official",
      intro:
        'This section covers the four things that make your practice a real, legal business. None of it is as complicated as it sounds.',
      items: [
        { label: 'NPI number', description: "Your unique ID as a healthcare provider — you'll need this for everything" },
        { label: 'CAQH', description: 'The database insurers use to verify your credentials' },
        { label: 'LLC', description: 'The legal structure that protects you personally' },
        { label: 'EIN', description: "Your business's tax ID — like a social security number for your practice" },
      ],
      footer: 'Most people get through this section in a week. The hardest part is waiting for the mail.',
    },
  },
  {
    id: 'financial-foundation',
    title: "Let's Sort Out the Money",
    stepIds: ['bank-account', 'liability-insurance', 'bookkeeping'],
    landing: {
      heading: "Let's Sort Out the Money",
      intro:
        "This is the part that feels intimidating but really isn't. You need a place for money to land, protection if something goes wrong, and a system for keeping track of it all. That's it.",
      items: [
        { label: 'Business bank account', description: 'Keep your business and personal finances completely separate from day one' },
        { label: 'Liability insurance', description: "Protect yourself professionally — and it's more affordable than you think" },
        { label: 'Bookkeeping and accountant', description: 'Track what you earn and spend, and have someone in your corner at tax time' },
      ],
      footer: 'Most people get through this section in a week.',
    },
  },
  {
    id: 'define-practice',
    title: "Let's Define Your Practice",
    stepIds: ['set-rate', 'credentialing', 'therapist-bio'],
    landing: {
      heading: "Let's Define Your Practice",
      intro:
        "This is where it starts to feel real. What do you charge? Are you taking insurance? How do you describe yourself to a stranger who might become a client? These decisions feel big but you're more ready than you think.",
      items: [
        { label: 'Set your rate', description: "Figure out what to charge — we'll show you what therapists in your area are charging" },
        { label: 'Insurance decision', description: 'Taking insurance or going private pay — here\'s how to think about it' },
        { label: 'Your bio', description: 'A short, honest description of who you are and who you help' },
      ],
      footer: "Take your time in this section. These decisions matter and it's worth getting them right.",
    },
  },
  {
    id: 'get-visible',
    title: "Let's Get You Out There",
    stepIds: ['online-presence', 'ehr-telehealth'],
    landing: {
      heading: "Let's Get You Out There",
      intro:
        "You're almost there. This section is about making sure clients can actually find you and that you're ready to see them when they do.",
      items: [
        { label: 'Psychology Today', description: 'The most common way new clients find therapists — your profile does the work for you' },
        { label: 'EHR and telehealth', description: 'The software that runs your practice — scheduling, notes, billing, and video sessions in one place' },
      ],
      footer: "Once this section is done, you're open for business.",
    },
  },
];

export function getSectionForStep(stepId: string): SectionMeta | undefined {
  return SECTIONS.find((s) => s.stepIds.includes(stepId));
}
