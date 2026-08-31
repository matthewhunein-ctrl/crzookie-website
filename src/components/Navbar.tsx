"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { links, nav } from "@/lib/site";

export default function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Solid (white) when scrolled, when menu open, or on any non-home page.
  const solid = scrolled || menuOpen || !isHome;

  const linkColor = solid ? "text-ink hover:text-blue" : "text-white/90 hover:text-white";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ease-[cubic-bezier(0.25,0.1,0.25,1)] ${
        solid ? "bg-white/95 shadow-card backdrop-blur-sm" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 sm:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center" aria-label="Crzookie home">
          <Image
            src="/logo.png"
            alt="Crzookie"
            width={150}
            height={48}
            priority
            className="h-11 w-auto drop-shadow-sm"
          />
        </Link>

        {/* Desktop links */}
        <div className="hidden items-center gap-8 md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`font-body text-sm font-medium transition-colors ${linkColor} ${
                pathname === item.href ? "underline decoration-pink decoration-2 underline-offset-8" : ""
              }`}
            >
              {item.label}
            </Link>
          ))}
          <a
            href={links.uberEats}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-pink px-5 py-2.5 font-body text-sm font-medium text-white shadow-card transition-all duration-300 hover:bg-pink-dark hover:-translate-y-0.5"
          >
            Order Now
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setMenuOpen((v) => !v)}
          className="md:hidden"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <svg
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke={solid ? "#2d2d2d" : "#ffffff"}
            strokeWidth="2"
            strokeLinecap="round"
          >
            {menuOpen ? (
              <>
                <line x1="6" y1="6" x2="18" y2="18" />
                <line x1="6" y1="18" x2="18" y2="6" />
              </>
            ) : (
              <>
                <line x1="4" y1="7" x2="20" y2="7" />
                <line x1="4" y1="12" x2="20" y2="12" />
                <line x1="4" y1="17" x2="20" y2="17" />
              </>
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="border-t border-line/60 bg-white px-5 pb-6 pt-2 md:hidden">
          <div className="flex flex-col gap-1">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-xl px-3 py-3 font-body text-base font-medium text-ink hover:bg-offwhite"
              >
                {item.label}
              </Link>
            ))}
            <a
              href={links.uberEats}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
              className="mt-2 rounded-full bg-pink px-5 py-3 text-center font-body text-base font-medium text-white shadow-card"
            >
              Order Now
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
