import type { Dossier } from "../types";
import { mrBot } from "./mr-bot";
import { trainingSimulator } from "./training-simulator";
import { planningAssistant } from "./planning-assistant";
import { modelEvaluation } from "./model-evaluation";

export const dossiers: Dossier[] = [mrBot, trainingSimulator, planningAssistant, modelEvaluation];

export function getDossier(slug: string): Dossier | undefined {
  return dossiers.find((d) => d.slug === slug);
}

export function nextDossier(slug: string): Dossier {
  const i = dossiers.findIndex((d) => d.slug === slug);
  return dossiers[(i + 1) % dossiers.length];
}
