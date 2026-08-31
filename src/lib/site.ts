// Single source of truth for all external links + business info.
// Hardcoded exactly as provided in the brand brief.

export const links = {
  toastOrder:
    "https://order.toasttab.com/online/cookie-creamery-20972-magnolia-st",
  toastRewards:
    "https://www.toasttab.com/cookie-creamery-20972-magnolia-st/rewardsSignup",
  uberEats:
    "https://www.ubereats.com/store/crzookie-20972-magnolia-st/jdqZ73NPVLSsFFboox3PyA?diningMode=DELIVERY&sc=SEARCH_SUGGESTION",
  doorDash:
    "https://www.doordash.com/store/crzookie-cookies-&-ice-cream-huntington-beach-34448101/81534369/?event_type=autocomplete&pickup=false",
  laTimes:
    "https://www.latimes.com/socal/daily-pilot/news/story/2025-04-11/success-tastes-sweet-for-huntington-beach-teen-running-dessert-shop",
  instagram: "https://www.instagram.com/crzookie/",
  tiktok: "https://www.tiktok.com/@crzookie",
} as const;

export const business = {
  name: "Crzookie",
  address: "20972 Magnolia St, Huntington Beach, CA 92646",
  addressLine1: "20972 Magnolia St",
  addressLine2: "Huntington Beach, CA 92646",
  phone: "(714) 594-3083",
  phoneHref: "tel:+17145943083",
  email: "info@crzookie.com",
  city: "Huntington Beach, CA",
  mapsEmbed:
    "https://www.google.com/maps?q=20972+Magnolia+St,+Huntington+Beach,+CA+92646&output=embed",
} as const;

export const hours = [
  { days: "Mon – Thu", time: "12pm – 10pm" },
  { days: "Fri – Sat", time: "12pm – 11pm" },
  { days: "Sun", time: "12pm – 10pm" },
] as const;

export const formspreeEndpoint = "https://formspree.io/f/xbdvznwy";

export const nav = [
  { label: "Home", href: "/" },
  { label: "Menu", href: "/menu" },
  { label: "Our Story", href: "/our-story" },
  { label: "Contact", href: "/contact" },
] as const;
