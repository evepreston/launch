export interface StateLLCInfo {
  name: string;
  filingFee: string;
  renewalFee: string;
  renewalNote: string;
  filingLink: string;
  filingLinkLabel: string;
  note?: string;
}

const DEFAULT_LABEL = "your state's filing office";

export const STATE_LLC_INFO: Record<string, StateLLCInfo> = {
  Maine: {
    name: 'Maine',
    filingFee: '$175',
    renewalFee: '$85',
    renewalNote: 'Re-register every June for $85.',
    filingLink: 'https://www.maine.gov/sos/cec/forms/mllc6.pdf',
    filingLinkLabel: 'Maine LLC formation form (PDF)',
    note: "The Maine Bureau of Corporations is genuinely helpful if you call with questions — don't hesitate to reach out.",
  },
  Alabama: { name: 'Alabama', filingFee: '$200', renewalFee: '~$50/yr (Business Privilege Tax)', renewalNote: 'Annual Business Privilege Tax return due.', filingLink: 'https://sos.alabama.gov/business-entities', filingLinkLabel: 'Alabama Secretary of State business filings' },
  Alaska: { name: 'Alaska', filingFee: '$250', renewalFee: '$100 biennial', renewalNote: 'Biennial report due every 2 years.', filingLink: 'https://www.commerce.alaska.gov/web/cbpl/', filingLinkLabel: 'Alaska Division of Corporations' },
  Arizona: { name: 'Arizona', filingFee: '$50', renewalFee: 'No annual report required', renewalNote: 'No recurring state fee, but publication requirement applies in some counties.', filingLink: 'https://ecorp.azcc.gov/', filingLinkLabel: 'Arizona Corporation Commission eCorp' },
  Arkansas: { name: 'Arkansas', filingFee: '$45', renewalFee: '$150/yr franchise tax', renewalNote: 'Annual franchise tax report due May 1.', filingLink: 'https://www.sos.arkansas.gov/business-commercial-services-bcs', filingLinkLabel: 'Arkansas Secretary of State' },
  California: { name: 'California', filingFee: '$70', renewalFee: '$800/yr franchise tax + biennial $20 report', renewalNote: 'Annual $800 minimum franchise tax plus a biennial Statement of Information.', filingLink: 'https://bizfileonline.sos.ca.gov/', filingLinkLabel: 'California Secretary of State bizfile' },
  Colorado: { name: 'Colorado', filingFee: '$50', renewalFee: '$25/yr', renewalNote: 'Periodic report due annually.', filingLink: 'https://www.coloradosos.gov/biz/', filingLinkLabel: 'Colorado Secretary of State' },
  Connecticut: { name: 'Connecticut', filingFee: '$120', renewalFee: '$80/yr', renewalNote: 'Annual report due each year.', filingLink: 'https://service.ct.gov/business/', filingLinkLabel: 'Connecticut Business One Stop' },
  Delaware: { name: 'Delaware', filingFee: '$110', renewalFee: '$300/yr', renewalNote: 'Annual flat tax due June 1.', filingLink: 'https://corp.delaware.gov/', filingLinkLabel: 'Delaware Division of Corporations' },
  Florida: { name: 'Florida', filingFee: '$125', renewalFee: '$138.75/yr', renewalNote: 'Annual report due May 1.', filingLink: 'https://dos.myflorida.com/sunbiz/', filingLinkLabel: 'Florida Division of Corporations (Sunbiz)' },
  Georgia: { name: 'Georgia', filingFee: '$100', renewalFee: '$50/yr', renewalNote: 'Annual registration due between Jan 1 and Apr 1.', filingLink: 'https://ecorp.sos.ga.gov/', filingLinkLabel: 'Georgia Secretary of State eCorp' },
  Hawaii: { name: 'Hawaii', filingFee: '$50', renewalFee: '$15/yr', renewalNote: 'Annual report due by the end of your registration anniversary quarter.', filingLink: 'https://cca.hawaii.gov/breg/', filingLinkLabel: 'Hawaii Business Registration Division' },
  Idaho: { name: 'Idaho', filingFee: '$100', renewalFee: 'Free annual report', renewalNote: 'Annual report due, no fee.', filingLink: 'https://sosbiz.idaho.gov/', filingLinkLabel: 'Idaho Secretary of State' },
  Illinois: { name: 'Illinois', filingFee: '$150', renewalFee: '$75/yr', renewalNote: 'Annual report due before your filing anniversary.', filingLink: 'https://www.ilsos.gov/departments/business_services/home.html', filingLinkLabel: 'Illinois Secretary of State Business Services' },
  Indiana: { name: 'Indiana', filingFee: '$95', renewalFee: '$31 biennial', renewalNote: 'Business entity report due every 2 years.', filingLink: 'https://inbiz.in.gov/', filingLinkLabel: 'Indiana INBiz' },
  Iowa: { name: 'Iowa', filingFee: '$50', renewalFee: '$30 biennial', renewalNote: 'Biennial report due in odd-numbered years.', filingLink: 'https://sos.iowa.gov/business/', filingLinkLabel: 'Iowa Secretary of State Business Services' },
  Kansas: { name: 'Kansas', filingFee: '$160', renewalFee: '$50/yr', renewalNote: 'Annual report due each year.', filingLink: 'https://sos.ks.gov/businesses/businesses.html', filingLinkLabel: 'Kansas Secretary of State' },
  Kentucky: { name: 'Kentucky', filingFee: '$40', renewalFee: '$15/yr', renewalNote: 'Annual report due by June 30.', filingLink: 'https://sos.ky.gov/business/', filingLinkLabel: 'Kentucky Secretary of State Business Filings' },
  Louisiana: { name: 'Louisiana', filingFee: '$100', renewalFee: '$35/yr', renewalNote: 'Annual report due on your filing anniversary.', filingLink: 'https://www.sos.la.gov/BusinessServices/', filingLinkLabel: 'Louisiana Secretary of State Business Services' },
  Maryland: { name: 'Maryland', filingFee: '$100', renewalFee: '$300/yr', renewalNote: 'Annual personal property return due April 15.', filingLink: 'https://egov.maryland.gov/businessexpress', filingLinkLabel: 'Maryland Business Express' },
  Massachusetts: { name: 'Massachusetts', filingFee: '$500', renewalFee: '$500/yr', renewalNote: 'Annual report due on your filing anniversary.', filingLink: 'https://corp.sec.state.ma.us/', filingLinkLabel: 'Massachusetts Corporations Division' },
  Michigan: { name: 'Michigan', filingFee: '$50', renewalFee: '$25/yr', renewalNote: 'Annual statement due February 15.', filingLink: 'https://cofs.lara.state.mi.us/', filingLinkLabel: 'Michigan Corporations Online Filing System' },
  Minnesota: { name: 'Minnesota', filingFee: '$155', renewalFee: 'Free annual renewal', renewalNote: 'Annual renewal required, no fee, by Dec 31.', filingLink: 'https://mblsportal.sos.state.mn.us/', filingLinkLabel: 'Minnesota Secretary of State Business Services' },
  Mississippi: { name: 'Mississippi', filingFee: '$50', renewalFee: 'Free annual report', renewalNote: 'Annual report due by April 15, no fee.', filingLink: 'https://www.sos.ms.gov/business-services', filingLinkLabel: 'Mississippi Secretary of State Business Services' },
  Missouri: { name: 'Missouri', filingFee: '$50', renewalFee: 'No annual report required', renewalNote: 'No recurring state report.', filingLink: 'https://bsd.sos.mo.gov/', filingLinkLabel: 'Missouri Business Services Division' },
  Montana: { name: 'Montana', filingFee: '$35', renewalFee: '$20/yr', renewalNote: 'Annual report due by April 15.', filingLink: 'https://biz.sosmt.gov/', filingLinkLabel: 'Montana Secretary of State Business Services' },
  Nebraska: { name: 'Nebraska', filingFee: '$105', renewalFee: '$10 biennial', renewalNote: 'Biennial report due in odd-numbered years.', filingLink: 'https://www.nebraska.gov/sos/corp/corpsearch.cgi', filingLinkLabel: 'Nebraska Secretary of State Business Services' },
  Nevada: { name: 'Nevada', filingFee: '$425', renewalFee: '$350/yr', renewalNote: 'Annual list and business license fee due each year.', filingLink: 'https://www.nvsos.gov/sos/businesses', filingLinkLabel: 'Nevada Secretary of State Business Filings' },
  'New Hampshire': { name: 'New Hampshire', filingFee: '$100', renewalFee: '$100/yr', renewalNote: 'Annual report due by April 1.', filingLink: 'https://www.sos.nh.gov/business-commercial-division', filingLinkLabel: 'New Hampshire Business Commercial Division' },
  'New Jersey': { name: 'New Jersey', filingFee: '$125', renewalFee: '$75/yr', renewalNote: 'Annual report due by your filing anniversary month.', filingLink: 'https://www.njportal.com/DOR/BusinessFormation', filingLinkLabel: 'New Jersey Business Formation Portal' },
  'New Mexico': { name: 'New Mexico', filingFee: '$50', renewalFee: 'No annual report required', renewalNote: 'No recurring state report.', filingLink: 'https://www.sos.nm.gov/business-services/', filingLinkLabel: 'New Mexico Secretary of State Business Services' },
  'New York': { name: 'New York', filingFee: '$200', renewalFee: '$9 biennial + publication requirement', renewalNote: 'Biennial statement due, plus a one-time newspaper publication requirement (~$50–$1,500 depending on county).', filingLink: 'https://dos.ny.gov/division-corporations', filingLinkLabel: 'New York Division of Corporations' },
  'North Carolina': { name: 'North Carolina', filingFee: '$125', renewalFee: '$200/yr', renewalNote: 'Annual report due by April 15.', filingLink: 'https://www.sosnc.gov/divisions/business_registration', filingLinkLabel: 'North Carolina Secretary of State Business Registration' },
  'North Dakota': { name: 'North Dakota', filingFee: '$135', renewalFee: '$50/yr', renewalNote: 'Annual report due by Nov 15.', filingLink: 'https://firststop.sos.nd.gov/', filingLinkLabel: 'North Dakota First Stop Business Portal' },
  Ohio: { name: 'Ohio', filingFee: '$99', renewalFee: 'No annual report required', renewalNote: 'No recurring state report.', filingLink: 'https://www.ohiosos.gov/businesses/', filingLinkLabel: 'Ohio Secretary of State Business Services' },
  Oklahoma: { name: 'Oklahoma', filingFee: '$100', renewalFee: '$25/yr', renewalNote: 'Annual certificate due on your filing anniversary.', filingLink: 'https://www.sos.ok.gov/business/', filingLinkLabel: 'Oklahoma Secretary of State Business Filing' },
  Oregon: { name: 'Oregon', filingFee: '$100', renewalFee: '$100/yr', renewalNote: 'Annual report due on your filing anniversary.', filingLink: 'https://sos.oregon.gov/business/', filingLinkLabel: 'Oregon Secretary of State Business Registry' },
  Pennsylvania: { name: 'Pennsylvania', filingFee: '$125', renewalFee: '$7/yr (starting 2025)', renewalNote: 'Annual report now required (a recent change from the prior 10-year cycle).', filingLink: 'https://www.pa.gov/agencies/dos/programs/business/registration-forms.html', filingLinkLabel: 'Pennsylvania Department of State Business Registration' },
  'Rhode Island': { name: 'Rhode Island', filingFee: '$150', renewalFee: '$50/yr', renewalNote: 'Annual report due between Sept 1 and Nov 1.', filingLink: 'https://www.sos.ri.gov/divisions/business-services', filingLinkLabel: 'Rhode Island Business Services Division' },
  'South Carolina': { name: 'South Carolina', filingFee: '$110', renewalFee: 'No annual report required', renewalNote: 'No recurring state report for most LLCs.', filingLink: 'https://businessfilings.sc.gov/', filingLinkLabel: 'South Carolina Business Filings' },
  'South Dakota': { name: 'South Dakota', filingFee: '$150', renewalFee: '$50/yr', renewalNote: 'Annual report due by the first day of your anniversary month.', filingLink: 'https://sosenterprise.sd.gov/', filingLinkLabel: 'South Dakota Secretary of State Business Services' },
  Tennessee: { name: 'Tennessee', filingFee: '$300', renewalFee: '$300/yr', renewalNote: 'Annual report due on your filing anniversary.', filingLink: 'https://tnbear.tn.gov/', filingLinkLabel: 'Tennessee Business Enterprise Application Repository' },
  Texas: { name: 'Texas', filingFee: '$300', renewalFee: 'Franchise tax report (often $0 due if under threshold)', renewalNote: 'Annual franchise tax report required, though most small practices owe $0.', filingLink: 'https://www.sos.state.tx.us/corp/index.shtml', filingLinkLabel: 'Texas Secretary of State Business Filings' },
  Utah: { name: 'Utah', filingFee: '$54', renewalFee: '$18/yr', renewalNote: 'Annual renewal due on your filing anniversary.', filingLink: 'https://corporations.utah.gov/', filingLinkLabel: 'Utah Division of Corporations' },
  Vermont: { name: 'Vermont', filingFee: '$125', renewalFee: '$35/yr', renewalNote: 'Annual report due within 3 months of fiscal year end.', filingLink: 'https://sos.vermont.gov/corporations/', filingLinkLabel: 'Vermont Corporations Division' },
  Virginia: { name: 'Virginia', filingFee: '$100', renewalFee: '$50/yr', renewalNote: 'Annual registration fee due each year.', filingLink: 'https://www.scc.virginia.gov/clk', filingLinkLabel: 'Virginia State Corporation Commission' },
  Washington: { name: 'Washington', filingFee: '$200', renewalFee: '$60/yr', renewalNote: 'Annual report due on your filing anniversary.', filingLink: 'https://www.sos.wa.gov/corporations/', filingLinkLabel: 'Washington Secretary of State Corporations Division' },
  'West Virginia': { name: 'West Virginia', filingFee: '$100', renewalFee: '$25/yr', renewalNote: 'Annual report due by July 1.', filingLink: 'https://business4.wv.gov/', filingLinkLabel: 'West Virginia One Stop Business Portal' },
  Wisconsin: { name: 'Wisconsin', filingFee: '$130', renewalFee: '$25/yr', renewalNote: 'Annual report due by the end of the quarter of your filing anniversary.', filingLink: 'https://www.wdfi.org/apps/corpsearch/', filingLinkLabel: 'Wisconsin Department of Financial Institutions' },
  Wyoming: { name: 'Wyoming', filingFee: '$100', renewalFee: '$60/yr', renewalNote: 'Annual report due on your filing anniversary.', filingLink: 'https://sos.wyo.gov/Business/', filingLinkLabel: 'Wyoming Secretary of State Business Division' },
  'District of Columbia': { name: 'District of Columbia', filingFee: '$99', renewalFee: '$300 biennial', renewalNote: 'Biennial report due every 2 years by April 1.', filingLink: 'https://dlcp.dc.gov/service/business-registration', filingLinkLabel: 'DC Department of Licensing and Consumer Protection' },
};

export const US_STATES = Object.keys(STATE_LLC_INFO).sort();

export function getStateInfo(state: string): StateLLCInfo {
  return (
    STATE_LLC_INFO[state] ?? {
      name: state,
      filingFee: 'varies by state',
      renewalFee: 'varies by state',
      renewalNote: 'Check your state filing office for current renewal requirements.',
      filingLink: 'https://www.usa.gov/state-business',
      filingLinkLabel: DEFAULT_LABEL,
    }
  );
}
