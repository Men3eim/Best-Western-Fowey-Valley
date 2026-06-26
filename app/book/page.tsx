import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Hero } from "@/components/Hero";
import { SectionReveal } from "@/components/SectionReveal";
import { properties } from "@/lib/properties";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Book With Us",
  description:
    "Book your stay at HBL Hotels. Reserve Tor Park Hotel through our trusted booking partner, or contact our team to plan your visit.",
};

export default function BookPage() {
  return (
    <>
      <Hero
        eyebrow="Reserve Your Stay"
        title="Book with us"
        subtitle="Choose your hotel below to check availability and book directly through our trusted booking partners. Prefer a personal touch? Our team is always happy to help."
        size="medium"
      />

      <section className="section-py bg-cream">
        <div className="container-hbl space-y-8">
          {properties.map((property, index) => (
            <SectionReveal key={property.slug} delay={index * 0.08}>
              <div className="grid overflow-hidden rounded-2xl border border-charcoal/10 bg-cream-50 lg:grid-cols-12">
                <div className="relative aspect-[16/10] min-h-[12rem] lg:col-span-5 lg:aspect-auto lg:min-h-[20rem]">
                  {property.cardImage ? (
                    <Image
                      src={property.cardImage}
                      alt={property.name}
                      fill
                      sizes="(max-width: 1024px) 100vw, 40vw"
                      className="object-cover"
                    />
                  ) : (
                    <div className="flex h-full min-h-[14rem] items-center justify-center bg-gradient-to-br from-forest-light via-forest to-charcoal">
                      <span className="font-serif text-5xl font-light text-cream/15">
                        {property.shortName}
                      </span>
                    </div>
                  )}
                </div>

                <div className="flex flex-col justify-center gap-4 p-6 sm:gap-5 sm:p-8 lg:col-span-7 lg:p-12">
                  <div>
                    <p className="eyebrow">{property.region}</p>
                    <h2 className="heading-serif mt-3 text-3xl text-charcoal lg:text-4xl">
                      {property.name}
                    </h2>
                    <p className="mt-2 text-sm text-charcoal/60">
                      {property.location}
                    </p>
                  </div>
                  <p className="max-w-xl text-base leading-relaxed text-charcoal/70">
                    {property.intro}
                  </p>
                  <div className="flex flex-wrap gap-4 pt-2">
                    {property.bookingUrl ? (
                      <a
                        href={property.bookingUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary"
                      >
                        Book With Us
                      </a>
                    ) : (
                      <span className="inline-flex items-center rounded-full border border-charcoal/20 px-5 py-3 text-xs font-medium uppercase tracking-widest text-charcoal/50">
                        Online Booking Coming Soon
                      </span>
                    )}
                    <Link
                      href={`/properties/${property.slug}`}
                      className="btn-outline"
                    >
                      View Hotel
                    </Link>
                  </div>
                </div>
              </div>
            </SectionReveal>
          ))}
        </div>
      </section>

      <section className="bg-forest text-cream">
        <div className="container-hbl flex flex-col items-center gap-5 py-16 text-center sm:gap-6 sm:py-20 lg:py-24">
          <p className="eyebrow text-gold-light">Prefer to Speak with Us?</p>
          <h2 className="heading-serif max-w-2xl text-3xl text-cream sm:text-4xl">
            We&apos;re here to help you plan
          </h2>
          <p className="max-w-xl text-base leading-relaxed text-cream/75">
            For special requests, group stays or any questions about your visit,
            our team would be delighted to assist.
          </p>
          <div className="mt-2 flex w-full max-w-md flex-col gap-3 sm:max-w-none sm:flex-row sm:flex-wrap sm:justify-center sm:gap-4">
            <a href={`mailto:${siteConfig.email}`} className="btn-light">
              Email Us
            </a>
            <a href={siteConfig.phones[0].tel} className="btn-light">
              Call {siteConfig.phoneDisplay}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
