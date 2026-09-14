/**
 * Shared keys and shape for the CSV import handoff. The import page stages
 * rows in localStorage, then the campaign builder consumes them one at a time.
 */
export const IMPORT_QUEUE_KEY = "openreply-import-queue";
export const IMPORT_ACCOUNT_KEY = "openreply-import-account";

// Every field a CSV row can prefill in the builder. `triggerScope` is
// optional and defaults to "specific" (a CSV row always maps to one real
// reel someone picks by hand) -- a creator-template row is the one case
// that sets it explicitly to "any", so nothing needs picking at all.
export interface ImportRow {
  name: string;
  keywords: string[];
  dmMessage: string;
  publicReply: string;
  trackedUrl: string;
  openingDmMessage: string;
  openingDmButtonLabel: string;
  triggerScope?: "specific" | "any" | "next";
}

// Same one-shot localStorage handoff as the CSV queue above, but for a
// single pre-built creator template (see lib/templates/rextracks-template.ts)
// -- kept as its own key so the builder can tell "loaded a template" apart
// from "mid a multi-row CSV import" and show the right banner for each.
export const TEMPLATE_HANDOFF_KEY = "openreply-template-row";
