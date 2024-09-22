import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Framed Whispers",
  description: "Shop for art prints, posters, and more.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <main className="flex min-h-screen flex-col justify-start">
          {/* <Header /> */}
          {children}
        </main>
        {/* <Footer /> */}
      </body>
    </html>
  );
}
