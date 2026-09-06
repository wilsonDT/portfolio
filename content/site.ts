export const site = {
  name: "Wilson De Torres",
  mark: "WDT",
  role: "AI Engineer",
  org: "Thinking Machines",
  email: "detorres.wilson21@gmail.com",
  domain: "wilsondetorres.com",
  // The poster's title card: the stem holds, the tail rolls under it. The first tail is his LinkedIn line and the one the OG card and the heading's name carry.
  // Exactly three tails; the roll's keyframes are keyed to three in globals.css and scripts/check-content.ts holds that.
  heroStem: "I build AI products",
  heroTail: ["people trust.", "for real problems.", "that work in prod."],
  // The poster's picture: Wilson's own graded still, exported 2026-09-06 (source PNG kept outside the repo; this JPEG is the full 3840px wide at quality 90). `focus` is the object-position that keeps the subject clear of the title on tall crops.
  keyArt: { src: "/key-art/observation-deck.jpg", focus: "52% 38%" },
  // Placeholder until Wilson writes his own. Assembled from his resume sentences, nothing added.
  about:
    "AI engineer at Thinking Machines. I ship production AI systems across automation, workforce training, voice, enterprise planning, and document intelligence, and validate them with real users and operational data. I translate ambiguous client requirements into scoped AI builds, architecture options, TCO estimates, phased delivery plans, and risk tradeoffs. BS Computer Science, magna cum laude, UP Diliman, 2025.",
  // Aggregate figures from the resume. The 350,000 stays on the Mr. Bot card.
  stats: [
    { value: "7+", label: "client engagements" },
    { value: "₱1.8M", label: "projected annual client savings" },
    { value: "54%", label: "cut in LLM token usage" },
  ],
  links: [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/wilsondetorres/" },
    { label: "GitHub", href: "https://github.com/wilsonDT" },
    { label: "YouTube", href: "https://www.youtube.com/@wilson.detorres" },
  ],
  // The site's own credit in the end block, set like the camera credit on a film.
  colophon: "Next.js · TypeScript · Vercel",
  sideProjectsLabel: "Side projects",
  sideProjects: [
    {
      title: "Resume Roaster PH",
      line: "Paste your resume. It gets roasted with zero mercy. For Filipinos, by Filipinos.",
      href: "https://resume-roaster-ph.vercel.app",
    },
    {
      title: "Rice leaf detection",
      line: "Transformer architectures and inference efficiency for rice disease classification. BS Computer Science thesis, UP Diliman.",
      href: "https://rice-leaf-detection.vercel.app",
    },
  ],
};
