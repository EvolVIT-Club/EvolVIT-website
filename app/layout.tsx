import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/components/ThemeProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "EvolVIT — Evolving Ideas into Innovation",
  description:
    "EvolVIT is a student-driven tech community at VIT focused to bridge the gap between students and the tech industry. Join us to build, learn, and grow.",
  keywords: ["EvolVIT", "VIT", "tech club", "development", "innovation", "real-world expeirence", "student community"],
  openGraph: {
    title: "EvolVIT — Evolving Ideas into Innovation",
    description:
      "A student-driven tech community focused to bridge the gap between students and the tech industry by providing the real-world exposure and hands-on experience.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.variable}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
