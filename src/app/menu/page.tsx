import type { Metadata } from "next";
import Button from "@/components/Button";
import SectionEyebrow from "@/components/SectionEyebrow";
import Reveal from "@/components/Reveal";
import { links } from "@/lib/site";

export const metadata: Metadata = {
  title: "Menu | Crzookie, Huntington Beach, CA",
  description:
    "Fresh-baked cookies, handcrafted ice cream, and dirty sodas, made in-house daily in Huntington Beach. Order on Uber Eats or DoorDash.",
};

type Item = { name: string; tags?: { label: string; tone: "diet" | "pct" }[] };

const cookies: Item[] = [
  { name: "Decadent Celebration" },
  { name: "Reese's Peanut Butter Chunk" },
  { name: "S'mores" },
  { name: "Sugar Crystal" },
  { name: "Vanilla Chip Macadamia Nut" },
  { name: "Cookies & Cream Decadent" },
  { name: "Triple Chocolate Chip" },
  { name: "Salted Caramel Cookie" },
  { name: "Gluten-Free Chocolate Chip", tags: [{ label: "GF", tone: "diet" }] },
  { name: "Gluten-Free Snickerdoodle", tags: [{ label: "GF", tone: "diet" }] },
  { name: "Vegan Chocolate Chip", tags: [{ label: "Vegan", tone: "diet" }] },
];

const iceCream: Item[] = [
  { name: "Vanilla", tags: [{ label: "16%", tone: "pct" }] },
  { name: "Chocolate", tags: [{ label: "16%", tone: "pct" }] },
  { name: "Strawberry", tags: [{ label: "16%", tone: "pct" }] },
  { name: "Birthday Cake" },
  { name: "Chocolate Peanut Butter Swirl" },
  { name: "Kitty Kitty Bang Bang" },
  { name: "Vanilla Oreo Oat", tags: [{ label: "Dairy-Free", tone: "diet" }] },
  { name: "Munchy Madness" },
  { name: "Mint Chip" },
  { name: "Cinnamon Swirl" },
  { name: "Dubai Chocolate" },
  { name: "Sea Salt Caramel Truffle" },
  { name: "Dulce de Leche" },
  { name: "Mango" },
  { name: "Cookie Monster" },
  { name: "Piña Colada" },
];

const dirtySodas: { name: string; desc: string }[] = [
  { name: "Vanilla Pop", desc: "Draft Cola, Vanilla Syrup, Half & Half" },
  { name: "Floatin' Dirty", desc: "Root Beer, Vanilla Syrup, Half & Half" },
  { name: "Ginger Snap", desc: "Ginger Ale, Vanilla Syrup, Half & Half" },
  { name: "Stormy Lemon", desc: "Starry Lemon Lime, Vanilla Syrup, Half & Half" },
  { name: "Zero Chill", desc: "Zero Sugar Draft Cola, Cherry Syrup, Half & Half" },
  { name: "Island Vibes", desc: "Pineapple Cream Soda, Coconut Syrup, Coconut Cream" },
  { name: "Tropic Thunder", desc: "Starry Lemon Lime, Coconut Syrup, Coconut Cream" },
  { name: "Pineapple Whip", desc: "Pineapple Cream Soda, Vanilla Syrup, Coconut Cream" },
  { name: "Cherry Drip", desc: "Dr Pepper, Cherry Syrup, Coconut Syrup, Half & Half" },
  { name: "Sunset Drizzle", desc: "Dr Pepper, Cherry Syrup, Coconut Syrup, Coconut Cream" },
  { name: "Tropic Kick", desc: "Zero Sugar Red Bull, Coconut Syrup, Coconut Cream" },
  { name: "Red Rush", desc: "Red Bull, Cherry Syrup, Coconut Cream" },
  { name: "Shirley Buzz", desc: "Red Bull, Grenadine, Half & Half" },
  { name: "Cream Fuel", desc: "Red Bull, Vanilla Syrup, Half & Half" },
  { name: "Cherry Glow", desc: "Zero Sugar Draft Cola, Grenadine, Half & Half" },
];

function Tag({ label, tone }: { label: string; tone: "diet" | "pct" }) {
  const tones = {
    diet: "bg-pink/20 text-pink-dark",
    pct: "bg-blue/10 text-blue",
  };
  return (
    <span
      className={`shrink-0 rounded-full px-2 py-0.5 font-body text-[10px] font-semibold uppercase tracking-wide ${tones[tone]}`}
    >
      {label}
    </span>
  );
}

