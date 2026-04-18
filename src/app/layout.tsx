/** @format */

import type { Metadata } from "next";
import { Plus_Jakarta_Sans, DM_Sans } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
// These styles apply to every route in the application
import "./globals.css";

const mainFont = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-main",
});

const bodyFont = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "Feelsuegood's Portfolio",
  description: "The collection of Feelsuegood's personal projects",
  icons: "/favicon.ico",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${mainFont.variable} ${bodyFont.variable} bg-background text-foreground px-8 py-10 antialiased md:px-20 md:py-20`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
