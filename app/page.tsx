import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "VisibleTrader DM",
  description:
    "Instagram comment-to-DM automation for VisibleTrader's creator outreach.",
};

const steps = [
  "Connect an Instagram professional account. No password sharing, no browser automation.",
  "Pick a post, a keyword to watch, and the DM to send when someone comments it.",
  "Comments are matched instantly and the DM goes out queued, rate-limited, and logged.",
];

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-background px-5 py-16 text-foreground">
      <div className="w-full max-w-lg">
        <h1 className="text-3xl font-bold">VisibleTrader DM</h1>
        <p className="mt-4 text-base leading-7 text-muted">
          Turns an Instagram comment keyword into an automatic DM, using the
          official Meta API — built for VisibleTrader&rsquo;s creator outreach.
        </p>

        <ol className="mt-8 space-y-4">
          {steps.map((step, i) => (
            <li key={step} className="flex gap-3">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-surface text-xs font-semibold text-muted">
                {i + 1}
              </span>
              <p className="text-sm leading-6 text-muted">{step}</p>
            </li>
          ))}
        </ol>

        <Link
          href="/login"
          className="mt-10 inline-flex items-center justify-center gap-2 rounded bg-accent px-6 py-3 text-sm font-semibold text-white transition hover:bg-accent-hover"
        >
          Get started
        </Link>
      </div>
    </main>
  );
}
