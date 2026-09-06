"use client";
import Image from "next/image";
import { useState } from "react";
import type { Video } from "@/content/after-hours";
import { Frame } from "./Frame";

// maxres is the true 16:9 upload frame; hqdefault is 480x360 with bars, cropped away by object-cover and enough for a rail card.
const still = (id: string) => `https://i.ytimg.com/vi/${id}/maxresdefault.jpg`;
const thumb = (id: string) => `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;

// One film runs in the frame; the rest wait in the rail below, graded back until picked.
// Thumbnails only until a play: YouTube's script never loads on its own.
export function Reel({ videos }: { videos: Video[] }) {
  const [active, setActive] = useState(0);
  const [playing, setPlaying] = useState(false);
  const v = videos[active];

  return (
    <>
      <Frame ratio="16/9" caption={`${v.year} · ${v.kit}`} subtitle={playing ? undefined : v.title} reveal>
        {playing ? (
          <iframe
            className="absolute inset-0 h-full w-full"
            src={`https://www.youtube-nocookie.com/embed/${v.id}?autoplay=1&rel=0`}
            title={v.title}
            allow="autoplay; encrypted-media; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <button
            type="button"
            onClick={() => setPlaying(true)}
            aria-label={`Play ${v.title}`}
            className="absolute inset-0 block h-full w-full cursor-pointer"
          >
            <Image src={still(v.id)} alt="" fill sizes="(max-width: 1000px) 96vw, 960px" className="object-cover" />
            <span className="absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[#f2f0ea]/70 bg-black/35">
              <svg aria-hidden viewBox="0 0 24 24" width="18" height="18" fill="#f2f0ea">
                <path d="M8 5v14l11-7z" />
              </svg>
            </span>
          </button>
        )}
      </Frame>

      <ul className="reel wide" aria-label="Films">
        {videos.map((x, i) => (
          <li key={x.id}>
            <button
              type="button"
              onClick={() => {
                setActive(i);
                setPlaying(false);
              }}
              aria-current={i === active ? "true" : undefined}
              className="reel-card"
            >
              <span className="reel-still">
                <Image src={thumb(x.id)} alt="" fill sizes="240px" className="object-cover" />
              </span>
              <span className="reel-name">{x.title}</span>
              <span className="mono block">{x.year}</span>
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
