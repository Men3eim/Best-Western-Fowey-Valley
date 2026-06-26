"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { GalleryImage } from "@/lib/properties";

type GalleryProps = {
  images: GalleryImage[];
};

export function Gallery({ images }: GalleryProps) {
  if (images.length === 0) return null;

  return (
    <div className="grid auto-rows-[12rem] grid-cols-1 gap-3 sm:auto-rows-[14rem] sm:grid-cols-2 sm:gap-4 lg:auto-rows-[18rem] lg:grid-cols-4 xl:auto-rows-[20rem]">
      {images.map((image, index) => (
        <motion.figure
          key={image.src}
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
            delay: (index % 4) * 0.08,
          }}
          className={`group relative min-h-[12rem] overflow-hidden rounded-xl sm:rounded-2xl ${
            index === 0 ? "sm:col-span-2 sm:row-span-2 sm:min-h-[20rem] lg:min-h-0" : ""
          }`}
        >
          <Image
            src={image.src}
            alt={image.alt}
            fill
            sizes={
              index === 0
                ? "(max-width: 768px) 100vw, 66vw"
                : "(max-width: 768px) 100vw, 33vw"
            }
            className="object-cover transition-transform duration-[1200ms] ease-smooth group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-charcoal/0 transition-colors duration-500 group-hover:bg-charcoal/10" />
        </motion.figure>
      ))}
    </div>
  );
}
