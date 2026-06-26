import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { SectionReveal } from "@/components/SectionReveal";
import { ServicesGrid } from "@/components/ServicesGrid";
import { ShowcaseCTA } from "@/components/ShowcaseCTA";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Discover the hospitality services across HBL Hotels — comfortable stays, dining, guest lounges and warm, personal care.",
};

const services = [
  {
    title: "Comfortable Accommodation",
    description:
      "Well-appointed bedrooms across our hotels, designed for genuine rest and a good night's sleep.",
  },
  {
    title: "Relaxed Dining",
    description:
      "Welcoming dining rooms to enjoy a hearty start to the day and unwind over an evening meal.",
  },
  {
    title: "Guest Lounges",
    description:
      "Spacious, light-filled lounges where you can relax, read and plan your time away.",
  },
  {
    title: "Front-Desk Care",
    description:
      "A friendly, attentive team on hand to make every part of your stay effortless.",
  },
  {
    title: "Local Expertise",
    description:
      "Insider tips on the best beaches, walks, attractions and places to eat near each hotel.",
  },
  {
    title: "Groups & Getaways",
    description:
      "Whether travelling solo, as a couple or in a group, we help tailor a stay that suits you.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <Hero
        eyebrow="The HBL Experience"
        title="Our services"
        subtitle="Across every HBL hotel, our focus is the same: warm hospitality, comfortable surroundings and thoughtful service that makes your stay feel effortless."
        size="medium"
      />

      <section className="section-py bg-cream">
        <div className="container-hbl grid gap-8 sm:gap-12 lg:grid-cols-12 lg:gap-16">
          <SectionReveal className="lg:col-span-5">
            <p className="eyebrow">What We Offer</p>
            <h2 className="heading-serif mt-4 text-2xl text-charcoal sm:mt-5 sm:text-4xl lg:text-5xl">
              Looking after every guest, every stay
            </h2>
          </SectionReveal>
          <SectionReveal className="lg:col-span-7" delay={0.1}>
            <div className="space-y-6 text-base leading-relaxed text-charcoal/70 lg:text-lg">
              <p>
                HBL Hotels brings together comfortable, characterful properties
                with genuinely caring service. From the moment you arrive, our
                teams are dedicated to making you feel welcome and at home.
              </p>
              <p>
                While each hotel has its own setting and personality, you can
                expect the same standards of warmth, comfort and attention
                throughout the collection.
              </p>
            </div>
          </SectionReveal>
        </div>
      </section>

      <section className="section-py bg-cream-50">
        <div className="container-hbl">
          <ServicesGrid items={services} columns={3} />
        </div>
      </section>

      <ShowcaseCTA
        eyebrow="Plan Your Stay"
        title="Experience HBL hospitality"
        description="Choose your hotel and book your stay, or speak with our team to plan something tailored to you."
        buttons={[
          { label: "Book With Us", href: "/book", variant: "light" },
          { label: "Contact Us", href: "/contact", variant: "light" },
        ]}
        tone="dark"
      />
    </>
  );
}
