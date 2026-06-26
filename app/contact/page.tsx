import type { Metadata } from "next";
import Link from "next/link";
import { Hero } from "@/components/Hero";
import { SectionReveal } from "@/components/SectionReveal";
import { properties } from "@/lib/properties";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with HBL Hotels. Contact our team by phone or email to plan your stay at Tor Park or Fowey Valley.",
};

export default function ContactPage() {
  return (
    <>
      <Hero
        eyebrow="Get in Touch"
        title="Contact us"
        subtitle="We would love to hear from you. Reach out to our team with any questions about our hotels, services or your upcoming stay."
        size="medium"
      />

      <section className="section-py bg-cream">
        <div className="container-hbl grid gap-12 lg:grid-cols-12 lg:gap-16">
          <SectionReveal className="lg:col-span-5">
            <p className="eyebrow">Reach the Team</p>
            <h2 className="heading-serif mt-5 text-3xl text-charcoal sm:text-4xl lg:text-5xl">
              Always happy to help
            </h2>
            <p className="mt-6 text-base leading-relaxed text-charcoal/70">
              Whether you are planning a visit, have a special request or simply
              want to know more, our team is on hand to make things easy.
            </p>
          </SectionReveal>

          <SectionReveal className="lg:col-span-7" delay={0.1}>
            <div className="grid gap-px overflow-hidden rounded-2xl bg-charcoal/10 sm:grid-cols-2">
              <div className="bg-cream-50 p-8 lg:p-10">
                <p className="eyebrow">Email</p>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="mt-4 block font-serif text-2xl font-light text-charcoal transition-colors hover:text-gold"
                >
                  {siteConfig.email}
                </a>
                <p className="mt-3 text-sm text-charcoal/60">
                  We aim to respond within one working day.
                </p>
              </div>
              <div className="bg-cream-50 p-6 sm:p-8 lg:p-10">
                <p className="eyebrow">Phone</p>
                <div className="mt-4 space-y-2">
                  {siteConfig.phones.map((phone) => (
                    <a
                      key={phone.tel}
                      href={phone.tel}
                      className="block font-serif text-xl font-light text-charcoal transition-colors hover:text-gold sm:text-2xl"
                    >
                      {phone.label}
                    </a>
                  ))}
                </div>
                <p className="mt-3 text-sm text-charcoal/60">
                  Reception teams are available daily.
                </p>
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>

      <section className="section-py-sm bg-cream-50">
        <div className="container-hbl">
          <SectionReveal className="max-w-2xl">
            <p className="eyebrow">Our Hotels</p>
            <h2 className="heading-serif mt-5 text-3xl text-charcoal sm:text-4xl">
              Where to find us
            </h2>
          </SectionReveal>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {properties.map((property, index) => (
              <SectionReveal key={property.slug} delay={index * 0.08}>
                <div className="flex h-full flex-col justify-between rounded-2xl border border-charcoal/10 bg-cream p-8 lg:p-10">
                  <div>
                    <p className="eyebrow">{property.region}</p>
                    <h3 className="mt-3 font-serif text-2xl font-light text-charcoal lg:text-3xl">
                      {property.name}
                    </h3>
                    <p className="mt-2 text-sm text-charcoal/60">
                      {property.location}
                    </p>
                    <p className="mt-4 max-w-md text-sm leading-relaxed text-charcoal/65">
                      {property.tagline}
                    </p>
                  </div>
                  <Link
                    href={`/properties/${property.slug}`}
                    className="link-underline mt-8"
                  >
                    View hotel
                  </Link>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
