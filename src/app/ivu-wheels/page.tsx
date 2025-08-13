import Image from "next/image";
import { Gauge, Accessibility, ShieldCheck, Search } from "lucide-react";
import Link from "next/link";

export default function IVUWheelsPage() {
  return (
    <main className="container-xxl py-14 md:py-20 space-y-10">
      <header className="space-y-2 md:space-y-0 md:flex md:items-center md:justify-between gap-3">
        <h1 className="text-3xl md:text-5xl font-semibold gradient-text display-font">
          IVU‑WHEELS
        </h1>
        <div className="flex w-full md:w-auto items-center gap-2 md:gap-3">
          <p className="text-sm text-white/70 small-font flex-1 md:flex-initial">
            E‑commerce project summary
          </p>
          <Link href="/" className="inline-block">
            <span className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 text-sm">
              ← Go back
            </span>
          </Link>
        </div>
      </header>

      <section className="grid md:grid-cols-2 gap-6 items-start">
        {/* On mobile, details first; on desktop, images left */}
        <div className="order-2 md:order-1 grid grid-cols-2 gap-4 md:gap-5">
          <div className="col-span-2 relative rounded-2xl overflow-hidden border border-[--color-border] bg-[--color-muted] aspect-[16/9]">
            <Image
              src="/wheelslaptop1.webp"
              alt="Wheels laptop 1"
              fill
              className="object-contain"
            />
          </div>
          <div className="relative rounded-2xl overflow-hidden border border-[--color-border] bg-[--color-muted] aspect-[9/19]">
            <Image
              src="/wheelsphone1.webp"
              alt="Wheels phone 1"
              fill
              className="object-contain"
            />
          </div>
          <div className="relative rounded-2xl overflow-hidden border border-[--color-border] bg-[--color-muted] aspect-[9/19]">
            <Image
              src="/wheelsphone2.webp"
              alt="Wheels phone 2"
              fill
              className="object-contain"
            />
          </div>
          <div className="col-span-2 relative rounded-2xl overflow-hidden border border-[--color-border] bg-[--color-muted] aspect-[16/9]">
            <Image
              src="/wheelslaptop2.webp"
              alt="Wheels laptop 2"
              fill
              className="object-contain"
            />
          </div>
        </div>

        {/* Details */}
        <div className="order-1 md:order-2 space-y-6 md:space-y-8">
          <div className="glass rounded-2xl p-4 md:p-7">
            <h2 className="text-xl md:text-2xl font-semibold text-[--color-primary] display-font">
              Technologies
            </h2>
            <ul className="mt-3 text-base md:text-lg text-white/80 small-font list-disc pl-5 space-y-1">
              <li>Next.js, React, TypeScript, Tailwind CSS</li>
              <li>Node.js, Express.js</li>
              <li>Context API, REST APIs</li>
            </ul>
          </div>
          <div className="glass rounded-2xl p-4 md:p-7">
            <h2 className="text-xl md:text-2xl font-semibold text-[--color-primary] display-font">
              What I implemented
            </h2>
            <p className="mt-2 text-base md:text-lg text-white/80 small-font">
              Responsive product pages, optimized images, cart/checkout flows,
              and smooth UI interactions. User account management, login/logout,
              previews orders, and more.
            </p>
          </div>
          <div className="glass rounded-2xl p-4 md:p-7">
            <h2 className="text-xl md:text-2xl font-semibold text-[--color-primary] display-font">
              Lighthouse
            </h2>
            <div className="mt-4 grid grid-cols-2 gap-3 md:gap-4">
              <div className="glass rounded-xl p-4 flex items-center gap-3">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-black/40 border border-white/10">
                  <Gauge size={16} />
                </span>
                <div>
                  <div className="text-[10px] uppercase text-white/60 small-font">
                    Performance
                  </div>
                  <div className="display-font text-xl md:text-2xl">93/100</div>
                </div>
              </div>
              <div className="glass rounded-xl p-4 flex items-center gap-3">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-black/40 border border-white/10">
                  <Accessibility size={16} />
                </span>
                <div>
                  <div className="text-[10px] uppercase text-white/60 small-font">
                    Accessibility
                  </div>
                  <div className="display-font text-xl md:text-2xl">91/100</div>
                </div>
              </div>
              <div className="glass rounded-xl p-4 flex items-center gap-3">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-black/40 border border-white/10">
                  <ShieldCheck size={16} />
                </span>
                <div>
                  <div className="text-[10px] uppercase text-white/60 small-font">
                    Best practices
                  </div>
                  <div className="display-font text-xl md:text-2xl">97/100</div>
                </div>
              </div>
              <div className="glass rounded-xl p-4 flex items-center gap-3">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-black/40 border border-white/10">
                  <Search size={16} />
                </span>
                <div>
                  <div className="text-[10px] uppercase text-white/60 small-font">
                    SEO
                  </div>
                  <div className="display-font text-xl md:text-2xl">98/100</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
