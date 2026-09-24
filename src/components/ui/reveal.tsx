"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type Props = {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "section" | "article";
};

export function Reveal({
  children,
  delay = 0,
  className = "",
  as: Tag = "div",
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }

    // If the element is already fully in view on mount, reveal it immediately
    // (handles the case where the page loads scrolled — e.g., anchor links)
    const rect = el.getBoundingClientRect();
    const isAlreadyInView =
      rect.top < window.innerHeight && rect.bottom > 0;

    if (isAlreadyInView && window.scrollY === 0) {
      // Still wait a tick, then reveal — matches the "on mount" reveal timing
      window.requestAnimationFrame(() => setVisible(true));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (delay > 0) {
              window.setTimeout(() => setVisible(true), delay);
            } else {
              setVisible(true);
            }
            observer.unobserve(entry.target);
          }
        });
      },
      {
        // Negative bottom margin: element must be at least 80px into the viewport
        rootMargin: "0px 0px -80px 0px",
        threshold: 0.05,
      }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <Tag
      ref={ref as never}
      className={`reveal ${visible ? "is-visible" : ""} ${className}`}
    >
      {children}
    </Tag>
  );
}