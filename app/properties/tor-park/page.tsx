import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PropertyPageContent } from "@/components/PropertyPageContent";
import { getProperty } from "@/lib/properties";

const property = getProperty("tor-park");

export const metadata: Metadata = {
  title: property?.name,
  description: property?.intro,
};

export default function TorParkPage() {
  if (!property) notFound();
  return <PropertyPageContent property={property} />;
}
