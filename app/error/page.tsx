import Link from "next/link";

export const metadata = {
  title: "Sign-in error - VisibleTrader DM",
};

// Auth.js falls back to this page (via authConfig.pages.error in lib/auth.ts)
// whenever a sign-in attempt fails for a reason beyond the usual bad-email
// case -- e.g. AccessDenied (blocked by ALLOWED_EMAILS), Configuration (a
// provider env var is missing), Verification (an expired/used magic link).
// Without this route, Auth.js renders its own generic default error page,
// which isn't styled for this app's dark theme and reads as broken.
const MESSAGES: Record<string, string> = {
  AccessDenied: "That email isn't on the allowed sign-in list for this workspace.",
  Verification: "That sign-in link has expired or was already used. Request a new one.",
  Configuration: "Sign-in isn't configured correctly. Check the server logs.",
};

export default async function AuthErrorPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>;
}) {
  const { error } = await searchParams;
  const message =
    (error && MESSAGES[error]) || "Something went wrong signing you in.";

  return (
    <div className="flex min-h-screen items-center justify-center px-6">
      <div className="w-full max-w-md text-center">
        <h1 className="text-2xl font-semibold text-foreground">
          Couldn&rsquo;t sign you in
        </h1>
        <p className="mt-3 text-sm leading-relaxed text-muted">{message}</p>
        <Link
          href="/login"
          className="mt-8 inline-flex items-center justify-center gap-2 rounded bg-accent px-6 py-3 text-sm font-semibold text-white transition hover:bg-accent-hover"
        >
          Back to sign in
        </Link>
      </div>
    </div>
  );
}
