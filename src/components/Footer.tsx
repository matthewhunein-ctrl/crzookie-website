import Link from "next/link";
import Image from "next/image";
import { links, business, hours, nav } from "@/lib/site";

const ext = { target: "_blank", rel: "noopener noreferrer" } as const;

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8">
        <div className="grid gap-12 md:grid-cols-[1.2fr_1fr_1fr]">
          {/* Brand + visit */}
          <div>
            <Image
              src="/logo.png"
              alt="Crzookie"
              width={170}
              height={54}
              className="h-12 w-auto"
            />
            <h3 className="mt-6 font-display text-lg text-pink">Visit Us</h3>
            <address className="mt-3 space-y-1 font-body text-sm not-italic text-white/80">
              <p>{business.addressLine1}</p>
              <p>{business.addressLine2}</p>
              <p>
                <a className="hover:text-white" href={business.phoneHref}>
                  {business.phone}
                </a>
              </p>
              <p>
                <a className="hover:text-white" href={`mailto:${business.email}`}>
                  {business.email}
                </a>
              </p>
            </address>
            <ul className="mt-4 space-y-0.5 font-body text-sm text-white/60">
              {hours.map((h) => (
                <li key={h.days}>
                  <span className="text-white/80">{h.days}:</span> {h.time}
                </li>
              ))}
            </ul>
          </div>

          {/* Order */}
          <div>
            <h3 className="font-display text-lg text-pink">Order</h3>
            <ul className="mt-4 space-y-3 font-body text-sm text-white/80">
              <li>
                <a className="hover:text-white" href={links.doorDash} {...ext}>
                  DoorDash
                </a>
              </li>
              <li>
                <a className="hover:text-white" href={links.uberEats} {...ext}>
                  Uber Eats
                </a>
              </li>
            </ul>
          </div>

          {/* Explore */}
          <div>
            <h3 className="font-display text-lg text-pink">Explore</h3>
            <ul className="mt-4 space-y-3 font-body text-sm text-white/80">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link className="hover:text-white" href={item.href}>
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <a className="hover:text-white" href={links.toastRewards} {...ext}>
                  Join Rewards
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 border-t border-white/10 pt-6 text-center font-body text-xs text-white/50">
          © 2025 Crzookie. Huntington Beach, CA.
        </div>
      </div>
    </footer>
  );
}
