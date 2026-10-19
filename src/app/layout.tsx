import type { Metadata } from "next";
import { useEffect, useState } from "react";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BinSense - Smart Bins. Smarter Cities.",
  description:
    "BinSense is an intelligent IoT device that tracks garbage levels in real time and helps build cleaner, smarter and more sustainable communities.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay; replace with actual loading logic if needed
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      {loading && (
        <div id="loader" className="fixed inset-0 flex items-center justify-center bg-[#050505] z-50">
          <div className="spinner"></div>
        </div>
      )}
      <body className="min-h-full flex flex-col bg-[#050505]">{children}</body>
    </html>
  );
}
