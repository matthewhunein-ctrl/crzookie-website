"use client";

import { useState } from "react";
import Image from "next/image";
import PhotoPlaceholder from "./PhotoPlaceholder";

type Props = {
  /** Path under /public, e.g. "/images/hero.jpg". Drop the file in and it appears. */
  src: string;
  /** Alt text + the label shown on the fallback placeholder. */
  label: string;
  /** CSS aspect-ratio, e.g. "16 / 9", "1 / 1", "4 / 3". Ignored when `fill`. */
  ratio?: string;
  /** Full-bleed: absolutely fills the nearest positioned parent. */
  fill?: boolean;
  rounded?: boolean;
  priority?: boolean;
  className?: string;
};

// Shows the real photo when the file exists; otherwise the branded placeholder.
// This is what makes the site "just work" once images are dropped into /public/images.
export default function Photo({
  src,
  label,
  ratio = "1 / 1",
  fill = false,
  rounded = true,
  priority = false,
  className = "",
}: Props) {
  const [errored, setErrored] = useState(false);

  if (errored) {
    return (
      <PhotoPlaceholder
        label={label}
        ratio={ratio}
        fill={fill}
        rounded={rounded}
        className={className}
      />
    );
  }

  const radius = rounded && !fill ? "rounded-[var(--radius-card)]" : "";

  return (
    <div
      style={fill ? undefined : { aspectRatio: ratio }}
      className={`overflow-hidden ${
        fill ? "absolute inset-0 h-full w-full" : "relative w-full"
      } ${radius} ${className}`}
    >
      <Image
        src={src}
        alt={label.toLowerCase()}
        fill
        priority={priority}
        sizes={fill ? "100vw" : "(max-width: 768px) 100vw, 50vw"}
        className="object-cover"
        onError={() => setErrored(true)}
      />
    </div>
  );
}
