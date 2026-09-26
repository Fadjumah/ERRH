import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, ChevronRight, Clock3, HeartPulse, MapPin, Phone, ShieldPlus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { directionsUrl, phoneHref, services, updates } from "@/lib/hospital";
import exterior from "@/assets/hospital-exterior.jpg.asset.json";
import team from "@/assets/hospital-team.jpg.asset.json";
import immunisation from "@/assets/immunisation.jpg.asset.json";
import surgery from "@/assets/surgical-camp.jpg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "Entebbe Regional Referral Hospital | Quality Healthcare Close to You" },
    { name: "description", content: "Explore patient services, care, hospital news and directions to Entebbe Regional Referral Hospital in Uganda." },
    { property: "og:title", content: "Entebbe Regional Referral Hospital | Quality Healthcare Close to You" },
    { property: "og:description", content: "Explore patient services, care, hospital news and directions to Entebbe Regional Referral Hospital in Uganda." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: Home,
});

function Home() {
  const newsImages: Record<string, string> = { surgery: surgery.url, exterior: exterior.url, immunisation: immunisation.url };
  return <>
    <section className="relative min-h-[650px] overflow-hidden bg-forest text-forest-foreground sm:min-h-[630px] lg:min-h-[660px]">
      <img src={exterior.url} alt="Entebbe Regional Referral Hospital building" className="absolute inset-0 size-full object-cover object-[62%_center] sm:object-center" fetchPriority="high" />
      <div className="hero-shade absolute inset-0" />
      <div className="site-container relative flex min-h-[650px] items-end pb-16 pt-24 sm:min-h-[630px] sm:items-center sm:pb-20 lg:min-h-[660px]">
        <div className="max-w-[760px]">
          <div className="mb-7 flex items-center gap-3"><span className="h-px w-10 bg-sun" /><span className="eyebrow text-sun">Here for our community</span></div>
          <h1 className="max-w-[760px] text-[clamp(3.2rem,7vw,6.3rem)] font-semibold leading-[.99] tracking-[-.045em]">Entebbe Regional<br className="hidden sm:block" /> Referral Hospital<span className="text-sun">.</span></h1>
          <p className="mt-7 max-w-[530px] text-base leading-7 text-forest-foreground/90 sm:text-lg sm:leading-8">Quality healthcare close to you. Compassionate care, skilled teams and a healthier future for every family we serve.</p>
          <div className="mt-9 flex flex-wrap gap-3"><Button asChild variant="sun" size="lg" className="h-12 px-6"><Link to="/services">Explore our services <ArrowUpRight /></Link></Button><Button asChild variant="light" size="lg" className="h-12 px-6"><Link to="/contact">Plan your visit <ArrowRight /></Link></Button></div>
        </div>
      </div>
      <div className="absolute bottom-0 right-0 hidden bg-sun px-8 py-5 text-sun-foreground lg:flex lg:items-center lg:gap-8"><span className="eyebrow">Entebbe, Uganda</span><span className="h-6 w-px bg-sun-foreground/30" /><span className="text-sm font-semibold">Care that puts people first</span></div>
    </section>

    <section className="bg-sage text-sage-foreground"><div className="site-container grid grid-cols-1 divide-y divide-primary/15 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
      <Link to="/services" className="group flex min-h-28 items-center gap-4 py-5 sm:px-5 lg:px-9 first:pl-0"><span className="grid size-11 shrink-0 place-items-center rounded-sm bg-background"><HeartPulse className="size-5" /></span><span className="min-w-0 flex-1"><strong className="block text-sm font-bold">Find the care you need</strong><small className="mt-1 block text-xs text-ink-soft">Explore our services</small></span><ChevronRight className="size-4 shrink-0 transition-transform group-hover:translate-x-1" /></Link>
      <a href={phoneHref} className="group flex min-h-28 items-center gap-4 py-5 sm:px-5 lg:px-9"><span className="grid size-11 shrink-0 place-items-center rounded-sm bg-background"><Phone className="size-5" /></span><span className="min-w-0 flex-1"><strong className="block text-sm font-bold">Speak to our team</strong><small className="mt-1 block text-xs text-ink-soft">Call the hospital</small></span><ChevronRight className="size-4 shrink-0 transition-transform group-hover:translate-x-1" /></a>
      <a href={directionsUrl} target="_blank" rel="noreferrer" className="group flex min-h-28 items-center gap-4 py-5 sm:px-5 lg:px-9 last:pr-0"><span className="grid size-11 shrink-0 place-items-center rounded-sm bg-background"><MapPin className="size-5" /></span><span className="min-w-0 flex-1"><strong className="block text-sm font-bold">Find your way here</strong><small className="mt-1 block text-xs text-ink-soft">Nsamizi Road, Entebbe</small></span><ChevronRight className="size-4 shrink-0 transition-transform group-hover:translate-x-1" /></a>
    </div></section>

    <section className="py-20 lg:py-28"><div className="site-container"><div className="flex flex-col justify-between gap-7 md:flex-row md:items-end"><div><p className="eyebrow mb-5 text-primary">How we care for you</p><h2 className="section-title max-w-[610px]">The right care,<br />at the right time<span className="text-primary">.</span></h2></div><div className="max-w-sm"><p className="text-sm leading-7 text-ink-soft">From everyday health needs to specialist treatment, our teams are here for you and your family.</p><Link to="/services" className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-primary hover:underline">View all services <ArrowUpRight className="size-4" /></Link></div></div>
      <div className="mt-12 grid gap-3 md:grid-cols-2 lg:grid-cols-4">{services.slice(0,4).map((service, i) => <Link to="/services" key={service.title} className="group flex min-h-[255px] flex-col justify-between border border-border bg-card p-6 transition-colors hover:bg-sage"><div className="flex justify-between"><span className="grid size-12 place-items-center rounded-sm bg-sage text-primary"><service.icon className="size-6" strokeWidth={1.6} /></span><span className="text-xs text-muted-foreground">0{i+1}</span></div><div><h3 className="text-xl font-semibold text-foreground">{service.title}</h3><p className="mt-3 text-sm leading-6 text-muted-foreground">{service.description}</p></div><ArrowUpRight className="size-4 text-primary transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" /></Link>)}</div>
    </div></section>

    <section className="bg-forest text-forest-foreground"><div className="grid lg:grid-cols-2"><div className="min-h-[420px] lg:min-h-[570px]"><img src={team.url} alt="Hospital team and guests gathered outside Entebbe Regional Referral Hospital" className="size-full object-cover" loading="lazy" /></div><div className="flex items-center px-6 py-16 sm:px-12 lg:px-[min(7vw,100px)]"><div className="max-w-lg"><p className="eyebrow mb-6 text-sun">A hospital for our people</p><h2 className="section-title">People at the heart of everything we do<span className="text-sun">.</span></h2><p className="mt-7 text-base leading-8 text-forest-foreground/75">We believe quality care begins with listening. Our hospital brings together dedicated professionals, essential services and a shared commitment to the communities of Entebbe and beyond.</p><div className="mt-9 flex gap-6 border-t border-forest-foreground/20 pt-7"><ShieldPlus className="mt-1 size-8 shrink-0 text-sun" /><div><strong className="block text-lg">Care with purpose</strong><p className="mt-2 text-sm leading-6 text-forest-foreground/70">Working together to make every visit a more supportive experience.</p></div></div><Button asChild variant="sun" size="lg" className="mt-9"><Link to="/about">Get to know us <ArrowUpRight /></Link></Button></div></div></div></section>

    <section className="py-20 lg:py-28"><div className="site-container"><div className="flex items-end justify-between gap-6"><div><p className="eyebrow mb-5 text-primary">From our hospital</p><h2 className="section-title">News & community<span className="text-primary">.</span></h2></div><Link to="/updates" className="hidden items-center gap-2 text-sm font-bold text-primary hover:underline sm:inline-flex">See all updates <ArrowUpRight className="size-4" /></Link></div><div className="mt-11 grid gap-5 md:grid-cols-3">{updates.map(item => <a key={item.title} href={item.href} target="_blank" rel="noreferrer" className="group"><div className="aspect-[1.44] overflow-hidden bg-sage"><img src={newsImages[item.image]} alt={item.title} loading="lazy" className="size-full object-cover transition-transform duration-500 group-hover:scale-105" /></div><div className="mt-5 flex items-center gap-3 text-xs font-bold uppercase tracking-[.08em] text-primary"><span>{item.category}</span><span className="size-1 rounded-full bg-sun" /><span className="text-muted-foreground">{item.date}</span></div><h3 className="mt-3 text-xl font-semibold leading-snug group-hover:text-primary">{item.title}</h3><span className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-primary">Read on X <ArrowUpRight className="size-4" /></span></a>)}</div><Link to="/updates" className="mt-9 inline-flex items-center gap-2 text-sm font-bold text-primary sm:hidden">See all updates <ArrowRight className="size-4" /></Link></div></section>

    <section className="bg-sun text-sun-foreground"><div className="site-container flex flex-col gap-6 py-10 md:flex-row md:items-center md:justify-between"><div className="flex items-start gap-5"><Clock3 className="mt-1 size-9 shrink-0" strokeWidth={1.5} /><div><h2 className="text-xl font-semibold">Need laboratory services?</h2><p className="mt-1 text-sm text-sun-foreground/80">Our laboratory is available 24 hours a day, 7 days a week.</p></div></div><Button asChild variant="forest" size="lg"><Link to="/contact">Get directions <ArrowUpRight /></Link></Button></div></section>
  </>;
}