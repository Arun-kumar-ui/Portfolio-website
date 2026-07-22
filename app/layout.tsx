import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://arunkumar-ns-portfolio.openai.site"),
  title: {
    default: "Arunkumar NS — Senior UI/UX Designer",
    template: "%s — Arunkumar NS",
  },
  description:
    "Portfolio of Arunkumar NS, a Senior UI/UX Designer with 10 years of experience creating accessible enterprise web and mobile products.",
  keywords: [
    "Arunkumar NS",
    "UI UX Designer",
    "Product Designer",
    "Creative QA",
    "Design Systems",
    "Chennai",
  ],
  openGraph: {
    title: "Arunkumar NS — Senior UI/UX Designer",
    description: "Designing clear, useful and inclusive digital products.",
    type: "website",
    images: ["/images/arunkumar.webp"],
  },
  other: { "codex-preview": "development" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
