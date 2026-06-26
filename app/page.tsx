import Link from "next/link";
import { Hero } from "@/components/Hero";
import { SectionReveal } from "@/components/SectionReveal";
import { PropertyCard } from "@/components/PropertyCard";
import { ServicesGrid } from "@/components/ServicesGrid";
import { ShowcaseCTA } from "@/components/ShowcaseCTA";
import { properties } from "@/lib/properties";

const collectionServices = [
  {
    title: "Characterful Stays",
    description:
      "Comfortable, welcoming bedrooms across each of our hotels, designed for genuine rest.",
  },
  {
    title: "Warm Hospitality",
    description:
      "Attentive, personal service from teams who take pride in looking after every guest.",
  },
  {
    title: "Memorable Dining",
    description:
      "Relaxed dining spaces to start the morning well and unwind in the evening.",
  },
  {
    title: "Local Discovery",
    description:
      "Perfectly placed bases for exploring the coast, countryside and culture of the South West.",
  },
];

export default function HomePage() {
  return (
    <>
      <Hero
        eyebrow="Heartfelt British Hospitality"
        title={
          <>
            A collection of
            <br />
            characterful UK hotels
          </>
        }
        subtitle="HBL Hotels welcomes guests to a family of warm, comfortable retreats across the South West of England — from the seafront of the English Riviera to the calm of the Cornish countryside."
        image="/properties/fowey-valley/aerial.png"
        imageAlt="Best Western Fowey Valley aerial view"
        ctas={[
          { label: "Discover Our Hotels", href: "#hotels", variant: "light" },
          { label: "Book With Us", href: "/book", variant: "primary" },
        ]}
      />

      {/* Intro */}
      <section className="section-py bg-cream">
        <div className="container-hbl grid gap-8 sm:gap-12 lg:grid-cols-12 lg:gap-16">
          <SectionReveal className="lg:col-span-5">
            <p className="eyebrow">Who We Are</p>
            <h2 className="heading-serif mt-4 text-2xl text-charcoal sm:mt-5 sm:text-4xl lg:text-5xl">
              Hospitality with heart, rooted in place
            </h2>
          </SectionReveal>
          <SectionReveal className="lg:col-span-7" delay={0.1}>
            <div className="space-y-6 text-base leading-relaxed text-charcoal/70 lg:text-lg">
              <p>
                HBL Hotels is a UK hospitality collection built around a simple
                belief: that a great stay comes from genuine care, comfortable
                surroundings and a real sense of place.
              </p>
              <p>
                Each of our hotels has its own personality and setting, yet they
                share the same warm, attentive welcome. Whether you are visiting
                the English Riviera or escaping into the Cornish countryside, our
                teams are here to make your stay effortless and memorable.
              </p>
              <Link href="/services" className="link-underline">
                Explore our services
              </Link>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Hotels */}
      <section
        id="hotels"
        className="scroll-mt-[var(--header-height)] section-py bg-cream-50"
      >
        <div className="container-hbl">
          <SectionReveal className="max-w-2xl">
            <p className="eyebrow">Our Hotels</p>
            <h2 className="heading-serif mt-4 text-2xl text-charcoal sm:mt-5 sm:text-4xl lg:text-5xl">
              Two destinations, one warm welcome
            </h2>
            <p className="mt-6 text-base leading-relaxed text-charcoal/65">
              Explore our properties across the South West of England, each
              offering its own character and surroundings.
            </p>
          </SectionReveal>

          <div className="mt-10 grid gap-5 sm:mt-14 sm:gap-6 md:grid-cols-2 lg:mt-16 lg:gap-8">
            {properties.map((property, index) => (
              <PropertyCard
                key={property.slug}
                property={property}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Services preview */}
      <section className="section-py bg-cream">
        <div className="container-hbl">
          <SectionReveal className="max-w-2xl">
            <p className="eyebrow">The HBL Experience</p>
            <h2 className="heading-serif mt-4 text-2xl text-charcoal sm:mt-5 sm:text-4xl lg:text-5xl">
              Thoughtful service in every detail
            </h2>
          </SectionReveal>
          <div className="mt-14 lg:mt-16">
            <ServicesGrid items={collectionServices} columns={4} />
          </div>
        </div>
      </section>

      <ShowcaseCTA
        eyebrow="Plan Your Stay"
        title="Ready to discover HBL Hotels?"
        description="Browse our hotels and book your stay directly through our trusted booking partners, or get in touch with our team to plan something special."
        buttons={[
          { label: "Book With Us", href: "/book", variant: "light" },
          { label: "Contact the Team", href: "/contact", variant: "light" },
        ]}
        tone="dark"
      />
    </>
  );
}
