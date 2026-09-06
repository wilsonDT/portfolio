// Wilson's own films, newest first. Titles and years are his uploads; `kit` is the camera credit from each title.
export type Video = { id: string; title: string; year: string; kit: string };

export const afterHours: { note: string; videos: Video[] } = {
  note: "When I'm not working, I make videos. Cinematography is how I tell a story, and color grading is the part I love most. They're mostly trips. I shoot and cut all of it myself.",
  videos: [
    { id: "KRr7f29RlJQ", title: "Bangkok", year: "2026", kit: "DJI Osmo Pocket 4P" },
    { id: "8jqFzdJyPZc", title: "Iloilo", year: "2026", kit: "Sony a6700" },
    { id: "rP1CignQrpo", title: "Bali", year: "2026", kit: "Sony a6700 · DJI Osmo" },
    { id: "a4VDbVfrgDI", title: "Mount Ulap", year: "2026", kit: "Sony a6700 · DJI Action 5 Pro" },
    { id: "QMF7sMh4EC4", title: "Sagada", year: "2025", kit: "Sony a6700" },
    { id: "rrus8YvxiXk", title: "Manila Esplanade", year: "2025", kit: "Sony a6700" },
  ],
};
