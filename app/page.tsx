import Image from "next/image";
import Link from "next/link";

const steps = [
  {
    title: "Capture your outfit",
    description:
      "Take a front-facing photo or upload one from your gallery when you want a quick fit check.",
  },
  {
    title: "Create a fit preview",
    description:
      "Aully Fit prepares an upper-body preview so you can focus on the look instead of manual editing.",
  },
  {
    title: "Compare it live",
    description:
      "Open the camera overlay, adjust the preview, and see how the fit feels in your space.",
  },
];

const highlights = [
  "Upper-body fit previews",
  "Live camera comparison",
  "No account required",
  "No ads or tracking",
];

const photoTips = [
  "Use a clear, front-facing upper-body photo.",
  "Keep the outfit visible from shoulders to waist.",
  "Choose bright, even lighting for cleaner previews.",
];

const appScreens = [
  {
    src: "/landing/check-your-fit-ipad.png",
    title: "Start with a clear outfit photo",
    description:
      "The fit screen keeps the first step simple: capture or upload the photo you want to compare.",
  },
  {
    src: "/landing/photo-guide-ipad.png",
    title: "Follow the built-in photo guide",
    description:
      "Short tips help users choose a front-facing, well-lit photo before generating a preview.",
  },
  {
    src: "/landing/settings-ipad.png",
    title: "Control language and privacy access",
    description:
      "Settings keep the essentials visible, including language choice, privacy, and terms.",
  },
];

