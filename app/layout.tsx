import type { Metadata } from "next";
// import localFont from "next/font/local";
// import { Inter } from "next/font/google";
import { ConvexClientProvider } from "@/ConvexClientProvider";
import { Toaster } from "@/components/ui/toaster";
import { viVN } from "@clerk/localizations";
import { ClerkProvider } from "@clerk/nextjs";
import { RootProvider } from "fumadocs-ui/provider";
import { ReactLenis } from "lenis/react";
import { monaSans } from "./fonts";

import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

export const metadata: Metadata = {
  title: "Coeus - Nền tảng học Trực tuyến và Trực tiếp.",
  description:
    "Nền tảng học trực tuyến và trực tiếp với nhiều chức năng, Coeus là nền tảng giúp học sinh và giáo viên học tập và giảng dạy tốt nhất trong thời đại 4.0.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider localization={viVN}>
      <ConvexClientProvider>
        <ReactLenis root>
          <html lang="en" suppressHydrationWarning>
            <body className={`${monaSans.className} antialiased`}>
              <div className="hidden" id="OPENME">
                Trang web này được build trên framework NextJS, nhà sáng lập của
                trang web này là Phạm Đăng Khoa.
              </div>
              <ThemeProvider attribute="class" defaultTheme="light">
                <Toaster />
                <RootProvider>{children}</RootProvider>
              </ThemeProvider>
            </body>
          </html>
        </ReactLenis>
      </ConvexClientProvider>
    </ClerkProvider>
  );
}
