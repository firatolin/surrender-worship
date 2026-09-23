import type { ReactNode } from "react";

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="text-xs uppercase tracking-widest text-brand-antique-gold">
      {children}
    </p>
  );
}