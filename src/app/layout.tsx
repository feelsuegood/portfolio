import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import { Plus_Jakarta_Sans, DM_Sans } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
// These styles apply to every route in the application
import "./globals.css";
import { Pointer } from "@/components/magicui/pointer";

// Fonts
//TODO: change that suits the design
// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

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
          <Pointer>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="12" cy="12" r="10" className="fill-primary" />
              <circle cx="12" cy="12" r="5" className="fill-background" />
            </svg>
          </Pointer>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
