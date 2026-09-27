import { Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, Clock3, MapPin, Menu, Phone, Siren, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { directionsUrl, governmentLine, hospitalName, phone, phoneHref } from "@/lib/hospital";

const navigation = [
  { to: "/" as const, label: "Home" },
  { to: "/services" as const, label: "Services" },
  { to: "/patients" as const, label: "Patients & visitors" },
  { to: "/referrals" as const, label: "Referrals & emergency" },
  { to: "/about" as const, label: "About us" },
  { to: "/updates" as const, label: "News" },
  { to: "/contact" as const, label: "Contact" },
];

function Mark({ inverse = false }: { inverse?: boolean }) {
  return <span aria-hidden="true" className={`grid size-10 shrink-0 place-items-center rounded-sm ${inverse ? "bg-sun text-sun-foreground" : "bg-primary text-primary-foreground"}`}><span className="text-[25px] font-bold leading-none">✳</span></span>;
}

export function Header() {
  const [open, setOpen] = useState(false);
  return <header className="relative z-30 bg-background">
    <div className="bg-forest text-forest-foreground">
      <div className="site-container flex h-9 items-center justify-between gap-4 text-[11px] font-medium sm:text-xs">
        <span className="flex items-center gap-2"><MapPin className="size-3.5 text-sun" /> Nsamizi Road, Entebbe, Uganda</span>
        <a href={phoneHref} className="flex items-center gap-2 hover:underline"><Phone className="size-3.5 text-sun" /> <span className="hidden sm:inline">Call us:</span> {phone}</a>
      </div>
    </div>
    <div className="site-container flex h-[76px] items-center justify-between gap-6 lg:h-[88px]">
      <Link to="/" onClick={() => setOpen(false)} className="flex min-w-0 items-center gap-3" aria-label="Entebbe Regional Referral Hospital home">
        <Mark /><span className="max-w-[210px] text-[13px] font-bold leading-[1.12] text-forest sm:text-[16px]">Entebbe Regional<br />Referral Hospital</span>
      </Link>
      <nav className="hidden items-center gap-7 lg:flex" aria-label="Main navigation">
        {navigation.map(item => <Link key={item.to} to={item.to} activeOptions={{ exact: true }} className="text-[13px] font-semibold text-ink-soft transition-colors hover:text-primary" activeProps={{ className: "text-primary" }}>{item.label}</Link>)}
      </nav>
      <div className="hidden lg:block"><Button asChild variant="forest" size="lg"><Link to="/contact">Plan your visit <ArrowUpRight /></Link></Button></div>
      <Button variant="ghost" size="icon" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} className="lg:hidden" onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</Button>
    </div>
    {open && <nav className="absolute inset-x-0 top-full border-t border-border bg-background px-5 py-4 shadow-lg lg:hidden" aria-label="Mobile navigation">
      {navigation.map(item => <Link key={item.to} to={item.to} onClick={() => setOpen(false)} className="block border-b border-border py-3 text-base font-semibold text-forest">{item.label}</Link>)}
      <Button asChild variant="forest" className="mt-5 w-full"><Link to="/contact" onClick={() => setOpen(false)}>Plan your visit <ArrowRight /></Link></Button>
    </nav>}
  </header>;
}

export function Footer() {
  return <footer className="bg-forest text-forest-foreground">
    <div className="site-container grid gap-10 py-16 md:grid-cols-[1.5fr_1fr_1fr] md:gap-16 lg:py-20">
      <div><div className="flex items-center gap-3"><Mark inverse /><span className="text-lg font-bold leading-tight">Entebbe Regional<br />Referral Hospital</span></div><p className="mt-6 max-w-sm text-sm leading-7 text-forest-foreground/75">Quality healthcare close to you. Serving Entebbe and surrounding communities with compassion, expertise and a commitment to better health.</p></div>
      <div><h2 className="eyebrow text-sun">Explore</h2><div className="mt-6 grid gap-3">{navigation.map(item => <Link key={item.to} to={item.to} className="w-fit text-sm text-forest-foreground/80 hover:text-sun">{item.label}</Link>)}</div></div>
      <div><h2 className="eyebrow text-sun">Visit & contact</h2><div className="mt-6 grid gap-4 text-sm text-forest-foreground/80"><a href={directionsUrl} target="_blank" rel="noreferrer" className="flex gap-3 hover:text-sun"><MapPin className="mt-0.5 size-4 shrink-0" /> Nsamizi Road, Entebbe, Uganda</a><a href={phoneHref} className="flex gap-3 hover:text-sun"><Phone className="size-4 shrink-0" /> {phone}</a><span className="flex gap-3"><Clock3 className="size-4 shrink-0" /> Laboratory services: 24/7</span><a href="https://x.com/EntebbeRRH" target="_blank" rel="noreferrer" className="flex gap-3 hover:text-sun">Follow updates on X <ArrowUpRight className="size-4" /></a></div></div>
    </div>
    <div className="border-t border-forest-foreground/15"><div className="site-container flex flex-col justify-between gap-2 py-5 text-xs text-forest-foreground/60 sm:flex-row"><span>© {new Date().getFullYear()} {hospitalName}</span><span>Public healthcare in Entebbe, Uganda</span></div></div>
  </footer>;
}