import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, BadgeCheck, CalendarDays, ClipboardList, Clock3, Phone, ShieldPlus, Users } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { Button } from "@/components/ui/button";
import { admissionChecklist, clinicTimetable, patientResponsibilities, patientRights, phoneHref, visitingHours } from "@/lib/hospital";

export const Route = createFileRoute("/patients")({ head: () => ({ meta: [
  { title: "Patients & Visitors | Entebbe Regional Referral Hospital" },
  { name: "description", content: "Clinic days, ward visiting hours, what to bring for admission, and patient rights and responsibilities at Entebbe Regional Referral Hospital." },
  { property: "og:title", content: "Patients & Visitors | Entebbe Regional Referral Hospital" },
  { property: "og:description", content: "Plan your visit: clinic days, visiting hours, admission checklist and your rights as a patient." },
  { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
] }), component: PatientsPage });

function PatientsPage() {
  return <>
    <PageHero eyebrow="Patients & visitors" title="Everything you need before you come." description="Clinic days, visiting hours, what to bring and what you can expect from us as a patient." />

    <section className="py-16 lg:py-24"><div className="site-container grid gap-12 lg:grid-cols-[1.1fr_.9fr] lg:gap-16">
      <div>
        <div className="flex items-center gap-3 text-primary"><CalendarDays className="size-7" /><span className="eyebrow">Outpatient clinic days</span></div>
        <h2 className="section-title mt-5">When each clinic runs<span className="text-primary">.</span></h2>
        <p className="mt-5 max-w-xl text-sm leading-7 text-ink-soft">Specialist outpatient clinics run on set days so you meet the right team. Emergency and casualty care is available at all times, including weekends.</p>
        <div className="mt-9 divide-y divide-border border-y border-border">{clinicTimetable.map(row => <div key={row.day} className="flex flex-col gap-1 py-5 sm:flex-row sm:gap-8"><span className="w-44 shrink-0 font-semibold text-forest">{row.day}</span><span className="text-sm leading-6 text-ink-soft">{row.clinics}</span></div>)}</div>
        <p className="mt-6 text-xs leading-6 text-muted-foreground">Clinic days can change with staffing and emergencies. Please call the hospital to confirm before travelling.</p>
      </div>
      <div className="h-fit bg-sage p-8">
        <div className="flex items-center gap-3 text-primary"><Clock3 className="size-6" /><span className="eyebrow">Ward visiting hours</span></div>
        <div className="mt-7 grid gap-4">{visitingHours.map(slot => <div key={slot.period} className="flex items-center justify-between border-b border-primary/15 pb-3"><span className="font-semibold text-forest">{slot.period}</span><span className="text-sm text-ink-soft">{slot.time}</span></div>)}</div>
        <p className="mt-6 text-sm leading-7 text-ink-soft">To keep wards calm and safe, we ask for one attendant per patient where possible, and no visitors during ward rounds or procedures. Intensive care and newborn units may have different arrangements.</p>
        <Button asChild variant="forest" className="mt-7 w-full"><a href={phoneHref}><Phone /> Call before visiting</a></Button>
      </div>
    </div></section>

    <section className="bg-forest text-forest-foreground py-16 lg:py-24"><div className="site-container">
      <div className="flex items-center gap-3 text-sun"><ClipboardList className="size-7" /><span className="eyebrow">Coming for admission</span></div>
      <h2 className="section-title mt-5 max-w-2xl">What to bring with you<span className="text-sun">.</span></h2>
      <div className="mt-11 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">{admissionChecklist.map(item => <div key={item} className="border-t-2 border-sun/70 pt-5"><BadgeCheck className="size-6 text-sun" strokeWidth={1.6} /><p className="mt-4 text-sm leading-6 text-forest-foreground/85">{item}</p></div>)}</div>
    </div></section>

    <section className="py-16 lg:py-24"><div className="site-container">
      <div className="flex items-center gap-3 text-primary"><ShieldPlus className="size-7" /><span className="eyebrow">Patients’ charter</span></div>
      <h2 className="section-title mt-5 max-w-2xl">Your rights and responsibilities<span className="text-primary">.</span></h2>
      <p className="mt-5 max-w-2xl text-sm leading-7 text-ink-soft">As a public hospital we follow the national patients’ charter. It sets out what you can expect from us, and how we work together with you and your family.</p>
      <div className="mt-11 grid gap-10 md:grid-cols-2 md:gap-16">
        <div><h3 className="text-xl font-semibold text-forest">As a patient, you have the right</h3><ul className="mt-6 grid gap-4">{patientRights.map(item => <li key={item} className="flex gap-3 text-sm leading-6 text-ink-soft"><span className="mt-2 size-1.5 shrink-0 rounded-full bg-sun" />{item}</li>)}</ul></div>
        <div><h3 className="text-xl font-semibold text-forest">We ask that you</h3><ul className="mt-6 grid gap-4">{patientResponsibilities.map(item => <li key={item} className="flex gap-3 text-sm leading-6 text-ink-soft"><span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />{item}</li>)}</ul></div>
      </div>
    </div></section>

    <section className="bg-sage py-14"><div className="site-container flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex items-start gap-5"><Users className="mt-1 size-9 shrink-0 text-primary" strokeWidth={1.5} /><div><h2 className="text-2xl font-semibold text-forest">Feedback, questions or a complaint?</h2><p className="mt-2 max-w-xl text-sm leading-7 text-ink-soft">Speak to the nurse in charge of your ward or ask for the hospital administration. Your feedback helps us improve care for everyone.</p></div></div>
      <Button asChild variant="forest" size="lg"><Link to="/contact">Contact the hospital <ArrowUpRight /></Link></Button>
    </div></section>
  </>;
}
