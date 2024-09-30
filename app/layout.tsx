"use client";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { RouteChangeListener } from "./provider/router-change-listener";

declare global {
  interface Window {
    amplitude: any;
  }
}

// const inter = Inter({ subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <main className="flex min-h-screen flex-col justify-start">
          <RouteChangeListener />
          <Header />
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
