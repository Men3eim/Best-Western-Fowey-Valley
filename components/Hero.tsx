"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import type { ReactNode } from "react";

type HeroCta = {
  label: string;
  href: string;
  external?: boolean;
  variant?: "primary" | "light";
};

type HeroProps = {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: string;
  image?: string;
  imageAlt?: string;
  ctas?: HeroCta[];
  size?: "full" | "tall" | "medium";
};

const sizeClasses: Record<NonNullable<HeroProps["size"]>, string> = {
  full: "min-h-[100dvh] min-h-screen",
  tall: "min-h-[75svh] sm:min-h-[88vh]",
  medium: "min-h-[55svh] sm:min-h-[65vh] lg:min-h-[70vh]",
};

export function Hero({
  eyebrow,
  title,
  subtitle,
  image,
  imageAlt = "",
  ctas = [],
  size = "full",
}: HeroProps) {
  return (
    <section
      className={`relative flex items-center overflow-hidden ${sizeClasses[size]}`}
    >
      <div className="absolute inset-0">
        {image ? (
          <motion.div
            className="absolute inset-0"
            initial={{ scale: 1.12 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <Image
              src={image}
              alt={imageAlt}
              fill
              priority
              sizes="100vw"
              className="object-cover object-center"
            />
          </motion.div>
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-forest via-charcoal to-charcoal" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/40 to-charcoal/30" />
      </div>

      <div
        className="container-hbl relative z-10 pb-12 pt-[calc(var(--header-height)+1.5rem)] sm:pb-16 sm:pt-[calc(var(--header-height)+2rem)]"
      >
        <div className="max-w-3xl">
          {eyebrow && (
            <motion.p
              className="eyebrow text-gold-light"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              {eyebrow}
            </motion.p>
          )}
          <motion.h1
            className="heading-serif mt-4 text-[2rem] text-cream sm:mt-5 sm:text-5xl lg:text-6xl xl:text-7xl"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.08 }}
          >
            {title}
          </motion.h1>
          {subtitle && (
            <motion.p
              className="mt-4 max-w-xl text-sm leading-relaxed text-cream/85 sm:mt-6 sm:text-base lg:text-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.9,
                ease: [0.22, 1, 0.36, 1],
                delay: 0.18,
              }}
            >
              {subtitle}
            </motion.p>
          )}
          {ctas.length > 0 && (
            <motion.div
              className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:flex-wrap sm:gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.9,
                ease: [0.22, 1, 0.36, 1],
                delay: 0.28,
              }}
            >
              {ctas.map((cta) =>
                cta.external ? (
                  <a
                    key={cta.label}
                    href={cta.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={
                      cta.variant === "light" ? "btn-light" : "btn-primary"
                    }
                  >
                    {cta.label}
                  </a>
                ) : (
                  <Link
                    key={cta.label}
                    href={cta.href}
                    className={
                      cta.variant === "light" ? "btn-light" : "btn-primary"
                    }
                  >
                    {cta.label}
                  </Link>
                )
              )}
            </motion.div>
          )}
        </div>
      </div>

      <motion.div
        className="absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 sm:bottom-8 lg:block"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <div className="flex flex-col items-center gap-2 text-cream/60">
          <span className="text-[10px] uppercase tracking-widest">Scroll</span>
          <motion.span
            className="block h-10 w-px bg-cream/40"
            animate={{ scaleY: [0.3, 1, 0.3] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            style={{ originY: 0 }}
          />
        </div>
      </motion.div>
    </section>
  );
}
