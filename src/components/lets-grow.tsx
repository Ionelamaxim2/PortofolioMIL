"use client";
import { useState } from "react";
import { LiquidButton } from "@/components/ui/liquid-glass-button";
import ResumeModal from "@/components/ui/ResumeModal";

export default function LetsGrow() {
  const [status, setStatus] = useState<"idle" | "sent">("idle");
  return (
    <section className="space-y-6" id="contact">
      <h2 className="text-3xl md:text-5xl font-semibold">
        Contact <span className="gradient-text">me</span>
      </h2>
      <div className="grid md:grid-cols-2 gap-6 items-start">
        <div className="space-y-5 md:col-start-1 relative overflow-hidden rounded-2xl p-6 border border-[--color-border] bg-[--color-muted] ring-1 ring-[--color-primary]/20">
          <div className="absolute -top-24 -left-24 w-80 h-80 rounded-full bg-[--color-primary]/10 blur-3xl" />
          <div className="absolute -bottom-28 -right-20 w-72 h-72 rounded-full bg-indigo-500/10 blur-[100px]" />
          <div className="relative z-10 space-y-5">
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-medium">Availability</h3>
                <span className="text-[10px] rounded-full px-2 py-1 border border-[--color-border] bg-[--color-muted]">
                  Open to full‑time / remote
                </span>
              </div>
              <p className="text-sm text-white/70 mt-2">
                I’m focused on React/Next.js roles with strong UI and product
                mindset.
              </p>
            </div>
            <hr className="border-[--color-border]" />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-white/80">
              <a
                href="mailto:ionelamaxim56@gmail.com"
                className="glass rounded-md p-3 block w-full overflow-hidden text-ellipsis whitespace-nowrap"
                title="ionelamaxim56@gmail.com"
              >
                ionelamaxim56@gmail.com
              </a>
              <a
                href="https://www.linkedin.com/in/ionelamaxim56"
                target="_blank"
                rel="noreferrer"
                className="glass rounded-md p-3 block w-full overflow-hidden text-ellipsis whitespace-nowrap"
                title="LinkedIn"
              >
                LinkedIn-Maxim Ionela
              </a>
            </div>
          </div>
        </div>
        {/* right column empty now to keep original left highlighted */}
        <div className="md:col-start-2" />
      </div>
    </section>
  );
}
