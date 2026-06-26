import Link from "next/link";
import { Hero } from "@/components/Hero";
import { SectionReveal } from "@/components/SectionReveal";
import { ServicesGrid } from "@/components/ServicesGrid";
import { Gallery } from "@/components/Gallery";
import { ShowcaseCTA } from "@/components/ShowcaseCTA";
import type { Property } from "@/lib/properties";

type PropertyPageContentProps = {
  property: Property;
};

export function PropertyPageContent({ property }: PropertyPageContentProps) {
  const heroCtas = property.bookingUrl
    ? [
        {
          label: "Book With Us",
          href: property.bookingUrl,
          external: true,
          variant: "primary" as const,
        },
        { label: "Contact Us", href: "/contact", variant: "light" as const },
      ]
    : [{ label: "Contact Us", href: "/contact", variant: "light" as const }];

  return (
    <>
      <Hero
        eyebrow={property.region}
        title={property.name}
        subtitle={property.tagline}
        image={property.heroImage || undefined}
        imageAlt={property.name}
        ctas={heroCtas}
        size="tall"
      />

      {/* Intro */}
      <section className="section-py bg-cream">
        <div className="container-hbl grid gap-12 lg:grid-cols-12 lg:gap-16">
          <SectionReveal className="lg:col-span-5">
            <p className="eyebrow">{property.location}</p>
            <h2 className="heading-serif mt-4 text-2xl text-charcoal sm:mt-5 sm:text-4xl lg:text-5xl">
              {property.intro}
            </h2>
          </SectionReveal>
          <SectionReveal className="lg:col-span-7" delay={0.1}>
            <div className="space-y-6 text-base leading-relaxed text-charcoal/70 lg:text-lg">
              {property.description.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Highlights */}
      <section className="section-py-sm bg-cream-50">
        <div className="container-hbl grid gap-12 lg:grid-cols-12 lg:gap-16">
          <SectionReveal className="lg:col-span-4">
            <p className="eyebrow">Highlights</p>
            <h2 className="heading-serif mt-4 text-2xl text-charcoal sm:mt-5 sm:text-4xl">
              What you&apos;ll love
            </h2>
          </SectionReveal>
          <SectionReveal className="lg:col-span-8" delay={0.1}>
            <ul className="divide-y divide-charcoal/10 border-y border-charcoal/10">
              {property.highlights.map((highlight) => (
                <li
                  key={highlight}
                  className="flex items-center gap-4 py-5 text-base text-charcoal/75 lg:text-lg"
                >
                  <span className="font-serif text-gold">&mdash;</span>
                  {highlight}
                </li>
              ))}
            </ul>
          </SectionReveal>
        </div>
      </section>

      {/* Gallery */}
      {property.gallery.length > 0 && (
        <section className="section-py bg-cream">
          <div className="container-hbl">
            <SectionReveal className="max-w-2xl">
              <p className="eyebrow">Gallery</p>
              <h2 className="heading-serif mt-4 text-2xl text-charcoal sm:mt-5 sm:text-4xl lg:text-5xl">
                A look inside {property.shortName}
              </h2>
            </SectionReveal>
            <div className="mt-14 lg:mt-16">
              <Gallery images={property.gallery} />
            </div>
          </div>
        </section>
      )}

      {/* Services */}
      <section className="section-py bg-cream-50">
        <div className="container-hbl">
          <SectionReveal className="max-w-2xl">
            <p className="eyebrow">Services</p>
            <h2 className="heading-serif mt-4 text-2xl text-charcoal sm:mt-5 sm:text-4xl lg:text-5xl">
              Everything for a comfortable stay
            </h2>
          </SectionReveal>
          <div className="mt-14 lg:mt-16">
            <ServicesGrid
              items={property.services}
              columns={property.services.length >= 4 ? 4 : 3}
            />
          </div>
        </div>
      </section>

      <ShowcaseCTA
        eyebrow="Reserve Your Stay"
        title={`Stay at ${property.name}`}
        description={
          property.bookingUrl
            ? "Check availability and book your stay directly through our trusted booking partner."
            : "Detailed booking is coming soon. Get in touch with our team and we will be delighted to help you plan a stay."
        }
        buttons={
          property.bookingUrl
            ? [
                {
                  label: "Book With Us",
                  href: property.bookingUrl,
                  external: true,
                  variant: "light",
                },
                { label: "Contact Us", href: "/contact", variant: "light" },
              ]
            : [{ label: "Contact Us", href: "/contact", variant: "light" }]
        }
        tone="dark"
      />

      <div className="bg-cream py-12 text-center">
        <Link href="/#hotels" className="link-underline">
          &larr; Back to all hotels
        </Link>
      </div>
    </>
  );
}
