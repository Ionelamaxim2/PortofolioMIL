"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { LiquidButton } from "@/components/ui/liquid-glass-button";

export default function ResumeModal() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <div>
      <button
        className="w-full glass rounded-2xl p-5 text-center hover:-translate-y-0.5 transition-transform"
        onClick={() => setOpen(true)}
      >
        <span className="text-sm tracking-wide">SEE RESUME</span>
      </button>

      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
          onClick={() => setOpen(false)}
        >
          <div
            className="relative w-full max-w-4xl bg-[--color-muted] border border-[--color-border] rounded-2xl p-4 md:p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full h-[80vh] md:h-[85vh] rounded-xl overflow-hidden border border-[--color-border] bg-black/30">
              <Image
                src="/CVfinal.png"
                alt="Resume"
                fill
                className="object-contain"
              />
            </div>
            <div className="mt-4 flex items-center justify-between">
              <a href="/CVfinal.png" download className="inline-block">
                <LiquidButton className="px-5">Download</LiquidButton>
              </a>
              <button onClick={() => setOpen(false)} className="inline-block">
                <LiquidButton className="px-5">Close</LiquidButton>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
