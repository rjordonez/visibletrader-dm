import type { ImportRow } from "@/lib/import-queue";

// Keyword ("signals", sometimes "sauce") matches what rextracks actually
// asks for across his videos, and the tracked link is his real referral
// code (qjyzmf) so a signup from this campaign attributes to him. The
// opening DM -> link DM copy itself matches campaign "213213123" (built by
// hand as the reference for what this flow should say) rather than
// inventing new wording.
// triggerScope "any" -- deliberately not "specific" -- so there's no reel
// to pick: this loads with everything already fillable, "Go Live" is the
// only step left.
export const REXTRACKS_CAMPAIGN_TEMPLATE: ImportRow = {
  name: "rextracks — signals",
  triggerScope: "any",
  keywords: ["signals", "sauce"],
  openingDmMessage:
    "Hey there! If you are interested in VisibleTrader click the button below.",
  openingDmButtonLabel: "Send VisibleTrader",
  dmMessage: "Here is the link {link}",
  publicReply: "Sent you a DM!",
  trackedUrl: "https://visibletrader.com/r/qjyzmf",
};
