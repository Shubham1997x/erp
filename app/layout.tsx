import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Rajdhani ERP - Weaving Operational Excellence | Carpet Manufacturing ERP",
  description:
    "Transform your carpet manufacturing operations with Rajdhani ERP. Complete ERP solution for weaving, inventory, production, sales, accounting, and more. Streamline operations and boost productivity.",
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
  authors: [{ name: "Rajdhani ERP" }],
  openGraph: {
    title: "Rajdhani ERP - Weaving Operational Excellence",
    description:
      "Complete ERP solution for carpet manufacturing operations. Streamline production, manage inventory, and scale your business.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rajdhani ERP - Weaving Operational Excellence",
    description:
      "Complete ERP solution for carpet manufacturing operations.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body className="antialiased font-sans">
        {children}
      </body>
    </html>
  );
}
