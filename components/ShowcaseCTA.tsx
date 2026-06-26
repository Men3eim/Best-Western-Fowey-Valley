import Link from "next/link";

type CtaButton = {
  label: string;
  href: string;
  external?: boolean;
  variant?: "primary" | "light";
};

type ShowcaseCTAProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  buttons: CtaButton[];
  tone?: "dark" | "light";
};

export function ShowcaseCTA({
  eyebrow,
  title,
  description,
  buttons,
  tone = "dark",
}: ShowcaseCTAProps) {
  const isDark = tone === "dark";

  return (
    <section
      className={
        isDark ? "bg-forest text-cream" : "bg-cream-50 text-charcoal"
      }
    >
      <div className="container-hbl flex flex-col items-center gap-6 py-16 text-center sm:gap-8 sm:py-20 lg:py-28">
        {eyebrow && (
          <p className={isDark ? "eyebrow text-gold-light" : "eyebrow"}>
            {eyebrow}
          </p>
        )}
        <h2
          className={`heading-serif max-w-3xl text-2xl sm:text-4xl lg:text-5xl ${
            isDark ? "text-cream" : "text-charcoal"
          }`}
        >
          {title}
        </h2>
        {description && (
          <p
            className={`max-w-2xl text-base leading-relaxed ${
              isDark ? "text-cream/75" : "text-charcoal/65"
            }`}
          >
            {description}
          </p>
        )}
        <div className="flex w-full max-w-md flex-col gap-3 sm:max-w-none sm:flex-row sm:flex-wrap sm:justify-center sm:gap-4">
          {buttons.map((button) =>
            button.external ? (
              <a
                key={button.label}
                href={button.href}
                target="_blank"
                rel="noopener noreferrer"
                className={button.variant === "light" ? "btn-light" : "btn-primary"}
              >
                {button.label}
              </a>
            ) : (
              <Link
                key={button.label}
                href={button.href}
                className={button.variant === "light" ? "btn-light" : "btn-primary"}
              >
                {button.label}
              </Link>
            )
          )}
        </div>
      </div>
    </section>
  );
}
