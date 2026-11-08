import type { Metadata, Viewport } from "next";
import "@fontsource-variable/inter";
import "@fontsource-variable/sora";
import "@fontsource-variable/noto-sans-bengali";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { NoFlashScript, Providers } from "@/components/providers";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "ReadyMynd | Textile DPP Readiness & Digital Advisory",
    template: "%s | ReadyMynd",
  },
  description:
    "ReadyMynd is a Bangladesh-based professional service initiative helping textile and apparel manufacturers understand their digital readiness for emerging EU Textile Digital Product Passport (DPP) expectations. Software-enabled. Analyst-led. Evidence-based.",
  keywords: [
    "Textile DPP",
    "Digital Product Passport",
    "EU ESPR",
    "Bangladesh RMG",
    "digital readiness assessment",
    "textile traceability",
    "apparel manufacturing Bangladesh",
  ],
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  publisher: site.name,
  alternates: { canonical: "/", languages: { en: "/", bn: "/" } },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: site.url,
    siteName: site.name,
    title: "ReadyMynd | Textile DPP Readiness & Digital Advisory",
    description:
      "Know your digital readiness before deciding what comes next. Structured Textile DPP Digital Readiness Assessment for Bangladesh textile and apparel manufacturers.",
    images: [
      {
        url: "/images/generated/og-cover.jpg",
        width: 1600,
        height: 630,
        alt: "ReadyMynd — Textile DPP Readiness & Digital Advisory",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ReadyMynd | Textile DPP Readiness & Digital Advisory",
    description:
      "Know your digital readiness before deciding what comes next. Structured Textile DPP Digital Readiness Assessment for Bangladesh manufacturers.",
    images: ["/images/generated/og-cover.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "technology",
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#070b13" },
  ],
  width: "device-width",
  initialScale: 1,
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "ReadyMynd",
  description:
    "Bangladesh-based professional service initiative providing Textile DPP Digital Readiness Assessment and Digital Advisory Services for textile and apparel manufacturers.",
  url: site.url,
  email: site.email,
  telephone: site.phone,
  areaServed: { "@type": "Country", name: "Bangladesh" },
  address: {
    "@type": "PostalAddress",
    streetAddress: "House: 33, Road 15, Sector 11, Uttara",
    addressLocality: "Dhaka",
    postalCode: "1230",
    addressCountry: "BD",
  },
  serviceType: [
    "Textile DPP Digital Readiness Assessment",
    "Digital Advisory Services",
    "Product data readiness evaluation",
  ],
  knowsAbout: [
    "EU Ecodesign for Sustainable Products Regulation (ESPR)",
    "Digital Product Passport",
    "Textile supply chain traceability",
    "Product data management",
  ],
  slogan: site.positioning,
  sameAs: [],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-dvh bg-surface font-sans antialiased">
        <NoFlashScript />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-ink focus:px-4 focus:py-2 focus:text-sm focus:text-white"
        >
          Skip to content
        </a>
        <Providers>
          <Header />
          <main id="main">{children}</main>
          <Footer />
        </Providers>
        <noscript>
          {/* Scroll-reveal is opt-in via JS; keep content visible without it. */}
          <style>{`[data-reveal]{opacity:1 !important;transform:none !important;}`}</style>
        </noscript>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
        />
      </body>
    </html>
  );
}
