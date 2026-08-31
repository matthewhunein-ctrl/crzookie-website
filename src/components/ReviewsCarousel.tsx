"use client";

import { useRef, useState } from "react";
import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useTransform,
  wrap,
} from "framer-motion";

type Review = { quote: string; source: string };

const reviews: Review[] = [
  {
    quote:
      "We drove ALL the way from LA just to come to Crzookie, and it was beyond worth it. The second we walked in, they treated us like VIPs, letting us try every sample and making the whole experience unforgettable.",
    source: "Yelp Review",
  },
  {
    quote:
      "Rich, chewy, and just the right level of sweet. The cookies and cream cookie with Cookie Monster ice cream is a perfect combination.",
    source: "Yelp Review",
  },
  {
    quote:
      "My wife wouldn't stop talking about these cookies. I wasn't super thrilled about the drive at first, but honestly, they were legit. Soft, thick, stuffed with chocolate and all kinds of good stuff.",
    source: "Yelp Review",
  },
  {
    quote:
      "The shop is so cute and smells incredible. Hands down the best employees. Their energy, kindness, and customer service made the whole trip worth it.",
    source: "Yelp Review",
  },
  {
    quote:
      "The dairy-free vanilla chip was amazing, and I'm not even dairy-free. This place has something for everyone.",
    source: "Yelp Review",
  },
  {
    quote:
      "Huntington Beach's best kept secret. Warm cookies, great ice cream, and a vibe you just want to stay in.",
    source: "Yelp Review",
  },
];

const Stars = () => (
  <div className="flex gap-0.5" aria-label="5 out of 5 stars">
    {Array.from({ length: 5 }).map((_, i) => (
      <svg key={i} width="18" height="18" viewBox="0 0 24 24" fill="#6b9fd4">
        <path d="M12 2l2.9 6.6 7.1.6-5.4 4.7 1.6 7L12 17.8 5.8 21l1.6-7L2 9.3l7.1-.6L12 2z" />
      </svg>
    ))}
  </div>
);

function Card({ review }: { review: Review }) {
  return (
    <figure className="flex w-[300px] shrink-0 flex-col gap-4 rounded-[var(--radius-card)] bg-white p-7 shadow-card sm:w-[380px]">
      <Stars />
      <blockquote className="font-body text-[0.95rem] italic leading-relaxed text-ink">
        “{review.quote}”
      </blockquote>
      <figcaption className="mt-auto font-body text-sm font-medium text-ink-mid">
        {review.source}
      </figcaption>
    </figure>
  );
}

export default function ReviewsCarousel() {
  const baseX = useMotionValue(0);
  const [paused, setPaused] = useState(false);
  // baseX is in percent of a single (un-duplicated) track; wrap over [-50, 0).
  const x = useTransform(baseX, (v) => `${wrap(-50, 0, v)}%`);

  useAnimationFrame((_, delta) => {
    if (paused) return;
    const speed = 2.2; // percent per second
    baseX.set(baseX.get() - (delta / 1000) * speed);
  });

  const trackRef = useRef<HTMLDivElement>(null);

  return (
    <div
      className="marquee-mask overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <motion.div ref={trackRef} className="flex w-max gap-6" style={{ x }}>
        {[...reviews, ...reviews].map((r, i) => (
          <Card key={i} review={r} />
        ))}
      </motion.div>
    </div>
  );
}
