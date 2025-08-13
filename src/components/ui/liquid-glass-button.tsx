"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

export const liquidbuttonVariants = cva(
  "inline-flex items-center transition-colors justify-center cursor-pointer gap-2 whitespace-nowrap rounded-full text-sm font-medium transition-[color,box-shadow,transform] disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 outline-none focus-visible:ring-2 focus-visible:ring-[--color-primary]/40",
  {
    variants: {
      variant: {
        default: "bg-transparent text-white",
      },
      size: {
        default: "h-10 px-5",
        lg: "h-12 px-6",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

type LiquidProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  React.AnchorHTMLAttributes<HTMLAnchorElement> &
  VariantProps<typeof liquidbuttonVariants> & {
    href?: string;
  };

export function LiquidButton({
  className,
  variant,
  size,
  href,
  children,
  ...props
}: LiquidProps) {
  const commonProps = {
    "data-slot": "button",
    className: cn(
      "relative",
      liquidbuttonVariants({ variant, size, className })
    ),
    ...props,
  } as any;

  if (href) {
    return (
      <a href={href} {...commonProps}>
        <div className="absolute top-0 left-0 z-0 h-full w-full rounded-full shadow-[inset_0_8px_24px_rgba(255,255,255,0.06),inset_0_-8px_24px_rgba(0,0,0,0.35),0_8px_24px_rgba(0,0,0,0.35)] border border-[--color-border]" />
        <div
          className="absolute top-0 left-0 -z-10 h-full w-full overflow-hidden rounded-full"
          style={{ backdropFilter: 'url("#container-glass") blur(8px)' }}
        />
        <span className="relative z-10">{children}</span>
        <GlassFilter />
      </a>
    );
  }

  return (
    <button {...commonProps}>
      <div className="absolute top-0 left-0 z-0 h-full w-full rounded-full shadow-[inset_0_8px_24px_rgba(255,255,255,0.06),inset_0_-8px_24px_rgba(0,0,0,0.35),0_8px_24px_rgba(0,0,0,0.35)] border border-[--color-border]" />
      <div
        className="absolute top-0 left-0 -z-10 h-full w-full overflow-hidden rounded-full"
        style={{ backdropFilter: 'url("#container-glass") blur(8px)' }}
      />
      <span className="relative z-10">{children}</span>
      <GlassFilter />
    </button>
  );
}

function GlassFilter() {
  return (
    <svg className="hidden">
      <defs>
        <filter id="container-glass" x="0%" y="0%" width="100%" height="100%">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.05 0.05"
            numOctaves="1"
            seed="1"
            result="turbulence"
          />
          <feGaussianBlur
            in="turbulence"
            stdDeviation="2"
            result="blurredNoise"
          />
          <feDisplacementMap
            in="SourceGraphic"
            in2="blurredNoise"
            scale="70"
            xChannelSelector="R"
            yChannelSelector="B"
            result="displaced"
          />
          <feGaussianBlur in="displaced" stdDeviation="4" result="finalBlur" />
          <feComposite in="finalBlur" in2="finalBlur" operator="over" />
        </filter>
      </defs>
    </svg>
  );
}

export default LiquidButton;
