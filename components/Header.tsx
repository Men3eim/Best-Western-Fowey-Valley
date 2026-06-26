"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { navItems, siteConfig, isNavActive } from "@/lib/site";

function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
      />
    </svg>
  );
}

function CloseIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden="true"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
    </svg>
  );
}

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const onHero = !scrolled && !menuOpen;

  const linkClass = (href: string) => {
    const active = isNavActive(pathname, href);
    const base =
      "relative text-xs font-medium uppercase tracking-[0.16em] transition-colors duration-300 sm:tracking-[0.18em]";

    if (onHero) {
      return `${base} ${
        active ? "text-gold-light" : "text-cream hover:text-gold-light"
      }`;
    }

    return `${base} ${
      active ? "text-gold" : "text-charcoal hover:text-gold"
    }`;
  };

  const primaryPhone = siteConfig.phones[0];

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-smooth ${
          menuOpen
            ? "pointer-events-none opacity-0 lg:pointer-events-auto lg:opacity-100"
            : ""
        } ${
          onHero
            ? "border-b border-white/15 bg-charcoal/25 shadow-[0_8px_32px_rgba(0,0,0,0.15)] backdrop-blur-2xl backdrop-saturate-150"
            : "border-b border-white/40 bg-cream/80 shadow-[0_8px_32px_rgba(28,28,26,0.08)] backdrop-blur-2xl backdrop-saturate-150"
        }`}
      >
        <div className="container-hbl grid h-[5rem] grid-cols-[auto_1fr_auto] items-center gap-3 sm:h-[5.5rem] lg:flex lg:h-24 lg:justify-between lg:gap-4">
          <div className="w-11 lg:hidden" aria-hidden="true" />

          <Link
            href="/"
            className="relative z-[60] flex shrink-0 items-center justify-self-center lg:justify-self-start"
            onClick={() => setMenuOpen(false)}
          >
            <Image
              src={siteConfig.logo}
              alt={`${siteConfig.name} logo`}
              width={170}
              height={68}
              priority
              className="h-10 w-auto sm:h-11 lg:h-14"
            />
          </Link>

          <nav
            className="hidden items-center gap-7 xl:gap-9 lg:flex"
            aria-label="Main navigation"
          >
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className={linkClass(item.href)}>
                {item.label}
                {isNavActive(pathname, item.href) && (
                  <span className="absolute -bottom-2 left-0 h-0.5 w-full bg-gold" />
                )}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-4 lg:flex">
            <a
              href={primaryPhone.tel}
              className={`flex items-center gap-2 text-sm font-medium transition-colors duration-300 ${
                onHero
                  ? "text-cream/90 hover:text-gold-light"
                  : "text-charcoal hover:text-gold"
              }`}
            >
              <PhoneIcon className="h-4 w-4 shrink-0" />
              <span className="hidden xl:inline">{siteConfig.phoneDisplay}</span>
              <span className="xl:hidden">{primaryPhone.label}</span>
            </a>
            <Link
              href="/book"
              className={`inline-flex min-h-[46px] items-center justify-center rounded-full px-6 py-3 text-xs font-medium uppercase tracking-[0.16em] transition-all duration-300 ${
                onHero
                  ? "border border-cream/40 bg-white/10 text-cream backdrop-blur-sm hover:border-gold hover:bg-gold hover:text-charcoal"
                  : "bg-charcoal/90 text-cream backdrop-blur-sm hover:bg-gold hover:text-charcoal"
              }`}
            >
              Book With Us
            </Link>
          </div>

          <div className="flex items-center justify-self-end gap-1 sm:gap-2 lg:hidden">
            <a
              href={primaryPhone.tel}
              aria-label={`Call ${siteConfig.phoneDisplay}`}
              className={`flex h-11 w-11 items-center justify-center rounded-full transition-colors duration-300 ${
                onHero
                  ? "text-cream hover:bg-white/10 hover:text-gold-light"
                  : "text-charcoal hover:bg-charcoal/5 hover:text-gold"
              }`}
            >
              <PhoneIcon className="h-5 w-5" />
            </a>
            <button
              type="button"
              aria-label="Open menu"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen(true)}
              className={`relative z-[60] flex h-11 w-11 items-center justify-center rounded-full transition-colors duration-300 ${
                onHero
                  ? "text-cream hover:bg-white/10"
                  : "text-charcoal hover:bg-charcoal/5"
              }`}
            >
              <div className="flex flex-col gap-[5px]">
                <span
                  className={`block h-0.5 w-5 ${
                    onHero ? "bg-cream" : "bg-charcoal"
                  }`}
                />
                <span
                  className={`block h-0.5 w-5 ${
                    onHero ? "bg-cream" : "bg-charcoal"
                  }`}
                />
                <span
                  className={`block h-0.5 w-5 ${
                    onHero ? "bg-cream" : "bg-charcoal"
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[100] flex flex-col bg-cream/95 backdrop-blur-2xl backdrop-saturate-150 lg:hidden"
            style={{ paddingTop: "env(safe-area-inset-top)" }}
          >
            <div className="container-hbl flex h-[5rem] shrink-0 items-center justify-between sm:h-[5.5rem]">
              <Link
                href="/"
                onClick={() => setMenuOpen(false)}
                className="flex shrink-0 items-center"
              >
                <Image
                  src={siteConfig.logo}
                  alt={`${siteConfig.name} logo`}
                  width={170}
                  height={68}
                  className="h-10 w-auto sm:h-11"
                />
              </Link>
              <button
                type="button"
                aria-label="Close menu"
                onClick={() => setMenuOpen(false)}
                className="flex h-11 w-11 items-center justify-center rounded-full text-charcoal transition-colors hover:bg-charcoal/5"
              >
                <CloseIcon className="h-6 w-6" />
              </button>
            </div>

            <nav
              className="container-hbl flex-1 overflow-y-auto py-2"
              aria-label="Mobile navigation"
            >
              {navItems.map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.04 + index * 0.05, duration: 0.3 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className={`flex min-h-[3.25rem] items-center border-b border-charcoal/8 font-serif text-2xl font-light transition-colors ${
                      isNavActive(pathname, item.href)
                        ? "text-gold"
                        : "text-charcoal hover:text-gold"
                    }`}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </nav>

            <div
              className="container-hbl shrink-0 border-t border-charcoal/10 py-6"
              style={{ paddingBottom: "max(1.5rem, env(safe-area-inset-bottom))" }}
            >
              <a
                href={primaryPhone.tel}
                className="flex min-h-[48px] items-center gap-3 text-charcoal transition-colors hover:text-gold"
              >
                <PhoneIcon className="h-5 w-5 shrink-0 text-gold" />
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-charcoal/50">
                    Call us
                  </p>
                  <p className="font-serif text-xl font-light">{siteConfig.phoneDisplay}</p>
                </div>
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                className="mt-4 block text-sm text-charcoal/65 transition-colors hover:text-gold"
              >
                {siteConfig.email}
              </a>
              <Link
                href="/book"
                onClick={() => setMenuOpen(false)}
                className="btn-primary mt-6 w-full"
              >
                Book With Us
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
