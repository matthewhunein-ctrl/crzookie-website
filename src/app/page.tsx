import Button from "@/components/Button";
import SectionEyebrow from "@/components/SectionEyebrow";
import Photo from "@/components/Photo";
import Reveal from "@/components/Reveal";
import ReviewsCarousel from "@/components/ReviewsCarousel";
import InstagramGrid from "@/components/InstagramGrid";
import CateringForm from "@/components/CateringForm";
import { links } from "@/lib/site";

const featured = [
  {
    src: "/images/cookies.jpg",
    label: "COOKIE PHOTO",
    title: "Warm Cookies",
    body: "Thick, chewy, and baked to order in eleven rotating flavors. Best eaten warm.",
  },
  {
    src: "/images/ice-cream.jpg",
    label: "ICE CREAM PHOTO",
    title: "Ice Cream Scoops",
    body: "Sixteen house-made flavors including Dubai Chocolate, Kitty Kitty Bang Bang, and Sea Salt Caramel Truffle.",
  },
  {
    src: "/images/dirty-sodas.jpg",
    label: "DIRTY SODA PHOTO",
    title: "Dirty Sodas",
    body: "Your favorite sodas leveled up with cream, syrups, and a splash of fruit.",
  },
  {
    src: "/images/milkshakes.jpg",
    label: "MILKSHAKE PHOTO",
    title: "Milkshakes",
    body: "Hand-spun thick shakes blended with our house-made ice cream.",
  },
];

