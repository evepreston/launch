export interface GlossaryEntry {
  match: RegExp;
  definition: string;
}

export const GLOSSARY: GlossaryEntry[] = [
  {
    match: /HIPAA[-\s]compliant/gi,
    definition:
      "Meets the security standards of HIPAA, the federal law protecting client health information. A HIPAA compliant tool will sign a Business Associate Agreement promising to handle that information securely.",
  },
  {
    match: /Business Associate (Addendum|Agreement)/gi,
    definition:
      "A legal agreement (often called a BAA) between you and a vendor, where the vendor promises to handle your clients' protected health information securely. Signing one is what makes a tool HIPAA compliant.",
  },
  {
    match: /\bBAA\b/g,
    definition:
      "Short for Business Associate Agreement — a legal promise from a vendor that they'll handle your clients' protected health information securely.",
  },
  {
    match: /\bcredentialing\b/gi,
    definition:
      "The process of getting approved by an insurance company so you can accept their plans and bill them directly. Each insurer has its own application and review process.",
  },
];
