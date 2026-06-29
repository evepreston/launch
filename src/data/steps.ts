import type { WizardStep, UserProfile } from '../types';
import { getStateInfo } from './states';
import { SECTIONS } from './sections';

export function buildSteps(profile: UserProfile): WizardStep[] {
  const stateInfo = getStateInfo(profile.state || 'your state');

  const stepsById: Record<string, WizardStep> = {
    'mailing-address': {
      id: 'mailing-address',
      number: 0,
      title: 'Set up a business mailing address',
      summary: 'Get a real street address for your practice.',
      body: [
        "You need a real street address for your practice — not a PO box, and only your home address if you're comfortable with it being publicly listed.",
        'The easiest option is a UPS virtual mailbox: they give you a real street address and manage your mail for you.',
      ],
      links: [{ label: 'UPS Mailboxes', url: 'https://www.ups.com/mailboxes' }],
    },
    'professional-email': {
      id: 'professional-email',
      number: 0,
      title: 'Set up a professional email',
      summary: 'Get name@yourpractice.com instead of a Gmail address.',
      body: [
        'Set up Google Workspace so your email is name@yourpractice.com instead of a regular Gmail address.',
        'This looks more professional, and it also lets you sign a Business Associate Addendum — which makes your email HIPAA compliant.',
        'You can purchase your domain name at the same time.',
      ],
      links: [{ label: 'Google Workspace', url: 'https://workspace.google.com' }],
    },
    'phone-fax': {
      id: 'phone-fax',
      number: 0,
      title: 'Set up a HIPAA-compliant phone and fax',
      summary: 'Keep your personal cell out of client communication.',
      body: [
        'Your personal cell phone is not HIPAA compliant for client communication.',
        'RingRx provides a HIPAA-compliant phone line, voicemail, text, and fax — all separate from your personal number.',
      ],
      links: [{ label: 'RingRx', url: 'https://ringrx.com' }],
    },
    'npi-number': {
      id: 'npi-number',
      number: 0,
      title: 'NPI number',
      summary: "Make sure it's handy and your address is current.",
      body: [
        "Make sure your NPI number is handy — you'll need it for almost every step that follows.",
        'Update your business address in the NPI registry now that you have one.',
      ],
      links: [{ label: 'NPPES NPI Registry', url: 'https://nppes.cms.hhs.gov' }],
    },
    caqh: {
      id: 'caqh',
      number: 0,
      title: 'CAQH account',
      summary: 'The credentialing hub insurers use to verify you.',
      body: [
        "Insurance companies use CAQH to verify that you're up to date — licenses, malpractice insurance, address changes, annual updates.",
        'Set this up early and keep it current.',
        "If you ever hire someone to do your credentialing, you'll share this account with them.",
      ],
      links: [{ label: 'CAQH ProView', url: 'https://proview.caqh.org' }],
    },
    'form-llc': {
      id: 'form-llc',
      number: 0,
      title: 'Form your LLC',
      summary: `File your LLC in ${stateInfo.name} — ${stateInfo.filingFee} to form.`,
      body: [
        `You may have seen advice about forming your LLC in Delaware or Wyoming because the fees are lower. That's advice for tech startups and online businesses — not for you. As a therapist, your license is tied to your state, your clients are in your state, and your practice operates in your state. If you formed in another state you'd still have to register in your home state anyway, paying fees in two places for no real benefit. Form in ${stateInfo.name}. Easy choice, moving on.`,
        `When you file, you'll be asked for a registered agent — this is just the person who would be contacted if your LLC was ever involved in a lawsuit. You can be your own registered agent for free, or appoint a family member. You can also pay a service to do it (~$39–$50/year), which keeps your home address off public records. Either option is fine.`,
        `In ${stateInfo.name}: filing costs ${stateInfo.filingFee}. ${stateInfo.renewalNote}`,
        ...(stateInfo.note ? [stateInfo.note] : []),
        "You may have heard people talk about 'electing S-Corp status' and wondered if you should do it. Here's the short answer: probably not yet, and here's why.",
        'By default your LLC is taxed as a partnership — profits flow straight to your personal tax return and you pay self-employment tax on everything you earn.',
        'An S-Corp election can save you money on self-employment taxes once you\'re earning above roughly $60,000–$80,000 in profit — but it comes with real added complexity: you have to pay yourself a formal salary, run payroll, file additional tax returns, and pay an accountant more to manage it.',
        "For most therapists in their first year or two of private practice, the tax savings don't outweigh the hassle. Get established first. Talk to your accountant when you're consistently profitable and they'll tell you if and when it makes sense to switch.",
      ],
      links: [{ label: stateInfo.filingLinkLabel, url: stateInfo.filingLink }],
    },
    ein: {
      id: 'ein',
      number: 0,
      title: 'Get your EIN',
      summary: "Your business's free tax ID number.",
      body: [
        "Your EIN is your business's tax ID number — like a social security number for your LLC.",
        'You need it to open a bank account and for credentialing.',
        "It's free and takes about 5 minutes online.",
      ],
      links: [{ label: 'IRS — Apply for an EIN', url: 'https://www.irs.gov/ein' }],
    },
    'bank-account': {
      id: 'bank-account',
      number: 0,
      title: 'Open a business bank account',
      summary: 'Built-for-therapists options, or your existing bank.',
      body: [
        'You have a few good options here. Two platforms are built specifically for therapists and self-employed people in private practice:',
        'Found combines business banking with automatic tax tracking — it estimates your quarterly taxes as you earn and sets the money aside automatically, which is genuinely useful in your first year when tax season can be a shock. Free to start.',
        'Heard goes further, bundling banking with done-for-you bookkeeping and year-round tax support from people who specialize in therapists.',
        "A note on these options: both Found and Heard are financial technology companies, not traditional banks. That might sound less secure, but it isn't — their banking services are provided by FDIC-insured partner banks, meaning your money is protected up to $250,000, the same as at any traditional bank. The fintech layer just means a better app and features built for how you actually work.",
        'Your existing bank works fine too — any business checking account gets the job done.',
        'Whatever you choose, make sure to get a bank letter confirming you opened the account, with your LLC name and EIN on it. Some insurers require this during credentialing for direct deposit setup.',
      ],
      links: [
        { label: 'Found', url: 'https://found.com/therapists' },
        { label: 'Heard', url: 'https://www.joinheard.com' },
      ],
    },
    'liability-insurance': {
      id: 'liability-insurance',
      number: 0,
      title: 'Get liability insurance',
      summary: '~$100/year through NASW — two policies, not one.',
      body: [
        'NASW offers liability insurance for around $100/year.',
        'Important detail that trips people up: regular liability and digital liability (for things like accidentally sharing client info via email) are two separate policies that must be purchased separately.',
        "Call NASW if you have questions — there's usually no long wait.",
      ],
      links: [{ label: 'NASW Assurance Services', url: 'https://www.naswassurance.org' }],
    },
    bookkeeping: {
      id: 'bookkeeping',
      number: 0,
      title: 'Set up bookkeeping and find an accountant',
      summary: 'Track every dollar in and out, and get a tax plan.',
      body: [
        'Bookkeeping means tracking every dollar your business earns and spends — income from sessions, expenses like software subscriptions, insurance premiums, and office supplies. You need this to understand how your practice is doing financially and to make tax time manageable.',
        'Which bookkeeping tool you need depends on what you chose for banking:',
        "If you're using Heard — you're already covered. Heard does your bookkeeping for you with a real human reviewing your books every month. Skip to finding an accountant below.",
        "If you're using Found — it has basic bookkeeping built in and automatically categorizes your expenses. This may be enough to start, especially in year one. Check with your accountant.",
        "If you're using a traditional bank or Mercury — set up QuickBooks. It connects directly to your bank account, tracks income and expenses, categorizes everything automatically, and gives your accountant direct access to your books at tax time. Most accountants who work with small businesses prefer QuickBooks — they can log in directly rather than you emailing spreadsheets back and forth.",
        "Note: SimplePractice tracks your session income and insurance billing well, but it doesn't track your business expenses or produce the financial reports an accountant needs. Most therapists use SimplePractice for clinical billing and a separate bookkeeping tool for the full financial picture.",
        'Regardless of which bookkeeping tool you use, get established with an accountant before you start seeing clients. The most important first conversation: how much to set aside each month for taxes. A common rule of thumb is 25–30% of your net income, but your accountant will give you a number specific to your situation.',
      ],
      links: [
        { label: 'QuickBooks', url: 'https://quickbooks.intuit.com' },
        { label: 'Heard', url: 'https://www.joinheard.com' },
      ],
      tool: 'breakEvenCalculator',
    },
    'set-rate': {
      id: 'set-rate',
      number: 0,
      title: 'Set your rate',
      summary: 'See what your practice could look like financially.',
      body: [
        'Use the calculator below to see what your practice could look like financially based on your session rate, caseload, and schedule.',
      ],
      links: [],
      tool: 'revenuePlanner',
    },
    credentialing: {
      id: 'credentialing',
      number: 0,
      title: 'Decide whether to take insurance',
      summary: 'Get approved to accept insurance.',
      body: [
        'Credentialing means getting approved to accept insurance.',
        'Each insurer charges $50–75 and has its own process.',
        'You can do this yourself or hire a credentialing service to handle it for you — both are valid options depending on how much time you have.',
      ],
      links: [],
    },
    'therapist-bio': {
      id: 'therapist-bio',
      number: 0,
      title: 'Write your therapist bio',
      summary: "We're still building out this step.",
      isInfoOnly: true,
      body: ["We're still building out guidance for this step — check back soon."],
      links: [],
    },
    'online-presence': {
      id: 'online-presence',
      number: 0,
      title: 'Build your online presence',
      summary: 'Start with Psychology Today — a website can wait.',
      body: [
        "Start with a Psychology Today profile — it's one of the most common ways clients find therapists.",
        "You can create your profile for free and keep it hidden until you're ready to go public.",
        'Before paying, search online for a promotional code — there are often offers for 3 free months.',
        'A website is not necessary right away — you can operate without one at first.',
      ],
      links: [{ label: 'Psychology Today — Therapist Profiles', url: 'https://therapists.psychologytoday.com' }],
    },
    'ehr-telehealth': {
      id: 'ehr-telehealth',
      number: 0,
      title: 'Set up your EHR and telehealth platform',
      summary: 'One piece of software runs your whole practice.',
      body: [
        'EHR stands for Electronic Health Record — it\'s the software that runs your practice. It handles your client scheduling, intake forms, session notes, billing, insurance claims, and secure client messaging all in one place.',
        "Here's something that surprises a lot of therapists: your EHR also handles telehealth. You don't need a separate Zoom account or video platform. SimplePractice, the most widely used EHR among private practice therapists, has HIPAA compliant video sessions built directly in. Your client gets a link, they click it, you meet. No extra app, no separate subscription.",
        'TherapyNotes is a solid alternative — it covers the same ground (scheduling, notes, billing, claims, telehealth) and is especially popular with therapists who want strong built-in billing and insurance claim tools.',
        'If you ever want a standalone telehealth option, Doxy.me has a free HIPAA compliant tier that many therapists use. But for most people starting out, SimplePractice or TherapyNotes handles everything.',
      ],
      links: [
        { label: 'SimplePractice', url: 'https://www.simplepractice.com' },
        { label: 'TherapyNotes', url: 'https://www.therapynotes.com' },
        { label: 'Doxy.me', url: 'https://doxy.me' },
      ],
    },
  };

  const orderedIds = SECTIONS.flatMap((section) => section.stepIds);

  return orderedIds.map((id, i) => ({ ...stepsById[id], number: i + 1 }));
}
