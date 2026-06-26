"use client";

import { motion } from "framer-motion";

export type ServiceItem = {
  title: string;
  description: string;
};

type ServicesGridProps = {
  items: ServiceItem[];
  columns?: 2 | 3 | 4;
};

const columnClasses: Record<NonNullable<ServicesGridProps["columns"]>, string> =
  {
    2: "sm:grid-cols-2",
    3: "sm:grid-cols-2 lg:grid-cols-3",
    4: "sm:grid-cols-2 lg:grid-cols-4",
  };

export function ServicesGrid({ items, columns = 4 }: ServicesGridProps) {
  return (
    <div className={`grid gap-px overflow-hidden rounded-2xl bg-charcoal/10 ${columnClasses[columns]}`}>
      {items.map((item, index) => (
        <motion.div
          key={item.title}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1],
            delay: index * 0.08,
          }}
          className="group bg-cream p-6 transition-colors duration-500 hover:bg-cream-50 sm:p-8 lg:p-10"
        >
          <span className="font-serif text-2xl font-light text-gold">
            {String(index + 1).padStart(2, "0")}
          </span>
          <h3 className="mt-5 font-serif text-2xl font-light text-charcoal">
            {item.title}
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-charcoal/65">
            {item.description}
          </p>
        </motion.div>
      ))}
    </div>
  );
}