function FlavorGrid({ items }: { items: Item[] }) {
  return (
    <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <li
          key={item.name}
          className="flex items-center justify-between gap-3 rounded-2xl bg-white px-5 py-4 shadow-card"
        >
          <span className="font-display text-lg font-semibold leading-tight text-ink">
            {item.name}
          </span>
          {item.tags && (
            <span className="flex gap-1.5">
              {item.tags.map((t) => (
                <Tag key={t.label} label={t.label} tone={t.tone} />
              ))}
            </span>
          )}
        </li>
      ))}
    </ul>
  );
}

export default function MenuPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-white px-6 pb-14 pt-36 text-center">
        <Reveal className="mx-auto max-w-3xl">
          <SectionEyebrow>The Menu</SectionEyebrow>
          <h1 className="mt-3 font-display text-[clamp(2.5rem,6vw,4rem)] text-ink">
            What We&apos;re Serving
          </h1>
          <p className="mx-auto mt-5 max-w-2xl font-body leading-relaxed text-ink-mid">
            Cookies baked fresh all day, handcrafted ice cream, and our
            signature dirty sodas, all made in-house daily. Order for delivery
            below, or come see us in Huntington Beach.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button href={links.uberEats} variant="primary" size="lg" external>
              Order on Uber Eats
            </Button>
            <Button href={links.doorDash} variant="pink" size="lg" external>
              Order on DoorDash
            </Button>
          </div>
        </Reveal>
      </section>

      {/* Cookies */}
      <section className="bg-offwhite py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal className="mb-10 text-center">
            <SectionEyebrow>Baked Fresh All Day</SectionEyebrow>
            <h2 className="mt-2 font-display text-[clamp(2rem,4vw,2.75rem)] text-ink">
              Cookies
            </h2>
            <p className="mx-auto mt-3 max-w-xl font-body text-sm text-ink-mid">
              Thick, chewy, and baked to order in rotating flavors. Best eaten
              warm.
            </p>
          </Reveal>
          <Reveal>
            <FlavorGrid items={cookies} />
          </Reveal>
        </div>
      </section>

      {/* Ice Cream */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal className="mb-10 text-center">
            <SectionEyebrow>Handcrafted Scoops</SectionEyebrow>
            <h2 className="mt-2 font-display text-[clamp(2rem,4vw,2.75rem)] text-ink">
              Ice Cream
            </h2>
            <p className="mx-auto mt-3 max-w-xl font-body text-sm text-ink-mid">
              House-made flavors, classic scoops, and creative combinations,
              including dairy-free options.
            </p>
          </Reveal>
          <Reveal>
            <FlavorGrid items={iceCream} />
          </Reveal>
          <p className="mt-6 text-center font-body text-xs text-ink-mid">
            <span className="font-semibold text-blue">16%</span> = extra-creamy
            16% butterfat · <span className="font-semibold text-pink-dark">Dairy-Free</span> = oat-milk based
          </p>
        </div>
      </section>

      {/* Dirty Sodas */}
      <section className="bg-offwhite py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal className="mb-10 text-center">
            <SectionEyebrow>The HB Way to Cool Down</SectionEyebrow>
            <h2 className="mt-2 font-display text-[clamp(2rem,4vw,2.75rem)] text-ink">
              Dirty Sodas
            </h2>
            <p className="mx-auto mt-3 max-w-xl font-body text-sm text-ink-mid">
              Your favorite sodas leveled up with syrups and cream.
            </p>
          </Reveal>
          <Reveal>
            <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {dirtySodas.map((soda) => (
                <li
                  key={soda.name}
                  className="rounded-2xl bg-white p-5 shadow-card"
                >
                  <h3 className="font-display text-xl font-semibold text-ink">
                    {soda.name}
                  </h3>
                  <p className="mt-1 font-body text-sm text-ink-mid">
                    {soda.desc}
                  </p>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* Milkshakes */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <Reveal>
            <SectionEyebrow>Hand-Spun</SectionEyebrow>
            <h2 className="mt-2 font-display text-[clamp(2rem,4vw,2.75rem)] text-ink">
              Milkshakes
            </h2>
            <p className="mx-auto mt-4 max-w-xl font-body leading-relaxed text-ink-mid">
              Thick, hand-spun shakes made with any of our ice cream flavors.
              Ask the team to build yours.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Bottom order CTA */}
      <section className="bg-blue py-16 text-center text-white">
        <div className="mx-auto max-w-2xl px-6">
          <Reveal>
            <h2 className="font-display text-[clamp(1.75rem,4vw,2.5rem)]">
              Ready to order?
            </h2>
            <p className="mt-3 font-body text-white/90">
              Get it delivered, or swing by the shop in Huntington Beach.
            </p>
            <div className="mt-7 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button href={links.uberEats} variant="white" size="lg" external>
                Order on Uber Eats
              </Button>
              <Button href={links.doorDash} variant="secondary" size="lg" external>
                Order on DoorDash
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
