import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://aully-fit.co.uk"),
  title: {
    default: "Aully Fit",
    template: "%s | Aully Fit",
  },
  description:
    "Aully Fit privacy policy, terms of service, and fit preview service information.",
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