export default function Home() {
  return (
    <>
      {/* ===== Section 1 — Hero ===== */}
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
        {/* Full-bleed hero photo */}
        <Photo src="/images/hero.jpg" label="HERO PHOTO" fill priority />
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-navy/55" />
        {/* Subtle cookie/drip texture */}
        <div className="cookie-pattern absolute inset-0 opacity-[0.07]" />

        <div className="relative z-10 mx-auto max-w-4xl px-6 pt-24 text-center">
          <Reveal>
            <SectionEyebrow light>Huntington Beach, CA</SectionEyebrow>
          </Reveal>
          <Reveal delay={0.15}>
            <h1 className="mt-4 font-display text-[clamp(3rem,8vw,6rem)] font-bold leading-[0.98] text-white">
              Warm Cookies. Cold Scoops. Pure HB.
            </h1>
          </Reveal>
          <Reveal delay={0.3}>
            <p className="mx-auto mt-6 max-w-2xl font-body text-[1.1rem] leading-relaxed text-white/90">
              Freshly baked cookies, handcrafted ice cream, dirty sodas, and
              hand-spun milkshakes, made daily in Huntington Beach.
            </p>
          </Reveal>
          <Reveal delay={0.45}>
            <div className="mt-9 flex flex-col items-center justify-center gap-5">
              <Button href={links.uberEats} variant="primary" size="xl" external>
                Order Now
              </Button>
              <div className="flex items-center gap-4 font-body text-base text-white/90">
                <a
                  href={links.toastRewards}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-sm underline-offset-4 transition-colors hover:text-white hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink focus-visible:ring-offset-2"
                >
                  Rewards
                </a>
                <span aria-hidden="true" className="text-white/40">
                  |
                </span>
                <a
                  href={links.laTimes}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-sm underline-offset-4 transition-colors hover:text-white hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink focus-visible:ring-offset-2"
                >
                  Crz Story
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ===== Section 2 — Order Online ===== */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal className="text-center">
            <SectionEyebrow>Get It Delivered</SectionEyebrow>
            <h2 className="mt-3 font-display text-[clamp(2rem,4vw,3rem)] text-ink">
              Order Your Way
            </h2>
          </Reveal>

          <div className="mx-auto mt-12 grid max-w-3xl gap-6 sm:grid-cols-2">
            <Reveal>
              <DeliveryCard
                accent="var(--color-doordash)"
                name="DoorDash"
                wordmarkColor="text-doordash"
                blurb="Fast delivery to your door."
                href={links.doorDash}
              />
            </Reveal>
            <Reveal delay={0.12}>
              <DeliveryCard
                accent="var(--color-ubereats)"
                name="Uber Eats"
                wordmarkColor="text-ubereats"
                blurb="Track your order in real time."
                href={links.uberEats}
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* ===== Section 2b — Catering ===== */}
      <section className="bg-offwhite py-24">
        <div className="mx-auto max-w-3xl px-6">
          <Reveal className="text-center">
            <SectionEyebrow>Parties, Offices &amp; Weddings</SectionEyebrow>
            <h2 className="mt-3 font-display text-[clamp(2rem,4vw,3rem)] text-ink">
              We Cater!
            </h2>
            <p className="mx-auto mt-5 max-w-xl font-body leading-relaxed text-ink-mid">
              Warm cookies and cold scoops, brought to your event. Tell us what
              you&apos;re planning and we&apos;ll get back to you within 24
              hours.
            </p>
          </Reveal>

          <Reveal delay={0.15} className="mt-10">
            <CateringForm source="Homepage" />
          </Reveal>
        </div>
      </section>

      {/* ===== Section 3 — Loyalty ===== */}
      <section className="bg-blue py-24 text-white">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 md:grid-cols-2">
          <Reveal>
            <SectionEyebrow light>Crzookie Crew</SectionEyebrow>
            <h2 className="mt-3 font-display text-[clamp(2rem,4vw,3.25rem)]">
              Every Bite Earns
            </h2>
            <p className="mt-5 max-w-md font-body leading-relaxed text-white/90">
              Join the Crzookie Crew and start earning from your very first
              order. Sign up and get $5 off, then earn 1 point for every $1 you
              spend. Hit 50 points and score another $5 reward. It adds up fast.
            </p>
            <div className="mt-8">
              <Button href={links.toastRewards} variant="white" size="lg">
                Sign Up &amp; Get $5 Off
              </Button>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="rounded-[var(--radius-card)] bg-white p-8 shadow-pop">
              <h3 className="font-display text-xl text-blue">How it works</h3>
              <ul className="mt-5 space-y-4">
                {[
                  ["Sign up", "$5 off your next order"],
                  ["$1 spent", "1 point"],
                  ["50 points", "$5 reward"],
                ].map(([k, v]) => (
                  <li
                    key={k}
                    className="flex items-center justify-between gap-4 border-b border-line pb-4 last:border-0 last:pb-0"
                  >
                    <span className="font-body font-medium text-ink">{k}</span>
                    <span className="font-display text-lg text-blue">{v}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ===== Section 4 — Featured Menu ===== */}
      <section className="bg-offwhite py-24">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal className="mx-auto max-w-2xl text-center">
            <SectionEyebrow>What We Make</SectionEyebrow>
            <h2 className="mt-3 font-display text-[clamp(2rem,4vw,3rem)] text-ink">
              Something for Every Craving
            </h2>
            <p className="mt-5 font-body leading-relaxed text-ink-mid">
              Eleven cookie flavors baked fresh all day, sixteen unique ice cream
              flavors, refreshing dirty sodas, and hand-spun milkshakes. Mix,
              match, and build your perfect dessert.
            </p>
          </Reveal>

          <div className="mt-14 grid grid-cols-2 gap-5 lg:grid-cols-4">
            {featured.map((card, i) => (
              <Reveal key={card.title} delay={i * 0.1} className="h-full">
                <article className="flex h-full flex-col overflow-hidden rounded-[var(--radius-card)] bg-white shadow-card transition-transform duration-300 hover:-translate-y-1">
                  <Photo src={card.src} label={card.label} ratio="1 / 1" rounded={false} />
                  <div className="p-5">
                    <h3 className="font-display text-lg text-ink">{card.title}</h3>
                    <p className="mt-2 font-body text-sm leading-relaxed text-ink-mid">
                      {card.body}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-12 text-center">
            <Button href="/menu" variant="primary" size="lg">
              View Full Menu
            </Button>
          </Reveal>
        </div>
      </section>

      {/* ===== Section 5 — Our Story Teaser ===== */}
      <section className="bg-white py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 md:grid-cols-2">
          <Reveal>
            <Photo src="/images/story.png" label="STORY PHOTO" ratio="4 / 3" />
          </Reveal>
          <Reveal delay={0.15}>
            <SectionEyebrow>Our Story</SectionEyebrow>
            <h2 className="mt-3 font-display text-[clamp(2rem,4vw,3rem)] text-ink">
              Started at 17. Still Going.
            </h2>
            <p className="mt-5 max-w-md font-body leading-relaxed text-ink-mid">
              What began as a high school senior project became Huntington
              Beach&apos;s favorite dessert spot. Crzookie opened in March 2025,
              and hasn&apos;t slowed down since.
            </p>
            <div className="mt-8 flex flex-col items-start gap-4">
              <Button href="/our-story" variant="primary">
                Read Our Story
              </Button>
              <a
                href={links.laTimes}
                target="_blank"
                rel="noopener noreferrer"
                className="font-body text-sm font-medium text-blue hover:text-blue-dark"
              >
                Read the LA Times Feature →
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ===== Section 6 — Reviews ===== */}
      <section className="bg-white pb-24">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal className="mx-auto max-w-2xl text-center">
            <SectionEyebrow>What People Are Saying</SectionEyebrow>
            <h2 className="mt-3 font-display text-[clamp(2rem,4vw,3rem)] text-ink">
              Don&apos;t Take Our Word for It
            </h2>
          </Reveal>
        </div>
        <div className="mt-12">
          <ReviewsCarousel />
        </div>
      </section>

      {/* ===== Section 7 — Instagram ===== */}
      <section className="bg-navy py-24">
        <div className="mx-auto max-w-5xl px-6">
          <Reveal className="text-center">
            <SectionEyebrow light>Follow Along</SectionEyebrow>
            <h2 className="mt-3 font-display text-[clamp(2rem,4vw,3rem)] text-white">
              @crzookie
            </h2>
          </Reveal>

          <div className="mt-12">
            <InstagramGrid />
          </div>

          <Reveal className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button href={links.instagram} variant="secondary" size="lg">
              Follow Us on Instagram
            </Button>
            <Button href={links.tiktok} variant="secondary" size="lg">
              Follow Us on TikTok
            </Button>
          </Reveal>
        </div>
      </section>
    </>
  );
}

/* ---- Local helper: delivery card ---- */
function DeliveryCard({
  accent,
  name,
  wordmarkColor,
  blurb,
  href,
}: {
  accent: string;
  name: string;
  wordmarkColor: string;
  blurb: string;
  href: string;
}) {
  return (
    <div
      className="flex h-full flex-col rounded-[var(--radius-card)] border-l-4 bg-white p-7 shadow-card transition-transform duration-300 hover:-translate-y-1"
      style={{ borderLeftColor: accent }}
    >
      <span className={`font-display text-2xl ${wordmarkColor}`}>{name}</span>
      <p className="mt-2 font-body text-sm text-ink-mid">{blurb}</p>
      <div className="mt-6">
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center rounded-full px-6 py-3 font-body text-sm font-medium text-white shadow-card transition-all duration-300 hover:-translate-y-0.5"
          style={{ backgroundColor: accent }}
        >
          Order on {name}
        </a>
      </div>
    </div>
  );
}
