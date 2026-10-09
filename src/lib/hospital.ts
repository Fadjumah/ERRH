import { Activity, Ambulance, Baby, Bone, Brain, Droplets, Ear, Eye, GraduationCap, HeartPulse, Microscope, Pill, Scan, Scissors, Stethoscope, Syringe, Wind, type LucideIcon } from "lucide-react";

export const hospitalName = "Entebbe Regional Referral Hospital";
export const directionsUrl = "https://www.google.com/maps/search/?api=1&query=Entebbe+Regional+Referral+Hospital+Nsamizi+Road+Uganda";
export const phone = "+256 42 4230637";
export const phoneHref = "tel:+256424230637";

export const catchment = ["Entebbe Municipality", "Wakiso District", "Kalangala & the Ssese Islands", "Greater Mpigi region"];

export const facts = [
  { label: "Hospital level", value: "Regional referral" },
  { label: "Casualty & emergency", value: "Open 24/7" },
  { label: "Laboratory", value: "Open 24/7" },
  { label: "Referring facilities", value: "HC IV, HC III & district units" },
];

export type Service = { title: string; description: string; icon: LucideIcon; category: string };
export const services: Service[] = [
  { title: "Accident & emergency", description: "Casualty and resuscitation care for injuries and medical emergencies, day and night.", icon: Ambulance, category: "Emergency & critical care" },
  { title: "Intensive & high dependency care", description: "Close monitoring and support for critically ill adults and newborns.", icon: Activity, category: "Emergency & critical care" },
  { title: "Outpatient clinics", description: "A first point of care for assessment, treatment and referral into our departments.", icon: Stethoscope, category: "Everyday care" },
  { title: "Internal medicine", description: "Care for chronic and complex adult illness, including hypertension and diabetes.", icon: HeartPulse, category: "Everyday care" },
  { title: "Maternity & antenatal", description: "Antenatal, delivery and postnatal care, including high-risk pregnancies.", icon: HeartPulse, category: "Women & families" },
  { title: "Paediatrics & newborn care", description: "Inpatient and newborn care for children and young people.", icon: Baby, category: "Women & families" },
  { title: "Surgery & theatre", description: "General and specialist surgery supported by anaesthesia and theatre teams.", icon: Scissors, category: "Specialist care" },
  { title: "Orthopaedics & trauma", description: "Care for fractures, bone and joint conditions and injury rehabilitation.", icon: Bone, category: "Specialist care" },
  { title: "Eye care", description: "Eye examinations, treatment and specialist referral.", icon: Eye, category: "Specialist care" },
  { title: "Dental & ENT", description: "Dental treatment and care for ear, nose and throat conditions.", icon: Ear, category: "Specialist care" },
  { title: "Mental health", description: "Assessment, counselling and ongoing support for mental health needs.", icon: Brain, category: "Specialist care" },
  { title: "Laboratory", description: "Diagnostic laboratory services available around the clock.", icon: Microscope, category: "Diagnostics" },
  { title: "Imaging & radiology", description: "X-ray and ultrasound to support diagnosis across all departments.", icon: Scan, category: "Diagnostics" },
  { title: "Pharmacy", description: "Dispensing and medicines guidance for inpatients and outpatients.", icon: Pill, category: "Diagnostics" },
  { title: "Immunisation & child health", description: "Routine immunisation and growth monitoring for children and families.", icon: Syringe, category: "Preventive care" },
  { title: "Public health & outreach", description: "Community health education, screening and outreach across the region.", icon: Activity, category: "Preventive care" },
];

export const serviceCategories = ["Emergency & critical care", "Everyday care", "Women & families", "Specialist care", "Diagnostics", "Preventive care"];

