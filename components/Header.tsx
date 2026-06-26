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

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const isSolid = scrolled || menuOpen;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
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

  const linkClass = (href: string) => {
    const active = isNavActive(pathname, href);
    const base =
      "relative text-[11px] font-medium uppercase tracking-[0.18em] transition-colors duration-300";
    const color = isSolid
      ? active
        ? "text-gold"
        : "text-charcoal hover:text-gold"
      : active
        ? "text-gold-light"
        : "text-cream/90 hover:text-gold-light";

    return `${base} ${color}`;
  };

  const primaryPhone = siteConfig.phones[0];

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-smooth ${
        isSolid
          ? "bg-cream/97 shadow-[0_1px_0_rgba(28,28,26,0.08)] backdrop-blur-md"
          : "bg-gradient-to-b from-charcoal/50 to-transparent"
      }`}
    >
      <div className="container-hbl flex h-[4.5rem] items-center justify-between gap-4 sm:h-20 lg:h-[5.25rem]">
        {/* Logo */}
        <Link
          href="/"
          className="relative z-[60] flex shrink-0 items-center"
          onClick={() => setMenuOpen(false)}
        >
          <Image
            src={siteConfig.logo}
            alt={`${siteConfig.name} logo`}
            width={150}
            height={60}
            priority
            className="h-10 w-auto sm:h-11 lg:h-12"
          />
        </Link>

        {/* Desktop navigation */}
        <nav
          className="hidden items-center gap-6 xl:gap-8 lg:flex"
          aria-label="Main navigation"
        >
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className={linkClass(item.href)}>
              {item.label}
              {isNavActive(pathname, item.href) && (
                <span className="absolute -bottom-1.5 left-0 h-px w-full bg-gold" />
              )}
            </Link>
          ))}
        </nav>

        {/* Desktop / tablet actions */}
        <div className="hidden items-center gap-3 sm:gap-4 lg:flex">
          <a
            href={primaryPhone.tel}
            className={`flex items-center gap-2 text-xs font-medium tracking-wide transition-colors duration-300 ${
              isSolid
                ? "text-charcoal hover:text-gold"
                : "text-cream/90 hover:text-gold-light"
            }`}
          >
            <PhoneIcon className="h-4 w-4 shrink-0" />
            <span className="hidden xl:inline">{siteConfig.phoneDisplay}</span>
            <span className="xl:hidden">{primaryPhone.label}</span>
          </a>
          <Link
            href="/book"
            className={`inline-flex min-h-[44px] items-center justify-center rounded-full px-5 py-2.5 text-[11px] font-medium uppercase tracking-[0.18em] transition-all duration-300 ${
              isSolid
                ? "bg-charcoal text-cream hover:bg-gold hover:text-charcoal"
                : "border border-cream/50 bg-cream/10 text-cream backdrop-blur-sm hover:border-gold hover:bg-gold hover:text-charcoal"
            }`}
          >
            Book With Us
          </Link>
        </div>

        {/* Mobile: phone + menu */}
        <div className="flex items-center gap-2 sm:gap-3 lg:hidden">
          <a
            href={primaryPhone.tel}
            aria-label={`Call ${siteConfig.phoneDisplay}`}
            className={`flex h-11 w-11 items-center justify-center rounded-full transition-colors duration-300 ${
              isSolid
                ? "text-charcoal hover:bg-charcoal/5 hover:text-gold"
                : "text-cream hover:bg-cream/10 hover:text-gold-light"
            }`}
          >
            <PhoneIcon className="h-5 w-5" />
          </a>
          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
            className={`relative z-[60] flex h-11 w-11 items-center justify-center rounded-full transition-colors duration-300 ${
              isSolid
                ? "text-charcoal hover:bg-charcoal/5"
                : "text-cream hover:bg-cream/10"
            }`}
          >
            <div className="flex flex-col gap-[5px]">
              <span
                className={`block h-px w-5 transition-all duration-300 ${
                  isSolid ? "bg-charcoal" : "bg-cream"
                } ${menuOpen ? "translate-y-[6px] rotate-45" : ""}`}
              />
              <span
                className={`block h-px w-5 transition-all duration-300 ${
                  isSolid ? "bg-charcoal" : "bg-cream"
                } ${menuOpen ? "opacity-0" : ""}`}
              />
              <span
                className={`block h-px w-5 transition-all duration-300 ${
                  isSolid ? "bg-charcoal" : "bg-cream"
                } ${menuOpen ? "-translate-y-[6px] -rotate-45" : ""}`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.button
              type="button"
              aria-label="Close menu overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="fixed inset-0 z-40 bg-charcoal/40 backdrop-blur-sm lg:hidden"
              onClick={() => setMenuOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="fixed inset-y-0 right-0 z-50 flex w-full max-w-sm flex-col bg-cream shadow-2xl lg:hidden"
              style={{ paddingTop: "env(safe-area-inset-top)" }}
            >
              <div className="flex items-center justify-between border-b border-charcoal/10 px-6 py-5">
                <span className="text-xs font-medium uppercase tracking-widest text-charcoal/50">
                  Menu
                </span>
                <button
                  type="button"
                  aria-label="Close menu"
                  onClick={() => setMenuOpen(false)}
                  className="flex h-10 w-10 items-center justify-center rounded-full text-charcoal hover:bg-charcoal/5"
                >
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <nav className="flex-1 overflow-y-auto px-6 py-4" aria-label="Mobile navigation">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: 16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 + index * 0.05, duration: 0.35 }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setMenuOpen(false)}
                      className={`flex min-h-[52px] items-center border-b border-charcoal/8 font-serif text-2xl font-light transition-colors ${
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
                className="border-t border-charcoal/10 px-6 py-6"
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
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
