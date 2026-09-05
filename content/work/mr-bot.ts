import type { Dossier } from "../types";

export const mrBot: Dossier = {
  slug: "mr-bot",
  index: "01",
  title: "Mr. Bot",
  deck: "A purchase-order assistant you CC. It reads the thread, chases suppliers, pulls the documents, and flags only what needs a human.",
  client: { name: "NST Apparel", redacted: false, industry: "Manufacturing", region: "Philippines" },
  year: "2025",
  role: "Led delivery, end to end",
  stack: ["Azure", "OpenAI models", "Document Intelligence (OCR)", "Email automation", "Human-in-the-loop review"],
  scale: "350,000 automated workflow events",
  status: "In production",
  publicUrl: "https://stories.thinkingmachin.es/nst-apparel-ai-purchase-order-automation/",
  frame: {
    src: null,
    caption: "Philippines · 2025 · 2.39:1",
    subtitle: "If it's a purchase order, CC Mr. Bot.",
  },
  problem: [
    "NST Apparel coordinates thousands of purchase orders a year across suppliers, merchandisers, and accounting, mostly over email. In peak season a single order could take up to two weeks to close.",
    "Purchasers rushed orders without checking existing inventory, so stock piled up and tied up working capital. Processing alone cost about ₱4M a year, and it grew with volume.",
  ],
  constraint: [
    "No new system. The work already lived in email, so the assistant had to live there too. Approvals and judgment stayed with people. The bot could coordinate, never decide.",
    "It had to hold up in peak season, not just steady state. Thresholds and exception handling were tuned in weekly reviews against live data and real edge cases.",
  ],
  architecture: {
    intro: "One rule for the whole interaction model: if it's a purchase order, CC Mr. Bot. Everything else follows from that.",
    nodes: [
      { kind: "input", text: "Email thread with Mr. Bot on CC" },
      { kind: "reasoning", text: "Language model reads the thread and identifies the purchase-order stage" },
      { kind: "extraction", text: "Document intelligence pulls fields from quotations, invoices, and shipping documents" },
    ],
    branches: [
      { kind: "routine", text: "Automatic follow-ups to suppliers" },
      { kind: "exception", text: "True exceptions surfaced for human review" },
    ],
    note: "Azure for ingestion, storage, and processing. OpenAI models read the threads. OCR reads the documents. People handle only what gets flagged.",
  },
  numbers: [
    { value: "350,000", label: "automated workflow events, end to end", source: "Thinking Machines story, stories.thinkingmachin.es" },
    { value: "₱4M", label: "a year on purchase-order processing before, the baseline", source: "Thinking Machines story, stories.thinkingmachin.es" },
    { value: "2 wks", label: "peak-season processing time per order, before", source: "Thinking Machines story, stories.thinkingmachin.es" },
  ],
  whatIdChange: ["[DRAFT] Wilson writes this. Two or three sentences on what he'd do differently on day one, no spin."],
  featured: true,
};
