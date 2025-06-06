import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// Google fontlar
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Metadata (favicon + SEO uchun)
export const metadata = {
  title: "Freva",
  description:
    "Freva — Figma dizayn, frontend va veb xizmatlarda tayyorlangan loyihalar va zakaz uchun portfoliolar platformasi.",
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/logo.svg", type: "image/svg+xml" }, // vector version
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Structured data: Google uchun sayt logosi */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Freva",
              url: "https://your-domain.com", // bu yerga o‘z domeningizni yozing
              logo: "https://your-domain.com/logo.png", // logo to‘liq URL bilan
            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
