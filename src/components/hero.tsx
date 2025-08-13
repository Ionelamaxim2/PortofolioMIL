"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { LiquidButton } from "@/components/ui/liquid-glass-button";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative grid md:grid-cols-2 gap-10 items-center pt-8 md:pt-28"
    >
      <div>
        <div className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs border border-[--color-border] bg-[--color-muted] text-white/80">
          <span className="inline-block h-2 w-2 rounded-full bg-[--color-primary]" />
          Full‑Stack Developer
        </div>
        <h1 className="mt-4 text-5xl md:text-7xl font-semibold tracking-tight gradient-text inline-flex items-center gap-3 display-font">
          Maxim Ionela
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[--color-border]">
            <ArrowUpRight size={18} />
          </span>
        </h1>
        <p className="mt-5 text-white/60 max-w-2xl small-font text-base md:text-lg">
          I’m a versatile developer specializing in graphic‑quality web UI and
          product engineering that helps grow your business. Let’s build
          something great!
        </p>
        <div className="mt-8 flex gap-3">
          <Link href="#projects">
            <LiquidButton className="px-6 py-3 text-sm font-medium">
              See All Projects
            </LiquidButton>
          </Link>
          <Link href="#resume">
            <LiquidButton className="px-6 py-3 text-sm font-medium">
              Contact Now
            </LiquidButton>
          </Link>
        </div>
      </div>
      <div className="relative h-[1px] md:h-[1px]" />
    </section>
  );
}
