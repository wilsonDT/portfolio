import type { Dossier } from "../types";

export const trainingSimulator: Dossier = {
  slug: "training-simulator",
  index: "02",
  title: "Training simulator",
  deck: "An AI roleplay coach for frontline staff. Personas that push back, a feedback agent that grades the conversation, and a knowledge assistant on the side.",
  client: { name: "OnePuhunan", redacted: false, industry: "Microfinance", region: "Philippines" },
  year: "2025",
  role: "Built the reusable product. The OnePuhunan rollout was tailored by the project team.",
  stack: ["Agentic AI", "Retrieval-augmented generation", "Bento toolkit (Thinking Machines)"],
  scale: "Pilot built and shipped in 7 weeks",
  status: "In use at OnePuhunan as Pocket Branch Manager",
  publicUrl: "https://stories.thinkingmachin.es/onepuhunan-agentic-ai-training-microfinance/",
  frame: {
    src: null,
    caption: "Philippines · 2025 · 2.39:1",
    subtitle: "“Thinking Machines didn't just build a chatbot. They built a coach.” Marco Boa, OnePuhunan",
  },
  problem: [
    "New account officers at OnePuhunan took 6 to 12 months to get confident with real customers. Product knowledge takes two days. Handling a sari-sari store owner who says she doesn't need a loan takes practice.",
    "Classroom training fit about four officers per two-day batch for roleplay. Everyone else watched.",
  ],
  constraint: [
    "The personas had to behave like real skeptical customers: object, stall, ask about fees and payment flexibility, and only open up when rapport is earned. A chatbot that agrees teaches nothing.",
    "Clear performance criteria didn't exist yet. A five-criteria rubric was built together with OnePuhunan's learning team and became their standard.",
    "Everything had to come from reusable parts, so a client instance could ship in weeks.",
  ],
  architecture: {
    intro: "Three agents around one conversation, plus a knowledge assistant on the side.",
    nodes: [
      { kind: "input", text: "Officer opens a practice session with a persona" },
      { kind: "reasoning", text: "Simulator agent reads each turn and adjusts the persona's mood and reception" },
      { kind: "output", text: "Persona responds: objects, stalls, or opens up as rapport builds" },
      { kind: "reasoning", text: "Performance analyst scores the session against the five-criteria rubric" },
    ],
    branches: [
      { kind: "routine", text: "Targeted feedback to the officer" },
      { kind: "data", text: "Knowledge assistant answers policy questions in seconds" },
    ],
    note: "Built on Thinking Machines' Bento toolkit: prebuilt agents, a RAG framework, persona and feedback templates. The client's field experts shaped the personas' psychology.",
  },
  numbers: [
    { value: "4.2", label: "officer confidence score out of 5, up from 3.8", source: "Thinking Machines story, stories.thinkingmachin.es" },
    { value: "15.84 s", label: "policy lookup, down from 16 minutes", source: "Thinking Machines story, stories.thinkingmachin.es" },
    { value: "7 wks", label: "from kickoff to a working pilot", source: "Thinking Machines story, stories.thinkingmachin.es" },
  ],
  whatIdChange: ["[DRAFT] Wilson writes this. Two or three sentences on what he'd change in the product, no spin."],
  featured: true,
};
