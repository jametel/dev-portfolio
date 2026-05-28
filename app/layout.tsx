import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import ResponsiveNav from "@/components/Home/Navbar/ResponsiveNav";

<html className="scroll-smooth"></html>

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-gt-sans",
});

export const metadata: Metadata = {
  title: "James Behre Portfolio",
  description: "Portfolio website of James Behre",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${spaceGrotesk.className} h-full antialiased`}>
        <ResponsiveNav />
        {children}
      </body>
    </html>
  );
}
