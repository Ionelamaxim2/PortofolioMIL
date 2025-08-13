"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

type Props = { children?: React.ReactNode };

export default function CursorFollow({ children }: Props) {
  const [cursorText, setCursorText] = useState<string | null>(null);
  const [pendingText, setPendingText] = useState<string | null>(null);
  const [textWidth, setTextWidth] = useState<number>(0);
  const measureRef = useRef<HTMLSpanElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 350, damping: 40 });
  const springY = useSpring(y, { stiffness: 350, damping: 40 });

  const CIRCLE = 14;
  const bubbleW = cursorText ? Math.max(textWidth + 28, 40) : CIRCLE;
  const bubbleH = cursorText ? 36 : CIRCLE;

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      x.set(e.clientX - bubbleW / 2);
      y.set(e.clientY - bubbleH / 2);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [bubbleW, bubbleH, x, y]);

  useEffect(() => {
    if (pendingText && measureRef.current) {
      setTextWidth(measureRef.current.offsetWidth);
      setCursorText(pendingText);
      setPendingText(null);
    }
  }, [pendingText]);

  const handleOver = (e: React.MouseEvent) => {
    const t = (e.target as HTMLElement).getAttribute("data-cursor-text");
    if (t) setPendingText(t);
  };
  const handleOut = () => {
    setCursorText(null);
    setPendingText(null);
  };

  return (
    <div
      className="relative"
      onMouseOver={handleOver}
      onMouseOut={handleOut}
      style={{ cursor: "none" }}
    >
      {children}
      <motion.div
        className="pointer-events-none fixed z-[60]"
        style={{ left: 0, top: 0, x: springX, y: springY }}
      >
        <motion.div
          layout
          transition={{ duration: 0.28 }}
          animate={
            cursorText
              ? {
                  width: bubbleW,
                  height: bubbleH,
                  borderRadius: 18,
                  backgroundColor: "rgba(236,72,153,.95)",
                  color: "#fff",
                  paddingLeft: 12,
                  paddingRight: 12,
                }
              : {
                  width: CIRCLE,
                  height: CIRCLE,
                  borderRadius: 999,
                  backgroundColor: "rgba(236,72,153,.9)",
                  color: "#fff",
                  paddingLeft: 0,
                  paddingRight: 0,
                }
          }
          className="flex items-center justify-center text-xs font-medium shadow-lg"
        >
          {cursorText}
        </motion.div>
        {(pendingText || cursorText) && (
          <span
            ref={measureRef}
            style={{
              position: "absolute",
              visibility: "hidden",
              whiteSpace: "nowrap",
              fontSize: "0.75rem",
              fontWeight: 500,
            }}
          >
            {pendingText || cursorText}
          </span>
        )}
      </motion.div>
    </div>
  );
}
