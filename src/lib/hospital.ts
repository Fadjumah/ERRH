import { Activity, Baby, Bone, HeartPulse, Microscope, Scissors, Stethoscope, Syringe, type LucideIcon } from "lucide-react";

export const hospitalName = "Entebbe Regional Referral Hospital";
export const directionsUrl = "https://www.google.com/maps/search/?api=1&query=Entebbe+Regional+Referral+Hospital+Nsamizi+Road+Uganda";
export const phone = "+256 42 4230637";
export const phoneHref = "tel:+256424230637";

export type Service = { title: string; description: string; icon: LucideIcon; category: string };
export const services: Service[] = [
  { title: "Outpatient & casualty", description: "A first point of care for assessment, treatment and referrals.", icon: Stethoscope, category: "Everyday care" },
  { title: "Maternity & antenatal", description: "Care for mothers before birth and through delivery.", icon: HeartPulse, category: "Women & families" },
  { title: "Paediatrics", description: "Dedicated inpatient care for children and young people.", icon: Baby, category: "Women & families" },
  { title: "Surgery & theatre", description: "General surgical and theatre services supported by specialist teams.", icon: Scissors, category: "Specialist care" },
  { title: "Orthopaedics", description: "Assessment and care for bones, joints and injuries.", icon: Bone, category: "Specialist care" },
  { title: "Laboratory", description: "Diagnostic laboratory services available around the clock.", icon: Microscope, category: "Diagnostics" },
  { title: "Immunisation", description: "Routine immunisation services for children and families.", icon: Syringe, category: "Preventive care" },
  { title: "Specialist clinics", description: "Eye, dental, diabetes and family planning clinics.", icon: Activity, category: "Everyday care" },
];

export const updates = [
  { date: "16 Sep 2026", category: "Community care", title: "Specialists come together for the Buganda surgical camp", description: "Surgical specialists and healthcare teams joined forces to bring quality surgical services closer to the community.", href: "https://x.com/EntebbeRRH/status/2100071690982019079", image: "surgery" },
  { date: "07 Sep 2026", category: "Hospital news", title: "A new welcome at Entebbe Regional Referral Hospital", description: "The hospital unveiled its newly built gates as part of its commitment to a better environment for patients, staff and visitors.", href: "https://x.com/EntebbeRRH/status/2096983196931932181", image: "exterior" },
  { date: "28 Jul 2026", category: "Child health", title: "Highlighting childhood immunisation in Entebbe", description: "Visitors observed ongoing childhood immunisation services at the facility and met the teams behind them.", href: "https://x.com/EntebbeRRH/status/2082096166661951708", image: "immunisation" },
];