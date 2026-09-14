import type { ImportRow } from "@/lib/import-queue";

// Modeled on rextracks' actual videos (transcribed from his posted content):
// he asks for the same keyword ("signals", sometimes "sauce") across nearly
// every post, and his real referral code (qjyzmf) is used as the tracked
// link so a signup from this campaign attributes to him correctly.
// triggerScope "any" -- deliberately not "specific" -- so there's no reel
// to pick: this loads with everything already fillable, "Go Live" is the
// only step left.
export const REXTRACKS_CAMPAIGN_TEMPLATE: ImportRow = {
  name: "rextracks — signals",
  triggerScope: "any",
  keywords: ["signals", "sauce"],
  dmMessage:
    "yo here's the site — tracks the same accounts that keep printing money on these prediction markets 👀 {link}",
  publicReply: "sent it 👀",
  trackedUrl: "https://visibletrader.com/r/qjyzmf",
  openingDmMessage: "",
  openingDmButtonLabel: "",
};
