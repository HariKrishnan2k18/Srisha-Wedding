import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://harivarmaa-weds-srisha.netlify.app"),
  alternates: { canonical: "/" },
  title: "Srisha & Harivarmaa | Wedding Invitation",
  description:
    "With the blessings of the Almighty, we joyfully invite you to the wedding of Srisha G.R. and Harivarmaa G.S. on 20 November 2026 at Sri Padmavathi Kalyana Mantapam, Rajarajeshwari Nagar, Bangalore.",
  authors: [{ name: "Srisha & Harivarmaa" }],
  openGraph: {
    url: "https://harivarmaa-weds-srisha.netlify.app/",
    type: "website",
    title: "Wedding Invitation | Srisha & Harivarmaa | 20 November 2026",
    description:
      "Join us to celebrate the wedding of Srisha G.R. and Harivarmaa G.S. on 20 November 2026 at Sri Padmavathi Kalyana Mantapam, Rajarajeshwari Nagar, Bangalore.",
    siteName: "Wedding Invitation | Srisha & Harivarmaa",
    images: [
      {
        url: "https://harivarmaa-weds-srisha.netlify.app/wedding-preview.jpg",
        secureUrl: "https://harivarmaa-weds-srisha.netlify.app/wedding-preview.jpg",
        width: 512,
        height: 909,
        alt: "Srisha & Harivarmaa Wedding Invitation - 20 November 2026",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Wedding Invitation | Srisha & Harivarmaa | 20 November 2026",
    description:
      "Join us to celebrate the wedding of Srisha G.R. and Harivarmaa G.S. on 20 November 2026 at Sri Padmavathi Kalyana Mantapam, Rajarajeshwari Nagar, Bangalore.",
    images: ["https://harivarmaa-weds-srisha.netlify.app/wedding-preview.jpg"],
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
