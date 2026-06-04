import "@/styles/globals.css";
import { cn } from "@/lib/utils";

import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import { RootProviderWrapper } from "@/components/wrapper-root-provider";
import { Analytics } from "@vercel/analytics/next";
import { Toaster } from "@/components/ui/sonner";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Axis Buddy Revamped",
  description: "Revamped version of Axis Buddy",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        "h-full",
        "antialiased",
        geistSans.variable,
        geistMono.variable,
        "font-sans",
        inter.variable,
      )}
    >
      <body>
        <RootProviderWrapper>
          {children}
          <Analytics />
          <SpeedInsights />
          <Toaster richColors />
        </RootProviderWrapper>
      </body>
    </html>
  );
}
