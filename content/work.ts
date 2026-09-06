// Featured work on the index. Only public, linkable engagements live here; everything else is a bullet in experience.ts.
export type Featured = {
  index: string; // "01"
  title: string;
  client: string;
  industry: string;
  year: string;
  line: string; // one sentence, what it is
  did: string; // one sentence, what Wilson did
  href: string; // the public story
  figure: { value: string; label: string }; // one public number
  frame: { src: string | null; caption: string; subtitle?: string };
};

export const featured: Featured[] = [
  {
    index: "01",
    title: "Mr. Bot",
    client: "NST Apparel",
    industry: "Manufacturing",
    year: "2025",
    line: "A purchase-order assistant you CC. It reads the thread, chases suppliers, pulls the documents, and flags only what needs a human.",
    did: "Led delivery, end to end.",
    href: "https://stories.thinkingmachin.es/nst-apparel-ai-purchase-order-automation/",
    figure: { value: "350,000", label: "automated workflow events" },
    frame: { src: null, caption: "Philippines · 2025 · 2.39:1", subtitle: "If it's a purchase order, CC Mr. Bot." },
  },
  {
    index: "02",
    title: "Training simulator",
    client: "OnePuhunan",
    industry: "Microfinance",
    year: "2025",
    line: "An AI roleplay coach for frontline staff. Personas that push back, a feedback agent that grades the conversation, and a knowledge assistant on the side. Shipped at OnePuhunan as Pocket Branch Manager.",
    did: "Built the reusable product. The OnePuhunan rollout was tailored by the project team.",
    href: "https://stories.thinkingmachin.es/onepuhunan-agentic-ai-training-microfinance/",
    figure: { value: "4.2", label: "officer confidence out of 5, up from 3.8" },
    frame: {
      src: null,
      caption: "Philippines · 2025 · 2.39:1",
      subtitle: "“Thinking Machines didn't just build a chatbot. They built a coach.” Marco Boa, OnePuhunan",
    },
  },
];

// Placeholder cut from Wilson's own sentence in chat; he rewords it.
export const restOfWork = { line: "Two are public. The rest is under NDA.", linkLabel: "Experience" };
