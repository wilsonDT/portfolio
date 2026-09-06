"use client";
import Image from "next/image";
import { useState } from "react";
import type { Video } from "@/content/after-hours";
import { Frame } from "./Frame";

// Thumbnail only until clicked; YouTube's script never loads on its own.
export function VideoFacade({ v, i = 0 }: { v: Video; i?: number }) {
  const [playing, setPlaying] = useState(false);
  return (
    <Frame ratio="16/9" caption={`${v.place} · ${v.year} · 16:9`} subtitle={playing ? undefined : v.title} reveal i={i}>
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
          className="group absolute inset-0 block h-full w-full cursor-pointer"
        >
          <Image
            src={`https://i.ytimg.com/vi/${v.id}/hqdefault.jpg`}
            alt=""
            fill
            sizes="(max-width: 800px) 96vw, 800px"
            className="object-cover"
          />
          <span className="absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[#f2f0ea]/70 bg-black/35">
            <svg aria-hidden viewBox="0 0 24 24" width="18" height="18" fill="#f2f0ea">
              <path d="M8 5v14l11-7z" />
            </svg>
          </span>
        </button>
      )}
    </Frame>
  );
}
