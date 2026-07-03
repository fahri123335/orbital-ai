import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Orbital AI",
  description: "Next-Gen Chat Assistant",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
