"use client";

import { useState } from "react";
import { formspreeEndpoint } from "@/lib/site";

type Status = "idle" | "submitting" | "success" | "error";

const fieldBase =
  "w-full rounded-xl border border-line bg-white px-4 py-3 font-body text-sm text-ink placeholder:text-ink-mid/70 focus:border-blue focus:outline-none focus:ring-2 focus:ring-blue/30";
const labelBase = "mb-1.5 block font-body text-sm font-medium text-blue-dark";

export default function CateringForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("submitting");
    try {
      const res = await fetch(formspreeEndpoint, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-[var(--radius-card)] bg-white p-10 text-center shadow-pop">
        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-blue/10">
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#6b9fd4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 6 9 17l-5-5" />
          </svg>
        </div>
        <h3 className="font-display text-2xl text-ink">Thanks, we got it!</h3>
        <p className="mx-auto mt-2 max-w-sm font-body text-sm text-ink-mid">
          We&apos;ll get back to you within 24 hours about bringing Crzookie to your event.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-[var(--radius-card)] bg-white p-7 shadow-pop sm:p-9"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className={labelBase} htmlFor="name">Name</label>
          <input id="name" name="name" type="text" required className={fieldBase} placeholder="Your name" />
        </div>
        <div>
          <label className={labelBase} htmlFor="email">Email</label>
          <input id="email" name="email" type="email" required className={fieldBase} placeholder="you@email.com" />
        </div>
        <div>
          <label className={labelBase} htmlFor="phone">Phone</label>
          <input id="phone" name="phone" type="tel" className={fieldBase} placeholder="(714) 000-0000" />
        </div>
        <div>
          <label className={labelBase} htmlFor="event-date">Event Date</label>
          <input id="event-date" name="event_date" type="date" className={fieldBase} />
        </div>
        <div>
          <label className={labelBase} htmlFor="event-type">Event Type</label>
          <select id="event-type" name="event_type" className={fieldBase} defaultValue="">
            <option value="" disabled>Select one</option>
            <option>Corporate</option>
            <option>Wedding</option>
            <option>Birthday</option>
            <option>Other</option>
          </select>
        </div>
        <div>
          <label className={labelBase} htmlFor="guests">Guest Count</label>
          <input id="guests" name="guest_count" type="number" min="1" className={fieldBase} placeholder="50" />
        </div>
      </div>

      <div className="mt-5">
        <label className={labelBase} htmlFor="notes">Additional Notes</label>
        <textarea id="notes" name="notes" rows={4} className={fieldBase} placeholder="Tell us about your event…" />
      </div>

      {status === "error" && (
        <p className="mt-4 font-body text-sm text-pink-dark">
          Something went wrong. Please try again or email {`info@crzookie.com`}.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-pink px-8 py-4 font-body font-medium text-white shadow-card transition-all duration-300 hover:bg-pink-dark hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
      >
        {status === "submitting" ? "Sending…" : "Send Inquiry"}
      </button>
    </form>
  );
}
