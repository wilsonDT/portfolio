import type { Dossier } from "../types";

export const modelEvaluation: Dossier = {
  slug: "model-evaluation",
  index: "04",
  title: "Model evaluation",
  deck: "Four foundation models across six language pairs, ending in a recommendation for prompts and a glossary over fine-tuning.",
  client: { name: "Confidential client", redacted: true, industry: "Enterprise", region: "" },
  year: "2025",
  role: "Directed the evaluation",
  stack: ["Four foundation models", "LoRA fine-tuning experiment", "Manual error analysis", "Prompt and glossary architecture"],
  scale: "315 errors analyzed, 681-sample LoRA experiment",
  status: "Recommendation delivered",
  frame: { src: null, caption: "2025 · 2.39:1" },
  problem: ["[DRAFT] Wilson writes what was being translated, for whom, and what a wrong translation costs."],
  constraint: [
    "Six language pairs, some with thin data. Fine-tuning looked attractive on paper. The question was whether the gain was worth the data, drift, and maintenance it brings.",
  ],
  architecture: {
    intro: "An evaluation pipeline, not a product.",
    nodes: [
      { kind: "input", text: "Test sets across six language pairs" },
      { kind: "reasoning", text: "Four foundation models translate the same inputs" },
      { kind: "extraction", text: "315 errors categorized by type and severity" },
      { kind: "data", text: "681-sample LoRA experiment to test whether fine-tuning moves the needle" },
      { kind: "output", text: "Recommendation: prompt design plus a domain glossary, lower risk than fine-tuning" },
    ],
    note: "Numbers from the resume. Client and domain under NDA.",
  },
  numbers: [
    { value: "4", label: "foundation models compared", source: "Resume, 2026" },
    { value: "6", label: "language pairs evaluated", source: "Resume, 2026" },
    { value: "315", label: "errors analyzed by hand", source: "Resume, 2026" },
  ],
  whatIdChange: ["[DRAFT] Wilson writes this. Two or three sentences, no spin."],
  featured: false,
};
