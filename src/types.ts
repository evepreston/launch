export type LicenseType = 'LCSW' | 'LMFT' | 'LPC' | 'LPCC' | 'Other';

export interface UserProfile {
  state: string;
  isFullyLicensed: boolean | null;
  licenseType: LicenseType | null;
}

export interface ExternalLink {
  label: string;
  url: string;
}

export interface WizardStep {
  id: string;
  number: number;
  title: string;
  summary: string;
  body: string[];
  links: ExternalLink[];
  tool?: 'revenuePlanner' | 'breakEvenCalculator';
  isInfoOnly?: boolean;
}
