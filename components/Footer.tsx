import Link from "next/link";
import Image from "next/image";
import { navItems, siteConfig } from "@/lib/site";
import { properties } from "@/lib/properties";

export function Footer() {
  const year = new Date().getFullYear();
  const primaryPhone = siteConfig.phones[0];

  return (
    <footer className="bg-charcoal text-cream">
      <div className="container-hbl grid gap-10 py-12 sm:gap-12 sm:py-16 md:grid-cols-2 lg:grid-cols-4 lg:py-20">
        <div className="md:col-span-2 lg:col-span-1">
          <Image
            src={siteConfig.logo}
            alt={`${siteConfig.name} logo`}
            width={160}
            height={64}
            className="h-12 w-auto sm:h-14"
          />
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-cream/60 sm:mt-6">
            {siteConfig.description}
          </p>
        </div>

        <div>
          <h3 className="eyebrow text-gold-light">Explore</h3>
          <ul className="mt-4 space-y-2.5 sm:mt-5 sm:space-y-3">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="inline-flex min-h-[36px] items-center text-sm text-cream/70 transition-colors hover:text-gold"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="eyebrow text-gold-light">Our Hotels</h3>
          <ul className="mt-4 space-y-2.5 sm:mt-5 sm:space-y-3">
            {properties.map((property) => (
              <li key={property.slug}>
                <Link
                  href={`/properties/${property.slug}`}
                  className="inline-block text-sm text-cream/70 transition-colors hover:text-gold"
                >
                  {property.name}
                  <span className="block text-xs text-cream/40">
                    {property.location}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="eyebrow text-gold-light">Get in Touch</h3>
          <ul className="mt-4 space-y-2.5 text-sm text-cream/70 sm:mt-5 sm:space-y-3">
            <li>
              <a
                href={`mailto:${siteConfig.email}`}
                className="inline-flex min-h-[36px] items-center transition-colors hover:text-gold"
              >
                {siteConfig.email}
              </a>
            </li>
            <li>
              <a
                href={primaryPhone.tel}
                className="inline-flex min-h-[36px] items-center font-serif text-lg font-light text-cream/90 transition-colors hover:text-gold sm:text-xl"
              >
                {siteConfig.phoneDisplay}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-cream/10">
        <div className="container-hbl flex flex-col items-center justify-between gap-3 py-5 text-center text-xs text-cream/40 sm:flex-row sm:py-6 sm:text-left">
          <p>
            &copy; {year} {siteConfig.name}. All rights reserved.
          </p>
          <p className="uppercase tracking-widest">{siteConfig.tagline}</p>
        </div>
      </div>
    </footer>
  );
}
