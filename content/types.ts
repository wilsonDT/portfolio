export type NodeKind =
  | "input"
  | "reasoning"
  | "extraction"
  | "routine"
  | "exception"
  | "data"
  | "output";

export type FlowNode = { kind: NodeKind; text: string };

export type Dossier = {
  slug: string;
  index: string; // "01"
  title: string;
  deck: string; // one sentence
  client: { name: string; redacted: boolean; industry: string; region: string };
  year: string;
  role: string;
  stack: string[];
  scale: string;
  status: string;
  publicUrl?: string;
  frame: { src: string | null; caption: string; subtitle?: string };
  problem: string[];
  constraint: string[];
  architecture: {
    intro: string;
    nodes: FlowNode[];
    branches?: FlowNode[];
    note: string;
  };
  numbers: { value: string; label: string; source: string }[];
  whatIdChange: string[];
  featured: boolean;
};

export type Video = { id: string; title: string; place: string; year: string };
