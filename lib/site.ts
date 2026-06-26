export const siteConfig = {
  name: "HBL Hotels",
  tagline: "Heartfelt British hospitality",
  description:
    "A UK hospitality collection welcoming guests to a family of characterful hotels.",
  email: "stay@hblhotels.co.uk",
  /** Display string for caller ID */
  phoneDisplay: "01803 424631 / 569",
  phones: [
    { label: "01803 424631", tel: "+441803424631" },
    { label: "569", tel: "+441803424569" },
  ],
  logo: "/Logo/HBL.png",
};

export type NavItem = {
  label: string;
  href: string;
};

export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Our Hotels", href: "/#hotels" },
  { label: "Services", href: "/services" },
  { label: "Book With Us", href: "/book" },
  { label: "Contact", href: "/contact" },
];

export function isNavActive(pathname: string, href: string): boolean {
  if (href === "/") return pathname === "/";
  if (href.startsWith("/#")) return false;
  return pathname === href || pathname.startsWith(`${href}/`);
}
