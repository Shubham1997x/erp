import type { Metadata } from "next";
import { Space_Grotesk, Playfair_Display } from "next/font/google";
import { ErrorBoundary } from "@/components/error-boundary";
import { ToastProvider } from "@/components/ui/toast";
import { StructuredData } from "@/components/structured-data";
import { Analytics } from "@/components/analytics";
import { siteConfig } from "@/lib/config";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-grotesk",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: "Carpet ERP by Wantace - Weaving Operational Excellence | Carpet Manufacturing ERP",
  description:
    "Transform your carpet manufacturing operations with Carpet ERP by Wantace. Complete ERP solution for weaving, inventory, production, sales, accounting, and more. Streamline operations and boost productivity.",
  keywords: [
    "ERP",
    "Carpet Manufacturing",
    "Weaving ERP",
    "Production Management",
    "Inventory Management",
    "Textile ERP",
    "Manufacturing Software",
    "Business Management",
  ],
  authors: [{ name: "Carpet ERP by Wantace" }],
  creator: "Wantace",
  publisher: "Wantace",
  icons: {
    icon: "/logo.svg",
    shortcut: "/logo.svg",
    apple: "/logo.svg",
  },
  openGraph: {
    title: "Carpet ERP by Wantace - Weaving Operational Excellence",
    description:
      "Complete ERP solution for carpet manufacturing operations. Streamline production, manage inventory, and scale your business.",
    url: siteConfig.url,
    siteName: siteConfig.name,
    type: "website",
    locale: "en_US",
    images: [
      {
        url: `${siteConfig.url}/images/dashboard.png`,
        width: 1200,
        height: 630,
        alt: "Carpet ERP Dashboard",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Carpet ERP by Wantace - Weaving Operational Excellence",
    description:
      "Complete ERP solution for carpet manufacturing operations.",
    images: [`${siteConfig.url}/images/dashboard.png`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: siteConfig.url,
  },
  verification: {
    // Add your verification codes when available
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
    // yahoo: "your-yahoo-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${playfairDisplay.variable}`}>
      <body className="antialiased font-sans" suppressHydrationWarning>
        <StructuredData />
        <Analytics />
        <ErrorBoundary>
          <ToastProvider>
            {children}
          </ToastProvider>
        </ErrorBoundary>
      </body>
    </html>
  );
}
