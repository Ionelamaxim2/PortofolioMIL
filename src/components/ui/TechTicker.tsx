"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

type Tech = { label: string; icon?: string };

const techs: Tech[] = [
  { label: "Next.js" },
  { label: "React" },
  { label: "TypeScript" },
  { label: "Tailwind" },
  { label: "Node.js" },
  { label: "Express" },
  { label: "SQL" },
  { label: "MongoDB" },
  { label: "Framer Motion" },
  { label: "Figma" },
];

export default function TechTicker() {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    // Duplicate content to ensure seamless loop
    if (track.children.length > techs.length * 2) {
      while (track.firstChild) track.removeChild(track.firstChild);
    }
    const content = [...techs, ...techs, ...techs];
    content.forEach((t) => {
      const span = document.createElement("span");
      span.className =
        "inline-flex items-center gap-2 text-xs md:text-sm text-white/80 px-2";
      span.innerHTML = `<span class='inline-block h-1.5 w-1.5 rounded-full bg-[--color-primary]'></span>${t.label}`;
      track.appendChild(span);
    });

    let start = 0;
    let raf = 0;
    const step = () => {
      start -= 0.5;
      const half = track.scrollWidth / 3; // because we tripled the content
      if (start <= -half) start = 0;
      track.style.transform = `translateX(${start}px)`;
      raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <div
      className="relative overflow-hidden rounded-t-full rounded-b-full border-y border-[--color-border] bg-[--color-muted]"
      style={{
        marginLeft: "calc(50% - 50vw)",
        marginRight: "calc(50% - 50vw)",
      }}
    >
      <div
        ref={trackRef}
        className="whitespace-nowrap will-change-transform flex gap-8 py-3 px-4"
        aria-hidden
      />
    </div>
  );
}
