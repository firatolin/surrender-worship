import Link from "next/link";
import type { ComponentProps } from "react";

type Variant = "primary" | "outline";

type Props = ComponentProps<typeof Link> & {
  variant?: Variant;
};

export function ButtonLink({
  variant = "primary",
  className = "",
  children,
  ...props
}: Props) {
  const base =
    "inline-flex items-center justify-center px-6 py-3 text-sm tracking-wide transition-colors";

  const variants: Record<Variant, string> = {
    primary:
      "bg-primary text-primary-foreground hover:bg-brand-light-gold",
    outline:
      "border border-border text-brand-ivory hover:border-brand-gold hover:text-brand-gold",
  };

  return (
    <Link
      className={`${base} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </Link>
  );
}