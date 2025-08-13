"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useRef, useState } from "react";

type ShootingStarsProps = {
  minSpeed?: number;
  maxSpeed?: number;
  minDelay?: number;
  maxDelay?: number;
  starColor?: string;
  trailColor?: string;
  className?: string;
};

type Star = {
  id: number;
  x: number;
  y: number;
  angle: number;
  scale: number;
  speed: number;
  distance: number;
};

function randomStart() {
  const side = Math.floor(Math.random() * 4);
  const off =
    Math.random() * (typeof window !== "undefined" ? window.innerWidth : 1000);
  switch (side) {
    case 0:
      return { x: off, y: 0, angle: 45 };
    case 1:
      return {
        x: typeof window !== "undefined" ? window.innerWidth : 1000,
        y: off,
        angle: 135,
      };
    case 2:
      return {
        x: off,
        y: typeof window !== "undefined" ? window.innerHeight : 800,
        angle: 225,
      };
    case 3:
      return { x: 0, y: off, angle: 315 };
    default:
      return { x: 0, y: 0, angle: 45 };
  }
}

export default function ShootingStars({
  minSpeed = 14,
  maxSpeed = 32,
  minDelay = 300,
  maxDelay = 1400,
  starColor = "#ec4899",
  trailColor = "#6366f1",
  className,
}: ShootingStarsProps) {
  const [star, setStar] = useState<Star | null>(null);
  const timer = useRef<number | null>(null);

  useEffect(() => {
    const create = () => {
      const { x, y, angle } = randomStart();
      setStar({
        id: Date.now(),
        x,
        y,
        angle,
        scale: 1,
        speed: Math.random() * (maxSpeed - minSpeed) + minSpeed,
        distance: 0,
      });
      const delay = Math.random() * (maxDelay - minDelay) + minDelay;
      timer.current = window.setTimeout(create, delay);
    };
    create();
    return () => {
      if (timer.current) window.clearTimeout(timer.current);
    };
  }, [minSpeed, maxSpeed, minDelay, maxDelay]);

  useEffect(() => {
    let raf: number;
    const move = () => {
      setStar((prev) => {
        if (!prev) return null;
        const nx = prev.x + prev.speed * Math.cos((prev.angle * Math.PI) / 180);
        const ny = prev.y + prev.speed * Math.sin((prev.angle * Math.PI) / 180);
        const nd = prev.distance + prev.speed;
        const ns = 1 + nd / 120;
        if (
          nx < -40 ||
          ny < -40 ||
          typeof window === "undefined" ||
          nx > window.innerWidth + 40 ||
          ny > window.innerHeight + 40
        )
          return null;
        return { ...prev, x: nx, y: ny, distance: nd, scale: ns };
      });
      raf = requestAnimationFrame(move);
    };
    raf = requestAnimationFrame(move);
    return () => cancelAnimationFrame(raf);
  }, [star]);

  return (
    <svg
      className={cn(
        "pointer-events-none fixed inset-0 -z-10 w-full h-full",
        className
      )}
      aria-hidden
    >
      {star && (
        <>
          <defs>
            <linearGradient id="shoot-grad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor={trailColor} stopOpacity={0} />
              <stop offset="100%" stopColor={starColor} stopOpacity={1} />
            </linearGradient>
          </defs>
          <rect
            x={star.x}
            y={star.y}
            width={10 * star.scale}
            height={1}
            fill="url(#shoot-grad)"
            transform={`rotate(${star.angle}, ${
              star.x + (10 * star.scale) / 2
            }, ${star.y + 0.5})`}
          />
        </>
      )}
    </svg>
  );
}
