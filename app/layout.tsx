import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://aully-fit.co.uk"),
  title: {
    default: "Aully Fit",
    template: "%s | Aully Fit",
  },
  description:
    "Aully Fit helps users preview upper-body outfits from a photo and compare the result with a live camera overlay.",
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
