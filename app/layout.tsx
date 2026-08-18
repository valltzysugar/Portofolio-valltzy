import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "VallTzy — Portfolio",
  description: "Personal portfolio of VallTzy",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
