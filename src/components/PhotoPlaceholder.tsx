type Props = {
  label: string;
  /** CSS aspect-ratio value, e.g. "16 / 9", "1 / 1", "3 / 1", "4 / 3". Ignored when `fill`. */
  ratio?: string;
  /** Absolutely fill the nearest positioned parent (for full-bleed heroes). */
  fill?: boolean;
  className?: string;
  rounded?: boolean;
};

const CameraIcon = () => (
  <svg
    width="34"
    height="34"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className="mb-3 opacity-90"
  >
    <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3Z" />
    <circle cx="12" cy="13" r="3.5" />
  </svg>
);

// Branded image placeholder: blue gradient + camera icon + uppercase label.
export default function PhotoPlaceholder({
  label,
  ratio = "1 / 1",
  fill = false,
  className = "",
  rounded = true,
}: Props) {
  return (
    <div
      style={{
        ...(fill ? {} : { aspectRatio: ratio }),
        backgroundImage:
          "linear-gradient(135deg, #6B9FD4 0%, #a8c8e8 100%)",
      }}
      className={`flex flex-col items-center justify-center text-center text-white ${
        fill ? "absolute inset-0 h-full w-full" : "w-full"
      } ${rounded && !fill ? "rounded-[var(--radius-card)]" : ""} ${className}`}
    >
      <CameraIcon />
      <span className="font-body text-xs font-medium uppercase tracking-[0.18em] opacity-95">
        {label}
      </span>
    </div>
  );
}
