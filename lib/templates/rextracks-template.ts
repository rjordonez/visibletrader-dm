import type { ImportRow } from "@/lib/import-queue";

// Keyword ("signals", sometimes "sauce") matches what rextracks actually
// asks for across his videos. The opening DM -> link DM copy matches
// campaign "213213123" (built by hand as the reference for what this flow
// should say) rather than inventing new wording. trackedUrl is a visible
// placeholder, not a real referral code -- whoever loads this template
// still needs to swap in the actual /r/<code> link for the creator running
// it before going live, so it's obvious in the builder rather than silently
// wrong if left unedited.
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
  trackedUrl: "https://visibletrader.com/r/your-code",
};
