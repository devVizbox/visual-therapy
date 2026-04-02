"use client";

import { useEffect, useRef, useState } from "react";

type Animation = "fade-up" | "fade-left" | "fade-right" | "scale-in" | "fade-in";

const initial: Record<Animation, string> = {
  "fade-up":    "opacity:0;transform:translateY(32px)",
  "fade-left":  "opacity:0;transform:translateX(-32px)",
  "fade-right": "opacity:0;transform:translateX(32px)",
  "scale-in":   "opacity:0;transform:scale(0.94)",
  "fade-in":    "opacity:0",
};

export default function AnimateOnScroll({
  children,
  animation = "fade-up",
  delay = 0,
  className = "",
  threshold = 0.1,
}: {
  children: React.ReactNode;
  animation?: Animation;
  delay?: number;
  className?: string;
  threshold?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  // Parse initial style string into object
  const hiddenStyle = Object.fromEntries(
    initial[animation].split(";").map((s) => {
      const [k, v] = s.split(":");
      // camelCase the property
      const key = k.replace(/-([a-z])/g, (_, c) => c.toUpperCase());
      return [key, v];
    })
  );

  return (
    <div
      ref={ref}
      className={className}
      style={
        visible
          ? {
              opacity: 1,
              transform: "none",
              transition: `opacity 0.65s cubic-bezier(0.16,1,0.3,1) ${delay}ms, transform 0.65s cubic-bezier(0.16,1,0.3,1) ${delay}ms`,
            }
          : {
              ...hiddenStyle,
              transition: `opacity 0.65s cubic-bezier(0.16,1,0.3,1) ${delay}ms, transform 0.65s cubic-bezier(0.16,1,0.3,1) ${delay}ms`,
            }
      }
    >
      {children}
    </div>
  );
}
