"use client";
import { motion } from "framer-motion";

export default function StickyFooter() {
  return (
    <div
      className="relative h-[22vh]"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="relative h-[calc(100vh+22vh)] -top-[100vh]">
        <div className="h-[22vh] sticky top-[calc(100vh-22vh)]">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-card via-muted to-card/90 py-4 md:py-6 px-4 md:px-12 h-full w-full flex flex-col justify-center relative overflow-hidden border-t border-[--color-border]"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent pointer-events-none" />
            <div className="container-xxl flex items-center justify-between gap-6 z-10 text-sm">
              <div className="text-white/70">
                © {new Date().getFullYear()} Maxim Ionela
              </div>
              <div className="flex items-center gap-4 text-white/80">
                <a href="#resume">Resume</a>
                <a href="#projects">Projects</a>
                <a href="#contact">Contact</a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
