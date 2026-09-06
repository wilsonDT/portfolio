// Wilson's own films, newest first. Titles and years are his uploads; `kit` is the camera credit from each title.
export type Video = { id: string; title: string; year: string; kit: string };

export const afterHours: { note: string; videos: Video[] } = {
  note: "I also enjoy cinematography, color grading, and storytelling.",
  videos: [
    { id: "KRr7f29RlJQ", title: "Bangkok", year: "2026", kit: "DJI Osmo Pocket 4P" },
    { id: "8jqFzdJyPZc", title: "Iloilo", year: "2026", kit: "Sony a6700" },
    { id: "rP1CignQrpo", title: "Bali", year: "2026", kit: "Sony a6700 · DJI Osmo" },
    { id: "a4VDbVfrgDI", title: "Mount Ulap", year: "2026", kit: "Sony a6700 · DJI Action 5 Pro" },
    { id: "QMF7sMh4EC4", title: "Sagada", year: "2025", kit: "Sony a6700" },
    { id: "rrus8YvxiXk", title: "Manila Esplanade", year: "2025", kit: "Sony a6700" },
  ],
};
