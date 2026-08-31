import type { Metadata } from "next";
import SectionEyebrow from "@/components/SectionEyebrow";
import Reveal from "@/components/Reveal";
import CateringForm from "@/components/CateringForm";
import { business, hours } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact & Catering | Crzookie, Huntington Beach, CA",
  description:
    "Find Crzookie at 20972 Magnolia St, Huntington Beach. Book catering for birthdays, corporate events, and weddings.",
};

export default function ContactPage() {
  return (
    <>
      {/* Find Us */}
      <section className="bg-white px-6 pb-20 pt-36">
        <div className="mx-auto max-w-6xl">
          <Reveal className="text-center">
            <SectionEyebrow>Come See Us</SectionEyebrow>
            <h1 className="mt-3 font-display text-[clamp(2.5rem,6vw,4rem)] text-ink">
              Find Crzookie
            </h1>
          </Reveal>

          <div className="mt-12 grid items-stretch gap-8 md:grid-cols-2">
            <Reveal className="h-full">
              <div className="h-full overflow-hidden rounded-[var(--radius-card)] shadow-card">
                <iframe
                  title="Crzookie location map"
                  src={business.mapsEmbed}
                  className="h-full min-h-[340px] w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>
            </Reveal>

            <Reveal delay={0.12}>
              <div className="rounded-[var(--radius-card)] bg-offwhite p-8 shadow-card">
                <ul className="space-y-5 font-body text-ink">
                  <li className="flex gap-3">
                    <span aria-hidden>📍</span>
                    <span>{business.address}</span>
                  </li>
                  <li className="flex gap-3">
                    <span aria-hidden>📞</span>
                    <a href={business.phoneHref} className="hover:text-blue">
                      {business.phone}
                    </a>
                  </li>
                  <li className="flex gap-3">
                    <span aria-hidden>✉️</span>
                    <a href={`mailto:${business.email}`} className="hover:text-blue">
                      {business.email}
                    </a>
                  </li>
                </ul>

                <div className="mt-7 border-t border-line pt-6">
                  <h2 className="font-display text-lg text-ink">Hours</h2>
                  <ul className="mt-3 space-y-1.5 font-body text-sm text-ink-mid">
                    {hours.map((h) => (
                      <li key={h.days} className="flex justify-between">
                        <span>{h.days}</span>
                        <span className="text-ink">{h.time}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Catering */}
      <section className="bg-blue py-24 text-white">
        <div className="mx-auto max-w-3xl px-6">
          <Reveal className="text-center">
            <SectionEyebrow light>Catering</SectionEyebrow>
            <h2 className="mt-3 font-display text-[clamp(2rem,4.5vw,3rem)]">
              Bring Crzookie to Your Event
            </h2>
            <p className="mx-auto mt-5 max-w-2xl font-body leading-relaxed text-white/90">
              Whether it&apos;s a birthday party, corporate event, wedding, or
              anything in between, we&apos;ll bring the warm cookies and cold
              scoops to you. Fill out the form below and we&apos;ll get back to
              you within 24 hours.
            </p>
          </Reveal>

          <Reveal delay={0.15} className="mt-10">
            <CateringForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}
