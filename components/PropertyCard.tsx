"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import type { Property } from "@/lib/properties";

type PropertyCardProps = {
  property: Property;
  index?: number;
};

export function PropertyCard({ property, index = 0 }: PropertyCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: index * 0.12 }}
      className="group relative overflow-hidden rounded-2xl bg-charcoal"
    >
      <Link href={`/properties/${property.slug}`} className="block">
        <div className="relative aspect-[3/4] overflow-hidden sm:aspect-[4/5]">
          {property.cardImage ? (
            <Image
              src={property.cardImage}
              alt={property.name}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover transition-transform duration-[1200ms] ease-smooth group-hover:scale-105"
            />
          ) : (
            <div className="absolute inset-0 bg-gradient-to-br from-forest-light via-forest to-charcoal">
              <div className="flex h-full items-center justify-center">
                <span className="font-serif text-6xl font-light text-cream/15">
                  {property.shortName}
                </span>
              </div>
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/10 to-transparent" />

          {!property.cardImage && (
            <span className="absolute right-5 top-5 rounded-full border border-cream/30 bg-charcoal/40 px-3 py-1 text-[10px] uppercase tracking-widest text-cream/80 backdrop-blur">
              Coming Soon
            </span>
          )}

          <div className="absolute inset-x-0 bottom-0 p-5 sm:p-7 lg:p-8">
            <p className="eyebrow text-gold-light">{property.region}</p>
            <h3 className="mt-2 font-serif text-2xl font-light text-cream sm:mt-3 sm:text-3xl lg:text-4xl">
              {property.name}
            </h3>
            <p className="mt-2 text-sm text-cream/70">{property.location}</p>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-cream/60">
              {property.tagline}
            </p>
            <span className="mt-6 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-cream transition-colors group-hover:text-gold">
              Discover
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                &rarr;
              </span>
            </span>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}
