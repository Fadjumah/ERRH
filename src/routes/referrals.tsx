import { createFileRoute, Link } from "@tanstack/react-router";
import { Ambulance, ArrowUpRight, MapPin, Phone, Siren } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { Button } from "@/components/ui/button";
import { catchment, criticalUnits, directionsUrl, phone, phoneHref, referralSteps } from "@/lib/hospital";

export const Route = createFileRoute("/referrals")({ head: () => ({ meta: [
  { title: "Referrals & Emergency Care | Entebbe Regional Referral Hospital" },
  { name: "description", content: "How health centres and clinicians refer patients to Entebbe Regional Referral Hospital, and how emergency and casualty care works 24 hours a day." },
  { property: "og:title", content: "Referrals & Emergency Care | Entebbe Regional Referral Hospital" },
  { property: "og:description", content: "Referral pathway, emergency access and critical care support for the region we serve." },
  { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
] }), component: ReferralsPage });

function ReferralsPage() {
  return <>
    <PageHero eyebrow="Referrals & emergency" title="The referral hospital for our region." description="How patients reach us from health centres and district facilities, and how emergency care works day and night." />

    <section className="bg-sun text-sun-foreground"><div className="site-container flex flex-col gap-6 py-10 md:flex-row md:items-center md:justify-between">
      <div className="flex items-start gap-5"><Siren className="mt-1 size-9 shrink-0" strokeWidth={1.5} /><div><h2 className="text-xl font-semibold">In an emergency, come straight to casualty</h2><p className="mt-1 max-w-2xl text-sm text-sun-foreground/85">Our accident & emergency unit receives patients 24 hours a day, every day. Do not wait for a clinic day.</p></div></div>
      <div className="flex flex-wrap gap-3"><Button asChild variant="forest" size="lg"><a href={phoneHref}><Phone /> {phone}</a></Button><Button asChild variant="outline" size="lg"><a href={directionsUrl} target="_blank" rel="noreferrer"><MapPin /> Directions</a></Button></div>
    </div></section>

    <section className="py-16 lg:py-24"><div className="site-container">
      <p className="eyebrow mb-5 text-primary">For referring facilities</p>
      <h2 className="section-title max-w-3xl">Referring a patient to us<span className="text-primary">.</span></h2>
      <p className="mt-5 max-w-2xl text-sm leading-7 text-ink-soft">We receive patients referred from health centre IVs, health centre IIIs, district facilities and private clinics across the region, as well as patients who arrive directly in an emergency.</p>
      <div className="mt-12 grid gap-3 md:grid-cols-2 lg:grid-cols-4">{referralSteps.map(item => <div key={item.step} className="flex min-h-[240px] flex-col border border-border bg-card p-7"><span className="text-3xl font-semibold text-sun">{item.step}</span><h3 className="mt-auto pt-8 text-xl font-semibold text-forest">{item.title}</h3><p className="mt-3 text-sm leading-6 text-muted-foreground">{item.text}</p></div>)}</div>
    </div></section>

    <section className="bg-forest text-forest-foreground py-16 lg:py-24"><div className="site-container">
      <p className="eyebrow mb-5 text-sun">Critical care support</p>
      <h2 className="section-title max-w-2xl">Ready for the patients others refer<span className="text-sun">.</span></h2>
      <div className="mt-11 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">{criticalUnits.map(unit => <div key={unit.title} className="border-t border-forest-foreground/25 pt-6"><unit.icon className="size-8 text-sun" strokeWidth={1.5} /><h3 className="mt-6 text-lg font-semibold">{unit.title}</h3><p className="mt-3 text-sm leading-6 text-forest-foreground/75">{unit.text}</p></div>)}</div>
    </div></section>

    <section className="py-16 lg:py-24"><div className="site-container grid gap-10 lg:grid-cols-[.9fr_1.1fr] lg:gap-16 lg:items-center">
      <div><p className="eyebrow mb-5 text-primary">The region we serve</p><h2 className="section-title">Care for the whole catchment<span className="text-primary">.</span></h2><p className="mt-5 text-sm leading-7 text-ink-soft">As a regional referral hospital we support the health facilities and communities of the Entebbe peninsula and the districts around it, including island communities reached by water.</p></div>
      <div className="grid gap-3 sm:grid-cols-2">{catchment.map(area => <div key={area} className="flex items-center gap-4 border border-border bg-card p-6"><MapPin className="size-5 shrink-0 text-primary" /><span className="font-semibold text-forest">{area}</span></div>)}</div>
    </div></section>

    <section className="bg-sage py-14"><div className="site-container flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex items-start gap-5"><Ambulance className="mt-1 size-9 shrink-0 text-primary" strokeWidth={1.5} /><div><h2 className="text-2xl font-semibold text-forest">Transferring a patient today?</h2><p className="mt-2 text-sm leading-7 text-ink-soft">Call ahead so the receiving team is ready when the ambulance arrives.</p></div></div>
      <Button asChild variant="forest" size="lg"><Link to="/contact">Contact & directions <ArrowUpRight /></Link></Button>
    </div></section>
  </>;
}
