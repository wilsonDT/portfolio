import type { Dossier } from "../types";

export const planningAssistant: Dossier = {
  slug: "planning-assistant",
  index: "03",
  title: "Planning assistant",
  deck: "An enterprise AI planning assistant, built 0-to-1 and deployed into the client's own Azure.",
  client: { name: "Confidential client", redacted: true, industry: "Enterprise", region: "" },
  year: "2025",
  role: "Owned 0-to-1 full-stack delivery",
  stack: ["TypeScript / Next.js", "Python", "Azure, client-managed", "Terraform", "AKS", "PostgreSQL", "Entra SSO", "Key Vault", "Application Insights", "CI/CD"],
  scale: "Rolled out across three client IT teams",
  status: "In production",
  frame: { src: null, caption: "2025 · 2.39:1" },
  problem: ["[DRAFT] Wilson writes the problem in two sentences: who was planning what, and why it hurt."],
  constraint: [
    "It had to run inside the client's own Azure tenant, with their SSO, their secrets, and their monitoring. Nothing on ours.",
    "Three client IT teams owned different parts of the rollout, so the deployment had to be reproducible end to end: Terraform, AKS, CI/CD.",
  ],
  architecture: {
    intro: "The standard enterprise shape, done properly.",
    nodes: [
      { kind: "input", text: "Users sign in with the client's Entra ID" },
      { kind: "reasoning", text: "Next.js app and Python services draft and iterate plans with language models" },
      { kind: "data", text: "PostgreSQL for state, Key Vault for secrets" },
      { kind: "output", text: "AKS in the client's Azure, provisioned with Terraform, watched with Application Insights" },
    ],
    note: "Deployed to client-managed Azure through CI/CD. Client under NDA; the architecture is real.",
  },
  numbers: [
    { value: "3", label: "client IT teams coordinated for the rollout", source: "Resume, 2026" },
  ],
  whatIdChange: ["[DRAFT] Wilson writes this. Two or three sentences, no spin."],
  featured: false,
};