export const criticalUnits = [
  { icon: Ambulance, title: "24/7 casualty & resuscitation", text: "Emergency assessment and stabilisation for patients arriving by ambulance or on foot." },
  { icon: Wind, title: "Medical oxygen supply", text: "Piped and cylinder oxygen supporting theatre, critical care and newborn units." },
  { icon: Droplets, title: "Blood transfusion support", text: "Safe blood supply for surgery, maternity emergencies and severe anaemia." },
  { icon: Scan, title: "Round-the-clock diagnostics", text: "Laboratory and imaging support so treatment decisions are not delayed." },
];

export const referralSteps = [
  { step: "01", title: "Send the referral", text: "Referring clinicians complete the standard referral form with the diagnosis, treatment given so far and reason for referral." },
  { step: "02", title: "Call ahead", text: "Phone the hospital before transferring a patient so the receiving team and any critical care support can be prepared." },
  { step: "03", title: "Arrive at casualty", text: "All referred and emergency patients are received at the accident & emergency unit for triage, day or night." },
  { step: "04", title: "Feedback to the facility", text: "After treatment, patients are discharged back to their nearest facility with notes for continued follow-up care." },
];

export const clinicTimetable = [
  { day: "Monday", clinics: "Chronic care: hypertension, diabetes & general medicine review" },
  { day: "Tuesday", clinics: "Paediatrics, newborn follow-up & child health" },
  { day: "Wednesday", clinics: "Surgery, orthopaedics & trauma review" },
  { day: "Thursday", clinics: "Antenatal, high-risk pregnancy & gynaecology" },
  { day: "Friday", clinics: "Eye, dental, ENT & mental health" },
  { day: "Saturday & Sunday", clinics: "Emergency and casualty care only" },
];

export const visitingHours = [
  { period: "Morning", time: "7:00 – 8:00 am" },
  { period: "Afternoon", time: "1:00 – 2:00 pm" },
  { period: "Evening", time: "5:00 – 7:00 pm" },
];

export const patientRights = [
  "To be treated with dignity, courtesy and respect, whoever you are.",
  "To have your condition and treatment explained in a language you understand.",
  "To give or withhold consent before any procedure.",
  "To privacy and confidentiality of your health information.",
  "To know the name and role of the staff caring for you.",
  "To raise a complaint or give feedback without fear.",
];

export const patientResponsibilities = [
  "Bring your referral letter, patient card and any previous results.",
  "Share your full health history honestly with the care team.",
  "Follow treatment advice and keep your follow-up appointments.",
  "Treat staff and other patients with respect and keep wards calm.",
  "Help keep the hospital clean and observe infection prevention guidance.",
];

export const admissionChecklist = [
  "Referral letter or patient card",
  "National ID or child health card",
  "Previous laboratory or imaging results",
  "A change of clothing and basic toiletries",
  "One attendant to support you where allowed",
];

export const training = [
  { icon: GraduationCap, title: "Medical internship training", text: "A training site for intern doctors, nurses, midwives and laboratory staff gaining supervised clinical experience." },
  { icon: Stethoscope, title: "Continuing professional development", text: "Regular clinical meetings and skills updates for staff and for clinicians in the facilities we support." },
  { icon: Activity, title: "Partnership & research", text: "Working with national health authorities, training institutions and partners to strengthen care across the region." },
];

export const updates = [
  { date: "16 Sep 2026", category: "Community care", title: "Specialists come together for the Buganda surgical camp", description: "Surgical specialists and healthcare teams joined forces to bring quality surgical services closer to the community.", href: "https://x.com/EntebbeRRH/status/2100071690982019079", image: "surgery" },
  { date: "07 Sep 2026", category: "Hospital news", title: "A new welcome at Entebbe Regional Referral Hospital", description: "The hospital unveiled its newly built gates as part of its commitment to a better environment for patients, staff and visitors.", href: "https://x.com/EntebbeRRH/status/2096983196931932181", image: "exterior" },
  { date: "28 Jul 2026", category: "Child health", title: "Highlighting childhood immunisation in Entebbe", description: "Visitors observed ongoing childhood immunisation services at the facility and met the teams behind them.", href: "https://x.com/EntebbeRRH/status/2082096166661951708", image: "immunisation" },
];
