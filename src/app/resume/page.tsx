import Image from "next/image";
import Link from "next/link";
import { LiquidButton } from "@/components/ui/liquid-glass-button";

export default function ResumePage() {
  return (
    <main className="container-xxl py-14 md:py-20 space-y-6">
      <header className="flex flex-col md:flex-row items-start md:items-center md:justify-between gap-3">
        <h1 className="text-3xl md:text-5xl font-semibold gradient-text display-font">
          Resume
        </h1>
        <div className="flex w-full md:w-auto gap-3 flex-wrap">
          <a href="/CVfinal.png" download className="w-full md:w-auto">
            <LiquidButton className="px-5 w-full">Download</LiquidButton>
          </a>
          <Link href="/" className="w-full md:w-auto">
            <LiquidButton className="px-5 w-full">Go back</LiquidButton>
          </Link>
        </div>
      </header>

      <section className="rounded-2xl border border-[--color-border] bg-[--color-muted] p-2 md:p-4">
        <div className="relative w-full h-[70vh] md:h-[85vh] rounded-xl overflow-hidden border border-[--color-border] bg-black/30">
          <Image
            src="/CVfinal.png"
            alt="Resume"
            fill
            className="object-contain"
          />
        </div>
      </section>
    </main>
  );
}
