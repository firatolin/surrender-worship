export type NavLink = {
  href: string;
  label: string;
};

export const navLinks: NavLink[] = [
  { href: "/", label: "Home" },
  { href: "/who-we-are", label: "Who We Are" },
  { href: "/services", label: "Services" },
  { href: "/media", label: "Media" },
  { href: "/contact", label: "Contact" },
  { href: "/donation", label: "Donation" },
];