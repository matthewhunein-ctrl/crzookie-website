import type { Metadata } from "next";
import Photo from "@/components/Photo";
import Reveal from "@/components/Reveal";
import { links } from "@/lib/site";

export const metadata: Metadata = {
  title: "Our Story | Crzookie, Huntington Beach, CA",
  description:
    "From a high school senior project to Huntington Beach's favorite dessert spot. The story of Crzookie, opened in March 2025.",
};

const stats = [
  { label: "Opened", value: "March 2025" },
  { label: "Location", value: "Huntington Beach, CA" },
  { label: "Founded by", value: "Matthew, age 17" },
];

export default function OurStoryPage() {
  return (
    <>
      {/* Hero photo */}
      <section className="relative flex h-[60vh] min-h-[420px] items-center justify-center overflow-hidden">
        <Photo src="/images/story-hero.jpg" label="HERO STORY PHOTO" fill priority />
        <div className="absolute inset-0 bg-navy/55" />
        <div className="relative z-10 px-6 text-center">
          <Reveal>
            <h1 className="font-display text-[clamp(2.75rem,7vw,5rem)] text-white">
              Our Story
            </h1>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mt-4 font-body text-lg text-white/90">
              From a class project to a community staple.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Editorial body */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-[720px] space-y-6 px-6 font-body text-[1.125rem] leading-[1.85] text-ink">
          <Reveal>
            <p>
              Crzookie wasn&apos;t supposed to be a real business. It started as
              a senior project at Edison High School, a plan to open a cookie and
              ice cream shop in Huntington Beach. But Matthew didn&apos;t just
              present the idea. He negotiated the lease, managed the buildout,
              handled the permitting, and opened the doors in March 2025 at 17
              years old.
            </p>
          </Reveal>
          <Reveal>
            <p>
              What started as a dessert concept became something the neighborhood
              actually needed: a place where warm cookies meet cold scoops, where
              the menu rotates with the seasons, and where the staff treats every
              customer like a regular. Crzookie serves twelve freshly baked cookie
              flavors, sixteen handcrafted ice cream flavors, dirty sodas, and
              hand-spun milkshakes, all made fresh, in-house, every single day.
            </p>
          </Reveal>
          <Reveal>
            <p>
              Today Crzookie is part of a family of local restaurants rooted in
              the same idea: quality food, real hospitality, and a deep connection
              to the communities we serve.
            </p>
          </Reveal>
          <Reveal>
            <p className="font-display text-2xl text-blue">
              We&apos;re just getting started.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Pull quote */}
      <section className="bg-blue py-20 text-white">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <Reveal>
            <blockquote className="font-display text-[clamp(1.5rem,3.5vw,2.5rem)] leading-snug">
              “Success tastes sweet for Huntington Beach teen running dessert
              shop.”
            </blockquote>
            <p className="mt-5 font-body text-sm uppercase tracking-[0.15em] text-white/80">
              Los Angeles Times, April 2025
            </p>
            <a
              href={links.laTimes}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex rounded-full bg-white px-7 py-3.5 font-body font-medium text-blue shadow-card transition-all duration-300 hover:-translate-y-0.5 hover:shadow-pop"
            >
              Read the Full Article →
            </a>
          </Reveal>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-4xl gap-8 px-6 text-center sm:grid-cols-3">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.1}>
              <p className="font-body text-xs font-medium uppercase tracking-[0.18em] text-pink-dark">
                {s.label}
              </p>
              <p className="mt-2 font-display text-2xl text-ink">{s.value}</p>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
