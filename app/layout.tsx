import type { Metadata } from "next";
import { Inter } from "next/font/google";
// providers
import { ThemeProvider } from "@/components/providers/theme-provider";
// components
import MyDock from "@/components/my-dock";
import NprogressProvider from "@/components/providers/nprogress-provider";
// utils
import { cn } from "@/lib/utils";


import "./globals.css";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Course Recommender",
  description: "找到最适合你的学习方式",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(inter.className, "w-screen h-screen flex flex-col items-center")}
      >
        <NprogressProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
          >
            {children}
            <MyDock />
          </ThemeProvider>
        </NprogressProvider>
      </body>
    </html>
  );
}
