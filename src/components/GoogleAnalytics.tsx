import Script from "next/script";

// Google Analytics 4 (GA4) — loads gtag site-wide.
// GA4 "Enhanced measurement" (on by default) captures page views across
// client-side navigations automatically.
const GA_ID = "G-NZQ7ZCT69N";

export default function GoogleAnalytics() {
  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="ga-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_ID}');
        `}
      </Script>
    </>
  );
}
