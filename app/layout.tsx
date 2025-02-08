import type { Metadata } from "next";
// import localFont from "next/font/local";
// import { Inter } from "next/font/google";
import { Be_Vietnam_Pro } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { ConvexClientProvider } from "@/ConvexClientProvider";
import { viVN } from "@clerk/localizations";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/pages/NavBar";

// const inter = Inter({ subsets: ["latin"] });
const inter = Be_Vietnam_Pro({ subsets: ["latin-ext"], weight: ["500"]});

export const metadata: Metadata = {
  title: "Coeus - Nền tảng học Trực tuyến và Trực tiếp.",
  description: "Nền tảng học trực tuyến và trực tiếp với nhiều chức năng, Coeus là nền tảng giúp học sinh và giáo viên học tập và giảng dạy tốt nhất trong thời đại 4.0.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider localization={viVN}>
      <ConvexClientProvider>
        <html lang="en" suppressHydrationWarning>
          <body className={`${inter.className} antialiased`}>
            {/* <ThemeProvider attribute="class" defaultTheme="system" enableSystem> */}
              <Navbar></Navbar>
              <Toaster />
              {children}
            {/* </ThemeProvider> */}
          </body>
        </html>
      </ConvexClientProvider>
    </ClerkProvider>
  );
}
