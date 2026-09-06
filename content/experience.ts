// Every role, newest first. The logo strip on the index and the experience page both read this list.
export type Bullet = { text: string; href?: string };
export type Role = { title: string; type: string; start: string; end: string; bullets: Bullet[] };
export type Employer = {
  slug: string;
  name: string;
  short: string; // wordmark text when there is no logo file
  logo?: string; // PNG under /public; falls back to the wordmark when the file is missing
  logoTreat?: "white" | "invert"; // white: every opaque pixel to white; invert: solid multi-tone mark to light line-art
  location: string;
  roles: Role[];
};

const nst = "https://stories.thinkingmachin.es/nst-apparel-ai-purchase-order-automation/";
const onePuhunan = "https://stories.thinkingmachin.es/onepuhunan-agentic-ai-training-microfinance/";

export const employers: Employer[] = [
  {
    slug: "thinking-machines",
    name: "Thinking Machines Data Science",
    short: "Thinking Machines",
    logo: "/logos/thinking-machines.png",
    location: "Taguig City, PH",
    roles: [
      {
        title: "Engineering Consultant, Machine Learning Engineer (Generative AI)",
        type: "Full-time",
        start: "Jan 2025",
        end: "Present",
        bullets: [
          {
            text: "Led delivery of Mr. Bot, a purchase-order assistant for NST Apparel that reads email threads, follows up with suppliers, pulls the documents, and flags only exceptions. 350,000 automated workflow events.",
            href: nst,
          },
          {
            text: "Built the reusable AI training simulator behind OnePuhunan's Pocket Branch Manager: roleplay personas that push back, a feedback agent, and a knowledge assistant. The rollout was tailored by the project team.",
            href: onePuhunan,
          },
          {
            text: "Owned 0-to-1 full-stack delivery of an enterprise AI planning assistant in TypeScript/Next.js and Python, deployed to client-managed Azure through Terraform and AKS with PostgreSQL, Entra SSO, Key Vault, Application Insights, and CI/CD. Coordinated the rollout across three client IT teams.",
          },
          {
            text: "Directed an evaluation of four foundation models across six language pairs. Analyzed 315 errors and a 681-sample LoRA experiment to recommend a lower-risk prompt-and-glossary architecture over fine-tuning.",
          },
          {
            text: "Shipped production AI systems across automation, workforce training, voice, enterprise planning, and document intelligence. Validated them with real users and operational data: ₱1.8M in projected annual savings and a 54% cut in LLM token usage.",
          },
          {
            text: "Translated ambiguous client requirements into scoped AI builds, architecture options, TCO estimates, phased delivery plans, and risk tradeoffs. Handled technical and cost discussions with client engineering and executive stakeholders.",
          },
          { text: "Helped build the company's AI SDLC framework and AI-native engineering workflows." },
        ],
      },
      { title: "Machine Learning Engineer, Generative AI", type: "Contract", start: "Oct 2024", end: "Jan 2025", bullets: [] },
      { title: "Machine Learning Engineer Intern", type: "Internship", start: "Jun 2024", end: "Aug 2024", bullets: [] },
    ],
  },
  {
    slug: "fit-senpai",
    name: "Fit Senpai",
    short: "Fit Senpai",
    logo: "/logos/fit-senpai.png",
    logoTreat: "white",
    location: "Remote",
    roles: [
      {
        title: "Mobile Developer Intern",
        type: "Internship",
        start: "Aug 2024",
        end: "Oct 2024",
        bullets: [{ text: "Built a cross-platform mobile application with React Native and Next.js, integrated with the OpenAI API." }],
      },
    ],
  },
  {
    slug: "dlrc",
    name: "Diliman Learning Resource Center",
    short: "DLRC",
    logo: "/logos/dlrc.png",
    logoTreat: "white",
    location: "Quezon City, PH",
    roles: [{ title: "Software Engineer Intern", type: "Internship", start: "Jun 2024", end: "Jul 2024", bullets: [] }],
  },
  {
    slug: "dost-asti",
    name: "DOST Advanced Science and Technology Institute",
    short: "DOST-ASTI",
    logo: "/logos/dost-asti.png",
    logoTreat: "invert",
    location: "Quezon City, PH",
    roles: [
      {
        title: "Software Engineer Intern",
        type: "Internship",
        start: "Jul 2023",
        end: "Sep 2023",
        bullets: [
          {
            text: "Developed a Django and PostgreSQL application for visualizing millions of environmental sensor readings, and evaluated technical requirements and security risks.",
          },
        ],
      },
    ],
  },
];

export const education = {
  school: "University of the Philippines Diliman",
  degree: "BS Computer Science, magna cum laude",
  year: "2025",
  thesis: "Transformer architectures and inference efficiency for rice disease classification.",
};
