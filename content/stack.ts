// The stack, set as credits like the Say hi block: a mono label, the names, and under them the shipped system they came from. That last line is the receipt; a row without one does not go on the site.
// Names started from the resume's Technical Skills block. On 2026-09-06 Wilson confirmed the rest by his word, from a list of what a standard AI engineer set carries; what he did not confirm stayed off. No logos, no chips, no proficiency numbers.
export type StackRow = { label: string; names: string[]; receipt: string };

export const stack: StackRow[] = [
  {
    label: "Models",
    names: ["Azure OpenAI", "OpenAI SDK", "Claude", "Gemini", "Llama", "Azure AI Foundry", "Ollama"],
    receipt: "Mr. Bot · Training simulator · Resume Roaster PH",
  },
  {
    label: "Agents",
    names: ["LangChain", "LangGraph", "OpenAI Agents SDK", "Pydantic AI", "RAG", "Azure AI Search"],
    receipt: "Mr. Bot · Training simulator",
  },
  {
    label: "Evals & safety",
    names: ["DeepEval", "Langfuse", "Foundry tracing", "Azure AI Content Safety", "prompt-injection defenses", "PII redaction"],
    receipt: "Model evaluation · Enterprise planning assistant",
  },
  {
    label: "Fine-tuning",
    names: ["LoRA", "Azure OpenAI", "AWS Bedrock"],
    receipt: "Model evaluation",
  },
  {
    label: "Voice",
    names: ["Whisper", "OpenAI Realtime API", "Azure Speech"],
    receipt: "Voice agents",
  },
  {
    label: "ML",
    names: ["Hugging Face Transformers", "ViT", "Gradio", "Hugging Face Spaces", "pandas", "NumPy", "scikit-learn"],
    receipt: "Rice leaf detection",
  },
  {
    label: "Coding agents",
    names: ["Claude Code", "OpenAI Codex", "Cursor", "MCP servers", "harness engineering"],
    receipt: "AI SDLC framework",
  },
  {
    label: "Code",
    names: ["TypeScript", "Next.js", "React", "Python", "FastAPI", "Pydantic", "REST APIs", "PostgreSQL", "Redis"],
    receipt: "Enterprise planning assistant",
  },
  {
    label: "Quality",
    names: ["pytest", "Playwright", "SonarQube", "Dependabot"],
    receipt: "Enterprise planning assistant",
  },
  {
    label: "Data",
    names: ["Azure Databricks", "Delta Lake", "Unity Catalog", "Databricks Jobs", "PySpark", "Dagster", "Azure Document Intelligence", "Microsoft Graph API", "ETL"],
    receipt: "Document intelligence",
  },
  {
    label: "Cloud",
    names: ["Azure", "AWS", "AKS", "Blob Storage", "Entra ID", "Key Vault", "Vercel"],
    receipt: "Enterprise planning assistant · Side projects",
  },
  {
    label: "Ops",
    names: ["Terraform", "Docker", "Azure DevOps Pipelines", "Application Insights", "Azure Log Analytics", "KQL"],
    receipt: "Enterprise planning assistant",
  },
];

// The index carries one line of the names people scan for and links here for the rest. Wilson's pick to edit; order is models, agents, languages, frameworks, data, infra, AI-native.
export const stackLine = ["Azure OpenAI", "Claude", "Gemini", "LangGraph", "Python", "TypeScript", "Next.js", "FastAPI", "Azure Databricks", "Terraform", "Claude Code"];
