import Link from "next/link";

type Variant = "primary" | "secondary" | "white" | "pink";
type Size = "md" | "lg" | "xl";

type Props = {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  size?: Size;
  external?: boolean;
  className?: string;
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-body font-medium transition-all duration-300 ease-[cubic-bezier(0.25,0.1,0.25,1)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-pink";

const sizes: Record<Size, string> = {
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-base",
  // 2x the lg padding, with a proportionally larger label.
  xl: "px-16 py-8 text-2xl",
};

const variants: Record<Variant, string> = {
  // blue fill, white text
  primary: "bg-blue text-white shadow-card hover:bg-blue-dark hover:-translate-y-0.5",
  // white/transparent outline (for dark/photo backgrounds)
  secondary:
    "border-2 border-white text-white hover:bg-white hover:text-ink",
  // white background, blue text (for colored backgrounds)
  white: "bg-white text-blue shadow-card hover:-translate-y-0.5 hover:shadow-pop",
  // bubblegum pink fill, white text
  pink: "bg-pink text-white shadow-card hover:bg-pink-dark hover:-translate-y-0.5",
};

export default function Button({
  href,
  children,
  variant = "primary",
  size = "md",
  external = false,
  className = "",
}: Props) {
  const classes = `${base} ${sizes[size]} ${variants[variant]} ${className}`;
  const isInternal = href.startsWith("/") && !external;

  if (isInternal) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={classes}
    >
      {children}
    </a>
  );
}
