import Link from "next/link";
import type { PolicyContent } from "@/src/content/policies";

type PolicyPageProps = {
  policy: PolicyContent;
};

export function PolicyPage({ policy }: PolicyPageProps) {
  return (
    <main className="min-h-screen px-5 py-8 text-[var(--ink)] sm:px-8 lg:px-12">
      <div className="mx-auto max-w-5xl">
        <header className="mb-10 rounded-[28px] border border-white bg-white/80 px-6 py-7 shadow-[0_18px_50px_rgba(112,88,91,0.12)] backdrop-blur sm:px-10 sm:py-9">
          <nav className="mb-10 flex items-center justify-between gap-4">
            <Link
              href="/"
              className="text-sm font-extrabold tracking-[0.32em] text-[var(--rose-gold)]"
            >
              AULLY FIT
            </Link>
            <div className="flex gap-2 text-sm font-semibold text-[var(--muted)]">
              <Link
                href="/privacy"
                className="rounded-full border border-[var(--hairline)] bg-[var(--surface)] px-4 py-2"
              >
                Privacy
              </Link>
              <Link
                href="/terms"
                className="rounded-full border border-[var(--hairline)] bg-[var(--surface)] px-4 py-2"
              >
                Terms
              </Link>
            </div>
          </nav>

          <p className="mb-3 text-sm font-bold uppercase tracking-[0.22em] text-[var(--rose-gold)]">
            Aully Fit Policy
          </p>
          <h1 className="max-w-3xl text-4xl font-extrabold tracking-normal text-[var(--ink)] sm:text-5xl">
            {policy.title}
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-7 text-[var(--muted)] sm:text-lg">
            {policy.description}
          </p>

          <dl className="mt-8 grid gap-3 text-sm text-[var(--muted)] sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-2xl bg-[var(--surface)] px-4 py-3">
              <dt className="font-bold text-[var(--ink)]">Last updated</dt>
              <dd>{policy.lastUpdated}</dd>
            </div>
            <div className="rounded-2xl bg-[var(--surface)] px-4 py-3">
              <dt className="font-bold text-[var(--ink)]">Operator</dt>
              <dd>{policy.operator}</dd>
            </div>
            <div className="rounded-2xl bg-[var(--surface)] px-4 py-3">
              <dt className="font-bold text-[var(--ink)]">Markets</dt>
              <dd>{policy.markets}</dd>
            </div>
            <div className="rounded-2xl bg-[var(--surface)] px-4 py-3">
              <dt className="font-bold text-[var(--ink)]">Contact</dt>
              <dd>
                <a href={`mailto:${policy.contact}`}>{policy.contact}</a>
              </dd>
            </div>
          </dl>
        </header>

        <div className="grid gap-6 lg:grid-cols-2">
          {policy.localized.map((localized) => (
            <article
              key={localized.language}
              className="rounded-[28px] border border-[var(--hairline)] bg-white/85 p-6 shadow-[0_12px_34px_rgba(112,88,91,0.08)] sm:p-8"
            >
              <h2 className="mb-6 text-2xl font-extrabold text-[var(--ink)]">
                {localized.language}
              </h2>
              <div className="space-y-7">
                {localized.sections.map((section) => (
                  <section key={section.title}>
                    <h3 className="mb-3 text-lg font-bold text-[var(--ink)]">
                      {section.title}
                    </h3>
                    <div className="space-y-3 text-sm leading-6 text-[var(--muted)] sm:text-base sm:leading-7">
                      {section.body.map((paragraph) => (
                        <p key={paragraph}>{paragraph}</p>
                      ))}
                    </div>
                  </section>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
