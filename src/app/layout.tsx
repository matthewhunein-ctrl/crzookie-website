import type { Metadata, Viewport } from "next";
import { Archivo, Archivo_Narrow } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GoogleAnalytics from "@/components/GoogleAnalytics";

// Display: condensed geometric grotesque for big headlines (Obviously Narrow vibe).
const archivoNarrow = Archivo_Narrow({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-archivo-narrow",
  display: "swap",
});

// Body: clean geometric grotesque (Obviously vibe).
const archivo = Archivo({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-archivo",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Crzookie | Cookies & Ice Cream, Huntington Beach, CA",
  description:
    "Freshly baked cookies, handcrafted ice cream, dirty sodas, and hand-spun milkshakes, made daily in Huntington Beach, CA.",
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    title: "Crzookie | Cookies & Ice Cream, Huntington Beach, CA",
    description:
      "Warm cookies, cold scoops, dirty sodas, and hand-spun milkshakes, made daily in Huntington Beach.",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#6b9fd4",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${archivoNarrow.variable} ${archivo.variable}`}>
      <body className="antialiased">
        <GoogleAnalytics />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
