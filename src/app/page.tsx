import Image from "next/image";
import Link from "next/link";
import { Linkedin, Mail, Phone } from "lucide-react";
import { ArrowUpRight } from "lucide-react";
import { Instagram, Dribbble, Twitter } from "lucide-react";
import HeroSection from "@/components/hero";
import LetsGrow from "@/components/lets-grow";
import { LiquidButton } from "@/components/ui/liquid-glass-button";
import TechTicker from "@/components/ui/TechTicker";

export default function Home() {
  return (
    <main className="container-xxl py-14 md:py-20 space-y-28">
      <HeroSection />

      <section id="about" className="grid md:grid-cols-2 gap-8 items-start">
        <div className="rounded-2xl overflow-hidden glass">
          <div className="relative aspect-[4/3]">
            <Image
              src="/profilphoto.webp"
              alt="Profile — Maxim Ionela"
              fill
              className="object-cover md:object-center translate-x-12 sm:translate-x-10 md:translate-x-0"
            />
            <div className="absolute left-3 bottom-3 flex items-center gap-2 rounded-full bg-black/55 px-2.5 py-1 text-xs text-white shadow-lg border border-white/10">
              <span className="inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400 ring-2 ring-emerald-400/40" />
              Available for work
            </div>
          </div>
          <div className="p-5">
            <h3 className="text-lg font-semibold">Hello I am Maxim Ionela</h3>
            <p className="text-sm text-white/70">
              Full‑Stack Developer Based in Romania.
            </p>
            <div className="mt-4 flex items-center gap-3 text-white/70">
              <a
                href="https://www.linkedin.com/in/ionelamaxim56"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-[--color-border] hover:text-white"
              >
                <Linkedin size={16} />
              </a>
              <a
                href="mailto:ionelamaxim56@gmail.com"
                aria-label="Email"
                className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-[--color-border] hover:text-white"
              >
                <Mail size={16} />
              </a>
              <a
                href="tel:+40786772343"
                aria-label="Phone"
                className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-[--color-border] hover:text-white"
              >
                <Phone size={16} />
              </a>
            </div>
            <hr className="my-5 border-[--color-border]" />
            <a
              href="#resume"
              className="inline-flex items-center justify-center rounded-full pill-gradient px-4 py-2 text-sm font-medium"
            >
              Connect with me
            </a>
          </div>
        </div>
        <div className="glass rounded-2xl p-6">
          <h3 className="font-medium text-[--color-primary] display-font">
            Area of Expertise
          </h3>
          <div className="mt-3 flex flex-wrap gap-2">
            {[
              "Web Design",
              "Web Development",
              "UI/UX Design",
              "Figma",
              "Next.js",
              "Tailwind CSS",
              "Node.js",
              "Express.js",
              "SQL",
              "MongoDB",
              "React",
              "JavaScript",
            ].map((t) => (
              <span
                key={t}
                className="px-3 py-1 text-xs rounded-md bg-[--color-muted] border border-[--color-border] text-white/80"
              >
                {t}
              </span>
            ))}
          </div>
          <hr className="my-6 border-[--color-border]" />
          <div className="space-y-3">
            {[
              [
                "IVU‑Wheels",
                "Next.js 14, React 18, TypeScript, Tailwind CSS, Node.js, Express.js, EJS, REST APIs, Context API, Render",
                "2024–2025",
                "https://ivu-wheels.onrender.com",
              ],
              [
                "IVURIRO",
                "HTML, CSS, JavaScript, Node.js, Express.js, EJS, SQL, Tailwind CSS",
                "2024",
                "https://ivuriro2.onrender.com",
              ],
            ].map(([project, tech, year, url], i) => (
              <div
                key={i}
                className="glass p-4 rounded-xl grid grid-cols-3 items-center"
              >
                <span className="text-sm text-white/90">
                  <a
                    href={(url as string) || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline decoration-white/20 hover:text-[--color-primary]"
                  >
                    {project}
                  </a>
                </span>
                <span className="text-sm text-white/70 text-center">
                  {tech}
                </span>
                <span className="text-xs text-white/60 text-right">{year}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="space-y-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs border border-[--color-border] bg-[--color-muted] text-white/80">
              <span className="inline-block h-2 w-2 rounded-full bg-[--color-primary]" />
              Recent Projects
            </div>
            <h2 className="mt-3 text-2xl md:text-4xl font-semibold gradient-text display-font">
              Recent Designs
            </h2>
            <p className="mt-2 text-base md:text-sm text-white/70">
              Showcase of some of my recent sleek websites
            </p>
          </div>
        </div>
        <div className="space-y-8 mt-2">
          {/* Feature: IVU‑Wheels */}
          <div className="relative overflow-hidden rounded-3xl border border-[--color-border] bg-[--color-muted] p-4 md:p-6">
            <div className="grid md:grid-cols-5 gap-6 items-center">
              {/* Visuals */}
              <Link
                href="/ivu-wheels"
                className="relative md:col-span-3 rounded-2xl p-6 bg-gradient-to-br from-[--color-primary]/20 via-transparent to-indigo-500/10 border border-[--color-border] block"
              >
                <div className="relative h-[260px] md:h-[360px]">
                  {/* Laptop */}
                  <div className="absolute left-0 bottom-0 h-full w-[72%]">
                    <Image
                      src="/wheelslaptop1.webp"
                      alt="IVU‑Wheels laptop"
                      fill
                      className="object-contain"
                    />
                  </div>
                  {/* Phone */}
                  <div className="absolute right-2 bottom-2 h-[70%] w-[28%]">
                    <Image
                      src="/wheelsphone1.webp"
                      alt="IVU‑Wheels phone"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              </Link>
              {/* Copy */}
              <div className="glass md:col-span-2 rounded-2xl p-5">
                <div className="uppercase tracking-wide text-xs text-white/60 display-font">
                  E‑commerce
                </div>
                <h3 className="mt-2 text-2xl md:text-4xl font-semibold display-font">
                  IVU‑Wheels
                </h3>
                <p className="mt-3 text-sm text-white/75">
                  E‑commerce experience for a car wheels store. Built with
                  Next.js, React, Tailwind, and a Node/Express backend.
                </p>
                <div className="mt-5 grid grid-cols-1 sm:flex sm:flex-wrap gap-3">
                  <LiquidButton
                    href="https://ivu-wheels.onrender.com"
                    target="_blank"
                    rel="noreferrer"
                    className="px-5 text-sm w-full"
                  >
                    View Live
                  </LiquidButton>
                  <LiquidButton
                    href="/ivu-wheels"
                    className="px-5 text-sm w-full"
                  >
                    Read More
                  </LiquidButton>
                </div>
              </div>
            </div>
          </div>

          {/* Feature: IVURIRO / Clinic */}
          <div className="relative overflow-hidden rounded-3xl border border-[--color-border] bg-[--color-muted] p-4 md:p-6">
            <div className="grid md:grid-cols-5 gap-6 items-center">
              {/* Visuals */}
              <Link
                href="/ivuriro"
                className="relative order-last md:order-first md:col-span-3 rounded-2xl p-6 bg-gradient-to-br from-indigo-500/10 via-transparent to-[--color-primary]/20 border border-[--color-border] block"
              >
                <div className="relative h-[260px] md:h-[360px]">
                  {/* Laptop */}
                  <div className="absolute right-0 bottom-0 h-full w-[72%]">
                    <Image
                      src="/clinicalaptop1.webp"
                      alt="Clinic laptop"
                      fill
                      className="object-contain"
                    />
                  </div>
                  {/* Phone */}
                  <div className="absolute left-2 bottom-2 h-[70%] w-[28%]">
                    <Image
                      src="/clinicaphone2.webp"
                      alt="Clinic phone"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              </Link>
              {/* Copy */}
              <div className="glass md:col-span-2 rounded-2xl p-5">
                <div className="uppercase tracking-wide text-xs text-white/60 display-font">
                  Presentation website
                </div>
                <h3 className="mt-2 text-2xl md:text-4xl font-semibold display-font">
                  IVURIRO Clinic
                </h3>
                <p className="mt-3 text-sm text-white/75">
                  Clean medical website with responsive layouts and smooth
                  interactions. Built with HTML, CSS, JavaScript, Node.js,
                  Express.js, Tailwind CSS.
                </p>
                <div className="mt-5 grid grid-cols-1 sm:flex sm:flex-wrap gap-3">
                  <LiquidButton
                    href="https://ivuriro2.onrender.com"
                    target="_blank"
                    rel="noreferrer"
                    className="px-5 text-sm w-full"
                  >
                    View Live
                  </LiquidButton>
                  <LiquidButton href="/ivuriro" className="px-5 text-sm w-full">
                    Read More
                  </LiquidButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech ticker full-bleed between projects and resume */}
      <TechTicker />

      <section id="resume" className="space-y-8">
        <div className="flex items-center justify-between">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs border border-[--color-border] bg-[--color-muted] text-white/80">
              <span className="inline-block h-2 w-2 rounded-full bg-[--color-primary]" />
              Resume
            </div>
            <h2 className="mt-3 text-2xl md:text-4xl font-semibold gradient-text display-font">
              Experience and Education
            </h2>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 items-start">
          {/* Premium timeline container */}
          <div className="md:col-span-2">
            <div className="glass rounded-2xl p-6">
              <ol className="relative border-s-2 border-[--color-border] pl-4">
                {[
                  {
                    title: "Freelance Full‑Stack Developer",
                    period: "2024 – 2025",
                    desc: [
                      "Responsive UIs with React 18, Next.js 14/15, Tailwind.",
                      "APIs with Node.js, Express.js, SQL.",
                      "Context API, custom hooks, performance optimization.",
                      "Deploy on Render/Vercel, SEO & a11y.",
                    ],
                  },
                ].map((item, i) => (
                  <li key={i} className="ms-4 py-4">
                    <div className="absolute -start-2 mt-2 h-3 w-3 rounded-full bg-[--color-primary] ring-2 ring-[--color-border]" />
                    <div className="glass rounded-xl p-5 transition-transform duration-300 hover:-translate-y-0.5">
                      <div className="h-1 w-full rounded-full bg-gradient-to-r from-[--color-primary] to-transparent mb-4" />
                      <div className="flex items-center justify-between">
                        <h3 className="font-medium font-[var(--font-display)] italic text-xl">
                          {item.title}
                        </h3>
                        <span className="text-xs text-white/60">
                          {item.period}
                        </span>
                      </div>
                      <ul className="mt-3 space-y-2 text-sm text-white/80 list-disc pl-5">
                        {item.desc.map((d, idx) => (
                          <li key={idx}>{d}</li>
                        ))}
                      </ul>
                    </div>
                    {i === 0 && (
                      <div className="mt-3">
                        <LiquidButton href="/resume" className="px-5">
                          SEE RESUME
                        </LiquidButton>
                      </div>
                    )}
                  </li>
                ))}
              </ol>
            </div>
          </div>

          {/* Premium side cards */}
          <div className="space-y-6">
            <div className="glass rounded-2xl p-5">
              <div className="h-1 w-full rounded-full bg-gradient-to-r from-[--color-primary] to-transparent mb-4" />
              <h3 className="font-medium text-[--color-primary]">Education</h3>
              <ul className="mt-3 space-y-2 text-sm text-white/80">
                <li>
                  <span className="font-medium">
                    “Anghel Saligny” Theoretical High School
                  </span>{" "}
                  — Sep 2019 - Jul 2023
                </li>
                <li>Udemy Full‑Stack Web Development Course (2024‑2025)</li>
                <li>Udemy JavaScript Course (2025)</li>
              </ul>
            </div>

            <div className="glass rounded-2xl p-5">
              <div className="h-1 w-full rounded-full bg-gradient-to-r from-[--color-primary] to-transparent mb-4" />
              <h3 className="font-medium text-[--color-primary]">Additional</h3>
              <ul className="mt-3 space-y-2 text-sm text-white/80 list-disc pl-5">
                <li>Languages: English, Romanian</li>
                <li>
                  Certifications: Cambridge English Certificate — Level B2
                </li>
                <li>
                  Activities: Built 3 fully responsive websites from scratch
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <LetsGrow />
    </main>
  );
}
