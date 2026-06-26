import type { Metadata } from "next";
import { Cormorant_Garamond, Jost } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-cormorant",
  display: "swap",
});

const jost = Jost({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-jost",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://hblhotels.co.uk"),
  title: {
    default: "HBL Hotels | Boutique Hospitality in the UK",
    template: "%s | HBL Hotels",
  },
  description:
    "HBL Hotels is a UK hospitality collection welcoming guests to Tor Park and Fowey Valley with warm, characterful stays.",
  keywords: [
    "HBL Hotels",
    "Tor Park Hotel",
    "Fowey Valley Hotel",
    "UK hotels",
    "Torquay hotel",
    "boutique hospitality",
  ],
  openGraph: {
    title: "HBL Hotels | Boutique Hospitality in the UK",
    description:
      "A UK hospitality collection welcoming guests to Tor Park and Fowey Valley.",
    type: "website",
    locale: "en_GB",
    siteName: "HBL Hotels",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon/favicon.svg", type: "image/svg+xml" },
      {
        url: "/favicon/favicon-96x96.png",
        sizes: "96x96",
        type: "image/png",
      },
    ],
    apple: "/favicon/apple-touch-icon.png",
    shortcut: "/favicon.ico",
  },
  manifest: "/favicon/site.webmanifest",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-GB" className={`${cormorant.variable} ${jost.variable}`}>
      <body className="font-sans antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
