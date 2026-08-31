type Props = {
  children: React.ReactNode;
  className?: string;
  /** Use on dark/colored backgrounds — switches to the brighter bubblegum pink. */
  light?: boolean;
};

// Accent label / eyebrow: body font, uppercase, tracked wide, pink.
export default function SectionEyebrow({
  children,
  className = "",
  light = false,
}: Props) {
  return (
    <span
      className={`font-body text-xs font-medium uppercase tracking-[0.2em] ${
        light ? "text-pink" : "text-pink-dark"
      } ${className}`}
    >
      {children}
    </span>
  );
}