export default function HomePage() {
  return (
    <main className="min-h-screen overflow-hidden text-[var(--ink)]">
      <section className="relative px-5 pb-16 pt-8 sm:px-8 lg:px-12 lg:pb-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_0.82fr] lg:items-center">
          <div className="max-w-3xl">
            <nav className="mb-16 flex items-center justify-between gap-4">
              <Link
                href="/"
                className="text-sm font-extrabold tracking-[0.48em] text-[var(--rose-gold)]"
              >
                AULLY FIT
              </Link>
              <div className="flex items-center gap-4 text-sm font-bold text-[var(--muted)]">
                <Link className="transition hover:text-[var(--ink)]" href="/privacy">
                  Privacy
                </Link>
                <Link className="transition hover:text-[var(--ink)]" href="/terms">
                  Terms
                </Link>
              </div>
            </nav>

            <p className="mb-5 inline-flex rounded-full border border-[var(--hairline)] bg-white/72 px-4 py-2 text-sm font-bold text-[var(--muted)] shadow-[0_10px_28px_rgba(112,88,91,0.08)]">
              Outfit preview for everyday fit decisions
            </p>
            <h1 className="max-w-3xl text-5xl font-black leading-[0.98] tracking-tight sm:text-7xl">
              Preview your fit before you wear it out.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-[var(--muted)] sm:text-xl">
              Aully Fit helps you upload or capture an outfit photo, generate an
              upper-body fit preview, and compare it live with your camera.
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a
                href="#how-it-works"
                className="inline-flex min-h-14 items-center justify-center rounded-full bg-[var(--rose-gold)] px-7 text-base font-extrabold text-white shadow-[0_16px_32px_rgba(212,175,55,0.28)] transition hover:-translate-y-0.5"
              >
                See how it works
              </a>
              <Link
                href="/privacy"
                className="inline-flex min-h-14 items-center justify-center rounded-full bg-[var(--soft-pink)] px-7 text-base font-extrabold text-[var(--ink)] transition hover:-translate-y-0.5"
              >
                Privacy first
              </Link>
            </div>

            <div className="mt-12 grid gap-3 sm:grid-cols-2">
              {highlights.map((highlight) => (
                <div
                  key={highlight}
                  className="flex items-center gap-3 rounded-full bg-white/70 px-4 py-3 text-sm font-bold text-[var(--muted)]"
                >
                  <span className="h-2.5 w-2.5 rounded-full bg-[var(--rose-gold)]" />
                  {highlight}
                </div>
              ))}
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[430px] lg:max-w-none">
            <div className="absolute inset-x-8 bottom-10 top-20 rounded-[56px] bg-[var(--soft-pink)] blur-3xl" />
            <div className="relative rounded-[44px] border border-white/80 bg-white/72 p-4 shadow-[0_28px_80px_rgba(112,88,91,0.18)] backdrop-blur">
              <Image
                src="/landing/check-your-fit-ipad.png"
                alt="Aully Fit app home screen showing the fit analysis camera flow"
                width={2048}
                height={2732}
                priority
                className="h-auto w-full rounded-[32px]"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="how-it-works" className="px-5 py-16 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="text-sm font-extrabold tracking-[0.32em] text-[var(--rose-gold)]">
              HOW IT WORKS
            </p>
            <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">
              From outfit photo to live comparison.
            </h2>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {steps.map((step, index) => (
              <article
                key={step.title}
                className="rounded-[28px] border border-[var(--hairline)] bg-white/78 p-7 shadow-[0_18px_48px_rgba(112,88,91,0.1)]"
              >
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[var(--soft-pink)] text-sm font-black text-[var(--ink)]">
                  0{index + 1}
                </span>
                <h3 className="mt-8 text-2xl font-black">{step.title}</h3>
                <p className="mt-4 text-base leading-7 text-[var(--muted)]">
                  {step.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm font-extrabold tracking-[0.32em] text-[var(--rose-gold)]">
                INSIDE THE APP
              </p>
              <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">
                A focused flow from photo to fit check.
              </h2>
            </div>
            <p className="max-w-md text-base leading-7 text-[var(--muted)]">
              Each screen is designed around one job: prepare a usable photo,
              generate a preview, and keep privacy details easy to find.
            </p>
          </div>

          <div className="mt-10 grid items-start gap-5 lg:grid-cols-3">
            {appScreens.map((screen, index) => (
              <article
                key={screen.title}
                className={`rounded-[32px] border border-white/80 bg-white/72 p-4 shadow-[0_18px_54px_rgba(112,88,91,0.12)] ${
                  index === 1 ? "lg:mt-10" : index === 2 ? "lg:mt-20" : ""
                }`}
              >
                <div className="overflow-hidden rounded-[24px] bg-[var(--surface)]">
                  <Image
                    src={screen.src}
                    alt={screen.title}
                    width={2048}
                    height={2732}
                    className="h-auto w-full"
                  />
                </div>
                <div className="px-2 pb-3 pt-6">
                  <h3 className="text-xl font-black">{screen.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-[var(--muted)]">
                    {screen.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-8 rounded-[36px] bg-[var(--ink)] px-6 py-10 text-white shadow-[0_24px_70px_rgba(51,51,51,0.18)] sm:px-10 lg:grid-cols-[0.9fr_1.1fr] lg:px-14 lg:py-14">
          <div>
            <p className="text-sm font-extrabold tracking-[0.32em] text-[var(--rose-gold)]">
              WHY IT HELPS
            </p>
            <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">
              A quicker way to check the shape of a look.
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              "Compare an outfit before changing clothes.",
              "Use the camera overlay for real-space checking.",
              "Keep the experience focused on upper-body fits.",
              "Send feedback when a generated result looks unusual.",
            ].map((item) => (
              <p
                key={item}
                className="rounded-[24px] border border-white/10 bg-white/8 p-5 text-base leading-7 text-white/78"
              >
                {item}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-2 lg:items-start">
          <div className="rounded-[32px] border border-[var(--hairline)] bg-white/78 p-8 shadow-[0_18px_48px_rgba(112,88,91,0.1)] sm:p-10">
            <p className="text-sm font-extrabold tracking-[0.32em] text-[var(--rose-gold)]">
              PHOTO TIPS
            </p>
            <h2 className="mt-4 text-4xl font-black tracking-tight">
              Better photos create better previews.
            </h2>
            <div className="mt-8 space-y-4">
              {photoTips.map((tip) => (
                <div key={tip} className="flex gap-4">
                  <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-[var(--rose-gold)]" />
                  <p className="text-base leading-7 text-[var(--muted)]">{tip}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[32px] border border-[var(--hairline)] bg-[var(--surface)] p-8 shadow-[0_18px_48px_rgba(112,88,91,0.1)] sm:p-10">
            <p className="text-sm font-extrabold tracking-[0.32em] text-[var(--rose-gold)]">
              PRIVACY FIRST
            </p>
            <h2 className="mt-4 text-4xl font-black tracking-tight">
              Built without accounts, ads, or tracking.
            </h2>
            <p className="mt-6 text-base leading-7 text-[var(--muted)]">
              Photos are used to generate the preview you request. Aully Fit
              does not use your photos for advertising or cross-app tracking.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/privacy"
                className="inline-flex min-h-12 items-center justify-center rounded-full bg-[var(--rose-gold)] px-6 text-sm font-extrabold text-white"
              >
                Read Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="inline-flex min-h-12 items-center justify-center rounded-full bg-white px-6 text-sm font-extrabold text-[var(--ink)]"
              >
                Read Terms
              </Link>
            </div>
          </div>
        </div>
      </section>

      <footer className="px-5 py-10 sm:px-8 lg:px-12">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 border-t border-[var(--hairline)] pt-8 text-sm text-[var(--muted)] sm:flex-row sm:items-center sm:justify-between">
          <p className="font-bold text-[var(--ink)]">2026 Aully Fit</p>
          <div className="flex flex-wrap gap-5">
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/terms">Terms of Service</Link>
            <a href="mailto:whltn8282@gmail.com">Contact</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
