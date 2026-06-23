import Link from "next/link";

const policyLinks = [
  {
    href: "/privacy",
    title: "Privacy Policy",
    description:
      "Photo processing, temporary storage, feedback data, deletion policy, and contact path.",
  },
  {
    href: "/terms",
    title: "Terms of Service",
    description:
      "Reference-only fit previews, user responsibilities, availability, and service limitations.",
  },
];

export default function HomePage() {
  return (
    <main className="min-h-screen px-5 py-8 text-[var(--ink)] sm:px-8 lg:px-12">
      <div className="mx-auto flex min-h-[calc(100vh-4rem)] max-w-5xl flex-col justify-center">
        <section className="rounded-[32px] border border-white bg-white/80 px-6 py-10 shadow-[0_22px_64px_rgba(112,88,91,0.14)] backdrop-blur sm:px-12 sm:py-14">
          <p className="mb-6 text-sm font-extrabold tracking-[0.34em] text-[var(--rose-gold)]">
            AULLY FIT
          </p>
          <h1 className="max-w-3xl text-4xl font-extrabold leading-tight sm:text-6xl">
            Fit preview policy pages for app review and public access.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-7 text-[var(--muted)] sm:text-lg">
            Aully Fit is an MVP service for upper-clothing fit previews. These
            pages provide the public privacy and terms URLs needed for App Store,
            Play Store, and product testing.
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {policyLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group rounded-[24px] border border-[var(--hairline)] bg-[var(--surface)] p-5 transition hover:-translate-y-0.5 hover:shadow-[0_14px_32px_rgba(112,88,91,0.12)]"
              >
                <h2 className="text-xl font-bold text-[var(--ink)]">
                  {link.title}
                </h2>
                <p className="mt-3 text-sm leading-6 text-[var(--muted)]">
                  {link.description}
                </p>
                <span className="mt-5 inline-flex rounded-full bg-[var(--soft-pink)] px-4 py-2 text-sm font-bold text-[var(--ink)]">
                  Open {link.title}
                </span>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
