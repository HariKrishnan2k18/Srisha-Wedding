import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Srisha & Harivarmaa | Wedding Invitation",
  description:
    "With the blessings of the Almighty, we joyfully invite you to the wedding of Srisha G.R. and Harivarmaa G.S. on 20 November 2026 at Sri Padmavathi Kalyana Mantapam, Rajarajeshwari Nagar, Bangalore.",
  authors: [{ name: "Srisha & Harivarmaa" }],
  openGraph: {
    type: "website",
    title: "Wedding Invitation | Srisha & Harivarmaa | 20 November 2026",
    description:
      "Join us to celebrate the wedding of Srisha G.R. and Harivarmaa G.S. on 20 November 2026 at Sri Padmavathi Kalyana Mantapam, Rajarajeshwari Nagar, Bangalore.",
    siteName: "Wedding Invitation | Srisha & Harivarmaa",
    images: [
      {
        url: "/opengraph-image.png",
        secureUrl: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Srisha & Harivarmaa Wedding Invitation - 20 November 2026",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Wedding Invitation | Srisha & Harivarmaa | 20 November 2026",
    description:
      "Join us to celebrate the wedding of Srisha G.R. and Harivarmaa G.S. on 20 November 2026 at Sri Padmavathi Kalyana Mantapam, Rajarajeshwari Nagar, Bangalore.",
    images: ["/opengraph-image.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/favicon.png" type="image/png" />
      </head>
      <body>{children}</body>
    </html>
  );
}
